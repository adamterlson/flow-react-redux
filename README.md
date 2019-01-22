# flow-react-redux

My take on React Redux bindings for Flow.  *Very incomplete, this is just a proof of concept to get one started*.

See this [gist](https://gist.github.com/adamterlson/bd3a9a01821c70348c0abce8e92224a5) for example usage/test cases.

## Motivation
The latest flowtyped bindings removed the `Connector` type.  The prior version had some lack of safety on certain connect signatures (e.g. when using MapDispatchToProps).
