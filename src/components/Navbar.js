// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import Pic from "../images/home.png";
// // // // import backgroundimage from "../images/greenleaves.jpg";
// // // // import backgroundimage from "../images/background.svg";

// // // function Navbar() {
// // //   // window.location.reload();
// // //   const navigate = useNavigate();
// // //   const [isOnLoginPage, setIsOnLoginPage] = useState(false);
// // //   const [isOnSignUpPage, setIsOnSignUpPage] = useState(false);

// // //   // Home button handler
// // //   const handleToHomepage = () => {
// // //     setIsOnLoginPage(false);
// // //     setIsOnSignUpPage(false);
// // //     navigate('/');
// // //   };

// // //   // Login button handler
// // //   const handleToLoginPage = () => {
// // //     setIsOnLoginPage(true);
// // //     setIsOnSignUpPage(false);
// // //     navigate('/login');
// // //   };

// // //   // Sign Up button handler
// // //   const handleToSignUpPage = () => {
// // //     setIsOnSignUpPage(true);
// // //     setIsOnLoginPage(false);
// // //     navigate('/signin');
// // //   };

// // //   // Sync state with sessionStorage
// // //   useEffect(() => {
// // //     const savedAtLoginPage = sessionStorage.getItem('isOnLoginPage');
// // //     const savedOnSignUpPage = sessionStorage.getItem('isOnSignUpPage');
// // //     if (savedAtLoginPage === 'true') setIsOnLoginPage(true);
// // //     if (savedOnSignUpPage === 'true') setIsOnSignUpPage(true);
// // //   }, []);

// // //   useEffect(() => {
// // //     sessionStorage.setItem('isOnLoginPage', isOnLoginPage);
// // //     sessionStorage.setItem('isOnSignUpPage', isOnSignUpPage); 
// // //   }, [isOnLoginPage, isOnSignUpPage]);

// // //   useEffect(() => {
// // //     const login_indication = sessionStorage.getItem('loginsuccess');
// // //   },[]);
// // //   const handlelogout = () => {
// // //     sessionStorage.setItem('loginsuccess', 'false');
// // //     sessionStorage.setItem('isOnSignUpPage', 'false');
// // //     sessionStorage.setItem('isOnLoginPage', 'false');
// // //     navigate('/');
// // //   }

// // //   return (
// // //     <nav
// // //       style={{
// // //         display: 'flex',
// // //         justifyContent: 'space-between',
// // //         alignItems: 'center',
// // //         padding: '10px 20px',
// // //         borderBottom: '1px solid #ddd',
// // //         // backgroundImage: `url(${backgroundimage})`,
// // //         backgroundSize: 'cover',
// // //         backgroundPosition: 'center',
// // //         height: '60px',
// // //         width: '100%',
// // //         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
// // //       }}
// // //     >
// // //       <div style={{ display: 'flex', alignItems: 'center' }}>
// // //         <button
// // //           className="btn btn-dark p-1"
// // //           onClick={handleToHomepage}
// // //           style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
// // //         >
// // //           <img src={Pic} alt="Home" style={{ width: '35px', borderRadius: '50%' }} />
// // //         </button>
// // //         <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center' }}>
// // //           <li style={{ marginRight: '15px' }}>
// // //             <button className="btn btn-dark" onClick={() => navigate('/about')}>About</button>
// // //           </li>
// // //           <li style={{ marginRight: '15px' }}>
// // //             <button className="btn btn-dark" onClick={() => navigate('/contact')}>Contact</button>
// // //           </li>
// // //         </ul>
// // //       </div>
// // //       <div style={{ display: 'flex', alignItems: 'center' }}>
// // //         {!isOnLoginPage && (
// // //           <button className="btn btn-dark" onClick={handleToLoginPage}>Log In</button>
// // //         )}
// // //         {!isOnSignUpPage && (
// // //           <button className="btn btn-dark" onClick={handleToSignUpPage}>Sign Up</button>
// // //         )}
// // //         {!login_indication && (
// // //           <button className="btn btn-dark" onClick={handlelogout}>Log out</button>
// // //         )}
// // //       </div>
// // //     </nav>
// // //   );
// // // }

// // // export default Navbar;






// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import Pic from "../images/home.png";

