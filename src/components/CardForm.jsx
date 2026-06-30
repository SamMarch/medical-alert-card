const labelText = 'block text-xs font-semibold text-slate-500 mb-1.5'
const inputClass =
  'w-full text-sm px-3 py-2 border border-slate-300 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500'

export function CardForm({ conditions, values, medAvailable, onChange }) {
  return (
    <div className="w-full lg:w-80 lg:flex-none bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-base font-semibold text-slate-800 mb-1">Card details</h2>
      <p className="text-sm text-slate-500 mb-5 leading-relaxed">
        Fill these in, then print. Nothing is saved or sent anywhere — it all stays in your browser.
      </p>

      <label className="block mb-4">
        <span className={labelText}>Condition</span>
        <select
          className={inputClass}
          value={values.conditionId}
          onChange={(e) => onChange('conditionId', e.target.value)}
        >
          {conditions.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block mb-4">
        <span className={labelText}>Name (optional, shows on front)</span>
        <input
          type="text"
          className={inputClass}
          value={values.name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder="e.g. John Smith"
          autoComplete="off"
        />
      </label>

      <label className="block mb-4">
        <span className={labelText}>Emergency contact name</span>
        <input
          type="text"
          className={inputClass}
          value={values.emergencyName}
          onChange={(e) => onChange('emergencyName', e.target.value)}
          placeholder="e.g. Jane Smith"
          autoComplete="off"
        />
      </label>

      <label className="block mb-1">
        <span className={labelText}>Emergency contact phone</span>
        <input
          type="text"
          className={inputClass}
          value={values.emergencyPhone}
          onChange={(e) => onChange('emergencyPhone', e.target.value)}
          placeholder="e.g. 0400 000 000"
          autoComplete="off"
        />
      </label>

      <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
        {medAvailable && (
          <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 accent-teal-600 cursor-pointer"
              checked={values.showMedication}
              onChange={(e) => onChange('showMedication', e.target.checked)}
            />
            <span>Include medication-timing line</span>
          </label>
        )}
        <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 accent-teal-600 cursor-pointer"
            checked={values.show000}
            onChange={(e) => onChange('show000', e.target.checked)}
          />
          <span>Include “or call 000”</span>
        </label>
      </div>
    </div>
  )
}

export default CardForm
