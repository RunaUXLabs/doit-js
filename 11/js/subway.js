// 경강선 노선 제너레이터함수 만들기
// 제너레이터 함수의 특징은 function* 와 yield이며, 일반함수의 return과는 다르게 yield를 여러개 선언후 순차접근이 가능하다.
function* train(){
    yield '판교';
    yield '이매';
    yield '삼동';
    yield '경기광주';
    yield '초월';
    yield '곤지암';
    yield '신둔도예촌';
    yield '이천';
    yield '부발';
    yield '세종대왕릉';
    yield '여주';
}

let 경강선 =  train() // 이터러블 객체선언

const btn = document.querySelector('button')
const result = document.querySelector('#result')
btn.addEventListener('click', ()=>{
    // 버튼을 클릭할 때마다
    let 현재 = 경강선.next()
    if(현재.done !== true ){
        //done 프로퍼티의 false값이 나오면
        result.textContent = 현재.value
    }else{
        //done 프로퍼티의 true값이 나오면
        result.textContent = '종점!'
        btn.setAttribute('disabled','disabled')
    }
})