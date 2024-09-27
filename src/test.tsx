import { createRoot } from 'react-dom/client';
import { FolderOpen } from './icons'; 

const App = () => {
  return (
        <FolderOpen size={1000} color='red' />	
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(<App />);
