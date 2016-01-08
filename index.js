var NAMES = require('./lib/names');
var WORDS = require('./lib/words');


var TestValues = {
    
    name: function (length) {
        if (typeof length === "undefined") length = 2;
        
        var names = [];
        for (var i = 0; i < length; i++) {
            names.push(NAMES[Math.floor(Math.random() * NAMES.length)]);
        }
        
        return names.join(' ');
    },
    
    
    word: function () {
        return WORDS[Math.floor(Math.random() * WORDS.length)];
    },
    
    
    number: function (min, max) {
        // number(10) -> 0..10
        if (typeof min !== "undefined" && typeof max === 'undefined') {
            min = 0;
            max = min;
        // number() || number(10, 100)
        } else {
            min = min || 0;
            max = max || 1000000;
        }
        
        return min + (Math.random() * (max - min));
    },
    
    
    email: function (hostname) {
        var name = (this.name(true) + '_' + this.name(true) + '_' + Math.floor(Math.random() * 100000)).toLowerCase();
        
        if (hostname && typeof hostname === "string") {
            return name + '@' + hostname;
        } else {
            return name + '@test.com';
        }
    },
    
    
    phone: function (countryCode) {
        var number = 100000000 + Math.floor(Math.random() * 100000000);
        
        if (countryCode) {
            return countryCode + number;
        } else {
            return '0' + number;
        }
    },
    
    
    url: function () {
        var tlds = ['com', 'net', 'org', 'info'];
        var hostname = this.name(4).toLowerCase().replace(/[^a-z]/g, '-') + '.' + tlds[Math.floor(Math.random() * tlds.length)];
        
        return 'http://' + hostname
    }
    
}


module.exports = TestValues;