import React from "react";
import PropTypes from 'prop-types';

const Profile = ({
    avatar,
    name,
    tag,
    location,
    followers,
    views,
    likes}
) => {

return (
        <div classNanme="profile">
  <div classNanme="description">
    <img
      src={avatar}
      alt="User avatar"
      classNanme="avatar"
    />
    <p classNanme="name">{name}</p>
    <p classNanme="tag">{tag}</p>
    <p classNanme="location">{location}</p>
  </div>
  <ul classNanme="stats">
    <li>
      <span classNanme="label">Followers</span>
      <span classNanme="quantity">{followers}</span>
    </li>
    <li>
      <span classNanme="label">Views</span>
      <span classNanme="quantity">{views}</span>
    </li>
    <li>
      <span classNanme="label">Likes</span>
      <span classNanme="quantity">{likes}</span>
    </li>
  </ul>
</div>
)
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

