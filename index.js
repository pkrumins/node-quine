var data = "module.exports = function () { console.log(\"var data = \\\"%s\\\"\\n%s\", data.replace(/\\\\/g, \"\\\\\\\\\").replace(/\"/g, \"\\\\\\\"\"), data.replace(/{/, \"{\\n   \").replace(/}$/, \"\\n}\")); }"
module.exports = function () {
    console.log("var data = \"%s\"\n%s", data.replace(/\\/g, "\\\\").replace(/"/g, "\\\""), data.replace(/{/, "{\n   ").replace(/}$/, "\n}"));
}
