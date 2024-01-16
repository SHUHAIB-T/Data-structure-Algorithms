class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = 0;
    }

    hash(key) {
        let value = 0;
        key = key.toString();
        for (let i = 0; i < key.length; i++) {
            value += key[i].charCodeAt();
        }

        return value % this.table.length;
    }

    set(key, value) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            let sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) return sameKeyItem[1];
        } else {
            return undefined;
        }
    }

    remove(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(key), 1);
            }
        } else {
            return undefined;
        }
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }

}

const myHashTable = new HashTable(10);
myHashTable.set("name", "John");
myHashTable.set("age", 30);
myHashTable.set("city", "New York");

console.log(myHashTable.get("city"));
