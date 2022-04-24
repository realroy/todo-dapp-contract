//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract TodoContract {
    struct Todo {
        uint id;
        string text;
        bool isDone;
    }

    Todo[] private todoList;

    constructor() {
        console.log("Deploying a Todo");
    }

    function addTodo(string memory text) public {
        console.log("Add todo");
        uint size = todoList.length + 1;
        
        todoList.push(Todo(size, text, false));
    }

    function toggleDone(uint id) public {
        for (uint i=0; i<todoList.length; i++) {
            if (todoList[i].id == id) {
                todoList[i].isDone = !todoList[i].isDone;
                break;
            }
        }
    }

    function getTodoList() public view returns (Todo[] memory) {
        return todoList;
    }

}
