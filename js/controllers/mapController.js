app.controller('MapController',['$scope', function($scope){
  function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    $scope.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }
  var cheerKing={
          name : 'Cheer King Star',
          desc : 'Chinese Restaurant in Louisville, KY',
          lat : 38.2545715,
          long : -85.7605157
        }
  var mapOptions = {
      zoom:10,
      center: new google.maps.LatLng(38.2545715, -85.7605157),
      mapTypeId: google.maps.MapTypeId.ROADMAPs
  }

  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  $scope.markers = [];

  var infoWindow = new google.maps.InfoWindow();

  var createMarker = function (info){

      var marker = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(info.lat, info.long),
          title: info.city
      });


      $scope.markers.push(marker);

  }


  createMarker(cheerKing);
  $('#mapModal').on('shown.bs.modal', function () {

      google.maps.event.trigger(map, "resize");
      $scope.map.panTo(marker.getPosition());
      $scope.map.setZoom(14);
  });

}]);
