import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import "./App.css";
import { BrowserRouter, Route} from 'react-router-dom';
import { PaginaPost } from './components/pages/PaginaPostar/PaginaPost';

function App() {
  return (
    <div className='pagina'>
      <BrowserRouter>
      
      <Route 
        exact path="/"
        component={PaginaPrincipal}>
        </Route>
        <Route 
          path="/criarPosts"
          component={PaginaPost}/>
      </BrowserRouter>
    </div>
   

  );
}

export default App;