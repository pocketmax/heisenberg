var _ = require('lodash');

var raw = {
    1231: {
        name: 'foo bar'
    },
    1232: {
        name: 'foo bar'
    },
    1233: {
        name: 'foo bar'
    },
    1234: {
        name: 'foo bar'
    },
    1235: {
        name: 'foo bar'
    },
    456: {
        name: 'testing'
    },
    789: {
        name: 'tom jones'
    }
};

var split = function(raw, split){

    var keys = _.keys(raw);
    var arraySize = keys.length;
    var chunks = arraySize / split;
    var data = [];

    for(var c = 0; c < split; c++){
        data[c]={};
    }

    for(var s = 0; s < arraySize; s++){
        var idx = Math.floor(s % split);
        data[idx][keys[s]]=raw[keys[s]];
    }
    return data;

};

console.log(JSON.stringify(split(raw,2), null, 1));

