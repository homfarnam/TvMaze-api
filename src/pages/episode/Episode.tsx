import { Image, Layout, Title } from 'components';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useAppSelector } from 'redux/hooks/hooks';
import { getEpisode } from 'redux/episode/episode';

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

  const allData = useAppSelector((state) => state);

  const dispatch = useDispatch();

  const getEpisodeData = useCallback(async () => {
    await dispatch(getEpisode(id));
  }, [dispatch, id]);

  useEffect(() => {
    getEpisodeData();
  }, [getEpisodeData]);

  useEffect(() => {
    setEpisode(allData.episode.episode as any);
  }, [allData]);

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="w-full h-screen">
          <Title name={episode?.name as string} />

          <Image
            url={episode?.image?.medium as string}
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
