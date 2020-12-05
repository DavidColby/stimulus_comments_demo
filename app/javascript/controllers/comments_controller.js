import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["commentList", "commentBody", "form", "count"]
  static classes = ["animateIn"]
  static values = {
    count: Number
  }

  connect() {
    console.log("We're connected!")
  }

  countValueChanged() {
    this.countTarget.innerHTML = this.countValue + " Comments"
  }

  createSuccess(event) {
    const [data, status, xhr] = event.detail
    const target = event.target

    const newComment = document.createElement("div")
    newComment.classList.add(this.animateInClass)
    newComment.innerHTML = xhr.response

    this.countValue = this.countValue + 1
    this.commentListTarget.prepend(newComment)
    this.commentBodyTarget.value = ''

    setTimeout(() => {
      newComment.classList.remove(this.animateInClass)
      newComment.removeAttribute("id")
    }, 600);
  }
}
