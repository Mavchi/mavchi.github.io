import './Projects.scss'

import { useState, useEffect } from 'react'
import { filterItems, projectItems } from '../../data'
import Filter from './Filter'
import ProjectList from './ProjectList'
import Project from './Project'
import SectionTitle from '../../components/SectionTitle/SectionTitle'


const Projects = () => {
    const [selectedFilter, setSelected] = useState(filterItems[0])
    const [selectedProject, setSelectedProject] = useState(null)
    const [data, setData] = useState(projectItems);

    useEffect(() => {
        const newData = projectItems.filter(item => item.tags.includes(selectedFilter) )
        setData(newData)
    }, [selectedFilter])

    

    return (
      <div className='projects' id='projects'>
        <SectionTitle text='Projects' />
        <Filter filterItems={filterItems} selected={selectedFilter} setSelected={setSelected} />
        <ProjectList data={data} setSelectedProject={setSelectedProject} />
        <Project selectedProject={selectedProject} />
      </div>
    );
}

export default Projects