import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SelectUsers from './SelectUsers';
import SelectPosts from './SelectPosts';
import ViewComments from './ViewComments';

const usersAPI = 'https://jsonplaceholder.typicode.com/users/'; // id/posts
const postsAPI = 'https://jsonplaceholder.typicode.com/posts/'; // id/comments

export default function HookUsers() {

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [userSelected, setUserSelected] = useState(0);
  const [postSelected, setPostSelected] = useState(0);

  useEffect(() => {
    axios.get(usersAPI).then((response) => setUsers(response.data));
  }, [])

  useEffect(() => {
    axios.get(usersAPI+userSelected+'/posts').then((response) => setPosts(response.data));
    setPostSelected(0)
  }, [userSelected])

  useEffect(() => {
    axios.get(postsAPI+postSelected+'/comments').then((response) => setComments(response.data));
  }, [postSelected])

  const selectUser = (event) => {
    //console.log(event.target.value);
    setUserSelected(event.target.value);
  }

  const selectPost = (event) => {
    setPostSelected(event.target.value);
  }
  
  return (
    <>
        <h1>HookUsers</h1>
        {/* {users.map(ele => <p>{ele.name}</p>)} */}
        <SelectUsers users={users} selectUser={selectUser} />
        <SelectPosts posts={posts} selectPost={selectPost} />
        <ViewComments comments={comments} />
    </>
  )
}
