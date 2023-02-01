import React from "react";

export default function SelectUsers({users, selectUser}) {
  return (
    <select name="users" onChange={selectUser}>
      <option value={0}>----</option>
      {users.map((ele) => (
        <option key={ele.id} value={ele.id}>
          {ele.name}
        </option>
      ))}
    </select>
  );
}
