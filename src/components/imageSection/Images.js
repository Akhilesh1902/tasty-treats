import React from "react"
import Imagesection from "./Imagesection"

const Images = () => {
  return (
    <>
      <Imagesection
        src={0}
        head={"Jumbo Burger"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
        }
        rotation={"-20deg"}
        bg={`hsl(0 0% 94%)`}
        col={`hsl212 23% 15%)`}
      />
      <Imagesection
        src={1}
        head={"Super Salad"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
        }
        rotation={"20deg"}
        reverse={true}
        bg={`hsl(212 23% 15%)`}
        col={`hsl(0 0% 94%)`}
      />
    </>
  )
}

export default Images
