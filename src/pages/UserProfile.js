
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const {id} = useParams();
  const users = useOutletContext();

  console.log(users);
  console.log(id);

  const user = users.find(user => user.id === id);
  console.log(user);
  
  if(!user){
    return <h1>Loading...</h1>;
  };

  return(  
      <aside>
        <h1>{user.name}</h1>
      </aside>
  );
};

export default UserProfile;