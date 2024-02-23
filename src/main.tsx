

import App from './App'
import './style/layout.css'
import RoterConfig from '@/routes/routes'
import { createRoot } from 'react-dom/client';
const root = document.getElementById('root');
import { BrowserRouter } from 'react-router-dom'

const reactRoot = createRoot(root as HTMLElement);
reactRoot.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  );