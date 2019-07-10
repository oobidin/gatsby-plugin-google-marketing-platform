/**
 * paramStringFromObject
 */

export function paramStringFromObject(object) {
  return Object.keys(object).reduce((accumulator, value) => accumulator + `&${value}=${object[value]}`, '');
}
