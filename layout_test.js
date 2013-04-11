//Simple tree data structure
function T(v,l,r) {
  return {
      v: v
    , left: l || null
    , right: r || null
    , h: Math.max(l ? l.h : -1, r ? r.h : -1) + 1
    , n: (l ? l.n : 0) + (r ? r.n : 0) + 1
  }
}

//Do inorder traversal
function testTree(t, layout, root) {
  var n = root.n
  t.equals(layout.root(n), root.v)
  var ptr = layout.begin(n)
  
  function leftAncestor(x) {
    if(x.left) {
      return leftAncestor(x.left)
    }
    return x.v
  }
  
  function rightAncestor(x) {
    if(x.right) {
      return rightAncestor(x.right)
    }
    return x.v
  }
  
  function visit(node, parent) {
    console.log(node.v, node.h)
    t.equals(layout.height(n, node.v), node.h)
    if(parent) {
      t.equals(layout.parent(n, node.v), parent.v)
    }
    if(node.left) {
      t.equals(layout.left(n, node.v), node.left.v)
      visit(node.left, node)
    }
    t.equals(ptr, node.v)
    ptr = layout.next(n, ptr)
    if(node.right) {
      t.equals(layout.right(n, node.v), node.right.v)
      visit(node.right, node)
    }
    t.equals(layout.lo(n, node.v), leftAncestor(node))
    t.equals(layout.hi(n, node.v), rightAncestor(node))
  }
  
  visit(root, null)
  t.equals(layout.end(n), ptr)
  
  //Do a reverse traversal
  function rvisit(node) {
    if(node.right) {
      rvisit(node.right)
    }
    ptr = layout.prev(n, ptr)
    t.equals(ptr, node.v)
    if(node.left) {
      rvisit(node.left)
    }
  }
  rvisit(root)
  t.equals(layout.begin(n), ptr)
}

module.exports = testTree
module.exports.T = T