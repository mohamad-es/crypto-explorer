/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_METADATA_URL: string;
  readonly VITE_TOP_LIST_URL: string;
  readonly VITE_TOP_LIST_SEARCH: string;
  readonly VITE_HISTORICAL_SOCIAL: string;
  readonly VITE_CHART_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
