import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
  ${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

const About = () => {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>About</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>Hi. I'm Subhasmita. I love to automate stuff.</Big>
          <p>Currently I'm working at <a href="https://www.civo.com">Civo</a> as Site Reliability Engineer.</p>
          <p style={{ marginBottom: 0 }}>
            As an enthusiastic prospective engineer, my level of interest increases as the use case 
            I am designing in code is isolated from the end user. 
            I worked as an intern for the Kubernetes project of the Linux Foundation, and also an Outreachy intern. 
            I am a Kubernetes release shadow who has long supported the environment 
            and encouraged community development in open source.
          </p>
          <p>
            Outside of work I'm passionate about travelling, photography and
            star gazing.
          </p>
        </Fragment>
      }
    />
  )
}

export default About
