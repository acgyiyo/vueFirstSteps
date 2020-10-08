let DirectiveIf = {
        template:
                `<div>
                        <p v-html="text" v-show="show" ></p>
                        <p v-if="user.permission && user.vip">El usuario tiene permiso y es VIP</p>
                        <p v-else-if="user.permission">El usuario tiene permiso</p>
                        <p v-else-if="user.vip">El usuario es VIP</p>
                        <p v-else>El usuario no tiene permisos</p>
                </div>`,
        data() {
                return {
                        text: "v-if Directive",
                        show: true,
                        user: {
                                permission: true,
                                vip: false,
                        }
                }
        }
}