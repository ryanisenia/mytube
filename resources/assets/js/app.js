
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


/**
 * Passport components
 */
Vue.component( 'passport-clients', require('./components/passport/Clients.vue'));
Vue.component( 'passport-authorized-clients', require('./components/passport/AuthorizedClients.vue'));
Vue.component('passport-personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue'));

/**
 * App Components
 */
Vue.component('video-thumb', require('./components/VideoThumb.vue'));
Vue.component('search', require('./components/Search.vue'));
// Vue.component('search', require('./components/Search.vue'));

/**
 * Spinner Components
 */
Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'));


/**
 * Vue Router for to work with routes in app
 */

import router from './routes';

// // CommonJS
// const swal = require('sweetalert2')
// beforeEach route scroll to top
router.beforeEach( (to, from, next) => {
    window.scrollTo(0,0);
    next(true);
});

//To broadcast the events among component
var EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
    $eventBus: {
        get: function () {
            return EventBus;
        }
    }
});
/**
 * Vue Instance
 */
const app = new Vue({
    router,
    el: '#app',
    methods: {
        slug(str) {
            if ( ! str ) return '';
            return str.toLowerCase()
                .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
                .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
                .replace(/^-+|-+$/g, ''); // remove leading, trailing -
        }
    },
    data: {
        auth: Laravel.Auth,
        channel : Laravel.Channel
    }
});
