import { useCallback, useEffect, useState } from 'react';
import { Image, Layout, TableData, Title } from '../components';
import { getData } from 'redux/showData';
import { useAppSelector } from 'redux/hooks/hooks';
import { useDispatch } from 'react-redux';
import { getEpisodes } from 'redux/allEpisodes/allEpisodes';

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

type EpisodesListType = {
  id: number;
  name: string;
  season: string;
  number: number;
}[];

function Home() {
  const [show, setShow] = useState<ShowTypes>();

  const [episodesList, setEpisodesList] = useState<EpisodesListType>([]);

  // const { myShow, loading, hasErrors } = useSelector(showSelector);\

  const allData = useAppSelector((state) => state);

  const dispatch = useDispatch();

  const getEpisodesData = useCallback(async () => {
    await dispatch(getData());
    await dispatch(getEpisodes());
  }, [dispatch]);

  useEffect(() => {
    getEpisodesData();
  }, [getEpisodesData]);

  useEffect(() => {
    setEpisodesList(allData.episodes.episodes);
    setShow(allData.show.myShow as any);

    console.log('allData: ', allData);
  }, [allData]);

  return (
    <Layout>
      <div className="container mx-auto">
        <section className="w-full mx-auto flex flex-col justify-center items-center">
          <div>
            <Title name={show?.name as string} />

            <Image
              url={show?.image?.medium as string}
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
