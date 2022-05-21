import React from 'react';
import UsersList from '../components/UsersList';

export default function Users() {
  const USERS = [
    {
      id: 'u1',
      name: 'Spencer Mattison',
      image: '',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}
