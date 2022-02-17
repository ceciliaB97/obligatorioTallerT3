import React,{ useState } from "react";
import './Autocomplete.css';
import SuggestionsListComponent from "./SuggestionsListComponent";

const AutoCompleteHelper = (props) => {
    console.log(props);
const { innerRef,suggestions,placeholderText } = props;

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState('');
console.log("suggestions",suggestions);

  const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    console.log("filtered suggestions",unLinked);

    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };


  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const onKeyDown = (e) => {

  }

  return (
    <>
      <input
       className="form-control"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholderText}
        ref={innerRef}
        value={input}
      />
      {
        showSuggestions && input && <SuggestionsListComponent onClickEvent={onClick}
            filteredSuggestions={filteredSuggestions} 
            activeSuggestionIndex={activeSuggestionIndex} />
      }
    </>
  );
};

const AutoComplete = React.forwardRef(
    (props, ref) => <AutoCompleteHelper
  innerRef={ref} {...props}
/>);

export default AutoComplete;
