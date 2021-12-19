# Ethereum

## 前提

- nvm
- yarn

## 実行方法

```sh
nvm use
npx hardhat test
```

## メモ

```sh
# Hardhat インストール
yarn add -D hardhat

# プロジェクト作成
npx hardhat

# OpenZeppelin ライブラリ追加
yarn add -D @openzeppelin/contracts
```

## Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
