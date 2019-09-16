import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';
const { Model, attr } = DS;

export default Model.extend({
  name: attr('string'),
  address: attr('string'),
  phone: attr('string'),

  books: DS.hasMany('book'),

  isValid: notEmpty('name'),

  randomize() {
    this.set('name', Faker.company.companyName() + ' Library');
    this.set('address', this._fullAddress());
    this.set('phone', Faker.phone.phoneNumber());

    // If you would like to use in chain.
    return this;
  },

  _fullAddress() {
    return `${Faker.address.streetAddress()}, ${Faker.address.city()}`;
  }

});
