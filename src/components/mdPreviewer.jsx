import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

function MdPreviewer({ darkMode, landscape, inputFromMd }) {
  marked.use({ breaks: true, gfm: true });
  return (
    <div
      className={`preview-${landscape ? "landscape" : "portrait"} text-bg-${
        darkMode ? "dark" : "light"
      }`}
    >
      <h4 className="text-center">Preview</h4>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked.parse(inputFromMd)),
        }}
      ></div>
    </div>
  );
}

export default MdPreviewer;
