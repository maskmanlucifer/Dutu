$(document).ready(function(){

    $('form').on('keypress', function(e){
      /*Detecting enter key.*/
      if(e.which==13)
      {
        /* Taking input value.*/
        let item = $('form input');
        let todo = {item: item.val()};

        /*Making a post request to server.*/
        $.ajax({
          type: 'POST',
          url: '/dutu',
          data: todo,
          success: function(data){
            location.reload();
          }
        });
        return false;
      }
  
    });
  
    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, "-");
        /*Making a delete request to server.*/
        $.ajax({
          type: 'DELETE',
          url: '/dutu/' + item,
          success: function(data){
            location.reload();
          }
        });
    });
  
  });