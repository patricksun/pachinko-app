require([
  '$api/models',
  '$views/list#List'
], function(models, List) {
  'use strict';

  var doPlaylistForAlbum = function() {
    var albumMuyFragil = models.Album.fromURI('spotify:album:7rIZIIkNOSchbOV7ynugBE');
    var listMuyFragil = List.forAlbum(albumMuyFragil);
    document.getElementById('playlistContainer').appendChild(listMuyFragil.node);
    listMuyFragil.init();

    var albumAmor = models.Album.fromURI('spotify:album:0eFmjDlxeyvVbDHF8OfJSs');
    var listAmor = List.forAlbum(albumAmor);
    document.getElementById('playlistContainer').appendChild(listAmor.node);
    listAmor.init();
  };

  exports.doPlaylistForAlbum = doPlaylistForAlbum;
});
