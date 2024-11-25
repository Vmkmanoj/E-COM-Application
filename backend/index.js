const post=4000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require('jsonwebtoken');
const multer=require("multer");
const path=require("path");
const cors=require( "cors"); 
const { error } = require("console");
const { stringify } = require("querystring");

app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://vmkmano:1357@cluster0.cbqch0e.mongodb.net/E-COM").then(()=>console.log("Mongo Db connect")).catch((err)=>console.log(err));

app.get("/",(req,res)=>{
    res.send("it working...")
})
//image strage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
      console.log(file);
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

//uplaod
app.use('/images', express.static('upload/images'));

const upload = multer({storage: storage})
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${post}/images/${req.file.filename}`
    })
})

//product module

const Product = mongoose.model("Product", {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    new_price: {
      type: Number
    },
    old_price: {
      type: Number
    },
    date: {
      type: Date,
      default: Date.now,
    },
    avilable: {
      type: Boolean,
      default: true,
    },
  });
  //user schema

  const Users = mongoose.model("Users", {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    cartData: {
      type: Object,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });


  const Payment_deateil=mongoose.model("Payment",{
    name:{
      type:String,
    },
    email:{
      type:String,
      unique:true,
    },
    adderss:{
      type:String,
    },
    cardnumber:{
      type:Number,
      unique:true,
    },
    expiry_date:{
      type:Number,
      unique:true,
    },
    cvv:{
      type:Number,
      unique:true,
    }

  })

  app.post('/login', async (req, res) => {
    console.log("Login");
      let success = false;
      let user = await Users.findOne({ email: req.body.email });
      if (user) {
          const passCompare = req.body.password === user.password;
          if (passCompare) {
              const data = {
                  user: {
                      id: user.id
                  }
              }
        success = true;
        console.log(user.id);
        const token = jwt.sign(data, 'secret_ecom');
        res.json({ success, token });
          }
          else {
              return res.status(400).json({success: success, errors: "please try with correct email/password"})
          }
      }
      else {
          return res.status(400).json({success: success, errors: "please try with correct email/password"})
      }
  })






  app.post('/signup', async (req, res) => {
    console.log("Sign Up");
          let success = false;
          let check = await Users.findOne({ email: req.body.email });
          if (check) {
              return res.status(400).json({ success: success, errors: "existing user found with this email" });
          }
          let cart = {};
            for (let i = 0; i < 300; i++) {
            cart[i] = 0;
          }
          const user = new Users({
              name: req.body.username,
              email: req.body.email,
              password: req.body.password,
              cartData: cart,
          });
          await user.save();
          const data = {
              user: {
                  id: user.id
              }
          }
          
          const token = jwt.sign(data, 'secret_ecom');
          success = true; 
          res.json({ success, token })
      }) 


  ///add new product

  app.post("/addproduct", async (req, res) => {
    try {
      let products = await Product.find({});
      let id;
      if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
      } else {
        id = 1;
      }
  
      const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
      });
  
      console.log(product);
  
      await product.save();
  
      console.log("Saved");
      res.json({ success: true, name: req.body.name });
    } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  });
  

///remove product 

  app.post("/removeproduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({success:true,name:req.body.name})
  });
  //prpolers in women

  app.get("/populerwomen", async (req, res) => {
    let products = await Product.find({});
    let arr = products.splice(0,  4);
    console.log("Popular In Women");
    res.send(arr);
  });
  //createing middleware 
  const fetchuser = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
      res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
  };
  //add to cart
  app.post('/addtocart', fetchuser, async (req, res) => {
    console.log("Add Cart");
    console.log(req.body)
      let userData = await Users.findOne({_id:req.user.id});
      userData.cartData[req.body.IteamId] += 1;
      await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
      res.send("Added")
    })

    //remove from cart


    app.post('/removefromcart', fetchuser, async (req, res) => {
      console.log("Remove Cart");
        let userData = await Users.findOne({_id:req.user.id});
        if(userData.cartData[req.body.IteamId]!=0)
        {
          userData.cartData[req.body.IteamId] -= 1;
        }
        await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
        res.send("Removed");
      })
//creating end point get cartdata


app.post('/getcart', fetchuser, async (req, res) => {
  console.log("Get Cart");
  let userData = await Users.findOne({_id:req.user.id});
  res.json(userData.cartData);

  })






  //all product

  app.get("/allproducts",async (req, res) => {
	let products = await Product.find({});
  console.log("All Products");
    res.send(products);
});

//new collection
app.get("/newcollections", async (req, res) => {
  
	let products = await Product.find({});
  let arr = products.slice(1).slice(-8);
  console.log("New Collections");
  res.send(arr);

});



app.listen(post,(error)=>{
    if(!error){
        console.log("it post is running " + post)
    }
    else{
        console.log("it not running "+error)
    }
})