require([
  '$api/models',
  'scripts/language-example',
  'scripts/cover-example',
  'scripts/button-example',
  'scripts/playlist-example',
  'scripts/search-example'
], function(models, languageExample, coverExample, buttonExample, playlistExample, searchExample) {
  'use strict';

  languageExample.doHelloWorld();
  coverExample.doCoverForAlbum();
  buttonExample.doShareButtonForArtist();
  buttonExample.doPlayButtonForAlbum();
  playlistExample.doPlaylistForAlbum();
  searchExample.doSearch();

});
