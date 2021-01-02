import Head from 'next/head'
import home from '../styles/home.module.css'
import NavItem from '../components/nav-items'
import WhiteBar from '../components/split-products-bar'
import ProductLink from '../components/product-link'
import ListItem from '../components/list-item'
import Menu from '../components/display-menu'


import { FiChevronRight } from "react-icons/fi"
import { IoIosPlayCircle } from 'react-icons/io'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { useState, useEffect } from 'react'

export default function Home() {
  const size = useWindowSize()
  const displayiPhone = (width) => {
    if (width <= 734) {
      return (
        <img src="iphone-full.png" />
      )
    }
    if (width > 734 && width <= 1068) {
      return (
        <img src="iphone-mid.png" />
      )
    }
    if (width > 1068) {
      return (
        <img src="iphone-small.png" />
      )
    }
  }
  return (
    <div>
      <nav className={home.navigation}>
        <ul className={home.navigation_items_container}>
          {size.width && size.width < '768' ? (
            <>
              {/* <li><HiOutlineMenuAlt4 size="25px" /></li> */}
              <Menu />
              <NavItem link="https://www.apple.com/br" svg viewBox="0 0 16 44" fill="#d3cfcf" d="M8.02 16.23c-.73 0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63 2.83-.42 7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34 1.91-3.46 2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78 1.08-1.87.96-2.95-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31" />
              <NavItem link="https://www.apple.com/br/shop/goto/bag" svg viewBox="0 0 17 44" fill="white" d="M14.5,14H12.712a4.227,4.227,0,0,0-8.424,0H2.5A2.5,2.5,0,0,0,0,16.5v11A2.5,2.5,0,0,0,2.5,30h12A2.5,2.5,0,0,0,17,27.5v-11A2.5,2.5,0,0,0,14.5,14Zm-6-2.875A3.243,3.243,0,0,1,11.712,14H5.288A3.243,3.243,0,0,1,8.5,11.125ZM16,27.5A1.5,1.5,0,0,1,14.5,29H2.5A1.5,1.5,0,0,1,1,27.5v-11A1.5,1.5,0,0,1,2.5,15h12A1.5,1.5,0,0,1,16,16.5Z" />
            </>
          ) : (
              <>
                <NavItem link="https://www.apple.com/br" svg viewBox="0 0 16 44" fill="#d3cfcf" d="M8.02 16.23c-.73 0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63 2.83-.42 7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34 1.91-3.46 2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78 1.08-1.87.96-2.95-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31" />
                <NavItem link="https://www.apple.com/br/mac" text="Mac" />
                <NavItem link="https://www.apple.com/br/ipad" text="iPad" />
                <NavItem link="https://www.apple.com/br/iphone" text="iPhone" />
                <NavItem link="https://www.apple.com/br/watch" text="Watch" />
                <NavItem link="https://www.apple.com/br/tv" text="TV" />
                <NavItem link="https://www.apple.com/br/music" text="Music" />
                <NavItem link="https://support.apple.com/pt-br" text="Suporte" />
                <NavItem link="https://www.apple.com/br/search" svg viewBox="0 0 17 44" fill="#d3cfcf" d="M17.512,29.417l-4.786-4.788a7.068,7.068,0,1,0-.777.778l4.785,4.788a.55.55,0,1,0,.777-.777ZM1.427,20.054a5.946,5.946,0,1,1,5.946,5.954A5.957,5.957,0,0,1,1.427,20.054Z" />
                <NavItem link="https://www.apple.com/br/shop/goto/bag" svg viewBox="0 0 17 44" fill="#d3cfcf" d="M14.5,14H12.712a4.227,4.227,0,0,0-8.424,0H2.5A2.5,2.5,0,0,0,0,16.5v11A2.5,2.5,0,0,0,2.5,30h12A2.5,2.5,0,0,0,17,27.5v-11A2.5,2.5,0,0,0,14.5,14Zm-6-2.875A3.243,3.243,0,0,1,11.712,14H5.288A3.243,3.243,0,0,1,8.5,11.125ZM16,27.5A1.5,1.5,0,0,1,14.5,29H2.5A1.5,1.5,0,0,1,1,27.5v-11A1.5,1.5,0,0,1,2.5,15h12A1.5,1.5,0,0,1,16,16.5Z" />
              </>
            )}
        </ul>
      </nav>
      <main className={home.container}>
        <Head>
          <title>Apple (Brasil)</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p className={home.controller}></p>
        <div className={home.span_selling}>
          <span><a href="https://www.apple.com/br/shop/goto/storehome">Compre online</a> com assistência de especialistas, entrega grátis e muito mais.</span>
        </div>
        <section className={home.selling_container}>
          <a href="https://www.apple.com/br/shop/goto/gifts" className={home.selling_link}>
            <img src="apple-logo.png" className={home.apple_logo} />
            <div className={home.box_container}>
              <div className={home.text_container}>
                <h2>Os melhores presentes</h2>
                <h2>no último minuto.</h2>
              </div>
              <ProductLink link="https://www.apple.com/br/shop/goto/gifts" text="Ver presentes" />
            </div>
            <div className={home.products_container}>
              {size.width && size.width < '900' ? (
                <>
                  <img src="watch-selling-1.png" />
                </>
              ) : (
                  <>
                    <img src="watch-selling-1.png" />
                    <img src="airpods-selling.png" />
                    <img src="watch-selling-3.png" />
                  </>
                )}
            </div>
          </a>
        </section>
        <WhiteBar />
        <section className={home.iphone_selling_container}>
          <a href="https://www.apple.com/br/iphone-12" className={home.iphone_selling_link}>
            <div className={home.iphone_box_container}>
              <h1>iPhone 12</h1>
              <h2>Rápido que é uma beleza.</h2>
              <div className={home.iphone_links_container}>
                <ProductLink link="https://www.apple.com/br/iphone-12" text="Saiba mais" />
                <ProductLink link="https://www.apple.com/br/shop/goto/buy_iphone/iphone_12" text="Comprar" />
              </div>
            </div>
            {displayiPhone(size.width)}
          </a>
        </section>
        <WhiteBar />
        <section className={home.watch_series_container}>
          <a href="https://www.apple.com/br/apple-watch-series-6" className={home.watch_series_link}>
            <div className={home.watch_series_box_container}>
              <img className={home.watch_series_logo} src="watch-series.png" />
              <h2>Um futuro mais saudável no seu pulso.</h2>
              <div className={home.watch_series_links_container}>
                <ProductLink link="https://www.apple.com/br/apple-watch-series-6" text="Saiba mais" />
                <ProductLink link="https://www.apple.com/br/shop/goto/apple_watch" link="" text="Comprar" />
              </div>
            </div>
            <img className={home.watch_series_img} src="watch-icon.png" />
          </a>
        </section>
        <WhiteBar />
        <div className={home.products_wrapper}>
          <section className={home.item_container}>
            <a href="https://www.apple.com/br/iphone-12-pro" className={home.pro_link}>
              <div className={home.pro_box_container}>
                <div className={home.pro_text_container}>
                  <h1>iPhone 12 Pro</h1>
                  <h2>Um salto radical.</h2>
                </div>
                <div className={home.item_links_container}>
                  <ProductLink link="https://www.apple.com/br/iphone-12-pro" text="Saiba mais" />
                  <ProductLink link="https://www.apple.com/br/shop/goto/buy_iphone/iphone_12_pro" text="Comprar" />
                </div>
              </div>
              <img className={home.iphone_pro_img} src="iphone-pro.png" />
            </a>
          </section>
          <section className={home.item_container}>
            <a href="https://www.apple.com/br/macbook-air" className={home.mac_link}>
              <div className={home.mac_box_container}>
                <div className={home.mac_text_container}>
                  <h1>MacBook Air</h1>
                  <h2>Uma potência no ar.</h2>
                </div>
                <div className={home.item_links_container}>
                  <ProductLink link="https://www.apple.com/br/macbook-air" text="Saiba mais" />
                  <ProductLink link="https://www.apple.com/br/shop/goto/buy_mac/macbook_air" text="Comprar" />
                </div>
              </div>
              <img className={home.macbook_img} src="macbook.jpeg" />
            </a>
          </section>
          <section className={home.item_container}>
            {size.width && size.width < '1068' ? (
              <a href="https://www.apple.com/br/ipad-air" className={home.airpad_small_link}>
                <img className={home.airpad_small_img} src="airpad-small.jpeg" />
                <div className={home.airpad_small_box_container}>
                  <h2>Cheio de potência, cor e possibilidades.</h2>
                  <div className={home.item_links_container}>
                    <ProductLink link="https://www.apple.com/br/ipad-air" text="Saiba mais" />
                    <ProductLink link="https://www.apple.com/br/shop/goto/buy_ipad/ipad_air" text="Comprar" />
                  </div>
                </div>
              </a>
            ) : (
                <a href="https://www.apple.com/br/ipad-air" className={home.airpad_big_link}>
                  <div className={home.airpad_big_box_container}>
                    <h1>iPad Air</h1>
                    <h2>Cheio de potência, cor e possibilidades.</h2>
                    <div className={home.item_links_container}>
                      <ProductLink link="https://www.apple.com/br/ipad-air" text="Saiba mais" />
                      <ProductLink link="https://www.apple.com/br/shop/goto/buy_ipad/ipad_air" text="Comprar" />
                    </div>
                  </div>
                  <img className={home.airpad_big_img} src="airpad-big.png" />
                </a>
              )}
          </section>
          <section className={home.item_container}>
            <a href="https://www.apple.com/br/airpods-max/" className={home.airpod_link}>
              <div className={home.airpod_box_container}>
                <div className={home.airpod_text_container}>
                  <h1>AirPods Max</h1>
                  <h2>Confira em breve a disponibilidade</h2>
                </div>
                <div className={home.item_links_container}>
                  <ProductLink link="https://www.apple.com/br/airpods-max/" text="Saiba mais" />
                  <ProductLink link="https://www.apple.com/br/shop/goto/buy_airpods/airpods_max" text="Ver preços" />
                </div>
              </div>
              <img className={home.airpod_img} src="airpods.png" />
            </a>
          </section>
          <section className={home.item_container}>
            <a href="https://apps.apple.com/br/story/id1535572935?itscg=10000&itsct=app-homepage-tile-31220" className={home.apple_store_link_container}>
              <img className={home.apple_store_img} src="apple-store.jpeg" />
              <div className={home.apple_store_box_container}>
                <div className={home.apple_store_text_container}>
                  <img className={home.apple_store_img_logo} src="apple-store-logo.png" />
                  <h2>Melhores de 2020</h2>
                  <h3>Os apps que nos ajudaram durante o ano.</h3>
                </div>
                <a href="https://apps.apple.com/br/story/id1535572935?itscg=10000&itsct=app-homepage-tile-31220">Conheça os vencedores <FiChevronRight /> </a>
              </div>
            </a>
          </section>
          <section className={home.item_container}>
            <a href="https://tv.apple.com/br/show/umc.cmc.37dvcdop7ub4m8tx9fnczl1a1?itscg=10000&itsct=atv-0-apl_hp-pmo_wch-earthnight-201104" className={home.poster_link_container}>
              <img className={home.poster_img} src="poster-img.jpeg" />
              <div className={home.poster_box_container}>
                <div className={home.poster_imgs_container}>
                  <img className={home.poster_apple_tv_logo} src="apple-tv.png" />
                  <img className={home.poster_name} src="poster-name.png" />
                </div>
                <div className={home.poster_link}>
                  <h3>Descubra a vida no escuro da noite.</h3>
                  <a href="https://tv.apple.com/br/show/umc.cmc.37dvcdop7ub4m8tx9fnczl1a1?itscg=10000&itsct=atv-0-apl_hp-pmo_wch-earthnight-201104">Assista agora <IoIosPlayCircle size={20} /> </a>
                </div>
              </div>
            </a>
          </section>
        </div>
        <WhiteBar />
      </main>
      <footer className={home.footer_container}>
        <section className={home.footer_first_description}>
          <p>R$ 9,90 por mês após o período de teste gratuito.
          Uma assinatura por grupo de Compartilhamento Familiar do iCloud.
          Oferta válida por três meses a partir da data de ativação do aparelho qualificado.
          A assinatura é renovada automaticamente até seu cancelamento.
          Aplicam-se outros <a href="https://www.apple.com/br/promo">termos</a> e restrições.</p>
        </section>
        {size.width && size.width < '768' ? (
          <>
            <nav className={home.footer_nav}>
              <ul className={home.footer_list_container_small}>
                <ListItem
                  itemsQuantity={9}
                  links={
                    [
                      "https://www.apple.com/br/mac",
                      "https://www.apple.com/br/ipad",
                      "https://www.apple.com/br/iphone",
                      "https://www.apple.com/br/watch",
                      "https://www.apple.com/br/tv",
                      "https://www.apple.com/br/music",
                      "https://www.apple.com/br/airpods",
                      "https://www.apple.com/br/ipod-touch",
                      "https://www.apple.com/br/shop/goto/buy_accessories"
                    ]
                  }
                  itemText={['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'AirPods', 'iPod Touch', 'Acessórios']}
                  text="Descobrir e Comprar" />
                <ListItem
                  itemsQuantity={8}
                  links={
                    [
                      "https://www.apple.com/br/apple-music",
                      "https://www.apple.com/br/apple-tv-plus",
                      "https://www.apple.com/br/apple-arcade",
                      "https://www.apple.com/br/icloud",
                      "https://www.apple.com/br/apple-one",
                      "https://www.apple.com/br/apple-pay",
                      "https://www.apple.com/br/apple-books",
                      "https://www.apple.com/br/app-store"
                    ]
                  }
                  itemText={['Apple Music', 'Apple TV+', 'Apple Arcade', 'iCloud', 'Apple One', 'Apple Pay', 'Apple Books', 'App Store']}
                  text="Serviços" />
                <ListItem
                  itemsQuantity={3}
                  links={
                    [
                      "https://appleid.apple.com/br",
                      "https://www.apple.com/br/shop/goto/account",
                      "https://www.icloud.com"
                    ]
                  }
                  itemText={['Gerenciar seu ID Apple', 'Conta da Apple Store', 'iCloud.com']}
                  text="Sua conta"
                />
                <ListItem
                  itemsQuantity={10}
                  links={
                    [
                      "https://www.apple.com/br/retail",
                      "https://www.apple.com/br/shop/goto/shop",
                      "https://www.apple.com/br/retail/geniusbar",
                      "https://www.apple.com/br/today",
                      "https://www.apple.com/br/today/camp",
                      "https://itunes.apple.com/br/app/apple-store/id375380948?pt=2003&ct=footer&mt=8",
                      "https://www.apple.com/br/shop/goto/ww/financing",
                      "https://www.apple.com/br/recycling",
                      "https://www.apple.com/br/shop/goto/order/list",
                      "https://www.apple.com/br/shop/goto/help"
                    ]
                  }
                  itemText={['Encontre uma loja', 'Compre online', "Genius Bar", "Today at Apple", "Apple Camp", "App Apple Store", "Financiamento", "Programa de Reciclagem da Apple", "Status do seu pedido", "Ajuda para comprar"]}
                  text="Apple Store"
                />
                <ListItem
                  itemsQuantity={2}
                  links={[
                    "https://www.apple.com/br/retail/business",
                    "https://www.apple.com/br/business"
                  ]}
                  itemText={['Apple e os negócios', 'Comprar para a sua empresa']}
                  text="Para Empresas"
                />
                <ListItem
                  itemsQuantity={3}
                  links={[
                    "https://www.apple.com/br/education",
                    "https://www.apple.com/br/education/k12/how-to-buy",
                    "https://www.apple.com/br/shop/goto/educationrouting"
                  ]}
                  itemText={['Apple e a Educação', 'Comprar para Educação Básica', 'Comprar para a faculdade']}
                  text="Para a Educação"
                />
                <ListItem
                  itemsQuantity={2}
                  links={[
                    "https://www.apple.com/br/healthcare",
                    "https://www.apple.com/br/healthcare/apple-watch"
                  ]}
                  itemText={['Apple e a Saúde', 'Saúde no Apple Watch']}
                  text="Para a Saúde"
                />
                <ListItem
                  itemsQuantity={4}
                  links={[
                    "https://www.apple.com/br/accessibility",
                    "https://www.apple.com/br/environment",
                    "https://www.apple.com/br/privacy",
                    "https://www.apple.com/br/supplier-responsibility"
                  ]}
                  itemText={['Acessibilidade', 'Meio ambiente', 'Privacidade', 'Responsabilidade dos fornecedores']}
                  text="Valores da Apple"
                />
                <ListItem
                  itemsQuantity={6}
                  links={[
                    "https://www.apple.com/br/legal/privacy",
                    "https://www.apple.com/br/shop/goto/help/sales_refunds",
                    "https://www.apple.com/br/legal",
                    "https://www.apple.com/br/sitemap"
                  ]}
                  itemText={['Newsroom', 'Liderança da Apple', 'Oportunidades de trabalho', 'Investidores', 'Eventos', 'Contato']}
                  text="Sobre a Apple"
                />
              </ul>
            </nav>
            <section className={home.footer_last_description}>
              <p>Outras formas de comprar: <a href="https://www.apple.com/br/retail">encontre uma Apple Store</a> ou <a href="https://locate.apple.com/br/pt">revendedor Apple</a> na sua região.
          Ou ligue para 0800-761-0867. Rua Leopoldo Couto de Magalhães Jr., 700, 7º andar, Itaim Bibi. São Paulo, SP. CEP: 04542-000.
          <br />Os Serviços de Mídia da Apple são fornecidos pela Apple Services LATAM LLC.</p>
              <a href="https://www.apple.com/choose-country-region">Brasil</a>
              <div>
                <p>Copyright © 2020 Apple Inc. Todos os direitos reservados. Apple Computer Brasil Ltda. CNPJ: 00.623.904/0003-35</p>
                <div className={home.footer_apple_politics_container}>
                  <a href="https://www.apple.com/br/legal/privacy">Política de Privacidade</a>
                  <a href="https://www.apple.com/br/shop/goto/help/sales_refunds">Política de vendas</a>
                  <a href="https://www.apple.com/br/legal">Avisos legais</a>
                  <a href="https://www.apple.com/br/sitemap">Mapa do site</a>
                </div>
              </div>
            </section>
          </>
        ) : (
            <>
              <nav className={home.footer_nav}>
                <ul className={home.footer_list_container_big}>
                  <li>
                    <div>
                      <h4>Descobrir e Comprar</h4>
                      <a href="https://www.apple.com/br/mac">Mac</a>
                      <a href="https://www.apple.com/br/ipad">iPad</a>
                      <a href="https://www.apple.com/br/iphone">iPhone</a>
                      <a href="https://www.apple.com/br/watch">Watch</a>
                      <a href="https://www.apple.com/br/tv">TV</a>
                      <a href="https://www.apple.com/br/music">Music</a>
                      <a href="https://www.apple.com/br/airpods">AirPods</a>
                      <a href="https://www.apple.com/br/ipod-touch">iPod Touch</a>
                      <a href="https://www.apple.com/br/shop/goto/buy_accessories">Acessórios</a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Serviços</h4>
                      <a href="https://www.apple.com/br/apple-music">Apple Music</a>
                      <a href="https://www.apple.com/br/apple-tv-plus">Apple TV+</a>
                      <a href="https://www.apple.com/br/apple-arcade">Apple Arcade</a>
                      <a href="https://www.apple.com/br/icloud">iCloud</a>
                      <a href="https://www.apple.com/br/apple-one">Apple One</a>
                      <a href="https://www.apple.com/br/apple-pay">Apple Pay</a>
                      <a href="https://www.apple.com/br/apple-books">Apple Books</a>
                      <a href="https://www.apple.com/br/app-store">App Store</a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Sua conta</h4>
                      <a href="https://appleid.apple.com/br">Gerenciar seu ID Apple</a>
                      <a href="https://www.apple.com/br/shop/goto/account">Conta da Apple Store</a>
                      <a href="https://www.icloud.com">iCloud.com</a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Apple Store</h4>
                      <a href="https://www.apple.com/br/retail">Encontre uma loja</a>
                      <a href="https://www.apple.com/br/shop/goto/shop">Compre Online</a>
                      <a href="https://www.apple.com/br/retail/geniusbar">Genius Bar</a>
                      <a href="https://www.apple.com/br/today">Today at Apple</a>
                      <a href="https://www.apple.com/br/today/camp">Apple Camp</a>
                      <a href="https://itunes.apple.com/br/app/apple-store/id375380948?pt=2003&ct=footer&mt=8">App Apple Store</a>
                      <a href="https://www.apple.com/br/shop/goto/ww/financing">Financiamento</a>
                      <a href="https://www.apple.com/br/recycling">Programa de Reciclagem da Apple</a>
                      <a href="https://www.apple.com/br/shop/goto/order/list">Status do seu pedido</a>
                      <a href="https://www.apple.com/br/shop/goto/help">Ajuda para comprar</a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Para Empresas</h4>
                      <a href="https://www.apple.com/br/business">Apple e os negócios</a>
                      <a href="https://www.apple.com/br/retail/business">Comprar para a sua empresa</a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Para a Educação</h4>
                      <a href="https://www.apple.com/br/education">Apple e a Educação</a>
                      <a href="https://www.apple.com/br/education/k12/how-to-buy">Comprar para Educação Básica</a>
                      <a href="https://www.apple.com/br/shop/goto/educationrouting">Comprar para a faculdade</a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Para a Saúde</h4>
                      <a href="https://www.apple.com/br/healthcare">Apple e a Saúde</a>
                      <a href="https://www.apple.com/br/healthcare/apple-watch">Saúde no Apple Watch</a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Valores da Apple</h4>
                      <a href="https://www.apple.com/br/accessibility">Acessibilidade</a>
                      <a href="https://www.apple.com/br/environment">Meio ambiente</a>
                      <a href="https://www.apple.com/br/privacy">Privacidade</a>
                      <a href="https://www.apple.com/br/supplier-responsibility">Responsabilidade dos fornecedores</a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Sobre a Apple</h4>
                      <a href="https://www.apple.com/br/newsroom">Newsroom</a>
                      <a href="https://www.apple.com/br/leadership">Liderança da Apple</a>
                      <a href="https://www.apple.com/jobs/br">Oportunidades de trabalho</a>
                      <a href="https://investor.apple.com">Investidores</a>
                      <a href="https://www.apple.com/br/apple-events">Eventos</a>
                      <a href="https://www.apple.com/br/contact">Contato</a>
                    </div>
                  </li>
                </ul>
              </nav>
              <section className={home.footer_last_description}>
                <p>Outras formas de comprar: <a href="https://www.apple.com/br/retail">encontre uma Apple Store</a> ou <a href="https://locate.apple.com/br/pt">revendedor Apple</a> na sua região.
                Ou ligue para 0800-761-0867. Rua Leopoldo Couto de Magalhães Jr., 700, 7º andar, Itaim Bibi. São Paulo, SP. CEP: 04542-000.
                <br />Os Serviços de Mídia da Apple são fornecidos pela Apple Services LATAM LLC.</p>
                <div>
                  <div className={home.footer_copyright_container}><p>Copyright © 2020 Apple Inc. Todos os direitos reservados. Apple Computer Brasil Ltda. CNPJ: 00.623.904/0003-35</p><a href="https://www.apple.com/choose-country-region">Brasil</a></div>
                  <div className={home.footer_apple_politics_container}>
                    <a href="https://www.apple.com/br/legal/privacy">Política de Privacidade</a>
                    <a href="https://www.apple.com/br/shop/goto/help/sales_refunds">Política de vendas</a>
                    <a href="https://www.apple.com/br/legal">Avisos legais</a>
                    <a href="https://www.apple.com/br/sitemap">Mapa do site</a>
                  </div>
                </div>
              </section>
            </>
          )}
      </footer>
    </div >
  )
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
      window.addEventListener("resize", handleResize)

      handleResize()

      return () => window.removeEventListener("resize", handleResize)
    }

  }, [])
  return windowSize
}