import React from "react"
import Sidebar from "../component/sidebar/sidebar"
import { Routes,Route } from "react-router-dom"
import Addproduct from "../component/Addproduct/addproduct"
import ListProduct from "../component/listproduct/listproduct"
import "./admin.css"

function Admin(){
    return(
        <div className="admin">
            <Sidebar></Sidebar>
            <Routes>
            <Route path="/addproduct" element={<Addproduct />} />
            <Route path="/listproduct" element={<ListProduct />} />
            </Routes>

        </div>
    )
}

export default Admin