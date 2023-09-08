import fetch from 'node-fetch'

const handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const { shoeModel, shoeSize, shippingForm, price, orderCode } = JSON.parse(event.body)

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
    const response = await fetch(`${process.env.URL}/.netlify/functions/emails/design`, {
      headers: {
        'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET
      },
      method: 'POST',
      body: JSON.stringify({
        from: 'soleblastofficial@gmail.com',
        to: 'soleblastmessages@gmail.com',
        subject: 'Ready Design Submission, ' + orderCode,
        parameters: {
          // Order form data
          shoeModel: shoeModel,
          shoeSize: shoeSize,
          // Shipping form data
          fullName: fullName,
          email: email,
          confirmEmail: confirmEmail,
          phoneNumber: phoneNumber,
          streetAddress: streetAddress,
          townCity: townCity,
          postcode: postcode,
          country: country,
          shippingNotes: shippingNotes,
          orderCode: orderCode
        }
      })
    })

    const response2 = await fetch(`${process.env.URL}/.netlify/functions/emails/order`, {
      headers: {
        'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET
      },
      method: 'POST',
      body: JSON.stringify({
        from: 'soleblastofficial@gmail.com',
        to: email,
        subject: 'Order Confirmation from SoleBlast',
        parameters: {
          // Order form data
          name: fullName,
          address: townCity + ', ' + streetAddress + ' ' + postcode,
          phoneNumber: phoneNumber,
          shoeSize: shoeSize,
          price: price,
          orderCode: orderCode
        }
      })
    })

    if (!response.ok || !response2.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`)
    }

    return { statusCode: 200, body: 'Design submitted successfully' }
  } catch (error) {
    console.error(error)
    return { statusCode: 500, body: 'An error occurred' }
  }
}

export { handler }
