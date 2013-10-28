GetClient = function(userId) {
	if(!(this instanceof BrowserData)) throw new Meteor.Meteor.Error(500, 'Not using the browserdata object properly', "not ok");

	this.ip_address = null;
	this.user_agent = null;

	try {
		for(var sessionid in Meteor.server.sessions) {
			if(Meteor.server.sessions[sessionid].userId === userId) {
				this.ip_address = Meteor.server.sessions[sessionid].socket.remoteAddress;
				this.user_agent = Meteor.server.sessions[sessionid].socket.headers['user-agent'];
				this.headers = Meteor.server.sessions[sessionid].socket.headers;
				break;
			}
		}
	}
	catch(e) {
		//console.log("This version of Meteor is not compatible");
		throw new Meteor.Meteor.Error(555, 'Meteor Version Not Compatible Error with Meteor-IP');
	}
}