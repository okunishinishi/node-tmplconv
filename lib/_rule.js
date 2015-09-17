/**
 * @function _rule
 * @private
 */

"use strict";

var findout = require('findout'),
    stringcase = require('stringcase');

var variations = [
    'camelcase', 'pascalcase', 'spinalcase', 'snakecase', 'uppercase', 'lowercase'
];

/** @lends _rule */
function _rule(data, prefix, suffix) {
    if(typeof(data) == 'string'){
        data = findout(data) || data;
    }
    data = data || {};
    prefix = prefix || '_____';
    suffix = suffix || '_____';
    function _fix(key) {
        return [prefix, key, suffix].join('');
    }

    var rule = {};
    Object.keys(data).forEach(function (key) {
        var val = data[key];
        rule[_fix(key)] = val;
        variations.forEach(function (variation) {
            rule[_fix([key, variation].join('@'))] = stringcase[variation](val);
        });
    });
    return rule;
}

_rule.reversed = function _reversedRule(data, prefix, suffix) {
    var rule = _rule(data, prefix, suffix);
    var reversed = {};
    Object.keys(rule).forEach(function (key) {
        var val = rule[key];
        reversed[val] = reversed[val] || key;
    });
    return reversed;
};

module.exports = _rule;