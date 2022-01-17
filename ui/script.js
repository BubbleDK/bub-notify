const bubbleNotify = new Vue({
    el: "#bub-notify",
    vuetify: new Vuetify(),

    data: {
        // NOT CONFIGURABLE
        showSettings: false,
        notiButtonClose: false,
        notifyColorPickerActive: false,
        notifyBorderColorActive: false,

        storageVariabelSetBorder: false,
        storageVariabelSetFlat: false,
        storageVariabelSetSquared: false,
        // NOT CONFIGURABLE

        // CONFIGURABLE
        notiSquare: false,
        notiShowBorder: false,
        notiFlat: false,
        notiPosition: 'top-center',
        notiColor: '#1a1a1a',
        notiBorderColor: '#FF0000',
        // CONFIGURABLE
    },

    methods: {
        openNotification(title, text, icon, duration) {
            let borderColor = null
            if (this.notiShowBorder == true) {
                borderColor = this.notiBorderColor;
            } else {
                borderColor = null
            }

            this.$vs.notification({
                progress: 'auto',
                border: borderColor,
                square: this.notiSquare,
                flat: this.notiFlat,
                buttonClose: this.notiButtonClose,
                color: this.notiColor,
                title: title,
                text: text,
                position: this.notiPosition,
                icon: icon,
                duration: duration,
            })
        },
        openColorPicker(type) {
            if (type == 'notify') {
                this.notifyColorPickerActive = true;
            } else if (type == 'border') {
                this.notifyBorderColorActive = true;
            }
        },
        openNotificationMenu(bool) {
            if (bool) {
                this.showSettings = true;
            } else {
                this.showSettings = false;
            }
        }
    },
    mounted() {
        if (localStorage.notiShowBorder) { 
            this.notiShowBorder = JSON.parse(localStorage.getItem('notiShowBorder')) 
        }
        if (localStorage.notiFlat) { 
            this.notiFlat = JSON.parse(localStorage.getItem('notiFlat')) 
        }
        if (localStorage.notiSquare) { 
            this.notiSquare = JSON.parse(localStorage.getItem('notiSquare')) 
        }
        if (localStorage.notiColor) { 
            this.notiColor = localStorage.notiColor;
        }
        if (localStorage.notiPosition) { 
            this.notiPosition = localStorage.notiPosition;
        }
    },
    watch: {
        notiShowBorder(newVal) {
            this.notiShowBorder = newVal;
            localStorage.setItem('notiShowBorder', this.notiShowBorder);
        },
        notiFlat(newVal) {
            this.notiFlat = newVal;
            localStorage.setItem('notiFlat', this.notiFlat);
        },
        notiSquare(newVal) {
            this.notiSquare = newVal;
            localStorage.setItem('notiSquare', this.notiSquare);
        },
        notiColor(newVal) {
            this.notiColor = newVal;
            localStorage.setItem('notiColor', this.notiColor);
        },
        notiPosition(newVal) {
            this.notiPosition = newVal;
            localStorage.setItem('notiPosition', this.notiPosition);
        },
    },

    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                axios.post("https://bub-notify/bub-notify::closeSettings", {}).then(response => {
                    this.showSettings = false;
                })
                .catch(error => {
                    console.log(error);
                });
            }
        });
    },
});

// Listener from Lua CL
document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        window.addEventListener("message", event => {
            if (event.data.type == "showNotification") {
                bubbleNotify.openNotification(event.data.title, event.data.text, event.data.icon, event.data.duration)
            } else if (event.data.type == "setNotificationSettings") {
                bubbleNotify.openNotificationMenu(event.data.bool)
            }
        });
    }
};