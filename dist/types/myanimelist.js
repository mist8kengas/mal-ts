export var AnimeField;
(function (AnimeField) {
    /** "synonyms" or ISO 639-1 */
    AnimeField["ALTERNATIVE_TITLES"] = "alternative_titles";
    AnimeField["START_DATE"] = "start_date";
    AnimeField["END_DATE"] = "end_date";
    /**
     * Synopsis.
     *
     * The API strips BBCode tags from the result.
     */
    AnimeField["SYNOPSIS"] = "synopsis";
    /**
     * Mean score.
     *
     * When the `mean` can not be calculated, such as when the number of user scores is small, the result does not include this field.
     */
    AnimeField["MEAN"] = "mean";
    /** When the `rank` can not be calculated, such as when the number of user scores is small, the result does not include this field. */
    AnimeField["RANK"] = "rank";
    AnimeField["POPULARITY"] = "popularity";
    /** Number of users who have this work in their list. */
    AnimeField["NUM_LIST_USERS"] = "num_list_users";
    AnimeField["NUM_SCORING_USERS"] = "num_scoring_users";
    AnimeField["NSFW"] = "nsfw";
    AnimeField["GENRES"] = "genres";
    AnimeField["CREATED_AT"] = "created_at";
    AnimeField["UPDATED_AT"] = "updated_at";
    AnimeField["MEDIA_TYPE"] = "media_type";
    /** Airing status. */
    AnimeField["STATUS"] = "status";
    /** The total number of episodes of this series. If unknown, it is 0. */
    AnimeField["NUM_EPISODES"] = "num_episodes";
    AnimeField["START_SEASON"] = "start_season";
    /** Broadcast date. */
    AnimeField["BROADCAST"] = "broadcast";
    /** Original work. */
    AnimeField["SOURCE"] = "source";
    /** Average length of episode in seconds. */
    AnimeField["AVERAGE_EPISODE_DURATION"] = "average_episode_duration";
    AnimeField["RATING"] = "rating";
    AnimeField["STUDIOS"] = "studios";
    /** You cannot contain this field in a list. */
    AnimeField["PICTURES"] = "pictures";
    /**
     * The API strips BBCode tags from the result.
     *
     * You cannot contain this field in a list.
     */
    AnimeField["BACKGROUND"] = "background";
    /** You cannot contain this field in a list. */
    AnimeField["RELATED_ANIME"] = "related_anime";
    /** You cannot contain this field in a list. */
    AnimeField["RELATED_MANGA"] = "related_manga";
    /** You cannot contain this field in a list. */
    AnimeField["STATISTICS"] = "statistics";
})(AnimeField || (AnimeField = {}));
export var MangaField;
(function (MangaField) {
    /** "synonyms" or ISO 639-1 */
    MangaField["ALTERNATIVE_TITLES"] = "alternative_titles";
    MangaField["START_DATE"] = "start_date";
    MangaField["END_DATE"] = "end_date";
    /**
     * Synopsis.
     *
     * The API strips BBCode tags from the result.
     */
    MangaField["SYNOPSIS"] = "synopsis";
    /**
     * Mean score.
     *
     * When the mean can not be calculated, such as when the number of user scores is small, the result does not include this field.
     */
    MangaField["MEAN"] = "mean";
    /** When the `rank` can not be calculated, such as when the number of user scores is small, the result does not include this field. */
    MangaField["RANK"] = "rank";
    MangaField["POPULARITY"] = "popularity";
    /** Number of users who have this work in their list. */
    MangaField["NUM_LIST_USERS"] = "num_list_users";
    MangaField["NUM_SCORING_USERS"] = "num_scoring_users";
    MangaField["NSFW"] = "nsfw";
    MangaField["GENRES"] = "genres";
    MangaField["CREATED_AT"] = "created_at";
    MangaField["UPDATED_AT"] = "updated_at";
    MangaField["MEDIA_TYPE"] = "media_type";
    /** Publishing status. */
    MangaField["STATUS"] = "status";
    /** If unknown, it is 0. */
    MangaField["NUM_VOLUMES"] = "num_volumes";
    /** If unknown, it is 0. */
    MangaField["NUM_CHAPTERS"] = "num_chapters";
    MangaField["AUTHORS"] = "authors";
    /** You cannot contain this field in a list. */
    MangaField["PICTURES"] = "pictures";
    /**
     * The API strips BBCode tags from the result.
     *
     * You cannot contain this field in a list.
     */
    MangaField["BACKGROUND"] = "background";
    /** You cannot contain this field in a list. */
    MangaField["RELATED_ANIME"] = "related_anime";
    /** You cannot contain this field in a list. */
    MangaField["RELATED_MANGA"] = "related_manga";
    /** You cannot contain this field in a list. */
    MangaField["SERIALIZATION"] = "serialization";
})(MangaField || (MangaField = {}));
export var RelationType;
(function (RelationType) {
    RelationType["SEQUEL"] = "sequel";
    RelationType["PREQUEL"] = "prequel";
    RelationType["ALTERNATIVE_SETTING"] = "alternative_setting";
    RelationType["ALTERNATIVE_VERSION"] = "alternative_version";
    RelationType["SIDE_STORY"] = "side_story";
    RelationType["PARENT_STORY"] = "parent_story";
    RelationType["SUMMARY"] = "summary";
    RelationType["FULL_STORY"] = "full_story";
})(RelationType || (RelationType = {}));
export var NSFW_TYPE;
(function (NSFW_TYPE) {
    /** This work is safe for work */
    NSFW_TYPE["WHITE"] = "white";
    /** This work may be not safe for work */
    NSFW_TYPE["GRAY"] = "gray";
    /** This work is not safe for work */
    NSFW_TYPE["BLACK"] = "black";
})(NSFW_TYPE || (NSFW_TYPE = {}));
export var AIRING_STATUS;
(function (AIRING_STATUS) {
    AIRING_STATUS["FINISHED_AIRING"] = "finished_airing";
    AIRING_STATUS["CURRENTLY_AIRING"] = "currently_airing";
    AIRING_STATUS["NOT_YET_AIRED"] = "not_yet_aired";
})(AIRING_STATUS || (AIRING_STATUS = {}));
export var PUBLISHING_STATUS;
(function (PUBLISHING_STATUS) {
    PUBLISHING_STATUS["FINISHED_PUBLISHING"] = "finished";
    PUBLISHING_STATUS["CURRENTLY_PUBLISHING"] = "currently_publishing";
    PUBLISHING_STATUS["NOT_YET_PUBLISHED"] = "not_yet_published";
})(PUBLISHING_STATUS || (PUBLISHING_STATUS = {}));
export var ANIME_MEDIA_TYPE;
(function (ANIME_MEDIA_TYPE) {
    ANIME_MEDIA_TYPE["UNKNOWN"] = "unknown";
    ANIME_MEDIA_TYPE["TV"] = "tv";
    ANIME_MEDIA_TYPE["OVA"] = "ova";
    ANIME_MEDIA_TYPE["MOVIE"] = "movie";
    ANIME_MEDIA_TYPE["SPECIAL"] = "special";
    ANIME_MEDIA_TYPE["ONA"] = "ona";
    ANIME_MEDIA_TYPE["MUSIC"] = "music";
})(ANIME_MEDIA_TYPE || (ANIME_MEDIA_TYPE = {}));
export var MANGA_MEDIA_TYPE;
(function (MANGA_MEDIA_TYPE) {
    MANGA_MEDIA_TYPE["UNKNOWN"] = "unknown";
    MANGA_MEDIA_TYPE["MANGA"] = "manga";
    MANGA_MEDIA_TYPE["NOVEL"] = "novel";
    MANGA_MEDIA_TYPE["ONE_SHOT"] = "one_shot";
    MANGA_MEDIA_TYPE["DOUJINSHI"] = "doujinshi";
    MANGA_MEDIA_TYPE["MANHWA"] = "manhwa";
    MANGA_MEDIA_TYPE["MANHUA"] = "manhua";
    MANGA_MEDIA_TYPE["OEL"] = "oel";
})(MANGA_MEDIA_TYPE || (MANGA_MEDIA_TYPE = {}));
export var ANIME_RATING;
(function (ANIME_RATING) {
    /** G - All Ages */
    ANIME_RATING["G_ALL_AGES"] = "g";
    /** PG - Children */
    ANIME_RATING["PG_CHILDREN"] = "pg";
    /** pg_13 - Teens 13 and Older */
    ANIME_RATING["PG_13"] = "pg_13";
    /** R - 17+ (violence & profanity) */
    ANIME_RATING["R_17"] = "r";
    /** R+ - Profanity & Mild Nudity */
    ANIME_RATING["R_PROFANITY_NUDITY"] = "r+";
    /** Rx - Hentai */
    ANIME_RATING["RX_HENTAI"] = "rx";
})(ANIME_RATING || (ANIME_RATING = {}));
export var ANIME_SOURCE;
(function (ANIME_SOURCE) {
    ANIME_SOURCE["OTHER"] = "other";
    ANIME_SOURCE["ORIGINAL"] = "original";
    ANIME_SOURCE["MANGA"] = "manga";
    ANIME_SOURCE["YONKOMA_MANGA"] = "4_koma_manga";
    ANIME_SOURCE["WEB_MANGA"] = "web_manga";
    ANIME_SOURCE["DIGITAL_MANGA"] = "digital_manga";
    ANIME_SOURCE["NOVEL"] = "novel";
    ANIME_SOURCE["LIGHT_NOVEL"] = "light_novel";
    ANIME_SOURCE["VISUAL_NOVEL"] = "visual_novel";
    ANIME_SOURCE["GAME"] = "game";
    ANIME_SOURCE["CARD_GAME"] = "card_game";
    ANIME_SOURCE["BOOK"] = "book";
    ANIME_SOURCE["PICTURE_BOOK"] = "picture_book";
    ANIME_SOURCE["RADIO"] = "radio";
    ANIME_SOURCE["MUSIC"] = "music";
})(ANIME_SOURCE || (ANIME_SOURCE = {}));
//# sourceMappingURL=myanimelist.js.map