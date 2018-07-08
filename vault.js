'use strict';
module.exports = function() {

    
    const myObj = {};

    const setValue = function(key,value) {
        myObj[key] = value;
    };

    const getValue = function(key) {
        if (key in myObj) {
            return myObj[key];
        } else {
            return null;
        }
    }

    return {
        setValue: setValue,
        getValue: getValue
    }

    

};