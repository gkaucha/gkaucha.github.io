---
layout: post
title: Developing Applications on Ethereum Blockhain
categories: Blockchain
---
Ethereum is open access to digital money and data-friendly services for everyone – no matter your background or location. It's a community-built technology behind the cryptocurrency ether (ETH) and thousands of applications you can use today.

<!--continue-->
(Source : https://ethereum.org/en/what-is-ethereum/)

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

Details on solidity programming language features and implemmentation using Remix : [Solidity in Details](https://gkaucha.github.io/programming/2021/12/21/Solidity.html)



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
```

## 5. Truffle Framework {#section-5}



## 6. Developing Advanced Smart Contracts {#section-6}


## 7. Web Application with Ethereum {#section-7}