declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API_URL: string;
            APPLICATION_SECRET: string;
            MONGODB_URL?: string;
            STORAGE_PATH: string;
            GODMODE_USERNAME: string;
            GODMODE_PASSWORD: string;
            DISCORD_API_SECRET: string;
            BOT_TOKEN: string;
            MAIN_SERVER_ID: string;
            LEADS_CHANNEL_ID: string;
            LEAD_RENDER: string;
            INSERT_URL: string;
            MJ_APIKEY_PUBLIC: string;
            MJ_APIKEY_PRIVATE: string;
            SENDER_EMAIL: string;
            GITHUB_TOKEN: string;
            GITHUB_USERNAME: string;
            PRIVATE_RECAPTCHA_KEY: string;
        }
    }
}

export { }