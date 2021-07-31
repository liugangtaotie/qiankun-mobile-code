import Vue, { VNode } from "vue";

// eslint-disable-next-line prettier/prettier
declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  interface ImportMeta {
    env: Record<string, unknown>;
  }
}
