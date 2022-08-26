// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const banana = new Banana();
banana.setLocale("zh");

fetch('/i18n/demo-' + banana.locale + '.json').then((response) => response.json()).then((messages) => {
    banana.load(messages, banana.locale)
    console.log('i18n json loaded, test:', banana.i18n('Category'))
})