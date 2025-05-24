import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Notfound from './pages/Notfound'



// 1. "/" : 뉴스를 조회하는 Home 페이지
function App() {
  return (
   <Routes>
    <Route path ="/" element={<Home/>} />
    <Route path ="*" element={<Notfound/>} />
   </Routes>
  )
}

export default App
