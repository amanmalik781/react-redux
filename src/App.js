import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './Counter';
import Products from './Products';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<div>Home Page</div>} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/products' element={<Products />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
