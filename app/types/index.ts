export interface TVs {
    page: number,
    data: Array<TV>,
    total_pages: number,
    total_result: number
}
export interface pagination {
    page: number,
    total_pages: number,
    total_result: number
}

export interface TV {
    backdrop_path: string,
    first_air_date: string,
    genre_ids: Array<number>,
    id: number,
    name: string,
    origin_country: Array<string>,
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number
}
export interface Genre {
    id: number,
    name: string
}
export interface LastEpisodeToAir {
    air_date: string,
    episode_number: number,
    id: number,
    name: string,
    overview: string,
    production_code: string,
    runtime: number,
    season_number: number,
    show_id: number,
    still_path: any,
    vote_average: number,
    vote_count: number
}
export interface Networks {
    id: number,
    name: string,
    logo_path: string,
    origin_country: string
}
export interface ProductionCountries {
    iso_3166_1: string,
    name: string
}
export interface TVDetail {
    adult: boolean,
    backdrop_path: string,
    created_by: Array<any>,
    episode_run_time: Array<number>,
    first_air_date: string,
    genres: Array<Genre>,
    homepage: string,
    id: number,
    in_production: boolean,
    languages: Array<string>,
    last_air_date: string,
    last_episode_to_air: LastEpisodeToAir,
    name: string,
    next_episode_to_air: any,
    networks: Array<Networks>,
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: Array<string>,
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: Array<any>,
    production_countries: Array<ProductionCountries>,
    seasons: Array<Seasons>,
    spoken_languages: Array<SpokenLanguages>,
    status: string,
    tagline: string,
    type: string,
    vote_average: number,
    vote_count: number
}
export interface Seasons {
    air_date: string,
    episode_count: number,
    id: number,
    name: string,
    overview: string,
    poster_path: string,
    season_number: number
}
export interface SpokenLanguages {
    english_name: string,
    iso_639_1: string,
    name: string
}