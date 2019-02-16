import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import YesNoQuestion from '../components/questions/yes-no-question.component'

const QuestionnairePage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <YesNoQuestion></YesNoQuestion>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default QuestionnairePage