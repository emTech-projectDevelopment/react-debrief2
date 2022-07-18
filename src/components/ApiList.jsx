import { useState, useEffect } from 'react';
import User from './User';

export default function UsingApi() {
  //const [ key , setKey ] = useState([]);
  const [resourceType, setResourceType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setItems(json)
      })
  }, [resourceType])

  return (
    <div className='bodyCont'>
      <div className='btnDiv'>
        <button className="resourceBtn" onClick={() => setResourceType('posts')}>posts</button>
        <button className="resourceBtn" onClick={() => setResourceType('users')}>users</button>
        <button className="resourceBtn" onClick={() => setResourceType('comments')}>comments</button>
      </div>
      <h1 className='resourceHeading'>{resourceType}</h1>
      <div className='outputField'>
        {items.map((item, index) => {
          return (
            <User user={item} />
          )
        })}
      </div>
    </div>
  )
}