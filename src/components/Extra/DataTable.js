// import React, { useState, useEffect } from "react";

// function Datatable() {
//   const [users, setUsers] = useState([]);

//   // Fetch users data from the server
//   useEffect(() => {
//     fetch("http://localhost:5001/api/users", {
//       method: "GET",
//       credentials: "include",  // Include cookies (for JWT)
//     })
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   return (
//     <div>
//       <h1>User Data Table</h1>
//       <table border="1" style={{ width: "100%", textAlign: "left", padding: "8px" }}>
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length === 0 ? (
//             <tr>
//               <td colSpan="2" style={{ textAlign: "center" }}>No users found</td>
//             </tr>
//           ) : (
//             users.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.username}</td>
//                 <td>{user.email}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Datatable;




// import React, { useState, useEffect } from "react";

// function Datatable() {
//   const [users, setUsers] = useState([]);
//   const [editing, setEditing] = useState(null); // To track which user is being edited
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Fetch users data from the server
//   useEffect(() => {
//     fetch("http://localhost:5001/api/users", {
//       method: "GET",
//       credentials: "include",  // Include cookies (for JWT)
//     })
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   // Delete user
//   const handleDelete = (userId) => {
//     fetch(`http://localhost:5001/api/users/${userId}`, {
//       method: "DELETE",
//       credentials: "include",
//     })
//       .then((response) => {
//         if (response.ok) {
//           setUsers(users.filter((user) => user._id !== userId)); // Remove deleted user from the list
//         } else {
//           alert("Error deleting user");
//         }
//       })
//       .catch((error) => console.error("Error deleting user:", error));
//   };

//   // Start editing user
//   const handleEdit = (user) => {
//     setEditing(user._id);
//     setUsername(user.username);
//     setEmail(user.email);
//     setPassword(user.password);
//   };

//   // Update user
//   const handleUpdate = (userId) => {
//     fetch(`http://localhost:5001/api/users/${userId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify({ username, email , password}),
//     })
//       .then((response) => response.json())
//       .then((updatedUser) => {
//         setUsers(
//           users.map((user) =>
//             user._id === updatedUser._id ? updatedUser : user
//           )
//         );
//         setEditing(null);
//         setUsername("");
//         setEmail("");
//         setPassword("");
//       })
//       .catch((error) => console.error("Error updating user:", error));
//   };

//   return (
//     <div>
//       <h1>User Data Table</h1>
//       <table border="1" style={{ width: "100%", textAlign: "left", padding: "8px" }}>
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>password</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length === 0 ? (
//             <tr>
//               <td colSpan="3" style={{ textAlign: "center" }}>No users found</td>
//             </tr>
//           ) : (
//             users.map((user) => (
//               <tr key={user._id}>
//                 <td>
//                   {editing === user._id ? (
//                     <input
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                   ) : (
//                     user.username
//                   )}
//                 </td>
//                 <td>
//                   {editing === user._id ? (
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   ) : (
//                     user.email
//                   )}
//                 </td>
//                 <td>
//                   {editing === user._id ? (
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   ) : (
//                     user.password
//                   )}
//                 </td>
//                 <td>
//                   {editing === user._id ? (
//                     <button onClick={() => handleUpdate(user._id)}>Save</button>
//                   ) : (
//                     <>
//                       <button onClick={() => handleEdit(user)}>Edit</button>
//                       <button onClick={() => handleDelete(user._id)}>Delete</button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Datatable;





import React, { useState, useEffect } from "react";
import './DataTable.css';

function Datatable() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(null); // To track which user is being edited
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // State to track the password when editing

  // Fetch users data from the server
  useEffect(() => {
    fetch("http://localhost:5001/api/users", {
      method: "GET",
      credentials: "include",  // Include cookies (for JWT)
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Delete user
  const handleDelete = (userId) => {
    fetch(`http://localhost:5001/api/users/${userId}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          setUsers(users.filter((user) => user._id !== userId)); // Remove deleted user from the list
        } else {
          alert("Error deleting user");
        }
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  // Start editing user
  const handleEdit = (user) => {
    setEditing(user._id);
    setUsername(user.username);
    setEmail(user.email);
    setPassword(user.password); // Set the password when editing
  };

  // Update user
  const handleUpdate = (userId) => {
    fetch(`http://localhost:5001/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, email, password }), // Include password in update
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        setUsers(
          users.map((user) =>
            user._id === updatedUser._id ? updatedUser : user
          )
        );
        setEditing(null);
        setUsername("");
        setEmail("");
        setPassword(""); // Reset the password field
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div>
      <h1>User Details</h1>
      <table border="1" style={{ width: "100%", textAlign: "left", padding: "8px" }}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>No users found</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user._id}>
                <td>
                  {editing === user._id ? (
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  ) : (
                    user.username
                  )}
                </td>
                <td>
                  {editing === user._id ? (
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editing === user._id ? (
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  ) : (
                    // Mask the password when not in edit mode
                    "********"
                  )}
                </td>
                <td>
                  {editing === user._id ? (
                    <button onClick={() => handleUpdate(user._id)}>Save</button>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(user)}>Edit</button>
                      <button onClick={() => handleDelete(user._id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Datatable;
