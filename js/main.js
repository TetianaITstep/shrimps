document.addEventListener("DOMContentLoaded", function () {
  const languageSwitcher = document.getElementById("language-switcher");

  const translations = {
    en: {
      banner_text:
        "Restaurateur? Join the Taster Platform and rapidly launch one of our iconic virtual restaurant brands from your existing kitchen!",
      best_food_text: "The best of street food at home",
      best_food_descr_text:
        "Taster is a collection of online restaurants dedicated to bringing the best of street food to you.",
    },
    es: {
      banner_text:
        "¿Restaurador? ¡Únete a la plataforma Taster y lanza rápidamente una de nuestras icónicas marcas de restaurantes virtuales desde tu cocina existente!",
      best_food_text: "Lo mejor de la comida callejera en casa",
      best_food_descr_text:
        "Taster es una colección de restaurantes en línea dedicados a llevar lo mejor de la comida callejera a tu hogar.",
    },
    fr: {
      banner_text:
        "Restaurateur ? Rejoignez la plateforme Taster et lancez rapidement l'une de nos marques de restaurants virtuels emblématiques depuis votre cuisine existante !",
      best_food_text: "Le meilleur de la street food à la maison",
      best_food_descr_text:
        "Taster est une collection de restaurants en ligne dédiés à vous apporter le meilleur de la street food.",
    },
  };

  const elementsToTranslate = [
    { id: "banner_text", key: "banner_text" },
    { id: "best_food_text", key: "best_food_text" },
    { id: "best_food_descr_text", key: "best_food_descr_text" },
  ];

  function changeLanguage(lang) {
    if (translations[lang]) {
      for (let i = 0; i < elementsToTranslate.length; i++) {
        const element = document.getElementById(elementsToTranslate[i].id);
        const translationKey = elementsToTranslate[i].key;
        element.textContent = translations[lang][translationKey];
      }
    }
  }

  languageSwitcher.addEventListener("click", function (event) {
    const lang = event.target.getAttribute("data-lang");
    if (lang) {
      changeLanguage(lang);
    }
  });
});
