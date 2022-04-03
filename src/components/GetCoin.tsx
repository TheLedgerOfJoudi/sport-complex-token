import Web3 from "web3";
import { ABI, ADDRESS } from "../config/ContractInterface";

const getUserAddress = async () => {
  const web3 = new Web3(Web3.givenProvider);
  let address = "";
  await web3.eth.getAccounts().then((accounts) => {
    address = accounts[0];
  });
  return address;
};

const getAirdropped = async () => {
  const address = await getUserAddress();
  const web3 = await new Web3(Web3.givenProvider);
  const contract = await new web3.eth.Contract(ABI, ADDRESS);
  await contract.methods.getCoin(address).send({ from: address });
  console.log("fsd");
};

const GetCoin = () => {
  return <button onClick={getAirdropped}> Get one SC TOKEN!</button>;
};

export default GetCoin;
