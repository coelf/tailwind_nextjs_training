import Search from "./Search"

export const metadata = {
  title: 'Search',
  description: 'Todos from PlaceHolder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div>
        <h1>Search</h1>

      </div>
      <div className="flex1 pl-5">
        {/* @ts-ignore */}
        <Search />
        <div>
          {children}
        </div>
      </div>

    </main >



  )
}
