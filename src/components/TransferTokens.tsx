import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { ABI, ADDRESS } from "../config/ContractInterface";
import { FormEvent, useState } from "react";

const TransferToken = (probs: { userAddress: any }) => {
  const [receiver, setReceiver] = useState("");
  const [tokens, setTokens] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const address = probs.userAddress;
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(ABI as AbiItem[], ADDRESS);
    await contract.methods
      .transfer(receiver, BigInt(tokens) * BigInt(10 ** 18))
      .send({
        from: address,
        value: "343000000000000",
      });
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <button type="submit">Transfer tokens</button>
      <br />
      <input
        type="text"
        name="receiver"
        placeholder="ToAccount"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />

      <input
        type="number"
        name="numOfTokens"
        placeholder="# Of Tokens"
        value={tokens}
        onChange={(e) => setTokens(e.target.value)}
      />
      <br />
    </form>
  );
};

export default TransferToken;
