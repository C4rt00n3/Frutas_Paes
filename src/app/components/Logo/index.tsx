"use serve";
import logo from "../../../../public/assets/image 1.svg";
import frutasPaes from "../../../../public/assets/FrutasPaes.svg";
import Image from "next/image";
import style from "./style.module.css";

const Logo = () => {
  return (
    <div className={style.content}>
      <Image
        style={{
          minWidth: 50,
        }}
        className={style.img}
        alt="Este é o logo da Frutas Paes. nele á um desenho de mangas e maracujas."
        src={logo}
      />
      <Image
        style={{
          minWidth: 100,
        }}
        className={style.img}
        alt="Texto escrito Frutas Paes"
        src={frutasPaes}
      />
    </div>
  );
};

export default Logo;
