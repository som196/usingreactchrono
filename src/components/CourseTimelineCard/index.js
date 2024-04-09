import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {coursedetails} = props
  const {courseTitle, duration, description, tagsList} = coursedetails
  return (
    <div className="course-container">
      <div className="title-duration-container">
        <h1 className="course-title-heading">{courseTitle}</h1>
        <div className="icon-duration-container">
          <AiFillClockCircle className="react-icon" />
          <p className="duration-para">{duration}</p>
        </div>
      </div>
      <p className="description-para">{description}</p>
      <div>
        {tagsList.map(each => (
          <p className="each-tag" key={each.id}>
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
