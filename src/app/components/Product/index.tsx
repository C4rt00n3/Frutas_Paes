"use serve";

import Image, { StaticImageData } from "next/image";
import style from "./style.module.css";

const Product = ({
  title,
  text,
  img,
  alt,
}: {
  title: string;
  text: string;
  img: StaticImageData;
  alt: string;
}) => {
  return (
    <div className={style.content}>
      <h3 className={style.title1}>{title}</h3>
      <Image className={style.image} src={img} alt={alt} />
      <div className={style.box}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
};

export default Product;
