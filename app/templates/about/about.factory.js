(function() {
    'use strict';

    angular
        .module('terangular-app')
        .factory('AboutFactory', AboutFactory);

    function AboutFactory() {
        var artist = "Ken Vilar";

        var album = {};

        album.getArtist = function() {
            return artist;
        };

        return album;
    }
}());
