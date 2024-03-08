//Render the main page and links to projects here
//Add a navbar that will go to your personal info - Home/About Me/Projects
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import UnderConstruction from './components/UnderConstruction';




export default function App() {
 

  return (
    <BrowserRouter>
      <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='aboutme' element={<AboutMe/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='budgetTool' element={<UnderConstruction/>}/>
          <Route path='calculator' element={<UnderConstruction/>}/>
          <Route path='calendar' element={<UnderConstruction/>}/>
          <Route path='clock' element={<UnderConstruction/>}/>
          <Route path='pokedex' element={<UnderConstruction/>}/>
          <Route path='tictactoe' element={<UnderConstruction/>}/>       
          <Route path='contactme' element={<ContactMe/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}
