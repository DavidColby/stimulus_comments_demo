import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["commentList", "commentBody", "form"]

  connect() {
    console.log("We're connected!")
  }

  createSuccess(event) {
    const [data, status, xhr] = event.detail
    const target = event.target

    const newComment = document.createElement("div")
    newComment.classList.add("fade-in-left")
    newComment.innerHTML = xhr.response

    this.commentListTarget.prepend(newComment)
    this.commentBodyTarget.value = ''

    setTimeout(() => {
      newComment.classList.remove("fade-in-left")
      newComment.removeAttribute("id")
    }, 600);
  }
}
