import React, { useState } from 'react';
import { Htag, Button, P, Rating } from "../components";
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);
  return (
    <>
      <Htag tag='h1'>Working...</Htag>
      <Button appearance='primary'>Button</Button> 
      <Button appearance='ghost'>Button</Button>
      <P size='l'>Компонент P big</P>
      <P>Компонент P middle</P>
      <P size='s'>Компонент P small</P>
      <Rating rating={rating} isEditable setRating={ setRating }/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: Get