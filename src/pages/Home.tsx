import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, Layout, TableData, Title } from '../components';

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

function Home() {
  const [show, setShow] = useState<ShowTypes>();
  const [episodesList, setEpisodesList] = useState<string[]>([]);

  const getData = () => {
    axios
      .get('https://api.tvmaze.com/shows/6771')
      .then((res) => res)
      .then((res) => {
        setShow(res?.data);
      });
  };

  const getEpisodes = () => {
    axios
      .get('https://api.tvmaze.com/shows/6771/episodes')
      .then((res) => res)
      .then((res) => {
        setEpisodesList(res?.data);
      });
  };
  useEffect(() => {
    getData();
    getEpisodes();
  }, []);
  return (
    <Layout>
      <div className="container mx-auto">
        <section className="w-full mx-auto flex flex-col justify-center items-center">
          <div>
            <Title name={show?.name as string} />

            <Image
              url={show?.image.medium as string}
              alt={show?.name as string}
            />
            <div
              className="w-1/2 text-white text-xl flex justify-center items-center text-justify m-auto p-3"
              dangerouslySetInnerHTML={{ __html: show?.summary }}
            />

            <TableData data={episodesList} />
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
