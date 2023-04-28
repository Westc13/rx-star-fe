import React from "react";

const User = () => {
  return (
    <div>
      <h1>User</h1>
      <form action="">
        <label htmlFor="age">Age</label>
        <input type="number" />
        <label htmlFor="gender">Gender</label>
        <input type="text" />
        <label htmlFor="conditions">Medical Conditions</label>
        <input type="text" />
        <label htmlFor="allergies">Allergies</label>
        <input type="text" />
      </form>
    </div>
  );
};

export default User;
