console.log('========== edituserprofile.js ===========');
const { editForm } = document.forms;

editForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = e.target.lastChild.id;
  const data = new FormData(editForm);
  try {
    const response = await fetch(`/admin/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    console.log('response:', response);
    const result = await response.json();
    console.log('result:', result);
    const msg = document.querySelector('.msg');
    if (result.msg === 'Данные пользователя обновлены') {
      msg.style.visibility = 'visible';
      msg.style.color = 'green';
      msg.innerText = `${result.msg}`;
      setTimeout(() => {
        document.querySelectorAll('input').forEach((el) => (el.value = ''));
        window.location.href = '/admin/profile';
      }, 500);
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
