import propTypes from 'prop-types';
import { FriendItem, Name, IsOnlaine } from './Friend.styled';

export const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
  return (
    <FriendItem>
      <IsOnlaine online={isOnline}></IsOnlaine>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};
FriendListItem.propTypes = {
  data: propTypes.shape({
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
  }).isRequired,
};
