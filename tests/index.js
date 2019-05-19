const expect = require('chai').expect;

const { getSequence } = require('../routes/marco');
const { getNumberSequence } = require('../routes/invoice');

let req = {
    body: {},
    query:{
        start:1,
        end: 30
    }
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};

describe('OnceHub Test', function() {
    describe('Marco Polo Instructions', function() {
        it('Should error out if no marcopolo provided 1', function() {
            getSequence(req, res);
            expect(res.sendCalledWith).to.contain('marcopolo');
        });
        it('Should error out if no marcopolo provided 2', function() {
            getSequence(req, res);
            expect(res.sendCalledWith).to.contain('marcopolo');
        });
        it('Should error out if no marcopolo provided 3', function() {
            getSequence(req, res);
            expect(res.sendCalledWith).to.contain('marcopolo');
        });
    })

    describe('Parse invoice numbers', function() {
        it('Should error out if no success provided', function() {
            getNumberSequence(req, res);
            expect(res.sendCalledWith).to.contain('success');
        });
    })
});