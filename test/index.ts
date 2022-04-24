import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

describe("TodoContract", () => {
  context("addTodo", () => {
    it("Should add todo without error", async () => {
      const TodoContract = await ethers.getContractFactory("TodoContract");
      const todoContact = await TodoContract.deploy();
      await todoContact.deployed();

      const addTodoTx = await todoContact.addTodo("yeah");
      await addTodoTx.wait();

      const todoList = await todoContact.getTodoList();

      expect(todoList[0].text).to.equal("yeah");
      expect(todoList[0].isDone).to.equal(false);
    });
  });

  context("toggleTodo", () => {
    it("Should add todo without error", async () => {
      const TodoContract = await ethers.getContractFactory("TodoContract");
      const todoContact = await TodoContract.deploy();
      await todoContact.deployed();

      const addTodoTx = await todoContact.addTodo("yeah");
      await addTodoTx.wait();

      const toggleDoneTx = await todoContact.toggleDone(1);
      await toggleDoneTx.wait();

      const todoList = await todoContact.getTodoList();

      expect(todoList[0].isDone).to.equal(true);
    });
  });
});
