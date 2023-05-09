const React = require('react');
const Layout = require('../Layout');

function Login(props) {
  return (
    <Layout {...props}>
      <div className="login-container">
        <form className="logForm" name="logForm">
          <h3>Введите свои учетные данные для входа...</h3>
          <div className="mb-3">
            <label className="form-label" htmlFor="controlInput1">
              Укажите адрес электронной почты...
            </label>
            <input
              type="email"
              className="form-control"
              id="controlInput1"
              placeholder="name@example.com"
              aria-label="default input example"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="controlInput2">
              и обязательно введите пароль...
            </label>
            <input
              type="password"
              className="form-control"
              id="controlInput2"
              placeholder="password"
              aria-label="default input example"
              name="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Войти
          </button>
        </form>
        <h5 className="msg" style={{ visibility: 'hidden', color: 'red' }} />
      </div>
      <script src="/js/login.js" />
    </Layout>
  );
}

module.exports = Login;
