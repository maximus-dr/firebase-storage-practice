import { app } from './base';
import React, { useEffect, useState } from 'react';

const db = app.firestore();


function App() {
  const [fileURL, setFileURL] = useState(null);
  const [users, setUsers] = useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);

    await fileRef.put(file);
    setFileURL(await fileRef.getDownloadURL());
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;

    if (!username) {
      return;
    }

    db.collection('users').doc(username).set({
      name: username,
      avatar: fileURL
    });
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection('users').get();
      setUsers(usersCollection.docs.map(doc => {
        return doc.data();
      }));
    }
    fetchUsers();
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <input type="text" name="username" placeholder="Name" />
        <button>Submit</button>
      </form>
      <ul>
        {users.map(user => {
          return (
            <li key={user.name}>
              <img src={user.avatar} alt={user.name} width="100" height="100" />
              <p>{user.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
