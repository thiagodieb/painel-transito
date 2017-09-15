
function init_center_control(status,vl){
  //$.cookie("status_control",status);
  if (typeof(Storage) !== "undefined"){
      localStorage.setItem("point_control",JSON.stringify({"actual":vl}) );
      //localStorage.setItem("status_control",JSON.stringify({"s":status}) );
  } else {
      alert("Navegador não suporta tecnologia utilizada");
  }
}

function center_control(){

  action = setInterval(function(){
    //  status = get_storage("status_control");
      data_center = get_maps();
      //console.log("OK");
      point = get_storage("point_control");

      console.log(point);
      if(point.new != undefined  && point.actual != point.new){
        point.actual = point.new;
        set_storage("point_control",point,true);
        initMap(data_center[point.new]);
      }

      // if(status.s != "play"){
      //   clearInterval(action)
      // }
  }, time);

}


(function() {
  init_center_control("play",point_initial);
  center_control();

})();
