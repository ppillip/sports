getJson = function (struct, name, pre){
    var ext = pre || {};
    var rtn = {};
    (_.findWhere(struct,{name:name})).definition.properties.forEach(function(x){
        rtn[x.key.name] = x.value.default;
    });
    return _.extend(rtn,ext);
};


schemaAgency = [
    {
        name : 'schemaAgency'
        ,definition : {
        "name" : "agency"
        ,"desc" : "총판"
        ,"properties" : [
            { "key"   : {"name" : "agency_id"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 ID" }}
            ,{ "key"   : {"name" : "agency_pw"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 PW" }}
            ,{ "key"   : {"name" : "agency_name"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 이름" }}
            ,{ "key"   : {"name" : "agency_nick_name"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 별명 (사용 미정)" }}
            ,{ "key"   : {"name" : "agency_cellphone"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 휴대폰" }}
            ,{ "key"   : {"name" : "agency_level"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 등급" }}
            ,{ "key"   : {"name" : "agency_sign_up_ip"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 가입 IP" }}
            ,{ "key"   : {"name" : "agency_sign_up_date"},"value" : {"type" : "object" , "default":null , "desc" : "총판 가입 일시" }}
            ,{ "key"   : {"name" : "agency_bank_account"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 계좌번호" }}
            ,{ "key"   : {"name" : "agency_bank_name"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 계좌은행명" }}
            ,{ "key"   : {"name" : "agency_bank_owner_name"},"value" : {"type" : "string" , "default":'' , "desc" : "총판 계좌주명" }}
            ,{
                "key"   : {"name" : "tmp"}
                ,"value" : {"type" : "array" , "default":[] , ref:"tmp2", "desc" : "tmp" }
            }

        ]
    }
    }
];