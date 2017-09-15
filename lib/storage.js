
function get_storage($item){
    if (typeof(Storage) !== "undefined") {
           d = JSON.parse(localStorage.getItem($item));
          return d;
    } else {
        alert("Navegador não suporta tecnologia utilizada");
    }
}

function set_storage($item,$value){
    if (typeof(Storage) !== "undefined") {
          localStorage.setItem($item,JSON.stringify(d));
    } else {
        alert("Navegador não suporta tecnologia utilizada");
    }
}

function remove_storage($item,$key){
    if (typeof(Storage) !== "undefined") {
          //localStorage.setItem("data_center",JSON.stringify(d));
          d = JSON.parse(localStorage.getItem($item));
          console.log(d);
          d.splice($key,1);
          console.log(d);
          localStorage.setItem($item,JSON.stringify(d));
    } else {
        alert("Navegador não suporta tecnologia utilizada");
    }
}
