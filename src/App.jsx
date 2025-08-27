import { Route, BrowserRouter, Routes } from 'react-router-dom'
import LandingLayout from './layouts/LandingLayout'
import Home from './pages/Home'
import Blog from './pages/Blog';

function App() {

  return (
    <>
      <BrowserRouter>
        <LandingLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </LandingLayout>
      </BrowserRouter>
    </>
  )
}

export default App
