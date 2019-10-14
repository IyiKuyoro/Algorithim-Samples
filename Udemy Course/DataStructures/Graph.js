class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (this.adjacencyList[value]) {
      return false;
    }
    this.adjacencyList[value] = [];
    return true;
  }

  removeVertex(vertex) {
    this._validateVertex(vertex);

    const connection = this.adjacencyList[vertex];
    const connectionCopy = [...connection];
    connectionCopy.forEach(element => {
      this.removeEdge(vertex, element);
    });
    delete this.adjacencyList[vertex];
  }

  addEdge(vertex1, vertex2) {
    this._validateVertex(vertex1);
    this._validateVertex(vertex2);

    this._addConnection(vertex1, vertex2);
    this._addConnection(vertex2, vertex1);

    const vertex2Connection = this.adjacencyList[vertex2];
    if (vertex2Connection.indexOf(vertex1) < 0) {
      vertex2Connection.push(vertex1);
    }
  }

  depthFirstTraversal(vertex, visited = {}) {
    this._validateVertex(vertex);
    if (this.adjacencyList[vertex].length <= 0 || visited[vertex]) return;

    let array = [vertex];
    const connection = this.adjacencyList[vertex];
    connection.forEach((element) => {
      visited[vertex] = true;
      const res = this.depthFirstTraversal(element, visited);
      if (res) {
        array = array.concat(res);
      }
    });

    return array;
  }

  breathFirstTraversal(start) {
    this._validateVertex(start);

    const result = [];
    const visited = {};
    let queue = [start];
    const dataList = this.adjacencyList;

    (function BFT () {
      if (queue.length <= 0) return;

      const current = queue.shift();
      if (!visited[current]) {
        queue = queue.concat(dataList[current]);
        visited[current] = true;
        result.push(current);
      }

      BFT(queue[0]);
    }())

    return result;
  }

  removeEdge(vertex1, vertex2) {
    this._validateVertex(vertex1);
    this._validateVertex(vertex2);

    this._deleteConnection(vertex1, vertex2);
    this._deleteConnection(vertex2, vertex1);
  }

  _validateVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      throw new Error(`Can't find ${vertex}`);
    }
  }

  _deleteConnection(vertex1, vertex2) {
    const vertexConnection = this.adjacencyList[vertex1];
    const connectionIndex = vertexConnection.indexOf(vertex2);
    if (connectionIndex >= 0) {
      vertexConnection.splice(connectionIndex, 1);
    }
  }

  _addConnection(vertex1, vertex2) {
    const vertex1Connection = this.adjacencyList[vertex1];
    if (vertex1Connection.indexOf(vertex2) < 0) {
      vertex1Connection.push(vertex2);
    }
  }
}

const graph = new UndirectedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("D", "G");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("G", "F");
graph.addEdge("G", "C");
console.log(graph.breathFirstTraversal('A'));
console.log(graph.depthFirstTraversal('A'));
