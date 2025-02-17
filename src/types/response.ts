type TResponse<T> = {
    Data: T;
    Err: {
        type: string;
        description: string;
    };
    Warn: {
        type: string;
        description: string;
    };
}

type TCryptoResponse = {
    ID: number;
    CREATED_ON: number;
    UPDATED_ON: number;
    PUBLIC_NOTICE: string;
    NAME: string;
    LOGO_URL: string;
    LAUNCH_DATE: number;
    PREVIOUS_ASSET_SYMBOLS: null;
    ASSET_ALTERNATIVE_IDS: {
        NAME: string;
        ID: number;
    }[];
    ASSET_DESCRIPTION_SNIPPET: string;
    ASSET_DECIMAL_POINTS: number;
    PRICE_USD: number;
    PRICE_USD_SOURCE: string;
    PRICE_USD_LAST_UPDATE_TS: number;
    PRICE_CONVERSION_ASSET: {
        ID: number;
        SYMBOL: string;
        ASSET_TYPE: string
    };
    PRICE_CONVERSION_RATE: number;
    PRICE_CONVERSION_VALUE: number;
    PRICE_CONVERSION_SOURCE: string;
    PRICE_CONVERSION_LAST_UPDATE_TS: number;
}

type TMetaDataResponse = {
    [key: string]: TCryptoResponse
}

type TTopListResponse = {
    STATS: {
        PAGE: number;
        PAGE_SIZE: number;
        TOTAL_ASSET: number;
    }
    LIST: TCryptoResponse[];
}

type TTopListParams = {
    page: number;
    page_size: number;
    sort_by: string;
    sort_direction: string;
    groups: string;
    toplist_quote_asset: string;
    assets_type: string;
    assets_industry: string
}

export type {TResponse, TMetaDataResponse, TCryptoResponse, TTopListParams, TTopListResponse}