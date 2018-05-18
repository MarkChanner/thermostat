$(document).ready(function() {
  var thermostat = new Thermostat();
  updateView();

  $('#cityName').change(function() {
    var city = $('#cityName').val();
    $.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=metric' +
        '&APPID=0fcf144e5a82f6f0f2e6eea2c5a2ea9d',
      function(response) {
        $('#city-temperature').text(response.main.temp);
      }
    );
  });

  $('#temperature-up').click(function() {
    thermostat.up();
    updateView();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateView();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateView();
  });

  $('#power-saving').click(function() {
    thermostat.togglePowerSaving();
    updateView();
  });

  $('#power-usage').click(function() {
    updateView();
  });

  function updateView() {
    $('#display-temperature').text(thermostat.temperature);
    $('#display-pu').text(thermostat.energyUsage());
    $('#display-eco').text(thermostat.ecoDisplay());
  }
});
