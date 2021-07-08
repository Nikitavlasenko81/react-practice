import { useState, useEffect } from 'react';

export function useTableApi(baseUrl) {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const result = await fetch(baseUrl).then((response) => response.json());
      setData(result);
    } catch (e) {
      console.log(e);
    }
  };

  const createData = async (value) => {
    await fetch(baseUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    });

    await getData();
  };

  useEffect(async () => {
    await getData();
  }, []);

  const api = {
    getData,
    createData,
  };

  return [data, api];
}
