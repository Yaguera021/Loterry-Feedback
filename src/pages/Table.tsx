import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface TableData {
  id: number;
  nome: string;
  telefone: string;
  atendimento: number;
  agilidade: number;
  ambiente: number;
  comentario: string;
}

const Table: React.FC = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);

  useEffect(() => {
    buscarClientes()
  }, []);

  const buscarClientes = async () => {

    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.get('http://localhost:3006/dalila/admin', {headers});
      setTableData(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Atendimento</th>
            <th>Agilidade</th>
            <th>Ambiente</th>
            <th>Comentário</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.nome}</td>
              <td>{row.telefone}</td>
              <td>{row.atendimento}</td>
              <td>{row.agilidade}</td>
              <td>{row.ambiente}</td>
              <td>{row.comentario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;