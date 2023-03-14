class Profile {
  #win = 0
  #loss = 0
  #draw = 0
  #point = this.#win + this.#draw / 2

  constructor(name) {
    this.name = name
  }

  getWin() {
    return this.#win
  }
  incWin() {
    this.#win += 1
    this.#point = this.#win + this.#draw / 2
  }

  getDraw() {
    return this.#draw
  }
  incDraw() {
    this.#draw += 1
    this.#point = this.#win + this.#draw / 2
  }

  getLoss() {
    return this.#loss
  }
  incLoss() {
    this.#loss += 1
  }

  getPoint() {
    return this.#point
  }
}

export default Profile
