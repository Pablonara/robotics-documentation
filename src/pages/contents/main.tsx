// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import '@cloudscape-design/global-styles/index.css';

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
