/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict'

const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});


exports.notifyOfNewContactFormSubmission = functions.database.ref('/messages/{id}').onCreate((snapshot) => {

  const name = snapshot.child('name').val()
  const email = snapshot.child('email').val()
  const message = snapshot.child('message').val()
  const ipAddress = snapshot.child('ipData/ip').val()
  const ipHostname = snapshot.child('ipData/hostname').val()
  const ipOrganization = snapshot.child('ipData/org').val()
  const ipCity = snapshot.child('ipData/city').val()
  const ipRegion = snapshot.child('ipData/region').val()
  const ipZipcode = snapshot.child('ipData/postal').val()
  const ipCountry = snapshot.child('ipData/country').val()
  const ipCoords = snapshot.child('ipData/loc').val()
  
  const htmlBlock = `
  <style>
    .wrapper {
      margin: 0;
      padding: 1.0rem 0;
      background-color: #ccc
    }
    
    .message, .info {
      font-family: 'Roboto', sans-serif;
      border-collapse: collapse;
      margin: auto;
      width: 90%;
      background-color: #fff;
      margin: auto;
    }
    
    .message td, .info td {
      padding: 0.5rem;
      background-color: #fff;
    }
    
    .info td {
      border: 1px solid #000;
    }
    
    img {
      display: block;
      margin: auto;
    }
    
    .logo {
      border-bottom: 0;
      padding-bottom: 0;
    }
    
    .logo-caption {
      text-align: center;
      color: #297A4A;
      
      border-top: none;
      padding-top: 0
    }
    
    .logo-caption, .title, .name, .ip-title {
      font-weight: 600;
    }
    
    .title {
      font-size: 1.25rem;
      text-align: center;
      padding-bottom: 1.0rem !important;
    }

    .hr {
      background-color: #297A4A !important;
      padding: 0 !important;
      border: 1px solid #297A4A;
      border-radius: 2px;
      height: 4px;
    }
    
    .from {
      padding-top: 1.0rem !important;
    }
    
    .name {
      width: 10%;
    }
    
    .message-name {
      text-align: center;
    }
    
    .ip-title {
      text-align: center;
    }
  </style>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <div class="wrapper">
    <table class="message">
      <tr><td colspan="2" class="logo">
        <img src="https://smellydogcoding.com/favicons/favicon-96x96.png" alt="smellydog coding logo">
      </td></tr>
      <tr><td colspan="2" class="logo-caption">Smellydog Coding</td></tr>
      <tr><td colspan="2" class="title">New Contact Form Entry</td></tr>
      <tr><td colspan="2" class="hr"></td></tr>
      <tr><td class="name from">From:</td><td class="content from">${name}</td></tr>
      <tr><td class="name">Email:</td><td>${email}</td></tr>
      <tr><td colspan="2" class="name message-name">Message</td></tr>
      <tr><td colspan="2">${message}</td></tr>
    </table>
    <table class="info">
      <p class="ip-title">Submitter Information</p>
      <tr><td>ip</td><td id="ip">${ipAddress}</td></tr>
      <tr><td>Host</td><td id="ip-coords">${ipHostname}</td></tr>
      <tr><td>Organization</td><td id="ip-org">${ipOrganization}</td></tr>
      <tr><td>City</td><td id="ip-city">${ipCity}</td></tr>
      <tr><td>Region</td><td id="ip-region">${ipRegion}</td></tr>
      <tr><td>Zip Code</td><td id="ip-coords">${ipZipcode}</td></tr>
      <tr><td>Country</td><td id="ip-country">${ipCountry}</td></tr>
      <tr><td>Coords</td><td id="ip-coords">${ipCoords}</td></tr>
    </table>
  </div>
  `

  const mailOptions = {
    from: `"${name}" ${email}`,
    to: 'smellydogcoding@gmail.com',
    subject: 'New Profile Website Contact Form Entry',
    html: htmlBlock
  }

  return mailTransport.sendMail(mailOptions, (error, info) => {
    if (error) { return console.log(error) }
    else { return console.log('Message sent: %s', info.messageId) }
  })
})
