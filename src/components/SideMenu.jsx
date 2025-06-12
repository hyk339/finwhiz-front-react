import './SideMenu.css';
import { useNavigate } from 'react-router-dom'

const SideMenu = ({isOpen}) => {
  
  const navigate = useNavigate();

  return (
     <div className='SideMenu'>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <h2 className="menu-title">📋 메뉴</h2>
        <ul>
          <li onClick={()=>{navigate('/')}}>🏠 홈</li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu;