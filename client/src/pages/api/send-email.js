import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, reason, message } = req.body;

        try {
            // Define the payload for the API request to EmailJS
            const payload = {
                service_id: process.env.EMAILJS_SERVICE_ID, // Use service ID from environment variable
                template_id: process.env.EMAILJS_TEMPLATE_ID, // Use template ID from environment variable
                user_id: process.env.EMAILJS_USER_ID, // Use user ID from environment variable
                template_params: {
                    name: name,
                    email: email,
                    reason: reason,
                    message: message,
                },
            };

            // Send the email using Axios to EmailJS
            const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', payload);

            if (response.data.status === 200) {
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
