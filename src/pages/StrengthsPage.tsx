import React from 'react'

const strengths = [
    { id: 'analytical', label: 'Аналітичне мислення', unis: ['КНУ ім. Т. Шевченка — Фізико-математичний факультет', 'КПІ — Інженерія']},
    { id: 'creative', label: 'Креативність', unis: ['КНУКіМ — Дизайн', 'Харківська академія дизайну']},
    { id: 'social', label: 'Комунікабельність', unis: ['КНУ — Факультет соціології', 'Львівський університет — Психологія']},
    { id: 'tech', label: 'Технічні навички', unis: ['КПІ — Інформатика', 'Львівська політехніка — Комп’ютерні науки']},
    { id: 'business', label: 'Підприємливість', unis: ['КНЕУ — Економіка', 'КНУ — Менеджмент']}
]

export default function StrengthsPage(){
    const [selected, setSelected] = React.useState<string[]>([])
    const [rec, setRec] = React.useState<string[]>([])

    function toggle(id:string){
        setSelected(prev => prev.includes(id) ? prev.filter(p=>p!==id) : [...prev, id])
    }

    function showRec(){
        const list = strengths.filter(s=> selected.includes(s.id)).flatMap(s=> s.unis)
        setRec(Array.from(new Set(list)))
    }

    return (
        <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Виберіть свої сильні сторони</h2>
            <div className="strengths-grid">
                {strengths.map(s=> (
                    <button
                        key={s.id}
                        onClick={()=>toggle(s.id)}
                        className={`strength-button ${selected.includes(s.id)? 'active':''}`}
                    >
                        {s.label}
                    </button>
                ))}
            </div>

            <div style={{ marginTop: '1rem' }}>
                <button onClick={showRec} className="btn-primary">Показати рекомендовані університети</button>
            </div>

            {rec.length>0 && (
                <div className="rec-box">
                    <h3 style={{ fontWeight: 'bold' }}>Рекомендовані університети</h3>
                    <ul className="list-disc" style={{ marginTop: '0.5rem' }}>
                        {rec.map(u=> <li key={u}>{u}</li>)}
                    </ul>
                </div>
            )}
        </div>
    )
}