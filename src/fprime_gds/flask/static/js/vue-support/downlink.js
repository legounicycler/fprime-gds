import {timeToString} from "./utils.js";
Vue.component("downlink", {
    props:["downfiles"],
    template: "#downlink-template",
    methods: {
        keyify(item) {
            return "file-" + item;
        }
    },
    computed: {
        elements: function () {
            return this.downfiles;
        }
    }
});

export let DownlinkMixins = {
    setupDownlink() {
        return {"downfiles": []}
    },
    updateDownfiles(files) {
        this.vue.downfiles = files;
    }
};