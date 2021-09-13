# The Urban Footprint Frontend Take Home Test

Thank you for your interest in pursuing a frontend development position with
Urban Footprint!

You will have 72 hours to complete upon receiving this exercise. Should you have any questions, please contact <bradley.bossard@urbanfootprint.com>

We expect that this exercise should take roughly two hours to complete. If you find it is taking significantly longer, please get in touch because there may have been some miscommunication or misunderstanding that we'd like to rectify!

If you fork our repo, please make sure to make it private so other candidates can't see your solution!

This take home test is designed to test some basic knowledge of Javascript and
React.  While it does incorporate use of a Mapbox component, prior knowledge of
Mapbox shouldn't be necessary in order to produce a solution.

This app was scaffolded using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) and uses a React wrapper for Mapbox called [react-mapbox-gl](https://visgl.github.io/react-map-gl/).

The initial state of the app is a fullscreen map with a series of map pins displayed on it, and a skeleton panel component in the upper right corner.



The goals of this exercise are as follows:

1.  Change the functionality of the first numeric input field such than it's value is used to define a bounding square (i.e. a bounding box with equal length sides).  The center of the square is the centroid of the latitude/longitude properties all the cities in cities list.  Use this bounding square to filter out cities outside of square, and only display cities that lie within the boundary.

2.  Change the functionality of the second text input field such that it's value can be used to filter out only cities whose `name` property contains the substring defined in
the text input.  This match should be case-insensitive.

A working implementation of the solution can be seen [here](https://calthorpeanalytics.github.io/uf-fe-takehome-solution/).  As the length of the sides are decreased, the size of the bounding square descreases and filters out cities.  As text is typed in the city name filter, first 'd' for Denver or Dallas, then 'de' for only
Denver.

## Getting Started

Since the app was scaffolded with CRA, the process for installing and running in development mode is the same

```
git clone <path-to-repo>
cd <repo-name>
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

Please submit your submission as a pull request and assign it to user `bradley-uf`. 
