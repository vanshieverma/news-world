import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import { useState } from "react";

const App = () => {
  const[category,setCategory]=useState("general");
  return (
    <div style={{ background: 'linear-gradient(to bottom,#D7D7D7,#353535)', minHeight: '100vh' }}>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category} />
    </div>
  )
}
export default App;
