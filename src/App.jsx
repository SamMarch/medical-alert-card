import { useState } from 'react'
import { conditions, defaultConditionId } from './data/conditions'
import { Card } from './components/Card'
import { CardForm } from './components/CardForm'

const defaultCondition =
  conditions.find((c) => c.id === defaultConditionId) ?? conditions[0]

function App() {
  const [form, setForm] = useState({
    conditionId: defaultCondition.id,
    name: '',
    emergencyName: '',
    emergencyPhone: '',
    showMedication: defaultCondition.options?.medication?.defaultOn ?? false,
    show000: true,
  })

  function updateField(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value }
      if (field === 'conditionId') {
        const c = conditions.find((x) => x.id === value)
        next.showMedication = c?.options?.medication?.defaultOn ?? false
      }
      return next
    })
  }

  const condition =
    conditions.find((c) => c.id === form.conditionId) ?? conditions[0]
  const medAvailable = condition.options?.medication?.available ?? false

  function handlePrint() {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="mac-no-print text-2xl font-bold text-slate-800 mb-8 text-center">
          Medical alert card
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          <CardForm
            conditions={conditions}
            values={form}
            medAvailable={medAvailable}
            onPrint={handlePrint}
            onChange={updateField}
          />
          <div className="flex-1 flex justify-center w-full">
            <Card
              condition={condition}
              name={form.name}
              emergencyName={form.emergencyName}
              emergencyPhone={form.emergencyPhone}
              showMedication={form.showMedication}
              show000={form.show000}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App