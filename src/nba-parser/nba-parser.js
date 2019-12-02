// Generated automatically by nearley, version 2.19.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }


const ast = require('./nba-ast.js')
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "main", "symbols": ["PARALLEL"], "postprocess": id},
    {"name": "OPERATION", "symbols": ["VARIABLE"], "postprocess": id},
    {"name": "OPERATION", "symbols": ["CAPABILITY"], "postprocess": id},
    {"name": "OPERATION", "symbols": ["MESSAGE_OP"], "postprocess": id},
    {"name": "AMBIENT", "symbols": ["NAME", {"literal":"["}, "_", "PARALLEL", "_", {"literal":"]"}], "postprocess": ([name,,,parallel]) => ast.ambient(name, parallel)},
    {"name": "AMBIENT", "symbols": ["NAME", {"literal":"["}, "_", {"literal":"]"}], "postprocess": ([name]) => ast.ambient(name, [])},
    {"name": "CAPABILITY", "symbols": ["READS"], "postprocess": id},
    {"name": "CAPABILITY", "symbols": ["WRITES"], "postprocess": id},
    {"name": "CAPABILITY", "symbols": ["INS"], "postprocess": id},
    {"name": "CAPABILITY", "symbols": ["OUTS"], "postprocess": id},
    {"name": "READS$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "READS", "symbols": ["READS$string$1", "_", {"literal":"("}, "NAME", "_", {"literal":","}, "_", "NAMES", {"literal":")"}], "postprocess": ([,,,target,,,,names]) => ast.cap('read', target, names)},
    {"name": "READS$string$2", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"_"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "READS", "symbols": ["READS$string$2", "_", {"literal":"("}, "MESSAGES", {"literal":")"}], "postprocess": ([,,,messages]) => ast.cocap('read_', messages)},
    {"name": "READS$string$3", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"_"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "READS", "symbols": ["READS$string$3", "_", {"literal":"("}, "_", {"literal":")"}], "postprocess": ([]) => ast.cocap('read_', [])},
    {"name": "WRITES$string$1", "symbols": [{"literal":"w"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WRITES", "symbols": ["WRITES$string$1", "_", {"literal":"("}, "NAME", "_", {"literal":","}, "_", "MESSAGES", {"literal":")"}], "postprocess": ([,,,target,,,,messages]) => ast.cap('write', target, messages)},
    {"name": "WRITES$string$2", "symbols": [{"literal":"w"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"_"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WRITES", "symbols": ["WRITES$string$2", "_", {"literal":"("}, "NAMES", {"literal":")"}], "postprocess": ([,,,names]) => ast.cocap('write_', names)},
    {"name": "WRITES$string$3", "symbols": [{"literal":"w"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"_"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WRITES", "symbols": ["WRITES$string$3", "_", {"literal":"("}, "_", {"literal":")"}], "postprocess": ([]) => ast.cocap('write_', [])},
    {"name": "INS$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INS", "symbols": ["INS$string$1", "_", {"literal":"("}, "NAME", "_", {"literal":","}, "_", "NAME", {"literal":")"}], "postprocess": ([,,,name,,,,pw]) => ast.cap('in', name, pw)},
    {"name": "INS$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"_"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INS", "symbols": ["INS$string$2", "_", {"literal":"("}, "NAME", "_", {"literal":","}, "_", "NAME", {"literal":")"}], "postprocess": ([,,,name,,,,pw]) => ast.cocap('in_', [name, pw])},
    {"name": "OUTS$string$1", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OUTS", "symbols": ["OUTS$string$1", "_", {"literal":"("}, "NAME", "_", {"literal":","}, "_", "NAME", {"literal":")"}], "postprocess": ([,,,name,,,,pw]) => ast.cap('out', name, pw)},
    {"name": "OUTS$string$2", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"_"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OUTS", "symbols": ["OUTS$string$2", "_", {"literal":"("}, "NAME", "_", {"literal":","}, "_", "NAME", {"literal":")"}], "postprocess": ([,,,name,,,,pw]) => ast.cocap('out_', [name, pw])},
    {"name": "MESSAGE_OP", "symbols": [{"literal":":"}, "NAME"], "postprocess": ([,name]) => ast.subst(name)},
    {"name": "MESSAGE", "symbols": ["SEQUENTIAL"], "postprocess": id},
    {"name": "MESSAGE", "symbols": ["NAME"], "postprocess": id},
    {"name": "MESSAGES", "symbols": ["MESSAGES", "_", {"literal":","}, "_", "MESSAGE"], "postprocess": ([left,,,,right]) => ast.array(left, right)},
    {"name": "MESSAGES", "symbols": ["MESSAGE"], "postprocess": ([msg]) => ast.array([], msg)},
    {"name": "SEQUENTIAL", "symbols": ["OPERATION", "_", {"literal":"."}, "_", "SEQUENTIAL"], "postprocess": ([first,,,,rest]) => ast.list(first, rest)},
    {"name": "SEQUENTIAL", "symbols": ["OPERATION"], "postprocess": id},
    {"name": "SEQUENTIAL", "symbols": [{"literal":"("}, "_", "PARALLEL", "_", {"literal":")"}], "postprocess": ([,,first]) => ast.array([], first)},
    {"name": "SEQUENTIAL", "symbols": ["AMBIENT"], "postprocess": id},
    {"name": "PARALLEL", "symbols": ["PARALLEL", "_", {"literal":"|"}, "_", "SEQUENTIAL"], "postprocess": ([left,,,,right]) => ast.array(left, right)},
    {"name": "PARALLEL", "symbols": ["SEQUENTIAL"], "postprocess": ([seq]) => ast.array([], seq)},
    {"name": "NAMES", "symbols": ["NAMES", "_", {"literal":","}, "_", "NAME"], "postprocess": ([left,,,,right]) => ast.array(left, right)},
    {"name": "NAMES", "symbols": ["NAME"], "postprocess": ([name]) => ast.array([], name)},
    {"name": "NAME$ebnf$1", "symbols": [/[_a-z0-9_]/]},
    {"name": "NAME$ebnf$1", "symbols": ["NAME$ebnf$1", /[_a-z0-9_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "NAME", "symbols": ["NAME$ebnf$1"], "postprocess": ([name]) => name.join('')},
    {"name": "VARIABLE$ebnf$1", "symbols": [/[A-Z]/]},
    {"name": "VARIABLE$ebnf$1", "symbols": ["VARIABLE$ebnf$1", /[A-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "VARIABLE", "symbols": ["VARIABLE$ebnf$1"], "postprocess": ([variable]) => variable.join('')}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();