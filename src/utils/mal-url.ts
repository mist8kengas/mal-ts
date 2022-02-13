enum API {
    V2 = 'https://api.myanimelist.net/v2',
}
enum Type {
    Anime = '/anime',
    Manga = '/manga',
}

export { API, Type };
export default function malURL(
    api: API,
    endpoint: Type,
    id: string | number,
    fields?: string[]
) {
    const malURL = new URL(`${api}${endpoint}/${id}`);
    if (fields) malURL.searchParams.set('fields', fields.join(','));
    return malURL;
}
