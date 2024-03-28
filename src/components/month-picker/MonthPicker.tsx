import { useEffect, useMemo, useState } from 'react'
import { YearMonthOption, YearMonthPickerProps } from './MonthPicker.types'

const YearMonthPicker = ({ onChange }: YearMonthPickerProps) => {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  )
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1
  )

  const years = useMemo(() => {
    const result: YearMonthOption[] = []
    for (let i = new Date().getFullYear(); i >= 2000; i--) {
      result.push({ value: i, label: i.toString() })
    }
    return result
  }, [])

  const months = useMemo(
    () =>
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ].map((item, index) => ({
        value: index + 1,
        label: item
      })),
    []
  )

  useEffect(() => {
    onChange(`${selectedYear}-${String(selectedMonth).padStart(2, '0')}`)
  }, [onChange, selectedYear, selectedMonth])

  return (
    <div className="flex space-x-4 rounded-md bg-white shadow-md">
      <select
        className="w-full rounded-md px-3 py-2 focus:outline-none"
        value={selectedYear}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
      >
        {years.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select
        className="w-full min-w-48 rounded-md px-3 py-2 focus:outline-none"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(Number(e.target.value))}
      >
        {months.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default YearMonthPicker
