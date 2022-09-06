import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/> My Personal Portfolio
      </SectionTitle>
      <SectionText>
      JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web.
      </SectionText>
      <Button onClick={()=> window.location = 'https://github.com/abhiKumar0'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;