Meteor.publish('스포츠세팅', function() {
    return 스포츠세팅.find();
});

Meteor.publish('총판', function() {
    return 총판.find();
});

Meteor.publish('게임카테고리종목', function() {
    return 게임카테고리종목.find();
});

Meteor.publish('매장', function() {
    return 매장.find();
});

Meteor.publish('회원', function() {
   return 회원.find();
});