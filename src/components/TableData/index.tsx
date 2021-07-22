import * as React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { EpisodesListType } from 'types/types';

// declare columns types

interface DataProps {
  data: EpisodesListType;
}

const MyTable = styled.table`
  border: 1px solid black;
  
  tr,
  th,
  td {
    padding: 5px;
    text-align: center;
    border: 1px solid black;
  }
  td
`;

const DataGridDemo: React.FC<DataProps> = ({ data }) => {
  const history = useHistory();

  const handleClick = (item: { id: number }) => {
    history.push(`/episode/${item.id}`);
  };

  return (
    <div className="w-full flex justify-center my-10 px-5 md:px-0">
      {data?.length ? (
        <MyTable className="border border-black bg-yellow-300">
          <thead className="p-2">
            <tr>
              <th>Id</th>
              <th>Season</th>
              <th>Number</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody className="p-2">
            {data?.map(
              (
                item: {
                  id: number;
                  name: string;
                  season: string;
                  number: number;
                },
                i: number
              ) => (
                <tr
                  key={item?.id}
                  className="cursor-pointer"
                  onClick={() => handleClick(item)}
                >
                  <td>{i + 1}</td>
                  <td>{item?.season}</td>
                  <td>{item?.number}</td>
                  <td>{item?.name}</td>
                </tr>
              )
            )}
          </tbody>
        </MyTable>
      ) : (
        <p>There are no data</p>
      )}
    </div>
  );
};

export default DataGridDemo;
