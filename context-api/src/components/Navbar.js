import React, { useContext } from "react";
import { GlobalContext } from "../global/Global";

export default function Navbar() {
  const { link } = useContext(GlobalContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {link.map((link) => {
              return (
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                  {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
