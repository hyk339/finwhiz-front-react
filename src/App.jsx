import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Button from './components/Button'
import Header from './components/Header'


// 1. "/" : 뉴스를 조회하는 Home 페이지
function App() {
  return (
    <>
      <Header title={"제목입니다."} leftChild={"메뉴"} rightChild={"마이페이지"}></Header>
      <Button text={"123"} type={"gray"}/>

      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="*" element={<Notfound/>} />
      </Routes>
   </>
  )
}

export default App
