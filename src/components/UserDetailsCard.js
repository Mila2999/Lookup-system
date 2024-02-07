import { Link } from 'react-router-dom';

function UserDetails({ user }) {
  if (!user) {
    return null;
  }

  const renderUserInfo = () => {
    return Object.keys(user).map((u) => (
      <p key={u}>
        {u.charAt(0).toUpperCase() + u.slice(1)}: {user[u]}
      </p>
    ));

    // const userInfoKeys = Object.keys(user);
    // const userInfo = [];

    // userInfoKeys.forEach((key) => {
    //   userInfo.push(
    //     <p key={key}>
    //       {key.charAt(0).toUpperCase() + key.slice(1)}: {user[key]}
    //     </p>
    //   );
    // });

    // return userInfo;
  };

  const renderAddressInfo = () => {
    const addressKeys = Object.keys(user.address);
    const addressInfo = [];

    addressKeys.forEach((key) => {
      addressInfo.push(
        <p key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}: {user.address[key]}
        </p>
      );
    });

    return addressInfo;
  };

  const renderCompanyInfo = () => {
    const companyKeys = Object.keys(user.company);
    const companyInfo = [];

    companyKeys.forEach((key) => {
      companyInfo.push(
        <p key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}: {user.company[key]}
        </p>
      );
    });

    return companyInfo;
  };

  return (
    <div>
      <div>
        <h1>{user.name}</h1>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <div>
        <h2>User Info</h2>
        {renderUserInfo()}
      </div>
      <div>
        <h2>Address</h2>
        {renderAddressInfo()}
      </div>
      <div>
        <h2>Company</h2>
        {renderCompanyInfo()}
      </div>
    </div>
  );
}

export default UserDetails;
