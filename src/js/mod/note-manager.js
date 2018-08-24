var Toast = require('./toast.js').Toast;
var Note = require('./note.js').Note;
var Toast = require('./toast.js').Toast;
var Event = require('mod/event.js');


var NoteManager = (function(){

  function load() {
    $.get('/api/notes')
      .done(function(ret){
        if(ret.status == 0){
          $.each(ret.data, function(idx, article) {
              console.log(article.text)
              for(var i in article.text){
                if (str[i] == '\'')
                   str[i]=("&#039;");
                else if (str[i] == '\"')
                   str[i]=("&#034;");
                else if (str[i] == '<')
                   str[i]=("&lt;");
                else if (str[i] == '>')
                   str[i]=("&gt;");
                else if (str[i] == '&')
                   str[i]=("&amp;");
                else if (str[i] == ' ')
                   str[i]=("&nbsp;");
                else if (str[i] == '\n')
                   str[i]=("<br/>");
                else
                   str[i];
                  }
              new Note({
                id: article.id,
                context: article.text,
                username: article.username
              });
          });

          Event.fire('waterfall');
        }else{
          Toast(ret.errorMsg);
        }
      })
      .fail(function(){
        Toast('网络异常');
      });


  }

  function add(){
    new Note();
  }

  return {
    load: load,
    add: add
  }

})();

module.exports.NoteManager = NoteManager