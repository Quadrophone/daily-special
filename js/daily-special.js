 $(document).ready(function() {
     var album = $('div.daily-special').attr('data-album');
     var days = $('div.daily-special').attr('data-days');
     var limit = (days * 86400);
     $.ajax({
         url: 'http://graph.facebook.com/' + album + '/photos?date_format=U',
         dataType: 'jsonp',
         success: function(data) {
             $.each(data, function(k1, data) {
                 var pictureArray = data;
                 $.each(pictureArray, function(k2, pictureObject) {
                     var title = pictureObject.name;
                     var date = (pictureObject.created_time);
                     var now = (Date.now() / 1000);
                     var img = $('<div class="daily-special-container"><img class="special" src="' + pictureObject.source + '" title="' + title + '" /><span class="special-caption">' + pictureObject.name + '</span></div>');
                     if ((now - date) <= limit) {
                         $(img).appendTo('div.daily-special');
                     } else {
                         return false;
                     }
                 });
             });
         }
     });
 });
