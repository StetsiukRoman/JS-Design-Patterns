//function for  inheritance
function extend(Child, Parent){
	function F(){};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
}


//Base class for Bears
function AbsBear(name){this.name = name;}

//Base class for Cats
function AbsCat(name){this.name = name;}

//Base factory
function IFactory(){}

IFactory.prototype.getBear = function() {
	return new AbsBear();
};

IFactory.prototype.getCat = function() {
	return new AbsCat();
};

//Teddy family
function TeddyBear(){
	AbsBear.call(this,"Teddy Bear");
};
extend(TeddyBear, AbsBear);

function TeddyCat(){
	AbsCat.call(this,"Teddy Cat");
};
extend(TeddyCat, AbsCat);

function WoodenBear(){
	AbsBear.call(this, "Wooden Bear");
};
extend(WoodenBear, AbsBear);

function WoodenCat(){
	AbsCat.call(this, "Wooden Cat");
};
extend(WoodenCat, AbsCat);



//Concrete factory for teddy toys
function TeddyToysFactory(){}
extend(TeddyToysFactory, IFactory);
TeddyToysFactory.prototype.getBear = function(){
	return new TeddyBear();
};

TeddyToysFactory.prototype.getCat = function(){
	return new TeddyCat();
};

//Concrete factory for Wooden toys
function WoodenToysFactory(){}
extend(WoodenToysFactory, IFactory);
WoodenToysFactory.prototype.getBear = function(){
	return new WoodenBear();
};

WoodenToysFactory.prototype.getCat = function(){
	return new WoodenCat();
};



//-------------Using----------------

var toyFactory = new WoodenToysFactory();
var bear = new toyFactory.getBear();
var cat = new toyFactory.getCat();

console.log("bear: " + bear.name + " cat: " + cat.name);







