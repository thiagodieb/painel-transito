
function init_map(data_default){
    if (typeof(Storage) !== "undefined"){
        if(typeof(localStorage.getItem("data_center")) == "undefined" ) {
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
    if (typeof(Storage) !== "undefined") {
           d = JSON.parse(localStorage.getItem("data_center"));
          return d;
    } else {
        alert("Navegador não suporta tecnologia utilizada");
    }
}

function set_map($value){
    if (typeof(Storage) !== "undefined") {
          //localStorage.setItem("data_center",JSON.stringify(d));
          d = JSON.parse(localStorage.getItem("data_center"));
          //console.log(d);
          d.push($value);
          //console.log(d);
          localStorage.setItem("data_center",JSON.stringify(d));
    } else {
        alert("Navegador não suporta tecnologia utilizada");
    }
}

function remove_map($key){
    if (typeof(Storage) !== "undefined") {
          //localStorage.setItem("data_center",JSON.stringify(d));
          d = JSON.parse(localStorage.getItem("data_center"));
          console.log(d);
          d.splice($key,1);
          console.log(d);
          localStorage.setItem("data_center",JSON.stringify(d));
    } else {
        alert("Navegador não suporta tecnologia utilizada");
    }
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

var data_center = get_maps();
var point_initial = 1;
var time = 1000;
