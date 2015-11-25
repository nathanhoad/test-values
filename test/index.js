var Should = require('should'),
    Values = require('..');


describe('Test Values', function () {
    describe('#name', function () {
        it('returns a random name', function (done) {
            var name = Values.name();
            
            Should(name).be.a.String;
            Should(name).containEql(' ');
            Should(name).not.containEql('undefined');
            
            name = Values.name(1);
            
            Should(name).be.a.String;
            Should(name).not.containEql(' ');
            
            name = Values.name(5);
            
            Should(name).be.a.String;
            Should(name).containEql(' ');
            Should(name.split(' ').length).equal(5);
            Should(name).not.containEql('undefined');
            
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
    
    
    describe('#phone', function () {
        it('generates a random phone number', function (done) {
            var phone = Values.phone();
            
            Should(phone).be.a.String;
            Should(phone.length).equal(10);
            Should(phone[0]).equal('0');
            
            phone = Values.phone('+61');
            Should(phone.length).equal(12);
            Should(phone.substring(0, 3)).equal('+61');
            
            done();
        });
    });
    
    
    describe('#url', function () {
        it('generates a random url', function (done) {
            var url = Values.url();
            
            Should(url).be.a.String;
            Should(url).containEql('http://');
            
            done();
        });
    });
});