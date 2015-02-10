$("#get-time").on('click', function(e){
  e.preventDefault();
  console.log("issuing HTTP request")
  $.ajax({
    url: '/slow_time.json',
    dataType: 'json',
    success: function(data){
      console.log("successful HTTP response received")
      alert("the time is: " + data.time);
    }
  });

  console.log("I can do other things in JavaScript while we wait");
});
