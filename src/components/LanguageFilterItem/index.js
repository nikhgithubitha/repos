import './index.css'

const LanguageFilterItem = props => {
  const {languageData, updateOption} = props
  const {language} = languageData
  const onChange = id => {
    updateOption(id)
  }

  return (
    <li>
      <button type="button" onClick={onChange}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
