'use strict';
var assert = require('assert');

describe('Web Server', function() {
    it('Returns greeting on /', function() {
        browser.url('/');
        let body = browser.getText('body');
        console.log(body);
        assert.equal(true, /Hi! Try/.test(body));
        let tags = browser.getTagName('a')
        assert.equal(browser.getAttribute('a:first', 'href'), '/redis')

    });

    it('Returns the REDIS value on /redis', () => {
        browser.url('/redis');
        let body = browser.getText('body');
        console.log(body);
        assert(/REDIS value is/i.test(body));
    });

    it('Returns the MySQL value on /mysql', () => {
        browser.url('/mysql');
        let body = browser.getText('body');
        console.log(body);
        assert(/MySQL value is/i.test(body));
    });
});