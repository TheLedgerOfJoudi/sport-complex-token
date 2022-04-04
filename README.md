This is my submission for Innopolis University's smart contract UI builder internship's pre-task.

To check out the frontend interface, you can visit https://sport-complex-token.vercel.app/ .
 
Also, you can clone this repo, run `npm install & npm run dev`, and open http://localhost:3000/ in your browser.

This frontend talks to a live contract on Ethereum's Rinkeby, this is the link to its blockexplorer page: https://rinkeby.etherscan.io/address/0xb9531f4f103cfbe9ff8d6f9923dc467f2a4c66b9 .

The only change I made to the proposed ERC20 implementation, is to change the first line in the `getCoin()` function from `balances[account] += 1;` to `balances[account] += 10 ** 18;` to take decimals into accounts. This could be mitigated from the frontend, but MetaMask was showing fractions of balances only.