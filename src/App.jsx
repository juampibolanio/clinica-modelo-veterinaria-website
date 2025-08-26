import { Route, BrowserRouter, Routes } from 'react-router-dom'
import LandingLayout from './layouts/LandingLayout'
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <LandingLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </LandingLayout>
      </BrowserRouter>
    </>
  )
}

export default App
