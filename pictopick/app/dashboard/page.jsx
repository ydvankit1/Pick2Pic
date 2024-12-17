// import { UserButton } from '@clerk/nextjs'
// import React from 'react'

// function Dashboard() {
//   return (
//     <div>Dashboard

//     <UserButton/>

//     </div>
//   )
// }

// export default Dashboard

"use client";

import React, { useState } from 'react';
import { UserButton } from '@clerk/nextjs';

function Dashboard() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      // You can also handle the file upload here
      // uploadFile(file);
    }
  };

  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="dashboard">
      <div className="header">
        <UserButton />
      </div>
      <div className="content">
        <h1>Dashboard</h1>
        <button onClick={handleUploadClick} className="upload-button">
          Upload Picture
        </button>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        {selectedImage && (
          <div className="image-preview">
            <img src={selectedImage} alt="Selected" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
