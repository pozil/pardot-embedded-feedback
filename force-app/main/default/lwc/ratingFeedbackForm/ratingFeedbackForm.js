import { LightningElement, api } from "lwc";

export default class RatingFeedbackForm extends LightningElement {
  stars = [];

  @api
  get formUrl() {
    return this._formUrl;
  }
  set formUrl(value) {
    this._formUrl = value;
    this.generateStars();
  }

  @api
  get recipientEmail() {
    return this._recipientEmail;
  }
  set recipientEmail(value) {
    this._recipientEmail = value;
    this.generateStars();
  }

  @api
  get questionLabel() {
    return this._questionLabel;
  }
  set questionLabel(value) {
    this._questionLabel = value;
    this.generateStars();
  }

  @api
  get prospectFieldName() {
    return this._prospectFieldName;
  }
  set prospectFieldName(value) {
    this._prospectFieldName = value;
    this.generateStars();
  }

  @api
  get starCount() {
    return this._starCount;
  }
  set starCount(value) {
    this._starCount = parseInt(value, 10);
    this.generateStars();
  }

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