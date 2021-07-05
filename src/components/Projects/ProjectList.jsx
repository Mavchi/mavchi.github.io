import './ProjectList.scss'

const ProjectList = ({ data }) => {
    console.log(data)

    return (
      <div className='projectList'>
        {data.map((d) => (
          <div key={d.id} className='item'>
            <img src={d.img} alt='' />
            <div className='info'>
              <div className='title'>{d.title}</div>
              <div className="techniques">{d.tech}</div>
              <div className="button">Learn more</div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default ProjectList