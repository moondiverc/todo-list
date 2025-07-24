import { dummyData } from "./data/todos"

function App() {
  return (
    <main className='py-10 h-screen'>
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div>
        <div>
          {dummyData.map(todo => (
            <p>
              {todo.title}
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
