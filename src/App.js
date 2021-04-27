import Home from './components/home';
import ContextProvider from './context/categoriasContext';
import TragosProvider from './context/tragosContext';
import RecetaProvider from './context/recetasContext';

function App() {
  return (
    <ContextProvider>
      <TragosProvider>
        <RecetaProvider>
          <Home />
        </RecetaProvider>
    </TragosProvider>
    </ContextProvider>
  );
}

export default App;
