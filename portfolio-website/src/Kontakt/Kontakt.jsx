import './Kontakt.css';

function Kontakt() {
    return (
        <div className="kontakt-wrapper">
            <h1>Let's work together.</h1>

            <p>
                Du hast eine interessante Position oder möchtest dich
                mit mir austauschen? Dann schreib mir gerne eine Nachricht.
            </p>

            <div className="kontakt-flexbox">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="kontakt-inputs">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Dein Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-Mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Deine E-Mail-Adresse"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="nachricht">Nachricht</label>
                        <textarea
                            id="nachricht"
                            name="nachricht"
                            placeholder="Deine Nachricht ..."
                            rows="5"
                            required
                        />
                    </div>

                    <button type="submit">
                        Nachricht senden
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Kontakt;