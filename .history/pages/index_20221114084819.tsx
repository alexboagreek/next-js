import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Htag, Button, P, Rating } from "../components";
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
 
function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(3);
  return (
    <>
      <Htag tag='h1'>Working...</Htag>
      <Button appearance='primary'>Button</Button> 
      <Button appearance='ghost'>Button</Button>
      <P size='l'>Компонент P big</P>
      <P>Компонент P middle</P>
      <P size='s'>Компонент P small</P>
      <Rating rating={rating} isEditable setRating={setRating} />
      ul
      
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find');
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps {
  menu: MenuItem[];
  firstCategory: number;
}