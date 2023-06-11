import type * as MAL from './types/myanimelist';
import axios, { AxiosResponse } from 'axios';

import malURL, { API, Type } from './utils/urlConstructor.js';
import defaultFields from './utils/defaultFields.js';

/**
 * @author mist8kengas
 * @version 1.1.0
 */
class MyAnimeList {
    private client_id = '';

    private async request<T extends any>(
        url: URL,
        client_id: string
    ): Promise<AxiosResponse<T>> {
        return axios
            .get<T>(url.href, {
                headers: { 'X-MAL-CLIENT-ID': client_id },
            })
            .catch((error) => error);
    }

    /**
     *
     * @constructor
     * @description Initialize a new MAL wrapper
     * @param client_id MAL Client ID
     */
    constructor(client_id: string) {
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
    async anime(id: string | number, fields?: MAL.AnimeField[]) {
        const url = malURL(API.V2, Type.Anime, id, fields);
        const req = await this.request<MAL.AnimeDetails>(url, this.client_id);

        if (req.status == 200) return req.data;
        else throw req.data;
    }

    /**
     *
     * @description Get manga details
     * @param id MAL Manga ID
     * @param fields MAL Fields
     * @returns Response object
     */
    async manga(id: string | number, fields?: MAL.MangaField[]) {
        const url = malURL(API.V2, Type.Manga, id, fields);
        const req = await this.request<MAL.MangaDetails>(url, this.client_id);

        if (req.status == 200) return req.data;
        else throw req.data;
    }
}

export default MyAnimeList;
