let contain = $(".wrap .contain");
class timePicker{
    constructor(container){
    	this.container = container;
    	this.date = new Date();
    	// this.choosedEle = choosedEle;
    };

    init(){
        for(let i=0;i<42;i++){
            let ele = $("<li></li>");
            ele.appendTo(this.container);
        }
        this.renderByDate(this.date);
        let self = this;
        $(".prev-month").tap(function(){
            self.renderByDate(self.prevMonth(self.date));
        });
    };

    renderByDate(date){
        $(".choosed-time").html(date.getFullYear()+"年"+ (date.getMonth()+1)+"月"+date.getDate()+"日");
        //将当下的时间对象存在一个新的时间对象中，防止污染
        let dat = new Date(date);
        //日期设置为本月的1号
        dat.setDate(1);
        //得到第一个li的日期
        dat.setDate(dat.getDate()-dat.getDay());
        for(let i=0;i<42;i++){
            let $li = this.container.children().eq(i);
            $li.html(dat.getDate());
            //不是本月的日期
            if(dat.getMonth() !== date.getMonth() ){
                $li.addClass("past");
            }
            else if(dat.getDay()===0 || dat.getDay()===6){
                $li.addClass("weekend");
            }
            else if(dat.getTime()=== date.getTime()){
                $li.addClass("active");
            }
            //每设置一次li内的值，同时将日期设置为下一天
            dat.setDate(dat.getDate()+1);
        }
    }
    prevMonth(date){
        let dat = new Date(date);
        dat.setMonth(dat.getMonth()-1);
        return dat;
    };
    nextMonth(date){
        let dat = new Date(date);
        dat.setMonth(dat.getMonth()+1);
        return dat;
    };
    // chooseEle(){}
}

var a = new timePicker(contain);
a.init();