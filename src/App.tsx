import { useEffect, useState } from 'react'

import { fetchTimeSeries } from 'api/stocks'
import Chart from 'components/chart/Chart'
import Layout from 'components/layout/Layout'
import SymbolSelect from 'components/symbol-select/SymbolSelect'
import { StockApiResponseType } from 'utils/types'
import YearMonthPicker from 'components/month-picker/MonthPicker'

function App() {
  const [month, setMonth] = useState('')
  const [symbol, setSymbol] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<StockApiResponseType | null>(null)

  useEffect(() => {
    const getData = async (symbol: string) => {
      const result = await fetchTimeSeries({ symbol, month })
      setData(result)
      setLoading(false)
    }

    if (month && symbol) {
      getData(symbol)
    }
  }, [month, symbol])

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <div className="ml-auto flex gap-4">
          <SymbolSelect symbol={symbol} onChange={setSymbol} />
          <YearMonthPicker onChange={setMonth} />
        </div>
        <Chart data={data} symbol={symbol} loading={loading} />
      </div>
    </Layout>
  )
}

export default App
