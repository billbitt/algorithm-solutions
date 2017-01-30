process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');  //create an array out of the space-separated integers
    c = c.map(Number);          //convert each element in the array to a number 
    
    var openPairs = [];  //create an array to hold open pairs
    var numberOfPairs = 0;  //create a counter to hold the number of pairs
    
    for (var i = 0; i < c.length; i++) {    //loop through all the available socks
        //if the sock is in the array, increase the number of pairs and remove it from the array
        var foundInOpenPairs = false;
        for (var j = 0; j < openPairs.length; j++){
            if (openPairs[j] === c[i]){
                numberOfPairs += 1;  // increase the numberOfPairs count
                openPairs.splice(j, 1);  //remove 1 element from openPairs at index J
                foundInOpenPairs = true;
                break;  // exit out of this loop
            };
        };
        //if the sock was not in the array, add it to the array
        if (foundInOpenPairs === false){
            openPairs.push(c[i]);
        };
        
    };
    
    console.log(numberOfPairs);
}
