

function actions_buttons(){
  $(document).on('click', ".click_map", function() {
    vl = $(this).attr("alt");
    point = JSON.parse($.cookie("point_control"));
    point.new = vl;
    $.cookie("point_control",JSON.stringify(point));
    $(".mdl-color--blue-grey-100").removeClass("mdl-color--blue-grey-100");
    $(this).offsetParent().addClass("mdl-color--blue-grey-100");

  });

  $(document).on('click', "#button_submit", function() {
    lalg = $("#lat").val().split(",");
    new_map = {
      "nome":$("#nome").val(),
      "descricao":$("#descricao").val(),
      "center":{
        "lat":parseFloat(lalg[0]),
        "lng":parseFloat(lalg[1])
      }
    }
    set_map(new_map);
    data_center = get_maps();
    i = data_center.length - 1;
    mount_cards(i,data_center[i]);

  });


  $(document).on('click', ".delete", function() {
    vl = $(this).attr("alt");
    remove_map(vl);
    data_center = get_maps();
    el = "#card-"+vl
    $(el).remove();

  });



  $( ".click_play" ).click(function() {
    if($(this).attr("val") == "play"){
      init_center_control("play");
      $(this).attr("val","stop");
    }else{
      init_center_control("stop");
      center_control();
      $(this).attr("val","play");
    }
  });

}

function mount_cards(i,$map){

      $elements = "<div class='demo-card-square mdl-card mdl-shadow--2dp' id='card-"+i+"'>";
      $elements += "<div class='mdl-card__title mdl-card--expand'>";
      $elements += "<h2 class='mdl-card__title-text'>"+$map.nome+"</h2>";
      $elements += "</div>";
      $elements += "<div class='mdl-card__supporting-text'>"+$map.descricao+"</div>";
      $elements += "<div class='mdl-card__actions mdl-card--border'>";
      $elements += "<a class='mdl-button center mdl-button--colored mdl-js-button mdl-js-ripple-effect click_map' href='#' alt='"+i+"'>";
      $elements += "Habilitar";
      $elements += "</a></div>";
      $elements += "<div class='mdl-card__menu'><button class='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'><i class='material-icons'>edit</i></button><button class='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect delete' alt='"+i+"'><i class='material-icons'>delete</i></button></div>";
      $elements += "</div>";
      $(".demo-content").append($elements);
}


(function() {
  actions_buttons();
  $.each(data_center,function(i,k){
    mount_cards(i,k);
  });

})();


var form_s = ' <form action="#" class=""><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input" pattern="[A-Z,a-z, ]*" id="nome" type="text"><label class="mdl-textfield__label" for="nome">Nome...</label></div><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input" id="descricao" type="text"><label class="mdl-textfield__label" for="descricao">Descricao...</label></div><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input" id="lat" type="text"><label class="mdl-textfield__label" for="lat">Latitude e Longitude</label></div></form>';

$('#button-add').click(function () {
    showDialog({
        title: 'Adicionar novo ponto',
        text: form_s,
        negative: {
            title: 'Cancelar'
        },
        positive: {
            id:'button_submit',
            title: 'Salvar'
        },
        cancelable: false
    });
});
