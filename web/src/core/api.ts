import { getConfig } from "./config";

const getApiUrl = (path: string): string => {
    const { apiUrl } = getConfig();
    return `${apiUrl}/${path}`;
}

export const getServerMessage = (): Promise<string> => {
    return fetch(getApiUrl("message"), {method: "GET"}).then(rsp => rsp.text());
}