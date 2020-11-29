import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem items={ friend } />
      ))}
      
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.array,
}

export default FriendList;