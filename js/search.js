$(function(search) {
  $("#sr-btn").click(function() {
    $(".search-result").css("display", "block");
    //$('.search-title').html('<h3>Результаты поиска:</h3>');

    var poisk = $("#sr-data").val();
    if (poisk.length < 3) {
      $(".search-result").html("<center>Недостаточно данных для поиска</center>");
    } else {
      var poisk_up = poisk
      .toString()
      .toLowerCase()
      .substring(0, 1)
      .toUpperCase()
      .concat(poisk.substring(1));
      var poisk_split = poisk.split(" ");

      if (poisk_split.length > 1) {
        poisk_split = poisk_split[1];
      } else {
        poisk_split = "zero";
      }

      $("#xml-data").each(function(index, data) {
        var content = $(data).html();

        if (content.toLowerCase().includes(poisk.toLowerCase()) != -1) {
          $(".search-result").html(
            $(
              '.tovar:contains("' +
              poisk +
              '"),.tovar:contains("' +
              poisk.toLowerCase() +
              '"),.tovar:contains("' +
              poisk_up +
              '"),.tovar:contains("' +
              poisk.toUpperCase() +
              '"),.tovar:contains("' +
              poisk_split.toUpperCase() +
              '") '
            )
          );
          if ($(".search-result").text().length == 0) {
            $(".search-result").html(
              "<center>Извините, по вашему запросу ничего не найдено</center>"
            );
          }
          return false;
        }
      });
    }
  });
});
