/* eslint-disable */

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const enzymeToJson = require('enzyme-to-json');
const expect = require('expect');

// Set the default serializer for Jest to be the from enzyme-to-json
// This produces an easier to read (for humans) serialized format.
// expect.addSnapshotSerializer(enzymeToJson.createSerializer({ mode: 'deep' }));

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

/* eslint-enable */
