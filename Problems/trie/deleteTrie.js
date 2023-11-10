class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  delete(word) {
    this._deleteRecursive(this.root, word, 0);
  }

  _deleteRecursive(node, word, index) {
    if (!node) {
      return false;
    }

    if (index === word.length) {
      if (!node.isEndOfWord) {
        return false; // Word not found
      }
      node.isEndOfWord = false;

      // If the node has no other children, it can be deleted
      return Object.keys(node.children).length === 0;
    }

    const char = word[index];
    const nextNode = node.children[char];
    if (!nextNode) {
      return false; // Word not found
    }

    const shouldDeleteCurrentNode = this._deleteRecursive(nextNode, word, index + 1);

    if (shouldDeleteCurrentNode) {
      delete node.children[char];

      // If the current node is not the end of another word and has no other children, it can be deleted
      return !node.isEndOfWord && Object.keys(node.children).length === 0;
    }
    return false;
  }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("app")); // true
trie.delete("app");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
