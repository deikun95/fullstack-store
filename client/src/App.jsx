import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
};

export default App;
