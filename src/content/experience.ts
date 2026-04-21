import type { TimelineItem } from '@/types/portfolio';

export const experienceDefinitions: Array<Pick<TimelineItem, 'id' | 'animation'>> = [
  {
    id: 'independentDeveloper',
    animation: 'fade-left',
  },
  {
    id: 'academicProjects',
    animation: 'fade-right',
  },
];
