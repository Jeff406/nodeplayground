var expect = require('chai').expect;

var aString;
aString = "Hello World";

describe("String",function() {
	
	it("should contain a declared char", function () {
		expect(aString).contain('W');
	});
});
