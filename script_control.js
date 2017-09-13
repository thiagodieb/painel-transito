

function actions_buttons(){
  $(document).on('click', ".click_map", function() {
    vl = $(this).attr("href");
    point = JSON.parse($.cookie("point_control"));
    point.new = vl;
    $.cookie("point_control",JSON.stringify(point));
    $(".mdl-color--blue-grey-100").removeClass("mdl-color--blue-grey-100");
    $(this).offsetParent().addClass("mdl-color--blue-grey-100");

  });

  $(document).on('click', ".click_map", function() {
    vl = $(this).attr("href");
    point = JSON.parse($.cookie("point_control"));
    point.new = vl;
    $.cookie("point_control",JSON.stringify(point));
    $(".mdl-color--blue-grey-100").removeClass("mdl-color--blue-grey-100");
    $(this).offsetParent().addClass("mdl-color--blue-grey-100");

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

function mount_cards(){

  $.each(data_center,function(i){
      $elements = "<div class='demo-card-square mdl-card mdl-shadow--2dp'>";
      $elements += "<div class='mdl-card__title mdl-card--expand'>";
      $elements += "<h2 class='mdl-card__title-text'>"+data_center[i].nome+"</h2>";
      $elements += "</div>";
      $elements += "<div class='mdl-card__supporting-text'>"+data_center[i].descricao+"</div>";
      $elements += "<div class='mdl-card__actions mdl-card--border'>";
      $elements += "<a class='mdl-button center mdl-button--colored mdl-js-button mdl-js-ripple-effect click_map' href='"+i+"'>";
      $elements += "Habilitar";
      $elements += "</a></div>";
      $elements += '<div class="mdl-card__menu"><button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"><i class="material-icons">edit</i></button></div>';
      $elements += "</div>";
      $(".demo-content").append($elements);
  });

}


(function() {
  actions_buttons();
  mount_cards();
})();


var form_s = ' <form action="#" class=""><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input" pattern="[A-Z,a-z, ]*" id="nome" type="text"><label class="mdl-textfield__label" for="nome">Nome...</label></div><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input" id="descricao" type="text"><label class="mdl-textfield__label" for="descricao">Descricao...</label></div><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input" id="lat" type="text"><label class="mdl-textfield__label" for="lat">Latitude...</label></div><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input" id="lng" type="text"><label class="mdl-textfield__label" for="lng">Longitude...</label></div></form>';

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
