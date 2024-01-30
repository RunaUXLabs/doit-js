let tsNode = document.createElement('p')
let tsTextNode = document.createTextNode('Typescript')
tsNode.appendChild(tsTextNode) //텍스트 노드를 p태그의 자식으로 연결

let basisNode = document.querySelectorAll('p')[0]
//해당 문서의 p만 모은 유사배열의 첫번째 요소를 변수에 할당, 기준노드설정
// document.body.insertBefore(새노드, 기준노드)
document.body.insertBefore(tsNode, basisNode)
