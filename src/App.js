import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';
import user from './data/user.json';

export default function App () {
    return <div>
        <Container>
         <Profile
avatar={user.avatar}
name={user.name}
tag={user.tag}
location={user.location}
followersQuantity={user.stats.followers}
viewsQuantity={user.stats.views}
likesQuantity={user.stats.likes}
/> 
<Statistics title="Upload stats" stats={statisticalData} />

</Container>
</div>;
};