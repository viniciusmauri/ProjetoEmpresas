export default function(application) {
    application.get('/enterprise', function(req, res) {
        application.app.controllers.enterprise.add_enterprise(application, req, res);
    })

    application.get('/enterprise/')

}