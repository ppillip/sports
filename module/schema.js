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
          name : 'test'
         ,definition : {
            "name" : "테스트1"
            ,"desc" : "첫번째 스키마라서 잘 봐둬야해요"
            ,"properties" : [
                {
                    "key"   : {"name" : "houseHeating"}
                    ,"value" : {"type" : "float" , "default":0 , "desc" : "주택난방 판매량" }
                }
                ,
                {
                    "key"   : {"name" : "houseHeating2"}
                    ,"value" : {"type" : "array" , "default":[] , ref:"test2", "desc" : "주택난방 판매량" }
                }

            ]
     }}
    ,{
        name : 'test2'
       ,definition : {
        "name" : "테스트둘"
        ,"desc" : "두번째 스키마는 참중요해요"
        ,"properties" : [
            {
                "key"   : {"name" : "houseHeating"}
                ,"value" : {"type" : "float" , "default":0 , "desc" : "주택난방 판매량" }
            }
            ,
            {
                "key"   : {"name" : "houseHeating"}
                ,"value" : {"type" : "float" , "default":0 , "desc" : "주택난방 판매량" }
            }
        ]
    }}
];