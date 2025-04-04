import { data } from '../../../Data';

const styles = {
    carouselcontainer:{
        paddingLeft:'80px'
    },
    profile:{
        height:'50px',
        width:'50px',
        borderRadius:'70%',
        backgroundColor:'white'
    },
    identity:{
        display:'flex',
        alignItems:'center',
        gap:'15px'
    }
}
export const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {data.map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:"center",
                padding:"30px",
            }}>
              <div style={styles.identity}>
                <div style={styles.profile}>

                </div>
              <div>
              <h3>{item.name}</h3>
              <small>{item.location}</small>
              </div>
              </div>

              <p>{item.testimonial}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
