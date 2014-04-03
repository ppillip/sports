Meteor.publish('스포츠세팅', function() {
    return 스포츠세팅.find();
});

Meteor.publish('총판매장', function() {
    return 총판매장.find();
});

Meteor.publish('게임카테고리종목', function() {
    return 게임카테고리종목.find();
});

Meteor.publish('회원', function() {
   return 회원.find();
});

Meteor.publish('관리자', function() {
    return 회원.find();
});