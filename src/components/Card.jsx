import './Card.css'

function buildEmergencyLine(condition, showMedication, show000) {
  const med = condition.options?.medication
  const medText = showMedication && med?.available ? med.text : null

  if (medText && show000) {
    return `${medText.replace(/\.\s*$/, '')}, or call 000.`
  }
  if (medText) return medText
  if (show000) return 'In an emergency, please call 000.'
  return null
}

export function Card({
  condition,
  name = '',
  emergencyName = '',
  emergencyPhone = '',
  showMedication = true,
  show000 = true,
}) {
  const accentStyle = {
    '--mac-accent': condition.accent,
    '--mac-accent-tint': condition.accentTint,
  }

  const trimmedName = name.trim()
  const trimmedEcName = emergencyName.trim()
  const trimmedEcPhone = emergencyPhone.trim()
  const emergencyLine = buildEmergencyLine(condition, showMedication, show000)

  return (
    <div className="mac-stage">
      {/* FRONT */}
      <div className="mac-cardwrap">
        <div className="mac-face-label">Front</div>
        <div className="mac-card" style={accentStyle}>
          <div className="mac-info-mark">i</div>
          <h2 className="mac-headline">{condition.front.headline}</h2>
          <p className="mac-reassure">{condition.front.reassurance}</p>
          <div className="mac-front-foot">
            <p className="mac-patient">{condition.front.footer}</p>
            {trimmedName && <div className="mac-name-front">— {trimmedName}</div>}
          </div>
        </div>
      </div>

      {/* BACK */}
      <div className="mac-cardwrap">
        <div className="mac-face-label">Back</div>
        <div className="mac-card" style={accentStyle}>
          <p className="mac-eyebrow">{condition.back.helpLabel}</p>
          <p className="mac-help">{condition.back.helpText}</p>
          <div className="mac-band">
            <p className="mac-band-label">In an emergency, please contact</p>
            <p className="mac-contact">
              <span className={trimmedEcName ? '' : 'mac-ph'}>
                {trimmedEcName || '[ contact name ]'}
              </span>
              <span className="mac-sep">·</span>
              <span className={trimmedEcPhone ? '' : 'mac-ph'}>
                {trimmedEcPhone || '[ phone ]'}
              </span>
            </p>
            {emergencyLine && <p className="mac-med">{emergencyLine}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card