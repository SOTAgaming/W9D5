const DomNodeCollection = require('./dom_node_collection');

Window.prototype.$l = (arg) => {
    if (arg instanceof HTMLElement) {
      let node = new DomNodeCollection([arg]);
      document.addEventListener("DOMContentLoaded", () => {
        for (let i = 0; i < node.functions.length; i++) {
          node.functions[i]();
        }
      })
    } else {
      let nodes = Array.from(document.querySelectorAll(arg));
      let nodeCollection = new DomNodeCollection(nodes);
      document.addEventListener("DOMContentLoaded", () => {
        for (let i = 0; i < nodeCollection.functions.length; i++) {
          nodeCollection.functions[i]();
        }
      })
      return nodeCollection;
    }

  };


