import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul class="friend__list">
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </ul>
  );
};

export default FriendList;
