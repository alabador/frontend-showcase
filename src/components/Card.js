import './Card.scss'

const Card = ({source, flip, project, repo, name}) => {
    return (
        <div className={flip}>
            <img src={source} alt='random pic' className='Card-image'></img>
            <div className='Card-info'>
                <h1>{name}</h1>
                <div className='Card-links'>
                    <a className='Card-button' href={project} target="_blank" rel="noopener noreferrer">View Project</a>
                    <a className='Card-button' href={repo} target="_blank" rel="noopener noreferrer">View Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Card;