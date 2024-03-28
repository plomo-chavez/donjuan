// screenDimensionsPlugin.js
export default {
    install(Vue) {
      Vue.mixin({
        data() {
          return {
            screenWidth: 0,
            screenHeight: 0
          };
        },
        mounted() {
          this.updateDimensions();
          window.addEventListener('resize', this.updateDimensions);
        },
        destroyed() {
          window.removeEventListener('resize', this.updateDimensions);
        },
        methods: {
          updateDimensions() {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
          }
        }
      });
    }
  };
  