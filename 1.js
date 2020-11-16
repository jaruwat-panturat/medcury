var assert = require('assert');

function stringDecoder(song){

	let result = song.replace(/WUB/g, " "); //Replace WUB with a space
	result = result.replace(/  +/g, ' '); //Replace multiple spaces with a space
	result = result.trim(); //Trim leading and trailing space

	return result;
}

assert.equal(stringDecoder('AWUBBWUBC'),'A B C',"WUB should be replaced by 1 space");
assert.equal(stringDecoder('AWUBWUBWUBBWUBWUBWUBC'),'A B C',"multiples WUB should be replaced by only 1 space");
assert.equal(stringDecoder('WUBAWUBBWUBCWUB'),'A B C',"heading or trailing spaces should be removed");
