
cl = function(a){Meteor.call('cl',a);}

Meteor.methods({'cl' : function(msg){ console.log(msg);}});

ClipStream = new Meteor.Stream('clip');
