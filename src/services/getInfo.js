export const getInfo = (url) => {
    return fetch(url)
        .then((res) => res.json())
        .then((res) => res);
};
