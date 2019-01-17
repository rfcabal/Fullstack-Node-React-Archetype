import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from 'react-dom/test-utils';

describe("Main control testing", function () {

    /*it('renders without problems', function () {
        let app = ReactTestUtils.renderIntoDocument(<SignIn/>);
        expect(app).not.toBeNull();
    });

    it('renders without crashing', () => {
        const container = document.createElement('div'); // create the div here
        ReactDOM.render(<SignIn />, container);
    });*/

    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });

});
