
import "./sidebar.css";
import React from "react";

const Sidebar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleSidebarOpen = () => {
//     setSidebarOpen(true);
//   };

//   const handleSidebarClose = () => {
//     setSidebarOpen(false);
//   };

  return (
    <div className="sidebar">
      {/* {!sidebarOpen ? ( */}
        <div className="sidebar_icon" 
        // onMouseEnter={handleSidebarOpen}
        >
          <i className="fas fa-bars"></i>
        </div>
      {/* ) : ( */}
        <>
          <div className="sidebar_icon" 
        //   onMouseLeave={handleSidebarClose}
          >
            <i className="fas fa-times"></i>
          </div>
          <div className="sidebar_items">


            <div className="sidebar_text">
              <i className="fas fa-home"></i>
              <p>You're currently on</p>
              <p><b><u>A journey towars Deep Music</u></b>.</p>
              <p>See also:</p>
            </div>
            <div className="sidebar_item">
              <i className="fas fa-user"></i>
              
              <p><a href="#juego">El Juego del Futuro</a></p>

            </div>


            
          </div>
        </>
      
    </div>
  );
};

export default Sidebar;
