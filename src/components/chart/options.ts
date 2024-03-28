import { TimeSeriesDataType } from 'utils/types'

export const getOptions = (
  label = 'Alphavantage Stock Chart',
  symbol: string,
  data?: TimeSeriesDataType | null
) => {
  const ohlc: [number, number, number, number, number][] = []
  const volume: [number, number][] = []

  if (data) {
    Object.keys(data)
      .reverse()
      .forEach((datetime) => {
        const item = data[datetime]
        ohlc.push([
          new Date(datetime).getTime(),
          Number(item['1. open']),
          Number(item['2. high']),
          Number(item['3. low']),
          Number(item['4. close'])
        ])

        volume.push([new Date(datetime).getTime(), Number(item['5. volume'])])
      })
  }

  return {
    title: {
      text: label
    },
    chart: {
      type: 'candlestick',
      zoomType: 'x'
    },
    yAxis: [
      {
        labels: {
          align: 'left'
        },
        height: '80%',
        resize: {
          enabled: true
        }
      },
      {
        labels: {
          align: 'left'
        },
        top: '80%',
        height: '20%',
        offset: 0
      }
    ],
    scrollbar: {
      liveRedraw: false
    },
    rangeSelector: {
      buttons: [
        {
          type: 'hour',
          count: 1,
          text: '1h'
        },
        {
          type: 'day',
          count: 1,
          text: '1d'
        },
        {
          type: 'month',
          count: 1,
          text: '1m'
        },
        {
          type: 'all',
          text: 'All'
        }
      ],
      inputEnabled: false, // it supports only days
      selected: 3 // all
    },
    series: [
      {
        type: 'ohlc',
        id: `${symbol}-ohlc`,
        name: `${symbol} Stock Price`,
        data: ohlc
      },
      {
        type: 'column',
        id: `${symbol}-volume`,
        name: `${symbol} Volume`,
        data: volume,
        yAxis: 1
      }
    ]
  }
}
