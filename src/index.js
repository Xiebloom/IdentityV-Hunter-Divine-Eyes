import map1 from '../Maps/militiry.png'

let changeMap = require('./changeMap.js')
changeMap()

let readFromTxt = require('./readFromTxt.js')
readFromTxt()

let saveToTxt = require('./saveToTxt.js')
saveToTxt()

const map = document.querySelector('.map');
map.src = map1;
