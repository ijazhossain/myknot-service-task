import bannerImg from '../../assets/images/banner-right-image.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-container  mt-5">
            <div className='container mx-auto d-flex align-items-center justify-content-between mt-5'>
                <div className="banner-left">
                    <h2>Welcome To Our School</h2>
                    <h1 className='display-1 fw-bold'>Best Place To<br></br> Learn Graphic<br></br><span> Design!</span></h1>
                    <button className='border-0 text-uppercase text-white mt-5'>Just Join Us</button>
                </div>
                <div className="banner-right">
                    <img className='img-fluid' src={bannerImg} alt="banner" />
                </div>
            </div>

        </div>
    );
};

export default Banner;