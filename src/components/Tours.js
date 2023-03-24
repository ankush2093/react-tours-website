import React from 'react'
import Card from './Card'
import "../App.css";

const Tours = ({tours, removeTour }) => {
  return (
    <div className='container'>
        <div className='title'>
            <h2>Plan Journy </h2>
        </div>
        <div className='cards'>
            {
                tours.map( (tour) =>{
                    return <Card {...tour} removeTour={removeTour}></Card>
                })
            }
        </div>

        <h1 className='me'>Helooo Ths is me</h1>

    </div>
  )
}

export default Tours