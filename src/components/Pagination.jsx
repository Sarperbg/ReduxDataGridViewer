import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';

const Pagination = ({ data }) => {
 const [page, setPage] = useState(0);
 const [rowsPerPage, setRowsPerPage] = useState(5);

 const handleChangePage = (event, newPage) => {
  setPage(newPage);
 };

 const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
 };

 return (
  <div className="pagination-container">
    {/* Sol Boşluk */}
    <div className="pagination-space"></div>

    {/* Sayfalama */}
    <TablePagination
      component="div"
      className='flex justify-center items-center'
      rowsPerPageOptions={[5, 10, 20, 40]}
      count={data.length} 
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />

    {/* Sağ Boşluk */}
    <div className="pagination-space"></div>
  </div>
 );
}

export default Pagination;
