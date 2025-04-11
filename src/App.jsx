import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Navbar />
      <main className='px-2 py-6 sm:px-6 bg-slate-50 min-h-screen'>
        <Home />
      </main>
    </>
  )
}

export default App
