import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from '../../images/default-avatar.svg';
import s from './FriendList.module.css';

export default function FriendList(props){
    const { friends } = props;
    return (
        <section className={s.friends}>
            <h2 className={s.title}>Friends</h2>
    <ul className={s.friendsList}>
        {friends.map(
            ({avatar=defaultAvatar, name, isOnline, id}) =>
            <li className={s.item} key={id}>
        <span className={isOnline ? s.online : s.offline}></span>
        <img  src={avatar} alt="" width="48" />
        <p className={s.name}>{name}</p>
        </li> 
        )
        }
     </ul>
     </section>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
  };
  