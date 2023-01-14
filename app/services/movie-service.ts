import { TVs } from "../types/index";
import ApiService from "./api";

const apiKey = 'api_key=4fb5a5e9f2f89c51545cabb82aec4bcd'
const MovieService = () => {
    const apiClient = ApiService.createApiClient({
        baseURL: "https://api.themoviedb.org/3/", headers: ApiService.constructHeaders(null)
    })

    const getPopularTV = async (pageNumber: number): Promise<TVs> => {
        return await apiClient.get(`tv/popular?${apiKey}&page=${pageNumber}`)
    }

    const getTVDetail = async (id: string) => {
        return apiClient.get(`tv/${id}?${apiKey}`)
    }

    return { getPopularTV, getTVDetail }
}

export default MovieService