var raw = {
    data: {
        vehicleGroups: {
            123: {
                vehicles: {
                    456: {
                        driver: {
                            id: 789
                        }
                    }
                }
            }
        }
    },
    assets: {
        vehicleGroups: {
            123: {
                name: 'west coast drivers'
            }
        },
        vehicles: {
            456: {
                name: 'delivery truck'
            }
        },
        driver: {
            789: {
                name: 'mark'
            }
        }
    }
};

var inflate = function(raw){




    var results = raw;
    return results;
};

console.log(JSON.stringify(inflate(raw), null, 1));
