import "./Friend.css"
const Friend = ({ friend }) => {
  console.log(friend);
  const { email, id , name, phone  } = friend;

  return <div className="friend">
    <h3>{name}</h3>
    <p>Email:{email}</p>
    <p>Phone:{phone}</p>
  </div>;
};

export default Friend;
