import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ name }) => {
  return (
    <div>
      <h1>Hello, I&apos;m {name}!</h1>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Profile;
