// google map
function myMap() {
var mapProp= {
center:new google.maps.LatLng(-27.469770,153.025131),
zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

// google recaptcha
iframe: {
    markup: '<div class="mfp-iframe-scaler">'+
    '<div class="mfp-close"></div>'+
    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
    '<div class="mfp-title mfp-bottom-iframe-title"></div>'+
    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

    patterns: {
        youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

            id: null, // String that splits URL in a two parts, second part should be %id%
            // Or null - full URL will be returned
            // Or a function that should return %id%, for example:
            // id: function(url) { return 'parsed id'; }

            src: '%id%?autoplay=1' // URL that will be set as a source for iframe.
        },
        vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: '//player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
            index: '//maps.google.',
            src: '%id%&output=embed'
        }
    },

    srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
},
