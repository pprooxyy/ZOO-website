const animalsContainer = document.querySelector(".animals-container");
const cardTextContainer = document.querySelector(".cardTextContainer");

animalsContainer.addEventListener("click", async (e) => {
  // e.preventDefault();
  try {
    if (e.target.classList.contains("deleteBtn")) {
      const response = await fetch(`/animals/killer/${e.target.id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        e.target.parentNode.parentNode.remove();
        window.location.href = "/animals";
      }
    }
  } catch (error) {
    alert("Не получилось удалить животное!", error);
  }
});

animalsContainer.addEventListener("click", async (e) => {
  // e.preventDefault();
  try {
    if (
      e.target.classList.contains(`btn-primary`) &&
      e.target.parentNode.classList.contains(`modal-footer`)
    ) {
      const editTextForm = document.querySelector(
        `.editTextForm${e.target.id}`
      );
      let response1;
      let response2;
      if (editTextForm.value !== editTextForm.defaultValue) {
        response1 = await fetch(`/animals/${e.target.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: editTextForm.value }),
        });
      }

      const choosePhoto = document.querySelector(`.choosePhoto${e.target.id}`);
      if (choosePhoto.files[0]) {
        const formData = new FormData();
        formData.append("avatar", choosePhoto.files[0]);
        response2 = await fetch(`/animals/upload/${e.target.id}`, {
          method: "POST",
          body: formData,
        });
      }

      if (response1?.ok || response2?.ok) {
        window.location.href = "/animals";
      }
    }
  } catch (error) {
    console.log("error===>", error);
    alert("Изменений в карточке нет");
  }
});
