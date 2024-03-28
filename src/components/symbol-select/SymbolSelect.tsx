import { useEffect, useState } from 'react'
import { SymbolSelectProps } from './SymbolSelect.types'
import { fetchSymbols } from 'api/stocks'

const SymbolSelect = ({ symbol, onChange }: SymbolSelectProps) => {
  const [symbols, setSymbols] = useState<string[]>([])

  useEffect(() => {
    const getSymbols = async () => {
      const result = await fetchSymbols()
      setSymbols(result)

      if (result?.length) {
        onChange(result[0])
      }
    }

    getSymbols()
  }, [onChange])

  return (
    <div className="relative rounded-md shadow-md">
      <select
        className="w-full rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={symbol}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select Symbol</option>
        {symbols.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SymbolSelect
