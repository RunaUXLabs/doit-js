// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(users => console.log(users));

function display(users) {
  const result = document.querySelector('#result');
  let string = '';

  // users는 배열이고, 그안의 값은
  // users.forEach((user) => {
  //   string += `<ul>
  //     <li>${user.name}</li>
  //     <li>${user.username}</li>
  //     <li>${user.email}</li>
  //   </ul>`;
  //   string += `<table>
  //     <tr>
  //       <th>이름</th><td>${user.name}</td>
  //     </tr>
  //     <tr>
  //       <th>아이디</th><td>${user.username}</td>
  //     </tr>
  //     <tr>
  //       <th>이메일</th><td>${user.email}</td>
  //     </tr>
  //   </table>`;
  // });

  for (const user of users) {
    string += `<table>
      <tr><th>이름</th><td>${user.name}</td></tr>
      <tr><th>아이디</th><td>${user.username}</td></tr>
      <tr><th>이메일</th><td>${user.email}</td></tr>
    </table>`;
  }
  result.innerHTML = string;
}

async function init() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  display(users);
}
init();
