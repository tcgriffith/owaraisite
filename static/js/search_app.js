// var client = algoliasearch('YourApplicationID', 'YourAPIKey');
// var index = client.initIndex('your_index_name');

var client = algoliasearch("AK96YQUG40", "7afd6d46df6d8fae79769e7b70f9d7dc");
var index = client.initIndex('owaraiclub_search');


index.setSettings({
  searchableAttributes: [
    'title',
    'brief',
    'tags',
    'categories'


  ],
  attributesToHighlight: [
    'content',
    'description',
    'title',
    'brief'
  ],
  customRanking: ['desc(popularity)'],
});

var search = instantsearch({
  // Replace with your own values
  appId: 'AK96YQUG40',
  apiKey: '7afd6d46df6d8fae79769e7b70f9d7dc', // search only API key, no ADMIN key
  indexName: 'owaraiclub_search',
  urlSync: true,
  searchParameters: {
    hitsPerPage: 10
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

// Add this after the previous JavaScript code
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

// Add this after the other search.addWidget() calls
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);



// Add this after all the search.addWidget() calls
search.start();

