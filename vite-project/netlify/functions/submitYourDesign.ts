import { Handler } from '@netlify/functions'
import fetch from 'node-fetch'

const handler: Handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const { attachments, orderForm, shippingForm } = JSON.parse(event.body)

  const { shoeModel, shoeSize, useCustomersShoe, textareaValue, itemname } = orderForm

  const {
    fullName,
    email,
    confirmEmail,
    phoneNumber,
    streetAddress,
    townCity,
    postcode,
    country,
    shippingNotes
  } = shippingForm

  console.log('Inside submitYourDesign.ts')

  try {
    const res = await fetch(`${process.env.URL}/.netlify/functions/emails/design`, {
      headers: {
        'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET
      },
      method: 'POST',
      body: JSON.stringify({
        from: 'soleblastofficial@gmail.com',
        to: 'soleblastmessages@gmail.com',
        subject: 'New Design Submission from ' + fullName,
        attachments: attachments,
        parameters: {
          shoeModel: shoeModel,
          shoeSize: shoeSize,
          useCustomersShoe: useCustomersShoe,
          textareaValue: textareaValue,
          itemname: itemname,
          fullName: fullName,
          email: email,
          confirmEmail: confirmEmail,
          phoneNumber: phoneNumber,
          streetAddress: streetAddress,
          townCity: townCity,
          postcode: postcode,
          country: country,
          shippingNotes: shippingNotes
        }
      })
    })

    console.log('inside the response', res.status)

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
    console.error(error)
    return { statusCode: 500, body: 'An error occurred' }
  }
}

export { handler }
