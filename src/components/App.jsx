import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from "../user.json"
import data from "../data.json"
import ffff from "../friends.json"
console.log(ffff.avatar)
export const App = () => {
  return (
    <>
    <Profile username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}> 
    </Profile>
    <Statistics stats={data} />
    </>
  );
};
