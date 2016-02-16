app.controller('MapController',['$scope', function($scope){
  function initMap() {
    var mapController = this;
    var myLatLng = {lat: 38.2545715, lng: -85.7605157};

    $scope.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: myLatLng
    });

    $scope.marker = new google.maps.Marker({
      position: myLatLng,
      map: $scope.map,
      title: 'Cheer King Star!'
    });
  }

  initMap();

}]);
