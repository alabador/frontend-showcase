import './Card.scss'

const Card = ({source, theme}) => {
    return (
        <div className={theme}>
            <img src={source} alt='random pic' className='Card-image'></img>
            <div className='Card-info'>
                <h1>Test</h1>
                <button>View Project</button>
            </div>
        </div>
    )
}

export default Card;