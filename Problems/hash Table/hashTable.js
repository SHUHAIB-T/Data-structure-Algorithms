class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    hash(key) {
        let value = 0;
        for (let i = 0; i < key.length; i++) {
            value += key[i].charCodeAt();
        }
        return value % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        this.table[index] = value;
    }
    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i] != undefined) {
                console.log(i, this.table[i]);
            }
        }
    }
    remove(key){
        let index = this.hash(key);
        return this.table[index] = undefined;
    }
}

let table = new HashTable(20);
table.set("name","sresanjay" );
table.set("age",14);
table.display();
