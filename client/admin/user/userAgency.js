
Template.userAgency.events({
    'click [name=createAgency]' : function(e,tmpl) {
        e.preventDefault();

        var schAgency = sportsSchema.getSchema('총판매장');

        _.each(schAgency,function(val,idx){
            콘솔(tmpl.find("[name="+idx+"]"));
//            콘솔($(tmpl.find("[name="+idx+"]")).val());
            schAgency[idx] = $(tmpl.find("[name="+idx+"]")).val();
        });

        총판매장.insert(schAgency);

        tmpl.find('form').reset();
        $(tmpl.find('[name=cancelCreateAgency]')).trigger('click');

//        $(tmpl.find('#myModal')).modal({'show':false});

    },
    'click #btn_remove' : function(e,tmp) {
        e.preventDefault();

        총판매장.remove({_id:this._id});
    }
});

Template.userAgency.rendered = function(){
};

Template.userAgency.helpers({
    화면이름 : function() {
        return this.화면이름;
    }
});


Template.agencyTable.helpers({
    회원정보 : function() {
        콘솔(this.화면이름);
        if(this.화면이름 === '총판')
            return 총판매장.find({$where:"this.소속_id.length === 0"});
        else if(this.화면이름 === '매장')
            return 총판매장.find({$where:"this.소속_id.length > 0"});
        else
            alert('Template.agencyTable.helpers({ : 화면이름에러');
    }
    ,
    화면이름 : function() {
        return this.화면이름;
    }
});

Template.userAgencyInputModal.helpers({
    화면이름 : function() {
        return this.화면이름;
    }
});