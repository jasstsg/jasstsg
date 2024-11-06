import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from '../../components/timeline/TimelineElement';
import { TimelineElementStyle } from "../../components/timeline/interfaces";
import './timeline.scss';
import resumeData from '../../data/resume.json';
import { WorkOrSchoolProps } from '../../components/resume/interfaces';
import Pill from '../../components/pill/Pill';

function Timeline(props: any) {

  const work: WorkOrSchoolProps[] = resumeData.work;

  const timelineTheme: TimelineElementStyle = {
    contentBackgroundColor: "#404040",
    contentColor: 'white',
    arrowColor: '#404040',
    iconBackgroundColor: '#404040',
    iconColor: 'black'
  }

  return (
    <section className="timeline">
      <h1>Hi, I'm <span id="name">Tyler</span>, welcome to my website!</h1>
      <h2>This has been my jounry so far.</h2>
      <VerticalTimeline>
        {
          work.map((record) => (
            <TimelineElement element={{
              style: timelineTheme,
              content: {
                date: (`${record.dateStarted}` + (record.dateEnded ? ` - ${record.dateEnded}` : '')),
                title: record.title,
                subtitle: "",
                content: (record.skills.map(s => <Pill text={s}></Pill>)),                
                // icon: (<span className={"fab fa-github-square"}></span>)
              }
            }
            }></TimelineElement>
          ))
        }
      </VerticalTimeline>
    </section>
  )
}

export default Timeline;