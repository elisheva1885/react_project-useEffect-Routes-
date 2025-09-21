import React from 'react'

const PixaInfo = (props) => {
  let items = props.items;
  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {items && items.length > 0 ? (
        items.map((item, i) => {
          return(
          <div key={i} className='card m-2 p-2' style={{ width: '18rem' }}>
            <img
              src={item.webformatURL}
              alt={item.tags || 'Pixabay Image'}
              className='card-img-top'
            />
            <div className='card-body text-center'>
              <h5 className='card-title'>{item.user}</h5>
              <p className='card-text'>
                {/* Views: {(item.views).toLocaleString()}<br /> */}
                Downloads: {(item.downloads || 0).toLocaleString()}<br />
                Likes: {(item.likes || 0).toLocaleString()}<br />
                Tags: {item.tags || 'No tags'}
              </p>
            </div>
          </div>
          )
 } )):
      (
      <div style={{ width: "5rem", height: "5rem" }} className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>
      )}
    </div>
  );
}

export default PixaInfo