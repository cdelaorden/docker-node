'use strict';
var assert = require('assert');

describe('Web Server', function() {
    it('Returns greeting on /', function() {
        browser.url('/');
        let body = browser.getText('body');
        assert.equal(true, /Hi! Try/.test(body));
        let tags = browser.getTagName('a')
        assert.equal(tags.length, 2, 'Two links are displayed')

        let redisLink = browser.getText('=Redis')
        assert.ok(redisLink)
        let mysqlLink = browser.getText('=MySQL')
        assert.ok(mysqlLink)

    });

    it('Returns the REDIS value on /redis, and increments it with refresh', () => {
        browser.url('/redis');
        let body = browser.getText('body');
        assert(/REDIS value is/i.test(body));
        let value = parseInt(browser.getText('span.value'))
        assert.ok(value)
        browser.refresh()
        let value2 = parseInt(browser.getText('span.value'))
        assert.ok(value2 > value)
    });

    it('Returns the MySQL value on /mysql, and increments it with refresh', () => {
        browser.url('/mysql');
        let body = browser.getText('body');
        assert(/MySQL value is/i.test(body));
        let value = parseInt(browser.getText('span.value'))
        assert.ok(value)
        browser.refresh()
        let value2 = parseInt(browser.getText('span.value'))
        assert.equal(value2, value+1)
    });
});