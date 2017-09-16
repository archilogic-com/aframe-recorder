# aframe-recorder
Recording component for A-Frame using MediaRecorder

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This component is compatible with A-Frame 0.5, 0.6 and 0.7

### Usage

To use this component, include the component as follows

```html
<script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
<script src="./a-recorder.js"></script>
<a-scene>
  <a-entity recorder="recording.webm"></a-recorder>
  <!-- insert the rest of your a-scene -->
</a-scene>
```

To start recording, you can either 

* send a `start` event to the component or 
* use `document.querySelector([recorder]).components.recorder.start()`

To end the recording, you can either

* send a `stop` event to the component or 
* use `document.querySelector([recorder]).components.recorder.stop()`

## Deployment

This component is deployed via npm.

## Built With

* [A-Frame](https://aframe.io)
* [Canvas captureStream API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream)
* [MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)

## Contributing

All contributions are welcome. For typos, small bug fixes and small improvements, please feel free to submit a Pull Request.
If you are not sure if you have found a bug or have some larger scale changes in mind, please open an issue so duplication of work and misunderstandings can be avoided.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/archilogic-com/3dio-furniture-app/tags). 

## Authors

* **Ben Devine** - *Idea, Prototype* - [bnjm](https://github.com/bnjm)
* **Martin Splitt** - *Code, Documentation* - [avgp](https://github.com/avgp)
See also the list of [contributors](https://github.com/archilogic-com/a-recorder/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [The A-Frame team](https://aframe.io/community/#a-frame-team) and community for building A-Frame and inspiring us to make 3D and VR on the web easier
