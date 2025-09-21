import React from 'react'

const VipInfo = (props) => {
    let items = props.items;
  return (
    <div className='d-flex flex-wrap justify-content-center'>
    {items && items.length > 0 ? (
      items.map((item) => (
        <div key={item.id} className='card m-2 p-2' style={{ width: '18rem' }}>
          <img
            src={item.image}
            alt={item.name}
            className='card-img-top'
            style={{ height: '250px', objectFit: 'cover' }}
          />
          <div className='card-body text-center'>
            <h5 className='card-title'>{item.name}</h5>
            <p className='card-text'>
              Net Worth: {item.worth} <br />
              Birth Year: {item.birth_year} <br />
              Source: {item.source} <br />
              Country: {item.country}
            </p>
          </div>
        </div>
      ))
    ) : (
      <div style={{ width: '5rem', height: '5rem' }} className='spinner-border text-primary' role='status'>
        <span className='sr-only'></span>
      </div>
    )}
  </div>
);
}

export default VipInfo