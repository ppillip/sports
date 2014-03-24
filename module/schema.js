sportsSchema =
{
    getSchema : function (name,pre){
        var ext = pre || {};
        var rtn = {};
        (_.findWhere(schema,{name:name})).definition.properties.forEach(function(x){
            rtn[x.key.name] = x.value.default;
        });
        return _.extend(rtn,ext);
    }

};

schema = [
    {
        name : 'agency'
        ,definition : {
        "name" : "agency"
        ,"desc" : "총판. 매장을 소유하고 있음. (매장에 총판 키가 있음.)"
        ,"properties" : [
            { "key"   : {"name" : "agency_id"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 ID" }}
            ,{ "key"   : {"name" : "agency_pw"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 PW" }}
            ,{ "key"   : {"name" : "agency_name"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 이름" }}
            ,{ "key"   : {"name" : "agency_nick_name"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 별명 (사용 미정)" }}
            ,{ "key"   : {"name" : "agency_cellphone"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 휴대폰" }}
            ,{ "key"   : {"name" : "agency_level"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 등급" }}
            ,{ "key"   : {"name" : "agency_sign_up_ip"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 가입 IP" }}
            ,{ "key"   : {"name" : "agency_sign_up_datetime"},"value" : {"type" : "object" , "default":null , "desc" : "총판 가입 일시" }}
            ,{ "key"   : {"name" : "agency_bank_account"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 계좌번호" }}
            ,{ "key"   : {"name" : "agency_bank_name"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 계좌은행명" }}
            ,{ "key"   : {"name" : "agency_bank_owner_name"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 계좌주명" }}
            ,{
                "key"   : {"name" : "tmp"}
                ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
            }

        ]
    }}
    ,{
        name : 'branch'
        ,definition : {
            "name" : "branch"
            ,"desc" : "매장"
            ,"properties" : [
                { "key"   : {"name" : "branch_id"},"value" : {"type" : "string" , "default":'' , "desc" : "매장 ID" }}
                ,{ "key"   : {"name" : "branch_pw"},"value" : {"type" : "string" , "default":'' , "desc" : "매장 PW" }}
                ,{ "key"   : {"name" : "branch_name"},"value" : {"type" : "string" , "default":'' , "desc" : "매장 이름" }}
                ,{ "key"   : {"name" : "branch_nick_name"},"value" : {"type" : "string" , "default":'' , "desc" : "매장 별명 (사용 미정)" }}
                ,{ "key"   : {"name" : "branch_cellphone"},"value" : {"type" : "string" , "default":'' , "desc" : "매장 휴대폰" }}
                ,{ "key"   : {"name" : "branch_level"},"value" : {"type" : "string" , "default":'' , "desc" : "매장 등급" }}
                ,{ "key"   : {"name" : "branch_sign_up_datetime"},"value" : {"type" : "object" , "default":null , "desc" : "매장 가입일시" }}
                ,{ "key"   : {"name" : "branch_sign_up_ip"},"value" : {"type" : "string" , "default":'' , "desc" : "매장 가입 IP" }}
                ,{ "key"   : {"name" : "branch_bank_account"},"value" : {"type" : "string" , "default":'' , "desc" : "매장 계좌번호" }}
                ,{ "key"   : {"name" : "branch_bank_name"},"value" : {"type" : "string" , "default":'' , "desc" : "매장 계좌은행명" }}
                ,{ "key"   : {"name" : "branch_bank_owner_name"},"value" : {"type" : "string" , "default":'' , "desc" : "매장 계좌주명" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }

            ]
        }}
    ,{
        name : 'user'
        ,definition : {
            "name" : "user"
            ,"desc" : "일반 사용자"
            ,"properties" : [
                { "key"   : {"name" : "user_id"},"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{ "key"   : {"name" : "user_pw"},"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{ "key"   : {"name" : "user_withdraw_pw"},"value" : {"type" : "string" , "default":'' , "desc" : "사용자 출금 비밀번호" }}
                ,{ "key"   : {"name" : "user_name"},"value" : {"type" : "string" , "default":'' , "desc" : "사용자 명" }}
                ,{ "key"   : {"name" : "user_cellphone"},"value" : {"type" : "string" , "default":'' , "desc" : "사용자 전화번호" }}
                ,{ "key"   : {"name" : "user_level"},"value" : {"type" : "string" , "default":'' , "desc" : "사용자 등급" }}
                ,{ "key"   : {"name" : "user_money"},"value" : {"type" : "string" , "default":'' , "desc" : "사용자 보유 금액" }}
                ,{ "key"   : {"name" : "user_point"},"value" : {"type" : "string" , "default":'' , "desc" : "사용자 보유 포인트" }}
                ,{ "key"   : {"name" : "user_sign_up_datetime"},"value" : {"type" : "object" , "default":null , "desc" : "사용자 가입 일시" }}
                ,{ "key"   : {"name" : "user_sign_up_ip"},"value" : {"type" : "string" , "default":'' , "desc" : "사용자 가입 IP" }}
                ,{ "key"   : {"name" : "user_bank_account"},"value" : {"type" : "string" , "default":'' , "desc" : "사용자 은행 계좌 번호" }}
                ,{ "key"   : {"name" : "user_bank_name"},"value" : {"type" : "string" , "default":'' , "desc" : "사용자 은행 명" }}
                ,{ "key"   : {"name" : "user_bank_owner_name"},"value" : {"type" : "string" , "default":'' , "desc" : "사용자 은행 계좌주명" }}
                ,{ "key"   : {"name" : "user_last_login_datetime"},"value" : {"type" : "object" , "default":null , "desc" : "description" }}
                ,{ "key"   : {"name" : "user_memo"},"value" : {"type" : "string" , "default":'' , "desc" : "사용자 메모" }}
                ,{ "key"   : {"name" : "user_simple_memo"},"value" : {"type" : "string" , "default":'' , "desc" : "사용자 간단 메모" }}
                ,{ "key"   : {"name" : "user_branch_id"},"value" : {"type" : "string" , "default":'' , "desc" : "사용자 소속 매장 _id. 총판에 바로 소속은 불가." }}
            ]
        }}
    ,{
        name : 'user_money_log'
        ,definition : {
            "name" : "user_money_log"
            ,"desc" : "사용자 입출금 로그"
            ,"properties" : [
                { "key"   : {"name" : "user_money_user_id"},"value" : {"type" : "string" , "default":'' , "desc" : "로그 사용자 ID" }}
                ,{ "key"   : {"name" : "user_money_status"},"value" : {"type" : "string" , "default":'' , "desc" : "user 테이블의 user_money 필드에 입/출금을 할 시 다음의 각 영문명으로 거래 상태 표시 : deposit(입금) / withdraw(출금) / admin_deposit(관리자 강제입금) / admin_withdraw(관리자 강제출금)" }}
                ,{ "key"   : {"name" : "user_money_trans_amount"},"value" : {"type" : "string" , "default":'' , "desc" : "거래 금액" }}
                ,{ "key"   : {"name" : "user_money_expected_valance"},"value" : {"type" : "string" , "default":'' , "desc" : "예상 거래 후 잔액" }}
                ,{ "key"   : {"name" : "user_money_event_name"},"value" : {"type" : "string" , "default":'' , "desc" : "이벤트로 인한 거래 시 이벤트 명" }}
                ,{ "key"   : {"name" : "user_money_request_datetime"},"value" : {"type" : "object" , "default":null , "desc" : "거래 요청 일시. 거래 완료 시에 실제 입금 출금 등이 이루어짐." }}
                ,{ "key"   : {"name" : "user_money_finish_datetime"},"value" : {"type" : "object" , "default":null , "desc" : "거래 완료 일시. 거래 요청이 들어왔을 때, 관리자가 처리 후 확인을 해주었을 때 셋팅. 본 필드 삽입 후 user 콜렉션에 실제 금액 셋팅. (본 필드가 null 이면 아직 진행중인 요청임) " }}
                ,{ "key"   : {"name" : "user_trans_domain"},"value" : {"type" : "string" , "default":'' , "desc" : "거래 요청 도메인. 유저 관리 목적으로 유저 레벨별로 도메인 분리 시 어디로 요청된 도메인인지 로그 구분하기 위한 필드." }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }

            ]
        }}
    ,{
        name : 'user_point_log'
        ,definition : {
            "name" : "user_point_log"
            ,"desc" : "사용자 입출금 로그"
            ,"properties" : [
                { "key"   : {"name" : "user_point_user_id"},"value" : {"type" : "string" , "default":'' , "desc" : "로그 사용자 ID" }}
                ,{ "key"   : {"name" : "user_point_status"},"value" : {"type" : "string" , "default":'' , "desc" : "user 테이블의 user_point 필드에 입/출금을 할 시 다음의 각 영문명으로 거래 상태 표시 : deposit(입금) / withdraw(출금) / admin_deposit(관리자 강제입금) / admin_withdraw(관리자 강제출금)" }}
                ,{ "key"   : {"name" : "user_point_trans_amount"},"value" : {"type" : "string" , "default":'' , "desc" : "거래 금액" }}
                ,{ "key"   : {"name" : "user_point_expected_valance"},"value" : {"type" : "string" , "default":'' , "desc" : "예상 거래 후 잔액" }}
                ,{ "key"   : {"name" : "user_point_event_name"},"value" : {"type" : "string" , "default":'' , "desc" : "이벤트로 인한 거래 시 이벤트 명" }}
                ,{ "key"   : {"name" : "user_point_request_datetime"},"value" : {"type" : "object" , "default":null , "desc" : "거래 요청 일시. 거래 완료 시에 실제 입금 출금 등이 이루어짐." }}
                ,{ "key"   : {"name" : "user_point_finish_datetime"},"value" : {"type" : "object" , "default":null , "desc" : "거래 완료 일시. 거래 요청이 들어왔을 때, 관리자가 처리 후 확인을 해주었을 때 셋팅. 본 필드 삽입 후 user 콜렉션에 실제 금액 셋팅. (본 필드가 null 이면 아직 진행중인 요청임) " }}
                ,{ "key"   : {"name" : "user_trans_domain"},"value" : {"type" : "string" , "default":'' , "desc" : "거래 요청 도메인. 유저 관리 목적으로 유저 레벨별로 도메인 분리 시 어디로 요청된 도메인인지 로그 구분하기 위한 필드." }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }

            ]
        }}
    ,{
        name : 'user_point_log'
        ,definition : {
            "name" : "user_point_log"
            ,"desc" : "사용자 포인트 입출금 로그"
            ,"properties" : [
                { "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "tmp description" }}
                ,{ "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "description" }}
                ,{ "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "description" }}
                ,{ "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "description" }}
                ,{ "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "description" }}
                ,{ "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "description" }}
                ,{ "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "description" }}
                ,{ "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "description" }}
                ,{ "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "description" }}
                ,{ "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "description" }}
                ,{ "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "description" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }

            ]
        }}
    ,{
        name : 'schemaTmp'
        ,definition : {
            "name" : "agency"
            ,"desc" : "총판"
            ,"properties" : [
                { "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "tmp description" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }

            ]
        }}
    ,{
        name : 'schemaTmp'
        ,definition : {
            "name" : "agency"
            ,"desc" : "총판"
            ,"properties" : [
                { "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "tmp description" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }

            ]
        }}
    ,{
        name : 'schemaTmp'
        ,definition : {
            "name" : "agency"
            ,"desc" : "총판"
            ,"properties" : [
                { "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "tmp description" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }

            ]
        }}
    ,{
        name : 'schemaTmp'
        ,definition : {
            "name" : "agency"
            ,"desc" : "총판"
            ,"properties" : [
                { "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "tmp description" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }

            ]
        }}
    ,{
        name : 'schemaTmp'
        ,definition : {
            "name" : "agency"
            ,"desc" : "총판"
            ,"properties" : [
                { "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "tmp description" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }

            ]
        }}
    ,{
        name : 'schemaTmp'
        ,definition : {
            "name" : "agency"
            ,"desc" : "총판"
            ,"properties" : [
                { "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "tmp description" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }

            ]
        }}
    ,{
        name : 'schemaTmp'
        ,definition : {
            "name" : "agency"
            ,"desc" : "총판"
            ,"properties" : [
                { "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "tmp description" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }

            ]
        }}
    ,{
        name : 'schemaTmp'
        ,definition : {
            "name" : "agency"
            ,"desc" : "총판"
            ,"properties" : [
                { "key"   : {"name" : "tmp_id"},"value" : {"type" : "string" , "default":'' , "desc" : "tmp description" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }

            ]
        }}
];

//schema = [
//    {
//        name : 'test1'
//        ,definition : {
//        "name" : "테스트1"
//        ,"desc" : "첫번째 스키마라서 잘 봐둬야해요"
//        ,"properties" : [
//            {
//                "key"   : {"name" : "houseHeating0"}
//                ,"value" : {"type" : "float" , "default":0 , "desc" : "주택난방 판매량" }
//            }
//            ,{
//                "key"   : {"name" : "houseHeating1"}
//                ,"value" : {"type" : "float" , "default":1 , "desc" : "주택난방 판매량" }
//            }
//            ,{
//                "key"   : {"name" : "houseHeating2"}
//                ,"value" : {"type" : "float" , "default":2 , "desc" : "주택난방 판매량" }
//            }
//            ,{
//                "key"   : {"name" : "houseHeating3"}
//                ,"value" : {"type" : "float" , "default":3 , "desc" : "주택난방 판매량" }
//            }
//            ,{
//                "key"   : {"name" : "houseHeating4"}
//                ,"value" : {"type" : "float" , "default":4 , "desc" : "주택난방 판매량" }
//            }
//            ,{
//                "key"   : {"name" : "houseHeating5"}
//                ,"value" : {"type" : "float" , "default":5 , "desc" : "주택난방 판매량" }
//            }
//            ,{
//                "key"   : {"name" : "houseHeatingArray"}
//                ,"value" : {"type" : "array" , "default":[] , ref:"test2", "desc" : "주택난방 판매량" }
//            }
//        ]
//    }
//    }
//    ,{
//        name : 'test2'
//        ,definition : {
//            "name" : "테스트둘"
//            ,"desc" : "두번째 스키마는 참중요해요"
//            ,"properties" : [
//                {
//                    "key"   : {"name" : "houseHeating"}
//                    ,"value" : {"type" : "float" , "default":0 , "desc" : "주택난방 판매량" }
//                }
//                ,
//                {
//                    "key"   : {"name" : "houseHeating"}
//                    ,"value" : {"type" : "float" , "default":0 , "desc" : "주택난방 판매량" }
//                }
//            ]
//        }}
//];
//

