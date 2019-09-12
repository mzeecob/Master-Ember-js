import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';
const { Model, attr } = DS;

export default Model.extend({
  name: attr('string'),
  address: attr('string'),
  phone: attr('string'),

  isValid: notEmpty('name')

});
