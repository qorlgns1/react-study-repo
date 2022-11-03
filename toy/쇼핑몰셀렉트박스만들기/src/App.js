import React, { useEffect, useState } from 'react';
import './styles/reset.css';
import './styles/global.css';
import SelectBoxList from './components/selectBox/SelectBoxList';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px;
`;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/dummy/data1.json');
      return data;
    }

    getData()
      .then((res) => {
        setData(res.data);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    isLoading && (
      <Wrapper>
        <SelectBoxList data={data} />
      </Wrapper>
    )
  );
}

export default App;
