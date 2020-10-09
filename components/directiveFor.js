let DirectiveFor = {
        template:
                `<div>
                        <p v-html="text"></p>
                        <h4>Normal List</h4>
                        <ul>
                                <li v-for="(color, index) in colors" :key="index" v-text="color"></li>
                        </ul>

                        <h4>Object List</h4>
                        <ul>
                                <li v-for="(item, key, index) in myObject" :key="index">
                                        {{ key }}: {{ item }}
                                </li>
                        </ul>

                        <h4>Objects List</h4>
                        <ul>
                                <li v-for="(item, key, index) in objectList" :key="index">
                                        Name: {{ item.name }} </br>
                                        Last Name: {{ item.lastName }} </br>
                                        Age: {{ item.age }} </br>
                                </li>
                        </ul>
                </div>`,
        data() {
                return {
                        text: "v-for Directive",
                        colors: ["Red", "Yellow", "Green"],
                        myObject: {
                                name: "Alejo",
                                lastName: "Cuervo",
                                age: 28
                        },
                        objectList: [
                                {
                                        name: "Joss",
                                        lastName: "Vega",
                                        age: 30
                                },
                                {
                                        name: "Sebas",
                                        lastName: "Cardona",
                                        age: 28
                                },
                                {
                                        name: "Cristo",
                                        lastName: "Muñon",
                                        age: 29
                                },
                        ]
                }
        }
}