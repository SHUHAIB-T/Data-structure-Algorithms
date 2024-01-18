class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    hasEdge(vertex1, vertex2) {
        return (this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1));
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "->" + [...this.adjacencyList[vertex]])
        }
    }

    dfsRecursive(vertex, visited = new Set()) {
        visited.add(vertex);
        console.log(vertex);

        let adjacentVertices = this.adjacencyList[vertex];

        for (const adj of adjacentVertices) {
            if (!visited.has(adj)) {
                this.dfsRecursive(adj, visited);
            }
        }
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.dfsRecursive("A")