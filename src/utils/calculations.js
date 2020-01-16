import { config } from "../config/config";
/**
 * Transforms number to specific currency
 * @param {Number} number
 * @returns {Number}
 */
export const toCurrency = number => {
  return new Intl.NumberFormat(config.lang, {
    style: "currency",
    currency: config.currency
  }).format(number);
};

/**
 * Calculates tax percentage
 * @param {Boolean} add 
 * @param {Number} number 
 * @param {Number} percentage 
 * @returns {Number}
 */
export const tax = (add, number, percentage) => {
  const ToPercentage = percentage / 100 + 1;
  if (add) {
    return number * ToPercentage;
  } else {
    return number / ToPercentage;
  }
};
