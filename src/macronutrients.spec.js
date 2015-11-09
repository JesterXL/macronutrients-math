import chai, { expect } from 'chai';
import System from 'systemjs';
import '../config.js';

describe('myTest', () => {
  let macrosModule;

  before(() => {
    return System.import('./src/macronutrients.js')
      .then((macronutrients) => {
        macrosModule = macronutrients;
    	});
  });

  describe('Module Loading', () => {
    it('should load', () => {
    	macrosModule.should.not.be.null;
    });
  });
});