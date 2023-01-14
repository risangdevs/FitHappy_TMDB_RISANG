import { TVDetail } from "../types/index";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Alert } from "react-native";
import MovieService from "../services/movie-service";
export const useDetail = (id: string) => {
    const [detail, setDetail] = useState<TVDetail>()
    const { getTVDetail } = MovieService();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useMemo(() => {
        const getDetail = async () => {
            try {
                const { data } = await getTVDetail(id)
                setDetail(data)
            } catch (error: any) {
                Alert.alert("Fetch Error", error?.message, [{ text: "OK" }]);
            }
        }
        getDetail()
    }, [id])

    return { detail, isLoading }
}
