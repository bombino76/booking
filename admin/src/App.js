import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { targetInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { userColumns ,targetColumns, carColumns ,reservationsColumns} from "./datatablesource";
import NewTarget from "./pages/newTarget/NewTarget";
import NewCar from "./pages/newCar/NewCar";



function App() {
  const { darkMode } = useContext(DarkModeContext);
  const ProtectedRoute = ({children}) =>{
    const {user} = useContext(AuthContext)
    if(!user){
      return <Navigate to="/login"/>
    }
    return children;
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />} />

            <Route
             index 
             element={
             <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
            <Route path="users">
              <Route index element={
                             <ProtectedRoute>
                             <List columns={userColumns}/>
                           </ProtectedRoute>
              
              } />
              <Route path=":userId" element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              
              } />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />

                  </ProtectedRoute>
              }
              />
            </Route>
            <Route path="targets">
              <Route index element={
              <ProtectedRoute> 
                <List columns={targetColumns}/>
                 </ProtectedRoute> } />
              <Route path=":productId" element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              
              } />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                <NewTarget />

                </ProtectedRoute>
              }
              />
            </Route>

            <Route path="cars">
              <Route index element={
              <ProtectedRoute> 
                <List columns={carColumns}/>
                 </ProtectedRoute> } />
              <Route path=":productId" element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              
              } />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                <NewCar />

                </ProtectedRoute>
              }
              />
            </Route>

            <Route path="reservations">
              <Route index element={
              <ProtectedRoute> 
                <List columns={reservationsColumns}/>
                 </ProtectedRoute> } />
              <Route path=":productId" element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              
              } />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                <NewCar />

                </ProtectedRoute>
              }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
