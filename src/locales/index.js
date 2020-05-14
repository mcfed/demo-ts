// import {defineMessages} from 'react-intl';
function defineMessages(locale) {
  return locale;
}

export default defineMessages({
  title: {
    id: "abc-ts.title",
    defaultMessage: "abc-ts.title",
  },
  "delete.confirm": {
    id: "abc-ts.buttons.delete.confirm",
    defaultMessage: "abc-ts.buttons.delete.confirm",
  },
  "name.label": {
    id: "abc-ts.field.name.label",
    defaultMessage: "name",
  },
  "title.label": {
    id: "abc-ts.field.title.label",
    defaultMessage: "title",
  },
  "GLOBAL.NEW": {
    id: "abc-ts.field.title.label",
    defaultMessage: "新增",
  },
  "GLOBAL.REMOVE": {
    id: "abc-ts.field.title.label",
    defaultMessage: "删除",
  }
});
