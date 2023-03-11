import "./loopstudios.css"

export const metadata = {
  title: 'Loopstudios',
  description: 'Loopstudios mini site',
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
