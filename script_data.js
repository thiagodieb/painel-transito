
function init_map(data_default){
    if (typeof(Storage) !== "undefined"){
        if(typeof(localStorage.getItem("data_center")) == "undefined" || localStorage.getItem("data_center") == null) {
            localStorage.setItem("data_center",JSON.stringify([]));
            $.each(data_default,function(i,k){
              set_map(k);
              });
        }
    } else {
        alert("Navegador não suporta tecnologia utilizada");
    }
}

function get_maps(){
  return get_storage("data_center");
}

function set_map($value){
  d = get_maps();
  d.push($value);
  set_storage("data_center",$value);
}

function remove_map($key){
  remove_storage("data_center",$key);
}

data_default =[ { 'nome':"Ponte do Bragueto",
                'descricao':"Saída Norte - direção Sobradinho",
                'center': {lat: -15.7313355, lng: -47.8932516}
     },
     { 'nome':"EPTG",
               'descricao':"Direção Águas Claras",
                'center': {lat: -15.8109439, lng: -47.9745999}
     },
     {'nome':"Aeroporto",
                  'descricao':"Saída Sul - direção EPIA",
                   'center': {lat: -15.8353531, lng: -47.9270367}
     },
     { 'nome':"Centro de Brasília",
                 'descricao':"Direção Esplanada dos Ministérios",
                 'center': {lat: -15.7917792, lng: -47.8843287}
     }
  ];

init_map(data_default);

//remove_map(3);
data_center = [];
var data_center = get_maps();
console.log(data_center);
var point_initial = 1;
var time = 1000;
