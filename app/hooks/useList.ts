import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Alert } from "react-native";
import MovieService from "../services/movie-service";
import { pagination, TV } from "../types/index";
export const useList = (pageNumber: number = 1) => {
    const { getPopularTV } = MovieService();
    const [tv, setTV] = useState<Array<TV>>();
    const [pagination, setPagination] = useState<pagination>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useMemo(() => {
        const getData = async () => {
            setIsLoading(true)
            try {
                if (tv && tv.length === 20) {
                    const { data } = await getPopularTV(pageNumber);
                    const { results, page, total_pages, total_results } = data
                    setTV(tv?.concat(results))
                    setPagination({ page, total_pages, total_results })
                } else if (tv && tv.length === 40) {
                    /* next page */
                    if (pageNumber > (pagination?.page as number)) {
                        const { data } = await getPopularTV(pageNumber);
                        const { results, page, total_pages, total_results } = data
                        setTV(tv?.slice(20, 40)?.concat(results))
                        setPagination({ page, total_pages, total_results })
                    }
                    /* previous page */
                    if (pageNumber < (pagination?.page as number) && pageNumber > 1) {
                        const { data } = await getPopularTV(pageNumber - 1);
                        const { results, page, total_pages, total_results } = data
                        setTV(results.concat(tv?.slice(0, 20)))
                        setPagination({ page, total_pages, total_results })
                    }
                } else if (!tv) {
                    const { data } = await getPopularTV(pageNumber);
                    const { results, page, total_pages, total_results } = data
                    setTV(results);
                    setPagination({ page, total_pages, total_results })
                } else {
                    Alert.alert("Invalid Request", "Something is Wrong at infinite scroll", [{ text: "OK" }]);
                }
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