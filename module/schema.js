sportsSchema =
{
    getSchema: function (name, pre) {
        var ext = pre || {};
        var rtn = {};
        (_.findWhere(schema, {name: name})).definition.properties.forEach(function (x) {
            rtn[x.key.name] = x.value.default;
        });
        return _.extend(rtn, ext);
    }

};

schema =
    [
        {
            name: '관리자',
            definition: {
                'name': '관리자',
                'desc': '관리자 정보',
                'properties': [
                    { 'key': {'name': '아이디'}, 'value': {'type': 'string', 'default': '', 'desc': '아이디'}}
                    ,{ 'key': {'name': '비밀번호'}, 'value': {'type': 'string', 'default': '', 'desc': 'PW'}}
                    ,{ 'key': {'name': '이름'}, 'value': {'type': 'string', 'default': '', 'desc': '이름'}}
                    ,{ 'key': {'name': '닉네임'}, 'value': {'type': 'string', 'default': '', 'desc': '닉네임 (사용 미정)'}}
                    ,{ 'key': {'name': '전화번호'}, 'value': {'type': 'string', 'default': '', 'desc': '전화번호'}}
                    ,{ 'key': {'name': '레벨'}, 'value': {'type': 'string', 'default': '', 'desc': '등급'}}
                    ,{ 'key': {'name': '가입IP'}, 'value': {'type': 'string', 'default': '', 'desc': '가입 IP'}}
                    ,{ 'key': {'name': '가입일시'}, 'value': {'type': 'object', 'default': {}, 'desc': '가입 일시'}}
                    ,{ 'key': {'name': '최종접속일시'}, 'value': {'type': 'object', 'default': {}, 'desc': '최종접속일시'}}
                    ,{ 'key': {'name': '회원승인가능여부'}, 'value': {'type': 'string', 'default': '', 'desc': '네/아니오'}}
                    ,{ 'key': {'name': '게시판관리가능여부'}, 'value': {'type': 'string', 'default': '', 'desc': '네/아니오'}}
                    ,{ 'key': {'name': '전체회원조회가능여부'}, 'value': {'type': 'string', 'default': '', 'desc': '네/아니오'}}
                    ,{ 'key': {'name': '로그인횟수'}, 'value': {'type': 'string', 'default': '', 'desc': '로그인시 +1'}}
//                    ,{ 'key': {'name': '소속_id'}, 'value': {'type': 'string', 'default': '', 'desc': ''}}
                ]
            }
        }
        ,
        {
            name: "총판매장",
            definition: {
                "name": "총판매장",
                "desc": "총판과 매장. 소속_id가 없으면 총판",
                "properties": [
                    { "key": {"name": "아이디"}, "value": {"type": "string", "default": "", "desc": "아이디"}}
                    ,{ "key": {"name": "비밀번호"}, "value": {"type": "string", "default": "", "desc": "PW"}}
                    ,{ "key": {"name": "이름"}, "value": {"type": "string", "default": "", "desc": "이름"}}
                    ,{ "key": {"name": "닉네임"}, "value": {"type": "string", "default": "", "desc": "닉네임 (사용 미정)"}}
                    ,{ "key": {"name": "전화번호"}, "value": {"type": "string", "default": "", "desc": "전화번호"}}
                    ,{ "key": {"name": "레벨"}, "value": {"type": "string", "default": "", "desc": "등급"}}
                    ,{ "key": {"name": "가입IP"}, "value": {"type": "string", "default": "", "desc": "가입 IP"}}
                    ,{ "key": {"name": "가입일시"}, "value": {"type": "object", "default": {}, "desc": "가입 일시"}}
                    ,{ "key": {"name": "은행계좌번호"}, "value": {"type": "string", "default": "", "desc": "계좌번호"}}
                    ,{ "key": {"name": "은행명"}, "value": {"type": "string", "default": "", "desc": "계좌은행명"}}
                    ,{ "key": {"name": "은행계좌주명"}, "value": {"type": "string", "default": "", "desc": "계좌주명"}}
                    ,{ "key": {"name": "최종접속일시"}, "value": {"type": "object", "default": {}, "desc": "최종접속일시"}}
                    ,{ "key": {"name": "정산방식"}, "value": {"type": "string", "default": "", "desc": "베팅액기준/당첨액기준 (구메뉴 낙첨액 = 당첨액)"}}
                    ,{ "key": {"name": "정산비율"}, "value": {"type": "string", "default": "", "desc": "%"}}
					,{ "key": {"name": "회원승인가능여부"}, "value": {"type": "string", "default": "", "desc": "네/아니오"}}
                    ,{ "key": {"name": "게시판관리가능여부"}, "value": {"type": "string", "default": "", "desc": "네/아니오"}}
                    ,{ "key": {"name": "전체회원조회가능여부"}, "value": {"type": "string", "default": "", "desc": "네/아니오"}}
                    ,{ "key": {"name": "로그인횟수"}, "value": {"type": "string", "default": "", "desc": "로그인시 +1"}}
                    ,{ "key": {"name": "소속_id"}, "value": {"type": "string", "default": "", "desc": "소속된 총판의 _id"}}
                ]
            }
        }
        ,
        {
            /*
             { 아이디 : '관리자' }는 관리자.
             */
            name: '회원',
            definition: {
                'name': '회원',
                'desc': '일반 회원',
                'properties': [
                    { 'key': {'name': '아이디'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 아이디'}}
                    ,{ 'key': {'name': '비밀번호'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 비밀번호'}}
                    ,{ 'key': {'name': '출금비밀번호'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 출금 비밀번호'}}
                    ,{ 'key': {'name': '이름'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 이름'}}
                    ,{ 'key': {'name': '닉네임'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 닉네임'}}
                    ,{ 'key': {'name': '전화번호'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 전화번호'}}
                    ,{ 'key': {'name': '레벨'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 등급'}}
                    ,{ 'key': {'name': '보유금액'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 보유 금액'}}
                    ,{ 'key': {'name': '보유포인트'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 보유 포인트'}}
                    ,{ 'key': {'name': '가입IP'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 가입 IP'}}
                    ,{ 'key': {'name': '가입일시'}, 'value': {'type': 'object', 'default': {}, 'desc': '회원 가입 일시'}}
                    ,{ 'key': {'name': '은행계좌번호'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 은행 계좌 번호'}}
                    ,{ 'key': {'name': '은행명'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 은행 명'}}
                    ,{ 'key': {'name': '은행계좌주명'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 은행 계좌주명'}}
                    ,{ 'key': {'name': '최종접속일시'}, 'value': {'type': 'object', 'default': {}, 'desc': '최종접속일시'}}
                    ,{ 'key': {'name': '메모'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 메모'}}
                    ,{ 'key': {'name': '간단메모'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 간단 메모'}}
                    ,{ 'key': {'name': '회원종류'}, 'value': {'type': 'string', 'default': '', 'desc': '일반/운영'}}
                    ,{ 'key': {'name': '로그인횟수'}, 'value': {'type': 'string', 'default': '', 'desc': '로그인시 +1'}}
                    ,{ 'key': {'name': '소속매장_id'}, 'value': {'type': 'string', 'default': '', 'desc': '회원 소속 매장 _id. 총판에 바로 소속은 불가. (운영용 아이디의 경우는 "관리자"'}}
                ]
            }
        }
        ,
        {
            name: '회원머니로그',
            definition: {
                'name': '회원 머니',
                'desc': '회원 머니 입출금 로그',
                'properties': [
                    { 'key': {'name': '아이디'}, 'value': {'type': 'string', 'default': '', 'desc': '로그 회원 ID'}}
                    ,{ 'key': {'name': '입출금형태'}, 'value': {'type': 'string', 'default': '', 'desc': '입금/출금/지급/회수 (지급/회수는 관리자에 의한 행위)'}}
                    ,{ 'key': {'name': '거래금액'}, 'value': {'type': 'string', 'default': '', 'desc': '거래 금액'}}
                    ,{ 'key': {'name': '거래후예상잔액'}, 'value': {'type': 'string', 'default': '', 'desc': '예상 거래 후 잔액'}}
                    ,{ 'key': {'name': '이벤트명'}, 'value': {'type': 'string', 'default': '', 'desc': '이벤트로 인한 거래 시 이벤트 명'}}
                    ,{ 'key': {'name': '거래요청일시'}, 'value': {'type': 'object', 'default': {}, 'desc': '거래 요청 일시. 거래 완료 시에 실제 입금 출금 등이 이루어짐.'}}
                    ,{ 'key': {'name': '거래완료일시'}, 'value': {'type': 'object', 'default': {}, 'desc': '거래 완료 일시. 거래 요청이 들어왔을 때, 관리자가 처리 후 확인을 해주었을 때 셋팅. 본 필드 삽입 후 user 콜렉션에 실제 금액 셋팅. (본 필드가 empty 이면 아직 진행중인 요청임) '}}
                    ,{ 'key': {'name': '거래요청도메인'}, 'value': {'type': 'string', 'default': '', 'desc': '거래 요청 도메인. 유저 관리 목적으로 유저 레벨별로 도메인 분리 시 어디로 요청된 도메인인지 로그 구분하기 위한 필드.'}}
                ]
            }
        }
        ,
        {
            name: '회원포인트로그',
            definition: {
                'name': '회원 포인트',
                'desc': '회원 포인트 입출금 로그',
                'properties': [
                    { 'key': {'name': '아이디'}, 'value': {'type': 'string', 'default': '', 'desc': '로그 회원 ID'}}
                    ,{ 'key': {'name': '입출금형태'}, 'value': {'type': 'string', 'default': '', 'desc': '입금/출금/지급/회수 (지급/회수는 관리자에 의한 행위)'}}
                    ,{ 'key': {'name': '거래금액'}, 'value': {'type': 'string', 'default': '', 'desc': '거래 금액'}}
                    ,{ 'key': {'name': '거래후예상잔액'}, 'value': {'type': 'string', 'default': '', 'desc': '예상 거래 후 잔액'}}
                    ,{ 'key': {'name': '이벤트명'}, 'value': {'type': 'string', 'default': '', 'desc': '이벤트로 인한 거래 시 이벤트 명'}}
                    ,{ 'key': {'name': '거래요청일시'}, 'value': {'type': 'object', 'default': {}, 'desc': '거래 요청 일시. 거래 완료 시에 실제 입금 출금 등이 이루어짐.'}}
                    ,{ 'key': {'name': '거래완료일시'}, 'value': {'type': 'object', 'default': {}, 'desc': '거래 완료 일시. 거래 요청이 들어왔을 때, 관리자가 처리 후 확인을 해주었을 때 셋팅. 본 필드 삽입 후 user 콜렉션에 실제 금액 셋팅. (본 필드가 empty 이면 아직 진행중인 요청임) '}}
                    ,{ 'key': {'name': '거래요청도메인'}, 'value': {'type': 'string', 'default': '', 'desc': '거래 요청 도메인. 유저 관리 목적으로 유저 레벨별로 도메인 분리 시 어디로 요청된 도메인인지 로그 구분하기 위한 필드.'}}
                ]
            }
        }
        ,
        {
            name: '게임카테고리종목',
            definition: {
                'name': '게임 카테고리 대분류',
                'desc': '종목명 (축구/농구)',
                'properties': [
                    { 'key': {'name': '이미지'}, 'value': {'type': 'object', 'default': {}, 'desc': '종목 이미지 (공모양 / 깃발 등)'}}
                    ,{ 'key': {'name': '이름'}, 'value': {'type': 'string', 'default': '', 'desc': '종목명'}}
                ]
            }
        }
        ,
        {
            name: '게임카테고리리그',
            definition: {
                'name': '게임 카테고리 중분류',
                'desc': '리그명 (MLB / NBA)',
                'properties': [
                    { 'key': {'name': '이미지'}, 'value': {'type': 'object', 'default': {}, 'desc': '리그 이미지 (공모양 / 깃발 등)'}}
                    ,{ 'key': {'name': '이름'}, 'value': {'type': 'string', 'default': '', 'desc': '리그명'}}
                    ,{ 'key': {'name': '소속종목_id'}, 'value': {'type': 'string', 'default': '', 'desc': '상위 대분류(종목명) _id'}}
                ]
            }
        }
        ,
        {
            name: '게임정보',
            definition: {
                'name': '생성된 게임 정보',
                'desc': '관리자에 의해 생성된 게임 정보. 리그명 _id 키를 포함한다. 게임 사전 정보만 가지고 있다.',
                'properties': [
                    { 'key': {'name': '게임시작일시'}, 'value': {'type': 'object', 'default': {}, 'desc': '게임시작일시'}}
                    ,{ 'key': {'name': '게임종료일시'}, 'value': {'type': 'object', 'default': {}, 'desc': '게임종료일시'}}
                    ,{ 'key': {'name': '게임생성일시'}, 'value': {'type': 'object', 'default': {}, 'desc': '게임이 생성된 일시'}}
                    ,{ 'key': {'name': '게임타입'}, 'value': {'type': 'string', 'default': '', 'desc': '승무패/핸디캡/언더오버'}}
                    ,{ 'key': {'name': '게임게시장소'}, 'value': {'type': 'string', 'default': '', 'desc': '승무패/핸디캡/스페셜 등 게시 될 게시판명'}}
                    ,{ 'key': {'name': '홈팀명'}, 'value': {'type': 'string', 'default': '', 'desc': '홈팀명'}}
                    ,{ 'key': {'name': '원정팀명'}, 'value': {'type': 'string', 'default': '', 'desc': '원정팀명'}}
                    ,{ 'key': {'name': '홈팀배당율'}, 'value': {'type': 'string', 'default': '', 'desc': '홈팅승 배당율'}}
                    ,{ 'key': {'name': '원정팀배당율'}, 'value': {'type': 'string', 'default': '', 'desc': '원정팀승 배당율'}}
                    ,{ 'key': {'name': '무승부배당율'}, 'value': {'type': 'string', 'default': '', 'desc': '무승부 배당율'}}
                    ,{ 'key': {'name': '게시여부'}, 'value': {'type': 'string', 'default': '', 'desc': '네/아니오'}}
                    ,{ 'key': {'name': '취소여부'}, 'value': {'type': 'string', 'default': '', 'desc': '네/아니오 (삭제와 다름)'}}
                    ,{ 'key': {'name': '소속리그_id'}, 'value': {'type': 'string', 'default': '', 'desc': '소속된 리그의 _id'}}
                ]
            }
        }
        ,
        {
            /*
             게임 종료 전 베팅 중인 게임의 폴더 단위의 로그.
             게임 종료시 아직 게임 종료가 되지 않은 폴더를 대상으로 게임 결과를 입력 하고,
             폴더 전체게임의 게임이 종료시 폴더 종료를 저장하고 해당 배당금을 지급하고 로그를 기록한다.
             (게임 성공 시 배당금을 지급하고, 게임 실패 시 게임실패 보너스 포인트를 지급한다.)

             (검색 퍼포먼스 문제시 차선책 : 유저정보와 게임정보를 모두 포함하고 있으며, 게임 종료 시 (폴더의 마지막 게임이 종료 될 시) 해당 폴더 전체를 종료 게임 로그로 넘긴다.)
             */

            name: '게임베팅로그',
            definition: {
                'name': '베팅 게임 로그',
                'desc': '유저+생성된게임 으로 베팅된 게임 로그. 결과입력시 결과',
                'properties': [
                    { 'key': {'name': 'schema_user_id'}, 'value': {'type': 'string', 'default': '', 'desc': '베팅한 유저의 _id'}}
                    ,{ 'key': {'name': 'field'}, 'value': {'type': 'string', 'default': '', 'desc': ''}}
                    ,{
                        'key': {'name': 'schema_created_folder'}, 'value': {'type': 'array', 'default': [], ref: 'schema_created_game', 'desc': '폴더에 선택된 게임 정보들이 array형태로 들어감. 1-10개.'}
                    }
                ]
            }
        }
        ,
        {
            name: '스포츠세팅',
            definition: {
                'name': '설정정보',
                'desc': '게임 진행에 필요한 전반적인 셋팅들을 저장',
                'properties': [
                    { 'key': {'name': '프로그램명'}, 'value': {'type': 'string', 'default': '', 'desc': '타이틀에 표시되는 이름, 회사 상호'}}
                    ,{ 'key': {'name': '가입포인트'}, 'value': {'type': 'string', 'default': '', 'desc': '포인트설정 - 가입 P'}}
                    ,{ 'key': {'name': '로그인포인트'}, 'value': {'type': 'string', 'default': '', 'desc': '포인트설정 - 로그인 P'}}
                    ,{ 'key': {'name': '글작성포인트'}, 'value': {'type': 'string', 'default': '', 'desc': '포인트설정 - 글작성 P'}}
                    ,{ 'key': {'name': '덧글작성포인트'}, 'value': {'type': 'string', 'default': '', 'desc': '포인트설정 - 덧글작성 P'}}
                    ,{ 'key': {'name': '베팅포인트'}, 'value': {'type': 'string', 'default': '', 'desc': '포인트설정 - 베팅 %'}}
                    ,{ 'key': {'name': '추천인포인트'}, 'value': {'type': 'string', 'default': '', 'desc': '포인트설정 - 추천인 %'}}
                    ,{ 'key': {'name': '첫입금포인트'}, 'value': {'type': 'string', 'default': '', 'desc': '포인트설정 - 첫입금 %'}}
                    ,{ 'key': {'name': '글쓰기포인트제한수'}, 'value': {'type': 'string', 'default': '', 'desc': '글쓰기 포인트 제한 - 글쓰기수제한 몇회까지. 0무제한'}}
                    ,{ 'key': {'name': '댓글포인트제한수'}, 'value': {'type': 'string', 'default': '', 'desc': '글쓰기 포인트 제한 - 댓글수제한 몇회까지 0무제한'}}
                    ,{ 'key': {'name': '미당첨포인트_레벨0'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 미당첨 포인트 %'}}
                    ,{ 'key': {'name': '미당첨포인트_레벨1'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 미당첨 포인트 %'}}
                    ,{ 'key': {'name': '미당첨포인트_레벨2'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 미당첨 포인트 %'}}
                    ,{ 'key': {'name': '미당첨포인트_레벨3'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 미당첨 포인트 %'}}
                    ,{ 'key': {'name': '미당첨포인트_레벨4'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 미당첨 포인트 %'}}
                    ,{ 'key': {'name': '미당첨포인트_레벨5'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 미당첨 포인트 %'}}
                    ,{ 'key': {'name': '미당첨포인트_레벨6'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 미당첨 포인트 %'}}
                    ,{ 'key': {'name': '미당첨포인트_레벨7'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 미당첨 포인트 %'}}
                    ,{ 'key': {'name': '미당첨포인트_레벨8'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 미당첨 포인트 %'}}
                    ,{ 'key': {'name': '미당첨포인트_레벨9'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 미당첨 포인트 %'}}
                    ,{ 'key': {'name': '일반베팅최저제한액'}, 'value': {'type': 'string', 'default': '', 'desc': '배팅설정 - 일반 베팅 최저 제한액'}}
                    ,{ 'key': {'name': '일반베팅최고제한액'}, 'value': {'type': 'string', 'default': '', 'desc': '배팅설정 - 일반 베팅 최고 제한액'}}
                    ,{ 'key': {'name': '스페셜베팅최저제한액'}, 'value': {'type': 'string', 'default': '', 'desc': '배팅설정 - 스페셜 베팅 최저 제한액'}}
                    ,{ 'key': {'name': '스페셜베팅최고제한액'}, 'value': {'type': 'string', 'default': '', 'desc': '배팅설정 - 스페셜 베팅 최고 제한액'}}
                    ,{ 'key': {'name': '베팅폴더조합제한수'}, 'value': {'type': 'string', 'default': '', 'desc': '배팅설정 - 베팅 폴더 조합 제한'}}
                    ,{ 'key': {'name': '최고배당액_승무패'}, 'value': {'type': 'string', 'default': '', 'desc': '최고 배당액 설정'}}
                    ,{ 'key': {'name': '최고배당액_핸디캡'}, 'value': {'type': 'string', 'default': '', 'desc': '최고 배당액 설정'}}
                    ,{ 'key': {'name': '최고배당액_언더오버'}, 'value': {'type': 'string', 'default': '', 'desc': '최고 배당액 설정'}}
                    ,{ 'key': {'name': '최고배당액_스페셜'}, 'value': {'type': 'string', 'default': '', 'desc': '최고 배당액 설정'}}
                    ,{ 'key': {'name': '최저출금액'}, 'value': {'type': 'string', 'default': '', 'desc': '최저 출금액'}}
                    ,{ 'key': {'name': '최저입금액'}, 'value': {'type': 'string', 'default': '', 'desc': '최저 입금액'}}
                    ,{ 'key': {'name': '입금계좌_레벨0'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 입금 계좌'}}
                    ,{ 'key': {'name': '입금계좌_레벨1'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 입금 계좌'}}
                    ,{ 'key': {'name': '입금계좌_레벨2'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 입금 계좌'}}
                    ,{ 'key': {'name': '입금계좌_레벨3'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 입금 계좌'}}
                    ,{ 'key': {'name': '입금계좌_레벨4'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 입금 계좌'}}
                    ,{ 'key': {'name': '입금계좌_레벨5'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 입금 계좌'}}
                    ,{ 'key': {'name': '입금계좌_레벨6'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 입금 계좌'}}
                    ,{ 'key': {'name': '입금계좌_레벨7'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 입금 계좌'}}
                    ,{ 'key': {'name': '입금계좌_레벨8'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 입금 계좌'}}
                    ,{ 'key': {'name': '입금계좌_레벨9'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 입금 계좌'}}
                    ,{ 'key': {'name': '포인트자동전환여부'}, 'value': {'type': 'string', 'default': '', 'desc': '포인트 자동 전환 가능 여부 네/아니오'}}
                    ,{ 'key': {'name': '포인트전환가능여부'}, 'value': {'type': 'string', 'default': '', 'desc': '포인트 전환 가능 여부 네/아니오'}}
                    ,{ 'key': {'name': '포인트최저전환금'}, 'value': {'type': 'string', 'default': '', 'desc': '포인트 전환 가능시 최저 제한. 0일시 무제한'}}
                    ,{ 'key': {'name': '포인트최고전환금'}, 'value': {'type': 'string', 'default': '', 'desc': '포인트 전환 가능시 최고 제한. 0일시 무제한'}}
                    ,{ 'key': {'name': '베팅취소가능시점'}, 'value': {'type': 'string', 'default': '', 'desc': '취소불가/마감전/베팅후'}}
                    ,{ 'key': {'name': '베팅취소가능시간'}, 'value': {'type': 'string', 'default': '', 'desc': '단위 분'}}
                    ,{ 'key': {'name': '베팅취소포인트'}, 'value': {'type': 'string', 'default': '', 'desc': '배팅 취소 포인트 P'}}
                    ,{ 'key': {'name': '베팅취소일일횟수제한_레벨0'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 베팅 취소 일일 제한'}}
                    ,{ 'key': {'name': '베팅취소일일횟수제한_레벨1'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 베팅 취소 일일 제한'}}
                    ,{ 'key': {'name': '베팅취소일일횟수제한_레벨2'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 베팅 취소 일일 제한'}}
                    ,{ 'key': {'name': '베팅취소일일횟수제한_레벨3'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 베팅 취소 일일 제한'}}
                    ,{ 'key': {'name': '베팅취소일일횟수제한_레벨4'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 베팅 취소 일일 제한'}}
                    ,{ 'key': {'name': '베팅취소일일횟수제한_레벨5'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 베팅 취소 일일 제한'}}
                    ,{ 'key': {'name': '베팅취소일일횟수제한_레벨6'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 베팅 취소 일일 제한'}}
                    ,{ 'key': {'name': '베팅취소일일횟수제한_레벨7'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 베팅 취소 일일 제한'}}
                    ,{ 'key': {'name': '베팅취소일일횟수제한_레벨8'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 베팅 취소 일일 제한'}}
                    ,{ 'key': {'name': '베팅취소일일횟수제한_레벨9'}, 'value': {'type': 'string', 'default': '', 'desc': '레벨별 베팅 취소 일일 제한'}}
                ]
            }
        }
        ,
        {
            name: 'schema_',
            definition: {
                'name': '',
                'desc': '',
                'properties': [
                    { 'key': {'name': '이름'}, 'value': {'type': 'string', 'default': '', 'desc': ''}}
                    ,{ 'key': {'name': 'field'}, 'value': {'type': 'string', 'default': '', 'desc': ''}}
                    ,{
                        'key': {'name': 'tmp'}, 'value': {'type': 'array', 'default': [], ref: 'tmp2', 'desc': 'tmp'}
                    }
                ]
            }
        }
    ];

//schema = [
//    {
//        name : 'test1'
//        ,definition : {
//        'name' : '테스트1'
//        ,'desc' : '첫번째 스키마라서 잘 봐둬야해요'
//        ,'properties' : [
//            {
//                'key'   : {'name' : 'houseHeating0'}
//                ,'value' : {'type' : 'float' , 'default':0 , 'desc' : '주택난방 판매량'}
//}
//            ,{
//                'key'   : {'name' : 'houseHeating1'}
//                ,'value' : {'type' : 'float' , 'default':1 , 'desc' : '주택난방 판매량'}
//}
//            ,{
//                'key'   : {'name' : 'houseHeating2'}
//                ,'value' : {'type' : 'float' , 'default':2 , 'desc' : '주택난방 판매량'}
//}
//            ,{
//                'key'   : {'name' : 'houseHeating3'}
//                ,'value' : {'type' : 'float' , 'default':3 , 'desc' : '주택난방 판매량'}
//}
//            ,{
//                'key'   : {'name' : 'houseHeating4'}
//                ,'value' : {'type' : 'float' , 'default':4 , 'desc' : '주택난방 판매량'}
//}
//            ,{
//                'key'   : {'name' : 'houseHeating5'}
//                ,'value' : {'type' : 'float' , 'default':5 , 'desc' : '주택난방 판매량'}
//}
//            ,{
//                'key'   : {'name' : 'houseHeatingArray'}
//                ,'value' : {'type' : 'array' , 'default':[] , ref:'test2', 'desc' : '주택난방 판매량'}
//}
//        ]
//}
//}
//    ,{
//        name : 'test2'
//        ,definition : {
//            'name' : '테스트둘'
//            ,'desc' : '두번째 스키마는 참중요해요'
//            ,'properties' : [
//                {
//                    'key'   : {'name' : 'houseHeating'}
//                    ,'value' : {'type' : 'float' , 'default':0 , 'desc' : '주택난방 판매량'}
//}
//                ,
//                {
//                    'key'   : {'name' : 'houseHeating'}
//                    ,'value' : {'type' : 'float' , 'default':0 , 'desc' : '주택난방 판매량'}
//}
//            ]
//}}
//];
//

