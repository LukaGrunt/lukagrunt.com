export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  tags: string[];
  highlight?: boolean; // For featured roles
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Tool {
  name: string;
  icon?: string;
}

export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    twitterHandle: string;
    twitterUrl: string;
    twitterFollowers: string;
  };
  workExperience: WorkExperience[];
  skills: Skill[];
  tools: Tool[];
}
