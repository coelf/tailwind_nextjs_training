import '../styles/globals.css'
import Header from './Header'


export const metadata = {
  title: 'Next.js 13 Tailwind',
  description: 'Next.js 13 with tailwind boilerplate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>SandBox Project</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html >
  )
}
