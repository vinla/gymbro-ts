export type AppConfig = {
    apiUrl: string
}

const defaultConfiguration: AppConfig = {
    apiUrl: process.env.REACT_APP_API_URL || "http://localhost:4000/api"
};

export const getConfig = (): AppConfig => defaultConfiguration;