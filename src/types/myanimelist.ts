export enum AnimeField {
    /** "synonyms" or ISO 639-1 */
    ALTERNATIVE_TITLES = 'alternative_titles',
    START_DATE = 'start_date',
    END_DATE = 'end_date',
    /**
     * Synopsis.
     *
     * The API strips BBCode tags from the result.
     */
    SYNOPSIS = 'synopsis',
    /**
     * Mean score.
     *
     * When the `mean` can not be calculated, such as when the number of user scores is small, the result does not include this field.
     */
    MEAN = 'mean',
    /** When the `rank` can not be calculated, such as when the number of user scores is small, the result does not include this field. */
    RANK = 'rank',
    POPULARITY = 'popularity',
    /** Number of users who have this work in their list. */
    NUM_LIST_USERS = 'num_list_users',
    NUM_SCORING_USERS = 'num_scoring_users',
    NSFW = 'nsfw',
    GENRES = 'genres',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
    MEDIA_TYPE = 'media_type',
    /** Airing status. */
    STATUS = 'status',
    /** The total number of episodes of this series. If unknown, it is 0. */
    NUM_EPISODES = 'num_episodes',
    START_SEASON = 'start_season',
    /** Broadcast date. */
    BROADCAST = 'broadcast',
    /** Original work. */
    SOURCE = 'source',
    /** Average length of episode in seconds. */
    AVERAGE_EPISODE_DURATION = 'average_episode_duration',
    RATING = 'rating',
    STUDIOS = 'studios',
    /** You cannot contain this field in a list. */
    PICTURES = 'pictures',
    /**
     * The API strips BBCode tags from the result.
     *
     * You cannot contain this field in a list.
     */
    BACKGROUND = 'background',
    /** You cannot contain this field in a list. */
    RELATED_ANIME = 'related_anime',
    /** You cannot contain this field in a list. */
    RELATED_MANGA = 'related_manga',
    /** You cannot contain this field in a list. */
    STATISTICS = 'statistics',
}

export enum MangaField {
    /** "synonyms" or ISO 639-1 */
    ALTERNATIVE_TITLES = 'alternative_titles',
    START_DATE = 'start_date',
    END_DATE = 'end_date',
    /**
     * Synopsis.
     *
     * The API strips BBCode tags from the result.
     */
    SYNOPSIS = 'synopsis',
    /**
     * Mean score.
     *
     * When the mean can not be calculated, such as when the number of user scores is small, the result does not include this field.
     */
    MEAN = 'mean',
    /** When the `rank` can not be calculated, such as when the number of user scores is small, the result does not include this field. */
    RANK = 'rank',
    POPULARITY = 'popularity',
    /** Number of users who have this work in their list. */
    NUM_LIST_USERS = 'num_list_users',
    NUM_SCORING_USERS = 'num_scoring_users',
    NSFW = 'nsfw',
    GENRES = 'genres',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
    MEDIA_TYPE = 'media_type',
    /** Publishing status. */
    STATUS = 'status',
    /** If unknown, it is 0. */
    NUM_VOLUMES = 'num_volumes',
    /** If unknown, it is 0. */
    NUM_CHAPTERS = 'num_chapters',
    AUTHORS = 'authors',
    /** You cannot contain this field in a list. */
    PICTURES = 'pictures',
    /**
     * The API strips BBCode tags from the result.
     *
     * You cannot contain this field in a list.
     */
    BACKGROUND = 'background',
    /** You cannot contain this field in a list. */
    RELATED_ANIME = 'related_anime',
    /** You cannot contain this field in a list. */
    RELATED_MANGA = 'related_manga',
    /** You cannot contain this field in a list. */
    SERIALIZATION = 'serialization',
}

export interface Genre {
    id: number;
    name: string;
}
export interface Picture {
    large: string | null;
    medium: string;
}
interface Details {
    id: number;
    title: string;
    main_picture?: Picture;
}

/* edges */
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
export enum RelationType {
    SEQUEL = 'sequel',
    PREQUEL = 'prequel',
    ALTERNATIVE_SETTING = 'alternative_setting',
    ALTERNATIVE_VERSION = 'alternative_version',
    SIDE_STORY = 'side_story',
    PARENT_STORY = 'parent_story',
    SUMMARY = 'summary',
    FULL_STORY = 'full_story',
}
interface RelatedEdge {
    node: object;
    /** The type of the relationship between this work and related work. */
    relation_type: RelationType;
    /** The format of relation_type for human like "Alternative version". */
    relation_type_formatted: string;
}
interface RelatedAnimeEdge extends RelatedEdge {}
interface RelatedMangaEdge extends RelatedEdge {}

export enum NSFW_TYPE {
    /** This work is safe for work */
    WHITE = 'white',
    /** This work may be not safe for work */
    GRAY = 'gray',
    /** This work is not safe for work */
    BLACK = 'black',
}
export enum AIRING_STATUS {
    FINISHED_AIRING = 'finished_airing',
    CURRENTLY_AIRING = 'currently_airing',
    NOT_YET_AIRED = 'not_yet_aired',
}
export enum PUBLISHING_STATUS {
    FINISHED_PUBLISHING = 'finished',
    CURRENTLY_PUBLISHING = 'currently_publishing',
    NOT_YET_PUBLISHED = 'not_yet_published',
}

