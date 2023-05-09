const React = require('react');
const Layout = require('../Layout');

function Edituser(props) {
  const { oneUser } = props;
  return (
    <Layout {...props}>
      <div className="edit-user-container">
        <form className="editForm" name="editForm">
          <h3>Измените данные пользователя</h3>
          <div className="mb-3">
            <label className="form-label" htmlFor="controlInput1">
              Имя пользователя...
            </label>
            <input
              type="text"
              className="form-control"
              id="controlInput1"
              defaultValue={oneUser.user_name}
              aria-label="default input example"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="controlInput2">
              Aдрес электронной почты...
            </label>
            <input
              type="email"
              className="form-control"
              id="controlInput2"
              defaultValue={oneUser.email}
              aria-label="default input example"
              name="email"
              required
            />
          </div>
          <button id={oneUser.id} type="submit" className="btn btn-primary">
            Сохранить изменения
          </button>
        </form>
        <h5 className="msg" style={{ visibility: 'hidden', color: 'red' }} />
      </div>
      <script src="/js/edituserprofile.js" />
    </Layout>
  );
}

module.exports = Edituser;
