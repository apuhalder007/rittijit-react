import React, { useContext } from 'react';
import { UserContext } from "../../userContext";

const Profile = () => {
  const { userToken } = useContext(UserContext);

  if (!userToken) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {userToken}!</h1>
    </div>
  );
};

export default Profile;
