interface ActionContext {
  (state: any, context: any): void
}

let actionContext: ActionContext = (state: any, context: any): void => {
  console.log('state', state)
}
actionContext('3', 123)
