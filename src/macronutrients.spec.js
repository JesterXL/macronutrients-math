import chai, { expect } from 'chai';
chai.should();
import System from 'systemjs';
import '../config.js';
import {errorForNonNumbers} from './macronutrients.js';

describe('myTest', () => {
	it('should load', () => {
		errorForNonNumbers.should.not.be.null;
	});
});