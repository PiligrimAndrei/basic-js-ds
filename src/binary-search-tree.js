const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this.head;
  }

  add(value) {
    //throw new NotImplementedError('Not implemented');
    this.head = addWith(this.head, value);

    function addWith(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWith(node.left, value);
      } else {
        node.right = addWith(node.right, value);
      }

      return node;
    }
  }
  has(value) {
    //throw new NotImplementedError('Not implemented');
    return searchWith(this.head, value);

    function searchWith(node, value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      return value < node.value ?
        searchWith(node.left, value) :
        searchWith(node.right, value);
    }
  }

  find(value) {
    //throw new NotImplementedError('Not implemented');
    return searchWith(this.head, value);

    function searchWith(node, value) {
      if (!node) {
        return null;
      }

      if (node.value === value) {
        return node;
      }

      return value < node.value ?
        searchWith(node.left, value) :
        searchWith(node.right, value);
    }
  }

  remove(value) {
    //throw new NotImplementedError('Not implemented');
    this.head = removeNode(this.head, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.value = minRight.value;

        node.right = removeNode(node.right, minRight.value);

        return node;
      }
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    if (!this.head) {
      return;
    }

    let node = this.head;
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    if (!this.head) {
      return;
    }

    let node = this.head;
    while (node.right) {
      node = node.right;
    }

    return node.value;
  }
}

/*function addItems() {
  test.add(13);
  test.add(15);
  test.add(9);
  test.add(20);
  test.add(18);
  test.add(32);
  test.add(25);
  console.log(test);

}
function gethead() {
  console.log(test.root());

}

const test = new BinarySearchTree();
addItems();
gethead();*/

module.exports = {
  BinarySearchTree
};

//node ./src/binary-search-tree.js