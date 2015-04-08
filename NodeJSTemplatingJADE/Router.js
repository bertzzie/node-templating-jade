var _routes = [];

var Router = function () {
    var RouterObject = {};

    RouterObject.add = function (method, pattern, handler) {
        _routes.push({ 'method': method, 'pattern': pattern, 'handler': handler });
        return this;
    };
    
    RouterObject.dispatch = function (method, url, request, response, view) {
        var len = _routes.length,
            i = 0, 
            match, rMeth;
        
        for (i = 0; i < len; i += 1) {
            match = url.match(_routes[i].pattern);
            rMeth = _routes[i].method === method;

            if (match && rMeth) {
                match.shift();
                _routes[i].handler.apply({}, [request, response, view].concat(match));
            }
        }
    };
    
    return RouterObject;
};

module.exports = Router();