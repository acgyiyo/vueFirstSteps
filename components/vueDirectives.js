Vue.component('vue-directives', {
        template:
                `<div>
                        <p v-text="text"></p>
                        <a :href="link.href" :title="link.title" v-text="link.text"></a>
                        <directive-hmtl></directive-hmtl>
                        <DirectiveShow/>
                        <DirectiveIf/>
                        <DirectiveOn/>
                </div>`,
        data() {
                return {
                        title: "Vue.js Directives",
                        text: "test text",
                        link: {
                                text: "Vue Home",
                                href: "https://vuejs.org",
                                title: "Docs Vue"
                                // disabled: false
                        }
                }
        },
        components: {
                'directive-hmtl': DirectiveHtml,
                //tambien se puede de la siguiente manera
                DirectiveShow,
                DirectiveIf,
                DirectiveFor,
                DirectiveOn,
        }
})