import React, { useEffect } from "react";
import { useState } from "react";
import "../menu/Menu.css";


function Menu() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  return (
    <div className="d-flex menu">
      {!menuOpen && (
        <button className="btn-menu" type="button" onClick={handleOpenMenu}>

        </button>
      )}
      {menuOpen && (
        <div className="d-flex menu-hidden">
          <div className="d-flex flex-column options">
            <div className="icon">
              <h1>NOTES</h1>
            </div>
            <div>
 
            </div>
            <div className="d-flex flex-column menu-footer">
              <div>
                <a href="">Contact</a>
              </div>
              <ul className="d-flex redes">
                <li>
                  <a
                    className="icon-link"
                    href="https://www.linkedin.com/in/florenciagalindezcasas/"
                    target="blank"
                  >
                    
                  </a>
                </li>
                <li>
                  <a
                    className="icon-link"
                    href="https://github.com/FlorenciaGalindezCasas"
                    target="blank"
                  >
                    
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button className="btn-menu" type="button" onClick={handleOpenMenu}>
            
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
