import './Card.scss'

const Card = ({source}) => {
    return (
        <div className='card'>
            <img src={source} alt='random pic' className='card-image'></img>
            <div className='card-info'>
                <h1>Test</h1>
                <button>View Project</button>
            </div>
        </div>
    )
}

export default Card;