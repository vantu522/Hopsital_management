import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx'
import PoeChatButton from './components/ui/ChatBot.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <App/>
       <ToastContainer/>
       <PoeChatButton/>
  </StrictMode>,
)
