import { LightningElement, api } from "lwc";

export default class RatingFeedbackForm extends LightningElement {
  @api
  formUrl;
  @api
  recipientEmail;
  @api
  questionLabel;
  @api
  prospectFieldName;

  @api
  get starCount() {
    return this._starCount;
  }
  set starCount(value) {
    this._starCount = parseInt(value, 10);
    this.generateStars();
  }

  stars = [];

  generateStars() {
    const stars = [];
    const baseUrl = `${this.formUrl}?email=${this.recipientEmail}&${this.prospectFieldName}=`;
    for (let i = this._starCount; i > 0; i--) {
      const url = `${baseUrl}${i}`;
      stars.push({
        url,
        value: i
      });
    }
    this.stars = stars;
  }
}
