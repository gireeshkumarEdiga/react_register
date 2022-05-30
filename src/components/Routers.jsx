import { Navbar } from "./Navbar";
import { Register } from "./Register";
import { One } from "./One";
import { Two } from "./Two";

import { BrowserRouter,Routes,Route } from "react-router-dom"

export const AllRouters = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Register />}></Route>
                <Route path="/one" element={<One />}></Route>
                <Route path="/two" element={<Two />}></Route>
            </Routes>
        </div>
    )
}