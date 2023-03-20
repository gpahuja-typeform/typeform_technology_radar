
const excelToJson = require('convert-excel-to-json');

const fs = require('fs');
const result = excelToJson({
	sourceFile: 'public/tech_radar.xlsx',
    header:{
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
const timeStamp = {
    releases: [new Date()]
}
const newJSON = { ...result, ...timeStamp};

fs.writeFileSync('public/rd.json', JSON.stringify(newJSON, null, 2));

export {};

