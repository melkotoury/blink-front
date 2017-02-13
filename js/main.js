$("#map").click(function(){
    $(this).css("pointer-events", "auto");
})
// for the map in background
function initMap() {
        var uluru = {lat: 29.938126, lng: 30.91398};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
