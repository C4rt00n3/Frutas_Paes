"use serve";
import Image from "next/image";
import style from "./styles.module.css";
import footer from "../../../../public/assets/footer.svg";
import whatsapp from "../../../../public/assets/whatsapp.svg";
import facebook from "../../../../public/assets/circum_facebook.svg";
import instagram from "../../../../public/assets/bxl_instagram.svg";
import Link from "next/link";
import noCopy from "../../../../public/assets/no coppy.svg";

const Footer = () => {
  const link =
    "https://api.whatsapp.com/send?phone=5577998188355&text=Ol%C3%A1,%20tudo%20bem?%20vim%20pelo%20seu%20site%20e%20estou%20entere%C3%A7ado%20no%20seus%20produtos.%20podemos%20conversar?";
  return (
    <footer id="contactUs" className={style.footer}>
      <div className={style.box}>
        <Link href="#home">
          <Image src={footer} alt="Logo tipo frutas paes" />
        </Link>
        <div className={style.follow}>
          <h3>Follow us</h3>
          <div className={style.boxIcons}>
            <Link target="blank" href={link}>
              <Image src={whatsapp} alt="Ir para o nosso whatsapp" />
            </Link>
            <Link target="blank" href={"https://www.facebook.com/zete.paes"}>
              <Image src={facebook} alt="Ir para o nosso facebook" />
            </Link>
            <Link href={"https://www.instagram.com/zetepaes7/"} target="blank">
              <Image src={instagram} alt="Ir para o nosso instagram" />
            </Link>
          </div>
        </div>
        <div className={style.contacts}>
          <h3>Contacts</h3>
          <p>Address : R. Durval Mandu</p>
          <p>
            Email:{" "}
            <Link className={style.link} target="blank" href="">
              zetepaes833@gmail.com
            </Link>
          </p>
          <p>
            Phone number:{" "}
            <Link className={style.link} target="blank" href={link}>
              (77) 99818-8355
            </Link>
          </p>
        </div>
      </div>
      <Image src={noCopy} alt="All Copyrights reserved" />
    </footer>
  );
};

export default Footer;
