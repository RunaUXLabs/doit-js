// 예약어 변수명 = 값
// let, const, var

let apple = '사과';
// let apple = '능금';
// let 재선언 안됨

// apple = '능금';
console.log(apple);
// let 재할당 가능

// 유연해서 좋으나, 복잡한 수식에서는 도움1도 안되는 var
var orange = '오렌지';
var orange = '레드오렌지';
// var 재선언 가능
console.log(orange);
orange = '자몽';
// var 재할당 가능
console.log(orange);



const banana = '바나나';
// const banana = '몽키바나나'
// const 재선언 안됨

banana = '몽키바나나';
console.log(banana);
// 콘솔 창에서 에러 뜸: Assignment to constant variable
// const 재할당 안됨

// 변수선언에서 엄격하면 엄격할 수록 수식을 짤 때 오류발생이 적어진다.

// const 현재연도 = 2026
// 만나이계산 = (현재연도 - 태어난연도) -1
// console.log(만나이계산);

// 만나이계산 = (2024 - 태어난연도) -1
// console.log(만나이계산);

/**변수를 왜 써야할까?
 * 이 변수가 한번~두번 정도 쓰인다면 그닥의미 없음, 여러번 쓰인다면 한번바꿔서 여러번쓰인곳에 수정이 일괄적으로 되기때문
 * 
 * 해당변수가 사용자가 입력하는 값이라면?
 * 어떤값이 들어올 지 모르니 당연히 변수처리를 해야지!
 * 수식에 유연하게 대처할 수 있다, 고정값은 그게 불가능하다(하나하나 고쳐야 함, 귀찮음)
 * = 내가 이 귀찮은 짓을 안하려고 스크립트를 배우는거다
 * 
 * 
 * 재선언: 그변수 또쓰는거
 * =>내가 해당변수를 부르면 그값은 A인가 B인가?
 * 재할당: 해당변수에 값만 바꾸는거
 * 재선언이나 재할당은 바꾼다는 맥락은 같다.
 * 참조하는 입장에서 생각해 보면 헷갈릴수있는부분을 최소화 하자 => let과 const
 * 
 * let과 const는 재선언이 안된다고 했는데, 왜 콘솔에서 직접 입력했을 땐 재선언이 되는걸까?
 * 개발자 도구 콘솔과 같은 REPL모드와 일반 스크립트의 차이점이다.
 * 콘솔은 입력하는 한 줄 한 줄 마다 바로 실행이 되기 때문에 변수를 선언하다가 오타가 난 채로 선언을 해버리면 해당 변수명은 다시 쓸 수 없다.
 * 따라서 let과 const의 경우 일반 스크립트 모드와는 다르게 다른 줄에 선언을 할 경우 같은 변수명이어도 재선언이 가능하다. (같은 줄일 경우 에러 발생)
 * https://velog.io/@newdana01/JavaScript-var-let-const%EC%9D%98-%EC%B0%A8%EC%9D%B4
 */