import React from "react";

export default function SelectPosts({posts, selectPost}) {
  return (
    <select name="posts" onChange={selectPost}>
      <option value={0}>----</option>
      {posts.map((ele) => (
        <option key={ele.id} value={ele.id}>
          {ele.title}
        </option>
      ))}
    </select>
  );
}