import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import WallSection from './WallSection';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Post from './Post';
import './App.css';
import './style.css';
import 'bootstrap';
import Photo from './photo';
function App() {
  return (
    <>
      <main className="container">
        <div className="row">
        <Header />
        {/* <Navbar /> */}
        <h1>Upload a Photo</h1>
          {/* <WallSection /> */}
          <Photo />
          {/* <Sidebar />
          <Footer /> */}
        </div>
      </main>
    </>
  );
}
export default App;