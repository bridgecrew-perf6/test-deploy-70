import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Home';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;