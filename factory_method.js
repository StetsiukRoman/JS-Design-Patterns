function Log4NetLogger () {	
}

Log4NetLogger.prototype.logMessage = function(message) {
	console.log("Log4Net ", message);
};
function EnterpriseLogger () {	
}

EnterpriseLogger.prototype.logMessage = function(message) {
	console.log("Enterprise ", message);
};

function LoggerProviderFactory () {
}

LoggerProviderFactory.getLoggingProvider = function(logProvider) {
	switch (logProvider){
		case 0:
			return new EnterpriseLogger()
			break;
		case 1:
			return new Log4NetLogger()
			break;
		default:
			return new EnterpriseLogger()
	}
};

//--------------Using

var providerType = 1
var logger = LoggerProviderFactory.getLoggingProvider(providerType);
logger.logMessage("factory method design pattern");
