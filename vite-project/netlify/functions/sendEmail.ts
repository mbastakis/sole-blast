import type { Handler } from '@netlify/functions'
import fetch from 'node-fetch'

const handler: Handler = async function (event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        'Something went wrong! Please try again or contact us at soleblastofficial@gmail.com'
      )
    }
  }

  const requestBody = JSON.parse(event.body) as {
    subscriberName: string
    subscriberEmail: string
    message: string
  }

  try {
    //automatically generated snippet from the email preview
    //sends a request to an email handler for a subscribed email
    const res = await fetch(`${process.env.URL}/.netlify/functions/emails/contact`, {
      headers: {
        'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET as string
      },
      method: 'POST',
      body: JSON.stringify({
        from: 'soleblastofficial@gmail.com',
        to: 'soleblastmessages@gmail.com',
        subject: 'Message from ' + requestBody.subscriberName,
        parameters: {
          name: requestBody.subscriberName,
          email: requestBody.subscriberEmail,
          message: requestBody.message
        }
      })
    })

    if (res.status !== 200) {
      return {
        statusCode: 400,
        body: JSON.stringify('Something went wrong! Please try again')
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify('Message email sent!')
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'An error occurred'
    }
  }
}

export { handler }
