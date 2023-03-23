import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
import cls from "classnames";

const Card = ({ name, imageUrl, href, imgAlt }) => {
  return (
    <Link href={href}>
      <div className={styles.cardLink}>
        <div className={cls("glass", styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={imageUrl}
              width={260}
              height={160}
              alt={imgAlt}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
