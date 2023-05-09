const React = require('react');
const Layout = require('../Layout');

module.exports = function AnimalInfo(props) {
  const { animalInfo, animalPhotos } = props;
  return (
    <Layout {...props}>
      <div className="animal-info-container">
        <div className="info-title-container">
          <h1>{animalInfo.title}</h1>
          <div
            id={animalPhotos.map((el) => el.image_link)}
            className="animal-image-container"
            style={{
              backgroundImage: `url(${
                animalPhotos[Math.floor(Math.random() * animalPhotos.length)]
                  .image_link
              })`,
              height: 300 + 'px',
              width: 500 + 'px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              borderRadius: 20 + 'px',
              border: 7 + 'px solid gray',
            }}
          ></div>
          <div
            className={animalInfo.coordinates}
            id="map"
            style={{
              width: 600 + 'px',
              height: 500 + 'px',
              borderRadius: 35 + 'px',
            }}
          ></div>
        </div>
        <div className="paragraph-container">
          <p>{animalInfo.content}</p>
        </div>
      </div>
    </Layout>
  );
};
