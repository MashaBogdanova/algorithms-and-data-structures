const graph = {
    a: ["b", "c"],
    b: ["f"],
    c: ["d", "e"],
    d: ["f"],
    e: ["f"],
    f: ["g"]
}

// Поиск в ширину
function graphSearch(graph, start, end) {
    let queue = [];
    queue.push(start);
    while (queue.length > 0) {
        const current = queue.shift();
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
    return false;
}

console.log(graphSearch(graph, "a", "g"));
