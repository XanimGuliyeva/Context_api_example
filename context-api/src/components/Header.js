import React, { useContext } from "react";
import { GlobalContext } from "../global/Global";

function Header() {
  const { name, id, setState } = useContext(GlobalContext);
  return (
    <div>
      <h2>
        Context value: {name}, {id}
      </h2>
      <button onClick={()=> setState("Xanim")} className="btn btn-danger ">
        Change
      </button>
    </div>
  );
}

export default Header;
