import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton
    toggleButton.addEventListener('click', this.handleClick.bind(this))
    // toggleButton.setAttribute("data-user-id", "")
  }


  async handleClick(event) {
    // Your code here
    event.preventDefault()
    this.toggleButton.getAttribute('data-follow-state') === 'followed' ? this.unfollow() : this.follow()
  }

  async follow() {
    // Your code here
    
  }

  async unfollow() {
    // Your code here
    
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}