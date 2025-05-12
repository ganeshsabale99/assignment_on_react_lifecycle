import { useRef } from "react";

const UserProfileCard = ({ user }) => {
  const emailRef = useRef();

  const handleCopy = () => {
    emailRef.current.select();
    document.execCommand("copy");
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p><strong>Company:</strong> <span>{user.company.name}</span></p>
      <p><strong>Email:</strong> <input ref={emailRef} value={user.email} readOnly /> <button onClick={handleCopy}>Copy Email</button></p>
    </div>
  );
};

export default UserProfileCard;
