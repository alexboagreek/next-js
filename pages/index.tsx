import React from 'react';
import { Layout } from './../layout/Layout';
import { Htag, Button, P, Rating } from "../components";



export default function Home(): JSX.Element {
  return (
    <Layout>
      <Htag tag='h1'>Working...</Htag>
      <Button appearance='primary'>Button</Button> 
      <Button appearance='ghost'>Button</Button>
      <P size='l'>Компонент P big</P>
      <P>Компонент P middle</P>
      <P size='s'>Компонент P small</P>
      <Rating rating={4}/>
    </Layout>
  );
}
