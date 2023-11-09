class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOftheWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    insert(word){
        let node = this.root;
        for(const char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOftheWord = true;
    }

    search(word){
        let node = this.root;
        for(const char of word){
            if(!node.children[char]){
                return false;
            }
            node = node.children[char];
        }

        return node.isEndOftheWord;
    }

    startWith(prefix){
        let node = this.root;
        for(const char of prefix){
            if(!node.children[char]){
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

let trie = new Trie();

trie.insert("Hello World");

console.log(trie.search("Hello World"));
console.log(trie.startWith("Hello"));