import { LightningElement, api } from 'lwc';

export default class RatingFeedbackForm extends LightningElement {
  @api formUrl;
  @api recipientEmail;
  @api questionLabel;
  @api prospectFieldName;
}