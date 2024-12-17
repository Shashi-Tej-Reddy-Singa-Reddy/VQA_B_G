// import React, { useState, useEffect } from 'react';
// import './Ask.css'; // Ensure this CSS is loaded

// function Ask() {
//     const [image, setImage] = useState(null);
//     const [caption, setCaption] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [username, setUsername] = useState('');
//     const [error, setError] = useState('');

//     useEffect(() => {
//         // Get the username from sessionStorage or localStorage when the component mounts
//         const storedUsername = sessionStorage.getItem('name') || localStorage.getItem('name');
//         if (storedUsername) {
//             setUsername(storedUsername);
//         } else {
//             setError('User is not authenticated. Please log in again.');
//         }
//     }, []);

//     const handleFileChange = (event) => {
//         setImage(event.target.files[0]);
//     };

//     const uploadImage = async () => {
//         if (!image) {
//             setError('Please select an image.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('image', image);

//         setLoading(true);
//         setCaption('');
//         setError('');

//         try {
//             // Update the API endpoint to Flask
//             // const response = await fetch('http://localhost:8000/api/uploadImage', {  // Adjust URL for Flask
//             const response = await fetch('api/uploadImage', {  // Adjust URL for Flask
//                 method: 'POST',
//                 body: formData,
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setCaption(data.caption);  // Assuming response contains the caption
//             } else {
//                 setError(data.error || 'Error uploading the image. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             setError('An error occurred while uploading the image. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="container">
//             {/* Username Display at the Top Right */}
//             <div className="username-display">
//                 {username ? (
//                     <p>Hello, {username}</p>
//                 ) : (
//                     <p>{error}</p>
//                 )}
//             </div>

//             <h1>Image Captioning</h1>
//             <div className="form-group">
//                 <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                 />
//                 <button onClick={uploadImage} disabled={loading}>
//                     {loading ? 'Loading...' : 'Get Caption'}
//                 </button>
//             </div>

//             {image && (
//                 <div className="card">
//                     <img src={URL.createObjectURL(image)} alt="Uploaded" />
//                 </div>
//             )}

//             {caption && !loading && (
//                 <div className="caption">
//                     <p>{caption}</p>
//                 </div>
//             )}

//             {error && !loading && (
//                 <div className="error-message">
//                     <p>{error}</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Ask;





// import React, { useState, useEffect } from 'react';
// import './Ask.css'; // Ensure this CSS is loaded

// function Ask() {
//     const [image, setImage] = useState(null);
//     const [caption, setCaption] = useState([]);
//     const [captionType, setCaptionType] = useState(''); // New state to track caption type
//     const [loading, setLoading] = useState(false);
//     const [username, setUsername] = useState('');
//     const [error, setError] = useState('');

//     useEffect(() => {
//         // Get the username from sessionStorage or localStorage when the component mounts
//         const storedUsername = sessionStorage.getItem('name') || localStorage.getItem('name');
//         if (storedUsername) {
//             setUsername(storedUsername);
//         } else {
//             setError('User is not authenticated. Please log in again.');
//         }
//     }, []);

//     const handleFileChange = (event) => {
//         setImage(event.target.files[0]);
//     };

//     const uploadImage = async () => {
//         if (!image) {
//             setError('Please select an image.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('image', image);

//         setLoading(true);
//         setCaption([]);
//         setError('');

//         try {
//             const response = await fetch('api/uploadImage', {  // Adjust URL for Flask
//                 method: 'POST',
//                 body: formData,
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setCaption(data.caption);  // Set caption (either points or description)
//                 setCaptionType(data.type);  // Set the caption type (description or point-wise)
//             } else {
//                 setError(data.error || 'Error uploading the image. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             setError('An error occurred while uploading the image. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="container">
//             {/* Username Display at the Top Right */}
//             <div className="username-display">
//                 {username ? (
//                     <p>Hello, {username}</p>
//                 ) : (
//                     <p>{error}</p>
//                 )}
//             </div>

//             <h1>Image Captioning</h1>
//             <div className="form-group">
//                 <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                 />
//                 <button onClick={uploadImage} disabled={loading}>
//                     {loading ? 'Loading...' : 'Get Caption'}
//                 </button>
//             </div>

//             {image && (
//                 <div className="card">
//                     <img src={URL.createObjectURL(image)} alt="Uploaded" />
//                 </div>
//             )}

//             {caption.length > 0 && !loading && captionType === 'description' && (
//                 <div className="caption">
//                     <p>{caption[0]}</p> {/* Display description as a single paragraph */}
//                 </div>
//             )}

//             {caption.length > 0 && !loading && captionType === 'point-wise' && (
//                 <div className="caption">
//                     {caption.map((point, index) => (
//                         <p key={index}>{point}</p> // Display each point in a new line
//                     ))}
//                 </div>
//             )}

//             {error && !loading && (
//                 <div className="error-message">
//                     <p>{error}</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Ask;



import React, { useState, useEffect } from 'react';
import './Ask.css'; // Ensure this CSS is loaded

function Ask() {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState([]);
    const [blipCaption, setBlipCaption] = useState('');
    const [captionType, setCaptionType] = useState(''); // New state to track caption type
    const [loading, setLoading] = useState(false);
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

    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };

    const uploadImage = async () => {
        if (!image) {
            setError('Please select an image.');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);

        setLoading(true);
        setCaption([]);
        setBlipCaption('');
        setError('');

        try {
            // const response = await fetch('api/uploadImage', {  // Adjust URL for Flask
            const response = await fetch('https://test-deploy-v5a1.onrender.com/api/uploadImage', {  // Adjust URL for Flask
            // const response = await fetch(`${process.env.REACT_APP_ASK}`, {  // Adjust URL for Flask
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setCaption(data.caption);  // Set caption (either points or description)
                setBlipCaption(data.blip_cap);
                setCaptionType(data.type);  // Set the caption type (description or point-wise)
            } else {
                setError(data.error || 'Error uploading the image. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while uploading the image. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            {/* Username Display at the Top Right */}
            {/* <div className="username-display">
                {username ? (
                    <p>Hello, {username}</p>
                ) : (
                    <p>{error}</p>
                )}
            </div> */}

            <h1>Image Captioning</h1>
            <div className="form-group">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <button onClick={uploadImage} disabled={loading}>
                    {loading ? 'Loading...' : 'Get Caption'}
                </button>
            </div>

            {image && (
                <div className="card">
                    <img src={URL.createObjectURL(image)} alt="Uploaded" />
                </div>
            )}
            {blipCaption && !loading && (
                <div className="caption">
                    <h2>Caption</h2>
                    <p>{blipCaption}</p> {/* Display the caption from BLIP model */}
                </div>
            )}

            {/* <h2>Detailed Description : </h2> */}
            {caption.length > 0 && !loading && captionType === 'description' && (
                <div className="caption">
                    <h1>shsahi:</h1>
                    <p>{caption[0]}</p> {/* Display description as a single paragraph */}
                </div>
            )}

            {caption.length > 0 && !loading && captionType === 'point-wise' && (
                <div className="caption">
                    <h1>bittu:</h1>
                    {caption.map((point, index) => (
                        <p key={index}>{point}</p> // Display each point in a new line
                    ))}
                </div>
            )}

            {error && !loading && (
                <div className="error-message">
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
}

export default Ask;
