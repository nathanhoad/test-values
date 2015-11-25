var NAMES = require('./lib/names');


var TestValues = {
    
    name: function (onlyFirstName) {
        var name = NAMES[Math.floor(Math.random() * NAMES.length)];
        
        if (onlyFirstName) {
            return name;
        } else {
            return name + ' ' + NAMES[Math.random() * NAMES.length];
        }
    },
    
    
    email: function (hostname) {
        var name = (this.name(true) + '_' + this.name(true) + '_' + Math.floor(Math.random() * 100000)).toLowerCase();
        
        if (hostname && typeof hostname === "string") {
            return name + '@' + hostname;
        } else {
            return name + '@test.com';
        }
    }
    
}


module.exports = TestValues;