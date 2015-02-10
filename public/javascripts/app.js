$("#get-time").on('click', function(e){
  e.preventDefault();
  $.ajax({
    url: '/time.json',
    dataType: 'json',
    success: function(data){
      alert("the time is: " + data.time);
    },
    error: function(xhr, httpStatus, errorThrown){
      alert("The clock is unavailable due to a server side " + httpStatus);
    }
  });
});

//builds a table cell for a given value
function buildCell(value){
  return $('<td>').html(value);
}

//builds a table row for a given team
function buildTeamRow(team){
  var $row = $('<tr>');
  $row.append(buildCell(team.rank));
  $row.append(buildCell(team.name));
  $row.append(buildCell(team.wins));
  $row.append(buildCell(team.losses));
  return $row
}

function loadStandings(){
  $.ajax({
    url: '/teams.json',
    success: function(data){
      //clear the contents of the table body
      $('table tbody').html('');
      for(var i = 0; i < data.length; i++){
        $('table tbody').append(buildTeamRow(data[i]));
      }
    },
    error: function(xhr, httpStatus, errorThrown){
      alert("Something went wrong. Please try again later.");
    }
  })
}

$(function(){
  //load standings when the page loads
  loadStandings();
});
