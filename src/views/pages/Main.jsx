const React = require('react');
const Layout = require('../Layout');
const Navbar = require('../components/Navbar');

module.exports = function Main(props) {
  return (
    <Layout {...props}>
      <div className="main-page-wrapper">
        <div className="main-photo-wrapper">
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#eeeeee"
              fillOpacity="1"
              d="M0,96L34.3,117.3C68.6,139,137,181,206,218.7C274.3,256,343,288,411,282.7C480,277,549,235,617,229.3C685.7,224,754,256,823,234.7C891.4,213,960,139,1029,112C1097.1,85,1166,107,1234,128C1302.9,149,1371,171,1406,181.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
          <h1>Добро пожаловать в зоопарк!</h1>
          <h3>Здесь животные чувствуют себя как дома.</h3>
        </div>
      </div>
    </Layout>
  );
};
