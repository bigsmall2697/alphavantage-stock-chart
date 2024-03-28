import { useEffect, useMemo, useRef } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact, {
  HighchartsReactRefObject
} from 'highcharts-react-official'

import { ChartProps } from './Chart.types'
import { getOptions } from './options'

const Chart = ({ data, symbol, loading }: ChartProps) => {
  const chartRef = useRef<HighchartsReactRefObject>(null)

  const options = useMemo(() => {
    const dataKey = Object.keys(data ?? {}).find((item) => item !== 'Meta Data')
    return getOptions(dataKey, symbol, data?.[dataKey ?? ''])
  }, [data, symbol])

  useEffect(() => {
    const chartObj = chartRef.current?.chart
    if (loading) {
      chartObj?.showLoading?.()
    } else {
      chartObj?.hideLoading?.()
    }
  }, [loading])

  return (
    <div className="rounded-xl bg-white px-6 py-4 shadow-lg">
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
        ref={chartRef}
      />
    </div>
  )
}

export default Chart
