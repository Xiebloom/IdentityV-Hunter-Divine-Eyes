import map1 from '../Maps/factory.jpg'
import { saveToTxt } from './saveToTxt'
import { readFromTxt } from './readFromTxt'
import { changeMap } from './changeMap'

const map = document.querySelector('.map');
map.src = map1;
map.setAttribute('name', '军工厂')

changeMap()

readFromTxt()

saveToTxt()

console.log('test');