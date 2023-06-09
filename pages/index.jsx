import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "../components/banner";
import Card from "@/components/card";
import coffeeStoresData from "../data/coffee-stores";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps(context) {
  // const data = fetch()
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  };
}

export default function Home(props) {
  console.log(props);
  const onClickBannerButton = () => {
    console.log("click");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoiseur</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner onClickHandler={onClickBannerButton} buttonText={"Welcome"}>
          Welcome
        </Banner>

        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={700}
            height={400}
            alt="hero image"
          />
        </div>

        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto Stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores?.map((store) => {
                return (
                  <Card
                    key={store.id}
                    name={store.name}
                    imageUrl={store.imgUrl}
                    href={`/coffee-store/${store.id}`}
                    imgAlt="dark-house-shop"
                    className={styles.card}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
