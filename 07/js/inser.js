let btn = document.querySelector('button')
const baisisNode = document.querySelectorAll('p')[2] // Javascript위치

function createTypescript(){
    let p = document.createElement('p')
    let txt = document.createTextNode('Typescript')
    p.appendChild(txt)
    document.body.insertBefore(p, baisisNode)
}
btn.addEventListener('click', createTypescript, {once:true}) // 한번만 실행