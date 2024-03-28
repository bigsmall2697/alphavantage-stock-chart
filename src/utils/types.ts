export type TimeSeriesFunctionType = 'TIME_SERIES_INTRADAY' | ''

export enum TimeSeriesIntervalType {
  '1min' = 1,
  '5min' = 5,
  '15min' = 15,
  '30min' = 30,
  '60min' = 60
}

export interface StockApiParamsType {
  function: string
  symbol: string
  interval: string
  adjusted?: boolean
  extended_hours?: boolean
  month?: string
  outputsize?: 'compact' | 'full'
  datatype?: 'json' | 'csv'
  apikey: string
}

export interface TimeSeriesDataType {
  [key: string]: {
    '1. open': string
    '2. high': string
    '3. low': string
    '4. close': string
    '5. volume': string
  }
}

export type StockApiResponseType = {
  'Meta Data': {
    [key: string]: string
  }
} & Omit<
  {
    [key: string]: TimeSeriesDataType
  },
  'Meta Data'
>
