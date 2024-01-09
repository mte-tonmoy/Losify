import React from 'react';
import { Link } from 'react-router-dom';

const AllItemRow = ({allToy}) => {
    const {
      _id,
      sellerName,
      toyName,
      category,
      sellerEmail,
      photoUrl,
      price,
      rating,
      quantity,
      description,
    } = allToy;
    return (
      <tr>
        <th>{sellerName}</th>
        <th>{toyName}</th>
        <th>{category}</th>
        <th>${price}</th>
        <th>{quantity}</th>
        <th>
          <Link to={`/singleToy/${_id}`}>
            <button className="btn my-btn">View Details</button>
          </Link>
        </th>
      </tr>
    );
};

export default AllItemRow;