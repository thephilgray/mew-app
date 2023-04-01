const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', (error) => reject(error))
        image.setAttribute('crossOrigin', 'anonymous')
        image.src = url
    })

export const getCroppedImg = async (
    imageSrc: string,
    cropData: { x: number; y: number; width: number; height: number },
): Promise<Blob> => {
    const image: HTMLImageElement = await createImage(imageSrc)
    const canvas: HTMLCanvasElement = document.createElement('canvas')
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')

    canvas.width = 600
    canvas.height = 200

    ctx?.drawImage(image, cropData.x, cropData.y, cropData.width, cropData.height, 0, 0, canvas.width, canvas.height)

    return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
            if (blob) {
                resolve(blob)
            } else {
                reject('Could not crop image.')
            }
        }, 'image/jpeg')
    })
}
