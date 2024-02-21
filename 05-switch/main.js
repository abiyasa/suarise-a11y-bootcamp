/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:  main.js
 *
 *   Desc:  Switch widget that implements ARIA Authoring Practices
 */

class ButtonSwitch {
  constructor(domNode, options = {}) {
    this.switchNode = domNode;
    this.switchNode.addEventListener('click', () => this.toggleStatus());
    this.isFakeSwitch = options.isFakeSwitch || false;

    // Set background color for the SVG container Rect
    var color = getComputedStyle(this.switchNode).getPropertyValue(
      'background-color'
    );
    var containerNode = this.switchNode.querySelector('rect.container');
    containerNode.setAttribute('fill', color);
  }

  // Switch state of a switch
  toggleStatus() {
    console.log('toggleStatus', this.isFakeSwitch);
    console.log(this.switchNode.getAttribute('checked'));

    const currentState = this.isFakeSwitch ?
    (this.switchNode.getAttribute('checked') === 'true'):
    (this.switchNode.getAttribute('aria-checked') === 'true');

    console.log('currentState', currentState);

    if (this.isFakeSwitch) {
      if (currentState) {
        this.switchNode.removeAttribute('checked');
      } else {
        // add atrribute checked
        this.switchNode.setAttribute('checked', 'true');
      }
    } else {
      const newState = String(!currentState);
      this.switchNode.setAttribute('aria-checked', newState);
    }
  }
}

// Initialize switches
window.addEventListener('load', function () {
  // real switches
  Array.from(document.querySelectorAll('button[role^=switch]')).forEach(
    (element) => new ButtonSwitch(element)
  );

  // fake switches
  Array.from(document.querySelectorAll('button.switch')).forEach(
    (element) => new ButtonSwitch(element, { isFakeSwitch: true })
  );
});
