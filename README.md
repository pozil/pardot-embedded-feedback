# Embedded Feedback within Pardot Emails

Gather instant feedback from prospects within Pardot Emails.

<table>
   <tr>
      <td width="50%">
         <img src="gfx/starRating-email.png" alt="Star rating component in email"/>
      </td>
      <td>
         <img src="gfx/textFeedback-email.png" alt="Text feedback component in email"/>
      </td>
   </tr>
</table>

1. [About](#about)
1. [Installation](#installation)
1. [Documentation](#documentation)
1. [Component Reference](#component-reference)
   1. [Star Rating Component](#star-rating-component)
   1. [Text Feedback Component](#text-feedback-component)

## About

Embed a feedback form within your Pardot emails to gather instant and direct feedback from your prospects. Ask them about their interests or understand if they like your content (webinar, whitepaper).

The repository contains Lightning Web Components that can be used with Pardot's Email Builder:

- a **Star Rating** component with any number of stars (default: 5).
- a **Text Feedback** component with up to 5 text field options.

Once sent, prospects can then select and submit his answer directly from within the email.

## Installation

Install the components though the AppExchange (recommended) or deploy this project's metadata (for development purposes).

## Documentation

1. Create a [Form Handler](https://help.salesforce.com/articleView?id=sf.pardot_form_handlers.htm&type=5)

   1. Check **Kiosk/Data Entry Mode**.
   1. Specify a URL for the **Success Location**. This is a URL that should leads to a landing page that says "Thank You".
   1. Add a **Form Field** mapping:
      - **External Field Name** is the name of the field that will be specified in your component later.
      - **Prospect Field** is the field where the information will be saved.
      - **Data Format** can be left as `Text` or optionally switched to `Number` if using the star rating component.

1. Once your form handler is saved, switch the **Endpoint URL** to `https` (A) and copy the URL (B).

   ![Form Handler](gfx/form-handler.png)

1. Create an **Email Content** record.
1. In your Email Content record, click **Edit in Builder**.
1. Expand the **Custom** components section on the left and drag and drop one of the feedback form components on your email template.
1. Refer to the [Component Reference](#component-reference) section of this document configuration guidance.

## Component Reference

### Star Rating Component

<br/>
<details><summary><b> Click here for screenshots 🖼</b></summary>
    <br/>
    <p><img src="gfx/starRating-email.png" alt="Star rating component in email"/></p>
    <p><img src="gfx/starRating-builder.png" alt="Star rating component in Email Builder"/></p>
</details>
<br/>

| Property            | Description                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Form URL**        | HTTPS endpoint URL of your Form Handler that you copied earlier.                                                                                  |
| **Recipient Email** | Email address of the prospect.<br/>Leave the default value `{{Recipient.Email}}`, Pardot will automatically inject the relevant values in emails. |
| **Question Label**  | An optional label for the component.                                                                                                              |
| **Form Field Name** | This value must match the **External Field Name** value that you configured in your Form Handler.                                                 |
| **Star Count**      | The number of stars that will be displayed in the email.                                                                                          |

### Text Feedback Component

<br/>
<details><summary><b> Click here for screenshots 🖼</b></summary>
    <br/>
    <p><img src="gfx/textFeedback-email.png" alt="Text feedback component in email"/></p>
    <p><img src="gfx/textFeedback-builder.png" alt="Text feedback component in Email Builder"/></p>
</details>
<br/>

**Tips:**

- The component supports up to five answers.
- Answers with no label and values will not be displayed

| Property            | Description                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Form URL**        | HTTPS endpoint URL of your Form Handler that you copied earlier.                                                                                  |
| **Recipient Email** | Email address of the prospect.<br/>Leave the default value `{{Recipient.Email}}`, Pardot will automatically inject the relevant values in emails. |
| **Question Label**  | An optional label for the component.                                                                                                              |
| **Form Field Name** | This value must match the **External Field Name** value that you configured in your Form Handler.                                                 |
| **Answer x Label**  | Label for one of the x links displayed in the email.                                                                                              |
| **Answer x Value**  | Value associated to one of the x links displayed in the email. This is what gets sent to the form handler.                                        |
