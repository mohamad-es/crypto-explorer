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
    SPOT_MOVING_24_HOUR_CHANGE_USD: number;
    SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD: number;
    SPOT_MOVING_24_HOUR_CHANGE_CONVERSION: number;
    SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_CONVERSION: number;
    SPOT_MOVING_7_DAY_CHANGE_USD: number;
    SPOT_MOVING_7_DAY_CHANGE_PERCENTAGE_USD: number;
    SPOT_MOVING_7_DAY_CHANGE_CONVERSION: number;
    SPOT_MOVING_7_DAY_CHANGE_PERCENTAGE_CONVERSION: number;
    SPOT_MOVING_30_DAY_CHANGE_USD: number;
    SPOT_MOVING_30_DAY_CHANGE_PERCENTAGE_USD: number;
    SPOT_MOVING_30_DAY_CHANGE_CONVERSION: number;
    SPOT_MOVING_30_DAY_CHANGE_PERCENTAGE_CONVERSION: number;
    SPOT_MOVING_24_HOUR_QUOTE_VOLUME_TOP_TIER_DIRECT_USD: number;
    SPOT_MOVING_24_HOUR_QUOTE_VOLUME_DIRECT_USD: number;
    SPOT_MOVING_24_HOUR_QUOTE_VOLUME_TOP_TIER_USD: number;
    SPOT_MOVING_24_HOUR_QUOTE_VOLUME_USD: number;
    SPOT_MOVING_24_HOUR_QUOTE_VOLUME_TOP_TIER_CONVERSION: number;
    SPOT_MOVING_24_HOUR_QUOTE_VOLUME_CONVERSION: number;
    SPOT_MOVING_7_DAY_QUOTE_VOLUME_TOP_TIER_DIRECT_USD: number;
    SPOT_MOVING_7_DAY_QUOTE_VOLUME_DIRECT_USD: number;
    SPOT_MOVING_7_DAY_QUOTE_VOLUME_TOP_TIER_USD: number;
    SPOT_MOVING_7_DAY_QUOTE_VOLUME_USD: number;
    SPOT_MOVING_7_DAY_QUOTE_VOLUME_TOP_TIER_CONVERSION: number;
    SPOT_MOVING_7_DAY_QUOTE_VOLUME_CONVERSION: number;
    SPOT_MOVING_30_DAY_QUOTE_VOLUME_TOP_TIER_DIRECT_USD: number;
    SPOT_MOVING_30_DAY_QUOTE_VOLUME_DIRECT_USD: number;
    SPOT_MOVING_30_DAY_QUOTE_VOLUME_TOP_TIER_USD: number;
    SPOT_MOVING_30_DAY_QUOTE_VOLUME_USD: number;
    SPOT_MOVING_30_DAY_QUOTE_VOLUME_TOP_TIER_CONVERSION: number;
    SPOT_MOVING_30_DAY_QUOTE_VOLUME_CONVERSION: number;
    MKT_CAP_PENALTY: number;
    CIRCULATING_MKT_CAP_USD: number;
    TOTAL_MKT_CAP_USD: number;
    CIRCULATING_MKT_CAP_CONVERSION: number;
    TOTAL_MKT_CAP_CONVERSION: number;
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
    page?: number;
    page_size?: number;
    sort_by?: string;
    sort_direction?: string;
    groups?: string;
    toplist_quote_asset?: string;
    asset_type?: string;
    asset_industry?: string
}

type TTopListSearchParams = {
    search_string: string;
    limit: number;
}

type TSearchListResponse = {
    TYPE: string;
    ID: number;
    SYMBOL: string;
    URI: string;
    IS_PUBLIC: true
    NAME: string;
    LOGO_URL: string;
    ASSET_TYPE: string;
    HAS_SMART_CONTRACT_CAPABILITIES: boolean
    CIRCULATING_MKT_CAP_USD: number;
    ID_PARENT_ASSET: null
    PARENT_ASSET_SYMBOL: null
    ROOT_ASSET_ID: null
    ROOT_ASSET_SYMBOL: null
    ROOT_ASSET_TYPE: null
    CREATED_ON: number
}

export type {TResponse, TTopListSearchParams, TMetaDataResponse, TCryptoResponse, TTopListParams, TTopListResponse, TSearchListResponse}