console.log('========== newuser.js ===========');
const { regForm } = document.forms;

regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(regForm);
  try {
    const response = await fetch('/admin/newuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    console.log('response:', response);
    const result = await response.json();
    console.log('result:', result);
    const msg = document.querySelector('.msg');
    if (result.msg) {
      msg.style.visibility = 'visible';
      msg.innerText = `${result.msg}`;
      document.querySelectorAll('input').forEach((el) => (el.value = ''));
    } else {
      msg.style.visibility = 'hidden';
      msg.innerText = '';
      // const headerUser = `
      // <div class="userLogout">
      //       <a href="/admin/profile/" class="btn btn-primary">
      //        Приветствую тебя, ${result.user_name}!
      //       </a>
      //       <a class="btn btn-primary" href='/admin/logout'>Выход</a>
      // </div>`;
      // document.querySelector('.logReg').remove();

      // const navbar = document.getElementById('navbarSupportedContent');
      // navbar.insertAdjacentHTML('beforeend', headerUser);
      setTimeout(() => {
        // msg.style.visibility = 'hidden';
        // regForm.remove();
        window.location.href = '/admin/profile';
      }, 1000);
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
