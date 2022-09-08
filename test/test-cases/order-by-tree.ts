import { Item } from "../../src/types";
import TestCase from "./model/order-by-tree-case";

const noItems: Item[] = [];

const oneItem = [
  {
    id: "A",
    parentId: null,
  },
];

const twoItems = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: null,
  },
];

const oneItemOneChild = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
];

const twoItemsOneChildEachOrder1 = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
  {
    id: "C",
    parentId: null,
  },
  {
    id: "D",
    parentId: "C",
  },
];

const twoItemsOneChildEachOrder2 = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "C",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
  {
    id: "D",
    parentId: "C",
  },
];

const twoItemsOneChildEachOrder2Expectation = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
  {
    id: "C",
    parentId: null,
  },
  {
    id: "D",
    parentId: "C",
  },
];

const oneItemTwoChildren = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
  {
    id: "C",
    parentId: "A",
  },
];

const twoItemsTwoChildrenEachOrder1 = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
  {
    id: "C",
    parentId: "A",
  },
  {
    id: "D",
    parentId: null,
  },
  {
    id: "E",
    parentId: "D",
  },
  {
    id: "F",
    parentId: "D",
  },
];

const twoItemsTwoChildrenEachOrder2 = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: null,
  },
  {
    id: "C",
    parentId: "A",
  },
  {
    id: "D",
    parentId: "A",
  },
  {
    id: "E",
    parentId: "B",
  },
  {
    id: "F",
    parentId: "B",
  },
];

const twoItemsTwoChildrenEachOrder2Expectation = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "C",
    parentId: "A",
  },
  {
    id: "D",
    parentId: "A",
  },
  {
    id: "B",
    parentId: null,
  },
  {
    id: "E",
    parentId: "B",
  },
  {
    id: "F",
    parentId: "B",
  },
];

const twoItemsTwoChildrenEachOrder3 = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
  {
    id: "C",
    parentId: null,
  },
  {
    id: "D",
    parentId: "A",
  },
  {
    id: "E",
    parentId: "C",
  },
  {
    id: "F",
    parentId: "C",
  },
];

const twoItemsTwoChildrenEachOrder3Expectation = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
  {
    id: "D",
    parentId: "A",
  },
  {
    id: "C",
    parentId: null,
  },
  {
    id: "E",
    parentId: "C",
  },
  {
    id: "F",
    parentId: "C",
  },
];

const oneItemOneChainOfAncestry = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
  {
    id: "C",
    parentId: "B",
  },
];

const twoItemsOneChainOfAncestryEachOrder1 = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
  {
    id: "C",
    parentId: "B",
  },
  {
    id: "D",
    parentId: null,
  },
  {
    id: "E",
    parentId: "D",
  },
  {
    id: "F",
    parentId: "E",
  },
];

const twoItemsOneChainOfAncestryEachOrder2 = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: null,
  },
  {
    id: "C",
    parentId: "A",
  },
  {
    id: "D",
    parentId: "C",
  },
  {
    id: "E",
    parentId: "B",
  },
  {
    id: "F",
    parentId: "E",
  },
];

const twoItemsOneChainOfAncestryEachOrder2Expectation = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "C",
    parentId: "A",
  },
  {
    id: "D",
    parentId: "C",
  },
  {
    id: "B",
    parentId: null,
  },
  {
    id: "E",
    parentId: "B",
  },
  {
    id: "F",
    parentId: "E",
  },
];

const twoItemsOneChainOfAncestryEachOrder3 = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
  {
    id: "C",
    parentId: null,
  },

  {
    id: "D",
    parentId: "B",
  },
  {
    id: "E",
    parentId: "C",
  },
  {
    id: "F",
    parentId: "E",
  },
];

const twoItemsOneChainOfAncestryEachOrder3Expectation = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },

  {
    id: "D",
    parentId: "B",
  },
  {
    id: "C",
    parentId: null,
  },
  {
    id: "E",
    parentId: "C",
  },
  {
    id: "F",
    parentId: "E",
  },
];

const oneItemTwoChainsOfAncestryOrder1 = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
  {
    id: "C",
    parentId: "B",
  },
  {
    id: "D",
    parentId: "A",
  },

  {
    id: "E",
    parentId: "D",
  },
];

const oneItemTwoChainsOfAncestryOrder2 = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
  {
    id: "C",
    parentId: "A",
  },
  {
    id: "D",
    parentId: "B",
  },
  {
    id: "E",
    parentId: "C",
  },
];

const oneItemTwoChainsOfAncestryOrder2Expectaion = [
  {
    id: "A",
    parentId: null,
  },
  {
    id: "B",
    parentId: "A",
  },
  {
    id: "D",
    parentId: "B",
  },
  {
    id: "C",
    parentId: "A",
  },
  {
    id: "E",
    parentId: "C",
  },
];

const TestCases = [
  new TestCase(noItems, noItems, "no items"),
  new TestCase(oneItem, oneItem, "one item"),
  new TestCase(twoItems, twoItems, "two items"),
  new TestCase(oneItemOneChild, oneItemOneChild, "one item one child"),
  new TestCase(
    twoItemsOneChildEachOrder1,
    twoItemsOneChildEachOrder1,
    "two items one child each, order 1"
  ),
  new TestCase(
    twoItemsOneChildEachOrder2,
    twoItemsOneChildEachOrder2Expectation,
    "two items one child each, order 2"
  ),
  new TestCase(oneItemTwoChildren, oneItemTwoChildren, "one item two children"),
  new TestCase(
    twoItemsTwoChildrenEachOrder1,
    twoItemsTwoChildrenEachOrder1,
    "two items two children each, order 1"
  ),
  new TestCase(
    twoItemsTwoChildrenEachOrder2,
    twoItemsTwoChildrenEachOrder2Expectation,
    "two items two children each, order 2"
  ),
  new TestCase(
    twoItemsTwoChildrenEachOrder3,
    twoItemsTwoChildrenEachOrder3Expectation,
    "two items two children each, order 3"
  ),
  new TestCase(
    oneItemOneChainOfAncestry,
    oneItemOneChainOfAncestry,
    "one item one chain of ancestry"
  ),
  new TestCase(
    twoItemsOneChainOfAncestryEachOrder1,
    twoItemsOneChainOfAncestryEachOrder1,
    "two items one chain of ancestry each, order 1"
  ),
  new TestCase(
    twoItemsOneChainOfAncestryEachOrder2,
    twoItemsOneChainOfAncestryEachOrder2Expectation,
    "two items one chain of ancestry each, order 2"
  ),
  new TestCase(
    twoItemsOneChainOfAncestryEachOrder3,
    twoItemsOneChainOfAncestryEachOrder3Expectation,
    "two items one chain of ancestry each, order 3"
  ),
  new TestCase(
    oneItemTwoChainsOfAncestryOrder1,
    oneItemTwoChainsOfAncestryOrder1,
    "one item two chains of ancestry, order 1"
  ),
  new TestCase(
    oneItemTwoChainsOfAncestryOrder2,
    oneItemTwoChainsOfAncestryOrder2Expectaion,
    "one item two chains of ancestry, order 2"
  ),
];

export default TestCases;
