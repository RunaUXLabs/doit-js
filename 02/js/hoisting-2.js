// let으로 호이스팅 막기(활동 범주 제한)
let a = 10
let sum2 = a + b
let b = 20
console.log(sum2)
// 에러 확인: Cannot access 'b' before initialization
// 초기화 전에 'b'에 액세스할 수 없습니다.
// 3번라인에서 나온 에러임, b의 정보가 없어서 3번을 계산할 수 없습니다.