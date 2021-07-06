import './ProjectList.scss'
import Project from './Project';

const ProjectList = ({ data }) => {

  return (
    <div className='projectList'>
      {data.map((d) => (
        <div key={d.id} className='item'>
          <img src={d.img} alt='' />
          <div className='info'>
            <div className='title'>{d.title}</div>
            <div className='techniques'>{d.tech}</div>
            <Project data={d} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList