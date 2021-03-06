import * as axios from 'axios'
import qs from 'qs'

export function saveToTxt() {
    const markButton = document.querySelector('#mark-button')
    markButton.addEventListener('click', setPos)
}

function setPos() {
    const img = document.querySelector('img')
    const iconBox = document.querySelector('.icons')
    console.log('点击监管者 & 4个求生者的坐标');

    // 0 处理跨域问题
    axios.defaults.headers.post['Content-Type'] = 'applicaiton/x-www-form-urlencoded'

    // 1 为图片绑定点击事件
    let positions = []
    const mapName = window.prompt('输入地图名称');
    let partternCounts = window.prompt('输入可能的情况种数');
    let clickCounts = 5 * partternCounts;

    const mapPosInfo = {}
    mapPosInfo[mapName] = []
    img.addEventListener('mousedown', (event) => {

        if (clickCounts-- > 0) {
            // console.log(`remain ${clickCounts} positions`);
            // 1 获得点击坐标
            positions.push([
                event.offsetX,
                event.offsetY
            ])
            console.log({ x: event.offsetX, y: event.offsetY });
            let i = document.createElement("i");
            // 添加
            iconBox.appendChild(i);
            i.innerHTML = clickCounts % 5 === 4 ? "o" : "x";
            i.className = clickCounts % 5 === 4 ? "hunter" : "surviver"
            i.style.top = event.offsetY - 29 / 1.25 + "px";
            i.style.left = event.offsetX - 27 / 1.25 + "px";
        }

        if (clickCounts % 5 === 0) {
            // 2 保存到特定数据结构的对象
            mapPosInfo[mapName].push({
                hunter: positions[0],
                surviver: positions.slice(1)
            })
            positions = []
            console.log('下一组');
            setTimeout(() => {
                iconBox.innerHTML = ''
            }, 1000)
        }

        if (clickCounts === 0) {
            // 3 存储到 txt 文件
            // fs.writeFile('characterPositions.txt', mapPosInfo)
            console.log(mapPosInfo);
            axios
                .post(
                    'http://localhost:3000/',
                    mapPosInfo
                ).then(res => {
                    console.log('axios success!', res);
                }).catch(e => {
                    console.log(e);
                })

        }

    })
}