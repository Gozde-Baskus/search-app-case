

import React from 'react';
import { FaFile, FaMailBulk, FaPhone } from 'react-icons/fa';

const TableItem = ({ value }) => {
    return (
        <div className="tableItem">
            <div className="tableItem-name">{value.name}</div>
            <div className="tableItem-metas">
                <div className='tableItem-meta'><FaPhone className='tableItem-metaIcon' size={15} />{value.phone}</div>
                <div className='tableItem-meta'><FaMailBulk className='tableItem-metaIcon' size={15} />{value.email}</div>
                <div className="tableItem-meta"><FaFile className='tableItem-metaIcon' size={15} />Policy No. {value.address?.zipcode}</div>
            </div>
        </div>
    );
}



export default TableItem;