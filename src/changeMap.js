import redChurch from '../Maps/red-church.jpg'

export function changeMap() {
    const changeMapButton = document.querySelector('#change-map')
    changeMapButton.addEventListener('click', clickEvent)
}

function clickEvent() {
    const img = document.querySelector('img')
    img.src = redChurch
    console.log(img.src);
}