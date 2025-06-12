import { useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header
        title="제목입니다."
        leftChild={
          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        }
        rightChild="마이페이지"
      />
      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>{children}</main>
    </>
  );
};

export default Layout;