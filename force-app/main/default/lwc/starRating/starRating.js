import { LightningElement, api } from "lwc";

export default class StarRating extends LightningElement {
  stars = [];

  @api labelAlignment;
  @api labelColor;
  @api starColor;
  @api starHoverColor;
  @api starHoverBgColor;

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
  get formFieldName() {
    return this._formFieldName;
  }
  set formFieldName(value) {
    this._formFieldName = value;
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
    const baseUrl = `${this.formUrl}?email=${this.recipientEmail}&${this.formFieldName}=`;

    for (let i = 1; i < this._starCount + 1; i++) {
      const url = `${baseUrl}${i}`;
      stars.push({
        url,
        value: i
      });
    }
    this.stars = stars;
  }

  get labelStyle() {
    return `color: ${this.labelColor}; text-align: ${this.labelAlignment};`;
  }

  get starBaseStyle() {
    return `color: ${this.starColor};`;
  }

  get starHoverStyle() {
    return `color: ${this.starHoverColor}; background-color: ${this.starHoverBgColor};`;
  }
}
