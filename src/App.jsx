import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Layout from './components/Layout'
import ValueScoreRank from './pages/ValueScoreRank'

function App() {
  
  
  return (
    <>
     <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/valueScoreRank" element={<ValueScoreRank />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
     </Layout>
   </>
  )
}

export default App
