var SingletonStatic =  (function() {
	var  Singleton={},
			instance;

	function SingletonStatic() {}; //constructor for our Singleton 

	Singleton.getInstance = function(){
		if (instance) {
			return instance;
		} else{
			instance = new SingletonStatic();
			return instance;
		};
	}
	return Singleton;


})();
 




console.log( SingletonStatic.getInstance() === SingletonStatic.getInstance() );