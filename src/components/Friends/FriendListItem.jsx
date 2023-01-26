import propTypes from 'prop-types';
import { FriendItem, Name,IsOnlaine } from "./Friend.styled"

export const FriendListItem = (({data: {avatar, name, isOnline, id}}) => {
    return <FriendItem key={id}>
    <IsOnlaine type={isOnline.toString()}></IsOnlaine>
    <img src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </FriendItem>
})
FriendListItem.propTypes = {
    data: propTypes.exact({
        avatar: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        id: propTypes.number.isRequired,
        isOnline: propTypes.bool.isRequired,
      }).isRequired
}
