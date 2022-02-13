declare type AnimeField = 'alternative_titles' | 'start_date' | 'end_date' | 'synopsis' | 'mean' | 'rank' | 'popularity' | 'num_list_users' | 'num_scoring_users' | 'nsfw' | 'genres' | 'created_at' | 'updated_at' | 'media_type' | 'status' | 'num_episodes' | 'start_season' | 'broadcast' | 'source' | 'average_episode_duration' | 'rating' | 'studios' | 'pictures' | 'background' | 'related_anime' | 'related_manga' | 'statistics';
declare type MangaField = 'alternative_titles' | 'start_date' | 'end_date' | 'synopsis' | 'mean' | 'rank' | 'popularity' | 'num_list_users' | 'num_scoring_users' | 'nsfw' | 'genres' | 'created_at' | 'updated_at' | 'media_type' | 'status' | 'num_volumes' | 'num_chapters' | 'authors' | 'pictures' | 'background' | 'related_anime' | 'related_manga' | 'serialization';
interface Genre {
    id: number;
    name: string;
}
interface Picture {
    large: string | null;
    medium: string;
}
interface Details {
    id: number;
    title: string;
    main_picture?: Picture;
}
interface RoleEdge {
    node: {
        id: number;
    };
    role?: string;
}
interface PersonRoleEdge extends RoleEdge {
    node: {
        id: number;
        first_name: string;
        last_name: string;
    };
}
interface RelatedEdge {
    node: object;
    relation_type: 'sequel' | 'prequel' | 'alternative_setting' | 'alternative_version' | 'side_story' | 'parent_story' | 'summary' | 'full_story';
    relation_type_formatted: string;
}
interface RelatedAnimeEdge extends RelatedEdge {
}
interface RelatedMangaEdge extends RelatedEdge {
}
interface AnimeStudio {
    id: number;
    name: string;
}
interface AnimeDetails extends Details {
    alternative_titles?: {
        synonyms: string[];
        en: string;
        ja: string;
    };
    start_date?: string;
    end_date?: string;
    synopsis?: string;
    mean?: number;
    rank?: number;
    popularity?: number;
    num_list_users?: number;
    num_scoring_users?: number;
    nsfw?: 'white' | 'gray' | 'black';
    genres?: Genre[];
    created_at?: string;
    updated_at?: string;
    media_type?: 'unknown' | 'tv' | 'ova' | 'movie' | 'special' | 'ona' | 'music';
    status?: 'finished_airing' | 'currently_airing' | 'not_yet_aired';
    num_episodes?: number;
    start_season?: {
        season: string;
        year: number;
    };
    broadcast?: {
        day_of_the_week: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
        start_time: string;
    };
    source?: 'other' | 'original' | 'manga' | '4_koma_manga' | 'web_manga' | 'digital_manga' | 'novel' | 'light_novel' | 'visual_novel' | 'game' | 'card_game' | 'book' | 'picture_book' | 'radio' | 'music';
    average_episode_duration?: number | null;
    rating?: 'g' | 'pg' | 'pg_13' | 'r' | 'r+' | 'rx';
    studios?: AnimeStudio[];
    pictures?: Picture[];
    background?: string;
    related_anime?: RelatedAnimeEdge[];
    related_manga?: RelatedMangaEdge[];
    statistics?: {
        num_list_users: number;
        status: {
            completed: string;
            dropped: string;
            on_hold: string;
            plan_to_watch: string;
            watching: string;
        };
    };
}
interface MangaMagazineRelationEdge extends RoleEdge {
    node: {
        id: number;
        name: string;
    };
}
interface MangaDetails extends Details {
    alternative_titles?: {
        synonyms: string[];
        en: string;
        ja: string;
    };
    start_date?: string;
    end_date?: string;
    synopsis?: string;
    mean?: number;
    rank?: number;
    popularity?: number;
    num_list_users?: number;
    num_scoring_users?: number;
    nsfw?: 'white' | 'gray' | 'black';
    genres?: Genre[];
    created_at?: string;
    updated_at?: string;
    media_type?: 'unknown' | 'manga' | 'novel' | 'one_shot' | 'doujinshi' | 'manhwa' | 'manhua' | 'oel';
    status?: 'finished' | 'currently_publishing' | 'not_yet_published';
    num_volumes?: number;
    num_chapters?: number;
    authors?: PersonRoleEdge[];
    pictures?: Picture[];
    background?: string;
    related_anime?: RelatedAnimeEdge[];
    related_manga?: RelatedMangaEdge[];
    serialization?: MangaMagazineRelationEdge[];
}
export { AnimeField, Genre, Picture, AnimeStudio, AnimeDetails };
export { MangaField, MangaDetails };
//# sourceMappingURL=myanimelist.d.ts.map