import Profile from './components/Profile/Profile';
import user from './data/user.json';

export default function App () {
    return <div>
         <Profile
avatar={user.avatar}
name={user.name}
tag={user.tag}
location={user.location}
followersQuantity={user.stats.followers}
viewsQuantity={user.stats.views}
likesQuantity={user.stats.likes}
/> 
</div>;
};