import { conditions, defaultConditionId } from './data/conditions'
import { Card } from './components/Card'

function App() {
  const condition = conditions.find((c) => c.id === defaultConditionId)

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-8">
        Medical alert card
      </h1>
      <Card condition={condition} />
    </div>
  )
}

export default App