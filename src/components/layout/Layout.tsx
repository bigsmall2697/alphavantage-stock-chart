import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
        <h1 className="text-xl font-bold text-gray-800">
          Alphavantage Stock Chart
        </h1>
      </header>
      <main className="flex-1 p-6">{children}</main>
      <footer className="mt-auto bg-gray-200 py-4 text-center">
        <p className="text-sm text-gray-600">Copyright &copy; 2024</p>
      </footer>
    </div>
  )
}

export default Layout
