import { useCallback, useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import MovieService from "../services/movie-service";
import { pagination, TV } from "../types/index";
export const useList = (pageNumber: number = 1) => {
    const { getPopularTV } = MovieService();
    const [tv, setTV] = useState<Array<TV>>();
    const [pagination, setPagination] = useState<pagination>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            try {
                const { data } = await getPopularTV(pageNumber);
                const { results, page, total_pages, total_results } = data
                setTV(results);
                setPagination({ page, total_pages, total_results })
            } catch (error: any) {
                Alert.alert("Fetch Error", error?.message, [{ text: "OK" }]);
            } finally {
                setIsLoading(false)
            }
        };
        getData()
    }, [pageNumber])

    return { tv, pagination, isLoading }
}