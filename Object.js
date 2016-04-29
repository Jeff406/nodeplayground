'use strict';

/* global describe, it, before, beforeEach, after, afterEach */

var fs = require('fs');
//var swaggerTest = require('../lib/swagger-test');
var assert = require('chai').assert;


var buffer  = fs.readFileSync('./swagger.json');
var spec    = JSON.parse(buffer);
//var xamples = swaggerTest.parse(spec, { inferXamples: true });


Object.keys(spec.paths).forEach(function(path) {
	Object.keys(path).forEach(function(method) {
		Object.keys(method).forEach(function(param) {
			console.log(param['parameters']);
		});
	});
});
