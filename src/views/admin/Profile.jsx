const React = require('react');
const Layout = require('../Layout');
const Usercard = require('./Usercard');

function Profile(props) {
  const { user, otherUser } = props;
  // console.log('🚀🚀 ~ file: Profile.jsx:7 ~ Profile ~ otherUser~', otherUser);
  return (
    <Layout {...props}>
      <div className="user-profile-container">
        <h5 className="msg" style={{ visibility: 'hidden', color: 'red' }} />
        <Usercard oneUser={user} deleteKey={false} />
        {otherUser?.map((el) => (
          <Usercard key={el.id} oneUser={el} deleteKey={true} />
        ))}
        <a
          id="add-user-button"
          href="/admin/newuser"
          type="submit"
          className="btn btn-outline-warning"
          style={{
            marginTop: '10px',
            width: 'fit-content',
          }}
        >
          Добавить пользователя
        </a>
      </div>
      <script src="/js/editprofile.js" />
    </Layout>
  );
}

module.exports = Profile;
