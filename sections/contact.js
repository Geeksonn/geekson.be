import { useState } from 'react';

import { lightArrow } from '../components/icons';

import css from '../styles/Contact.module.css';
import { sectionTitle } from '../styles/common.module.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [feedback, setFeedback] = useState(null);

    const feedbackDuration = 4000;

    const mailApiKey = process.env.NEXT_PUBLIC_SENDIN_BLUE_API_KEY;

    const generateFeedback = (sev, msg) => {
        setFeedback({
            severity: sev,
            message: msg,
        });
        setTimeout(() => setFeedback(null), feedbackDuration);
    };

    const validateInput = () => {
        if (name.length === 0) {
            generateFeedback('error', 'Name must be filled in.');

            return false;
        }

        if (email.length === 0) {
            generateFeedback('error', 'E-mail must be filled in.');

            return false;
        }

        const validEmail = String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

        if (!validEmail) {
            generateFeedback('error', 'E-mail must be valid.');

            return false;
        }

        if (subject.length === 0) {
            generateFeedback('error', 'Subject must be filled in.');

            return false;
        }

        if (body.length === 0) {
            generateFeedback('error', 'Message must be filled in.');

            return false;
        }

        return true;
    };

    const sendMail = async () => {
        if (!validateInput()) {
            return;
        }

        const url = 'https://api.sendinblue.com/v3/smtp/email';
        const message = '<html><body><p>' + body.replace(/(\r\n|\n|\r)/g, '<br />') + '</p></body></html>';
        const init = {
            method: 'POST',
            headers: {
                'api-key': mailApiKey,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                sender: {
                    name: name,
                    email: email,
                },
                to: [
                    {
                        name: 'Olivier Sputael',
                        email: 'olivier@geekson.be',
                    },
                ],
                subject: '[Lead] ' + subject,
                htmlContent: message,
            }),
        };

        await fetch(url, init);

        generateFeedback('success', "Thank you for your e-mail. I'll come back in 1-2 days.");
        setName('');
        setEmail('');
        setSubject('');
        setBody('');
    };

    let feedbackClass = css.feedback + ' ';
    if (feedback) {
        if (feedback.severity === 'error') feedbackClass = feedbackClass + css.error;
        if (feedback.severity === 'success') feedbackClass = feedbackClass + css.success;
    }

    return (
        <section id='Contact' className={css.section}>
            {feedback && <div className={feedbackClass}>{feedback.message}</div>}
            <div className={css.wrapper}>
                <div className={sectionTitle}>Contact</div>
                <div className={css.contactForm}>
                    <label htmlFor='name'>Your Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor='email'>Your e-mail address</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor='subject'>Your request</label>
                    <input
                        type='text'
                        id='subject'
                        name='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                    <label htmlFor='body'>Your message</label>
                    <textarea
                        id='body'
                        name='body'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                    <button className={css.contactButton} onClick={() => sendMail(name, email, subject, body)}>
                        <p>Send Message</p>
                        <i>{lightArrow}</i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
