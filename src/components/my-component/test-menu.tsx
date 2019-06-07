import { Component, State, h } from "@stencil/core";

@Component({
  tag: "test-menu",
  styleUrl: "test-menu.css"
})
export class TestMenu {
  @State() open: string;

  handleToggle = () => {
    let menu = document.getElementById("show-menu");
    let wrapper = document.getElementById("menu-wrapper");
    let cmpnt = document.getElementById("swipe-cmpnt");

    menu.classList.toggle("toggle");
    menu.classList.toggle("transition");

    wrapper.classList.toggle("toggle-slider");
    wrapper.classList.toggle("transition");

    cmpnt.classList.toggle("hide");

    setTimeout(function() {
      menu.classList.toggle("transition");
      wrapper.classList.toggle("transition");
    }, 350);
  };

  render() {
    return (
      <nav class="color-picker">
        <div id="show-menu" class="start-menu" onClick={() => this.handleToggle()}>
          <span class="chevron"></span>
        </div>
        <div id="menu-wrapper">
          <div id="swipe-cmpnt" class="hide">
            <p>Select one of the options below</p>
            <ul>
              <li><a href="#">Menu <span>Option 1</span></a></li>
              <li><a href="#">Menu <span>Option 2</span></a></li>
              <li><a href="#">Menu <span>Option 3</span></a></li>
              <li><a href="#">Menu <span>Option 4</span></a></li>
              <li><a href="#"><span class="far fa-life-ring"></span>Help Center</a></li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}
