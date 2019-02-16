import React from 'react'
import { Link } from 'gatsby'
// import { Button } from 'react'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

if (process.env.NODE_ENV === 'development') {
  require('mimic')
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Want to know where you next vaction will be?</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <button>Start</button>
    </div> */}
    <Link to="/questionnaire-page/">Start</Link>
  </Layout>
)

export default IndexPage
