import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import ExpPage from './pages/ExpPage';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Home/>}/>
        <Route path='/experiences' element={<ExpPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;