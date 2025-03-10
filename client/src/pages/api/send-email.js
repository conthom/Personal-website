import emailjs from '@emailjs/browser';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, reason, message } = req.body;

        try {
            // Send the email using EmailJS
            const emailjs = require('emailjs-com');

            emailjs.init('your_user_id');  // Your EmailJS user ID
            const response = await emailjs.send(
                'service_hh1dvhm', // Your service ID from EmailJS
                'template_534hv08', // Your template ID from EmailJS
                {
                    name: name,
                    email: email,
                    reason: reason,
                    message: message,
                }
            );

            if (response.status === 200) {
                return res.status(200).json({ success: true, message: 'Email sent successfully!' });
            } else {
                return res.status(500).json({ success: false, error: 'Failed to send email.' });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, error: error.message });
        }
    } else {
        return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
}
