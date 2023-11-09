import ProjectCard from '../components/ProjectCard';
import { getSoftwareProjects } from './api/software-projects';
import { getBotsProjects } from './api/bots-projects';
import { getPyPiProjects } from './api/pypi-projects';
import { getMiscProjects } from './api/misc-projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ software_projects, bots_projects, pypi_projects, misc_projects }) => {
  return (
    <>
      <h3>Open Source Projects</h3>
      <br/>
      <center><h4>Software Development</h4></center>
      <hr/>
      <div className={styles.container}>
        {software_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* <br/>
      <center><h4>Games</h4></center>
      <hr/>
      <div className={styles.container}>
        {bots_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div> */}
      <br/>
      <center><h4>PyPi Packages</h4></center>
      <hr/>
      <div className={styles.container}>
        {pypi_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* <br/>
      <center><h4>Misc Projects</h4></center>
      <hr/>
      <div className={styles.container}>
        {misc_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div> */}
    </>
  );
};

export async function getStaticProps() {
  const software_projects = getSoftwareProjects();
  const bots_projects = getBotsProjects();
  const pypi_projects = getPyPiProjects();
  const misc_projects = getMiscProjects();

  return {
    props: { title: 'Projects', software_projects, bots_projects, pypi_projects, misc_projects },
  };
}

export default ProjectsPage;
