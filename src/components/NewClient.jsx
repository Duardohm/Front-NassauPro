import React, { useState } from 'react';
import axios from 'axios';
import '../styles/NewClient.css'

const NewClient = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    cpf: '',
    phoneNumber: '',
    userType: 'CLIENT',
  });

  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://18.230.23.174:8080/clients/create', formData);
      setMessage(response.data);
      setErrors([]);
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        setMessage('Ocorreu um erro ao criar o cliente');
      }
    }
  };

  return (
    <div>
      <h2>Cadastrar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Primeiro Nome:</label>
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
        </div>
        <div>
          <label>Sobrenome:</label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>CPF:</label>
          <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
        </div>
        <div>
          <label>Número de Celular:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Tipo de Usuário:</label>
          <input type="text" name="userType" value={formData.userType} readOnly />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {message && <p>{message}</p>}
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewClient;
