const React = require("react");
const Layout = require("../Layout");
const Card = require("../components/Card");

function Animals(props) {
  const { animalsArr, id, user } = props;
  // console.log("animalsArr==>", animalsArr);
  return (
    <Layout {...props}>
      <div className="animals-container">
        {animalsArr.map((element) => (
          <Card key={`${element.id}`} el={element} id={id} user={user} />
        ))}
      </div>
      <script defer src="/js/animals.js" />
    </Layout>
  );
}

module.exports = Animals;
