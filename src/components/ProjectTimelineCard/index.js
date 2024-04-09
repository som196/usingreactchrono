import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectdata} = props
  const {
    imageUrl,
    duration,
    description,
    projectUrl,
    projectTitle,
  } = projectdata

  return (
    <div className="project-container">
      <div>
        <img src={imageUrl} alt="project-img" className="project-img" />
        <div className="project-title-container">
          <h1 className="project-title-heading">{projectTitle}</h1>
          <div className="icon-duration-container">
            <AiFillCalendar className="react-icon" />
            <p className="duration-para" target="_blank">
              {duration}
            </p>
          </div>
        </div>
        <p>{description}</p>
        <a href={projectUrl}>Visit</a>
      </div>
    </div>
  )
}
export default ProjectTimelineCard
