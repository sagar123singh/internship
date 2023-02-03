for (var i = 0; i < 5; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }