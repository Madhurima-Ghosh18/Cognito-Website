const Section = ({header, children}) => {
    return (
    <section className="my-3 px-3">
        <div className="d-flex justify-content-center align-items-center gap-3">
            <hr className="flex-grow-1"/>
            <h1 className="m-0">{header}</h1>
            <hr className="flex-grow-1"/>
        </div>
        {children}
    </section>);
}
 
export default Section;