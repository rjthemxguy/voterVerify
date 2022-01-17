import React, {useState, createContext} from 'react';
 
export const SearchContext = createContext();
 
const SearchState = (props) => {
 
 
const [data, setSearchState] = useState({});
 
 
   return(
      <SearchContext.Provider value = {{data, setSearchState}}>
          {props.children}
      </SearchContext.Provider>
   );
 
 
  
}
 
export default SearchState;

