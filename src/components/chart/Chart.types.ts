import { StockApiResponseType } from 'utils/types'

export interface ChartProps {
  data?: StockApiResponseType | null
  loading: boolean
  symbol: string
}
