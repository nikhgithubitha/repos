import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {language: 'All', list: [], isLoading: true}

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    const {language} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${language}`
    const options = {
      method: 'GET',
    }
    const response = fetch(url, options)
    const data = response.json()
    console.log(data)
    const formattedData = data.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))
    this.setState({list: formattedData, isLoading: false})
  }

  updateOption = id => {
    const data = languageFiltersData.find(each => each.id === id)
    this.setState({language: data.language}, this.getList)
  }

  renderIcons = () => (
    <div>
      <h1>Popular</h1>
      <ul>
        {languageFiltersData.map(each => (
          <LanguageFilterItem key={each.id} updateOption={this.updateOption} />
        ))}
      </ul>
    </div>
  )

  failureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something Went Wrong</h1>
    </div>
  )

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderList = () => {
    const {list} = this.state
    if (list === undefined) {
      return this.failureView()
    }
    return (
      <ul>
        {list.map(each => (
          <RepositoryItem key={each.id} details={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    const result = isLoading ? this.renderLoader() : this.renderList()
    return (
      <>
        <div>{this.renderIcons()}</div>
        <div>{result}</div>
      </>
    )
  }
}

export default GithubPopularRepos
