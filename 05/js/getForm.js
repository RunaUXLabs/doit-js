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