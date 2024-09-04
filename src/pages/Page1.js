import React, { Component } from 'react'

import Section from './Component/sections/section/Section'

import Section1 from './Component/sections/section1/Section1'

export class Page1 extends Component {
  render() {
    return (
      <>
       {/* <Header/> */}
       <Section/>
       <Section1/>
       {/* <Footer/> */}
      </>
    )
  }
}

export default Page1