import { ChakraProvider } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";

import { SearchInputForm } from "components/SearchInput";
import { BookSearchProvider } from "shared/context/search";

import Header from "view/layout/Header";
import Main from "view/layout/Main";
import HomePage from "pages/home";
import BookPage from "pages/works";
import { NavLink } from "components/NavLink";

const App = () => {
  return (
    <ChakraProvider>
      <BookSearchProvider>
        <Header navLinks={[<NavLink content="Home" href="/" />]}>
          <SearchInputForm />
        </Header>
        <Main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/works/:key/:author" component={BookPage} />
          </Switch>
        </Main>
      </BookSearchProvider>
    </ChakraProvider>
  );
};

export default App;
