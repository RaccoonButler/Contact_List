import React, { useState, useEffect } from 'react';

const apiUrl = 'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(`${apiUrl}/${selectedContactId}`);
        const data = await response.json();
        setSelectedContact(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchSelectedContact();
  }, [selectedContactId]);

  const handleGoBack = () => {
    setSelectedContactId(null);
  };

  return (
    <div>
      {selectedContact ? (
        <>
          <h2>Contact Details</h2>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
          <button onClick={handleGoBack}>Go Back</button>
        </>
      ) : (
        <p>Loading contact details...</p>
      )}
    </div>
  );
}
