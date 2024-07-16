import pfp from './assets/images/madara.jpeg'
import './Card.css'


function Card(){

    return(
        <div className="card m-16" >
            <img className='pfp' src={pfp} alt="" />
            <h2 className="title" >Madara Uchiha</h2>
            <p className="dscrp" >The Ghost of the Uchiha</p>
        </div>
    )
}

export default Card