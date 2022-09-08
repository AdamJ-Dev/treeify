import { Item } from "../../../src/types";

class TestCase {
  constructor(readonly test: Item[], readonly expectation: Item[], readonly description: string) {
    this.test = test;
    this.expectation = expectation;
    this.description = description;
  }
}

export default TestCase;
