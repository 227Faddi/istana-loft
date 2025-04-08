type Props = {
  name: string;
  email: string;
  message: string;
};

const EmailTemplate = ({ name, email, message }: Props) => {
  return (
    <html>
      <body style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>
        <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
          <h2 style={{ color: '#333' }}>
            New Contact Message from Istana Loft
          </h2>
          <p style={{ fontSize: '16px' }}>
            You have received a new message from the Istana Loft property:
          </p>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Message:</strong>
          </p>
          <blockquote
            style={{
              padding: '10px',
              backgroundColor: '#fff',
              borderLeft: '4px solid #ccc',
            }}
          >
            {message}
          </blockquote>
        </div>
      </body>
    </html>
  );
};

export default EmailTemplate;
