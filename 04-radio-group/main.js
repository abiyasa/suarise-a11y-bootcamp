class RadioGroup {
  constructor(groupEl) {
    this.el = groupEl;
    this.radioButtons = Array.from(this.el.querySelectorAll('.radio'));
    this.focusedIdx = 0;
    this.focusedRadio = this.radioButtons[this.focusedIdx];

    // event handlers
    this.el.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.radioButtons.forEach(radioButton => {
      radioButton.addEventListener('click', this.handleClick.bind(this));
    });
  }

  handleKeyDown(event) {
    switch(event.key) {
      case "Up":
      case "ArrowUp":
      case "Left":
      case "ArrowLeft": {
        event.preventDefault();
        this.moveToPrevItem();
        break;
      }

      case "Down":
      case "ArrowDown":
      case "Right":
      case "ArrowRight": {
        event.preventDefault();
        this.moveToNextItem();
        break;
      }
    }
  }

  moveToPrevItem() {
    if (this.focusedIdx === 0) {
      this.focusedIdx = this.radioButtons.length - 1;
    } else {
      this.focusedIdx--;
    }

    this.changeFocus(this.radioButtons[this.focusedIdx]);
  }

  moveToNextItem() {
    if (this.focusedIdx === this.radioButtons.length - 1) {
      this.focusedIdx = 0;
    } else {
      this.focusedIdx++;
    }

    this.changeFocus(this.radioButtons[this.focusedIdx]);
  }

  changeFocus(toRadio) {
    // Set the old button to tabindex -1
    this.focusedRadio.tabIndex = -1;
    this.focusedRadio.removeAttribute('checked');

    // Set the new button to tabindex 0 and focus it
    this.focusedRadio = toRadio;
    this.focusedRadio.setAttribute('checked', 'checked');
    this.focusedRadio.tabIndex = 0;
    this.focusedRadio.focus();
  }

  handleClick(event) {
    // BONUS: If you can implement this 🙂
    // See https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio/ for inspiration
  }
}

new RadioGroup(document.querySelector('#group-makanan'));
new RadioGroup(document.querySelector('#group-minuman'));
