import { makeTree, orderByTree } from "../src/index";
import testCases from "./test-cases/order-by-tree";

describe("orderByTree", () => {
  for (const testCase of testCases) {
    it(testCase.description, () => {
      expect(orderByTree(testCase.test)).toEqual(testCase.expectation);
    });
  }
});
