import axios from 'axios';
import { Image, Layout, Title } from 'components';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Router, useParams } from 'react-router';

type ShowTypes = {
  name: string;
  summary: any;
  image: {
    medium: string;
    original: string;
  };
  _links: {
    previousepisode: {
      href: string;
    };
  };
};

export const Episode = () => {
  const [episode, setEpisode] = useState<ShowTypes>();

  const { id }: any = useParams();
  console.log('id: ', id);

  const getEpisode = (epId: number) => {
    axios
      .get(`https://api.tvmaze.com/episodes/${epId}`)
      .then((res) => res)
      .then((res) => {
        setEpisode(res?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEpisode(id);
  }, [id]);

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="w-full h-screen">
          <Title name={episode?.name as string} />

          <Image
            url={episode?.image.medium as string}
            alt={episode?.name as string}
          />

          <div
            className="w-1/2 text-lg text-white flex justify-center items-center text-justify m-auto p-3"
            dangerouslySetInnerHTML={{ __html: episode?.summary }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Episode;
