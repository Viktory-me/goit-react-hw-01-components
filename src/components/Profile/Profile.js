export default function Profile(props) {
    const { name, tag, location, followersQuantity, viewsQuantity, likesQuantity }= props;
    return (
    <div class="profile" >
      <div class="description">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
          alt="Аватар пользователя"
          class="avatar"
        />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>
    
      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followersQuantity}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{viewsQuantity}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likesQuantity}</span>
        </li>
      </ul>
    </div>
    );
  };