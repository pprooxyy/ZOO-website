const React = require('react');
const Layout = require('./Layout');

function Home(props) {
  const { title } = props;
  return (
    <Layout {...props}>
      <div className="mainDiv">
        <h2>{title}</h2>
      </div>
    </Layout>
  );
}

module.exports = Home;

