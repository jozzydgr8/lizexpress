import { data } from '../../../Data';
import {LeftCircleFilled, RightCircleFilled} from '@ant-design/icons'
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
        gap:'15px',
        justifyContent:'center'
    }
}
export const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {data.map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div style={{
                padding:"16px",
            }}>
              <div style={styles.identity}>
                <div style={styles.profile}>

                </div>
              <div style={{marginBottom:'5px'}}>
              <h3 style={{margin:'0'}}>{item.name}</h3>
              <small>{item.location}</small>
              </div>
              </div>

              <p style={{textAlign:'center',}}>{item.testimonial}</p>
            </div>
          </div>
        ))}
      </div>

      <LeftCircleFilled
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </LeftCircleFilled>
      <RightCircleFilled
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </RightCircleFilled>
    </div>
  );
};
