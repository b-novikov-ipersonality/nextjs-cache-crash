import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Img1 from "../components/assets/abdurazakov1.jpg";
import Img2 from "../components/assets/abdurazakov2.jpg";
import Img3 from "../components/assets/abdurazakov3.jpg";
import Img4 from "../components/assets/abdurazakov4.jpg";
import Img5 from "../components/assets/arefeva.jpg";
import Img6 from "../components/assets/ivchenko1.jpg";
import Img7 from "../components/assets/ivchenko2.jpg";
import Img8 from "../components/assets/kudrina1.jpg";
import Img9 from "../components/assets/kudrina2.jpg";
import Img10 from "../components/assets/kudrina3.jpg";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((img, idx) => (
          <div key={idx} style={{ width: "100px" }}>
            <Image src={img} alt="image" />
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
