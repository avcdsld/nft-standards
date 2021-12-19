const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT", function () {
  it("Should mint and transfer", async function () {
    const [owner, recipient] = await ethers.getSigners();

    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    await nft.deployed();

    const mintTx = await nft.safeMint(owner.address);
    const receipt = await mintTx.wait();

    const tokenId = receipt.events[0].args.tokenId.toString();

    expect(await nft.ownerOf(tokenId)).to.equal(owner.address);

    const transferFromTx = await nft.transferFrom(owner.address, recipient.address, tokenId);
    await transferFromTx.wait();

    expect(await nft.ownerOf(tokenId)).to.equal(recipient.address);
  });
});
