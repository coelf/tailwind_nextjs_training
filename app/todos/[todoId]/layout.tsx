import TodosList from "../TodosList"

export const metadata = {
  title: 'Todos',
  description: 'Todos from PlaceHolder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex w-screen">
      <div>
        {/* @ts-ignore */}
        <TodosList />
      </div>
      <div className="flex-row">{children}</div>

    </main >



  )
}
