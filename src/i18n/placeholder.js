import { injectIntl } from 'react-intl';
// const placeholderTranslate = (id, value = {}) => {
//   return intl.formatMessage({ id: id });
// };
const placeholderTranslate = injectIntl(({ intl }) => (id) => {
  return intl.formatMessage({ id: 'hello' });
});

export default injectIntl(placeholderTranslate);
