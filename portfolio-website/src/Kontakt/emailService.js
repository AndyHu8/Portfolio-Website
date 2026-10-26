import emailjs from "@emailjs/browser";

export async function sendEmail(form) {
    return emailjs.sendForm(
        "service_j9v25u7",
        "template_sz8r3hp",
        form,
        {
            publicKey: "q9j3GmxOWLnwpk1fW",
        }
    );
}

/*Die Funktion übernimmt ausschließlich den Versand. Sie gibt das Ergebnis von EmailJS zurück oder wirft bei einem Fehler eine Exception,
die du in deiner React-Komponente abfangen kannst.*/
