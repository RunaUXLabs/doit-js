// 함수는 수학의 공식으로 이해할 것
function add(a, b) {
  return a + b; // 퉤
}

var sum3 = add(10, 20);
console.log(sum3); // 30

var sum4 = add(67, 137);
console.log(sum4); // 204

var sum3 = 100;   // var 변수는 재선언 가능
console.log(sum3);
// 덮어썼을 때 문제가 안생기면 다행, 문제가 생긴다면 고민해보자

sum4 = 200;
console.log(sum4); // var 변수는 재할당 가능


let sum1 = add(87, 14); // 함수콜링하여 변수에 할당
console.log(sum1); // 101
// 재선언 시도
// let sum1 = 500;
// 재할당 시도
// sum1 = 600;
console.log(sum1);

const sum2 = add(10, 44); // 54
console.log(sum2);
// 재선언 시도
// const sum2 = 100;
// 재할당 시도
// sum2 = 57;
console.log(sum2);







// p55부터 쭉 예제
// p55 나이계산기 만들기
console.log("-----나이계산기만들기");
// const currentYear = 2023;
// let birthYear = prompt('당신이 태어난 해는 언제인가요?(네자리 연도만 입력가능)', '2000');
// let age = currentYear - birthYear;
// document.write(age);



// 데이터타입
console.log(typeof ('안녕?'));
console.log(typeof (sum3));
console.log(typeof ('3'));
console.log(typeof (3));


console.log("-----데이터타입 확인과 연결연산자+, 이스케이프문자\, 백팃``");
let data = "\'s";
console.log(data);
// console.log(typeof(data))

let hello = "안\n녕";
console.log(typeof (hello));
console.log(hello);
console.log("I\'m a boy");


let data2 = "";
console.log(typeof (data2));

// 1.사용자가 올바르게 입력
// 2-1.사용자(또라이)가 의도적으로 이상한 답을 입력
// 2-2.선의의 사용자가 의도와는 다르게 다른 데이터 타입을 입력했을때
// 3.사용자가 아무것도 입력하지 않고 다음을 눌렀을때
// 4.취소를 눌렀을때 => null


// + 연결연산자
let data3 = '데이터타입 ' + data + '입니다.';
console.log(data3);

// ``백팃, ES6부터 사용, 변수표현 ${변수}
let data4 = 123;
let data6 = `123`;
let data5 = `${data4}`;
// let data4 = `데이터타입 ${data}입니다.`;
// let data4 = `데이터타입 data입니다.`;
console.log(data4);
console.log(typeof (data6));
console.log(typeof (data5));

// 1분복습
// let userName = prompt('이름이 뭐니?');
// console.log(`${userName}님, 반갑습니다!`);

// 불리언, true또는 false만 갖는다, 제어문(if문, switch문...)에서 많이 활용된다
console.log(10 > 2);
console.log(10 < 2);
// 숫자가 들어온 자리에 변수가 들어온다고 생각 해 볼 것

let first, second; //undefined
second = null; //재할당, null, 더 명확하게 현재 유효하지 않음을 표현
console.log(first); //undefined
console.log(second); //null





// 객체
console.log("-----객체{키:값}");
let gitBook = {
  title: "깃&깃허브 입문",
  pages: 272
};
// 객체안의 프로퍼티는 순서를 지정할 수 없다. 나중에 배울 객체에는 순서도 있음.
console.log(gitBook);
console.log(gitBook.pages); // 점표기법
console.log(gitBook["title"]); //대괄호표기법


// 객체 1분 복습하기
// 내가 가지고 있는 물건의 정보를 객체화 해보기
let cup = {
  brand: "글라스락",
  ml: 500,
  color: "화이트베이지",
  lock: true
};
console.log(cup);
console.log(cup.ml);
console.log(cup["color"]);

// 위의 객체정보 엘리먼트에 삽입해보기
// document.querySelector('#cupInfo').textContent = '글라스락 텀블러';
document.querySelector('#cupInfo').textContent = cup.brand;
// document.querySelector('.cupColor').textContent = cup.color;
document.querySelector('.cupColor').textContent = cup["color"];



