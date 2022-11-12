import React from 'react';
import { Htag, Button, P, Rating } from "../components";
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Working...</Htag>
      <Button appearance='primary'>Button</Button> 
      <Button appearance='ghost'>Button</Button>
      <P size='l'>Компонент P big</P>
      <P>Компонент P middle</P>
      <P size='s'>Компонент P small</P>
      <Rating rating={4}/>
    </>
  );
}

export default withLayout(Home);