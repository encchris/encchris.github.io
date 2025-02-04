type techImgProps = {
    src: string;
    alt: string;
}

function TechImg({src, alt}: techImgProps) {
    return (
        <div className="p-4 bg-[#fafafa] rounded-lg">
            <img className="icono" src={src} alt={alt} />
        </div>
    );
}

export default TechImg;