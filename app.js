
const express = require('express')
const path = require ("path");
const app = express()
const port = 3000
app.use(express.static (path.join(__dirname,"./public")));
app.get('/', (req, res) => {
  
  
  res.sendFile(__dirname+"/views/home.html");
})

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`)
})
app.get("/login",(req,res)=>{
  res.sendFile(__dirname+"/views/login.html")
})
app.get("/cuenta",(req,res)=>{
  res.sendFile(__dirname+"/views/cuenta.html")
})
/*
app.get("/ofertas",(req,res)=>{
  res.sendFile(__dirname+"/views/ofertas.html")
})
app.get("/tiendas",(req,res)=>{
  res.sendFile(__dirname+"/views/tiendas.html")
})
app.get("/ventas",(req,res)=>{
  res.sendFile(__dirname+"/views/ventas.html")
})
app.get("/ayuda",(req,res)=>{
  res.sendFile(__dirname+"/views/ayuda.html")
})
app.get("/compras",(req,res)=>{
  res.sendFile(__dirname+"/views/compras.html")
})

*/