export enum ANIME_MEDIA_TYPE {
    UNKNOWN = 'unknown',
    TV = 'tv',
    OVA = 'ova',
    MOVIE = 'movie',
    SPECIAL = 'special',
    ONA = 'ona',
    MUSIC = 'music',
}
export enum MANGA_MEDIA_TYPE {
    UNKNOWN = 'unknown',
    MANGA = 'manga',
    NOVEL = 'novel',
    ONE_SHOT = 'one_shot',
    DOUJINSHI = 'doujinshi',
    MANHWA = 'manhwa',
    MANHUA = 'manhua',
    OEL = 'oel',
}

export enum ANIME_RATING {
    /** G - All Ages */
    G_ALL_AGES = 'g',
    /** PG - Children */
    PG_CHILDREN = 'pg',
    /** pg_13 - Teens 13 and Older */
    PG_13 = 'pg_13',
    /** R - 17+ (violence & profanity) */
    R_17 = 'r',
    /** R+ - Profanity & Mild Nudity */
    R_PROFANITY_NUDITY = 'r+',
    /** Rx - Hentai */
    RX_HENTAI = 'rx',
}
export enum ANIME_SOURCE {
    OTHER = 'other',
    ORIGINAL = 'original',
    MANGA = 'manga',
    YONKOMA_MANGA = '4_koma_manga',
    WEB_MANGA = 'web_manga',
    DIGITAL_MANGA = 'digital_manga',
    NOVEL = 'novel',
    LIGHT_NOVEL = 'light_novel',
    VISUAL_NOVEL = 'visual_novel',
    GAME = 'game',
    CARD_GAME = 'card_game',
    BOOK = 'book',
    PICTURE_BOOK = 'picture_book',
    RADIO = 'radio',
    MUSIC = 'music',
}

/* anime-specific */
export interface AnimeStudio {
    id: number;
    name: string;
}
export interface AnimeDetails extends Details {
    /** "synonyms" or ISO 639-1 */
    alternative_titles?: {
        synonyms: string[];
        en: string;
        ja: string;
    };
    start_date?: string;
    end_date?: string;
    /**
     * Synopsis.
     *
     * The API strips BBCode tags from the result.
     */
    synopsis?: string;
    /**
     * Mean score.
     *
     * When the `mean` can not be calculated, such as when the number of user scores is small, the result does not include this field.
     */
    mean?: number;
    /** When the `rank` can not be calculated, such as when the number of user scores is small, the result does not include this field.*/
    rank?: number;
    popularity?: number;
    /** Number of users who have this work in their list. */
    num_list_users?: number;
    num_scoring_users?: number;
    nsfw?: NSFW_TYPE;
    genres?: Genre[];
    created_at?: string;
    updated_at?: string;
    media_type?: ANIME_MEDIA_TYPE;
    /** Airing status. */
    status?: AIRING_STATUS;
    /** The total number of episodes of this series. If unknown, it is 0. */
    num_episodes?: number;
    start_season?: {
        season: string;
        year: number;
    };
    /** Broadcast date. */
    broadcast?: {
        day_of_the_week:
            | 'sunday'
            | 'monday'
            | 'tuesday'
            | 'wednesday'
            | 'thursday'
            | 'friday'
            | 'saturday';
        start_time: string;
    };
    /** Original work. */
    source?: ANIME_SOURCE;
    /** Average length of episode in seconds. */
    average_episode_duration?: number | null;
    rating?: ANIME_RATING;
    studios?: AnimeStudio[];
    /** You cannot contain this field in a list. */
    pictures?: Picture[];
    /**
     * The API strips BBCode tags from the result.
     *
     * You cannot contain this field in a list.
     */
    background?: string;
    /** You cannot contain this field in a list. */
    related_anime?: RelatedAnimeEdge[];
    /** You cannot contain this field in a list. */
    related_manga?: RelatedMangaEdge[];
    /** You cannot contain this field in a list. */
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

/* manga-specific */
interface MangaMagazineRelationEdge extends RoleEdge {
    node: {
        id: number;
        name: string;
    };
}
export interface MangaDetails extends Details {
    /** "synonyms" or ISO 639-1 */
    alternative_titles?: {
        synonyms: string[];
        en: string;
        ja: string;
    };
    start_date?: string;
    end_date?: string;
    /**
     * Synopsis.
     *
     * The API strips BBCode tags from the result.
     */
    synopsis?: string;
    /**
     * Mean score.
     *
     * When the `mean` can not be calculated, such as when the number of user scores is small, the result does not include this field.
     */
    mean?: number;
    /** When the `rank` can not be calculated, such as when the number of user scores is small, the result does not include this field. */
    rank?: number;
    popularity?: number;
    /** Number of users who have this work in their list. */
    num_list_users?: number;
    num_scoring_users?: number;
    nsfw?: NSFW_TYPE;
    genres?: Genre[];
    created_at?: string;
    updated_at?: string;
    media_type?: MANGA_MEDIA_TYPE;
    /** Publishing status. */
    status?: PUBLISHING_STATUS;
    /** If unknown, it is 0. */
    num_volumes?: number;
    /** If unknown, it is 0. */
    num_chapters?: number;
    authors?: PersonRoleEdge[];
    /** You cannot contain this field in a list. */
    pictures?: Picture[];
    /**
     * The API strips BBCode tags from the result.
     *
     * You cannot contain this field in a list.
     */
    background?: string;
    /** You cannot contain this field in a list. */
    related_anime?: RelatedAnimeEdge[];
    /** You cannot contain this field in a list. */
    related_manga?: RelatedMangaEdge[];
    /** You cannot contain this field in a list. */
    serialization?: MangaMagazineRelationEdge[];
}
