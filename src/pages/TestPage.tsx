// src/pages/TestPage.tsx
import React from 'react'
import { QUESTIONS } from '../data/questions'
import { scoreAnswers, interpretTotals } from '../utils/scoring'

export default function TestPage(){
    const [answers, setAnswers] = React.useState<Record<number,string>>({})
    const [result, setResult] = React.useState<any>(null)

    // Новий useEffect для завантаження останнього результату з localStorage
    React.useEffect(() => {
        const savedTotals = localStorage.getItem('test_result');
        if (savedTotals) {
            try {
                const totals = JSON.parse(savedTotals);
                // Ми не зберігали повний об'єкт інтерпретації, тому інтерпретуємо заново
                const interp = interpretTotals(totals);
                setResult(interp);
            } catch (e) {
                console.error("Помилка парсингу результатів тесту з localStorage:", e);
            }
        }
        // Додатковий ефект: завантажити попередні відповіді, якщо вони є (для покращення UX)
        const savedAnswers = localStorage.getItem('test_answers');
        if (savedAnswers) {
            try {
                setAnswers(JSON.parse(savedAnswers));
            } catch (e) {
                console.error("Помилка парсингу відповідей з localStorage:", e);
            }
        }
    }, []); // Виконується лише при першому рендері

    function handleChange(qid:number, aid:string){
        setAnswers(prev => {
            const newAnswers = {...prev, [qid]: aid};
            // Зберігаємо відповіді при кожній зміні
            localStorage.setItem('test_answers', JSON.stringify(newAnswers));
            return newAnswers;
        });
    }

    function handleSubmit(e:React.FormEvent){
        e.preventDefault()

        // Перевіряємо, чи всі питання відповідено
        if (Object.keys(answers).length !== QUESTIONS.length) {
            alert(`Будь ласка, дайте відповідь на всі ${QUESTIONS.length} питань.`);
            return;
        }

        // 1. Обрахунок балів
        const totals = scoreAnswers(answers)
        const interp = interpretTotals(totals)

        // 2. Збереження сирих балів у localStorage
        localStorage.setItem('test_result', JSON.stringify(totals))

        // 3. Відображення результату
        setResult(interp)
    }

    return (
        <div className="test-page">
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Тест з профорієнтації</h2>

            {/* Якщо є результат, показуємо його зверху, інакше показуємо форму */}
            {result && (
                <div className="results-box" style={{ marginBottom: '2rem' }}>
                    <h3 className="results-title">Ваш останній результат</h3>
                    <p style={{ marginTop: '0.5rem', fontWeight: '600' }}>Основний профіль: {result.primary.title}</p>
                    <p>{result.primary.description}</p>
                    <button
                        className="btn-primary"
                        onClick={() => setResult(null)}
                        style={{ marginTop: '1rem', background: 'var(--taupe)' }}
                    >
                        Пройти тест знову
                    </button>
                </div>
            )}

            {!result && (
                <form onSubmit={handleSubmit} className="test-form">
                    {QUESTIONS.map(q=> (
                        <div key={q.id} className="question-card card">
                            <div className="question-text">{q.id}. {q.text}</div>
                            <div className="options-group">
                                {q.options.map(o=> (
                                    <label key={o.id} className="option-label">
                                        <input type="radio" name={`q${q.id}`} onChange={()=>handleChange(q.id, o.id)} checked={answers[q.id]===o.id} />
                                        <span>{o.text}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="submit-area">
                        <button type="submit" className="btn-primary">Отримати результат</button>
                    </div>
                </form>
            )}

            {/* Повний детальний результат показуємо, коли він встановлений */}
            {result && (
                <div className="results-box">
                    <h3 className="results-title">Детальні рекомендації</h3>
                    <p style={{ marginTop: '0.5rem', fontWeight: '600' }}>Основний профіль: {result.primary.title}</p>
                    <p>{result.primary.description}</p>
                    <p style={{ marginTop: '0.5rem', fontWeight: '600' }}>Можливі професії:</p>
                    <ul className="list-disc">
                        {result.primary.careers.map((c:string)=> <li key={c}>{c}</li>)}
                    </ul>

                    <div style={{ marginTop: '1rem' }}>
                        <p style={{ fontWeight: '600' }}>Другорядний профіль: {result.secondary.title}</p>
                        <p>{result.secondary.description}</p>
                        <p style={{ marginTop: '0.5rem', fontWeight: '600' }}>Професії з другого профілю:</p>
                        <ul className="list-disc">
                            {result.secondary.careers.map((c:string)=> <li key={c}>{c}</li>)}
                        </ul>
                    </div>

                    <div style={{ marginTop: '1rem' }}>
                        <p style={{ fontWeight: '600' }}>Сирові бали:</p>
                        <pre style={{ background: 'white', padding: '0.5rem', borderRadius: '0.25rem', marginTop: '0.5rem' }}>{JSON.stringify(result.raw, null, 2)}</pre>
                    </div>
                </div>
            )}
        </div>
    )
}