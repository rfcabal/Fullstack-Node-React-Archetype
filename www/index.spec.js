// var React = require('react');
// var ReactDOM = require("react-dom");
// var TestUtils = require('react-dom/test-utils'); //I like using the Test Utils, but you can just use the DOM API instead.
// var Index = require('./index'); //my root-test lives in components/__tests__/, so this is how I require in my components.

// describe('index', function () {
//     it('renders without problems', function () {
//         var index = TestUtils.renderIntoDocument(<Index/>);
//         expect(index).isNot(null)
//     });
// });

describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });
});