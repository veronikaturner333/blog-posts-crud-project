import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const header = {
  fontSize: '30px',
  fontWeight: 'bold',
  color: 'black',
}

//Table component will display my goals for the year
export function HomeTable() {
  return (
    <div className='m-5'>
    <h1 className='text-center mt-2 mb-3' style={header}>My Goals for 2024</h1>
    <Table striped bordered hover data-bs-theme="dark">
      <thead>
        <tr>
          <th>Importance</th>
          <th>Goal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Get better at web development</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Redo my graphic design portfolio</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Learn animation</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Get better at sewing</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default HomeTable;