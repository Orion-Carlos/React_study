import React from "react"

// import React from "react"
export default function Vote (props) {
  console.log(props)
  return <div>
    {props.title}

    {/* {React.Children.map(props.children, (item) => {

      return <div>{item}</div>

    })} */}


    {props.children.map((item, index) => {
      return <div key={index}>{item}</div>
    })}

  </div>
}