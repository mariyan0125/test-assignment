import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curr, setCurr] = useState(1);
  const [dataPerPage] = useState(20);

  useEffect(() => {
   const fetchPics = async () => {
     setLoading(true);
     const resp = await axios.get('https://cors-anywhere.herokuapp.com/https://www.tabtu.top/pic/100.json');
     setData(resp.data);
     setLoading(false);
   } 
   fetchPics();
  }, []);
 
  //get curr data
  const indexOfLastData = curr * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currData = data.slice(indexOfFirstData, indexOfLastData);

  // getPagination
  const getPagination = (pageNum) => setCurr(pageNum)
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Table</h1>
      <Table data={currData} loading={loading} />
      <Pagination dataPerPage={dataPerPage} totalData={data.length} getPagination={getPagination} />
    </div>
  );
}

export default App;
