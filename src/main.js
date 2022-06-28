import "./index.css";

import { createApp } from "vue";
import App from "./App.vue";

import api from "./services/api";
import router from "./routes";
import store from "./store";

const app = createApp(App);
app.provide("$axios", api);

app.use(router).use(store).mount("#app");
