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
    avatar: PropTypes.string,
    name: PropTypes.number,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  };


export default Profile;

