import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from '../../images/default-avatar.svg';
import s from './FriendList.css';

export default function FriendList(props){
    const { friends } = props;
    return (
    <ul>
        {friends.map(
            ({avatar=defaultAvatar, name, isOnline, id}) =>
            <li key={id}>
        <span className={isOnline ? s.online : s.offline}></span>
        <img  src={avatar} alt="" width="48" />
        <p>{name}</p>
        </li> 
        )
        }
     </ul>
    );
};

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };