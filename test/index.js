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
    
    
    describe('#word', function () {
        it('returns a random word', function (done) {
            var word = Values.word();
            
            Should(word).be.a.String;
            done();
        });
    });
    
    
    describe('#number', function () {
        it('returns a random number', function (done) {
            var number = Values.number();
            
            Should(number).be.a.Number;
            
            number = Values.number(10);
            
            Should(number).be.a.Number;
            Should(number).be.within(0, 10);
            Should(number).be.equal(Math.floor(number));
            
            number = Values.number(10, 100);
            
            Should(number).be.a.Number;
            Should(number).be.within(10, 100);
            Should(number).be.equal(Math.floor(number));
            
            number = Values.number(10, 100, 2);
            
            Should(number).be.a.Number;
            Should(number).be.within(10, 100);
            Should(number).be.within(Math.floor(number), Math.ceil(number));
            
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
            
            for (var i = 0; i < 100; i++) {
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
    
    
    describe('#random', function () {
        it('picks a random item from', function (done) {
            var items = ['first', 'second', 'third'];
            var item;
            
            for (var i = 0; i < 100; i++) {
                item = Values.random(items);
                Should(items.indexOf(item)).not.equal(-1);
            }
            
            done();
        });
    });
});