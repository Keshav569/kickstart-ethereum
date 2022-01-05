# Crowd Coin

## What?
### A decentralized ethereum blockchain based crowdfunding platform inspired by [kickstarter.com](https://www.kickstarter.com).

## Why?
To increase transparency and prevent fraudulent activities in the world of start-ups and the platforms that have sprung up around them, such as Kickstarter. Despite the fact that e-payments are protected by security measures such as symmetric encryption, they are nevertheless vulnerable to hacking.There is no guarantee that people who post projects on Kickstarter will deliver on their projects, use the money to implement their projects, or that the completed projects will meet backers' expectations. 

## How?

The project is a decentralized crowdfunding application, built to solve the problem of money being misused by people, collected using the traditional crowdfunding applications.Making transaction histories more transparent and secure through the use of blockchain technology. Because Blockchain is a type of distributed ledger, all network participants share the same documentation as opposed to individual copies. Contributors can decide Where to invest and can Acknowledge the requests for money made by the Project Creators through their votes.The creator can only use the money if a minimum number of contributors approve a certain request. It will make sure the money is used for the right purposes only.

## Installation

You'll need [Node.js (npm or yarn)](https://docs.npmjs.com/getting-started) installed to build the app.

You will also need MetaMask (Ether wallet) installed as a browser extension. MetaMask should be using the Rinkeby test network and have a bit of Ether split between two addresses.

### To run the application locally

1. Make a clone of this directory.
2. Open terminal and Cd to the downloaded directory.
```sh
cd kickstart-ethereum
```
3. Install required dependencies.
```sh
npm install
```
4. Run automated tests to verify the functionality of solidity contracts (optional)
```sh
npm run test
```
5. Run Next.js server
```sh
npm run dev
```
6. You will see server ready on localhost:3000/  prompt on terminal.
7. Open broswer where the metamask extension in installed (preffered Chrome) and open http://localhost:3000

## Tools Used
* [React.js](https://reactjs.org/docs/getting-started.html) - The web framework used
* [Web3.js](https://web3js.readthedocs.io/en/v1.2.4/) - Connects to Ethereum network
* [Next.js](https://nextjs.org/docs) - Server side rendering and routing
* [Ganache-cli](https://github.com/trufflesuite/ganache-cli) - Ethereum development tools
* [Mocha](https://mochajs.org/#getting-started) - JavaScript test framework

## Acknowledgments
* Huge thanks to Stephen Grider for the in-depth course and inspirational project!
