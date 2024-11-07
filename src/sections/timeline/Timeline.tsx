import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from '../../components/timeline/TimelineElement';
import './timeline.scss';
import resumeData from '../../data/resume.json';
import { WorkOrSchoolProps } from '../../components/resume/interfaces';
import Pill from '../../components/pill/Pill';
import { getCSSVariable } from '../../helpers/styleHelper';
import { TimelineElementProps } from '../../components/timeline/interfaces';

function Timeline(props: any) {

  const work: WorkOrSchoolProps[] = resumeData.work;
  const sitecore = work.filter(record => record.institution == "Sitecore");
  const l3wescam = work.filter(record => record.institution == "L3 WESCAM");

  return (
    <section id="timeline">
      <div className="timeline-container">
      <h1>Welcome to my website! I'm <span id="name">Tyler</span>.</h1>
      <h2>Its still under construction, but while you're here check my journey so far!</h2>
      <VerticalTimeline lineColor={getCSSVariable("--foreground1")}>
        <div className="sitecore sub-timeline">
          {
            sitecore.map((record: WorkOrSchoolProps) => (
              <TimelineElement key={record.title} 
                element={generateTimelineElementProps(record, "left")} />
            ))
          }
        </div> 
        <div className="l3wescam sub-timeline">     
          {
            l3wescam.map((record: WorkOrSchoolProps) => (
              <TimelineElement key={record.title} 
                element={generateTimelineElementProps(record, "right")} />
            ))
          }
        </div> 
      </VerticalTimeline>
      </div>
    </section>
  )
}

function generateTimelineElementProps(record: WorkOrSchoolProps, elementPosition: string): TimelineElementProps {
  return {
    elementPosition: elementPosition,
    date: (`${record.dateStarted}` + (record.dateEnded ? ` - ${record.dateEnded}` : '')),
    title: record.title,
    institution: record.institution,
    content: (record.skills.map(s => <Pill key={s} text={s}></Pill>)), 
    //icon: (<span className="fab fa-github-sqaure"></span>)
  };
}

export default Timeline;