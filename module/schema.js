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
        name : 'agencies'
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
        name : 'branches'
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
        name : 'users'
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
        name : 'userMoneyLogs'
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
        name : 'userPointLogs'
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
        name : 'gameCategoryEvents'
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
        name : 'gameCategoryLeagues'
        ,definition : {
            "name" : "게임 카테고리 중분류"
            ,"desc" : "리그명 (MLB / NBA)"
            ,"properties" : [
                 { "key"   : {"name" : "image"              },"value" : {"type" : "object" , "default":null , "desc" : "리그 이미지 (공모양 / 깃발 등)" }}
                ,{ "key"   : {"name" : "name"               },"value" : {"type" : "string" , "default":'' , "desc" : "리그명" }}
                ,{ "key"   : {"name" : "schema_game_category_event_id"  },"value" : {"type" : "string" , "default":'' , "desc" : "상위 대분류(종목명) _id" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }
            ]
        }
    }
    ,{
        name : 'createdGames'
        ,definition : {
            "name" : "생성된 게임 정보"
            ,"desc" : "관리자에 의해 생성된 게임 정보. 리그명 _id 키를 포함한다. 게임 사전 정보만 가지고 있다."
            ,"properties" : [
                 { "key"   : {"name" : "start_date_time"            },"value" : {"type" : "object" , "default":null , "desc" : "게임시작일시" }}
                ,{ "key"   : {"name" : "finish_date_time"           },"value" : {"type" : "object" , "default":null , "desc" : "게임종료일시" }}
                ,{ "key"   : {"name" : "created_date_time"          },"value" : {"type" : "object" , "default":null , "desc" : "" }}
                ,{ "key"   : {"name" : "game_type"                  },"value" : {"type" : "string" , "default":'' , "desc" : "게임 타입 코드 (승무패/핸디캡/언더오버)" }}
                ,{ "key"   : {"name" : "board_type"                 },"value" : {"type" : "string" , "default":'' , "desc" : "게시 장소 코드 (승무패/핸디캡/스페셜 등 게시 될 게시판명)" }}
                ,{ "key"   : {"name" : "home_team_name"             },"value" : {"type" : "string" , "default":'' , "desc" : "홈팀명" }}
                ,{ "key"   : {"name" : "away_team_name"             },"value" : {"type" : "string" , "default":'' , "desc" : "원정팀명" }}
                ,{ "key"   : {"name" : "rate_home_win"              },"value" : {"type" : "string" , "default":'' , "desc" : "홈팅승 배당율" }}
                ,{ "key"   : {"name" : "rate_away_win"              },"value" : {"type" : "string" , "default":'' , "desc" : "원정팀승 배당율" }}
                ,{ "key"   : {"name" : "rate_draw_win"              },"value" : {"type" : "string" , "default":'' , "desc" : "무승부 배당율" }}
                ,{ "key"   : {"name" : "is_showed_on_board"         },"value" : {"type" : "string" , "default":'' , "desc" : "게임 게시판에 게시할지 여부 true/false" }}
                ,{ "key"   : {"name" : "is_canceled"                },"value" : {"type" : "string" , "default":'' , "desc" : "취소되었는지 여부 true/false (삭제와 다름)" }}
                ,{ "key"   : {"name" : "schema_game_category_league_id"},"value" : {"type" : "string" , "default":'' , "desc" : "소속된 리그의 _id" }}
                ,{
                    "key"   : {"name" : "tmp"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
                }
            ]
        }
    }
    ,{
        /*
         게임 종료 전 베팅 중인 게임의 폴더 단위의 로그.
         게임 종료시 아직 게임 종료가 되지 않은 폴더를 대상으로 게임 결과를 입력 하고,
         폴더 전체게임의 게임이 종료시 폴더 종료를 저장하고 해당 배당금을 지급하고 로그를 기록한다.
         (게임 성공 시 배당금을 지급하고, 게임 실패 시 게임실패 보너스 포인트를 지급한다.)

         (검색 퍼포먼스 문제시 차선책 : 유저정보와 게임정보를 모두 포함하고 있으며, 게임 종료 시 (폴더의 마지막 게임이 종료 될 시) 해당 폴더 전체를 종료 게임 로그로 넘긴다.)
          */

        name : 'bettingGameLogs'
        ,definition : {
            "name" : "베팅 게임 로그"
            ,"desc" : "유저+생성된게임 으로 베팅된 게임 로그. 결과입력시 결과"
            ,"properties" : [
                { "key"   : {"name" : "schema_user_id"},"value" : {"type" : "string" , "default":'' , "desc" : "베팅한 유저의 _id" }}
                ,{ "key"   : {"name" : "field"},"value" : {"type" : "string" , "default":'' , "desc" : "" }}
                ,{
                    "key"   : {"name" : "schema_created_folder"},"value" : {"type" : "array" , "default":[] , ref:"schema_created_game", "desc" : "폴더에 선택된 게임 정보들이 array형태로 들어감. 1-10개." }
                }
            ]
        }
    }
    ,{
        name : 'sportsSettings'
        ,definition : {
            "name" : "설정정보"
            ,"desc" : "게임 진행에 필요한 전반적인 셋팅들을 저장"
            ,"properties" : [
                { "key"   : {"name" : "title"},"value" : {"type" : "string" , "default":'' , "desc" : "타이틀에 표시되는 이름, 회사 상호" }}
                ,{ "key"   : {"name" : "point_sign_up"},"value" : {"type" : "string" , "default":'' , "desc" : "포인트설정 - 가입 P" }}
                ,{ "key"   : {"name" : "point_log_in"},"value" : {"type" : "string" , "default":'' , "desc" : "포인트설정 - 로그인 P" }}
                ,{ "key"   : {"name" : "point_writing"},"value" : {"type" : "string" , "default":'' , "desc" : "포인트설정 - 글작성 P" }}
                ,{ "key"   : {"name" : "point_comment"},"value" : {"type" : "string" , "default":'' , "desc" : "포인트설정 - 덧글작성 P" }}
                ,{ "key"   : {"name" : "point_betting"},"value" : {"type" : "string" , "default":'' , "desc" : "포인트설정 - 베팅 %" }}
                ,{ "key"   : {"name" : "point_recommend"},"value" : {"type" : "string" , "default":'' , "desc" : "포인트설정 - 추천인 %" }}
                ,{ "key"   : {"name" : "point_firstDeposit"},"value" : {"type" : "string" , "default":'' , "desc" : "포인트설정 - 첫입금 %" }}
                ,{ "key"   : {"name" : "point_writing_limit"},"value" : {"type" : "string" , "default":'' , "desc" : "글쓰기 포인트 제한 - 글쓰기수제한" }}
                ,{ "key"   : {"name" : "point_comment_limit"},"value" : {"type" : "string" , "default":'' , "desc" : "글쓰기 포인트 제한 - 댓글수제한" }}
                ,{ "key"   : {"name" : "point_game_failed"},"value" : {"type" : "string" , "default":'' , "desc" : "미당첨 포인트" }}
                ,{ "key"   : {"name" : "betting_normal_range_min"},"value" : {"type" : "string" , "default":'' , "desc" : "일반 베팅 최저 제한액" }}
                ,{ "key"   : {"name" : "betting_normal_range_max"},"value" : {"type" : "string" , "default":'' , "desc" : "일반 베팅 최고 제한액" }}
                ,{ "key"   : {"name" : "betting_special_range_min"},"value" : {"type" : "string" , "default":'' , "desc" : "스페셜 베팅 최저 제한액" }}
                ,{ "key"   : {"name" : "betting_special_range_max"},"value" : {"type" : "string" , "default":'' , "desc" : "스페셜 베팅 최고 제한액" }}
                ,{ "key"   : {"name" : "betting_folder_max_limit"},"value" : {"type" : "string" , "default":'' , "desc" : "베팅 폴더 조합 제한" }}
                ,{ "key"   : {"name" : "betting_reward_max_limit"},"value" : {"type" : "string" , "default":'' , "desc" : "최고 배당액 설정" }}
                ,{ "key"   : {"name" : "withdraw_min_limit"},"value" : {"type" : "string" , "default":'' , "desc" : "최저 출금액" }}
                ,{ "key"   : {"name" : "deposit_min_limit"},"value" : {"type" : "string" , "default":'' , "desc" : "최저 입금액" }}
                ,{ "key"   : {"name" : "deposit_account_level_0"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 입금 계좌" }}
                ,{ "key"   : {"name" : "deposit_account_level_1"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 입금 계좌" }}
                ,{ "key"   : {"name" : "deposit_account_level_2"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 입금 계좌" }}
                ,{ "key"   : {"name" : "deposit_account_level_3"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 입금 계좌" }}
                ,{ "key"   : {"name" : "deposit_account_level_4"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 입금 계좌" }}
                ,{ "key"   : {"name" : "deposit_account_level_5"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 입금 계좌" }}
                ,{ "key"   : {"name" : "deposit_account_level_6"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 입금 계좌" }}
                ,{ "key"   : {"name" : "deposit_account_level_7"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 입금 계좌" }}
                ,{ "key"   : {"name" : "deposit_account_level_8"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 입금 계좌" }}
                ,{ "key"   : {"name" : "deposit_account_level_9"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 입금 계좌" }}
                ,{ "key"   : {"name" : "point_auto_transmit"},"value" : {"type" : "string" , "default":'' , "desc" : "포인트 자동 전환 가능 여부 true/false" }}
                ,{ "key"   : {"name" : "point_transmit"},"value" : {"type" : "string" , "default":'' , "desc" : "포인트 전환 가능 여부 true/false" }}
                ,{ "key"   : {"name" : "point_transmit_range_min"},"value" : {"type" : "string" , "default":'' , "desc" : "포인트 전환 가능시 최저 제한. 0일시 무제한" }}
                ,{ "key"   : {"name" : "point_transmit_range_max"},"value" : {"type" : "string" , "default":'' , "desc" : "포인트 전환 가능시 최고 제한. 0일시 무제한" }}
                ,{ "key"   : {"name" : "betting_cancel_type"},"value" : {"type" : "string" , "default":'' , "desc" : "NO (취소 안됨) / BEFORE_FINISH (게임 시작 전)" }}
                ,{ "key"   : {"name" : "betting_cancel_point"},"value" : {"type" : "string" , "default":'' , "desc" : "배팅 취소 포인트 P" }}
                ,{ "key"   : {"name" : "betting_cancel_day_limit_level_0"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 베팅 취소 일일 제한" }}
                ,{ "key"   : {"name" : "betting_cancel_day_limit_level_1"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 베팅 취소 일일 제한" }}
                ,{ "key"   : {"name" : "betting_cancel_day_limit_level_2"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 베팅 취소 일일 제한" }}
                ,{ "key"   : {"name" : "betting_cancel_day_limit_level_3"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 베팅 취소 일일 제한" }}
                ,{ "key"   : {"name" : "betting_cancel_day_limit_level_4"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 베팅 취소 일일 제한" }}
                ,{ "key"   : {"name" : "betting_cancel_day_limit_level_5"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 베팅 취소 일일 제한" }}
                ,{ "key"   : {"name" : "betting_cancel_day_limit_level_6"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 베팅 취소 일일 제한" }}
                ,{ "key"   : {"name" : "betting_cancel_day_limit_level_7"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 베팅 취소 일일 제한" }}
                ,{ "key"   : {"name" : "betting_cancel_day_limit_level_8"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 베팅 취소 일일 제한" }}
                ,{ "key"   : {"name" : "betting_cancel_day_limit_level_9"},"value" : {"type" : "string" , "default":'' , "desc" : "레벨별 베팅 취소 일일 제한" }}
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

