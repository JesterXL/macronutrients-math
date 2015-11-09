import chai, { expect } from 'chai';
import System from 'systemjs';
import '../config.js';
chai.should();

describe('myTest', () => {
    it('should load', () => {
    	var one = 1;
		one.should.be.a('number');
    });
});