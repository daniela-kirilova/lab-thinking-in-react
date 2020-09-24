import React from 'react';

const DataList = (props) => {
  const filtered = props.data.filter((product) =>
    product.name.toLowerCase().includes(props.query.toLowerCase())
    
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((product, index) => {
                let color = {color: 'black'}
                if (!product.stocked){
                    color = {color: 'red'}               
                }
            return (
              <tr key={index} style={color}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
