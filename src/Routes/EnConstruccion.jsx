import React from 'react'
import Layout from '../Layout/Layout'
import Construccion from '../Components/Construccion/Construccion'
import { useEffect } from 'react'

const EnConstruccion = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <Layout>
        <Construccion/>
    </Layout>
  )
}

export default EnConstruccion