let DirectiveHtml = {
        template:
                `<div>
                        <p v-html="text"></p>
                </div>`,
        data() {
                return {
                        //para que renderize el tag html es necesario meterlo en la directiva v-html
                        text: "<b>v-html Directive</b>",
                }
        }
}