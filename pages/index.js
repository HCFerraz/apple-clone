import Head from 'next/head'
import home from '../styles/Home.module.css'
import NavItem from '../components/nav-items'
import { FiChevronRight } from "react-icons/fi"

export default function Home() {
  return (
    <div>
      <nav className={home.navigation}>
        <div className={home.navigation_items_container}>
          <NavItem svg viewBox="0 0 16 44" fill="#d3cfcf" d="M8.02 16.23c-.73 0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63 2.83-.42 7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34 1.91-3.46 2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78 1.08-1.87.96-2.95-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31" />
          <NavItem text="Mac" />
          <NavItem text="iPad" />
          <NavItem text="iPhone" />
          <NavItem text="Watch" />
          <NavItem text="TV" />
          <NavItem text="Music" />
          <NavItem text="Suporte" />
          <NavItem svg viewBox="0 0 17 44" fill="#d3cfcf" d="M17.512,29.417l-4.786-4.788a7.068,7.068,0,1,0-.777.778l4.785,4.788a.55.55,0,1,0,.777-.777ZM1.427,20.054a5.946,5.946,0,1,1,5.946,5.954A5.957,5.957,0,0,1,1.427,20.054Z" />
          <NavItem svg viewBox="0 0 17 44" fill="#d3cfcf" d="M14.5,14H12.712a4.227,4.227,0,0,0-8.424,0H2.5A2.5,2.5,0,0,0,0,16.5v11A2.5,2.5,0,0,0,2.5,30h12A2.5,2.5,0,0,0,17,27.5v-11A2.5,2.5,0,0,0,14.5,14Zm-6-2.875A3.243,3.243,0,0,1,11.712,14H5.288A3.243,3.243,0,0,1,8.5,11.125ZM16,27.5A1.5,1.5,0,0,1,14.5,29H2.5A1.5,1.5,0,0,1,1,27.5v-11A1.5,1.5,0,0,1,2.5,15h12A1.5,1.5,0,0,1,16,16.5Z" />
        </div>
      </nav>
      <main className={home.container}>
        <Head>
          <title>Apple (Brasil)</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p className={home.controller}></p>
        <div className={home.span_selling}>
          <span><a>Compre online</a> com assistência de especialistas, entrega grátis e muito mais.</span>
        </div>
        <section className={home.section}>
          <a>
            <img src="apple-logo.png" />
            <h2>Os melhores presentes no último minuto.</h2>
            <a>Ver presentes <FiChevronRight /> </a>
            <div className={home.second}>
              <img src="watch-selling-1.png" />
              <img src="airpods-selling.png" />
              <img src="watch-selling-3.png" />
            </div>
          </a>
        </section>
      </main>
    </div>
  )
}
