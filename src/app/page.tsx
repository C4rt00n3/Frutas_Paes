"use serve";
import styles from "./page.module.css";
import Tag from "./components/Tag";
import Logo from "./components/Logo";
import Link from "next/link";
import Product from "./components/Product";
import producImg1 from "../../public/assets/product1.png";
import producImg2 from "../../public/assets/product2.png";
import Footer from "./components/Footer";

export default function Home() {
  let date: number = 0;
  const link =
    "https://api.whatsapp.com/send?phone=5577998188355&text=Ol%C3%A1,%20tudo%20bem?%20vim%20pelo%20seu%20site%20e%20estou%20entere%C3%A7ado%20no%20seus%20produtos.%20podemos%20conversar?";

  const finish = new Date("01-02-2014");
  const now = new Date();

  date = now.getFullYear() - finish.getFullYear();
  return (
    <>
      <main>
        <div className={styles.main}>
          <section id="home" className={styles.contentBox}>
            <div className={styles.boxLogo}>
              <span className={styles.spanDrop}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.5 7.5C4.5 7.10218 4.65804 6.72064 4.93934 6.43934C5.22064 6.15804 5.60218 6 6 6H24C24.3978 6 24.7794 6.15804 25.0607 6.43934C25.342 6.72064 25.5 7.10218 25.5 7.5C25.5 7.89782 25.342 8.27936 25.0607 8.56066C24.7794 8.84196 24.3978 9 24 9H6C5.60218 9 5.22064 8.84196 4.93934 8.56066C4.65804 8.27936 4.5 7.89782 4.5 7.5ZM4.5 15C4.5 14.6022 4.65804 14.2206 4.93934 13.9393C5.22064 13.658 5.60218 13.5 6 13.5H24C24.3978 13.5 24.7794 13.658 25.0607 13.9393C25.342 14.2206 25.5 14.6022 25.5 15C25.5 15.3978 25.342 15.7794 25.0607 16.0607C24.7794 16.342 24.3978 16.5 24 16.5H6C5.60218 16.5 5.22064 16.342 4.93934 16.0607C4.65804 15.7794 4.5 15.3978 4.5 15ZM4.5 22.5C4.5 22.1022 4.65804 21.7206 4.93934 21.4393C5.22064 21.158 5.60218 21 6 21H24C24.3978 21 24.7794 21.158 25.0607 21.4393C25.342 21.7206 25.5 22.1022 25.5 22.5C25.5 22.8978 25.342 23.2794 25.0607 23.5607C24.7794 23.842 24.3978 24 24 24H6C5.60218 24 5.22064 23.842 4.93934 23.5607C4.65804 23.2794 4.5 22.8978 4.5 22.5Z"
                    fill="black"
                  />
                </svg>
                <ul className={styles.listDropDown}>
                  <li className={styles.li_dropDown}>
                    <Link className={styles.anc_dropdown} href="#home">
                      Home
                    </Link>
                  </li>
                  <li className={styles.li_dropDown}>
                    <Link className={styles.anc_dropdown} href="#products">
                      Produtos
                    </Link>
                  </li>
                  <li className={styles.li_dropDown}>
                    <Link className={styles.anc_dropdown} href="#aboutUs">
                      Sobres Nós
                    </Link>
                  </li>
                  <li className={styles.li_dropDown}>
                    <Link className={styles.anc_dropdown} href="#contactUs">
                      Fale consoco
                    </Link>
                  </li>
                </ul>
              </span>
              <Logo />
            </div>
            <h1 className={styles.title}>
              <strong className={styles.textGreen}>Manga</strong> e{" "}
              <strong className={styles.textOrange}>Maracujá</strong> com
              Qualidade Livramentense
            </h1>
            <p className={styles.pragraph}>
              Somos uma empresa sediada em Livramento de Nossa Senhora,
              especializada na distribuição de manga e maracujá para todo o
              território brasileiro. Nossos produtos destacam-se pela sua
              qualidade intrínseca, combinada com a eficiência na entrega,
              respeitando sempre o meio ambiente e priorizando a satisfação dos
              nossos estimados clientes.
            </p>
            <Link target="blank" className={styles.talk} href={link}>
              Fale conoscos
            </Link>
          </section>
          <section className={styles.contentShow}>
            <ul className={styles.list}>
              <li>
                <Tag href="#home" id="homeTag">
                  Home
                </Tag>
              </li>
              <li>
                <Tag href="#products" id="productTag">
                  Produtos
                </Tag>
              </li>
              <li>
                <Tag href="#aboutUs" id="infoTag">
                  Sobres Nós
                </Tag>
              </li>
              <li>
                <Tag href="#contactUs" id="talk">
                  Fale consoco
                </Tag>
              </li>
            </ul>
          </section>
        </div>
        <div className={styles.void}></div>
        <section id="products" className={styles.products}>
          <h2 className={styles.subTitle}>Produtos</h2>
          <div className={styles.contenProducts}>
            <Product
              alt="uma caixa de mangas bonitas e bem avermelhadas"
              text="Somos uma empresa sediada em Livramento de Nossa Senhora, especializada na distribuição de manga e maracujá para todo o território brasileiro. Nossos produtos destacam-se pela sua qualidade intrínseca, combinada com a eficiência na entrega, respeitando sempre o meio ambiente e priorizando a satisfação dos nossos estimados clientes.
          Somos uma empresa sediada em Livramento de Nossa Senhora, especializada na distribuição de manga e maracujá para todo o território brasileiro. Nossos produtos destacam-se pela sua qualidade intrínseca, combinada com a eficiência na entrega, respeitando sempre o meio ambiente e priorizando a satisfação dos nossos estimados clientes."
              title="Distribuição de Mangas"
              img={producImg1}
            />
            <Product
              alt="uma caixa de maracujá"
              text="Somos uma empresa sediada em Livramento de Nossa Senhora, especializada na distribuição de manga e maracujá para todo o território brasileiro. Nossos produtos destacam-se pela sua qualidade intrínseca, combinada com a eficiência na entrega, respeitando sempre o meio ambiente e priorizando a satisfação dos nossos estimados clientes.
            Somos uma empresa sediada em Livramento de Nossa Senhora, especializada na distribuição de manga e maracujá para todo o território brasileiro. Nossos produtos destacam-se pela sua qualidade intrínseca, combinada com a eficiência na entrega, respeitando sempre o meio ambiente e priorizando a satisfação dos nossos estimados clientes."
              title="Distribuição de Maracujá"
              img={producImg2}
            />
          </div>
        </section>
        <section id="aboutUs" className={styles.aboutUs}>
          <h2 className={styles.subTitle}>Sobre Nos</h2>
          <p className={styles.aboutUsP}>
            Com uma experiência de mais de {date} anos no mercado de
            comercialização de frutas, a Frutas Paes se destaca pela busca
            constante de qualidade, pontualidade e atendimento exemplar. Nossos
            dedicados colaboradores compartilham os valores da transparência e
            respeito em cada interação com nossos clientes. Acreditamos que o
            respeito à natureza, a dedicação à qualidade intrínseca de nossos
            produtos e o compromisso com a satisfação de nossos clientes são os
            pilares que sustentam o nosso sucesso. Em cada safra, em cada
            entrega, estamos comprometidos em levar o melhor sabor da terra para
            sua mesa. Obrigado por fazer parte da nossa jornada, pois sua
            confiança é o nosso maior prêmio.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
