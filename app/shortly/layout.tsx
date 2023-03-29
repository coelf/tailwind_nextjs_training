import "./shortly.css"

export const metadata = {
  title: 'Shortly',
  description: 'Shortly mini site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <div>
        {children}
      </div>
    </main>
  )
}
