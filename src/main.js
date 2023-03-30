import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/InputText";
import Checkbox from "primevue/checkbox";
import "./assets/style.css";
import "primeflex/primeflex.css";

import "primevue/resources/themes/saga-blue/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core css
import "primeicons/primeicons.css"; // icons

const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Checkbox", Checkbox);
app.mount("#app");
