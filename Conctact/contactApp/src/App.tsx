// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/contacts/:id" element={<SingleContact />} />
            <Route path="/add" element={<AddContacts />} />
            <Route path="/edit/:id" element={<EditContact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
