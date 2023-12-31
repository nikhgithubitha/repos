import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const {avatarUrl, starsCount, forksCount, issuesCount, name} = details

  return (
    <li>
      <img src={avatarUrl} alt={name} />
      <h1>{name}</h1>
      <div className="pro">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="pro">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="pro">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
