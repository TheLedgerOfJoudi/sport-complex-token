import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CheckBalance from "../src/components/CheckBalance";
import GetCoin from "../src/components/GetCoin";
import TransferToken from "../src/components/TransferTokens";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <GetCoin />
      <CheckBalance />
      <TransferToken />
    </div>
  );
};

export default Home;
