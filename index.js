var express = require("express")
var fs = require('fs')
const port =process.env.PORT || 8000
const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({
    extended:true
}))
app.post("/sign_up",(req,res)=>{

    var id = req.body.number;
    fs.readFile("voters.csv","utf8",(err, data)=>{
        if(err){
            console.log(err)
        }
        var store1 = data.split(',')
            console.log('entered try')
            for(i in store1){
                console.log(store1[i],id)
                if (store1[i] == id){
                var store=[]
                for(j in store1){
                    if (store1[i] !== store1[j]){
                        store[j]=store1[j]
                    }
                }
                var store2 = store.toString()
                console.log(store)
                fs.writeFile("voters.csv",store2,()=>{
                    console.log('verified')
                })
                return res.redirect('https://forms.office.com/r/1jsA1Js6UD')}}
        return res.redirect('signup_success.html')
            
            })});


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(port);


console.log("Listening on PORT 3000");