declare enum API {
    V2 = "https://api.myanimelist.net/v2"
}
declare enum Type {
    Anime = "/anime",
    Manga = "/manga"
}
export { API, Type };
export default function malURL(api: API, endpoint: Type, id: string | number, fields?: string[]): URL;
//# sourceMappingURL=mal-url.d.ts.map