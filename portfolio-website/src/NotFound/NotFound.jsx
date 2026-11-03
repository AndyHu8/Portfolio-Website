import './NotFound.css';

function NotFound() {
    return (
        <section className="notFound-wrapper">
            <h1>404</h1>
            <h2>Oops! Die Seite wurde nicht gefunden.</h2>
            <p>
                Die Seite, die Sie suchen, existiert nicht
                oder wurde verschoben.
            </p>
            <a href="/">← /Zurück zu Home</a>
        </section>
    );
}

export default NotFound;