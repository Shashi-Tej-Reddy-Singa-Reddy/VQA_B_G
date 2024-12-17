// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Home.css'; // Import the CSS file specific to Home
// // import exampleFile from '../images/temp';

// // function Home() {
// //   const navigate = useNavigate();

// //   const [logedin, setLogedin] = useState(false);

// //   const handleAskathome = () => {
// //     fetch(exampleFile)
// //       .then(response => response.blob())
// //       .then(blob => {
// //         const url = window.URL.createObjectURL(blob);
// //         const link = document.createElement('a');
// //         link.href = url;
// //         link.setAttribute('download', 'example.pdf'); // Suggested file name
// //         document.body.appendChild(link);
// //         link.click();
// //         document.body.removeChild(link);
// //         window.URL.revokeObjectURL(url); // Clean up the URL object
// //       })
// //       .catch(error => console.error('Error downloading the file', error));

// //     navigate('/Ask');
// //   };


// //   useEffect(() => {
// //     const checkLoginStatus = () => {
// //       const loginIndication = sessionStorage.getItem('loginsuccess') === 'true';

// //       setLogedin(loginIndication);
// //     };

// //     checkLoginStatus(); // Initial check
// //     window.addEventListener('storage', checkLoginStatus); // React to sessionStorage changes

// //     return () => window.removeEventListener('storage', checkLoginStatus); // Cleanup listener
// //   }, []);





// //   return (
// //     <>
// //       <p className="home-title">Visual Question Answering</p>
// //       <div className="home-container">
// //         {logedin && (
// //           <button className="home-button" onClick={handleAskathome}>Ask</button>
// //         )}
// //       </div>
// //     </>
// //   );
// // }

// // export default Home;




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css'; // Import the CSS file specific to Home
// import exampleFile from '../images/temp'; // Ensure this path is correct

// function Home() {
//   const navigate = useNavigate();
//   const [logedin, setLogedin] = useState(false);

//   const handleAskathome = () => {
//     fetch(exampleFile)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.blob();
//       })
//       .then(blob => {
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement('a');
//         link.href = url;
//         link.download = 'temp'; // Suggested file name
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         window.URL.revokeObjectURL(url); // Clean up the URL object
//       })
//       .catch(error => console.error('Error downloading the file', error));

//     navigate('/Ask');
//   };

//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const loginIndication = sessionStorage.getItem('loginsuccess') === 'true';
//       setLogedin(loginIndication);
//     };

//     checkLoginStatus(); // Initial check
//     window.addEventListener('storage', checkLoginStatus); // React to sessionStorage changes

//     return () => window.removeEventListener('storage', checkLoginStatus); // Cleanup listener
//   }, []);

//   return (
//     <>
//       <p className="home-title">Visual Question Answering</p>
//       <div className="home-container">
//         {logedin && (
//           <button className="home-button" onClick={handleAskathome}>Ask</button>
//         )}
//       </div>
//     </>
//   );
// }

// export default Home;














// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Home.css'; // Import the CSS file specific to Home

// // function Home() {
// //   const navigate = useNavigate();

// //   const [logedin, setLogedin] = useState(false);

// //   const handleAskathome = () => {
// //     navigate('/Ask');
// //   };


// //   useEffect(() => {
// //     const checkLoginStatus = () => {
// //       const loginIndication = sessionStorage.getItem('loginsuccess') === 'true';

// //       setLogedin(loginIndication);
// //     };

// //     checkLoginStatus(); // Initial check
// //     window.addEventListener('storage', checkLoginStatus); // React to sessionStorage changes

// //     return () => window.removeEventListener('storage', checkLoginStatus); // Cleanup listener
// //   }, []);





// //   return (
// //     <>
// //       <p className="home-title">Visual Question Answering</p>
// //       <div className="home-container">
// //         {logedin && (
// //           <button className="home-button" onClick={handleAskathome}>Ask</button>
// //         )}
// //       </div>
// //     </>
// //   );
// // }

// // export default Home;





import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file specific to Home
// import exampleFile from '../images/temp'; // Ensure this path is correct


function Home() {
  const navigate = useNavigate();
  const [logedin, setLogedin] = useState(false);

  // const handleAskathome = () => {
  //   fetch(exampleFile)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const contentDisposition = response.headers.get('Content-Disposition');
  //       const fileName = contentDisposition
  //         ? contentDisposition.split('filename=')[1]?.replace(/"/g, '') || 'temp'
  //         : 'temp';
        
  //       return response.blob().then(blob => ({ blob, fileName }));
  //     })
  //     .then(({ blob, fileName }) => {
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = fileName; // Use the file name from the response
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //       window.URL.revokeObjectURL(url); // Clean up the URL object
  //     })
  //     .catch(error => console.error('Error downloading the file', error));
    
  //   navigate('/Ask');
  // };
  
  const handleAskathome = () => {
    navigate('/Ask');
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      const loginIndication = sessionStorage.getItem('loginsuccess') === 'true';
      setLogedin(loginIndication);
    };

    checkLoginStatus(); // Initial check
    window.addEventListener('storage', checkLoginStatus); // React to sessionStorage changes

    return () => window.removeEventListener('storage', checkLoginStatus); // Cleanup listener
  }, []);

  return (
    <>
      <p className="home-title">Visual Question Answering</p>
      <p>k : {process.env.REACT_APP_1}</p>
      <div className="home-container">
        {logedin && (
          <button className="home-button" onClick={handleAskathome}>Ask</button>
        )}
      </div>
    </>
  );
}

export default Home;
