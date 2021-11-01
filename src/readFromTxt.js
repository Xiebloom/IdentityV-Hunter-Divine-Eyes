import axios from "axios";

export function readFromTxt() {
    const readButton = document.querySelector("#read-button");
    readButton.addEventListener("click", readFronTxt);
};

function readFronTxt(mapName) {
    // 0 获取 txt
    axios.defaults.headers.get['Content-Type'] = 'applicaiton/x-www-form-urlencoded'
    axios
        .get('http://localhost:3000')
        .then(res => {
            console.log(res);
        })

    // 1 读取 txt，并转化为对象
    const mapPosInfo = JSON.parse(`{
        "军工厂":[{"hunter":[354,459],"surviver":[[139,404],[213,294],[326,220],[343,102]]},{"hunter":[144,343],"surviver":[[225,95],[320,224],[366,332],[387,550]]},{"hunter":[66,77],"surviver":[[30,327],[122,307],[209,240],[317,108]]},{"hunter":[238,97],"surviver":[[17,347],[118,311],[306,334],[421,360]]},{"hunter":[321,181],"surviver":[[122,317],[200,526],[287,428],[441,360]]},{"hunter":[417,357],"surviver":[[146,408],[213,238],[250,84],[354,154]]}],
        "红教堂":[{"hunter":[499,457],"surviver":[[261,554],[260,360],[378,221],[503,168]]},{"hunter":[418,477],"surviver":[[154,437],[164,292],[345,175],[493,226]]},{"hunter":[377,365],"surviver":[[80,449],[129,228],[262,163],[510,169]]},{"hunter":[291,437],"surviver":[[52,507],[92,274],[351,169],[513,299]]},{"hunter":[185,509],"surviver":[[91,273],[165,172],[361,295],[436,387]]},{"hunter":[53,505],"surviver":[[92,270],[159,166],[263,363],[342,511]]},{"hunter":[265,315],"surviver":[[47,496],[216,62],[427,131],[518,301]]}]
    }`);


    // 2 TODO: 将 mapInfo 的所有监管者的位置，显示在图片上（军工厂2个红点）
    const mapInfo = mapPosInfo[mapName];
    const box = document.querySelector(".icons");
    box.innerHTML = ''
    for (let j = 0; j < mapInfo.length; j++) {
        // 获得每个hunter的位置
        const hunterPos = mapInfo[j]["hunter"];
        // 创建1个i标签
        let i = document.createElement("i");
        // 添加
        box.appendChild(i);
        i.innerHTML = "o";
        i.className = "hunter";
        i.style.top = hunterPos[1] + "px";
        i.style.left = hunterPos[0] + "px";

        // 3 TODO: 监管者点击后，显示出求生者位置（1个红点 + 4个蓝点）
        //获得每个surviver位置
        const surviverPos = mapInfo[j]["surviver"];
        //为每个i设置事件
        i.onclick = function() {
            //事件1:每次i点击隐藏所有其他红点,保留当前红点
            const is = document.querySelectorAll(".hunter");
            for (let k = 0; k < mapInfo.length; k++) {
                if (is[k] !== this) {
                    box.removeChild(is[k]);
                }
            }
            //事件2:显示对应4个蓝点
            for (let k = 0; k < surviverPos.length; k++) {
                let i = document.createElement("i");
                box.appendChild(i);
                i.innerHTML = "x";
                i.className = "surviver";
                i.style.top = surviverPos[k][1] + "px";
                i.style.left = surviverPos[k][0] + "px";
            }
        };
    }
}