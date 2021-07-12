import { LightningElement, api } from "lwc";

export default class FeedbackForm extends LightningElement {
  @api
  formUrl;
  @api
  recipientEmail;
  @api
  ratingFieldLabel;
  @api
  ratingFieldName;
  @api
  submitButtonLabel;
}
