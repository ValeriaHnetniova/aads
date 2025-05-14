const graph = {
  1: { 4: 5, 6: 4 },
  2: { 4: 13, 5: 7 },
  3: { 4: 8, 5: 6 },
  4: { 1: 5, 3: 8, 2: 13, 6: 7 },
  5: { 3: 6, 2: 7, 6: 4 },
  6: { 1: 4, 4: 7, 5: 4 }
};

function dijkstra(graph, startNode) {
  const distances = {};
  const visited = {};
  const previous = {};
  const priorityQueue = [];

  for (const node in graph) {
    distances[node] = Infinity;
  } 
  distances[startNode] = 0;

  priorityQueue.push([startNode, 0]);
  priorityQueue.sort((a, b) => a[1] - b[1]);

  while (priorityQueue.length > 0) {
    const [currentNode, currentDistance] = priorityQueue.shift();

    if (currentDistance > distances[currentNode]) {
      continue;
    }

    visited[currentNode] = true;

    for (const neighbor in graph[currentNode]) {
      const weight = graph[currentNode][neighbor];
      const distance = currentDistance + weight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentNode;
        priorityQueue.push([neighbor, distance]);
        priorityQueue.sort((a, b) => a[1] - b[1]);
      }
    }
  }

  return { distances, previous };
}

function getShortestPath(graph, startNode, endNode) {
  const { distances, previous } = dijkstra(graph, startNode);
  const path = [];
  let currentNode = endNode;

  while (currentNode !== startNode && previous[currentNode]) {
    path.unshift(currentNode);
    currentNode = previous[currentNode];
  }

  if (currentNode === startNode) {
    path.unshift(startNode);
    return path;
  }

  return null;
}


console.log("Найкоротші шляхи від вершини 5:");
const resultFrom5 = dijkstra(graph, '5');
console.log("Відстані:", resultFrom5.distances);
console.log("Попередні вершини:", resultFrom5.previous);
console.log("---------------------------------------");

console.log("Найкоротші шляхи від вершини 6:");
const resultFrom6 = dijkstra(graph, '6');
console.log("Відстані:", resultFrom6.distances);
console.log("Попередні вершини:", resultFrom6.previous);
console.log("---------------------------------------");

console.log("Найкоротші шляхи від вершини 1:");
const resultFrom1 = dijkstra(graph, '1');
console.log("Відстані:", resultFrom1.distances);
console.log("Попередні вершини:", resultFrom1.previous);
console.log("---------------------------------------");

console.log("Найкоротший шлях від 1 до 5:", getShortestPath(graph, '1', '5'));
console.log("Найкоротший шлях від 6 до 3:", getShortestPath(graph, '6', '3'));