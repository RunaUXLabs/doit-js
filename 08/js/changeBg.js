function changeBg() {
    let randomNum = Math.floor(Math.random() * 5) + 1;
    // console.log(randomNum)
    document.body.style.backgroundImage = `url(images/bg-${randomNum}.jpg)`;
}
// 일반적인 이벤트에서는 함수를 실행만 시키면 되는데 새로고침을 하면 날라감.
// load 이벤트 자체가 새로고침이며, 이걸 실행하면서 함수를 즉시실행해야해서 함수명에 () 붙여줘야한다.
window.addEventListener('load', changeBg);
// 이벤트 리스너 콜백함수명을 넣었을 때
// - 이벤트 이후에 콜백함수 실행
// - 그런데!'load'가 이벤트를 날려먹음, changeBg가 실행할 수 조차 없음.
// - 일반 이벤트리스너처럼 쓰고 싶어서 콜백함수 명만 쓰고 싶으면,
// - window.addEventListener('load', changeBg);로 구성을 해주면 된다.
//   하지만 css먼저 읽힌다면 최초로딩에서 사진이 바뀌는 부분이
//   살짝 거슬릴 수 있다. (현재 html DOM읽고 js읽고 있음)

// document.addEventListener('load', changeBg());
// 이벤트 리스너 콜백함수명()을 넣었을 때
// - 문서로딩히 콜백함수실행, 이벤트 안먹음
// - *자살자살자살자살자살자살자살 맥락이해하기*


// const h1 = document.querySelector('h1')
// h1.addEventListener('click', changeBg)


// button태그는 form태그 안에 들어있을 때 submit의 기능을 기본으로 가지고 있다(전송하고 나서 문서를 새로고침을 한다는 특성).
// 쌩으로 changeBg()콜링을 만나고 form안의 button이 눌리면 새로문서가 읽혀서 다시 changeBg()만나게 되는 개념이다.
// 이는, 새로고침을 해서 changeBg를 콜백으로 만나 배경이 바뀌는 흐름이 아니고, 걍 처음 읽혔더니 changeBg를 만나서 배경이 바뀌는 흐름처럼 보이게 된 것이다.
// changeBg();