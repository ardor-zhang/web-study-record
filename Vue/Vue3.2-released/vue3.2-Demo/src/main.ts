import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import App from './App.vue';
// import App from './App-nameSpaced-Component.vue';
// import App from "./01-basicSyntax/index.vue";
// import App from "./02-toplevel-bindings-exposed-to-template/index.vue";
// import App from "./03-using-components/index.vue";
// import App from "./03-using-components/dynamic-components/index.vue";
// import App from "./03-automatic-name-inference/Foo.vue";
import App from "./03-using-components/namespaced-components/index.vue";
// import App from "./08-defineProps/index.vue";
// import App from "./08-defineEmits/index.vue";
// import App from "./08-widthDefaults/index.vue";
// import App from "./09-defineExpose/index.vue";

const app = createApp(App);
app.use(ElementPlus);

app.mount('#app');