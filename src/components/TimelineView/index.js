import './index.css'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const decideCategory = itemSent => {
    const {categoryId} = itemSent
    if (categoryId === 'COURSE') {
      return <CourseTimelineCard coursedetails={itemSent} key={itemSent.id} />
    }
    return <ProjectTimelineCard projectdata={itemSent} key={itemSent.id} />
  }

  return (
    <div className="main-container">
      <h1 className="heading-main">
        <span className="my-journey-span">MY JOURNEY OF</span> CCBP 4.0
      </h1>
      <div className="chrono-container">
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(eachItem => decideCategory(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
