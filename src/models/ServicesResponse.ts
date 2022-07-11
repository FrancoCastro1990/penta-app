import { Movie } from "./Movie";

export interface ServicesResponse {
    items: Movie[];
    errorMessage: string;
}