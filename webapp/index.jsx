import React from 'react';
import { createRoot} from 'react-dom/client';
import Modal from 'react-modal';
import './styles/tailwind.css';
import App from './App';

const root = createRoot(document.getElementById('app'));
root.render(<App />);

Modal.setAppElement('#app')
