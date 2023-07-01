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

  // Get the current timestamp and convert it to a string
  let timestamp = new Date().getTime().toString()
  // Reverse the timestamp string to ensure we are getting the most unique part (the milliseconds)
  let reversedTimestamp = timestamp.split('').reverse().join('')

  // Convert reversed timestamp to base 36 (numbers + letters) and slice the first 10 characters
  let orderCode = parseInt(reversedTimestamp, 10).toString(36).toUpperCase().slice(0, 10)

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
          shippingNotes: shippingNotes,
          orderCode: orderCode
        }
      })
    })

    let res2: any

    if (itemname) {
      res2 = await fetch(`${process.env.URL}/.netlify/functions/emails/itemCustomOrder`, {
        headers: {
          'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET
        },
        method: 'POST',
        body: JSON.stringify({
          from: 'soleblastofficial@gmail.com',
          to: email,
          subject: 'Your Custom Order from Soleblast',
          parameters: {
            name: fullName,
            address: townCity + ', ' + streetAddress + ' ' + postcode,
            phoneNumber: phoneNumber,
            itemName: itemname,
            desc: textareaValue,
            orderCode: orderCode
          }
        })
      })
    } else {
      res2 = await fetch(`${process.env.URL}/.netlify/functions/emails/customOrder`, {
        headers: {
          'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET
        },
        method: 'POST',
        body: JSON.stringify({
          from: 'soleblastofficial@gmail.com',
          to: email,
          subject: 'Your Custom Order from Soleblast',
          parameters: {
            name: fullName,
            address: townCity + ', ' + streetAddress + ' ' + postcode,
            phoneNumber: phoneNumber,
            shoeSize: shoeSize,
            shoeModel: shoeModel,
            desc: textareaValue,
            orderCode: orderCode
          }
        })
      })
    }

    if (res.status !== 200 || (res2 && res2.status !== 200)) {
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
