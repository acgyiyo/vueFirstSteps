let DirectiveOn = {
        template:
                `<div>
                        <p v-html="text"></p>
                        <button @click="buyTicket">Buy tickets <span v-text="tickets"></span> left</button>
                </div>`,
        data() {
                return {
                        text: "v-on Directive",
                        tickets: 5,
                        message: "Thanks for the purchase",
                        soldMessage: "Sold out"
                }
        },
        methods: {
                buyTicket() {
                        if (this.tickets > 0) {
                                this.tickets--;
                                return alert(`Hello: ${this.message}`);
                        }
                        return alert(`${this.soldMessage}, sorry`)
                }
        },
}