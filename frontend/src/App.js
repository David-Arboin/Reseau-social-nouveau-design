import React from 'react'
<<<<<<< HEAD
=======
import Header from './components/Header/Header.jsx'
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
import LoginPage from './pages/loginPage/index.jsx'
import HomePage from './pages/homePage/index.jsx'
import NotFound from './components/NotFound/NotFound'
import { Navigate } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export const TokenContext = React.createContext()
<<<<<<< HEAD
export const FirstnameContext = React.createContext()
export const TypeContext = React.createContext()
=======
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
export const UserIdContext = React.createContext()
export const NameContext = React.createContext()
export const LogInContext = React.createContext()

function App() {
<<<<<<< HEAD
    const [token, setToken] = React.useState()
    const [firstname, setFirstname] = React.useState()
    const [type, setType] = React.useState()
    const [userId, setUserId] = React.useState()
    const [name, setName] = React.useState()

=======

    const [token, setToken] = React.useState()
    const [userId, setUserId] = React.useState()
    const [name, setName] = React.useState()


>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
    return (
        <div className="App">
            <Router>
                <TokenContext.Provider value={[token, setToken]}>
<<<<<<< HEAD
                    <FirstnameContext.Provider
                        value={[firstname, setFirstname]}
                    >
                        <TypeContext.Provider value={[type, setType]}>
                            <UserIdContext.Provider value={[userId, setUserId]}>
                                <NameContext.Provider value={[name, setName]}>
                                    {/* <Header /> */}
                                    <Routes>
                                        <Route
                                            exact
                                            path="/loginPage"
                                            element={<LoginPage />}
                                        ></Route>
                                        <Route
                                            path="/"
                                            element={
                                                <Navigate
                                                    replace
                                                    to="/loginPage"
                                                />
                                            }
                                        ></Route>
                                        <Route
                                            path="/homePage"
                                            element={<HomePage />}
                                        ></Route>
                                        <Route component={<NotFound />}></Route>
                                    </Routes>
                                </NameContext.Provider>
                            </UserIdContext.Provider>
                        </TypeContext.Provider>
                    </FirstnameContext.Provider>
=======
                    <UserIdContext.Provider value={[userId, setUserId]}>
                        <NameContext.Provider value={[name, setName]}>
                                <Header />
                                <Routes>
                                    <Route
                                        exact
                                        path="/loginPage"
                                        element={<LoginPage />}
                                    ></Route>
                                    <Route
                                        path="/"
                                        element={
                                            <Navigate replace to="/loginPage" />
                                        }
                                    ></Route>
                                    <Route
                                        path="/homePage"
                                        element={<HomePage />}
                                    ></Route>
                                    <Route component={<NotFound />}></Route>
                                </Routes>
                        </NameContext.Provider>
                    </UserIdContext.Provider>
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                </TokenContext.Provider>
            </Router>
        </div>
    )
}
export default App
