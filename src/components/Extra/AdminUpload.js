import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  Box
} from '@mui/material';

const AdminUpload = () => {
  const [branch, setBranch] = useState('');
  const [subject, setSubject] = useState('');
  const [unit, setUnit] = useState('');
  const [sem, setSem] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!branch || !subject || !unit || !sem || !file) {
      alert('Please fill all the fields and select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('branch', branch);
    formData.append('subject', subject);
    formData.append('unit', unit);
    formData.append('sem', sem);
    formData.append('pdf', file);

    try {
      // Send data to server
      await axios.post('https://vidyaa2-0-1.onrender.com/upload', formData, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_SECRET_KEY}`
        }
      });
      alert('File uploaded successfully');
      // Clear form after successful upload
      setBranch('');
      setSubject('');
      setUnit('');
      setSem('');
      setFile(null);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again later.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 2 }}>
        <form onSubmit={handleUpload}>
          <TextField
            label="Branch"
            variant="outlined"
            fullWidth
            margin="normal"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          />
          <TextField
            label="Subject"
            variant="outlined"
            fullWidth
            margin="normal"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <TextField
            label="Unit"
            variant="outlined"
            fullWidth
            margin="normal"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            required
          />
          <TextField
            label="Semester"
            variant="outlined"
            fullWidth
            margin="normal"
            value={sem}
            onChange={(e) => setSem(e.target.value)}
            required
          />
          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          >
            Upload File
            <input
              type="file"
              hidden
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </Button>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Upload
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AdminUpload;
