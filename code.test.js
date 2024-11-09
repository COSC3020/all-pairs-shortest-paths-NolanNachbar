const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

const graph1 = [
    [0, 3, 2, 7],
    [3, 0, 6, Infinity],
    [2, 6, 0, 3], 
    [7, Infinity, 3, 0], 
];

const graph2 = [
    [0, 3, 7, Infinity],
    [3, 0, Infinity, 2], 
    [7, Infinity, 0, 1],
    [Infinity, 2, 1, 0],
];

const graph3 = [
    [0, 1, Infinity, Infinity],
    [1, 0, 5, 12],
    [Infinity, 5, 0, 1],
    [Infinity, 12, 1, 0],
];

function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

const tests = [
    { func: allPairsShortestPaths, graph: graph1, result: [[0,3,2,5],[3,0,5,8],[2,5,0,3],[5,8,3,0]], name: "allPairsShortestPaths's Test 1" },
    { func: allPairsShortestPaths, graph: graph2, result: [[0,3,6,5],[3,0,3,2],[6,3,0,1],[5,2,1,0]], name: "allPairsShortestPaths's Test 2" },
    { func: allPairsShortestPaths, graph: graph3, result: [[0,1,6,7],[1,0,5,6],[6,5,0,1],[7,6,1,0]], name: "allPairsShortestPaths's Test 3" },
];

tests.forEach(test => {
    const output = test.func(test.graph, sourceNode);
    if (arraysEqual(output, test.result)) {
        console.log(`${test.name} successful`);
    } else {
        console.error(`${test.name} failed: ${output} != ${test.result}`);
    }
});
