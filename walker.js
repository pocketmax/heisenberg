var _ = require('lodash');

var raw = {
    world: {
        northAmerica: [{
            usa: {
                az: {
                    phx: 'woo hoo'
                }
            },
            canada: {
                montreal: {
                    city: 'woo hoo, in canada'
                }
            }
        }]
    }
};

var walker = function(obj, cb){


    var looper = function(val, key){
        if( _.isObject(val) ) {
            cb(key, val);
            _.forIn(val, function (myVal, myKey) {
                looper(myVal, myKey);
            });
        } else {
            cb(key, val);
        }
    };
    looper(obj);
};

console.log(JSON.stringify(walker(raw, function(key, val){
    console.log('key: ' + key + ' obj: ' + val);
}), null, 1));
