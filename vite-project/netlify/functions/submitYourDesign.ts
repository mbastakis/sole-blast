import fetch from 'node-fetch'

const handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const { attachments, orderForm, shippingForm } = JSON.parse(event.body)

  // Decompose orderForm and shippingForm into individual fields
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

  // Note: it is assumed here that either shoeModel or itemname will be present in orderForm

  try {
    await fetch(`${process.env.URL}/.netlify/functions/emails/test`, {
      headers: {
        'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET
      },
      method: 'POST',
      body: JSON.stringify({
        from: 'soleblastofficial@gmail.com',
        to: 'soleblastmessages@gmail.com',
        subject: 'New Design Submission',
        attachments: attachments,
        parameters: {
          // Order form data
          shoeModel: shoeModel,
          shoeSize: shoeSize,
          useCustomersShoe: useCustomersShoe,
          textareaValue: textareaValue,
          itemname: itemname,
          // Shipping form data
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
    }).then((res) => {
      if (res.status !== 200) {
        return {
          statusCode: 400,
          body: JSON.stringify("Something wen't wrong! Please try again")
        }
      }

      return {
        statusCode: 200,
        body: JSON.stringify('Message email sent!')
      }
    })
  } catch (error) {
    console.error(error)
    return { statusCode: 500, body: 'An error occurred' }
  }
}

export { handler }
