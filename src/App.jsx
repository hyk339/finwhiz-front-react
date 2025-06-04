import './App.css'
import { useReducer, createContext } from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Button from './components/Button'
import Header from './components/Header'


const mockData = [
  {
    id : 1,
    createdData : new Date().getTime(),
    newsTitle: "뉴스 제목 1",
  },
  {
    id : 2,
    createdData : new Date().getTime(),
    newsTitle: "뉴스 제목 2",
  },
  {
    id : 3,
    createdData : new Date().getTime(),
    newsTitle: "뉴스 제목 3",
  }
]

function reducer(state, action){
  return state;
}

export const NewsStateContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  


  return (
    <>
      <Header title={"제목입니다."} leftChild={"메뉴"} rightChild={"마이페이지"}></Header>
      <NewsStateContext.Provider value={data}>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="*" element={<Notfound/>} />
        </Routes>
      </NewsStateContext.Provider>
   </>
  )
}

export default App
