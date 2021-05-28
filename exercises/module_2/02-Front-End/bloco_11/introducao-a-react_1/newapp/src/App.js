import logo from './logo.svg';
import './App.css';
import Task from './tasklist';

const Assignments = [
  'Escovar os dentes',
  'Estudar',
  'Fazer comida',
  'Ler a Bíblia',
  'Fazer Janta',
  'Tomar banho',
];

function App() {
  const tasklist = Assignments.map((el) => <Task value={el} />);
  return (
    <>
      <h1 className="intro">Minha lista de Tarefas</h1>
      {tasklist}
    </>
  );
}

export default App;
