class DomNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
    this.functions = [];
  }

  html(content) {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].innerHTML = content;
    }
  }

  empty() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].innerHTML = "";
    }
  }

  append(arg) {
    for (let i = 0; i < this.nodes.length; i++) {
      if(typeof arg === "string") {
        let inner = this.nodes[i].innerHTML;
        let newInner = inner.concat(arg);
        this.nodes[i].innerHTML = newInner;
      } else if (arg instanceof HTMLElement) {
        this.nodes[i].appendChild(arg);
      } else {
        debugger
          for (let j = 0; j < arg.nodes.length; j++) {
            this.nodes[i].appendChild(arg.nodes[j]);
          }
      }
    }
  }

  attr(attribute, value) {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].setAttribute(attribute, value);
    }
  }

  addClass(c) {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].classList.add(c);
    }
  }

  removeClass(c) {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].classList.remove(c);
    }
  }

  children() {
    let children = [];
    for (let i = 0; i < this.nodes.length; i++) {
      let curChildren = Array.from(this.nodes[i].children);
      children.push(curChildren);
    }
    return new DomNodeCollection(children);
  }

  parent() {
    let parent = [];
    for (let i = 0; i < this.nodes.length; i++) {
      parent.push(this.nodes[i].parentElement);
      debugger
    }
    return new DomNodeCollection(parent);
  }

  find(selector) {
    let nodes = [];
    for (let i = 0; i < this.nodes.length; i++) {
      let cur = this.nodes[i].querySelectorAll(selector);
      nodes.push(cur);
    }
    return nodes;
  }
  
  remove() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].parentNode.removeChild(this.nodes[i]);
    }
  }

  on(event, cb) {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].addEventListener(event, cb);
      this.nodes[i][event] = cb;
    }
  }

  off(event) {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].removeEventListener(event, this.nodes[i][event] );
      this.nodes[i][event] = null;
    }
  }
}


module.exports = DomNodeCollection;