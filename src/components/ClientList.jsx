import React, { useState } from 'react';
import axios from 'axios';
import '..//ClientList.css';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [message, setMessage] = useState('');

  const fetchClients = async () => {
    try {
      const response = await axios.get('/clients/list'); // Caminho relativo
      if (response.data === "Não há cliente cadastrado") {
        setMessage(response.data);
        setClients([]);
      } else {
        setClients(response.data);
        setMessage('');
      }
    } catch (error) {
      console.error('Erro ao buscar os clientes:', error);
      console.error('Resposta do erro:', error.response);
      setMessage('Ocorreu um erro ao buscar os clientes');
      setClients([]);
    }
  };

  return (
    <div className="client-list-container">
      <h2>Lista de Clientes</h2>
      <button onClick={fetchClients} className="fetch-button">Buscar Clientes</button>
      {message && <p>{message}</p>}
      {clients.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Primeiro Nome</th>
              <th>Sobrenome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td>{client.firstname}</td>
                <td>{client.lastname}</td>
                <td>{client.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClientList;
