import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { isImage } from '../../services/searchApi';

const Release = ({ artistName, artistId, id, title }) => {
  const [image, setImage] = useState(null);
  
  useEffect(() => {
    isImage(id).then(setImage);
  }, [id]);

  return (
    <li key={id}>
      <Link to={`/${artistName}/${artistId}/${id}`}>
        <h1>{title}</h1>
        { image
          ? <img className="w-48 h-48" src={`http://coverartarchive.org/release/${id}/front`} alt={title + ' image'} />
          : <div className="w-48 h-48 bg-gray-300 text-gray-400 flex justify-center items-center">No Image</div>
        }
      </Link>
    </li>
  )
}

export default Release;
