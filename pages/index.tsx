import Web3 from "web3";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import CheckBalance from "../src/components/CheckBalance";
import GetCoin from "../src/components/GetCoin";
import TransferToken from "../src/components/TransferTokens";

const Home: NextPage = () => {
  const getUserAddress = async () => {
    const web3 = await new Web3(Web3.givenProvider);
    let address = "";
    await web3.eth.getAccounts().then((accounts) => {
      address = accounts[0];
    });
    return address;
  };

  const [address, setAddress] = useState("");
  useEffect(() => {
    const fetchAddressFromMetaMask = async () => {
      const address = await getUserAddress();
      setAddress(address);
    };
    fetchAddressFromMetaMask();
  }, []);

  return (
    <div className={styles.container}>
      <GetCoin userAddress={address} />
      <CheckBalance />
      <hr />
      <TransferToken userAddress={address} />
    </div>
  );
};

export default Home;
