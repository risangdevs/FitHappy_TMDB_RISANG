import type { Axios, AxiosRequestConfig } from "axios";
import axios from "axios";

const createApiClient = (config: AxiosRequestConfig): Axios => {
    const apiClient: Axios = axios.create(config);
    return apiClient;
};

const constructHeaders = (token: string | null): any => ({
    Authorization: `Bearer ${token}` ?? "",
});

const ApiService = {
    createApiClient,
    constructHeaders,
};

export default ApiService;