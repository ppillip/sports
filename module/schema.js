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
        name : 'schema_agency'
        ,definition : {
        "name" : "총판"
        ,"desc" : "매장을 소유하고 있음. (매장에 총판 키가 있음.)"
        ,"properties" : [
             { "key"   : {"name" : "id"              } , "value" : {"type" : "string" , "default":''   , "desc" : "총판 ID" }}
            ,{ "key"   : {"name" : "pw"              } , "value" : {"type" : "string" , "default":''   , "desc" : "총판 PW" }}
            ,{ "key"   : {"name" : "name"            } , "value" : {"type" : "string" , "default":''   , "desc" : "총판 이름" }}
            ,{ "key"   : {"name" : "nick_name"       } , "value" : {"type" : "string" , "default":''   , "desc" : "총판 별명 (사용 미정)" }}
            ,{ "key"   : {"name" : "cellphone"       } , "value" : {"type" : "string" , "default":''   , "desc" : "총판 휴대폰" }}
            ,{ "key"   : {"name" : "level"           } , "value" : {"type" : "string" , "default":''   , "desc" : "총판 등급" }}
            ,{ "key"   : {"name" : "sign_up_ip"      } , "value" : {"type" : "string" , "default":''   , "desc" : "총판 가입 IP" }}
            ,{ "key"   : {"name" : "sign_up_date_time"} , "value" : {"type" : "object" , "default":''   , "desc" : "총판 가입 일시" }}
            ,{ "key"   : {"name" : "bank_account"    } , "value" : {"type" : "string" , "default":''   , "desc" : "총판 계좌번호" }}
            ,{ "key"   : {"name" : "bank_name"       } , "value" : {"type" : "string" , "default":''   , "desc" : "총판 계좌은행명" }}
            ,{ "key"   : {"name" : "bank_owner_name" } , "value" : {"type" : "string" , "default":''   , "desc" : "총판 계좌주명" }}
            ,{ "key"   : {"name" : "tmp"                    } , "value" : {"type" : "array"  , "default":[]   , ref    : "tmp2", "desc" : "tmp" }
            }
        ]
    }}
    ,{
        name : 'schema_branch'
        ,definition : {
            "name" : "매장"
            ,"desc" : "총판에서 소유한 매장"
            ,"properties" : [
                 { "key"   : {"name" : "id"              } , "value" : {"type" : "string" , "default":'' , "desc" : "매장 ID" }}
                ,{ "key"   : {"name" : "pw"              } , "value" : {"type" : "string" , "default":'' , "desc" : "매장 PW" }}
                ,{ "key"   : {"name" : "name"            } , "value" : {"type" : "string" , "default":'' , "desc" : "매장 이름" }}
                ,{ "key"   : {"name" : "nick_name"       } , "value" : {"type" : "string" , "default":'' , "desc" : "매장 별명 (사용 미정)" }}
                ,{ "key"   : {"name" : "cellphone"       } , "value" : {"type" : "string" , "default":'' , "desc" : "매장 휴대폰" }}
                ,{ "key"   : {"name" : "level"           } , "value" : {"type" : "string" , "default":'' , "desc" : "매장 등급" }}
                ,{ "key"   : {"name" : "sign_up_date_time"} , "value" : {"type" : "object" , "default":{} , "desc" : "매장 가입일시" }}
                ,{ "key"   : {"name" : "sign_up_ip"      } , "value" : {"type" : "string" , "default":'' , "desc" : "매장 가입 IP" }}
                ,{ "key"   : {"name" : "bank_account"    } , "value" : {"type" : "string" , "default":'' , "desc" : "매장 계좌번호" }}
                ,{ "key"   : {"name" : "bank_name"       } , "value" : {"type" : "string" , "default":'' , "desc" : "매장 계좌은행명" }}
                ,{ "key"   : {"name" : "bank_owner_name" } , "value" : {"type" : "string" , "default":'' , "desc" : "매장 계좌주명" }}
                ,{ "key"   : {"name" : "schema_agency_id"              } , "value" : {"type" : "string" , "default":'' , "desc" : "소속된 총판 id" }} //_id값을 써야 하겠지?
            ]
        }}
    ,{
        name : 'schema_user'
        ,definition : {
            "name" : "사용자"
            ,"desc" : "일반 사용자"
            ,"properties" : [
                 { "key"   : {"name" : "id"                    } , "value" : {"type" : "string" , "default":'' , "desc" : ""   }}
                ,{ "key"   : {"name" : "pw"                    } , "value" : {"type" : "string" , "default":'' , "desc" : ""   }}
                ,{ "key"   : {"name" : "withdraw_pw"           } , "value" : {"type" : "string" , "default":'' , "desc" : "사용자 출금 비밀번호" }}
                ,{ "key"   : {"name" : "name"                  } , "value" : {"type" : "string" , "default":'' , "desc" : "사용자 명" }}
                ,{ "key"   : {"name" : "cellphone"             } , "value" : {"type" : "string" , "default":'' , "desc" : "사용자 전화번호" }}
                ,{ "key"   : {"name" : "level"                 } , "value" : {"type" : "string" , "default":'' , "desc" : "사용자 등급" }}
                ,{ "key"   : {"name" : "money"                 } , "value" : {"type" : "string" , "default":'' , "desc" : "사용자 보유 금액" }}
                ,{ "key"   : {"name" : "point"                 } , "value" : {"type" : "string" , "default":'' , "desc" : "사용자 보유 포인트" }}
                ,{ "key"   : {"name" : "sign_up_date_time"      } , "value" : {"type" : "object" , "default":{} , "desc" : "사용자 가입 일시" }}
                ,{ "key"   : {"name" : "sign_up_ip"            } , "value" : {"type" : "string" , "default":'' , "desc" : "사용자 가입 IP" }}
                ,{ "key"   : {"name" : "bank_account"          } , "value" : {"type" : "string" , "default":'' , "desc" : "사용자 은행 계좌 번호" }}
                ,{ "key"   : {"name" : "bank_name"             } , "value" : {"type" : "string" , "default":'' , "desc" : "사용자 은행 명" }}
                ,{ "key"   : {"name" : "bank_owner_name"       } , "value" : {"type" : "string" , "default":'' , "desc" : "사용자 은행 계좌주명" }}
                ,{ "key"   : {"name" : "last_login_date_time"   } , "value" : {"type" : "object" , "default":{} , "desc" : "description" }}
                ,{ "key"   : {"name" : "memo"                  } , "value" : {"type" : "string" , "default":'' , "desc" : "사용자 메모" }}
                ,{ "key"   : {"name" : "simple_memo"           } , "value" : {"type" : "string" , "default":'' , "desc" : "사용자 간단 메모" }}
                ,{ "key"   : {"name" : "schema_branch_id"             } , "value" : {"type" : "string" , "default":'' , "desc" : "사용자 소속 매장 _id. 총판에 바로 소속은 불가." }}
            ]
        }}
    ,{
        name : 'schema_user_money_log'
        ,definition : {
            "name" : "사용자 머니"
            ,"desc" : "사용자 머니 입출금 로그"
            ,"properties" : [
                 { "key"   : {"name" : "user_id"                    } , "value" : {"type" : "string" , "default":'' , "desc" : "로그 사용자 ID" }}
                ,{ "key"   : {"name" : "status"                     } , "value" : {"type" : "string" , "default":'' , "desc" : "user 테이블의 user_money 필드에 입/출금을 할 시 다음의 각 영문명으로 거래 상태 표시 : deposit(입금) / withdraw(출금) / admin_deposit(관리자 강제입금) / admin_withdraw(관리자 강제출금)" }}
                ,{ "key"   : {"name" : "trans_amount"               } , "value" : {"type" : "string" , "default":'' , "desc" : "거래 금액" }}
                ,{ "key"   : {"name" : "expected_valance"           } , "value" : {"type" : "string" , "default":'' , "desc" : "예상 거래 후 잔액" }}
                ,{ "key"   : {"name" : "event_name"                 } , "value" : {"type" : "string" , "default":'' , "desc" : "이벤트로 인한 거래 시 이벤트 명" }}
                ,{ "key"   : {"name" : "request_date_time"          } , "value" : {"type" : "object" , "default":null , "desc" : "거래 요청 일시. 거래 완료 시에 실제 입금 출금 등이 이루어짐." }}
                ,{ "key"   : {"name" : "finish_date_time"           } , "value" : {"type" : "object" , "default":null , "desc" : "거래 완료 일시. 거래 요청이 들어왔을 때, 관리자가 처리 후 확인을 해주었을 때 셋팅. 본 필드 삽입 후 user 콜렉션에 실제 금액 셋팅. (본 필드가 null 이면 아직 진행중인 요청임) " }}
                ,{ "key"   : {"name" : "transferred_domain"         } , "value" : {"type" : "string" , "default":'' , "desc" : "거래 요청 도메인. 유저 관리 목적으로 유저 레벨별로 도메인 분리 시 어디로 요청된 도메인인지 로그 구분하기 위한 필드." }}
            ]
        }}
    ,{
        name : 'schema_user_point_log'
        ,definition : {
            "name" : "사용자 포인트"
            ,"desc" : "사용자 포인트 입출금 로그"
            ,"properties" : [
                 { "key"   : {"name" : "user_id"                    } ,"value" : {"type" : "string" , "default":'' , "desc" : "로그 사용자 ID" }}
                ,{ "key"   : {"name" : "status"                     } ,"value" : {"type" : "string" , "default":'' , "desc" : "user 테이블의 user_point 필드에 입/출금을 할 시 다음의 각 영문명으로 거래 상태 표시 : deposit(입금) / withdraw(출금) / admin_deposit(관리자 강제입금) / admin_withdraw(관리자 강제출금)" }}
                ,{ "key"   : {"name" : "trans_amount"               } ,"value" : {"type" : "string" , "default":'' , "desc" : "거래 금액" }}
                ,{ "key"   : {"name" : "expected_valance"           } ,"value" : {"type" : "string" , "default":'' , "desc" : "예상 거래 후 잔액" }}
                ,{ "key"   : {"name" : "event_name"                 } ,"value" : {"type" : "string" , "default":'' , "desc" : "이벤트로 인한 거래 시 이벤트 명" }}
                ,{ "key"   : {"name" : "request_date_time"          } ,"value" : {"type" : "object" , "default":null , "desc" : "거래 요청 일시. 거래 완료 시에 실제 입금 출금 등이 이루어짐." }}
                ,{ "key"   : {"name" : "finish_date_time"           } ,"value" : {"type" : "object" , "default":null , "desc" : "거래 완료 일시. 거래 요청이 들어왔을 때, 관리자가 처리 후 확인을 해주었을 때 셋팅. 본 필드 삽입 후 user 콜렉션에 실제 금액 셋팅. (본 필드가 null 이면 아직 진행중인 요청임) " }}
                ,{ "key"   : {"name" : "transferred_domain"         } ,"value" : {"type" : "string" , "default":'' , "desc" : "거래 요청 도메인. 유저 관리 목적으로 유저 레벨별로 도메인 분리 시 어디로 요청된 도메인인지 로그 구분하기 위한 필드." }}
            ]
        }}
    ,{
        name : 'schema_money_status'
        ,definition : {
            "name" : "유저"
            ,"desc" : "총판"
            ,"properties" : [
                { "key"   : {"name" : "deposit"       } ,"value" : {"type" : "array" , "default":"" , ref:"", "desc" : "입금"         }}
               ,{ "key"   : {"name" : "withdraw"      } ,"value" : {"type" : "array" , "default":"" , ref:"", "desc" : "출금"         }}
               ,{ "key"   : {"name" : "admin_deposit" } ,"value" : {"type" : "array" , "default":"" , ref:"", "desc" : "관리자 강제입금" }}
               ,{ "key"   : {"name" : "admin_withdraw"} ,"value" : {"type" : "array" , "default":"" , ref:"", "desc" : "관리자 강제출금" }}
            ]
        }}
    ,{
        name : 'schema_game_category_event'
        ,definition : {
            "name" : "게임 카테고리 대분류"
            ,"desc" : "종목명 (축구/농구)"
            ,"properties" : [
                 { "key"   : {"name" : "image"          },"value" : {"type" : "object" , "default":null , "desc" : "종목 이미지 (공모양 / 깃발 등)" }}
                ,{ "key"   : {"name" : "name"           },"value" : {"type" : "string" , "default":'' , "desc" : "종목명" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }
            ]
        }}
    ,{
        name : 'schema_game_category_league'
        ,definition : {
            "name" : "게임 카테고리 중분류"
            ,"desc" : "리그명 (MLB / NBA)"
            ,"properties" : [
                 { "key"   : {"name" : "image"              },"value" : {"type" : "object" , "default":null , "desc" : "리그 이미지 (공모양 / 깃발 등)" }}
                ,{ "key"   : {"name" : "name"               },"value" : {"type" : "string" , "default":'' , "desc" : "리그명" }}
                ,{ "key"   : {"name" : "category_event_id"  },"value" : {"type" : "string" , "default":'' , "desc" : "상위 대분류(종목명) _id" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }
            ]
        }
    }
    ,{
        name : 'schema_created_game'
        ,definition : {
            "name" : "생성된 게임"
            ,"desc" : "관리자에 의해 생성된 게임 정보. 리그명 _id 키를 포함한다. 게임 사전 정보만 가지고 있다."
            ,"properties" : [
                 { "key"   : {"name" : "start_date_time"            },"value" : {"type" : "object" , "default":null , "desc" : "게임시작일시" }}
                ,{ "key"   : {"name" : "finish_date_time"           },"value" : {"type" : "object" , "default":null , "desc" : "게임종료일시" }}
                ,{ "key"   : {"name" : "created_date_time"          },"value" : {"type" : "object" , "default":null , "desc" : "" }}
                ,{ "key"   : {"name" : "game_type"                  },"value" : {"type" : "string" , "default":'' , "desc" : "게임 타입 코드 (승무패/핸디캡/언더오버)" }}
                ,{ "key"   : {"name" : "board_type"                 },"value" : {"type" : "string" , "default":'' , "desc" : "게시 장소 코드 (승무패/핸디캡/스페셜 등 게시 될 게시판명)" }}
                ,{ "key"   : {"name" : "home_team_name"             },"value" : {"type" : "string" , "default":'' , "desc" : "홈팀명" }}
                ,{ "key"   : {"name" : "away_team_name"             },"value" : {"type" : "string" , "default":'' , "desc" : "원정팀명" }}
                ,{ "key"   : {"name" : "rate_home_win"              },"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{ "key"   : {"name" : "rate_away_win"              },"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{ "key"   : {"name" : "rate_draw_win"              },"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{ "key"   : {"name" : "is_showed_on_board"         },"value" : {"type" : "string" , "default":'' , "desc" : "게임 게시판에 게시할지 여부 YES/NO" }}
                ,{ "key"   : {"name" : "is_canceled"                },"value" : {"type" : "string" , "default":'' , "desc" : "취소되었는지 여부 YES/NO (삭제와 다름)" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }
            ]
        }
    }
    ,{
        name : 'schema_betting_game_log'
        ,definition : {
            "name" : "베팅 게임 로그"
            ,"desc" : "유저+생성된게임 으로 베팅된 게임 로그. 결과입력시 결과"
            ,"properties" : [
                { "key"   : {"name" : "name"},"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{ "key"   : {"name" : "field"},"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }
            ]
        }
    }
    ,{
        name : 'schema_finished_game_log'
        ,definition : {
            "name" : "종료 게임 로그"
            ,"desc" : "schema_betting_game_log 에서 완료된 게임의 경우 "
            ,"properties" : [
                { "key"   : {"name" : "name"},"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{ "key"   : {"name" : "field"},"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }
            ]
        }
    }
    ,{
        name : 'schema_'
        ,definition : {
            "name" : ""
            ,"desc" : ""
            ,"properties" : [
                { "key"   : {"name" : "name"},"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{ "key"   : {"name" : "field"},"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }
            ]
        }
    }
    ,{
        name : 'schema_'
        ,definition : {
            "name" : ""
            ,"desc" : ""
            ,"properties" : [
                { "key"   : {"name" : "name"},"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{ "key"   : {"name" : "field"},"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }
            ]
        }
    }


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

