


module.exports = function changeMap() {
    const changeMapButton = document.querySelector('#change-map')

    changeMapButton.addEventListener('click', changeMap)
    const img = document.querySelector('img')
    img.src = './Maps/redChurch.png'
    console.log(img.src);
}