// // function Navbar() {
// //   const navigate = useNavigate();
// //   const [isOnLoginPage, setIsOnLoginPage] = useState(false);
// //   const [isOnSignUpPage, setIsOnSignUpPage] = useState(false);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   // Home button handler
// //   const handleToHomepage = () => {
// //     setIsOnLoginPage(false);
// //     setIsOnSignUpPage(false);
// //     navigate('/');
// //   };

// //   // Login button handler
// //   const handleToLoginPage = () => {
// //     setIsOnLoginPage(true);
// //     setIsOnSignUpPage(false);
// //     navigate('/login');
// //   };

// //   // Sign Up button handler
// //   const handleToSignUpPage = () => {
// //     setIsOnSignUpPage(true);
// //     setIsOnLoginPage(false);
// //     navigate('/signin');
// //   };

// //   // Sync state with sessionStorage
// //   useEffect(() => {
// //     const savedAtLoginPage = sessionStorage.getItem('isOnLoginPage') === 'true';
// //     const savedOnSignUpPage = sessionStorage.getItem('isOnSignUpPage') === 'true';
// //     const loginIndication = sessionStorage.getItem('loginsuccess') === 'true';

// //     setIsOnLoginPage(savedAtLoginPage);
// //     setIsOnSignUpPage(savedOnSignUpPage);
// //     setIsLoggedIn(loginIndication);
// //   }, []);

// //   useEffect(() => {
// //     sessionStorage.setItem('isOnLoginPage', isOnLoginPage);
// //     sessionStorage.setItem('isOnSignUpPage', isOnSignUpPage);
// //   }, [isOnLoginPage, isOnSignUpPage]);

// //   const handleLogout = () => {
// //     sessionStorage.setItem('loginsuccess', 'false');
// //     sessionStorage.setItem('isOnSignUpPage', 'false');
// //     sessionStorage.setItem('isOnLoginPage', 'false');
// //     setIsLoggedIn(false); // Update local state
// //     navigate('/');
// //   };

// //   return (
// //     <nav
// //       style={{
// //         display: 'flex',
// //         justifyContent: 'space-between',
// //         alignItems: 'center',
// //         padding: '10px 20px',
// //         borderBottom: '1px solid #ddd',
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         height: '60px',
// //         width: '100%',
// //         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
// //       }}
// //     >
// //       <div style={{ display: 'flex', alignItems: 'center' }}>
// //         <button
// //           className="btn btn-dark p-1"
// //           onClick={handleToHomepage}
// //           style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
// //         >
// //           <img src={Pic} alt="Home" style={{ width: '35px', borderRadius: '50%' }} />
// //         </button>
// //         <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center' }}>
// //           <li style={{ marginRight: '15px' }}>
// //             <button className="btn btn-dark" onClick={() => navigate('/about')}>About</button>
// //           </li>
// //           <li style={{ marginRight: '15px' }}>
// //             <button className="btn btn-dark" onClick={() => navigate('/contact')}>Contact</button>
// //           </li>
// //         </ul>
// //       </div>
// //       <div style={{ display: 'flex', alignItems: 'center' }}>
// //         {!isOnLoginPage && !isLoggedIn && (
// //           <button className="btn btn-dark" onClick={handleToLoginPage}>Log In</button>
// //         )}
// //         {!isOnSignUpPage && !isLoggedIn && (
// //           <button className="btn btn-dark" onClick={handleToSignUpPage}>Sign Up</button>
// //         )}
// //         {isLoggedIn && (
// //           <button className="btn btn-dark" onClick={handleLogout}>Log out</button>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;






// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Pic from "../images/home.png";

// function Navbar() {
//   const navigate = useNavigate();
//   const [isOnLoginPage, setIsOnLoginPage] = useState(false);
//   const [isOnSignUpPage, setIsOnSignUpPage] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check session storage and set state
//   useEffect(() => {
//     const savedAtLoginPage = sessionStorage.getItem('isOnLoginPage') === 'true';
//     const savedOnSignUpPage = sessionStorage.getItem('isOnSignUpPage') === 'true';
//     const loginIndication = sessionStorage.getItem('loginsuccess') === 'true';

//     setIsOnLoginPage(savedAtLoginPage);
//     setIsOnSignUpPage(savedOnSignUpPage);
//     setIsLoggedIn(loginIndication);
//   }, []);

