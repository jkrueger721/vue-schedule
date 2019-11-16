import { action, computed, observable } from "mobx";

export default class NavBarStore {
  @observable navbarItems: Array<string> = [
    "Home",
    "Contact",
    "Login",
    "About"
  ];
}
