class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertices(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertext(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertext(vertex2);
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

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }

        for (const adjacencyVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacencyVertex); //remove all the edges of the vertex
        }
        delete this.adjacencyList[vertex]; //delete the vertex
    }
}


let graph = new Graph();

graph.addVertices("A");
graph.addVertices("B");
graph.addVertices("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();

// graph.removeVertex("A")
// graph.display();