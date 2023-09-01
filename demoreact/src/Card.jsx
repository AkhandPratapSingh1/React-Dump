import './index.css'
function Card(props) {
  return (
    <>
      {/* <h>Top 5 Marvel Hits</h> */}
      <div className="card-container">
        <div className="card">
             <img src={props.imgsrc} className='crdImg'/>
             <div className='card_inf'>
       
            <span className='card_category'>{props.disp}</span>
            <h3 className='card_title'>{props.title}</h3>
            <a href={props.link}>
              <button>
                Watch Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;