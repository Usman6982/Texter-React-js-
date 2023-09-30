import React from 'react';
import shani from './shani.jpg'
function ContactUs() {
    return (
        <div className="contact-us">
            <h2>Contact Us:</h2>
            <p>
                Have questions, suggestions, or feedback? We'd love to hear from you! Feel free to contact us at{' '}
                <a href="mailto:your@email.com">falakudaas4051@gmail.com</a>
            </p>

            <div className="about-me">
                <h2>About Me:</h2>
                <img
                    src={shani}
                    alt="my"
                    className="profile-image" // Add a class for the image
                />
                <p>
                    I am a software engineer with a Bachelor's degree in Computer Science. I have a strong passion for
                    software development and enjoy solving complex problems. My skills include:
                </p>
                <ul>
                    <li>Front-end development with React.js</li>
                    <li>Back-end development with Node.js</li>
                    <li>Database management with SQL and NoSQL(MongoDB)</li>
                    <li>Web design using HTML, CSS, and JavaScript</li>
                    <li>Version control with Git and GitHub</li>
                </ul>
                <p>
                    I am dedicated to delivering high-quality software solutions and collaborating with teams to achieve
                    project goals. Feel free to reach out to me at{' '}
                    <a href="mailto:your@email.com">falakudaas4051@gmail.com</a> for any inquiries or opportunities.
                </p>
            </div>

        </div>

    );
}

export default ContactUs;
