import _ from 'lodash'

// Contrived example to demonstrate a dependecy shared between bundles
const message = _.compact(['lodash', '', 'is bundled with', '', 'global.js', '']).join(' ')
export default message