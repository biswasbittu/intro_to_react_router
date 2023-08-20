import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
    const fdetails=useLoaderData();
    const{name,email,phone,website}=fdetails;

    console.log(fdetails)

    return (
        <div>
            <h3>Everything about this person is here..........</h3>
            <h4>Name:{name}</h4>
            <h5>Email:{email}</h5>
            <h5>Phone:{phone}</h5>
            <h5>website:{website}</h5>
        </div>
    );
};

export default FriendDetails;