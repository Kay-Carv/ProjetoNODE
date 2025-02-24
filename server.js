const express = require("express")

const app =express();

app.get("/login", (req, res)=>{
    res.send("Bem vindo ao login")
});


app.listen(3000, ()=>{
    console.log("Servidor rodadando na porta 3000")
})