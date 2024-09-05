import React, { Component } from 'react'

import Section from '../Component/sections/section/Section'

import Section1 from '../Component/sections/section1/Section1'
import Section2 from '../Component/sections/section2/Section2'
import Header from '../Component/header/Header'


function Accueil() {
  return (
    <>
       <Section/>
       <Section1/>
       <Section2/>
    </>
  )
}

export default Accueil