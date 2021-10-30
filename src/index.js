import map1 from '../Maps/factory.jpg'
import { saveToTxt } from './saveToTxt'
import { readFromTxt } from './readFromTxt'
import { changeMap } from './changeMap'


// changeMap()

readFromTxt()

saveToTxt()

const map = document.querySelector('.map');
map.src = map1;