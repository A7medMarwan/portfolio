/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly MODE: string;
    readonly VITE_API_URL?: string;
    readonly VITE_ANALYTICS_ID?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
