import { useState, useEffect } from "react";
import { getInfo } from "../services/getInfo";

export const useInfo = (url) => {
    const [page, setPage] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        getInfo(url)
            .then((res) => setPage(res))
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            });
    }, [url]);

    return { page, isLoading };
};
