

export default function Home(){
    return (
        <div className="home-page-content">
            {/* Банер замість слайдера */}
            <div className="home-banner">
                <h2>Знайди свій ідеальний професійний шлях!</h2>
                <p>Пройдіть наш тест, щоб розкрити свої схильності та отримати персональні рекомендації.</p>
            </div>

            <section className="section-grid">
                <div className="card">
                    <h3 className="section-subtitle">Проблема 1</h3>
                    <p>Підлітки не розуміють, які в них схильності й навички — через це роблять випадковий вибір факультету.</p>
                </div>
                <div className="card">
                    <h3 className="section-subtitle">Проблема 2</h3>
                    <p>Нестача практичної інформації про кар'єрні шляхи й вимоги сучасних професій.</p>
                </div>
                <div className="card">
                    <h3 className="section-subtitle">Проблема 3</h3>
                    <p>Тиск від батьків і суспільства — вибір професії часто не відповідає інтересам підлітка.</p>
                </div>
            </section>

            <section className="card" style={{ backgroundColor: 'var(--mira)', marginTop: '2rem' }}>
                <h3 className="section-subtitle">Що ми пропонуємо</h3>
                <ul className="list-disc" style={{ marginTop: '0.5rem' }}>
                    <li>Стандартизований тест з 10 питань</li>
                    <li>Рекомендації з навчальних профілів та професій</li>
                    <li>Сторінка вибору сильних сторін та рекомендовані університети</li>
                </ul>
            </section>
        </div>
    )
}