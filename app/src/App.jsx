import Nav from "./component/nav"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./component/pages/shop";
import Cart from "./component/pages/cart";
import Product from "./component/pages/product"
import Login from "./component/pages/login";
import Fooder from "./component/fooder/fooder";
// import Shop from "./component/pages/shop";
import Shopcategory from "./component/pages/shopcategory";
import men_banner from "./component/assets/banner_mens.jpg";
import women_banner from "./component/assets/banner_women.png";
import  kids_banner from "./component/assets/banner_kids.jpg";
import Cheackout from "./component/checkout_page/checkout_page";
function App() {
  return(
<>
<BrowserRouter>
<Nav></Nav>
<Routes>
  <Route path="/" element={<Shop></Shop>}>  </Route>
  <Route path="/Men" element={<Shopcategory  Catagory="men" banner={men_banner}/> }>  </Route>
  <Route path="/Women" element={<Shopcategory Catagory="women" banner={women_banner}/>}>  </Route>
  <Route path="/kids" element={<Shopcategory Catagory="kid" banner={kids_banner}/>}>  </Route>

  <Route path="/product" element={<Product></Product>}> 

  <Route path=":productId" element={<Product></Product>}></Route>

  </Route>
  <Route path="/login" element={<Login></Login>}> </Route>
  <Route path="/cart" element={<Cart></Cart>}> </Route>
  <Route path="/cheackout" element={<Cheackout></Cheackout>}></Route>
</Routes>
<Fooder></Fooder>
</BrowserRouter>
</>
  )
}
export default App
