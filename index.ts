import i18n from "./i18n";

const foo: Record<string, any> = {};
const bar = i18n.t("test"); // here `i18n.t` returns type 'string'
foo.bar = i18n.t("test"); //  here `i18n.t` returns type 'any', so 'any' gets assigned

const t2 = () => "test";
foo.bar = t2(); // here we assign a string, no issue
