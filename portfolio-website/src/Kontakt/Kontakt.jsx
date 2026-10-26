import './Kontakt.css';
import { useState } from 'react';
import { sendEmail } from './emailService';
import { useEffect } from 'react';

function Kontakt() {

const [status, setStatus] = useState("idle");

useEffect(() => {
    if (status !== "success" && status !== "error") {
        return;
    }

    const timer = setTimeout(() => {
        setStatus("idle");
    }, 4000);

    return () => clearTimeout(timer);
}, [status]);

const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if(status === "loading") return;

    setStatus("loading");

    try {
        await sendEmail(form);
        form.reset();
        setStatus("success");
    }
    catch (error) {
        console.error("E-Mail-Versand fehlgeschlagen:", error);
        setStatus("error");
    }
}

    return (
        <section id='kontakt' className="kontakt-wrapper">
            <h1>Let's work together.</h1>

            <p>
                Du hast eine interessante Position oder möchtest dich
                mit mir austauschen? Dann schreib mir gerne eine Nachricht.
            </p>

            <div className="kontakt-flexbox">
                <form onSubmit={handleSubmit}>
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
                            id="message"
                            name="message"
                            placeholder="Deine Nachricht ..."
                            rows="5"
                            required
                        />
                    </div>

                    <button type="submit" disabled={status === "loading"} className={`sendButton ${status}`}>
                        {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
                    </button>

                    {status === "success" && (<p className="form-status success" role="status">Nachricht erfolgreich gesendet!</p>)}
                    {status === "error" && (<p className="form-status error" role="alert">Senden fehlgeschlagen. Bitte versuche es erneut.</p>)}
                </form>
            </div>
        </section>
    )
}

export default Kontakt;