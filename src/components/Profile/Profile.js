import PropTypes from 'prop-types'; 
import defaultAvatar from '../../images/default-avatar.svg';
import s from './Profile.module.css';

export default function Profile(props) {
    const { name, tag, location, followersQuantity, viewsQuantity, likesQuantity, avatar }= props;
    return (
    <div className={s.profile} >
      <div className={s.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={s.avatar}
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
    
      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followersQuantity}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{viewsQuantity}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likesQuantity}</span>
        </li>
      </ul>
    </div>
    );
  };
  
  Profile.defaultProps = {
    avatar: defaultAvatar,
  };

  Profile.propTypes = {
name: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
location: PropTypes.string.isRequired,
followersQuantity: PropTypes.number.isRequired,
viewsQuantity: PropTypes.number.isRequired, 
likesQuantity: PropTypes.number.isRequired, 
avatar: PropTypes.string,
  };
