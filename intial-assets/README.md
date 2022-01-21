# Ice Cream Challenge

The challenge is intended for candidates interviewing for the fullstack software development role at PointCare.

## Get Started

1. Clone this repository
2. Create your feature branch off of main
3. Build feature based on the requirements below
4. Create a pull request when you're done

## Feature

As an ice cream parlor owner, in order to better understand my business, I provide free ice cream in exchange for customer feedback.

### Requirements

Our customer is the ice cream parlor. You are to build a Node.js app that allows customers of the ice cream parlor to redeem a free scoop of ice cream in exchange for completing a questionnaire. This requirement fulfills the interaction between the ice cream parlor customer and the web application.

- [ ] Web application must be publically available on the internet
- [ ] Repo must have a file containing a QR Code (e.g. jpg, svg) to kick off the workflow
- [ ] Complete acceptance criteria below

### Example Scenario

Wendy is walking by an ice cream parlor and sees a sign in the window that reads "Scan QR code to redeem a free scoop of ice cream!". Wendy takes out her phone, points the camera at the QR code and is redirected to a website. The website prompts wendy to complete a questionnaire in order to receive a free scoop. At the end of the questionnaire, Wendy is prompted for her phone number. Moments later she receives a text message containing her claim code. Wendy walks into the ice cream parlor, shows the code to the clerk, then receives her free scoop of ice cream.

### Acceptance Criteria

- [ ] 1. On mobile phone, when user scans QR code with camera app then website is opened in browser and `home` page is rendered as:

  ![home](/1-home.png)

- [ ] 2. On `home` page, when user clicks the "yes" button, then `question` page is rendered as:

  ![question](/2-question.png)

- [ ] 3. On `question` page, when user selects an ice cream, then `send-code` page is redered as:

  ![send-code](/3-send-code.png)

- [ ] 4. On `send-code` page, when user submits their phone number, then user receives unique claim code via SMS and the `success` page is rendered as:

  ![success](/4-success.png)

- [ ] 5. On `send-code` page, when user submits their phone number, but already submitted in a previous interaction, then `already-sent` page is rendered as:

  ![already-sent](/5-already-sent.png)
