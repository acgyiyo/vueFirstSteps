let DirectiveShow = {
        template:
                `<div>
                        <p v-show="show" >Test text show</p>
                </div>`,
        data() {
                return {
                        text: "v-show Directive",
                        show:true
                }
        }
}