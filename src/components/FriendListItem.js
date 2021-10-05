import React from 'react';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className="friend__list-item" key={id}>
      <span className={isOnline ? 'statusOnLine' : 'statusOffLine'}></span>
      <img className="friend__list-avatar" src={avatar} alt={name} width="48" />
      <p className="friend__list-name">{name}</p>
    </li>
  );
};

export default FriendListItem;
