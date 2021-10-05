import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => {
  return (
    <div className="profile__card">
      <div className="profile__description">
        <img src={avatar} alt="User avatar" className="profile__avatar" />
        <p className="profile__name">{name}</p>
        <p className="profile__tag">{tag}</p>
        <p className="profile__location">{location}</p>
      </div>
      <ul className="profile__stats_list">
        <li className="profile__stats_item">
          <span className="profile__stats_label">Followers</span>
          <span className="profile__stats_quantity">{followers}</span>
        </li>
        <li className="profile__stats_item">
          <span className="profile__stats_label">Views</span>
          <span className="profile__stats_quantity">{views}</span>
        </li>
        <li className="profile__stats_item">
          <span className="profile__stats_label">Likes</span>
          <span className="profile__stats_quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
