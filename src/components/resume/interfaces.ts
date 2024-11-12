export interface ResumeData {
    work: WorkOrSchoolProps[],
    school: WorkOrSchoolProps[], 
    projects: ProjectProps[], 
    interests: InterestsProps[]
}

export interface WorkOrSchoolProps extends ExperienceProps {
    institution: string,    // School or Work Place
    location: string,
    dateStarted: string,
    dateEnded: string
}


export interface ProjectProps extends ExperienceProps {
    dateStarted: string,
    githubLink: string,
    siteLink?: string,
    hideFromResume?: boolean,
    shortDescription?: string,
    imageName?: string
}

export interface InterestsProps {
    
}

export interface ExperienceProps {
    title: string,       
    descriptionNote?: string,   
    description: string[],
    skills: string[],
    elementPosition?: string
}