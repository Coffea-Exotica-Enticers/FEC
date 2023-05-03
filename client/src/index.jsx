import React from 'react';
// import reactDOM from 'react-dom';
// (does the same thing as the line below, but doesn't destructure for the function)
import { createRoot } from 'react-dom/client';

import App from './components/App';

// ReactDOM.createRoot(document.getElementById)('root')).render(<App />);
// Above is for the non-destructured way on line 2
// Below is the way to do it for the method on line 4
createRoot(document.getElementById('root')).render(<App />);
