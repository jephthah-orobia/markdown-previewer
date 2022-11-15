import React from 'react';
import ReactDOM from 'react-dom/client';
import MarkdownPreviewer from './components/markdownPreviewer';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import "./components/components.css";
import '@fortawesome/fontawesome-free/css/all.css';

const rootDiv = document.getElementById("root");

const root = ReactDOM.createRoot(rootDiv);
root.render(<MarkdownPreviewer />);