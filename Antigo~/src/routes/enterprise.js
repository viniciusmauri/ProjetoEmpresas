export default function(application) {
    application.post('/enterprise', function(req, res) {
        application.app.controllers.enterprise.addEnterprise(application, req, res);
    });

    application.get('/enterprise/', function(req, res) {
        application.app.controllers.enterprise.getEnterprise(application, req, res);
    });

    application.get('/enterprise', function(req, res) {
        application.app.controllers.enterprise.getByName(application, req, res);
    });
}