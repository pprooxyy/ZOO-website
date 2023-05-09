console.log('========== editprofile.js ===========');

const changeButtons = document.querySelectorAll('.change');
console.log(changeButtons);
changeButtons.forEach((el) => {
  el.addEventListener('click', (e) => {
    console.log(e);
    e.preventDefault();
    const id = e.target.id;
    const userModal = document.getElementById(`profileModal${id}`);
    if (userModal) {
      const EditUser = document.querySelectorAll('.EditUser');
      console.log('saljhksajng', EditUser);

      EditUser.forEach((form) => {
        form.addEventListener('submit', async (event) => {
          event.preventDefault();
          const data = new FormData(form);
          try {
            const response = await fetch('/admin/profile', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(Object.fromEntries(data)),
            });
            const result = await response.json();
            // const headerUser = `
            // <div class="userLogout">
            //       <a href="/admin/profile" class="btn btn-primary">
            //        Приветствую тебя, ${result.name}!
            //       </a>
            //       <a class="btn btn-primary" href='/admin/logout'>Выход</a>
            // </div>`;

            // const navbar = document.getElementById('navbarSupportedContent');
            // navbar.insertAdjacentHTML('beforeend', headerUser);
            window.location.reload();
          } catch (error) {
            console.log(error);
          }
        });
      });
    }
  });
});
