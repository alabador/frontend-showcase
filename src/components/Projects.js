import Card from './Card';
import './Projects.scss';

const Projects = () => {
    return(
        <div className='Projects'>
            <Card source={'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'} theme={'Card'}/>
            <Card source={'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'} theme={'Card-flip'} />
        </div>
    )
}

export default Projects;