import axios from 'axios';
import malURL, { API, Type } from './utils/mal-url.js';
import defaultFields from './utils/default-fields.js';
class MyAnimeList {
    client_id = '';
    request = (url, client_id) => axios
        .get(url.href, { headers: { 'X-MAL-CLIENT-ID': client_id } })
        .catch((error) => error);
    /**
     *
     * @description Initialize a new MAL wrapper
     * @param client_id MAL Client ID
     */
    constructor(client_id) {
        this.client_id = client_id;
    }
    /**
     * @description Default MAL fields
     */
    defaultFields = defaultFields;
    /**
     *
     * @description Get anime details
     * @param id MAL Anime ID
     * @param fields MAL Fields
     * @returns Response object
     */
    async anime(id, fields) {
        const url = malURL(API.V2, Type.Anime, id, fields);
        const { data } = await this.request(url, this.client_id);
        return data;
    }
    /**
     *
     * @description Get manga details
     * @param id MAL Manga ID
     * @param fields MAL Fields
     * @returns Response object
     */
    async manga(id, fields) {
        const url = malURL(API.V2, Type.Manga, id, fields);
        const { data } = await this.request(url, this.client_id);
        return data;
    }
}
// > test
// const mal = new MyAnimeList('9e168b44a8715fd7c1d1dd1e2c0edad6');
// console.log('anime', await mal.anime(38000));
// console.log('manga', await mal.manga(96792));
export default MyAnimeList;
//# sourceMappingURL=index.js.map