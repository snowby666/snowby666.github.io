import data from './software-projects.json';

export const getSoftwareProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getSoftwareProjects();
  res.json(projects);
};
