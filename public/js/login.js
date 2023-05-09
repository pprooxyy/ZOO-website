console.log('========== login.js ===========');

const { logForm } = document.forms;

logForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(logForm);
  const msg = document.querySelector('.msg');

  try {
    const response = await fetch('/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    const result = await response.json();

    if (result.userName) {
      msg.style.visibility = 'visible';
      msg.style.color = 'green';
      msg.innerText = `${result.msg}`;

      // const headerUser = `
      // <div class="userLogout">
      //       <a href="/admin/profile" class="btn btn-primary">
      //        Приветствую тебя, ${result.userName}!
      //       </a>
      //       <a class="btn btn-primary" href='/admin/logout'>Выход</a>
      // </div>`;
      // document.querySelector('.logReg').remove();

      // const navbar = document.getElementById('navbarSupportedContent');
      // navbar.insertAdjacentHTML('beforeend', headerUser);
      setTimeout(() => {
        msg.style.visibility = 'hidden';
        // logForm.remove();
        window.location.href = '/admin/profile';
      }, 1000);
    } else {
      msg.style.visibility = 'visible';
      msg.innerText = `${result.msg}`;
      document.querySelectorAll('input').forEach((el) => (el.value = ''));
      setTimeout(() => {
        msg.style.visibility = 'hidden';
      }, 2000);
      if (
        msg.innerText ===
        'Пользователь с такими данными не найден, зарегистрируйтесь !'
      ) {
        setTimeout(() => {
          msg.style.visibility = 'hidden';
          window.location.reload();
        }, 2000);
      }
    }
  } catch (error) {
    msg.style.visibility = 'visible';
    msg.innerText = `ОШИБКА!!!\n${error}`;
    document.querySelectorAll('input').forEach((el) => (el.value = ''));
    setTimeout(() => {
      msg.style.visibility = 'hidden';
    }, 2000);
  }
});
