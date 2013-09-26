# The Daily Special

A jQuery plugin that pulls in images posted in a Facebook album during the last X days. Ideal for importing pictures of a restaurant's daily/weekly specials, or for a photoblog-type site. 

### Instructions

* Add daily-special.js and daily-special.css to your webpage.
* Add a div with the class "daily-special" to your page. Give the div two attributes: "data-album" and "data-days".
* For the "data-album" attribute, enter the album ID of the Facebook album you're using. To find an album's ID, go to the album, then look for the number in the URL right after "set=a.". For example, in this URL, the album ID would be 594449033946801:

`https://www.facebook.com/media/set/?set=a.594449033946801.1073741827.447333958658310&type=3`

* In the "data-days" attribute, set the number of days that you want the plugin to look back. If you want to post the past week's photos, for example, set "data-days" to 7.

Here's an example div:

`<div class="daily-special" data-album="594449033946801" data-days="3"></div>`

The plugin will automatically import photos (and their captions) from the previous X days and place them into cards on your page. 

