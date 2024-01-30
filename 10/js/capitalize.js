const string = prompt('영문 소문자로 된 문자열을 입력하세요')

// const firstCh = string[0].toUpperCase()
// const remainStr = string.slice(1)
// const result = firstCh + remainStr
// document.write(result)

// 배열을 이용하여 간단히 끝내기
const result = [string[0].toUpperCase(), ...string.slice(1)].join('')
// 배열 result의 0번은 string[0].toUpperCase() 첫글자 대문자화
// 배열 result의 1번은 string을 전개구문화 해서 slice(1) 슬라이스로 1번이후만 정리한것 전부
// join을통해 그 배열 전체를 문자열로 반환하라

document.write(result)