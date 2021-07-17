import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        site: {
          title: 'affinity | a Spotify Visualizer'
        },
        navBar: {
          langSwitcher: 'fr',
          launch: 'Launch',
          explore: 'Explore',
          about: 'About',
        },
        home : {
          title: 'Discover new artists.',
          intro: 'You provide a list of your favourite artists, we do the rest. Using Spotify\'s API, we find artists similar to those that you most often listen to, without you ever needing a Spotify account.',
          cta: 'Let\'s get started.',
          subtitle: {
            1: 'See your artist recommendations.',
            2: 'Visualize your music taste.'
          },
          ctaItem: {
            1: {
              title: 'See your listening habits.',
              intro: 'Using your top artists, visualize your listening habits & narrow down your favourite genres, effortlessly'
            },
            2: {
              title: 'Explore new genres.',
              intro: {
                1: 'Discover new genres as you learn about your music taste',
                2: 'Rediscover old favourites with the click of a button.'
              }
            },
            3: {
              title: 'Explore new genres.',
              intro: {
                1: 'Discover new genres as you learn about your music taste',
                2: 'Rediscover old favourites with the click of a button.'
              }
            },
            4: {
              title: 'See your listening habits.',
              intro: 'Using your top artists, visualize your listening habits & narrow down your favourite genres, effortlessly'
            },
          }
        },
        footer : {
          home: 'Home',
          launch: 'Launch',
          explore: 'Explore',
          about: 'About',
          callout: {
            start: 'Made with',
            end: 'and',
          }
        }
      }
    },
    fr: {
      translations: {
        site: {
          title: 'affinity | un visualiseur Spotify'
        },
        navBar: {
            langSwitcher: 'en',
            launch: 'Lancer',
            explore: 'Explorer',
            about: 'À propos',
        },
        home: {
          title: 'Découvrir de nouveaux artistes.',
          intro: 'Vous fournissez une liste de vos artistes préférés, nous faisons le reste. Grâce à l\'API de Spotify, nous trouvons des artistes similaires à ceux que vous écoutez le plus souvent, sans que vous ayez jamais besoin d\'un compte Spotify.',
          cta: 'Commençons.',
          subtitle: {
            1: 'Consultez vos recommandations d\'artistes.',
            2: 'Visualisez vos goûts musicaux.'
          },
          ctaItem: {
            1: {
              title: 'Voir vos habitudes d\'écoute.',
              intro: 'En utilisant vos meilleurs artistes, visualisez vos habitudes d\'écoute et réduisez vos genres préférés, sans effort'
            },
            2: {
              title: 'Explorez de nouveaux genres.',
              intro: {
                1: 'Découvrez de nouveaux genres tout en découvrant vos goûts musicaux',
                2: 'Redécouvrez d\'anciens favoris en un clic.'
              }
            },
            3: {
              title: 'Explorez de nouveaux genres.',
              intro: {
                1: 'Découvrez de nouveaux genres tout en découvrant vos goûts musicaux',
                2: 'Redécouvrez d\'anciens favoris en un clic.'
              }
            },
            4: {
              title: 'Voir vos habitudes d\'écoute.',
              intro: 'En utilisant vos meilleurs artistes, visualisez vos habitudes d\'écoute et réduisez vos genres préférés, sans effort'
            },
          }
        },
        footer : {
          home: 'Domicile',
          launch: 'Lancer',
          explore: 'Explorer',
          about: 'À propos',
          callout: {
            start: 'Fait avec',
            end: 'et',
          }
        }
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  ns: ["translations"],
  defaultNS: "translations",

  interpolation: {
    escapeValue: false,
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;