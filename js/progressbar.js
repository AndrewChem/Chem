$(function() {
    var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Загружено" );
      }
    });
 
    /*function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
       progressbar.progressbar( "value", val + 1 );
       if ( val < 99 ) {
        setTimeout( progress, 50 );
      }
    }
    setTimeout( progress, 300 );*/
  });