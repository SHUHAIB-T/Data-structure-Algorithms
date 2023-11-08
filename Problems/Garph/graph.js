// implementation of undirected graph

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertices(vertext) {
        if (!this.adjacencyList[vertext]) {
            this.adjacencyList[vertext] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertices(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertices(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    // display the adjacency list
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '->' + [...this.adjacencyList[vertex]]);
        }
    }
}

let graph = new Graph();

graph.addVertices("A");
graph.addVertices("B");
graph.addVertices("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();

console.log(graph.hasEdge("A","C"));