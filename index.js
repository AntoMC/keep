var notaClaves = ["tips"];
var notaValor = ["click on the body of a note to edit it see the delete options menu. if you want the permanent sea information to change the arrangement to localStorage or indexedDB can see my codes to guide you how to do it"];
var notaBackground = ["#1E88E5"];
var notaFontColor = ["#ffffff"];
fondo_de_nota = "#1E88E5";
color_de_fuente = "#ffffff";


var UI = {
  crearBoton: function () {
    var _btf = document.createElement('button');
    _btf.id = 'miboton';
    _btf.addEventListener('click', function () {
      if (!document.getElementById('mimenu')) {
        var ui = UI;
        ui.crearMenu()
        this.setAttribute("class", "fa fa-chevron-down");
      } else {
        document.getElementById('mimenu').remove();
        this.setAttribute("class", "fa fa-chevron-up");
      }
    },
      false);
    _btf.setAttribute("class",
      "fa fa-chevron-up");
    document.body.prepend (_btf);
  },
  crearMenu: function () {
    var _ul = document.createElement('ul');
    _ul.id = 'mimenu';
    var _li_open = document.createElement('li');
    var _a_open = document.createElement('a');
    var _i_open = document.createElement('i');
    _li_open.id = 'openNote';

    //creamos la interfaz para el  editor de notas
    _li_open.addEventListener('click',
      function () {
        var ui = UI;
        ui.crearEditor();
        document.getElementById('mimenu').remove();
        if (document.getElementById('panel_inicio'))
          document.getElementById('panel_inicio').remove();
      },
      false);

    _li_open.style.backgroundColor = 'royalblue';
    _li_open.append(_a_open);
    _a_open.append(_i_open);
    _i_open.setAttribute('class',
      'fa fa-plus')
    _ul.append(_li_open);

    //search
    var _li_search = document.createElement('li');
    var _a_search = document.createElement('a');
    var _i_search = document.createElement('i');
    _li_search.id = 'searchNote';
    _a_search.addEventListener("click",
      function () {

        if (!document.getElementById("inputSearch")) {
          var t = Toast;
          //t.createWarning("press intro to search");
          var input = document.createElement("input");
          input.id = "inputSearch"
          input.style.position = "absolute";
          input.style.left = "-95px";
          input.style.width = "120px";
          //input.style.borderRadius = "8px";
          input.style.margin = "7px 0px";
          input.style.padding = "4px";
          input.placeholder = "Search";
          this.parentNode.append(input);
          input.focus();
          input.addEventListener("change", function () {
            if (document.getElementById('panel_inicio')) {
              document.getElementById('panel_inicio').remove();
            }
            var sectionSearch = document.createElement('div');
            sectionSearch.id = 'sectionSearch';
            var textSearch = this.value;

            var index = notaClaves.indexOf(textSearch);
            if (notaClaves[index]) {
              const element = notaClaves[index];
              const contenido = notaValor[index];
              var textshort = element.replace("
", " ").substring(0, 100) + '...';
              var section = document.createElement('section');
              var bt_eliminar = document.createElement('button');
              bt_eliminar.style.width = "100%";
              bt_eliminar.style.background = "red";
              bt_eliminar.style.borderRadius = "0px 0px 20px 20px";
              bt_eliminar.style.border = "none";
              bt_eliminar.style.padding = "8px";
              bt_eliminar.style.fontSize = "1.5em";
              bt_eliminar.style.color = "white";
              
              //DELETE A NOTE
              bt_eliminar.addEventListener('click', function () {
                var index = notaClaves.indexOf(textSearch);
                notaClaves.splice(index, 1);
                notaValor.splice(index, 1);
                var ui = UI;
                ui.inicio();
                var t = Toast;
                t.createSuccess("note delete successfully");
                if (document.getElementById('sectionSearch')) {
                  document.getElementById('sectionSearch').remove();
                }
              },
                false);
              section.id = "note"
              var h3 = document.createElement('h3');
              h3.id="h3";
              bt_eliminar.id = 'bte_' + textSearch;
              h3.addEventListener('click',
                function () {
                  var ui = UI;
                  ui.crearEditor();
                  var txt_titulo = document.getElementById('nomNota');
                  var txt_descripcion = document.getElementById('txtarea');
                  txt_titulo.value = textSearch;
                  txt_descripcion.value = contenido;
                  document.getElementById('sectionSearch').remove();
                },
                false);
                
              var p = document.createElement('p');
              p.id="p_search";
              p.addEventListener('click',
                function () {
                  var ui = UI;
                  ui.crearEditor();
                  var txt_titulo = document.getElementById('nomNota');
                  var txt_descripcion = document.getElementById('txtarea');
                  txt_titulo.value = textSearch;
                  txt_descripcion.value = contenido;
                  document.getElementById('sectionSearch').remove();
                },
                false);
              var i_eliminar = document.createElement('i');
              i_eliminar.setAttribute('class',
                'fa fa-trash-alt')
              h3.innerText = element;
              p.innerText = contenido;
              bt_eliminar.append(i_eliminar);
              section.append(h3);
              section.append(p);
              section.append(bt_eliminar)
            } else {
              var t = Toast;
              t.createError("no coincidence please type well");
            }
            if (notaValor.length == 0){
              sectionSearch.innerText = "no tienes notas que mostrar";
            }
            sectionSearch.prepend(section);

            document.body.append(sectionSearch);
            
          },
            false);
            
        }
        
      }, false);
      
    _li_search.style.backgroundColor = 'peru';
    _li_search.append(_a_search);
    _a_search.append(_i_search);
    _i_search.setAttribute('class', 'fa fa-search')
    _ul.append(_li_search);

    var _li_theme = document.createElement('li');
    var _a_theme = document.createElement('a');
    var _i_theme = document.createElement('i');
    _li_theme.id = 'themeNote';
    _a_theme.addEventListener("click",
      function () {
        var ul = document.createElement("ul");
        var li_theme_light = document.createElement("li");
        li_theme_light.style.backgroundColor = "#ffffff";
        li_theme_light.addEventListener("click",
          function() {
            var main = document.body;
            main.style.backgroundColor = "wheat";
            this.parentNode.remove();
          },
          false);
        var li_theme_dark = document.createElement("li");
        li_theme_dark.addEventListener("click",
          function() {
            var main = document.body;
            main.style.backgroundColor = "#2b2b2b";
            this.parentNode.remove();
          },
          false);
        li_theme_dark.style.backgroundColor = "#2b2b2b";
        var li_theme_golf = document.createElement("li");
        li_theme_golf.addEventListener("click",
          function() {
            var main = document.body;
            main.style.backgroundColor = "goldenrod";
            this.parentNode.remove();
          },
          false);
        li_theme_golf.style.backgroundColor = "#daa520";
        li_theme_golf.innerText = ""
        ul.appendChild(li_theme_light);
        ul.appendChild(li_theme_dark);
        ul.appendChild(li_theme_golf);
        ul.id = "ul-theme"
        ul.style.position = "absolute";
        ul.style.left = "-100px";
        ul.style.width = "120px";
        ul.style.border = "none";
        ul.style.margin = "7px 0px";
        ul.style.padding = "4px";
        this.parentNode.prepend(ul);
      },
      false);
    _li_theme.style.backgroundColor = 'red';
    _li_theme.append(_a_theme);
    _a_theme.append(_i_theme);
    _i_theme.setAttribute('class',
      'fa fa-palette');
    _ul.append(_li_theme);

    //home
    var _li_home = document.createElement('li');
    var _a_home = document.createElement('a');
    var _i_home = document.createElement('i');
    _li_home.id = 'homeNote';

    //manejador de evento click para el boton home
    _li_home.addEventListener('click',
      function () {
        var ui = UI;
        if (document.getElementById("sectionSearch")) {
          document.getElementById('sectionSearch').remove();
          ui.inicio();
        } else if (document.getElementById("panel_editor")) {
          document.getElementById('panel_editor').remove();
          ui.inicio();
        }else {
          ui.inicio();

        }
      },
      false);

    _li_home.style.backgroundColor = 'cornflowerblue';
    _li_home.append(_a_home);
    _a_home.append(_i_home);
    _i_home.setAttribute('class',
      'fa fa-home');
    _ul.append(_li_home);

    document.body.append(_ul);
  },

  crearEditor: function () {
    if (document.getElementById("panel_editor") || document.getElementById("panel_editor") === "null") {
      var t = Toast;
      t.createSuccess('el editor esta activo')
    } else {

      var ul_tools = document.createElement("ul");
      var li_tools_save = document.createElement("li");
      var a_tools_save = document.createElement('a');
      var i_tools_save = document.createElement('i');

      var li_tools_return = document.createElement("li");
      var a_tools_return = document.createElement('a');
      var i_tools_return = document.createElement('i');
      a_tools_return.append(i_tools_return);
      li_tools_return.append(a_tools_return);

      i_tools_return.setAttribute('class',
        'fa fa-angle-left');
      //return
      li_tools_return.addEventListener('click', function () {
        var ui = UI;
        ui.inicio();
        document.getElementById("panel_editor").remove();

      },
        false);
      //gardar nota
      li_tools_save.addEventListener('click', function () {
        var ui = UI;
        ui.guardarNota();
        ui.inicio();
      },
        false);

      a_tools_save.append(i_tools_save);
      li_tools_save.append(a_tools_save);

      i_tools_save.setAttribute('class',
        'fa fa-save');

      ul_tools.append(li_tools_return);
      ul_tools.append(li_tools_save);

      ul_tools.id = "ul-tools"

      var _li_open = document.createElement('li');
      var _a_open = document.createElement('a');
      var _i_open = document.createElement('i');
      _li_open.id = 'noteFontColor';

      //creamos la interfaz para el  editor de notas
      _li_open.addEventListener('click',
        function () {
          if (document.getElementById('ul-fontColor-note') == null && document.getElementById('ul-theme-note') == null) {
            var ul = document.createElement("ul");
            var li_theme_light = document.createElement("li");
            li_theme_light.style.backgroundColor = "#FFEA00";
            li_theme_light.addEventListener("click",
              function() {
                color_de_fuente = "#FFEA00";
                var d = document.getElementById('txtarea');
                var t = document.getElementById('nomNota');
                d.style.color = "#FFEA00";
                t.style.color = "#FFEA00";
                var elem = document.getElementById("ul-fontColor-note");
                elem.style.animationName = 'closeSubmenu';
                setTimeout(function () {
                  elem.remove();
                }, 800);
              },
              false);
          }
          var li_theme_dark = document.createElement("li");
          li_theme_dark.addEventListener("click",
            function() {
              color_de_fuente = "#000000"
              var d = document.getElementById('txtarea');
              var t = document.getElementById('nomNota');
              d.style.color = "#000000";
              t.style.color = "#000000";
              var elem = document.getElementById("ul-fontColor-note");
              elem.style.animationName = 'closeSubmenu';
              setTimeout(function () {
                elem.remove();
              }, 800);
            },
            false);
          li_theme_dark.style.backgroundColor = "#000000";
          var li_theme_golf = document.createElement("li");
          li_theme_golf.addEventListener("click",
            function() {
              color_de_fuente = "#ffffff";
              var d = document.getElementById('txtarea');
              var t = document.getElementById('nomNota');
              d.style.color = "#ffffff";
              t.style.color = "#ffffff";
              var elem = document.getElementById("ul-fontColor-note");
              elem.style.animationName = 'closeSubmenu';
              setTimeout(function () {
                elem.remove();
              }, 800);
            },
            false);
          li_theme_golf.style.backgroundColor = "#ffffff";
          ul.append(li_theme_light);
          ul.append(li_theme_dark);
          ul.append(li_theme_golf);
          ul.id = "ul-fontColor-note"
          this.parentNode.append(ul);
        },
        false);

      _li_open.style.backgroundColor = 'royalblue';
      _li_open.append(_a_open);
      _a_open.append(_i_open);
      _i_open.setAttribute('class',
        'fa fa-paint-brush')
      ul_tools.append(_li_open);

      //creamos una opcion para el color de la fuente
      var _li_theme = document.createElement('li');
      var _a_theme = document.createElement('a');
      var _i_theme = document.createElement('i');
      _li_theme.id = 'noteBackgroundColor';
      _li_theme.addEventListener("click",
        function () {

          if (document.getElementById('ul-fontColor-note') == null && document.getElementById('ul-theme-note') == null) {
            var ul = document.createElement("ul");
            var li_theme_light = document.createElement("li");
            li_theme_light.style.backgroundColor = "#EEEEEE";
            li_theme_light.addEventListener("click",
              function() {

                fondo_de_nota = "#EEEEEE";
                var main = document.getElementById('txtarea');
                main.style.backgroundColor = "#EEEEEE";
                var elem = document.getElementById("ul-theme-note");
                elem.style.animationName = 'closeSubmenu';
                setTimeout(function () {
                  elem.remove();
                }, 800);

              },
              false);
            var li_theme_dark = document.createElement("li");
            li_theme_dark.addEventListener("click",
              function() {
                fondo_de_nota = "#263238";
                var main = document.getElementById('txtarea');
                main.style.backgroundColor = "#263238";
                var elem = document.getElementById("ul-theme-note");
                elem.style.animationName = 'closeSubmenu';
                setTimeout(function () {
                  elem.remove();
                }, 800);
              },
              false);
            li_theme_dark.style.backgroundColor = "#263238";
            
            var li_theme_golf = document.createElement("li");
            li_theme_golf.addEventListener("click",
              function() {
                fondo_de_nota = "#303F9F";
                var main = document.getElementById('txtarea');
                main.style.backgroundColor = "#303F9F";
                var elem = document.getElementById("ul-theme-note");
                elem.style.animationName = 'closeSubmenu';
                setTimeout(function () {
                  elem.remove();
                }, 800);
              },
              false);
            li_theme_golf.style.backgroundColor = "#303F9F";
            ul.append(li_theme_light);
            ul.append(li_theme_dark);
            ul.append(li_theme_golf);
            ul.id = "ul-theme-note"
            this.parentNode.append(ul);
          }
        },
        false);

      _li_theme.style.backgroundColor = 'red';
      _li_theme.append(_a_theme);
      _a_theme.append(_i_theme);
      _i_theme.setAttribute('class',
        'fa fa-palette');
      ul_tools.append(_li_theme);

      var panel = document.createElement('div');
      var nomNota = document.createElement('input');
      nomNota.id = 'nomNota';
      nomNota.placeholder = 'title';
      panel.id = 'panel_editor';
      var txtarea = document.createElement('textarea');
      txtarea.placeholder = 'something';
      txtarea.id = 'txtarea'

      panel.append(txtarea);
      panel.prepend(nomNota);

      panel.prepend(ul_tools);
      document.body.append(panel);
    }
  },
  
  guardarNota: () => {
    var nomNota = document.getElementById('nomNota').value;
    var nota = document.getElementById('txtarea').value;

    if (nomNota != "") {
      for (var key in notaClaves) {
        if (notaClaves[key] == nomNota) {
          notaClaves[key] = nomNota;
          notaValor[key] = nota;
          notaBackground[key] = fondo_de_nota;
          notaFontColor[key] = color_de_fuente;
          var t = Toast;
          t.createSuccess("save successfully");
          UI.inicio();
          document.getElementById("panel_editor").remove();
          return;
        }

      }
      notaClaves.push(nomNota);
      notaValor.push(nota);
      notaBackground.push(fondo_de_nota);
      notaFontColor.push(color_de_fuente);
      var t = Toast;
      t.createSuccess("save successfully");
      document.getElementById('panel_editor').remove();
      UI.inicio();
    } else {
      var t = Toast;
      t.createError("debes ingresar un identificador para la nota");
      document.getElementById("nomNota").focus()
    }
  },
  
  crearMenuSettings: function (id_nota) {

    var _ul = document.createElement('ul');
    _ul.id = 'menuSettings';
    //edit a note
    var _li_update = document.createElement('li');
    var _a_update = document.createElement('a');
    var _i_update = document.createElement('i');
    _li_update.id = 'noteUpdate';

    //manejador de evento click para el boton home
    _li_update.addEventListener('click',
      function () {
        var t = Toast;
        t.createWarning("Click on the body of the note to edit");

      },
      false);

    _li_update.style.backgroundColor = 'cornflowerblue';
    _li_update.append(_a_update);
    _a_update.append(_i_update);
    _i_update.setAttribute('class',
      'fa fa-edit');
    _ul.append(_li_update);

    //delete a note
    var _li_delete = document.createElement('li');
    var _a_delete = document.createElement('a');
    var _i_delete = document.createElement('i');
    _li_delete.id = 'noteDelete';

    //manejador de evento click para el boton home
    _li_delete.addEventListener('click',
      function () {
        var index=id_nota.substring(1);
        for (var key in notaClaves) {
          var valor = notaClaves[key];
          if (notaClaves.indexOf(valor)==index) {
            notaClaves.splice(key, 1);
            notaValor.splice(key, 1);
            var ui = UI;
            ui.inicio();

            var t = Toast;
            t.createSuccess("note delete successfully");
            if (document.getElementById('panel_editor')) {
              document.getElementById('panel_inicio').remove();
            }
           break;
          }
        }

      },
      false);

    _li_delete.style.backgroundColor = 'cornflowerblue';
    _li_delete.append(_a_delete);
    _a_delete.append(_i_delete);
    _i_delete.setAttribute('class',
      'fa fa-trash');
    _ul.append(_li_delete);


    //close
    var _li_home = document.createElement('li');
    var _a_home = document.createElement('a');
    var _i_home = document.createElement('i');
    _li_home.id = 'noteCloseSettings';

    //manejador de evento click para el boton home
    _li_home.addEventListener('click',
      function () {
        if (flag == 1) {

          var element = document.getElementById('menuSettings');
          element.style.animationName = 'closeMenu';

          setTimeout(function () {
            element.remove();
          }, 600);
          flag = 0;
        }

      },
      false);

    _li_home.style.backgroundColor = 'cornflowerblue';
    _li_home.append(_a_home);
    _a_home.append(_i_home);
    _i_home.setAttribute('class',
      'fa fa-chevron-right');
    _ul.append(_li_home);

    document.getElementById(id_nota).prepend(_ul);

  },

  inicio: () => {
    if (document.getElementById('inputSearch')) {
      document.getElementById('inputSearch').remove();
    }
    if (document.getElementById('panel_inicio')) {
      document.getElementById('panel_inicio').remove();
    }
    var panel_inicio = document.createElement('div');
    panel_inicio.id = 'panel_inicio';

    for (const key in notaClaves) {
      if (notaClaves[key]) {
        flag = 0;
        const element = notaValor[key];
        const elementBackground = notaBackground[key];
        const elementFontColor = notaFontColor[key];
        var textshort = element.replace("
", " ").substring(0, 100) + '...';
        var section = document.createElement('section');
        var bt_settingNote = document.createElement('button');

        bt_settingNote.addEventListener('click', function () {

          var ui = UI;
          if (flag == 0) {
            ui.crearMenuSettings('_'+key);
            flag = 1;
          }
        },
          false);
        section.id = "_"+key;
        section.setAttribute('class',
          'note');

        section.style.backgroundColor = notaBackground[key];
        var h3 = document.createElement('h3');
        var p = document.createElement('p');
        var i_eliminar = document.createElement('i');
        bt_settingNote.id = 'bte_' + key;
        p.addEventListener('click',
          function () {
            var ui = UI;
            ui.crearEditor();
            var txt_titulo = document.getElementById('nomNota');
            var txt_descripcion = document.getElementById('txtarea');
            txt_titulo.value = notaClaves[key];
            txt_descripcion.value = element;
            txt_descripcion.style.backgroundColor = elementBackground;
            txt_descripcion.style.color = elementFontColor;
            txt_titulo.style.color = elementFontColor;
            document.getElementById('panel_inicio').remove();
          },
          false);
        h3.addEventListener('click',
          function () {
            var ui = UI;
            ui.crearEditor();
            var txt_titulo = document.getElementById('nomNota');
            var txt_descripcion = document.getElementById('txtarea');
            txt_titulo.value = notaClaves[key];
            txt_descripcion.value = element;
            txt_descripcion.style.backgroundColor = elementBackground;
            txt_descripcion.style.color = elementFontColor;
            txt_titulo.style.color = elementFontColor;
            document.getElementById('panel_inicio').remove();
          },
          false);

        i_eliminar.setAttribute('class',
          'fa fa-ellipsis-v')
        h3.innerText = notaClaves[key];
        p.innerText = textshort;
        h3.style.color = notaFontColor[key];
        p.style.color = notaFontColor[key];
        bt_settingNote.append(i_eliminar);
        section.append(h3);
        section.append(bt_settingNote)
        section.append(p);
      }
      if (notaClaves.length == 0) {
        panel_inicio.innerText = "no tienes notas que mostrar";
      }
      panel_inicio.prepend(section);

    }
    document.body.append(panel_inicio);
  }
}
var Toast = {
  createSuccess: function (texto) {
    var div = document.createElement("div"),
    p = document.createElement("p"),
    i = document.createElement("i");
    i.setAttribute("class", "fa fa-check-circle");
    i.style.marginLeft = "20px";
    p.innerText = texto;
    div.id = "toastSuccess";
    div.style.width = "80%";
    div.style.margin = "10px auto";
    div.style.padding = "10px 10px";
    div.style.borderRadius = "5px";
    div.style.position = "fixed";
    div.style.top = "80%";
    div.style.left = "30px";
    div.style.backgroundColor = "#66BB6A";
    div.style.color = "white";
    div.style.zIndex = 1001;
    p.appendChild(i);
    div.appendChild(p);
    document.body.appendChild(div);
    setTimeout(function () {
      document.getElementById("toastSuccess").remove();
    }, 2000);
  },
  createWarning: function (texto) {
    var div = document.createElement("div"),
    p = document.createElement("p"),
    i = document.createElement("i");
    i.setAttribute("class", "fa fa-exclamation-circle");
    i.style.marginLeft = "20px";
    p.innerText = texto;
    div.id = "toast";
    div.style.width = "80%";
    div.style.margin = "10px auto";
    div.style.padding = "10px 10px";
    div.style.borderRadius = "5px";
    div.style.position = "fixed";
    div.style.top = "50%";
    div.style.left = "30px";
    div.style.backgroundColor = "#4527A0";
    div.style.color = "white";
    div.style.zIndex = 1001;
    p.appendChild(i);
    div.appendChild(p);
    document.body.appendChild(div);
    setTimeout(function () {
      document.getElementById("toast").remove();
    }, 2000);
  },
  createError: function (texto) {
    var div = document.createElement("div"),
    p = document.createElement("p"),
    i = document.createElement("i");
    i.setAttribute("class", "fa fa-times");
    i.style.marginLeft = "20px";
    p.innerText = texto;
    div.id = "toastError";
    div.style.width = "80%";
    div.style.margin = "10px auto";
    div.style.padding = "10px 10px";
    div.style.borderRadius = "5px";
    div.style.position = "fixed";
    div.style.top = "80%";
    div.style.left = "30px";
    div.style.backgroundColor = "red";
    div.style.color = "white";
    div.style.zIndex = 1001;
    p.appendChild(i);
    div.appendChild(p);
    document.body.appendChild(div);
    setTimeout(function () {
      document.getElementById("toastError").remove();
    }, 2000);
  }
}