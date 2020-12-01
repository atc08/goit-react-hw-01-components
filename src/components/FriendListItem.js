const FriendListItem = ({ items }) => {
  const { avatar, name, isOnline } = items;
  return (
        <li className="item" >
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

export default FriendListItem;