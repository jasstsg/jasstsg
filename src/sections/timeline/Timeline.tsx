import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from '../../components/timeline/TimelineElement';
import { TimelineElementStyle } from "../../components/timeline/interfaces";
import './timeline.scss';
import resumeData from '../../data/resume.json';
import { WorkOrSchoolProps } from '../../components/resume/interfaces';
import Pill from '../../components/pill/Pill';
import { getCSSVariable } from '../../helpers/styleHelper';

function Timeline(props: any) {

  const work: WorkOrSchoolProps[] = resumeData.work;

  const timelineTheme: TimelineElementStyle = {
    contentBackgroundColor: getCSSVariable("--charcoal"),
    contentColor: getCSSVariable("--absolute-black"),
    arrowColor: getCSSVariable("--charcoal"),
    iconBackgroundColor: getCSSVariable("--charcoal"),
    iconColor: getCSSVariable("--absolute-black")
  }

  return (
    <section className="timeline">
      <h1>Hi, I'm <span id="name">Tyler</span>, welcome to my website!</h1>
      <h2>This has been my journey so far.</h2>
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