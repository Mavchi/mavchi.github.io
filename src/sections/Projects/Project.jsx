import './Project.scss';
import Popup from 'reactjs-popup';
import Tag from '../../components/Tag/Tag';
import Button from '../../components/Buttons/Button';
import ButtonLink from '../../components/Buttons/ButtonLink';

const Project = ({ data }) => {
    if (!data || !data.modal || !data.modal.actions) {
        return null
    }
    
    const project = data.modal
    
    return (
      <Popup trigger={<button className="btn">Learn more</button>} modal nested>
        {(close) => (
          <div className='modal'>
            <button className='close' onClick={close}>
              &times;
            </button>
            <div className='content'>
              <div className='left'>
                <div className='header'> {project.title}</div>
                <div className='tags'>
                  {project.tech.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                <hr />
                {project.desc()}
                <div className="buttons">
                    {project.actions.map(action => <ButtonLink key={action.name} text={action.name} url={action.url} />)}
                </div>
              </div>
              <div className='right'>
                <img src={project.img} alt='' />
              </div>
            </div>
          </div>
        )}
      </Popup>
    );
};

export default Project;
// <button className='button'> Learn more </button>
