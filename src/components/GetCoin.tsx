import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { ABI, ADDRESS } from "../config/ContractInterface";

const GetCoin = (probs: { userAddress: any }) => {
  const getAirdropped = async () => {
    const address = probs.userAddress;
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(ABI as AbiItem[], ADDRESS);
    await contract.methods.getCoin(address).send({ from: address });
  };

  return <button onClick={getAirdropped}> Get one SC TOKEN!</button>;
};

export default GetCoin;
