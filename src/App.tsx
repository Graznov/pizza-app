import './App.css'
import Button from "./components/Button/Button.tsx";

function App() {

  return (
    <>
        <Button onClick={()=> console.log(13)} >Кнопка</Button>
    </>
  )
}

export default App
