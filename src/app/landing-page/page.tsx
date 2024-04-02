import Career from '@/views/landing-page/career';
import Clients from '@/views/landing-page/client';
import Course from '@/views/landing-page/course';
import Featured from '@/views/landing-page/featured';
import Headers from '@/views/landing-page/header';
import Learn from '@/views/landing-page/learn';
import Ready from '@/views/landing-page/ready';
import Resource from '@/views/landing-page/resource';
import Role from '@/views/landing-page/role';
import Solution from '@/views/landing-page/solution';
import Why from '@/views/landing-page/why';

const Section = () => {
  return (
    <>
      <Headers />
      <Clients />
      <Role />
      <Why />
      <Career />
      <Course />
      <Learn />
      <Solution />
      <Resource />
      <Featured />
      <Ready />
    </>
  );
};

export default Section;
