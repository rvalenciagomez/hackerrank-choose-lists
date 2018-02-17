import React from 'react';


export default function MovieItem(props) {

    const { movie: {value, name} } = props;

    return (
        <div className="rTableRow" key={value}>
            <div className="rTableCell">{name}</div>
            <div className="rTableCell">{value}</div>
        </div>
    );
} 