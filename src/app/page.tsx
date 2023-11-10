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
            <Logo />
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
