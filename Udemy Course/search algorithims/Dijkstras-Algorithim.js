class WeightedGraph {
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

  addEdge(v1, v2, weight) {
    this._validateVertex(v1);
    this._validateVertex(v2);

    this.adjacencyList[v1].push({node: v2, weight});
    this.adjacencyList[v2].push({node: v1, weight});

    return this;
  }

  shortestPath(v1, v2) {
    const visited = {};
    const parent = {};
    const shortestDistance = this._getShortestDistance({}, v1);
    let nextShVx = v1;
    
    while (nextShVx) {
      let shVx = nextShVx;
      nextShVx = null;
      const adj = this.adjacencyList[shVx];

      let nextShVal = +Infinity;
      for (let i = 0; i < adj.length; i++) {
        const currentChild = adj[i];
        // Skip if vertex has been visited
        if (visited[currentChild.node]) continue;

        let dist = shortestDistance[shVx] + currentChild.weight;
        // Update the file
        if (dist < shortestDistance[currentChild.node]) {
          parent[currentChild.node] = shVx;
          shortestDistance[currentChild.node] = dist;
        }

        // Pick the next smallest value
        if (nextShVal > dist) {
          nextShVal = dist;
          nextShVx = adj[i].node;
        }
      }
      visited[shVx] = true;
    }

    return this._getShortestRoute(parent, v2);
  }

  _getShortestRoute(parent, v2) {
    let route = v2;

    let next = parent[v2];
    while(next) {
      route += ` - ${next}`;
      next = parent[next];
    }

    return route;
  }

  _getShortestDistance(shortestDistance, v1) {
    for (const v in this.adjacencyList) {
      shortestDistance[v] = v === v1 ? 0 : +Infinity;
    }

    return shortestDistance;
  }

  _validateVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      throw new Error(`Can't find ${vertex}`);
    }
  }
}

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "C", 2);
g.addEdge("A", "B", 4);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "F", 1);
g.addEdge("D", "E", 3);
g.addEdge("F", "E", 1);
console.log(g.shortestPath("A", "F"));
