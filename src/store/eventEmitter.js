export class EE {
  constructor() {
    this.events = {}
  }

  subscribe(actionType, callback) {
    if (!this.events[actionType]) {
      this.events[actionType] = []
    }

    this.events[actionType].push(callback)
  }

  unsubscribe(actionType, callback) {
    if (!this.events[actionType]) {
      this.events[actionType] = this.events[actionType].filter(
        (fn) => fn !== callback,
      )
    }
  }

  emit(ACTION_TYPE, payload) {
    if (this.events[ACTION_TYPE]) {
      this.events[ACTION_TYPE].forEach((fn) => {
        fn(payload)
      })
    }
  }
}