//   // Update session storage based on state
//   useEffect(() => {
//     sessionStorage.setItem('isOnLoginPage', isOnLoginPage);
//     sessionStorage.setItem('isOnSignUpPage', isOnSignUpPage);
//   }, [isOnLoginPage, isOnSignUpPage]);

//   // Handle logout
//   const handleLogout = () => {
//     sessionStorage.setItem('loginsuccess', 'false');
//     sessionStorage.setItem('isOnSignUpPage', 'false');
//     sessionStorage.setItem('isOnLoginPage', 'false');
//     setIsLoggedIn(false); // Update local state
//     navigate('/');
//   };

//   return (
//     <nav
//       style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '10px 20px',
//         borderBottom: '1px solid #ddd',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '60px',
//         width: '100%',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//       }}
//     >
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <button
//           className="btn btn-dark p-1"
//           onClick={() => navigate('/')}
//           style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
//         >
//           <img src={Pic} alt="Home" style={{ width: '35px', borderRadius: '50%' }} />
//         </button>
//         <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center' }}>
//           <li style={{ marginRight: '15px' }}>
//             <button className="btn btn-dark" onClick={() => navigate('/about')}>About</button>
//           </li>
//           <li style={{ marginRight: '15px' }}>
//             <button className="btn btn-dark" onClick={() => navigate('/contact')}>Contact</button>
//           </li>
//         </ul>
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         {!isOnLoginPage && !isLoggedIn && (
//           <button className="btn btn-dark" onClick={() => navigate('/login')}>Log In</button>
//         )}
//         {!isOnSignUpPage && !isLoggedIn && (
//           <button className="btn btn-dark" onClick={() => navigate('/signin')}>Sign Up</button>
//         )}
//         {isLoggedIn && (
//           <button className="btn btn-dark" onClick={handleLogout}>Log out</button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Pic from "../images/home.png";

// function Navbar() {
//   const navigate = useNavigate();
//   const [isOnLoginPage, setIsOnLoginPage] = useState(false);
//   const [isOnSignUpPage, setIsOnSignUpPage] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check session storage and set state
//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const savedAtLoginPage = sessionStorage.getItem('isOnLoginPage') === 'true';
//       const savedOnSignUpPage = sessionStorage.getItem('isOnSignUpPage') === 'true';
//       const loginIndication = sessionStorage.getItem('loginsuccess') === 'true';

//       setIsOnLoginPage(savedAtLoginPage);
//       setIsOnSignUpPage(savedOnSignUpPage);
//       setIsLoggedIn(loginIndication);
//     };

//     checkLoginStatus(); // Initial check
//     window.addEventListener('storage', checkLoginStatus); // React to sessionStorage changes

//     return () => window.removeEventListener('storage', checkLoginStatus); // Cleanup listener
//   }, []);

//   // Update session storage based on state
//   useEffect(() => {
//     sessionStorage.setItem('isOnLoginPage', isOnLoginPage);
//     sessionStorage.setItem('isOnSignUpPage', isOnSignUpPage);
//   }, [isOnLoginPage, isOnSignUpPage]);

//   const handleLogout = () => {
//     sessionStorage.setItem('loginsuccess', 'false');
//     sessionStorage.setItem('isOnSignUpPage', 'false');
//     sessionStorage.setItem('isOnLoginPage', 'false');
//     setIsLoggedIn(false); // Update local state
//     navigate('/');
//   };

//   return (
//     <nav
//       style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '10px 20px',
//         borderBottom: '1px solid #ddd',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '60px',
//         width: '100%',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//       }}
//     >
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <button
//           className="btn btn-dark p-1"
//           onClick={() => navigate('/')}
//           style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
//         >
//           <img src={Pic} alt="Home" style={{ width: '35px', borderRadius: '50%' }} />
//         </button>
//         <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center' }}>
//           {/* <li style={{ marginRight: '15px' }}>
//             <button className="btn btn-dark" onClick={() => navigate('/about')}>About</button>
//           </li> */}
//           {/* <li style={{ marginRight: '15px' }}>
//             <button className="btn btn-dark" onClick={() => navigate('/contact')}>Contact</button>
//           </li> */}
//         </ul>
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         {!isOnLoginPage && !isLoggedIn && (
//           <button className="btn btn-dark" onClick={() => navigate('/login')}>Log In</button>
//         )}
//         {!isOnSignUpPage && !isLoggedIn && (
//           <button className="btn btn-dark" onClick={() => navigate('/signin')}>Sign Up</button>
//         )}
//         {isLoggedIn && (
//           <button className="btn btn-dark" onClick={handleLogout}>Log out</button>
//         )}
//         <button className="btn btn-danger" onClick={() => navigate('/AdminUpload')}>AdminUpload</button>
//         <button className="btn btn-danger" onClick={() => navigate('/Datatable')}>Datatable</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Pic from "../images/home.png";

// function Navbar() {
//   const navigate = useNavigate();
//   const [isOnLoginPage, setIsOnLoginPage] = useState(false);
//   const [isOnSignUpPage, setIsOnSignUpPage] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

//   // Check session storage and set state
//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const savedAtLoginPage = sessionStorage.getItem('isOnLoginPage') === 'true';
//       const savedOnSignUpPage = sessionStorage.getItem('isOnSignUpPage') === 'true';
//       const loginIndication = sessionStorage.getItem('loginsuccess') === 'true';

//       setIsOnLoginPage(savedAtLoginPage);
//       setIsOnSignUpPage(savedOnSignUpPage);
//       setIsLoggedIn(loginIndication);
//     };

//     checkLoginStatus(); // Initial check
//     window.addEventListener('storage', checkLoginStatus); // React to sessionStorage changes

//     return () => window.removeEventListener('storage', checkLoginStatus); // Cleanup listener
//   }, []);

//   // Update session storage based on state
//   useEffect(() => {
//     sessionStorage.setItem('isOnLoginPage', isOnLoginPage);
//     sessionStorage.setItem('isOnSignUpPage', isOnSignUpPage);
//   }, [isOnLoginPage, isOnSignUpPage]);

//   const handleLogout = () => {
//     sessionStorage.setItem('loginsuccess', 'false');
//     sessionStorage.setItem('isOnSignUpPage', 'false');
//     sessionStorage.setItem('isOnLoginPage', 'false');
//     setIsLoggedIn(false); // Update local state
//     navigate('/');
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); // Toggle menu open/close
//   };

//   return (
//     <nav
//       style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '10px 20px',
//         borderBottom: '1px solid #ddd',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '60px',
//         width: '100%',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//       }}
//     >
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <button
//           className="btn btn-dark p-1"
//           onClick={() => navigate('/')}
//           style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
//         >
//           <img src={Pic} alt="Home" style={{ width: '35px', borderRadius: '50%' }} />
//         </button>
//         <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center' }}>
//           {/* You can add more links here */}
//         </ul>
//       </div>

//       {/* Main right side buttons */}
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         {!isOnLoginPage && !isLoggedIn && (
//           <button className="btn btn-dark" onClick={() => navigate('/login')}>Log In</button>
//         )}
//         {!isOnSignUpPage && !isLoggedIn && (
//           <button className="btn btn-dark" onClick={() => navigate('/signin')}>Sign Up</button>
//         )}
//         {isLoggedIn && (
//           <button className="btn btn-dark" onClick={handleLogout}>Log out</button>
//         )}

//         {/* Hamburger Icon */}
//         <button
//           onClick={toggleMenu}
//           style={{
//             backgroundColor: 'transparent',
//             border: 'none',
//             cursor: 'pointer',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-around',
//             alignItems: 'center',
//             width: '30px',
//             height: '30px',
//           }}
//         >
//           <div style={{ width: '20px', height: '2px', backgroundColor: '#000' }}></div>
//           <div style={{ width: '20px', height: '2px', backgroundColor: '#000' }}></div>
//           <div style={{ width: '20px', height: '2px', backgroundColor: '#000' }}></div>
//         </button>
//       </div>

//       {/* Menu - Show or Hide based on `menuOpen` state */}
//       {menuOpen && (
//         <div
//           style={{
//             position: 'absolute',
//             top: '60px', // Position below the navbar
//             right: '0',
//             backgroundColor: '#fff',
//             border: '1px solid #ddd',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//             zIndex: '1000',
//             width: '200px',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             padding: '10px',
//           }}
//         >
//           <button className="btn btn-danger" onClick={() => navigate('/AdminUpload')} style={{ width: '100%' }}>
//             AdminUpload
//           </button>
//           <button className="btn btn-danger" onClick={() => navigate('/Datatable')} style={{ width: '100%' }}>
//             Datatable
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Pic from "../images/home.png";
// import './Navbar.css'; // Adjust the path as needed


// function Navbar() {
//   const navigate = useNavigate();
//   const [isOnLoginPage, setIsOnLoginPage] = useState(false);
//   const [isOnSignUpPage, setIsOnSignUpPage] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

//   // Check session storage and set state
//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const savedAtLoginPage = sessionStorage.getItem('isOnLoginPage') === 'true';
//       const savedOnSignUpPage = sessionStorage.getItem('isOnSignUpPage') === 'true';
//       const loginIndication = sessionStorage.getItem('loginsuccess') === 'true';

//       setIsOnLoginPage(savedAtLoginPage);
//       setIsOnSignUpPage(savedOnSignUpPage);
//       setIsLoggedIn(loginIndication);
//     };

//     checkLoginStatus(); // Initial check
//     window.addEventListener('storage', checkLoginStatus); // React to sessionStorage changes

//     return () => window.removeEventListener('storage', checkLoginStatus); // Cleanup listener
//   }, []);

//   // Update session storage based on state
//   useEffect(() => {
//     sessionStorage.setItem('isOnLoginPage', isOnLoginPage);
//     sessionStorage.setItem('isOnSignUpPage', isOnSignUpPage);
//   }, [isOnLoginPage, isOnSignUpPage]);

//   const handleLogout = () => {
//     sessionStorage.setItem('loginsuccess', 'false');
//     sessionStorage.setItem('isOnSignUpPage', 'false');
//     sessionStorage.setItem('isOnLoginPage', 'false');
//     setIsLoggedIn(false); // Update local state
//     navigate('/');
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); // Toggle menu open/close
//   };

//   return (
//     <nav
//       style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '10px 20px',
//         borderBottom: '1px solid #ddd',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '60px',
//         width: '100%',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//       }}
//     >
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <button
//           className="btn btn-dark p-1"
//           onClick={() => navigate('/')}
//           style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
//         >
//           <img src={Pic} alt="Home" style={{ width: '35px', borderRadius: '50%' }} />
//         </button>
//         <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center' }}>
//           {/* You can add more links here */}
//         </ul>
//       </div>

//       {/* Main right side buttons */}
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         {!isOnLoginPage && !isLoggedIn && (
//           <button className="btn btn-dark" onClick={() => navigate('/login')}>Log In</button>
//         )}
//         {!isOnSignUpPage && !isLoggedIn && (
//           <button className="btn btn-dark" onClick={() => navigate('/signin')}>Sign Up</button>
//         )}
//         {isLoggedIn && (
//           <button className="btn btn-dark" onClick={handleLogout}>Log out</button>
//         )}

//         {/* Hamburger Icon */}
//         <button
//           onClick={toggleMenu}
//           style={{
//             backgroundColor: 'transparent',
//             border: 'none',
//             cursor: 'pointer',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-around',
//             alignItems: 'center',
//             width: '30px',
//             height: '30px',
//           }}
//           >
//           <div style={{ width: '20px', height: '2px', backgroundColor: '#000' }}></div>
//           <div style={{ width: '20px', height: '2px', backgroundColor: '#000' }}></div>
//           <div style={{ width: '20px', height: '2px', backgroundColor: '#000' }}></div>
//         </button>
//       </div>

//       {/* Menu - Show or Hide based on `menuOpen` state with Animation */}
//       {menuOpen && (
//         <div
//         style={{
//           position: 'absolute',
//           top: '60px', // Position below the navbar
//           right: '0',
//           backgroundColor: '#fff',
//           border: '1px solid #ddd',
//           boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//           zIndex: '1000',
//           width: '200px',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//           padding: '10px',
//           animation: 'slideIn 0.3s ease-out', // Animation for sliding in
//         }}
//         >
//           {!isOnLoginPage && !isLoggedIn && (
//             <button className="btn btn-dark" onClick={() => navigate('/login')}>Log In</button>
//           )}
//           {!isOnSignUpPage && !isLoggedIn && (
//             <button className="btn btn-dark" onClick={() => navigate('/signin')}>Sign Up</button>
//           )}
//           {isLoggedIn && (
//             <button className="btn btn-dark" onClick={handleLogout}>Log out</button>
//           )}
//           <button className="btn btn-danger" onClick={() => navigate('/AdminUpload')} style={{ width: '100%' }}>
//             AdminUpload
//           </button>
//           <button className="btn btn-danger" onClick={() => navigate('/Datatable')} style={{ width: '100%' }}>
//             Datatable
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;





import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pic from "../images/home.png";
import './Navbar.css'; // Adjust the path as needed

function Navbar() {
  const navigate = useNavigate();
  const [isOnLoginPage, setIsOnLoginPage] = useState(false);
  const [isOnSignUpPage, setIsOnSignUpPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Get the username from sessionStorage or localStorage when the component mounts
    const storedUsername = sessionStorage.getItem('name') || localStorage.getItem('name');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      setError('User is not authenticated. Please log in again.');
    }
  }, []);
  // Check session storage and set state
  useEffect(() => {
    const checkLoginStatus = () => {
      const savedAtLoginPage = sessionStorage.getItem('isOnLoginPage') === 'true';
      const savedOnSignUpPage = sessionStorage.getItem('isOnSignUpPage') === 'true';
      const loginIndication = sessionStorage.getItem('loginsuccess') === 'true';

      setIsOnLoginPage(savedAtLoginPage);
      setIsOnSignUpPage(savedOnSignUpPage);
      setIsLoggedIn(loginIndication);
    };

    checkLoginStatus(); // Initial check
    window.addEventListener('storage', checkLoginStatus); // React to sessionStorage changes

    return () => window.removeEventListener('storage', checkLoginStatus); // Cleanup listener
  }, []);

  // Update session storage based on state
  useEffect(() => {
    sessionStorage.setItem('isOnLoginPage', isOnLoginPage);
    sessionStorage.setItem('isOnSignUpPage', isOnSignUpPage);
  }, [isOnLoginPage, isOnSignUpPage]);

  const handleLogout = () => {
    sessionStorage.setItem('loginsuccess', 'false');
    sessionStorage.setItem('isOnSignUpPage', 'false');
    sessionStorage.setItem('isOnLoginPage', 'false');
    sessionStorage.setItem('name', 'user');
    setIsLoggedIn(false); // Update local state
    window.location.reload();
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open/close
  };

  // When login is successful, set the sessionStorage and update the state
  const handleLoginSuccess = () => {
    sessionStorage.setItem('loginsuccess', 'true');
    setIsLoggedIn(true); // Update local state to trigger UI update
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #ddd',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60px',
        width: '100%',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          className="btn btn-dark p-1"
          onClick={() => navigate('/')}
          style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <img src={Pic} alt="Home" style={{ width: '35px', borderRadius: '50%' }} />
        </button>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center' }}>
          {/* You can add more links here */}
        </ul>
      </div>

      {/* <div className="username-display">
        {username ? (
          <p>Hello, {username}</p>
        ) : (
          <p>{error}</p>
        )}
      </div> */}

      {/* Main right side buttons */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {!isOnLoginPage && !isLoggedIn && (
          <button className="btn btn-dark" onClick={() => navigate('/login')}>Log In</button>
        )}
        {!isOnSignUpPage && !isLoggedIn && (
          <button className="btn btn-dark" onClick={() => navigate('/signin')}>Sign Up</button>
        )}
        {isLoggedIn && (
          <button className="btn btn-dark" onClick={handleLogout}>Log out</button>
        )}

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '30px',
            height: '30px',
          }}
        >
          <div style={{ width: '20px', height: '2px', backgroundColor: '#000' }}></div>
          <div style={{ width: '20px', height: '2px', backgroundColor: '#000' }}></div>
          <div style={{ width: '20px', height: '2px', backgroundColor: '#000' }}></div>
        </button>
      </div>

      {/* Menu - Show or Hide based on `menuOpen` state with Animation */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '60px', // Position below the navbar
            right: '0',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            zIndex: '1000',
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '10px',
            animation: 'slideIn 0.3s ease-out', // Animation for sliding in
          }}
        >
          {username ? (
            <p>Hello, {username}</p>
          ) : (
            <p>{error}</p>
          )}
          <button className="btn btn-danger" onClick={() => navigate('/AdminUpload')} style={{ width: '100%' }}>
            AdminUpload
          </button>
          <button className="btn btn-danger" onClick={() => navigate('/Datatable')} style={{ width: '100%' }}>
            Datatable
          </button>
          <button className="btn btn-danger" onClick={() => navigate('/Env_test')} style={{ width: '100%' }}>
          Env_test
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
