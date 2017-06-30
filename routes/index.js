const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get("/",(req,res)=>{
	res.render("register");
});

router.get("/home",(req,res)=>{
	res.render("index")
})
const convertCurrencies = (currencyToConvert,convertToCurrency,Amount)=>{
	let naira = {"dollar":0.0032,"euro":0.0028,"yen":0.36,"pounds":0.0024}
	let dollar = {"naira":315.25,"euro":0.88,'yen':112.04,"pounds":0.77}
	let pounds = {"yen":145.36,"euro":1.14,"dollar":1.30,"naira":409.10}
	let euro = {"yen":127.73,"pounds":0.88,"dollar":1.14,"naira":359.48}
	let yen = {"pounds":0.0069,"dollar":0.0089,"naira":2.82,"euro":0.0078}

	if(currencyToConvert === "naira"){
		return naira[convertToCurrency] * parseFloat(Amount)
	}
	else if(currencyToConvert === "dollar"){
		return dollar[convertToCurrency] * parseFloat(Amount)
	}
	else if(currencyToConvert === "pounds"){
		return pounds[convertToCurrency] * parseFloat(Amount)
	}
	else if (currencyToConvert === "euro"){
		return euro[convertToCurrency] * parseFloat(Amount)
	}
	else{
		return yen[convertToCurrency] * parseFloat(Amount)
	}
}
router.get("/convertCurrency",(req,res)=>{
	a = req.body.amount
	b = req.body.myselect
	c = req.body.myconvert
	console.log(convertCurrencies(a,b,c))
	res.redirect("/home")
})

module.exports = router