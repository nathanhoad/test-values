var Should = require('should'),
    Values = require('..');


describe('Test Values', function () {
    describe('#name', function () {
        it('returns a random name', function (done) {
            var name = Values.name();
            
            Should(name).be.a.String;
            Should(name).containEql(' ');
            
            name = Values.name(true);
            
            Should(name).be.a.String;
            Should(name).not.containEql(' ');
            
            done();
        });
    });
    
    
    describe('#email', function () {
        it('returns a random but valid email', function (done) {
            var email = Values.email();
            
            Should(email).be.a.String;
            Should(email).containEql('@test.com');
            
            email = Values.email('nathanhoad.net');
            
            Should(email).be.a.String;
            Should(email).containEql('@nathanhoad.net');
            
            done();
        });
        
        
        it('generates pretty unique emails', function (done) {
            var emails = [],
                email;
            
            for (var i = 0; i < 1000; i++) {
                email = Values.email();
                
                Should(emails).not.containEql(email);
                
                emails.push(Values.email());
            }
            
            done();
        });
    });
});