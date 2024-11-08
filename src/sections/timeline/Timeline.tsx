import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from '../../components/timeline/TimelineElement';
import './timeline.scss';
import resumeData from '../../data/resume.json';
import { WorkOrSchoolProps } from '../../components/resume/interfaces';
import Pill from '../../components/pill/Pill';
import { getCSSVariable } from '../../helpers/styleHelper';
import { TimelineElementProps } from '../../components/timeline/interfaces';
import Hero from '../hero/Hero';

function Timeline(props: any) {

  const work: WorkOrSchoolProps[] = resumeData.work;
  const sitecore = work.filter(record => record.institution === "Sitecore");
  const l3wescam = work.filter(record => record.institution === "L3 WESCAM");

  const school: WorkOrSchoolProps[] = resumeData.school;

  return (
    <section id="timeline">
      <div className="timeline-container">
        <Hero></Hero>
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
          <div className="mcmaster sub-timeline">     
            {
              school.map((record: WorkOrSchoolProps) => (
                <TimelineElement key={record.title} 
                  element={generateTimelineElementProps(record, "left")} />
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