const Testimonial = ({img, name, position, desc}) => {
    return ( 
    <div className="test-card d-flex gap-4">
        <div className="image-container h-100">
        <img className="w-100" src={img} alt=""/> 
        </div>
        <div className="test-info">
            <h3 className="text-start">{name}</h3>
            <h6 style={{
                color: "var(--passive-color)",
                backgroundColor : "var(--primary-optional-color)",
                padding : "2px 6px",
                borderRadius : "50px",
                display : "inline-block"
            }}>{position}</h6>
            <p>
                {desc}
            </p>
            
        </div>
    </div> );
}
 
export default Testimonial;