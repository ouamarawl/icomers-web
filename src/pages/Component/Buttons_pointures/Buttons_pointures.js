import React from 'react'
import { Link } from 'react-router-dom'

function Buttons_pointures(props) {
  return (
    <Link>
            <button
              style={{
                borderRadius: "100%",
                backgroundColor: "white",
                height: "35px",
                width: "35px",
                marginLeft: "2px",
                marginRight: "2px",
              }}
            >
              {props.pointures}
            </button>
    </Link>
  )
}

export default Buttons_pointures