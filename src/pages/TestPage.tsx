import React from 'react'
import { QUESTIONS } from '../data/questions'
import { scoreAnswers, interpretTotals } from '../utils/scoring'

export default function TestPage() {
    const [answers, setAnswers] = React.useState<Record<number, string>>({})
    const [result, setResult] = React.useState<any>(null)

    // Завантажуємо лише збережений результат (якщо він є), але не чернетки відповідей
    React.useEffect(() => {
        const savedTotals = localStorage.getItem('test_result');
        if (savedTotals) {
            try {
                const totals = JSON.parse(savedTotals);
                const interp = interpretTotals(totals);
                setResult(interp);
            } catch (e) {
                console.error("Помилка парсингу результатів тесту:", e);
            }
        }
    }, []);

    function handleChange(qid: number, aid: string) {
        setAnswers(prev => ({ ...prev, [qid]: aid }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        
        // Розрахунок працюватиме навіть з порожніми або частковими відповідями
        const totals = scoreAnswers(answers)
        const interp = interpretTotals(totals)

        localStorage.setItem('test_result', JSON.stringify(totals))
        setResult(interp)
    }

    function handleReset() {
        setResult(null);
        setAnswers({}); // Очищуємо стан відповідей
        localStorage.removeItem('test_result');
    }

    return (
        <div className="test-page">
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Тест з профорієнтації
            </h2>

            {/* Результати */}
            {result && (
                <div className="results-container">
                    <div className="results-box" style={{ marginBottom: '2rem' }}>
                        <h3 className="results-title">Ваш результат</h3>
                        <p style={{ marginTop: '0.5rem', fontWeight: '600' }}>
                            Основний профіль: {result.primary.title}
                        </p>
                        <p>{result.primary.description}</p>
                        
                        <div style={{ marginTop: '1rem' }}>
                            <p style={{ fontWeight: '600' }}>Можливі професії:</p>
                            <ul className="list-disc">
                                {result.primary.careers.map((c: string) => <li key={c}>{c}</li>)}
                            </ul>
                        </div>

                        {result.secondary && (
                            <div style={{ marginTop: '1.5rem', borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
                                <p style={{ fontWeight: '600' }}>Другорядний профіль: {result.secondary.title}</p>
                                <p>{result.secondary.description}</p>
                                <ul className="list-disc">
                                    {result.secondary.careers.map((c: string) => <li key={c}>{c}</li>)}
                                </ul>
                            </div>
                        )}

                        <button
                            className="btn-primary"
                            onClick={handleReset}
                            style={{ marginTop: '1.5rem', background: 'var(--taupe)' }}
                        >
                            Пройти тест знову
                        </button>
                    </div>
                </div>
            )}

            {/* Форма (показується, якщо результат не розрахований) */}
            {!result && (
                <form onSubmit={handleSubmit} className="test-form">
                    {QUESTIONS.map(q => (
                        <div key={q.id} className="question-card card">
                            <div className="question-text">{q.id}. {q.text}</div>
                            <div className="options-group">
                                {q.options.map(o => (
                                    <label key={o.id} className="option-label">
                                        <input 
                                            type="radio" 
                                            name={`q${q.id}`} 
                                            onChange={() => handleChange(q.id, o.id)} 
                                            checked={answers[q.id] === o.id} 
                                            /* required видалено для вільного заповнення */
                                        />
                                        <span>{o.text}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="submit-area">
                        <button type="submit" className="btn-primary">
                            Отримати результат
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}
