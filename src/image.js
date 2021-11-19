/*
 * @Author: your name
 * @Date: 2021-11-19 15:53:50
 * @LastEditTime: 2021-11-19 15:56:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /esbuild-study/src/image.js
 */
import url from './image.png'
let image = new Image
image.src = url
document.body.appendChild(image)