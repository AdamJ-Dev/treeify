# Treeify 

Treeify is an incy-wincy JS library (with TS support) AdamJ-Dev created to determine the render order of comments on his blog. He thought: this logic is not *particularly* the blog's concern: I'll just put it in it's own library.

### Installation:

```
npm install @adamdoescoding/treeify
```

### Usage:

Given a flattened list of objects, each extending

```typescript
type Item = {
  id: string;
  // key idea: if item has no parent, the following should be falsy:
  parentId?: string | null; 
}
```

i.e. 

```typescript
const list: Item[] = [...]
```

You may call 

```typescript
makeTree(list);
```
to produce a `Tree` which exhibits the relevant ancestral relationships in `list`. 

A `Tree` is a class that has `roots`. `roots` are `Tree Node`s, which bear an item on their `item` proprety, as well as a set of child nodes on their `children` property.

You may also call

```typescript
orderByTree(list)
```

which produces the selfsame tree, but returns the (pre-order) depth-first-traversed array produced from it.

For example, assume that you pass `orderByTree` a flat list of comments that are already ordered by date. Then `orderByTree` will return those comments in correct render order -- how they should be ordered in a comment section.  
