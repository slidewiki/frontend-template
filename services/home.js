export default {
    name: 'home',
    // At least one of the CRUD methods is Required
    read: (req, resource, params, config, callback) => {
        let args = params.params? params.params : params;
        if(resource === 'home.items'){
            /*********connect to microservices*************/
            //todo
            /*********received data from microservices*************/
            sampleContent =[];
            callback(null, {output: sampleContent});
        }
    }
    // other methods
    // create: (req, resource, params, body, config, callback) => {},
    // update: (req, resource, params, body, config, callback) => {}
    // delete: (req, resource, params, config, callback) => {}
};
