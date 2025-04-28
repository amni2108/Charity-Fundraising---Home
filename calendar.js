<!-- Add this in your index.html or about.html -->
<link href='https://cdn.jsdelivr.net/npm/fullcalendar@5.11.0/main.min.css' rel='stylesheet' />
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@5.11.0/main.min.js'></script>

<div id='calendar'></div>

<script>
$(document).ready(function(){
  let events = {
    "2025-04-10": "Earth Day Fundraising",
    "2025-04-21": "Volunteer Clean-up Drive",
    "2025-05-05": "Charity Run for Education",
    "2025-05-20": "Food Donation Week",
    "2025-06-08": "Healthcare Awareness Talk",
    "2025-06-25": "Save the Oceans Campaign"
  };

  let calendar = $('<table>').addClass('calendar-table');
  let today = new Date();
  let months = ["April", "May", "June"];
  let monthIndex = today.getMonth();

  months.forEach(function(month, idx) {
    calendar.append('<tr><th colspan="7">'+ month +' 2025</th></tr>');
    calendar.append('<tr><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr>');

    let date = new Date(2025, 3+idx, 1); // April = 3
    let day = date.getDay();
    let daysInMonth = new Date(2025, 4+idx, 0).getDate();

    let row = $('<tr>');
    for(let i=0; i<day; i++){
      row.append('<td></td>');
    }

    for(let d=1; d<=daysInMonth; d++){
      if((day % 7) == 0){
        calendar.append(row);
        row = $('<tr>');
      }
      let fullDate = `2025-${(4+idx).toString().padStart(2,'0')}-${d.toString().padStart(2,'0')}`;
      let cell = $('<td>').text(d);

      if(events[fullDate]){
        cell.addClass('event-day').attr('title', events[fullDate]);
        cell.css('background', '#ffe6ec').css('cursor', 'pointer');
        cell.click(function(){
          alert(events[fullDate]);
        });
      }
      row.append(cell);
      day++;
    }
    calendar.append(row);
  });

  $("#calendar").append(calendar);
});
</script>
