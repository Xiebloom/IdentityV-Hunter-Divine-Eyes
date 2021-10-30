import redChurch from '../Maps/redChurch.png'

export function changeMap() {
    const changeMapButton = document.querySelector('#change-map')

    changeMapButton.addEventListener('click', changeMap)
    const img = document.querySelector('img')
    img.src = redChurch
    console.log(img.src);
}