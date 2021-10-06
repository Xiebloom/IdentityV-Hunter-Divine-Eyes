const readButton = document.querySelector('#read-button')

readButton.addEventListener('click', readFronTxt)

function readFronTxt() {
    // 1 读取 txt，并转化为对象
    const mapPosInfo = JSON.parse(`{
        "军工厂":{"hunter":[313,242],"surviver":[[354,364],[510,374],[594,294],[596,211]]},
        "红教堂":{"hunter":[369,200],"surviver":[[532,496],[541,346],[613,259],[689,205]]}
    }`)
    console.log('readInfo:', mapPosInfo);
    // 2 将监管者显示在图片上
    const mapInfo = mapPosInfo['军工厂']
    const hunterPos = mapInfo['hunter']
    console.log({mapInfo,hunterPos});
    // 3 监管者点击后，显示出求生者位置
}

