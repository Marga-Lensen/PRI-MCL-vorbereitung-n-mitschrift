import i18next from 'i18next';
import en from './i18n/en.js'
import de from './i18n/de.js'

export const resources = {
    en,
    de,
}

i18next.init({
    lng: 'en',
    debug: true,
    resources,
})

// Here we are using "type assertion"
const switcher = document.querySelector('.language-switcher') as HTMLSelectElement | null;
if (switcher) {
    switcher.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLSelectElement;
        const lang = target.value;
        console.log('Switching to', lang);

        // Documentation: https://www.i18next.com/overview/api#changelanguage
        i18next.changeLanguage(lang)
            .then(() => {
                translateAll();
            })
            .catch((error) => {
                console.error('Error changing language:', error);
            });
    });
}

function translateAll() {
    // Hardcoded translation
    const counter = document.querySelector('.counter')
    if (counter) {
        counter.textContent = i18next.t('counter', { count: 19 })
    }

    // Dynamic translation
    const translationTargets = document.querySelectorAll("[data-t]")
    translationTargets.forEach((el) => {
        const key = el.getAttribute('data-t')
        if (key) {
            el.textContent = i18next.t(key)
        }
    })
}

document.addEventListener('DOMContentLoaded', translateAll)