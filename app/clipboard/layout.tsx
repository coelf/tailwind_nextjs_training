import './clipboard.css'

export const metadata = {
  title: 'ClipBoard',
  description: 'ClipBoard mini site',
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
