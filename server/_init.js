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
        var tmpSchema = sportsSchema.getSchema('agencies');

        for (var i = 0; i < 10; i++) {
            tmpSchema.id = 'agencyID' + i;
            tmpSchema.pw = 'agencyPW' + i;
            tmpSchema.name = 'agencyNAME' + i;
            tmpSchema.nick_name = 'agencyNickName' + i;
            tmpSchema.cellphone = 'agencyCellPhone' + i;
            tmpSchema.level = '' + i;
            tmpSchema.sign_up_ip = '127.0.0.' + i;
            tmpSchema.sign_up_date_time = new Date();
            tmpSchema.bank_account = 'xxx-xxx-xxx-xx' + i;
            tmpSchema.bank_name = '신한';
            tmpSchema.bank_owner_name = tmpSchema.name;
            tmpAgencies_id.push(Agencies.insert(tmpSchema));
        }
    }

//--- 매장 테스트를 위한 초기값 ---//
    if(Branches.find().count() === 0) {
        var tmpSchema = sportsSchema.getSchema('branches');

        for (var i = 0; i < 20; i++) {
            tmpSchema.id = 'agencyID' + i;
            tmpSchema.pw = 'agencyPW' + i;
            tmpSchema.name = 'agencyNAME' + i;
            tmpSchema.nick_name = 'agencyNickName' + i;
            tmpSchema.cellphone = 'agencyCellPhone' + i;
            tmpSchema.level = '' + i;
            tmpSchema.sign_up_ip = '127.0.0.' + i;
            tmpSchema.sign_up_date_time = new Date();
            tmpSchema.bank_account = '000-000-000-00' + i;
            tmpSchema.bank_name = '씨';
            tmpSchema.bank_owner_name = tmpSchema.name;
            tmpSchema.schema_agency_id = tmpAgencies_id[i%10];
            Branches.insert(tmpSchema);
        }
    }

});