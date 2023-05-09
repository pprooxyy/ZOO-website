const changeTarifSave = document.getElementById('changeTarifSave');

const tdElements = document.querySelectorAll('.tarif-value');
const { editTarif } = document.forms;

editTarif.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(editTarif);
  const values = Object.values(Object.fromEntries(data));
  for (let i = 0; i < tdElements.length; i++) {
    tdElements[i].textContent = values[i];
  }
  try {
    const url = window.location.href;
    const response = await fetch('/admin/tarifs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    console.log('response:', response);
    console.log(JSON.stringify(Object.fromEntries(data)));

    window.location.href = url;
  } catch (error) {
    console.error(error);
  }
});
