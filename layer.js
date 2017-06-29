var layer = {

  // Name of the layer (please do not change)
  'id': 'victoria',

  // Our layer is a collection of points, so we will draw them as circles.
  // (please do not change)
  'type': 'circle',

  // Data source (please do not change)
  'source': 'victoria-crashes',

  // Modify here:

  // We can style the map based on data properties. For instance, here we
  // change the colour, opacity, and size of the circles based on the number
  // of fatalities reported.

  // Circle reference: https://www.mapbox.com/mapbox-gl-js/style-spec/#paint_circle
  // Paint type reference: https://www.mapbox.com/mapbox-gl-js/style-spec/#function-type
  'paint': {
    'circle-color': {

      // Name of property to drive style from
      property: 'LIGHT_CONDITION',

      // Type of styling. Can be 'exponential', 'interval', or 'categorical'
      type: 'categorical',

      // Change colors based on values. 0 is blue, and 1 is red.
      // See http://www.colourlovers.com/palettes for some colour suggestions
      stops: [
        ['Dark Street lights on', '#4E89ED'],
        ['Dark Street lights off', '#FF5E7C'],
        ['Dark No street lights', '#FF5E7C'],
      ],

      default: '#4E89ED',

    // Properties are separated by commas
    },

    // All circle paint properties are defined similarly
    'circle-opacity': {
      property: 'LIGHT_CONDITION',
      type: 'categorical',
      stops: [
        ['Dark Street lights on', 0.25],
        ['Dark Street lights off', 0.75],
        ['Dark No street lights', 0.75],
      ],
      default: 0.25,
    },

    'circle-radius': {
      property: 'LIGHT_CONDITION',
      type: 'categorical',
      stops: [
        ['Dark Street lights on', 1.5],
        ['Dark Street lights off', 15],
        ['Dark No street lights', 15],
      ],
      default: 1.5,
    },

    // Properties can also just be a number or value
    'circle-stroke-width': 0.25,
    'circle-stroke-opacity': 0.2,
    'circle-stroke-color': '#000000',
  },
};