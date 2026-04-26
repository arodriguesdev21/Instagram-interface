import './App.css'
import LeftSide from './components/left'
import Main from './components/main'
import RightSide from './components/right'
import Stories from './components/stories'

function App() {

  return (
    <main className='container'>
    <LeftSide/>
    <Main/>
    <RightSide/>
    </main>
  )
}

export default App
