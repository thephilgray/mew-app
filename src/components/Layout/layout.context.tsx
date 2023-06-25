import React, { SetStateAction, Dispatch, useState } from 'react'





interface LayoutState {
  drawerOpen: Boolean
  setDrawerOpen: Dispatch<SetStateAction<boolean>>
}

export const LayoutContext = React.createContext<LayoutState>({
  drawerOpen: false,
  setDrawerOpen: () => { }
})

interface LayoutProps {
  children: React.ReactNode
}

export const LayoutProvider = ({ children }: LayoutProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const value = {
    drawerOpen, setDrawerOpen
  }

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}

export function useLayout() {
  const { drawerOpen, setDrawerOpen } = React.useContext(LayoutContext)
  return [drawerOpen, setDrawerOpen]
}
