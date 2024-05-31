// function Cylinder(지름, 높이){}

// 생성자함수
// function Cylinder(diamiter, height) {
//     this.cylinderDiamiter = diamiter;
//     this.cylinderHeight = height;
//     this.getVolume = function () {
//         let radius = this.cylinderDiamiter / 2; // 반지름
//         // 부피구하기 = 밑면적*높이 = 반지름*반지름*파이*높이
//         return (radius * radius * Math.PI * this.cylinderHeight).toFixed(2);
//     };
// }
// let c1 = new Cylinder(15, 6);
// console.log(c1.getVolume());

// 클래스구문으로 변경
class Cylinder {
    constructor(diamiter, height) {
        this.cylinderDiamiter = diamiter;
        this.cylinderHeight = height;
    }
    getVolume() {
        let radius = this.cylinderDiamiter / 2;
        return (radius * radius * Math.PI * this.cylinderHeight).toFixed(2);
    }
}

const btn = document.querySelector('button');
const result = document.querySelector('#result');

btn.addEventListener('click', (e) => {
    e.preventDefault(); // 버튼 새로고침 막기

    // 값 추출
    const diamiter = document.querySelector('#cyl-diameter');
    const height = document.querySelector('#cyl-height');

    // 교재 답
    // if (diamiter === "" || height === "") {
    //     result.textContent = '값을 입력해주시오';
    // } else {
    //     let cylinder = new Cylinder(parseInt(diamiter), parseInt(height));
    //     result.textContent = `원기둥의 부피는 ${cylinder.getVolume()}입니다.`;
    // }

    // 응용답
    const Int_diamiter = parseInt(diamiter.value);
    const Int_height = parseInt(height.value);
    if (isNaN(Int_diamiter)) {
        result.textContent = '지름에 숫자값을 입력해주시오';
        diamiter.value = '';
        diamiter.focus();
        return false;
    }
    if (isNaN(Int_height)) {
        result.textContent = '높이에 숫자값을 입력해주시오';
        height.value = '';
        height.focus();
        return false;
    }
    if (diamiter === "" || height === "") {
        result.textContent = '값을 입력해주시오';
        diamiter.focus();
        return false;
    } else if (!isNaN(Int_diamiter) && !isNaN(Int_height)) {
        let cylinder = new Cylinder(Int_diamiter, Int_height);
        result.textContent = `원기둥의 부피는 ${cylinder.getVolume()}입니다.`;
    }
});