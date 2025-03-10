from flask import Flask, request, render_template_string, escape
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os
import jsonify

load_dotenv()

app = Flask(__name__)
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True

mail = Mail(app)

@app.route('/api/submit', methods=['POST'])
def submit_form():
        data = request.get_json()
        name = escape(data.get('name', ''))
        email = escape(data.get('email', ''))
        reason = escape(data.get('reason', ''))
        message = escape(data.get('message', ''))

        if not name or not email or not message:
            return jsonify({"success": False, "error": "Missing required fields"}), 400

        msg = Message(f"New Message from {name}",
                    sender=email,
                    recipients=[app.config['MAIL_USERNAME']])  # Change to your email
        msg.body = f"Name: {name}\nEmail: {email}\nReason: {reason}\n\nMessage:\n{message}"
        
        try:
            mail.send(msg)
            return jsonify({"success": True, "message": "Email sent successfully!"})
        except Exception as e:
            return jsonify({"success": False, "error": str(e)}), 500
if __name__ == '__main__':
    app.run(debug=True)