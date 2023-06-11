import fetch from 'node-fetch'

const handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  
  const { attachments } = JSON.parse(event.body);
  
  try {
    const response = await fetch("http://localhost:8888/.netlify/functions/emails/test", {
      headers: {
        'netlify-emails-secret': 'secret',
      },
      method: 'POST',
      body: JSON.stringify({
        from: 'soleblastofficial@gmail.com',
        to: 'soleblastmessages@gmail.com',
        subject: 'Images',
        attachments: attachments,
        parameters: {
          data: 'test',
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }
    
    return { statusCode: 200, body: 'Email sent' };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: 'An error occurred' };
  }
};

export { handler };