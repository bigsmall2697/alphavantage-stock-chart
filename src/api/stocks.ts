import { AxiosError } from 'axios'
import api from './base'
import { mockSymbols } from './mock'

import { StockApiParamsType, StockApiResponseType } from 'utils/types'

/* common api to call alphavantage query */
export const stocksApi = async (params: Omit<StockApiParamsType, 'apikey'>) => {
  try {
    const response = await api.get(`/query`, { params })
    return response.data
  } catch (e) {
    // TODO: show notification snack bar
    console.error((e as AxiosError).message ?? e)
    return e
  }
}

/* fetch alphavantage symbols */
export const fetchSymbols = (): Promise<string[]> => {
  // TODO: call Alphavantage api to get all symbols in CSV format
  // return stocksApi({ function: 'LISTING_STATUS' })

  return Promise.resolve(mockSymbols)
}

/* fetch time series intraday */
export const fetchTimeSeries = (
  params: Omit<StockApiParamsType, 'apikey' | 'function' | 'interval'> & {
    function?: string
    interval?: string
  }
): Promise<StockApiResponseType> => {
  return stocksApi({
    ...params,
    function: params.function ?? 'TIME_SERIES_INTRADAY', // default: TIME_SERIES_INTRADAY
    interval: params.interval ?? '15min' // default: 5min
  })
}
