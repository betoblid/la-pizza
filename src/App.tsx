import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default App;