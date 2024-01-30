// 계산식의 우선순위

// 전치> 계산식> 후치

// 나의 계산식에서 전치가 나왔다하면(++x) 전치부터 적용된 값을 계산식에 넣어서 총괄 계산을 한다.
// 후치가 나오면 일반계산식먼저하고 변수에 증가감을 적용한다.

let x = 20
let y = 7

// let result = x+y
// console.log(result)
// let result = x + y++
// console.log(y)
let result = ++x + y
console.log(result)
console.log(x)



// 할당연산자
// 증가감 연산자는 할당연산자보다 우선순위가 높다







