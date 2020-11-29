import PropTypes from 'prop-types';
import FriendList from './FriendList';

const FriendListItem = ({ items }) => {
  const { avatar, name, isOnline } = items;
  return (
        <li className="item" key={ FriendList.id }>
          <span className="status">{ isOnline }</span>
          <img className="avatar"
            src={ avatar }
            alt={ name }
            width="48"
          />
        <p className="name">{ name }</p>
      </li> 
  )
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string
}

export default FriendListItem;