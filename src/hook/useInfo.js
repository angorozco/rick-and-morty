import { useState, useEffect } from "react";
import { BASE_URL } from "../services/BASE_URL";
import { getInfo } from "../services/getInfo";

export const useInfo = () => {
    const [page, setPage] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            getInfo(BASE_URL)
                .then((res) => setPage(res))
                .finally(() => setIsLoading(false));
        }, 1500);
    }, []);

    return { page, isLoading };
};
