const readButton = document.querySelector('#read-button')

readButton.addEventListener('click', readFronTxt)

function readFronTxt() {
    // 1 读取 txt，并转化为对象 
    const mapPosInfo = JSON.parse(`{
        "军工厂":[
            {"hunter":[313,242],"surviver":[[354,364],[510,374],[594,294],[596,211]]},
            {"hunter":[213,142],"surviver":[[354,364],[510,374],[594,294],[596,211]]}
        ],
        "红教堂":{"hunter":[369,200],"surviver":[[532,496],[541,346],[613,259],[689,205]]}
    }`)
    console.log('readInfo:', mapPosInfo);

    // 2 TODO: 将 mapInfo 的所有监管者的位置，显示在图片上（军工厂2个红点）
    // const mapInfo = mapPosInfo['军工厂']
    // const hunterPos = mapInfo['hunter']
    // const hunterPos = document.createElement(...)

    // 3 TODO: 监管者点击后，显示出求生者位置（1个红点 + 4个蓝点）
   
}
    

