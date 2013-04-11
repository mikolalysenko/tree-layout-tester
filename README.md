tree-layout-tester
==================
Checks a tree layout produces results consistent with a known tree ordering

## Install

    npm install tree-layout-tester
 
## Example

```javascript
var layoutTester = require("tree-layout-tester")

//Your tree layout
var myLayout =  // ...  something

require("tap").test("my layout test", function(t) {

  var T = layoutTester.T
    , testTree = layoutTester.bind({}, t, myLayout)

  //Enforce that tree layout respects this ordering
  testTree(T(0, T(1), T(2))

  t.end()
})
```

## API

### `require("tree-layout-tester").T(v, left, right)`
Creates a tree with index `v` and the given left/right subtrees

### `require("tree-layout-tester")(tap, layout, root)`
Tests the layout against the tree given by root.  tap is a pointer to a tap object.

# License
(c) 2013 Mikola Lysenko. MIT License