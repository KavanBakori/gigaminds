import React, { useState } from "react";
import "./Sidebar.css"; // Import your CSS file
import { w3_open, w3_close } from "./Sidebarutils"; // Import your utility functions

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    if (isOpen) {
      w3_close(); // Call the close function from your utility
    } else {
      w3_open(); // Call the open function from your utility
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w3-sidebar ${isOpen ? "open" : ""}`}>
      <button className="w3-bar-item w3-button w3-large" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"} &times;
      </button>
      <a href="#" className="w3-bar-item w3-button">
        Link 1
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Link 2
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Link 3
      </a>
    </div>
  );
}

export default Sidebar;
