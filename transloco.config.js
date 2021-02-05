// import { availableLangs } from './libs/translations/src/lib/scoped-translations';
const availableLangs =['en', 'de', 'es', 'fr', 'it', 'hi', 'ja', 'zh', 'ar'];
module.exports = {
  langs: availableLangs,
  keysManager: {
    sort: true,
    output: 'assets/i18n', // used only for extract, relative path to the translations files from root
    translationFilesPath: 'assets/i18n', // relative path to the translations files from root
    defaultValue: 'Missing Translation: {{key}}',
    unflat: true
  }
};
