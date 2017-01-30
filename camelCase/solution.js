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
    var s = readLine();  //s is the starting string of cammel-cased words, e.g. thisIsAString
    var numberOfWords = 0;  // start the count at 0
    numberOfWords += 1; // there is at least one word, so add 1 to the count
    for (var i = 0; i < s.length; i++){ //loop over all the letters
        if (s[i] === s[i].toUpperCase()) {  //if the letter is uppercase, increase the word count 
            numberOfWords += 1;
        }  
    };

    console.log(numberOfWords) //print out the final word ocunt 
}
