let extendStatic = (function (Son, Parent) {
  function getExtendStaticWithForIn() {
    for (let key in Parent) {
      if (Object.prototype.hasOwnProperty.call(Parent, key))
        Son[key] = Parent[key]
    }
  }
}())