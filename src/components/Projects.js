import Card from './Card';
import './Projects.scss';

const Projects = () => {
    return(
        <div className='Projects'>
            <Card 
                name = {'Advice Generator App'}
                source={'./images/advice-generator.gif'} 
                project = {'https://alabador.github.io/frontend-ui/advice-generator-app/'}
                repo = {'https://github.com/alabador/frontend-ui/tree/main/advice-generator-app'} 
                stack = {['HTML', 'SCSS', 'JavaScript']}
            />
            <Card 
                name = {'Four Card Feature Section'}
                source={'./images/four-card-feature.png'} 
                project = {'https://alabador.github.io/frontend-ui/four-card-feature-section/'}
                repo = {'https://github.com/alabador/frontend-ui/tree/main/four-card-feature-section'}
                stack = {['HTML', 'CSS']}
            />
            <Card 
                name = {'Altis Sign Up Form'}
                source={'./images/signup-form.jpg'} 
                project = {'https://alabador.github.io/sign-up-form/'}
                repo = {'https://github.com/alabador/sign-up-form'}
                stack = {['HTML', 'SCSS', 'JavaScript']}
            />
            <Card 
                name = {'Services Section'}
                source={'./images/services-section.gif'} 
                project = {'https://alabador.github.io/frontend-ui/services-section/'}
                repo = {'https://github.com/alabador/frontend-ui/tree/main/services-section'}
                stack = {['HTML', 'CSS']}
            />
            <Card 
                name = {'Webinar Signup'}
                source={'./images/webinar-signup.png'} 
                project = {'https://alabador.github.io/frontend-ui/webinar-signup'}
                repo = {'https://github.com/alabador/frontend-ui/tree/main/webinar-signup'}
                stack = {['HTML', 'CSS']}
            />
        </div>
    )
}

export default Projects;