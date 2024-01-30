function changeBg(){
    let randomNum = Math.floor(Math.random() * 5) + 1
    // console.log(randomNum)
    document.body.style.backgroundImage = `url(images/bg-${randomNum}.jpg)`
}
document.addEventListener('load', changeBg())
// 일반적인 이벤트에서는 함수를 실행만 시키면 되는데 새로고침을 하면 날라감.
// load 이벤트 자체가 새로고침이며, 이걸 실행하면서 함수를 즉시실행해야해서 함수명에 () 붙여줘야한다.

const h1 = document.querySelector('h1')
h1.addEventListener('click', changeBg)