import '../styles/globals.css'
import "./mainmenu.css"
// import Header from './Header'
import MainMenu from './mainmenu'
import Link from 'next/link'


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
      <body className='bg-slate-200'>
        <section id="home-menu">
          {/* <div className="container max-w-6xl mx-auto px-6 py-12"> */}
          <MainMenu />
          <div id="main-menu" className="absolute top-0 right-0 hidden flex-col py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">

            <div className='flex flex-col md:space-y-0 md:space-x-4 md:justify-between'>
              {
                [
                  { url: "/", title: "Home" },
                  { url: "/todos", title: "Todos" },
                  { url: "/search", title: "Search" },
                  { url: "/subscribe", title: "Email Subscribe" },
                  { url: "/pricing_card", title: "Pricing Card" },
                  { url: "/product_modal", title: "Product Modal" },
                  { url: "/image_gallery", title: "Gallery" },
                  { url: "/login", title: "Login" },
                  { url: "/clipboard", title: "ClipBoard" },
                  { url: "/loopstudios", title: "Loopstudios" },
                  { url: "/shortly", title: "Shortly" }
                ]
                  .map(
                    ({ url, title }) => (


                      <div className="group flex items-center justify-between font-bold text-white">

                        <Link href={url}>{title}</Link>
                        <div className="mx-2-mt-2 duration-300 opacity-0 border-b-2 border-white group-hover:opacity-90 bg-yellow-300 h-2 group-hover:bg-yellow-500" ></div>
                      </div>
                    )
                  )
              }
            </div>

          </div>
          {/* </div> */}

        </section>

        {children}
      </body>
    </html >
  )
}
