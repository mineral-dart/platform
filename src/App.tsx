import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Index from "./pages/index"
import useAuthCheck from "./hooks/auth/useAuthCheck"
import {PrivateRoute} from "./components/PrivateRoute"

function App() {
  const { data, status } = useAuthCheck()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  console.log(data)
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path={"/"} element={<Index />}/>
        </Route>


      </Routes>
    </div>
  )
}

export default App
