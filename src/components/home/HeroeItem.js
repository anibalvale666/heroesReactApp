import axios from 'axios'
import React, { useState } from 'react'

const data  = {
    image: {
    url: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
    }
}
export const HeroeItem = () => {
    const [hero, setHero] = useState(data)
    const lapeticion = async () => {
        const res = await axios.get('https://superheroapi.com/api/6246903412051149/68');
        console.log(res.data);
        setHero(res.data);
    }

    return (
        <div>
            <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={hero.image.url} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={lapeticion}>boton</button>
        </div>
    )
}
