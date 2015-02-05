//function for  inheritance
function extend(Child, Parent){
	var F = function(){};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
}

function Laptop () {
}

Laptop.prototype.toString = function() {
	return "Resolution: " + this.monitorResolution + " proc: " + this.processor;
};


//Base laptop builder
function LabtopBuilder () {
	this.laptop = {}
}

LabtopBuilder.prototype.createNewLaptop = function() {
	this.laptop = new Laptop();
};

LabtopBuilder.prototype.getMyLaptop = function() {
	return this.laptop;
};

LabtopBuilder.prototype.setMonitorResolution = function() {
	this.laptop.monitorResolution = "Default";
};

LabtopBuilder.prototype.setProcessor = function() {
	this.laptop.processor = "Default";
};

LabtopBuilder.prototype.toString = function() {
	return "Resolution: " + this.laptop.monitorResolution + " proc: " + this.laptop.processor;
};



//Concrete builder for gaiming laptop
function GamingLaptopBuilder () {
	LabtopBuilder.call(this);
}
extend(GamingLaptopBuilder, LabtopBuilder);

GamingLaptopBuilder.prototype.setMonitorResolution = function() {
	this.laptop.monitorResolution = "1900*1200";
};
GamingLaptopBuilder.prototype.setProcessor = function() {
	this.laptop.processor = "Core 2 Duo";
};
GamingLaptopBuilder.prototype.getMyLaptop = function() {
	return this.laptop;
};


//Concrete builder for trip laptop
function TripLaptopBuilder () {
	LabtopBuilder.call(this);
}
extend(TripLaptopBuilder, LabtopBuilder);

TripLaptopBuilder.prototype.setMonitorResolution = function() {
	this.laptop.monitorResolution = "1200*1000";
};
TripLaptopBuilder.prototype.setProcessor = function() {
	this.laptop.processor = "AMD";
};


//Director
function BuyLaptop () {
	this.lbuilder = {};
}

BuyLaptop.prototype.setLaptopBuilder = function(builder) {
	this.lbuilder = builder;
};
BuyLaptop.prototype.getLaptop = function() {
	return this.lbuilder.getMyLaptop();
};

BuyLaptop.prototype.consrtuctLaptop = function() {
	this.lbuilder.createNewLaptop();
	this.lbuilder.setMonitorResolution();
	this.lbuilder.setProcessor();
};


//---------------Using

var tripBuilder = new TripLaptopBuilder();
var gamingLaptopBuilder = new GamingLaptopBuilder();
var shopForYou = new BuyLaptop();

shopForYou.setLaptopBuilder(gamingLaptopBuilder);
shopForYou.consrtuctLaptop();

var laptop = shopForYou.getLaptop();
console.log(laptop.toString());









