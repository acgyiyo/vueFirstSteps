Vue.component('vue-directives', {
        template:
                `<div>
                        <p v-text="text"></p>
                        <a :href="link.href" :title="link.title" v-text="link.text"></a>
                </div>`,
        data() {
                return {
                        text: "texto prueba",
                        link: {
                                text: "Vue Home",
                                href: "https://vuejs.org",
                                title: "Docs Vue"
                                // disabled: false
                        }
                }
        },
})