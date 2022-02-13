var API;
(function (API) {
    API["V2"] = "https://api.myanimelist.net/v2";
})(API || (API = {}));
var Type;
(function (Type) {
    Type["Anime"] = "/anime";
    Type["Manga"] = "/manga";
})(Type || (Type = {}));
export { API, Type };
export default function malURL(api, endpoint, id, fields) {
    const malURL = new URL(`${api}${endpoint}/${id}`);
    if (fields)
        malURL.searchParams.set('fields', fields.join(','));
    return malURL;
}
//# sourceMappingURL=mal-url.js.map