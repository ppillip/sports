/*
    초기 기본 생성값.
    테스트를 위해 필요한 초기값들이 아닌, 프로그램 최초 설정에 반드시 필요한 필수 요소들만 이곳에 선언.
    테스트를 윟나 초기값은 _init.js 에 선언할 것.
 */

//--- 사이트 기본 셋팅 ---//
if(SportsSettings.find().count() !== 1) {
    var tmpSchema = sportsSchema.getSchema('sportsSettings');
    tmpSchema.프로그램명 = 'Sports';

    SportsSettings.insert(tmpSchema);
}



