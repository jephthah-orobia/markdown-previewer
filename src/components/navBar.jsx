import React from "react";

function NavBar(props) {
  return (
    <div
      className={`navbar row p-0 text-bg-${props.darkMode ? "dark" : "light"}`}
    >
      <span className="h3 col-6 mt-1">Markdown Previewer</span>
      <span className="col-6 text-end pt-0 mt-0">
        <button
          className="btn btn-secondary mx-1"
          onClick={() => props.saveClick()}
        >
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
        <button
          className="btn btn-secondary mx-1"
          onClick={() => props.rotateClick()}
        >
          <i className="fa-solid fa-rotate"></i>
        </button>
        <button
          className="btn btn-secondary mx-1"
          onClick={() => props.darkModeToggleClick()}
        >
          <i className="fa-solid fa-circle-half-stroke"></i>
        </button>
      </span>
    </div>
  );
}

export default NavBar;
