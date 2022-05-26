import React from 'react';

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
}
