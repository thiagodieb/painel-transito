
function init_center_control(status,vl){
  $.cookie("status_control",status);
  $.cookie("point_control",JSON.stringify({"actual":vl}));

}

function center_control(){

  action = setInterval(function(){
      status = $.cookie("status_control");
      //console.log("OK");
      point = JSON.parse($.cookie("point_control"));
      console.log(point);
      if(point.new != undefined  && point.actual != point.new){
        point.actual = point.new;
        $.cookie("point_control",JSON.stringify(point));
        initMap(data_center[point.new]);
      }
      if(status != "play"){
        clearInterval(action)
      }
  }, time);

}


(function() {
  init_center_control("play",point_initial);
  center_control();

})();
