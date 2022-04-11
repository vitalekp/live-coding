// algo
// 1 создать обьект callbackPrompt со свойством message
// 2 создать метод обьекта showPrompt, который запросит у пользователя номер тел.
// 3 создать метод обьекта showDeferredPrompt, который вызовет showPrompt через указанное кол. мс
// експортировать обьект

export const callbackPrompt = {
  message: 'Hello',

  showPrompt() {
    prompt(this.message);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

console.log(callbackPrompt.showDeferredPrompt(1000));
