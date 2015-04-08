var jade = require('jade');

var Template = function () {
    var TemplateObject = {};
    
    TemplateObject.Render = function (path, data) {
        var _temp, _result;

        _temp = jade.compileFile(path, { locals: data });
        _result = _temp(data);

        return _result;
    };
    
    return TemplateObject;
};

module.exports = Template();