function serialize(obj) {
    return Buffer.from(JSON.stringify(obj)).toString('base64');
}

exports.bySemanticsLabel = function (label) {
    return serialize({
        finderType: "BySemanticsLabel",
        isRegExp: label instanceof RegExp ? true : false,
        label: label instanceof RegExp ? label.toString().slice(1, -1) : label,
    });
};

exports.byTooltip = function (text) {
    return serialize({
        finderType: "ByTooltipMessage",
        text: text,
    });
};

exports.byType = function (type) {
    return serialize({
        finderType: "ByType",
        type: type,
    });
};

exports.byValueKey = function (key) {
    return serialize({
        finderType: "ByValueKey",
        keyValueString: key,
        keyValueType: typeof key === "string" ? "String" : "int",
    });
};

exports.pageBack = function () {
    return serialize({
        finderType: "PageBack",
    });
};

exports.byText = function (text) {
    return serialize({
        finderType: "ByText",
        text: text,
    });
};

exports.ancestor = function (args) {
    var of = args.of, matching = args.matching, _a = args.matchRoot, matchRoot = _a === void 0 ? false : _a, _b = args.firstMatchOnly, firstMatchOnly = _b === void 0 ? false : _b;
    var a = {
        finderType: "Ancestor",
        firstMatchOnly: firstMatchOnly,
        matchRoot: matchRoot,
    };
    var ofParam = {};
    Object.entries(deserializer_1.deserialize(of)).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (ofParam[key] = value);
    });
    a["of"] = JSON.stringify(ofParam);
    var matchingPara = {};
    Object.entries(deserializer_1.deserialize(matching)).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (matchingPara[key] = value);
    });
    a["matching"] = JSON.stringify(matchingPara);
    return serialize(a);
};

exports.descendant = function (args) {
    var of = args.of, matching = args.matching, _a = args.matchRoot, matchRoot = _a === void 0 ? false : _a, _b = args.firstMatchOnly, firstMatchOnly = _b === void 0 ? false : _b;
    var a = {
        finderType: "Descendant",
        firstMatchOnly: firstMatchOnly,
        matchRoot: matchRoot,
    };
    var ofParam = {};
    Object.entries(deserializer_1.deserialize(of)).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (ofParam[key] = value);
    });
    a["of"] = JSON.stringify(ofParam);
    var matchingParam = {};
    Object.entries(deserializer_1.deserialize(matching)).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (matchingParam[key] = value);
    });
    a["matching"] = JSON.stringify(matchingParam);
    return serialize(a);
};