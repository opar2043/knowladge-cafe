
import PropTypes from 'prop-types'

const Bookmark =({oneBook}) => {
    let {title} = oneBook
  return (
    <div>
        <p className='text-md font-semibold bg-white rounded-lg p-2 my-2 shadow'>{title}</p>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark