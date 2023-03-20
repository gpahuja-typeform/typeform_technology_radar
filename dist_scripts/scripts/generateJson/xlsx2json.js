"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var excelToJson = require('convert-excel-to-json');
var fs = require('fs');
var result = excelToJson({
    sourceFile: 'public/tech_radar.xlsx',
    header: {
        rows: 1
    },
    columnToKey: {
        A: 'flag',
        B: 'featured',
        D: 'name',
        E: 'title',
        F: 'quadrant',
        G: 'ring',
        H: 'body',
        J: 'release',
        L: 'team',
    }
});
var timeStamp = {
    releases: [new Date()]
};
var newJSON = __assign(__assign({}, result), timeStamp);
fs.writeFileSync('public/rd.json', JSON.stringify(newJSON, null, 2));
