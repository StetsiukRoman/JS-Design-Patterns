var SingletonStatic =  (function() {
	var  Singleton={}, //singleton object for returning
			instance; // singleton instance

    //constructor for our Singleton 
	function SingletonClass() {}; 

	// function for returning singleton object
	Singleton.getInstance = function(){

		if (!instance) {
			instance = new SingletonClass();
		};
		return instance;
	}
	return Singleton;

})();
 

console.log( SingletonStatic.getInstance() === SingletonStatic.getInstance() );