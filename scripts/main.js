;(function ($) {
  var $document = $(document);

  var position = [55.9577167, 37.8528077];
  function showGoogleMaps() {

      var latLng = new google.maps.LatLng(position[0], position[1]);

      var mapOptions = {
        zoom: 16, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
      };

      map = new google.maps.Map(document.querySelector('.js-map'),
        mapOptions);

      // Show the default red marker at the location
      marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
      });
  }
  google.maps.event.addDomListener(window, 'load', showGoogleMaps);
  
  $document.on('ready', function () {
    $('.js-fullpage').fullpage({
      onLeave: function (index, nextIndex, direction) {
        var $fromSection = $('.js-section-' + index);
        var $toSection = $('.js-section-' + nextIndex);

        if (nextIndex < 7 && index < 7) {
          var $fromSectionImage = $fromSection.find('.block--left__image');
          var $toSectionImage = $toSection.find('.block--left__image');
          var sectionImageClassName = $fromSectionImage[0].className;

          var $fromSectionTitle = $fromSection.find('.block--right__title');
          var $toSectionTitle = $toSection.find('.block--right__title');
          var sectionTitleClassName = $fromSectionTitle[0].className;

          var $fromSectionDescription = $fromSection.find('.block--right__description');
          var $toSectionDescription = $toSection.find('.block--right__description');
          var sectionDescriptionClassName = $fromSectionDescription[0].className;

          var $fromSectionFooter = $fromSection.find('.block--right__footer');
          var $toSectionFooter = $toSection.find('.block--right__footer');
          var sectionFooterClassName = $fromSectionFooter[0].className;

          var $fromSectionAction = $fromSection.find('.block--right__action');
          var $toSectionAction = $toSection.find('.block--right__action');
          var sectionActionClassName = $fromSectionAction[0].className;

          if (direction === 'down') {
            $fromSectionImage.addClass('animated slideOutUpLeft');
            $toSectionImage.addClass('animated slideInUpLeft').css({ 'animation-delay': '700ms' });

            $fromSectionTitle.addClass('animated fadeOutUp');
            $toSectionTitle.addClass('animated fadeInUp').css({ 'animation-delay': '700ms' });

            $fromSectionDescription.addClass('animated fadeOutUp').css({ 'animation-delay': '50ms' });
            $toSectionDescription.addClass('animated fadeInUp').css({ 'animation-delay': '700ms' });

            $fromSectionFooter.addClass('animated fadeOutUp').css({ 'animation-delay': '100ms' });
            $toSectionFooter.addClass('animated fadeInUp').css({ 'animation-delay': '700ms' });

            $fromSectionAction.addClass('animated fadeOutUp').css({ 'animation-delay': '150ms' });
            $toSectionAction.addClass('animated fadeInUp').css({ 'animation-delay': '700ms' });
          } else {
            $fromSectionImage.addClass('animated slideOutDownLeft');
            $toSectionImage.addClass('animated slideInDownLeft').css({ 'animation-delay': '700ms' });

            $fromSectionTitle.addClass('animated fadeOutDown');
            $toSectionTitle.addClass('animated fadeInDown').css({ 'animation-delay': '700ms' });

            $fromSectionDescription.addClass('animated fadeOutDown').css({ 'animation-delay': '50ms' });
            $toSectionDescription.addClass('animated fadeInDown').css({ 'animation-delay': '700ms' });

            $fromSectionFooter.addClass('animated fadeOutDown').css({ 'animation-delay': '100ms' });
            $toSectionFooter.addClass('animated fadeInDown').css({ 'animation-delay': '700ms' });

            $fromSectionAction.addClass('animated fadeOutDown').css({ 'animation-delay': '150ms' });
            $toSectionAction.addClass('animated fadeInDown').css({ 'animation-delay': '700ms' });
          }

          setTimeout(function () {
            $fromSectionImage[0].className = $toSectionImage[0].className = sectionImageClassName;
            $fromSectionImage.attr('style', '');
            $toSectionImage.attr('style', '');

            $fromSectionTitle[0].className = $toSectionTitle[0].className = sectionTitleClassName;
            $fromSectionTitle.attr('style', '');
            $toSectionTitle.attr('style', '');

            $fromSectionDescription[0].className = $toSectionDescription[0].className = sectionDescriptionClassName;
            $fromSectionDescription.attr('style', '');
            $toSectionDescription.attr('style', '');

            $fromSectionFooter[0].className = $toSectionFooter[0].className = sectionFooterClassName;
            $fromSectionFooter.attr('style', '');
            $toSectionFooter.attr('style', '');

            $fromSectionAction[0].className = $toSectionAction[0].className = sectionActionClassName;
            $fromSectionAction.attr('style', '');
            $toSectionAction.attr('style', '');
          }, 1700)
        }

        setTimeout(function () {
          $('.js-number').text('0' + nextIndex);
        }, 700);
      }
    })
  });
})(window.jQuery);