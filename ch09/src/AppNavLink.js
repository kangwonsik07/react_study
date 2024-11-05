import { Route, Routes, NavLink } from 'react-router-dom'
import './AppNavLink.css'

function Home() {
   return (
      <div>
         <h1>Home</h1>
         Home
      </div>
   )
}

function Topics() {
   return (
      <div>
         <h1>Topics</h1>
         Topics
      </div>
   )
}

function Contact() {
   return (
      <div>
         <h1>Contact</h1>
         Contact
      </div>
   )
}

function App() {
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />

            {/* 지정한 경로 외에 다른 모든 경로는 Not Found를 보여준다 */}
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}

export default App
