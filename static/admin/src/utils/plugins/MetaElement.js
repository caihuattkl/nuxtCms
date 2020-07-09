import Vue from "vue";
import Meta from "vue-meta";
Vue.use(Meta, {
  keyName: "metas", // the component option name that vue-meta looks for meta info on.
  attribute: "metas", // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: "data-meta-server", // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: "mid" // the property name that vue-meta uses to determine whether to overwrite or append a tag
});
