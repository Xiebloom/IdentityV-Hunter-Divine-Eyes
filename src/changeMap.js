import redChurch from '../Maps/red-church.jpg'

const nameMap = {
    红教堂: redChurch
}

export function changeMap() {
    const changeMapButton = document.querySelector('#change-map')
    changeMapButton.addEventListener('click', clickEvent)
}

function clickEvent() {
    const img = document.querySelector('img')
    const mapName = '红教堂'
    img.src = nameMap[mapName]
    img.setAttribute('name', mapName)
    console.log(img.src);

    const icons = document.querySelector('.icons')
    icons.innerHTML = ''
}