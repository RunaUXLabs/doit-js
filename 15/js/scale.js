const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// 기본 사각형
ctx.fillStyle = "#ccc";
ctx.fillRect(50, 50, 100, 50);//그림1

ctx.save(); // 확대한 후 사각형, 영향력 미치는 명령어 전에 필수선언!

ctx.scale(3, 2); // 스케일 아래로 영향력 미침
ctx.strokeRect(20, 70, 100, 50); //그림2
ctx.strokeRect(0, 0, 100, 10); // 스케일영향받는그림3

ctx.restore(); // 되돌리는 명령어로 끊어주기

ctx.strokeRect(200, 50, 100, 50); // 원래대로 그리고싶은 그림4

// 스케일을 일부분에게만 적용시키고 싶다면, 스케일 적용하기전에 save()하고 scale()선언, restore()선언하여 끊어주면 그 이후 그려라 명령은 원비율대로 그려진다.
// save()와 restore()를 활용하면 구분지어 영향을 줄 수 있음