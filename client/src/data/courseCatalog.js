import basicComputerPoster from '../assets/images/basic computer.jpg';
import pythonPoster from '../assets/images/python.jpg';
import dataSciencePoster from '../assets/images/datascience.jpg';
import webPoster from '../assets/images/web.jpg';

const posterCourses = [
  {
    title: 'Basic Computer',
    subtitle: 'Essential digital skills for beginners',
    slug: 'basic-computer',
    duration: '3 months',
    fee: '12000',
    faculty: 'Senior Mentor',
    overview:
      'Build confidence with everyday digital tools, internet basics, and productivity software. Perfect for learners starting their tech journey.',
    image: basicComputerPoster
  },
  {

    title: 'Python',
    subtitle: 'Programming foundations with real projects',
    slug: 'python',
    duration: '6 months',
    fee: '27000',
    faculty: 'Industry Expert',
    overview:
      'Master Python fundamentals, data handling, and automation through hands-on projects designed for real-world use cases.',
    image: pythonPoster
  },
  {
    title: 'Data Science with Agentic AI',
    subtitle: 'Analytics and AI-driven automation',
    slug: 'data-science',
    duration: '8 months',
    fee: '42000',
    faculty: 'Project Coach',
    overview:
      'Learn data science workflows, model building, and AI-assisted analytics to deliver insights that drive decisions.',
    image: dataSciencePoster
  },
  {
    title: 'Web Development',
    subtitle: 'Build modern responsive websites',
    slug: 'web-development',
    duration: '6 months',
    fee: '30000',
    faculty: 'Senior Mentor',
    overview:
      'Design and build responsive websites with modern tools, from layouts and components to deployment best practices.',
    image: webPoster
  }
];

const courseCatalog = posterCourses.reduce((acc, course) => {
  acc[course.slug] = course;
  return acc;
}, {});

export { posterCourses, courseCatalog };
