import image from '../assets/news.jfif'
const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bd-dark text-light mb-3 d-inline-block mx-3 px-2 py-2" style={{ width: "450px", height: "500px" }}>
            <img src={src ? src : image} style={{ height: "250px", width: "425px", padding: "20px" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ height: "150px" }}>
                <h5 className="card-title" style={{ color: "black" }}>{title.slice(0, 50)}</h5>
                <p className="card-text" style={{ color: "black" }}>{description ? description.slice(0, 90) : "Click read more to know what happened."}</p>
                <a href={url} className="btn btn-primary m-2 bg-black " style={{ color: "white" }}>Read More</a>
            </div>
        </div>
    )
}
export default NewsItem;