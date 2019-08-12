
// const searchClient = algoliasearch('VB9T8VTPNU', 'cb3265feef0bb0b4bc7f8a4a4986456a');
var searchClient = algoliasearch("AK96YQUG40", "7afd6d46df6d8fae79769e7b70f9d7dc");
var search = instantsearch({
  indexName: 'owaraiclub_search',
  searchClient,
  searchParameters: {
    // hitsPerPage: 10
  },
  // handling empty query
  // https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-display/js/#handling-empty-queries
  searchFunction(helper) {
    const container = document.querySelector('#results');

    if (helper.state.query === '') {
      container.style.display = 'none';
    } else {
      container.style.display = '';
    }

    helper.search();
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    searchAsYouType: true,
  })
);

search.addWidget(
  instantsearch.widgets.configure({
    attributesToSnippet: ['brief'],
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
            <article class="preview">
                <header>
                    <h1 class="post-title"><a href="/{{uri}}">{{#helpers.highlight}}{ "attribute": "title", "highlightedTagName": "mark" }{{/helpers.highlight}}</a></h1>
                    <div class="post-meta">
                        <span>{{{autor}}}</span> ·
                        <time datetime="{{{date}}}">{{{date}}}</time>
                    </div>
                </header>
                <section class="post-excerpt">
                    <p>{{#helpers.snippet}}{ "attribute": "brief", "highlightedTagName": "mark" }{{/helpers.snippet}}</p>
                </section>
            </article>
      `,
      // item: `
      //   <div class="hit">
      //     <a href = "{{uri}}">
      //       <div class="hit-content">
      //         <h2 class="hit-name">{{{_highlightResult.title.value}}}</h2>
      //         <p class="hit-description">{{{_highlightResult.brief.value}}}</p>
      //       </div>
      //     </a>
      //   </div>
      // `,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);

search.start();
