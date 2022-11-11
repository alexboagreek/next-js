import React from 'react';
import { Htag, Button, P } from "../components";


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Working...</Htag>
      <Button appearance='primary'>Button</Button> 
      <Button appearance='ghost'>Button</Button>
      <P size='l'>Компонент P big</P>
      <P>Компонент P middle</P>
      <P size='s'>Компонент P small</P>
    </>
  );
}
