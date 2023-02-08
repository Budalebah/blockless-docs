import { FC, useState } from 'react';
import styles from './SearchPanel.module.scss';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  Configure,
  connectStateResults,
} from 'react-instantsearch-dom';
import { Hit } from './components';
import { SearchBox } from './components/SearchBox';
import cls from 'classnames';

const APP_ID = process.env.REACT_APP_ALGOLIA_APP_ID;
const SEARCH_API_KEY = process.env.REACT_APP_SEARCH_API_KEY;

const Results = connectStateResults(({ searchState, searchResults }) => {
  return (
    <>
      {!!searchResults?.hits?.length ? (
        <Hits hitComponent={Hit} />
      ) : (
        <p className={styles.empty_result}>
          No results have been found for <span>{searchState.query}</span>
        </p>
      )}
    </>
  );
});

interface ISearchProps {
  showSearch?: boolean,
}

const SearchPanel: FC<ISearchProps> = ({showSearch}) => {
  const algoliaClient = algoliasearch(
    APP_ID as string,
    SEARCH_API_KEY as string
  );

  const [isEmptyResult, setIsEmptyResult] = useState(false);

  const searchClient = {
    ...algoliaClient,
    search(requests: any) {
      if (requests.every((item: any) => !item.params.query)) {
        setIsEmptyResult(true);
        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            page: 0,
            processingTimeMS: 0,
          })),
        });
      }
      setIsEmptyResult(false);
      return algoliaClient.search(requests);
    },
  };

  return (
    <div className={cls(styles.wrapper, {
      [styles.hide]: !showSearch,
    })}>
      <InstantSearch indexName="docs_search" searchClient={searchClient}>
        <Configure
          attributesToSnippet={['content:80']}
          snippetEllipsisText="..."
        />
        <SearchBox />
        {!isEmptyResult && (
          <div className={styles.search_results}>
            <div className={styles.results_wrapper}>
              <Results />
            </div>
          </div>
        )}
      </InstantSearch>
    </div>
  );
};

export default SearchPanel;
