import React, { Component } from "react";
import NavBar from "./navBar.jsx";
import MdEditor from "./mdEditor.jsx";
import MdPreviewer from "./mdPreviewer.jsx";

const initialInput = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

class MarkdownPreviewer extends Component {
  state = {
    inputMd: initialInput,
    landscape: false,
    darkMode: true,
  };

  handleEditorChange = (input) => {
    this.setState((prevState) =>
      Object.assign({}, prevState, {
        inputMd: input,
      })
    );
  };

  handleSaveClick = () => {
    alert("not yet implemented!");
  };

  handleRotateClick = () => {
    this.setState((prevState) =>
      Object.assign({}, prevState, {
        landscape: !prevState.landscape,
      })
    );
  };

  handleDarkModeToggleClick = () => {
    this.setState((prevState) =>
      Object.assign({}, prevState, {
        darkMode: !prevState.darkMode,
      })
    );
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          darkMode={this.state.darkMode}
          saveClick={this.handleSaveClick}
          rotateClick={this.handleRotateClick}
          darkModeToggleClick={this.handleDarkModeToggleClick}
        />
        <MdEditor
          darkMode={this.state.darkMode}
          landscape={this.state.landscape}
          onEditorChange={(input) => this.handleEditorChange(input)}
          textAreaValue={this.state.inputMd}
        />
        <MdPreviewer
          inputFromMd={this.state.inputMd}
          darkMode={this.state.darkMode}
          landscape={this.state.landscape}
        />
      </React.Fragment>
    );
  }
}

export default MarkdownPreviewer;
