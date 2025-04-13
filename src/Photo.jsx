import React, { useState } from 'react';
import axios from 'axios';
const Photo = () => {
   const [file, setFile] = useState(null);
   const handleUpload = async () => {
       const formData = new FormData();
       formData.append('photo', file);
       try {
           const res = await axios.post('http://localhost:5000/api/photos', formData);
           alert('Upload successful!');
           console.log(res.data);
       } catch (err) {
           console.error(err);
           alert('Upload failed');
       }
   };
   return (
<div>
<input type="file" onChange={e => setFile(e.target.files[0])} />
<button onClick={handleUpload}>Upload Photo</button>
</div>
   );
};
export default Photo;