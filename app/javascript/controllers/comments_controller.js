import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["commentList", "commentBody"]

  connect() {
    console.log("We're connected!")
  }

  onCommentCreate(event) {
    const [data, status, xhr] = event.detail
    const target = event.target

    this.commentListTarget.innerHTML = xhr.response + this.commentListTarget.innerHTML
    this.commentBodyTarget.innerHTML = ''
  }
}
