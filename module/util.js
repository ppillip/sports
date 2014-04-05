콘솔 = function (obj) {
    console.log(obj);
};

cl = function(a){Meteor.call('cl',a);}

Meteor.methods({'cl' : function(msg){ console.log(msg);}});
