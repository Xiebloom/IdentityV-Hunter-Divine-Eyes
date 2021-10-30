import * as axios from 'axios'
import qs from 'qs'

export function saveToTxt() {
    const markButton = document.querySelector('#mark-button')
    markButton.addEventListener('click', saveToTxt)
    const img = document.querySelector('img')
    console.log('点击监管者 & 4个求生者的坐标');


    // 0 处理跨域问题
    // axios.defaults.withCredentials = true;
    axios.defaults.headers.post['Content-Type'] = 'applicaiton/x-www-form-urlencoded'


    // 1 为图片绑定点击事件
    const positions = []
    let clickCounts = 5
    img.addEventListener('mousedown', (event) => {
        if (clickCounts-- > 0) {
            // console.log(`remain ${clickCounts} positions`);
            // 1 获得点击坐标
            positions.push([
                event.offsetX,
                event.offsetY
            ])
        }

        if (clickCounts === 0) {
            // 2 保存到特定数据结构的对象
            const mapName = '军工厂'
            const mapPosInfo = {}
            mapPosInfo[mapName] = {
                hunter: positions[0],
                surviver: positions.slice(1)

            }

            // 3 存储到 txt 文件
            // fs.writeFile('characterPositions.txt', mapPosInfo)
            console.log(JSON.stringify(mapPosInfo));
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