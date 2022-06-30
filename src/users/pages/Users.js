import React, { useEffect } from 'react';
import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

export default function Users() {
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="ceter">
          <LoadingSpinner />
        </div>
      )}
      <UsersList items={loaderUsers} />
    </React.Fragment>
  );
}
