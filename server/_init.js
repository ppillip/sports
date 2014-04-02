/*
 실행순서 : 공통 파트 -> 서버 파트 -> startup();
 */

console.log("### OUTSIDE SERVER STARTUP");

Meteor.startup(function () {

    console.log("### INSIDE SERVER STARTUP");
    /*
     운영 // 테스트
     if(실행모드==='테스트') 일때로 테스트 코드를 정의.
     */
    실행모드 = '테스트';


    console.log('#############################################');
    console.log('################## 시작 ##################');
    console.log('############ 실행모드 : ' + 실행모드 + '##################');
    console.log('#############################################');

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


    /*
     초기 생성값. 절대 지우면 안됨.
     */

    //--- 사이트 기본 셋팅 ---//
    if (스포츠세팅.find().count() !== 1) {
        var 임시스키마 = sportsSchema.getSchema('스포츠세팅');
        임시스키마.프로그램명 = 'Sports';

        스포츠세팅.insert(임시스키마);
    }

    if (실행모드 === '테스트') {
        //하나라도 없으면 전체 테스트값 초기화.
        if (총판.find().count() === 0 || 매장.find().count() === 0 || 회원.find().count() === 0) {
            총판.remove({});
            매장.remove({});
            회원.remove({});
        }
    }

    //--- 관리자 최초 생성 ---//
    ddd = 회원.find({아이디: '관리자'}).fetch();
//    console.log('result : ', 회원.find({아이디: '관리자'}));
    if (!회원.find({아이디: '관리자'})) {
        var 임시스키마 = sportsSchema.getSchema('회원');

        임시스키마.아이디 = '관리자';
        임시스키마.비밀번호 = '관리자';
        임시스키마.출금계좌번호 = '관리자';
        임시스키마.이름 = '관리자';
        임시스키마.별명 = '관리자';
        임시스키마.휴대폰 = '010-0000-0000';
        임시스키마.레벨 = '9';
        임시스키마.보유금액 = '';
        임시스키마.보유포인트 = ' ';
        임시스키마.가입IP = '';
        임시스키마.가입일시 = new Date();
        임시스키마.은행계좌번호 = '';
        임시스키마.은행명 = '';
        임시스키마.은행계좌주명 = '';
        임시스키마.최종접속일시 = new Date();
        임시스키마.메모 = '';
        임시스키마.간단메모 = '';
        임시스키마.회원종류 = '관리자';
        임시스키마.소속매장_id = '관리자';
        회원.insert(임시스키마);
    }


    if (실행모드 === '테스트') {
        var 임시총판_id = new Array();
        var 임시매장_id = new Array();

        //--- 총판 테스트를 위한 초기값 ---
        if (총판.find().count() === 0) {

            var 임시스키마 = sportsSchema.getSchema('총판');

            for (var i = 0; i < 10; i++) {
                임시스키마.아이디 = '총판ID' + i;
                임시스키마.비밀번호 = '총판PW' + i;
                임시스키마.이름 = '총판 이름' + i;
                임시스키마.별명 = '총판 별명' + i;
                임시스키마.휴대폰 = '총판 010-1111-222' + i;
                임시스키마.레벨 = '' + i;
                임시스키마.가입IP = '127.0.0.' + i;
                임시스키마.가입일시 = new Date();
                임시스키마.은행계좌번호 = 'xxx-xxx-xxx-xx' + i;
                임시스키마.은행명 = '신한';
                임시스키마.은행계좌주명 = 임시스키마.이름;
                임시스키마.정산방식 = '당첨액기준';
                임시스키마.정산비율 = '20';
                임시스키마.회원승인가능여부 = '아니오';
                임시스키마.게시판관리가능여부 = '아니오';
                임시스키마.전체회원조회가능여부 = '아니오';
                임시총판_id.push(총판.insert(임시스키마));
            }
        }

//--- 매장 테스트를 위한 초기값 ---//
        if (매장.find().count() === 0) {
            var 임시스키마 = sportsSchema.getSchema('매장');

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
                임시스키마.정산방식 = '당첨액기준';
                임시스키마.정산비율 = '20';
                임시스키마.회원승인가능여부 = '아니오';
                임시스키마.게시판관리가능여부 = '아니오';
                임시스키마.전체회원조회가능여부 = '아니오';
                임시스키마.소속총판_id = 임시총판_id[i % 10];
                임시매장_id.push(매장.insert(임시스키마));
            }
        }

        //--- 회원 테스트를 위한 초기값 ---//
        if (회원.find().count() === 1) {
            var 임시스키마 = sportsSchema.getSchema('회원');

            for (var i = 0; i < 50; i++) {
                임시스키마.아이디 = '회원ID' + i;
                임시스키마.비밀번호 = '회원PW' + i;
                임시스키마.출금계좌번호 = '출금계좌번호' + i;
                임시스키마.이름 = '회원 이름' + i;
                임시스키마.별명 = '회원 별명' + i;
                임시스키마.휴대폰 = '010-0000-000' + i;
                임시스키마.레벨 = '' + i;
                임시스키마.보유금액 = '' + i;
                임시스키마.보유포인트 = '' + i;
                임시스키마.가입IP = '127.0.0.' + i;
                임시스키마.가입일시 = new Date();
                임시스키마.은행계좌번호 = '000-000-000-00' + i;
                임시스키마.은행명 = '씨티';
                임시스키마.은행계좌주명 = 임시스키마.이름;
                임시스키마.최종접속일시 = new Date();
                임시스키마.메모 = '메모메모';
                임시스키마.간단메모 = '간단메모메모메모';
                if ((i % 10 === 0)) {
                    //운영용 아이디
                    임시스키마.회원종류 = '관리';
                    임시스키마.소속매장_id = '관리자';
                }
                else {
                    //일반 회원
                    임시스키마.회원종류 = '일반';
                    임시스키마.소속매장_id = 임시매장_id[i % 10];
                }

                회원.insert(임시스키마);
            }
        }
    }


});


