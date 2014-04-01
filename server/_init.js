/*
    테스트를 위한 초기값들 지정.
    삭제해도 문제 되지 않는 초기값만 여기에 선언할 것.
    (기본값이 필수로 필요한 부분은 fixtures.js 에 정의.
 */

Meteor.startup(function() {

    console.log("#############################################");
    console.log("################## started ##################");
    console.log("#############################################");


    /*

     console.log(connect);

     app.use(connect.multipart({
     limit: '1000mb'
     }));

     app.use(connect.bodyParser({
     limit: '1000mb'
     }));

     console.log(app);
     */

var tmpAgencies_id = new Array();

//--- 총판 테스트를 위한 초기값 ---//
    if(Agencies.find().count() === 0) {
        var 임시스키마 = sportsSchema.getSchema('agencies');

        for (var i = 0; i < 10; i++) {
            임시스키마.아이디 = '총판ID' + i;
            임시스키마.비밀번호 = '총판PW' + i;
            임시스키마.이름 = '총판 이름' + i;
            임시스키마.별명= '총판 별명' + i;
            임시스키마.휴대폰 = '총판 010-1111-222' + i;
            임시스키마.레벨 = '' + i;
            임시스키마.가입IP = '127.0.0.' + i;
            임시스키마.가입일시 = new Date();
            임시스키마.은행계좌번호 = 'xxx-xxx-xxx-xx' + i;
            임시스키마.은행명 = '신한';
            임시스키마.은행계좌주명 = 임시스키마.이름;
            tmpAgencies_id.push(Agencies.insert(임시스키마));
        }
    }

//--- 매장 테스트를 위한 초기값 ---//
    if(Branches.find().count() === 0) {
        var 임시스키마 = sportsSchema.getSchema('branches');

        for (var i = 0; i < 20; i++) {
            임시스키마.아이디 = '매장ID' + i;
            임시스키마.비밀번호 = '매장PW' + i;
            임시스키마.이름 = '매장 이름' + i;
            임시스키마.별명 = '매장 별명' + i;
            임시스키마.휴대폰 = '010-0000-000' + i;
            임시스키마.레벨 = '' + i;
            임시스키마.가입IP = '127.0.0.' + i;
            임시스키마.가입일시 = new Date();
            임시스키마.은행계좌번호 = '000-000-000-00' + i;
            임시스키마.은행명 = '씨티';
            임시스키마.은행계좌주명 = 임시스키마.이름;
            임시스키마.소속총판_id = tmpAgencies_id[i%10];
            Branches.insert(임시스키마);
        }
    }

});