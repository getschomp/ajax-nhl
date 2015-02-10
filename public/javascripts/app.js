
$("#get-time").on('click', function(e){
  e.preventDefault();

  $.ajax({
    url: '/time.json',
    dataType: 'json',
    success: function(data){
      alert("the time is:" + data.time);
    }
  });

});
