
export const getImageUrl = (name: string) => {
    return new URL(`../public/${name}.jpg`, import.meta.url).href
}
