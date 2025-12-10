interface BaseMedia {
    adult: boolean;
    backdrop_path: string;
    id: number;
    overview: string;
    poster_path: string;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    voteAverage: number;
    voteCount: number;
}

export interface Movie extends BaseMedia{
    title: string;
    original_title: string;
    media_type: string;
    release_date: string;
    video: boolean;
}

export interface TV extends BaseMedia {
    name: string;
    original_name: string;
    media_type: string;
    first_air_date: string;
}

export type Media = TV | Movie;

type GenresItem = {
    id: number, 
    name: string,
}

type Country = {
    iso_3166_1: string,
    name: string,
}

export interface MovieDetail {
    adult: boolean,
    backdrop_path: string,
    budget: number,
    genres: GenresItem[],
    homepage: string,
    id: number,
    media_type: string,
    imdb_id: string,
    origin_country: string[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    tagline: string,
    revenue: number,
    runtime: number,
    status: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    production_countries: Country[],
}

export interface TVDetail{
    name: string,
    original_name: string;
    media_type: string,
    adult: boolean,
    backdrop_path: string,
    budget: number,
    genres: GenresItem[],
    homepage: string,
    id: number,
    imdb_id: string,
    origin_country: string[],
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
    first_air_date: string | undefined,
    tagline: string,
    revenue: number,
    runtime: number,
    status: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    production_countries: Country[],
}

export type Actor = {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number,
}

type Producer = {
    adult: boolean
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    credit_id: string,
    department: string,
    job: string,
}

export interface CreditsInfo {
    id: number,
    cast: Actor[],
    crew: Producer[],
}


export interface Backdrop {
    aspect_ratio: number,
    height: number,
    width: number
    file_path: string,
}

export interface Poster {
    aspect_ratio: number,
    height: number,
    width: number,
    file_path: string,
}

export interface MovieImagesMedia {
    backdrops: Backdrop[],
    posters: Poster[],
}

export type TVImagesMedia = MovieImagesMedia;

export interface Keyword {
    id: number,
    name: string;
}


