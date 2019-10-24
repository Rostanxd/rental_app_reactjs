import React from "react";
import {Gallery, GalleryImage} from "react-gesture-gallery";

export default function PropertieSlide(props) {
  const [index, setIndex] = React.useState(0);
  const title = props.currentPropertie.title;
  const images = props.currentPropertie.imageArrUrl;
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 4) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);
  
  return (
      <div>
        <h3 style={{marginLeft: '10px'}}>{title}</h3>
        <Gallery
            style={{
              background: "black",
              height: "75vh",
              width: "100vw",
              verticalAlign: "top"
            }}
            index={index}
            onRequestChange={i => {
              setIndex(i);
            }}
        >
          {images.map(image => (
              <GalleryImage objectFit="contain" key={image} src={image}/>
          ))}
        </Gallery>
      </div>
  );
}