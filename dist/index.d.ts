import type * as MAL from './types/myanimelist';
/**
 * @author mist8kengas
 * @version 1.1.0
 */
declare class MyAnimeList {
    private client_id;
    private request;
    /**
     *
     * @constructor
     * @description Initialize a new MAL wrapper
     * @param client_id MAL Client ID
     */
    constructor(client_id: string);
    /**
     * @description Default MAL fields
     */
    defaultFields: {
        anime: string[];
        manga: string[];
    };
    /**
     *
     * @description Get anime details
     * @param id MAL Anime ID
     * @param fields MAL Fields
     * @returns Response object
     */
    anime(id: string | number, fields?: MAL.AnimeField[]): Promise<MAL.AnimeDetails>;
    /**
     *
     * @description Get manga details
     * @param id MAL Manga ID
     * @param fields MAL Fields
     * @returns Response object
     */
    manga(id: string | number, fields?: MAL.MangaField[]): Promise<MAL.MangaDetails>;
}
export default MyAnimeList;
//# sourceMappingURL=index.d.ts.map