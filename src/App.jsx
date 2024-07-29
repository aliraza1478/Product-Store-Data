import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SidebarTwo from './Components/SidebarTwo/SidebarTwo';
import './App.css';
import Sidebarone from './Components/Sidebarone/Sidebarone';
import Api from './Components/Apidata/Api';
import axios from 'axios';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos"); // Replace with your API endpoint
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos data:', error);
      }
    };

    fetchPhotos();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredPhotos = searchValue
    ? photos.filter(photo =>
        photo.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : photos;

  return (
    <div className="App">
      <Navbar 
        toggleSidebar={toggleSidebar} 
        searchValue={searchValue} 
        handleSearchChange={handleSearchChange} 
      />
      <Sidebarone />
      <SidebarTwo isClose={isSidebarCollapsed} />
      <Api photos={filteredPhotos} />
      <Footer/>
    </div>
  );
}

export default App;
