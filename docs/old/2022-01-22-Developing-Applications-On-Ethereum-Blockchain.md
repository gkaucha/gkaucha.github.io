---
layout: post
title: Developing Applications on Ethereum Blockhain
categories: Blockchain
---
Ethereum is open access to digital money and data-friendly services for everyone – no matter your background or location. It's a community-built technology behind the cryptocurrency ether (ETH) and thousands of applications you can use today.

<!--continue-->
[Ethereum Official](https://ethereum.org/en/what-is-ethereum/  "What is Ethereum?")

- [Ethereum Protocol](#section-1)
- [Getting Started with Smart Contracts](#section-2)
- [Solidity Programming Language](#section-3)
- [Ethereum API](#section-4)
- [Truffle Framework](#section-5)
- [Developing Advanced Smart Contracts](#section-6)
- [Web Applications with Ethereum](#section-7)


## 1. Ethereum Protocol {#section-1}


## 2. Getting started with smart contracts {#section-2}


## 3. Solidity Programming Language {#section-3}

Details on solidity programming language features and implemmentation using Remix : [Solidity in Details](https://gkaucha.github.io/turorial/2021-12-21-Solidity)



## 4. Ethereum API {#section-4}

#### With this module, we should be able to :
1. Deploy a contract with Ethereum API
2. Interact with a contract using Ethereum API**

#### Tools to Install
- NodeJS  : to run Javascript scripts
- npm     : to install Javascript libraries
- code editor with solidity code higlight feature


#### Solidity Compiler

Insalling solidity compiler on Ubuntu

```
$ sudo apt-get-repository ppa:ethereum/ethereum
$ sudo apt-get update
$ sudo apt-get install solc
```

#### Solidity Compiler's Output

Solidity compiler can produce one of following 4 outputs:

1. Bytecode executed by Ehtereum nodes
2. Application Binary Interface(ABI): a JSON file that specifies what methods a contract has, what parameters they expect, and what they return. It is essential for any application that we try to interact with a smart contract.
3. Gas estimates: how much gas each method will require.
4. Metadata : Compiler version, sources used etc.


#### Using Solidity Compiler

```
solc
    --combined-json bin, abi    # Generate bytecode and ABI
    --output-dir output-folder  # Output folder
    Voter.sol                   # Contract to compile

// compile MultiSigWallet using solc
$ solc --combined-json=abi,bin,metadata --output-dir . MultiSigWallet.sol

// Inspect the compiled file
$ cat combined.json | jq

// Inspect the abi field from the output
$ cat combined.json | jq -r '.contracts."MultiSigWallet.sol:MultiSigWallet".abi'

```

#### Ethereum Clients

- need to interact with Ethereum programatically
- learn about Ethereum Clients' API

![Interact with Ethereum](/assets/images/interact-with-ethereum.png "interact with etheruem")


##### Operations with Ethereum Clients

- query state of a node
- get state of an ethereum network
- send transactions, deploy contracts
- manage accounts(private keys)

##### Ethereum Clients Implemmentations

Ethereum clients implemments the ethereum specifications

- Geth : Implemmented in Go
- Parity : implemmented in Rust
- Others : ruby-ethereum, cpp-ethereum, pyethapp, Ethereum(J)

##### JSON-RPC API


| Medhod               | Description                            |
|----------------------|----------------------------------------|
| web3_clientVersion   | Ge a client's version                  |
| net_peerCount        | Get a number of connected peers        |
| eth_getBlockByHash   | Get a block by hash                    |
| eth_getBlockByNumber | Get a block by number                  |
| eth_sendTransaction  | Send a transaction to Ethereum Network |
{: .table .table-striped .table-hover }

##### JSON-RPC Request

```
{
    "jsonrpc":"2.0",
    "method":"eth_getBlockByNumber",
    "params":["0x1b4",true],
    "id": 10
}
```
##### JSON-RPC Response

```
{
    "id":10,
    "jsonrpc":"2.0",
    "result":{
        "hash":"0xc9...035b",
        "difficulty":"0x037f07",
        ...
    }
}
```

#### Geth Client

```
// Install geth on Ubuntu
# sudo apt-get install ethereum

// Running Geth
geth \
    --rinkeby \       # Connect to Rinkeby network
    --rpc \           # Enable JSON-RPC
    --syncmode=light  # "Light" - faster sync mode

// Once executed, Geth starts on port 8545 to be accessed by HTTP clinet

// Geth Commands

$ geth accounts  // manage geth accounts
$ geth init        // create a new genesis block
$ geth help         // Display help
# geth attach       // Interactive Javascript session

```
For more details on **[Geth Commands](https://geth.ethereum.org/docs/interface/command-line-options)**

**Geth Javascript Objects**

| Object               | Description                            |
|----------------------|----------------------------------------|
| eth                  | Expose web3.js interface               |
| admin                | Control the client node                |
| miner                | Controls mining new blocks             |
| personal             | Manage accounts                        |
| txpool               | Information about transaction pool     |
| debug                | Used for Geth Debugging                |
{: .table .table-striped .table-hover }


**Geth Attach and Geth Control Accounts**

```
geth attach http://127.0.0.1:8545
> admin.peers
[{id:"3431....cb9", ...}, ...]
> txpool.status
{
    pending: 6,
    queued: 3
}

> personal.listAccounts                 // Get list of accounts
> personal.newAccount("password")       // Create new account

// allows to send transaction using this account
> personal.unlockAccount("0x64...989", "password", 300)
```

### Using Geth

- Create an account with Geth
- Transfer funds to the new account
- Interact with geth



## 5. Truffle Framework {#section-5}



## 6. Developing Advanced Smart Contracts {#section-6}


## 7. Web Application with Ethereum {#section-7}