function allPairsShortestPaths(graph) {
  
  let card = graph.length; 
  let dist = Array.from({ length: card}, () => Array(card).fill(Infinity));
  
  for(let i = 0; i < card; i++) dist[i][i] = 0;
    
  for(let v = 0; v < card; v++){
    for(let u = 0; u < card; u++){
      dist[u][v] = graph[u][v];
    }
  }
  
  for(let k = 0; k < card; k++){
    for(let i = 0; i < card; i++){
      for(let j = 0; j < card; j++){
        if (dist[i][j] > dist[i][k] + dist[k][j]) dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
return dist;

}
