import React from 'react';
import T from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img className="avatar" src={avatar} alt="user avatar" />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
    <ul className="stats">
      <li>
        <span className="label" />
        <span className="quantity">{stats}</span>
      </li>
      <li>
        <span className="label" />
        <span className="quantity">{stats}</span>
      </li>
      <li>
        <span className="label" />
        <span className="quantity">{stats}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: T.string.isRequired,
  tag: T.string.isRequired,
  location: T.string.isRequired,
  avatar: T.string.isRequired,
  stats: T.number.isRequired,
};
export default Profile;
