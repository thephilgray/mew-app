import { create, StoreApi, UseBoundStore } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>
  store.use = {}
  for (let k of Object.keys(store.getState())) {
    ; (store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  return store
}

interface AppState {
  isWriting: boolean,
  setIsWriting: (input: boolean) => void,
}

const useAppStoreBase = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        isWriting: false,
        setIsWriting: input => set({ isWriting: input }),
        commentContent: {},
        setCommentContent: (id) => (content) => set((state) => ({ commentContent: { ...state.commentContent, [id]: content } }))
      }),
      {
        name: 'app-storage',
      }
    )
  )
)

export const useAppStore = createSelectors(useAppStoreBase)
