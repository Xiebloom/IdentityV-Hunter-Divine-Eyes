module.exports = function readFronTxt() {
    const readButton = document.querySelector("#read-button");

    readButton.addEventListener("click", readFronTxt);

    function readFronTxt() {
        // 1 读取 txt，并转化为对象
        const mapPosInfo = JSON.parse(`{
            "军工厂":[
                {"hunter":[313,242],"surviver":[[354,364],[510,374],[594,294],[596,211]]},
                {"hunter":[213,142],"surviver":[[384,264],[710,274],[194,694],[296,511]]}
            ],
            "红教堂":{"hunter":[369,200],"surviver":[[532,496],[541,346],[613,259],[689,205]]}
        }`);
        //console.log('readInfo:', mapPosInfo);

        // 2 TODO: 将 mapInfo 的所有监管者的位置，显示在图片上（军工厂2个红点）
        const mapInfo = mapPosInfo["军工厂"];
        const box = document.querySelector(".box");
        for (let j = 0; j < mapInfo.length; j++) {
            // 获得每个hunter的位置
            const hunterPos = mapInfo[j]["hunter"];
            // 创建1个i标签
            let i = document.createElement("i");
            // 添加
            box.appendChild(i);
            i.innerHTML = "o";
            i.className = "hunter";
            i.style.top = hunterPos[0] + "px";
            i.style.left = hunterPos[1] + "px";

            // 3 TODO: 监管者点击后，显示出求生者位置（1个红点 + 4个蓝点）
            //获得每个surviver位置
            const surviverPos = mapInfo[j]["surviver"];
            //为每个i设置事件
            i.onclick = function() {
                //事件1:每次i点击隐藏所有其他红点,保留当前红点
                const is = document.querySelectorAll(".hunter");
                for (let k = 0; k < mapInfo.length; k++) {
                    is[k].style.display = "none";
                }
                this.style.display = "block";
                //事件2:显示对应4个蓝点
                for (let k = 0; k < surviverPos.length; k++) {
                    let i = document.createElement("i");
                    box.appendChild(i);
                    i.innerHTML = "x";
                    i.className = "surviver";
                    i.style.top = surviverPos[k][0] + "px";
                    i.style.left = surviverPos[k][1] + "px";
                }
            };
        }
    }
};