// 배열
console.log("-----배열[값,값]");
let fruits = ["바나나", "사과", "포도"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

console.log(fruits[fruits.length - 1]);
// console.log(fruits[2]);

// 배열로 된 변수를 그대로 콘솔로 찍으면 모든 정보가 다 보여진다.
// 배열의 각 값에 접근하려면 배열[인덱스번호]
// 배열의 값 갯수가 따로 필요하면 배열.length 라고 물어보면 숫자를 뱉어줌(반환한다)

// 함수콜링 ====>  함수명()  예시: console.log('내용')
// 내가만든거아닌데 객체 뒤에 붙고 괄호가 없어? 이건 프로퍼티
// 예시: 배열.length



// 심벌 Symbol()
console.log("-----고유값 지정, 심벌 Symbol()");
let var1 = Symbol();
let var2 = Symbol();
console.log(var1 === var2);

let id = Symbol(); // 기본값
// let id = Symbol("아이디 고유값") // 설명문 추가할 수 있음
const member = {
  name: "kim",
  [id]: 12345
};
console.log(member);
// {name: 'kim', Symbol(): 12345}

// 배열[인덱스번호]
// 객체명.키  ==> 점표기법
console.log(member.name);
console.log(member.id); // undefined
console.log(member[id]); // 12345

// 객체를 따로 만들어서, 1개의 프로퍼티에 심볼처리를 하고 그 값을 도출하기 위해 콘솔에 찍어보기

// 객체에서는 추가,수정,삭제가능
// 객체 데이터 수정해보기
member.name = 'park';
// 객체에서 값을 변경하거나 추가할 때 사용함
console.log(member);
// 같은키의 값이 변경된다

// 외부에서 수정시도
member.id = 6789;
console.log(member);
// {name: 'park', id: 6789, Symbol(): 12345}
// id값이 덮어써지는 것이 아니고, 내가 처리한 심볼은 보존, 새로들어온 id는 추가

member[id] = 356874;
// 심벌로 지정된 값을 변경할 수 있다
// 심벌이 값을 재할당, 재선언 할 수 없다는 개념은 외부데이터로 인한 변동이라 생각할것. 나는 다 할 수 있음
console.log(member);
// {name: 'park', id: 6789, Symbol(): 356874}



// // 숫자 데이터 타입으로 들어오면 콘솔에서 파란색
// // 그외 계산식이 안통하는 문자열 등으로 들어오면 검은색
// // Number(내용물)
// console.log("-----숫자로변환 Number()")

// console.log("20")
// console.log(20)
// console.log(Number("20"))
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number("안녕?"))



// // 정수변환 parseInt()와 실수사용parseFloat()
// console.log("-----정수변환 parseInt()와 실수사용parseFloat()")
// // let userInput = prompt('아무숫자나 입력해 주세요!')
// // console.log(typeof(userInput))
// // //prompt를 통해 들어온 데이터는 몽땅 문자열이다

// // userInput = userInput * 10 // 재할당
// // console.log(userInput)
// // //계산이 되면 number로 변경됨 

// // console.log(parseInt(userInput))
// //출력되는 값을 정수로 변경해줌, 숫자가 베이스가 됨



// // 문자열로 변환하기, toStrig(), String()
// console.log("-----문자열로 변환하기, toStrig(), String()")
// let num = 10;
// let isEmpty = true; 
// let isEmpty2 = 1;
// // 불리언에서 true가 1이고  false가 0이지만, 문자열 변경 함수에서는 이 값을 숫자와 문자열로 인식한다.
// console.log(num.toString()) // 10
// console.log(num.toString(2)) // '1010'
// console.log(isEmpty.toString()) // 'true'
// console.log(isEmpty2.toString()) // '1'

// let isNull  = null;
// // console.log(isNull.toString()) // 에러남
// // .toString()은 null이나 undefined를 쓸 수 없음
// console.log(String(isNull)) //null
// let isUndefined  = undefined;
// console.log(String(isUndefined)) //undefined
