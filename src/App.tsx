import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;