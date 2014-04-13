
cl = function(a){Meteor.call('cl',a);}

Meteor.methods({'cl' : function(msg){ console.log(msg);}});

ClipStream = new Meteor.Stream('clip');
//clip 오류로 인한 재 커밋 위한 주석

