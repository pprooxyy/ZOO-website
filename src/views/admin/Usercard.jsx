const React = require('react');

module.exports = function Usercard(props) {
  const { oneUser, deleteKey } = props;
  return (
    <div className="user-card-container">
      <div className="card">
        <h5 className="card-header">Учетные данные пользователя...</h5>
        <div className="card-body">
          <h5 className="card-title">{`Имя пользователя: ${oneUser.user_name}`}</h5>
          <p className="card-text">{`Адрес электронной почты: ${oneUser.email}`}</p>
          <a
            href={`/admin/profile/${oneUser.id}`}
            className="btn btn-outline-primary"
          >
            Изменить
          </a>
          {deleteKey ? (
            <a
              href={`/admin/killer/${oneUser.id}`}
              className="btn btn-outline-danger"
            >
              Удалить
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
