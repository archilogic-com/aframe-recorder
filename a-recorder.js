AFRAME.registerComponent('recorder', {

  schema: { type: 'string', default: 'recording.webm' },

  init: function () {
    this.el.addEventListener('start', this.start.bind(this))
    this.el.addEventListener('stop', this.stop.bind(this))
  },

  start: function () {
    var stream = this.el.parentNode.querySelector('canvas').captureStream(25)
    this._recorder = new MediaRecorder(stream, { mimeType: 'video/webm' })
    var frames = []

    this._recorder.ondataavailable = function (evt) {
      if (evt.data) frames.push(evt.data)
    }

    this._recorder.onstop = () => {
      var fileBlob = new Blob(frames, { type: 'video/webm' })
      var dataUrl = window.URL.createObjectURL(fileBlob)
      var link = document.createElement('a')
      link.href = dataUrl
      link.download = this.data
      link.click()
    }

    this._recorder.start(100)
  },

  stop: function () {
    if(!this._recorder) return
    this._recorder.stop()
  }
})