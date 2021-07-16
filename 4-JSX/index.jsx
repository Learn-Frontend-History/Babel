const header ='JSX with Babel';
const textPlaceholder = 'Введите значение'

ReactDOM.render((
    <section>
        <header> { header } </header>
        <main>
            <form>
                <input type="text" placeholder={textPlaceholder}/>
                <button type="submit">Отправить</button>
            </form>
        </main>
    </section>
), app)
