import React from "react";
import styles from './ImageComponent.module.css';

function ImageComponent() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d2efaa6ff34f35afecbf3ef2d3d3e2234b7be14b95469e23544d2848dccf7ff?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372"
      className={styles.image}
      alt="Description of the image"
    />
  );
}

export default ImageComponent;