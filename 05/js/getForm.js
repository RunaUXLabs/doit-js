const selectMenu = document.querySelector("#major");
// 선택 목록을 가져와 selectMenu로 저장

function displaySelect() {
	let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
	// selectMenu.options[인덱스번호].innerText
	// .selectedIndex란 select에서 옵션을 선택했을때 해당 인덱스번호는 반환한다.

	alert(`[${selectedText}]를 선택했습니다.`);
}

// selectMenu.onchange = displaySelect;
// select요소는 내가 클릭해서 선택했다고 해서 이벤트를 onclick으로 거는것이 아니다.
// select요소는 기본 설정값이 있고, 그 많은 리스트중에서 하나가 골라진것이므로 값이 변경되었다로 인식해야한다. onchange
selectMenu.addEventListener('change', displaySelect);

// 셀렉트박스를 하나 더 추가해서 위의 alert으로 뜨게 만들어보자

/**
 * 체크박스에서 '선택된' 요소를 가지고 올 때,
 * document.querySelectorAll("input[name='mailing']:checked")을 사용해야한다.
 * 
 * 1. document.querySelector("input[name='mailing']:checked") 쓰면?
 * 	 선택자가 and조건으로 3가지가 다 true여야지만 그 요소를 찾아 '태그째 반환'
 *   조건 설명: input이고, name이 mailing, 선택이 되어있는 요소 찾기
 *   해당조건을 만족하지 않으면 null로 반환됨
 * 2. 내가 원하는건 그 많은 체크박스중에 선택된 요소만 갖고싶은데요?
 *   document.querySelectorAll('선택된상태의 선택자 구성')로 출력시
 *   '선택된 애만 추려서 배열에 담아서 반환'한다.
 */

