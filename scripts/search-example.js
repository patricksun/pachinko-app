require([
  '$api/models',
  '$api/search#Search',
  '$views/list#List'
], function(models, Search, List) {
  'use strict';

  var doSearch= function() {
	var searchMayte = Search.search('mayte martin');
    var listMayte = List.forCollection(searchMayte);
    document.getElementById('searchContainer').appendChild(listMayte.node);
    list.init();
  };

  exports.doSearch = doSearch;
});
