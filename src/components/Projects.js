import Card from './Card';
import './Projects.scss';

const Projects = () => {
    return(
        <div className='Projects'>
            <Card 
                name = {'Four Card Feature Section'}
                source={'./images/four-card-feature.png'} 
                flip={'Card'}
                project = {'https://alabador.github.io/frontend-ui/four-card-feature-section/'}
                repo = {'https://github.com/alabador/frontend-ui/tree/main/four-card-feature-section'}
                stack = {['HTML', 'CSS']}
            />
            <Card 
                name = {'Advice Generator App'}
                source={'./images/advice-screenshot.png'} 
                flip={'Card-flip'}
                project = {'https://alabador.github.io/frontend-ui/advice-generator-app/'}
                repo = {'https://github.com/alabador/frontend-ui/tree/main/advice-generator-app'} 
                stack = {['HTML', 'SCSS', 'JavaScript']}
            />
            <Card 
                name = {'Altis Sign Up Form'}
                source={'./images/signup-form.jpg'} 
                flip={'Card'}
                project = {'https://alabador.github.io/sign-up-form/'}
                repo = {'https://github.com/alabador/sign-up-form'}
                stack = {['HTML', 'SCSS', 'JavaScript']}
            />
        </div>
    )
}

export default Projects;