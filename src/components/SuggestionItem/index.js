// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="single-list-item">
      <p className="paragraph">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="custom-image"
        alt="arrow"
        onClick={onClickSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
