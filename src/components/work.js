import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import Project1Logo from 'components/projectlogo'

const Project1Link = <Link to="https://camel.apache.org/blog/2022/06/Optimizing-Camel-K-Integration-Build-Time/">Read More</Link>
const Project2Link = <Link to="https://medium.com/@SubhasmitaSw/acing-your-outreachy-application-tips-f37f5543614a">Read More</Link>
const Project3Link = <Link to="https://medium.com/@SubhasmitaSw/a-glance-inside-the-beginnings-of-my-outreachy-internship-f2395aa37dba">Read More</Link>
const Project4Link = <Link to="https://www.kubernetes.dev/blog/2022/03/15/k8s-triage-bot-helper-ci-job/">Read More</Link>
const Project5Link = <Link to="">Checkout here →</Link>

const Work = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Blogs</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={<Project1Logo />}
            title="Optimizing Camel-K Integration Build Time"
            abstract="Scaling the Camel K operator vertically to improve the integration build time."
            link={Project1Link}
          />
          <Project
            logo={<Project1Logo />}
            title="K8s CI Bot Helper Job: automating 'make update'"
            abstract="If you are contributing to the Kubernetes project and are developing on a Windows PC, it is conceivable that you will encounter certain issues that will cause your pull request to get held up by test failures. This article describes a workaround for a similar issue I encountered when attempting to have my modifications approved and merged into the master branch."         
            link={Project4Link}
          />
          <Project
            logo={<Project1Logo />}
            title="Acing your Outreachy Application: Tips"
            abstract="Over the past few weeks on Twitter and LinkedIn, I've had numerous inquiries about applications. The top 5 things to keep in mind when applying are listed here."         
            link={Project2Link}
          />
          <Project
            logo={<Project1Logo />}
            title="A glance inside the beginnings of my Outreachy Internship"
            abstract="The notion of introducing oneself is strange and might be difficult at times. I’ve been working on it for a while now, and I think I’ve gotten it somewhat."
            link={Project3Link}
          />
          <Project
            logo={<Project1Logo />}
            title="Interested in reading some more blogs?"
            link={Project5Link}
            />
        </Fragment>
      }
    />
  )
}

export default Work
