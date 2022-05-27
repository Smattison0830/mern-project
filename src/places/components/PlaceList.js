import React from 'react';

import PlaceItem from './PlaceItem';
import Card from '../../shared/components/UIElements/Card';
import './PlaceList.css';

export default function PlaceList(props) {
  if (props.item.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found! Let's Make One!</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
}
