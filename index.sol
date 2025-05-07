// pragma solidity ^0.8.26;

contract exampleTest {
    function testCondition(uint n) public view returns (string) {
        if (n % 2 == 0) {
            return "is even number";
        } else {
            return "is odd number";
        }
    }
}