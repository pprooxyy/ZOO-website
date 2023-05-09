const React = require('react');

function Card(props) {
  const { el, user } = props;
  return (
    <div key={el.id} className="cardContainer">
      <a href={`/animals/${el.id}`}>
        <div className="visibleContainer">
          <div
            className="card-image-container"
            style={{ backgroundImage: `url(${el.photo_link})` }}
          ></div>
          <h2>{el.name}</h2>
        </div>
      </a>
      {user ? (
        <div className="hiddenContainer">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal${el.id}`}
            id={el.id}
          >
            Редактировать
          </button>
          <div className="hiddenModal">
            <div
              className="modal fade"
              id={`exampleModal${el.id}`}
              tabIndex="-1"
              aria-labelledby={`exampleModal${el.id}Label`}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5"
                      id={`exampleModal${el.id}Label`}
                    >
                      {`Редактирование карточки: ${el.name}`}
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img
                      style={{ maxWidth: 350 + 'px' }}
                      src={`${el.photo_link}`}
                      className="cardImg"
                    />
                    <form method="post" encType="multipart/form-data">
                      <input
                        type="file"
                        name="avatar"
                        id={el.id}
                        className={`choosePhoto${el.id}`}
                      />
                    </form>
                    <form name="editTextForm" id={el.id}>
                      <input
                        method="put"
                        defaultValue={el.name}
                        name="editTextForm"
                        id={el.id}
                        className={`editTextForm${el.id}`}
                      ></input>
                    </form>
                    <button
                      className="deleteBtn btn btn-outline-danger"
                      id={el.id}
                    >
                      Удалить карточку животного
                    </button>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Закрыть
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      id={el.id}
                    >
                      Сохранить изменения
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

module.exports = Card;
