import React from "react";

function MdEditor({ darkMode, landscape, textAreaValue, onEditorChange }) {
  return (
    <div
      className={`editor-${landscape ? "landscape" : "portrait"} text-bg-${
        darkMode ? "dark" : "light"
      }`}
    >
      <h4 className="text-center">Editor</h4>
      <textarea
        id="editor"
        value={textAreaValue}
        onChange={(e) => onEditorChange(e.target.value)}
        className={`text-bg-${darkMode ? "dark" : "light"}`}
      ></textarea>
    </div>
  );
}

export default MdEditor;
