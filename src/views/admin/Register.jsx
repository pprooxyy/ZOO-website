const React = require('react');
const Layout = require('../Layout');

function Registration(props) {
  return (
    <Layout {...props}>
      <div className="registration-container">
        <form className="regForm" name="regForm">
          <h3>Добро пожаловать на страницу регистрации!</h3>
          <div className="mb-3">
            <label className="form-label" htmlFor="controlInput1">
              Укажите своё Имя...
            </label>
            <input
              type="text"
              className="form-control"
              id="controlInput1"
              placeholder="Моё имя..."
              aria-label="default input example"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="controlInput2">
              Укажите адрес электронной почты...
            </label>
            <input
              type="email"
              className="form-control"
              id="controlInput2"
              placeholder="name@example.com"
              aria-label="default input example"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="controlInput3">
              и обязательно введите пароль...
            </label>
            <input
              type="password"
              className="form-control"
              id="controlInput3"
              placeholder="password"
              aria-label="default input example"
              name="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Зарегистрировать нового пользователя
          </button>
        </form>
        <h5 className="msg" style={{ visibility: 'hidden', color: 'red' }} />
      </div>
      <script src="/js/newuser.js" />
    </Layout>
  );
}

module.exports = Registration;
