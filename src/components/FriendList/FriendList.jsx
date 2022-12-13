import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendCard } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendCard>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendCard>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
