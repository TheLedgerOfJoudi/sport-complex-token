import Web3 from "web3";
import { ABI, ADDRESS } from "../config/ContractInterface";

const GetCoin = (probs) => {
  const getAirdropped = async () => {
    const address = probs.userAddress;
    const web3 = await new Web3(Web3.givenProvider);
    const contract = await new web3.eth.Contract(ABI, ADDRESS);
    await contract.methods.getCoin(address).send({ from: address });
  };

  return <button onClick={getAirdropped}> Get one SC TOKEN!</button>;
};

export default GetCoin;
