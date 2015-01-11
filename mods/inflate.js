define(['walker','lodash'], function(walker, _){

    return function(data, assets){

        var results = {};
        walker(data, function(x){
            if(!this.isRoot){
                if( _.has( assets[this.parent.key], this.key ) ){
                    this.update(_.merge(x, assets[this.parent.key][this.key]));
                }

            }
        });

        var results = data;
        return results;

    };

});
