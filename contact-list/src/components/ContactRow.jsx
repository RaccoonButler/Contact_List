import React from 'react';

function ContactRow({ contact }) {
  // Receive the contact object as a prop and use it to render the row
  return (
    <tr key={contact.id}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

export default ContactRow;
