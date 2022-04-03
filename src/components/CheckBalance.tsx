import Web3 from "web3";
import { ABI, ADDRESS } from "../config/ContractInterface";
import { useEffect, useState } from "react";

const getUserAddress = async () => {
  const web3 = new Web3(Web3.givenProvider);
  let address = "";
  await web3.eth.getAccounts().then((accounts) => {
    address = accounts[0];
  });
  return address;
};

function CheckBalance() {
  const [value, setValue] = useState("1");
  useEffect(() => {
    const fetchBalanceFromContract = async () => {
      const web3 = new Web3(Web3.givenProvider);
      const address = await getUserAddress();
      const contract = await new web3.eth.Contract(ABI, ADDRESS);
      const balance = await contract.methods.balanceOf(address).call();
      setValue(balance);
    };
    fetchBalanceFromContract();
  }, []);

  return <div> Your Balance is: {value}</div>;
}

export default CheckBalance;
