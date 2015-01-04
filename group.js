var _ = require('lodash');

var raw = [{
    name: 'soup',
    price: 1.99
},{
    name: 'toothpaste',
    price: 3.99
},{
    name: 'spaghetti',
    price: 3.99
},{
    name: 'muffins',
    price: 1.99
},{
    name: 'apples',
    price: 0.99
}];

var config = {
    price: ['sum','avg','median','min']
};

var group = function(raw, config){




    var data = raw;
    return data;

};

/*
var raw = [{
    price: {
        sum: 10.22,
        avg: 5.33,
        median: 20.22,
        min: 0.99
    }
}];
*/

console.log(JSON.stringify(group(raw,2), null, 1));

