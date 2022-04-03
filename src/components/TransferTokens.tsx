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

const TransferToken = () => {
  const [receiver, setReceiver] = useState("");
  const [tokens, setTokens] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const address = await getUserAddress();
    const web3 = await new Web3(Web3.givenProvider);
    const contract = await new web3.eth.Contract(ABI, ADDRESS);
    await contract.methods
      .transfer(receiver, BigInt(tokens) * BigInt(10 ** 18))
      .send({
        from: address,
        value: parseInt(343 * 10 ** 12),
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
