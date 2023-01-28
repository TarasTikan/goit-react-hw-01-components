import { ContainerFriendList } from './Friend.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ContainerFriendList>
      {friends.map(friend => (
        <FriendListItem key={friend.id} data={friend} />
      ))}
    </ContainerFriendList>
  );
};
