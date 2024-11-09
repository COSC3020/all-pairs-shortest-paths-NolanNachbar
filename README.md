# All Pairs Shortest Paths

In the lectures, we've seen Dijkstra's algorithm for finding the shortest paths
from a given vertex to all other vertices in the graph. We've also covered the
Floyd-Warshall algorithm for finding the shortest path between all *pairs* of
vertices. It works as follows:

Given a graph $G = (V, E)$ with weighted edges:
- initialize a $|V|\times|V|$ matrix `dist` to $\infty$
- for each vertex $v \in V$, `dist[v][v] = 0`
- for each edge $(u,v) = e \in E$, `dist[u][v] = weight((u,v))`
- for each vertex $k\in V$:
    - for each vertex $i\in V$:
        - for each vertex $j\in V$:
            - `if dist[i][j] > dist[i][k] + dist[k][j]:`
              `dist[i][j] = dist[i][k] + dist[k][j]`

Implement this algorithm, starting with the template I provided in `code.js`.
The function takes a weighted graph graph and returns the matrix with the
distances, as described above. You can choose any data structures you like for
the implementation.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case time complexity ($\Theta$) of the algorithm? Add your
answer, including your reasoning, to this markdown file.

Recall my code,
```js
function allPairsShortestPaths(graph) {
  
  let card = graph.length; 
  let dist = Array.from({ length: card}, () => Array(card).fill(Infinity));
  
  for(let i = 0; i < card; i++) dist[i][i] = 0; // This runs |V| times
    
  for(let v = 0; v < card; v++){ // this runs |V| times
    for(let u = 0; u < card; u++){ // this runs |V| times
      dist[u][v] = graph[u][v]; // This set of loops is O(|V|^2)
    }
  }
  
  for(let k = 0; k < card; k++){// this runs |V| times
    for(let i = 0; i < card; i++){// this runs |V| times
      for(let j = 0; j < card; j++){// this runs |V| times
        if (dist[i][j] > dist[i][k] + dist[k][j]) dist[i][j] = dist[i][k] + dist[k][j]; // This set of loops is O(|V|^3)
      }
    }
  }
return dist;
}
```

After looking at the loops, you can see that the double nested loop portion of the code is the most expensive in terms of complexity. Because it's a set of three nested loops that will each run $|V|$ times in any case (including worst case), the complexity is $\Theta(|V|^3)$.

I wrote this using the provided pseudocode directly. I copied my testcode from my dijkstra-s-algorithm and modified it to test this function. 
https://github.com/COSC3020/dijkstra-s-algorithm-NolanNachbar/blob/NolanNachbar-patch-1/code.test.js

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


