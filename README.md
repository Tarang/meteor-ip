**Meteor IP**

Meteor-IP lets you get your user's IP address and/or browser headers.

**Installation**

    mrt add ip
    
**Usage (Server side)**

    //Use this.userId or any other userId
    var userdata = new GetClient(this.userId);
    
    userdata.ip_address;
    => 23.23.23.23
    
    userdata.user_agent;
    => "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36"
    
    user.headers
    => all headers in an object
    
**Limitations**:

You can only get stuff off a currently active user.
