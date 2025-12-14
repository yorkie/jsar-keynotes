export const SLIDES = [
  { path: '/', title: 'Cover' },
  { path: '/slide/1', title: 'Problem Statement' },
  { path: '/slide/2', title: 'Concept Definition' },
  { path: '/slide/3', title: 'Why the Web Should Be Spatial' },
  { path: '/slide/4', title: 'Progressive Spatialization (Safari)' },
  { path: '/slide/5', title: 'Why Not Extend Traditional Browsers?' },
  { path: '/slide/6', title: 'Path Comparison' },
  { path: '/slide/7', title: 'JSAR Methodology' },
  { path: '/slide/8', title: 'Runtime Architecture' },
  { path: '/slide/9', title: 'Core Capabilities' },
  { path: '/slide/10', title: 'Challenge: Async Composition' },
  { path: '/slide/11', title: 'Challenge: Spatial DOM & Overflow' },
  { path: '/slide/12', title: 'Challenge: Filters & Shadows' },
  { path: '/slide/13', title: 'Use Cases' },
  { path: '/slide/14', title: 'Summary' },
];

export const getSlideNavigation = (currentPath: string) => {
  const index = SLIDES.findIndex(s => s.path === currentPath);
  const prevPath = index > 0 ? SLIDES[index - 1].path : undefined;
  const nextPath = index < SLIDES.length - 1 ? SLIDES[index + 1].path : undefined;
  return {
    slideNumber: index + 1,
    totalSlides: SLIDES.length,
    prevPath,
    nextPath
  };
};
