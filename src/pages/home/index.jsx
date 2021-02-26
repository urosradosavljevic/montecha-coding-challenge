import { useSearchResults } from "shared/context/search/hooks/search-data";

import { SearchResultsGrid } from "pages/home/components/ResultsGrid";
import { BookCard } from "pages/home/components/BookCard";
import { SearchFilter } from "pages/home/components/Filter";
import { Pagination } from "pages/home/components/Pagination";

import { LoadingSpinner } from "view/LoadingSpinner";
import { Info } from "view/layout/Info";

const HomePage = () => {
  const { loading, data, error } = useSearchResults();

  if (loading) return <LoadingSpinner />;

  if (error) {
    return <Info title="Error" message={error} />;
  }

  if (data && data.numFound === 0) {
    return (
      <Info
        title="No books found"
        message="There are no books found for those combination of words."
      />
    );
  }

  if (data && data.numFound > 0) {
    return (
      <>
        <SearchFilter total={data.numFound} />
        <SearchResultsGrid>
          {data.docs.map((book, index) => (
            <BookCard key={`book-${index}`} book={book} />
          ))}
        </SearchResultsGrid>
        <Pagination />
      </>
    );
  }

  return (
    <Info
      title="Welcome to book app"
      message="Search for book in header field (Hit enter to search)"
    />
  );
};

export default HomePage;
