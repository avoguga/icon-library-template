import { createRoot } from 'react-dom/client';
import { Star } from './icons';

const App = () => {
  return <Star size={1000} color="red" />;
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(<App />);
