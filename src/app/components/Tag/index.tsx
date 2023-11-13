"use serve";
import Link from "next/link";
import React from "react";
import style from "./style.module.css";

const Tag = ({
  children,
  id,
  href,
}: {
  children: React.ReactNode;
  id: string;
  href: string;
}) => {
  return (
    <Link className={style.Link} id={id} href={href}>
      {children}
      <span id="span" className={style.line}></span>
    </Link>
  );
};

export default Tag;
