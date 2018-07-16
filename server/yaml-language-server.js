module.exports = function(e) {
 var t = {};
 function n(e) {
  return "" + ({
   0: "yaml-language-server"
  }[e] || e) + ".js";
 }
 function r(t) {
  var r = n(t);
  var i = require(__dirname + "/" + r);
  var s = i.modules, a = i.ids;
  for (var o in s) {
   e[o] = s[o];
  }
 }
 var i = [ [ "jVny" ] ];
 for (var s = 0; s < i.length; ++s) {
  var a = i[s];
  for (var o = 1; o < a.length; ++o) {
   var u = a[o];
   r(u);
  }
 }
 function c(n) {
  if (t[n]) {
   return t[n].exports;
  }
  var r = t[n] = {
   i: n,
   l: false,
   exports: {}
  };
  e[n].call(r.exports, r, r.exports, c);
  r.l = true;
  return r.exports;
 }
 c.m = e;
 c.c = t;
 c.d = function(e, t, n) {
  if (!c.o(e, t)) {
   Object.defineProperty(e, t, {
    enumerable: true,
    get: n
   });
  }
 };
 c.r = function(e) {
  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
   Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
   });
  }
  Object.defineProperty(e, "__esModule", {
   value: true
  });
 };
 c.t = function(e, t) {
  if (t & 1) e = c(e);
  if (t & 8) return e;
  if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
  var n = Object.create(null);
  c.r(n);
  Object.defineProperty(n, "default", {
   enumerable: true,
   value: e
  });
  if (t & 2 && typeof e != "string") for (var r in e) c.d(n, r, function(t) {
   return e[t];
  }.bind(null, r));
  return n;
 };
 c.n = function(e) {
  var t = e && e.__esModule ? function t() {
   return e["default"];
  } : function t() {
   return e;
  };
  c.d(t, "a", t);
  return t;
 };
 c.o = function(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
 };
 c.p = "";
 return c(c.s = "jVny");
}({
 "+LHy": function(e, t, n) {
  "use strict";
  var r = n("/XVN");
  var i = n("Pm2Y");
  function s(e) {
   return function() {
    throw new Error("Function " + e + " is deprecated and cannot be used.");
   };
  }
  e.exports.Type = n("gax4");
  e.exports.Schema = n("YU9W");
  e.exports.FAILSAFE_SCHEMA = n("hoi+");
  e.exports.JSON_SCHEMA = n("5Rb2");
  e.exports.CORE_SCHEMA = n("yXpz");
  e.exports.DEFAULT_SAFE_SCHEMA = n("+kP4");
  e.exports.DEFAULT_FULL_SCHEMA = n("wtHW");
  e.exports.load = r.load;
  e.exports.loadAll = r.loadAll;
  e.exports.safeLoad = r.safeLoad;
  e.exports.safeLoadAll = r.safeLoadAll;
  e.exports.dump = i.dump;
  e.exports.safeDump = i.safeDump;
  e.exports.YAMLException = n("wGX6");
  e.exports.MINIMAL_SCHEMA = n("hoi+");
  e.exports.SAFE_SCHEMA = n("+kP4");
  e.exports.DEFAULT_SCHEMA = n("wtHW");
  e.exports.scan = s("scan");
  e.exports.parse = s("parse");
  e.exports.compose = s("compose");
  e.exports.addConstructor = s("addConstructor");
 },
 "+U4B": function(e, t, n) {
  (function t(n, r) {
   if (true) e.exports = r(); else {}
  })(this, function() {
   return function(e) {
    var t = {};
    function n(r) {
     if (t[r]) return t[r].exports;
     var i = t[r] = {
      exports: {},
      id: r,
      loaded: false
     };
     e[r].call(i.exports, i, i.exports, n);
     i.loaded = true;
     return i.exports;
    }
    n.m = e;
    n.c = t;
    n.p = "";
    return n(0);
   }([ function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    var r = n(1);
    var i = n(3);
    var s = n(8);
    var a = n(15);
    function o(e, t, n) {
     var a = null;
     var o = function(e, t) {
      if (n) {
       n(e, t);
      }
      if (a) {
       a.visit(e, t);
      }
     };
     var u = typeof n === "function" ? o : null;
     var c = false;
     if (t) {
      c = typeof t.comment === "boolean" && t.comment;
      var l = typeof t.attachComment === "boolean" && t.attachComment;
      if (c || l) {
       a = new r.CommentHandler();
       a.attach = l;
       t.comment = true;
       u = o;
      }
     }
     var h = false;
     if (t && typeof t.sourceType === "string") {
      h = t.sourceType === "module";
     }
     var f;
     if (t && typeof t.jsx === "boolean" && t.jsx) {
      f = new i.JSXParser(e, t, u);
     } else {
      f = new s.Parser(e, t, u);
     }
     var p = h ? f.parseModule() : f.parseScript();
     var d = p;
     if (c && a) {
      d.comments = a.comments;
     }
     if (f.config.tokens) {
      d.tokens = f.tokens;
     }
     if (f.config.tolerant) {
      d.errors = f.errorHandler.errors;
     }
     return d;
    }
    t.parse = o;
    function u(e, t, n) {
     var r = t || {};
     r.sourceType = "module";
     return o(e, r, n);
    }
    t.parseModule = u;
    function c(e, t, n) {
     var r = t || {};
     r.sourceType = "script";
     return o(e, r, n);
    }
    t.parseScript = c;
    function l(e, t, n) {
     var r = new a.Tokenizer(e, t);
     var i;
     i = [];
     try {
      while (true) {
       var s = r.getNextToken();
       if (!s) {
        break;
       }
       if (n) {
        s = n(s);
       }
       i.push(s);
      }
     } catch (e) {
      r.errorHandler.tolerate(e);
     }
     if (r.errorHandler.tolerant) {
      i.errors = r.errors();
     }
     return i;
    }
    t.tokenize = l;
    var h = n(2);
    t.Syntax = h.Syntax;
    t.version = "4.0.0";
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    var r = n(2);
    var i = function() {
     function e() {
      this.attach = false;
      this.comments = [];
      this.stack = [];
      this.leading = [];
      this.trailing = [];
     }
     e.prototype.insertInnerComments = function(e, t) {
      if (e.type === r.Syntax.BlockStatement && e.body.length === 0) {
       var n = [];
       for (var i = this.leading.length - 1; i >= 0; --i) {
        var s = this.leading[i];
        if (t.end.offset >= s.start) {
         n.unshift(s.comment);
         this.leading.splice(i, 1);
         this.trailing.splice(i, 1);
        }
       }
       if (n.length) {
        e.innerComments = n;
       }
      }
     };
     e.prototype.findTrailingComments = function(e) {
      var t = [];
      if (this.trailing.length > 0) {
       for (var n = this.trailing.length - 1; n >= 0; --n) {
        var r = this.trailing[n];
        if (r.start >= e.end.offset) {
         t.unshift(r.comment);
        }
       }
       this.trailing.length = 0;
       return t;
      }
      var i = this.stack[this.stack.length - 1];
      if (i && i.node.trailingComments) {
       var s = i.node.trailingComments[0];
       if (s && s.range[0] >= e.end.offset) {
        t = i.node.trailingComments;
        delete i.node.trailingComments;
       }
      }
      return t;
     };
     e.prototype.findLeadingComments = function(e) {
      var t = [];
      var n;
      while (this.stack.length > 0) {
       var r = this.stack[this.stack.length - 1];
       if (r && r.start >= e.start.offset) {
        n = r.node;
        this.stack.pop();
       } else {
        break;
       }
      }
      if (n) {
       var i = n.leadingComments ? n.leadingComments.length : 0;
       for (var s = i - 1; s >= 0; --s) {
        var a = n.leadingComments[s];
        if (a.range[1] <= e.start.offset) {
         t.unshift(a);
         n.leadingComments.splice(s, 1);
        }
       }
       if (n.leadingComments && n.leadingComments.length === 0) {
        delete n.leadingComments;
       }
       return t;
      }
      for (var s = this.leading.length - 1; s >= 0; --s) {
       var r = this.leading[s];
       if (r.start <= e.start.offset) {
        t.unshift(r.comment);
        this.leading.splice(s, 1);
       }
      }
      return t;
     };
     e.prototype.visitNode = function(e, t) {
      if (e.type === r.Syntax.Program && e.body.length > 0) {
       return;
      }
      this.insertInnerComments(e, t);
      var n = this.findTrailingComments(t);
      var i = this.findLeadingComments(t);
      if (i.length > 0) {
       e.leadingComments = i;
      }
      if (n.length > 0) {
       e.trailingComments = n;
      }
      this.stack.push({
       node: e,
       start: t.start.offset
      });
     };
     e.prototype.visitComment = function(e, t) {
      var n = e.type[0] === "L" ? "Line" : "Block";
      var r = {
       type: n,
       value: e.value
      };
      if (e.range) {
       r.range = e.range;
      }
      if (e.loc) {
       r.loc = e.loc;
      }
      this.comments.push(r);
      if (this.attach) {
       var i = {
        comment: {
         type: n,
         value: e.value,
         range: [ t.start.offset, t.end.offset ]
        },
        start: t.start.offset
       };
       if (e.loc) {
        i.comment.loc = e.loc;
       }
       e.type = n;
       this.leading.push(i);
       this.trailing.push(i);
      }
     };
     e.prototype.visit = function(e, t) {
      if (e.type === "LineComment") {
       this.visitComment(e, t);
      } else if (e.type === "BlockComment") {
       this.visitComment(e, t);
      } else if (this.attach) {
       this.visitNode(e, t);
      }
     };
     return e;
    }();
    t.CommentHandler = i;
   }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    t.Syntax = {
     AssignmentExpression: "AssignmentExpression",
     AssignmentPattern: "AssignmentPattern",
     ArrayExpression: "ArrayExpression",
     ArrayPattern: "ArrayPattern",
     ArrowFunctionExpression: "ArrowFunctionExpression",
     AwaitExpression: "AwaitExpression",
     BlockStatement: "BlockStatement",
     BinaryExpression: "BinaryExpression",
     BreakStatement: "BreakStatement",
     CallExpression: "CallExpression",
     CatchClause: "CatchClause",
     ClassBody: "ClassBody",
     ClassDeclaration: "ClassDeclaration",
     ClassExpression: "ClassExpression",
     ConditionalExpression: "ConditionalExpression",
     ContinueStatement: "ContinueStatement",
     DoWhileStatement: "DoWhileStatement",
     DebuggerStatement: "DebuggerStatement",
     EmptyStatement: "EmptyStatement",
     ExportAllDeclaration: "ExportAllDeclaration",
     ExportDefaultDeclaration: "ExportDefaultDeclaration",
     ExportNamedDeclaration: "ExportNamedDeclaration",
     ExportSpecifier: "ExportSpecifier",
     ExpressionStatement: "ExpressionStatement",
     ForStatement: "ForStatement",
     ForOfStatement: "ForOfStatement",
     ForInStatement: "ForInStatement",
     FunctionDeclaration: "FunctionDeclaration",
     FunctionExpression: "FunctionExpression",
     Identifier: "Identifier",
     IfStatement: "IfStatement",
     ImportDeclaration: "ImportDeclaration",
     ImportDefaultSpecifier: "ImportDefaultSpecifier",
     ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
     ImportSpecifier: "ImportSpecifier",
     Literal: "Literal",
     LabeledStatement: "LabeledStatement",
     LogicalExpression: "LogicalExpression",
     MemberExpression: "MemberExpression",
     MetaProperty: "MetaProperty",
     MethodDefinition: "MethodDefinition",
     NewExpression: "NewExpression",
     ObjectExpression: "ObjectExpression",
     ObjectPattern: "ObjectPattern",
     Program: "Program",
     Property: "Property",
     RestElement: "RestElement",
     ReturnStatement: "ReturnStatement",
     SequenceExpression: "SequenceExpression",
     SpreadElement: "SpreadElement",
     Super: "Super",
     SwitchCase: "SwitchCase",
     SwitchStatement: "SwitchStatement",
     TaggedTemplateExpression: "TaggedTemplateExpression",
     TemplateElement: "TemplateElement",
     TemplateLiteral: "TemplateLiteral",
     ThisExpression: "ThisExpression",
     ThrowStatement: "ThrowStatement",
     TryStatement: "TryStatement",
     UnaryExpression: "UnaryExpression",
     UpdateExpression: "UpdateExpression",
     VariableDeclaration: "VariableDeclaration",
     VariableDeclarator: "VariableDeclarator",
     WhileStatement: "WhileStatement",
     WithStatement: "WithStatement",
     YieldExpression: "YieldExpression"
    };
   }, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
     var e = Object.setPrototypeOf || {
      __proto__: []
     } instanceof Array && function(e, t) {
      e.__proto__ = t;
     } || function(e, t) {
      for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
     };
     return function(t, n) {
      e(t, n);
      function r() {
       this.constructor = t;
      }
      t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
     };
    }();
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    var i = n(4);
    var s = n(5);
    var a = n(6);
    var o = n(7);
    var u = n(8);
    var c = n(13);
    var l = n(14);
    c.TokenName[100] = "JSXIdentifier";
    c.TokenName[101] = "JSXText";
    function h(e) {
     var t;
     switch (e.type) {
     case a.JSXSyntax.JSXIdentifier:
      var n = e;
      t = n.name;
      break;

     case a.JSXSyntax.JSXNamespacedName:
      var r = e;
      t = h(r.namespace) + ":" + h(r.name);
      break;

     case a.JSXSyntax.JSXMemberExpression:
      var i = e;
      t = h(i.object) + "." + h(i.property);
      break;

     default:
      break;
     }
     return t;
    }
    var f = function(e) {
     r(t, e);
     function t(t, n, r) {
      return e.call(this, t, n, r) || this;
     }
     t.prototype.parsePrimaryExpression = function() {
      return this.match("<") ? this.parseJSXRoot() : e.prototype.parsePrimaryExpression.call(this);
     };
     t.prototype.startJSX = function() {
      this.scanner.index = this.startMarker.index;
      this.scanner.lineNumber = this.startMarker.line;
      this.scanner.lineStart = this.startMarker.index - this.startMarker.column;
     };
     t.prototype.finishJSX = function() {
      this.nextToken();
     };
     t.prototype.reenterJSX = function() {
      this.startJSX();
      this.expectJSX("}");
      if (this.config.tokens) {
       this.tokens.pop();
      }
     };
     t.prototype.createJSXNode = function() {
      this.collectComments();
      return {
       index: this.scanner.index,
       line: this.scanner.lineNumber,
       column: this.scanner.index - this.scanner.lineStart
      };
     };
     t.prototype.createJSXChildNode = function() {
      return {
       index: this.scanner.index,
       line: this.scanner.lineNumber,
       column: this.scanner.index - this.scanner.lineStart
      };
     };
     t.prototype.scanXHTMLEntity = function(e) {
      var t = "&";
      var n = true;
      var r = false;
      var s = false;
      var a = false;
      while (!this.scanner.eof() && n && !r) {
       var o = this.scanner.source[this.scanner.index];
       if (o === e) {
        break;
       }
       r = o === ";";
       t += o;
       ++this.scanner.index;
       if (!r) {
        switch (t.length) {
        case 2:
         s = o === "#";
         break;

        case 3:
         if (s) {
          a = o === "x";
          n = a || i.Character.isDecimalDigit(o.charCodeAt(0));
          s = s && !a;
         }
         break;

        default:
         n = n && !(s && !i.Character.isDecimalDigit(o.charCodeAt(0)));
         n = n && !(a && !i.Character.isHexDigit(o.charCodeAt(0)));
         break;
        }
       }
      }
      if (n && r && t.length > 2) {
       var u = t.substr(1, t.length - 2);
       if (s && u.length > 1) {
        t = String.fromCharCode(parseInt(u.substr(1), 10));
       } else if (a && u.length > 2) {
        t = String.fromCharCode(parseInt("0" + u.substr(1), 16));
       } else if (!s && !a && l.XHTMLEntities[u]) {
        t = l.XHTMLEntities[u];
       }
      }
      return t;
     };
     t.prototype.lexJSX = function() {
      var e = this.scanner.source.charCodeAt(this.scanner.index);
      if (e === 60 || e === 62 || e === 47 || e === 58 || e === 61 || e === 123 || e === 125) {
       var t = this.scanner.source[this.scanner.index++];
       return {
        type: 7,
        value: t,
        lineNumber: this.scanner.lineNumber,
        lineStart: this.scanner.lineStart,
        start: this.scanner.index - 1,
        end: this.scanner.index
       };
      }
      if (e === 34 || e === 39) {
       var n = this.scanner.index;
       var r = this.scanner.source[this.scanner.index++];
       var s = "";
       while (!this.scanner.eof()) {
        var a = this.scanner.source[this.scanner.index++];
        if (a === r) {
         break;
        } else if (a === "&") {
         s += this.scanXHTMLEntity(r);
        } else {
         s += a;
        }
       }
       return {
        type: 8,
        value: s,
        lineNumber: this.scanner.lineNumber,
        lineStart: this.scanner.lineStart,
        start: n,
        end: this.scanner.index
       };
      }
      if (e === 46) {
       var o = this.scanner.source.charCodeAt(this.scanner.index + 1);
       var u = this.scanner.source.charCodeAt(this.scanner.index + 2);
       var t = o === 46 && u === 46 ? "..." : ".";
       var n = this.scanner.index;
       this.scanner.index += t.length;
       return {
        type: 7,
        value: t,
        lineNumber: this.scanner.lineNumber,
        lineStart: this.scanner.lineStart,
        start: n,
        end: this.scanner.index
       };
      }
      if (e === 96) {
       return {
        type: 10,
        value: "",
        lineNumber: this.scanner.lineNumber,
        lineStart: this.scanner.lineStart,
        start: this.scanner.index,
        end: this.scanner.index
       };
      }
      if (i.Character.isIdentifierStart(e) && e !== 92) {
       var n = this.scanner.index;
       ++this.scanner.index;
       while (!this.scanner.eof()) {
        var a = this.scanner.source.charCodeAt(this.scanner.index);
        if (i.Character.isIdentifierPart(a) && a !== 92) {
         ++this.scanner.index;
        } else if (a === 45) {
         ++this.scanner.index;
        } else {
         break;
        }
       }
       var c = this.scanner.source.slice(n, this.scanner.index);
       return {
        type: 100,
        value: c,
        lineNumber: this.scanner.lineNumber,
        lineStart: this.scanner.lineStart,
        start: n,
        end: this.scanner.index
       };
      }
      return this.scanner.lex();
     };
     t.prototype.nextJSXToken = function() {
      this.collectComments();
      this.startMarker.index = this.scanner.index;
      this.startMarker.line = this.scanner.lineNumber;
      this.startMarker.column = this.scanner.index - this.scanner.lineStart;
      var e = this.lexJSX();
      this.lastMarker.index = this.scanner.index;
      this.lastMarker.line = this.scanner.lineNumber;
      this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
      if (this.config.tokens) {
       this.tokens.push(this.convertToken(e));
      }
      return e;
     };
     t.prototype.nextJSXText = function() {
      this.startMarker.index = this.scanner.index;
      this.startMarker.line = this.scanner.lineNumber;
      this.startMarker.column = this.scanner.index - this.scanner.lineStart;
      var e = this.scanner.index;
      var t = "";
      while (!this.scanner.eof()) {
       var n = this.scanner.source[this.scanner.index];
       if (n === "{" || n === "<") {
        break;
       }
       ++this.scanner.index;
       t += n;
       if (i.Character.isLineTerminator(n.charCodeAt(0))) {
        ++this.scanner.lineNumber;
        if (n === "\r" && this.scanner.source[this.scanner.index] === "\n") {
         ++this.scanner.index;
        }
        this.scanner.lineStart = this.scanner.index;
       }
      }
      this.lastMarker.index = this.scanner.index;
      this.lastMarker.line = this.scanner.lineNumber;
      this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
      var r = {
       type: 101,
       value: t,
       lineNumber: this.scanner.lineNumber,
       lineStart: this.scanner.lineStart,
       start: e,
       end: this.scanner.index
      };
      if (t.length > 0 && this.config.tokens) {
       this.tokens.push(this.convertToken(r));
      }
      return r;
     };
     t.prototype.peekJSXToken = function() {
      var e = this.scanner.saveState();
      this.scanner.scanComments();
      var t = this.lexJSX();
      this.scanner.restoreState(e);
      return t;
     };
     t.prototype.expectJSX = function(e) {
      var t = this.nextJSXToken();
      if (t.type !== 7 || t.value !== e) {
       this.throwUnexpectedToken(t);
      }
     };
     t.prototype.matchJSX = function(e) {
      var t = this.peekJSXToken();
      return t.type === 7 && t.value === e;
     };
     t.prototype.parseJSXIdentifier = function() {
      var e = this.createJSXNode();
      var t = this.nextJSXToken();
      if (t.type !== 100) {
       this.throwUnexpectedToken(t);
      }
      return this.finalize(e, new s.JSXIdentifier(t.value));
     };
     t.prototype.parseJSXElementName = function() {
      var e = this.createJSXNode();
      var t = this.parseJSXIdentifier();
      if (this.matchJSX(":")) {
       var n = t;
       this.expectJSX(":");
       var r = this.parseJSXIdentifier();
       t = this.finalize(e, new s.JSXNamespacedName(n, r));
      } else if (this.matchJSX(".")) {
       while (this.matchJSX(".")) {
        var i = t;
        this.expectJSX(".");
        var a = this.parseJSXIdentifier();
        t = this.finalize(e, new s.JSXMemberExpression(i, a));
       }
      }
      return t;
     };
     t.prototype.parseJSXAttributeName = function() {
      var e = this.createJSXNode();
      var t;
      var n = this.parseJSXIdentifier();
      if (this.matchJSX(":")) {
       var r = n;
       this.expectJSX(":");
       var i = this.parseJSXIdentifier();
       t = this.finalize(e, new s.JSXNamespacedName(r, i));
      } else {
       t = n;
      }
      return t;
     };
     t.prototype.parseJSXStringLiteralAttribute = function() {
      var e = this.createJSXNode();
      var t = this.nextJSXToken();
      if (t.type !== 8) {
       this.throwUnexpectedToken(t);
      }
      var n = this.getTokenRaw(t);
      return this.finalize(e, new o.Literal(t.value, n));
     };
     t.prototype.parseJSXExpressionAttribute = function() {
      var e = this.createJSXNode();
      this.expectJSX("{");
      this.finishJSX();
      if (this.match("}")) {
       this.tolerateError("JSX attributes must only be assigned a non-empty expression");
      }
      var t = this.parseAssignmentExpression();
      this.reenterJSX();
      return this.finalize(e, new s.JSXExpressionContainer(t));
     };
     t.prototype.parseJSXAttributeValue = function() {
      return this.matchJSX("{") ? this.parseJSXExpressionAttribute() : this.matchJSX("<") ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
     };
     t.prototype.parseJSXNameValueAttribute = function() {
      var e = this.createJSXNode();
      var t = this.parseJSXAttributeName();
      var n = null;
      if (this.matchJSX("=")) {
       this.expectJSX("=");
       n = this.parseJSXAttributeValue();
      }
      return this.finalize(e, new s.JSXAttribute(t, n));
     };
     t.prototype.parseJSXSpreadAttribute = function() {
      var e = this.createJSXNode();
      this.expectJSX("{");
      this.expectJSX("...");
      this.finishJSX();
      var t = this.parseAssignmentExpression();
      this.reenterJSX();
      return this.finalize(e, new s.JSXSpreadAttribute(t));
     };
     t.prototype.parseJSXAttributes = function() {
      var e = [];
      while (!this.matchJSX("/") && !this.matchJSX(">")) {
       var t = this.matchJSX("{") ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
       e.push(t);
      }
      return e;
     };
     t.prototype.parseJSXOpeningElement = function() {
      var e = this.createJSXNode();
      this.expectJSX("<");
      var t = this.parseJSXElementName();
      var n = this.parseJSXAttributes();
      var r = this.matchJSX("/");
      if (r) {
       this.expectJSX("/");
      }
      this.expectJSX(">");
      return this.finalize(e, new s.JSXOpeningElement(t, r, n));
     };
     t.prototype.parseJSXBoundaryElement = function() {
      var e = this.createJSXNode();
      this.expectJSX("<");
      if (this.matchJSX("/")) {
       this.expectJSX("/");
       var t = this.parseJSXElementName();
       this.expectJSX(">");
       return this.finalize(e, new s.JSXClosingElement(t));
      }
      var n = this.parseJSXElementName();
      var r = this.parseJSXAttributes();
      var i = this.matchJSX("/");
      if (i) {
       this.expectJSX("/");
      }
      this.expectJSX(">");
      return this.finalize(e, new s.JSXOpeningElement(n, i, r));
     };
     t.prototype.parseJSXEmptyExpression = function() {
      var e = this.createJSXChildNode();
      this.collectComments();
      this.lastMarker.index = this.scanner.index;
      this.lastMarker.line = this.scanner.lineNumber;
      this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
      return this.finalize(e, new s.JSXEmptyExpression());
     };
     t.prototype.parseJSXExpressionContainer = function() {
      var e = this.createJSXNode();
      this.expectJSX("{");
      var t;
      if (this.matchJSX("}")) {
       t = this.parseJSXEmptyExpression();
       this.expectJSX("}");
      } else {
       this.finishJSX();
       t = this.parseAssignmentExpression();
       this.reenterJSX();
      }
      return this.finalize(e, new s.JSXExpressionContainer(t));
     };
     t.prototype.parseJSXChildren = function() {
      var e = [];
      while (!this.scanner.eof()) {
       var t = this.createJSXChildNode();
       var n = this.nextJSXText();
       if (n.start < n.end) {
        var r = this.getTokenRaw(n);
        var i = this.finalize(t, new s.JSXText(n.value, r));
        e.push(i);
       }
       if (this.scanner.source[this.scanner.index] === "{") {
        var a = this.parseJSXExpressionContainer();
        e.push(a);
       } else {
        break;
       }
      }
      return e;
     };
     t.prototype.parseComplexJSXElement = function(e) {
      var t = [];
      while (!this.scanner.eof()) {
       e.children = e.children.concat(this.parseJSXChildren());
       var n = this.createJSXChildNode();
       var r = this.parseJSXBoundaryElement();
       if (r.type === a.JSXSyntax.JSXOpeningElement) {
        var i = r;
        if (i.selfClosing) {
         var o = this.finalize(n, new s.JSXElement(i, [], null));
         e.children.push(o);
        } else {
         t.push(e);
         e = {
          node: n,
          opening: i,
          closing: null,
          children: []
         };
        }
       }
       if (r.type === a.JSXSyntax.JSXClosingElement) {
        e.closing = r;
        var u = h(e.opening.name);
        var c = h(e.closing.name);
        if (u !== c) {
         this.tolerateError("Expected corresponding JSX closing tag for %0", u);
        }
        if (t.length > 0) {
         var o = this.finalize(e.node, new s.JSXElement(e.opening, e.children, e.closing));
         e = t[t.length - 1];
         e.children.push(o);
         t.pop();
        } else {
         break;
        }
       }
      }
      return e;
     };
     t.prototype.parseJSXElement = function() {
      var e = this.createJSXNode();
      var t = this.parseJSXOpeningElement();
      var n = [];
      var r = null;
      if (!t.selfClosing) {
       var i = this.parseComplexJSXElement({
        node: e,
        opening: t,
        closing: r,
        children: n
       });
       n = i.children;
       r = i.closing;
      }
      return this.finalize(e, new s.JSXElement(t, n, r));
     };
     t.prototype.parseJSXRoot = function() {
      if (this.config.tokens) {
       this.tokens.pop();
      }
      this.startJSX();
      var e = this.parseJSXElement();
      this.finishJSX();
      return e;
     };
     t.prototype.isStartOfExpression = function() {
      return e.prototype.isStartOfExpression.call(this) || this.match("<");
     };
     return t;
    }(u.Parser);
    t.JSXParser = f;
   }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    var n = {
     NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
     NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
    };
    t.Character = {
     fromCodePoint: function(e) {
      return e < 65536 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10)) + String.fromCharCode(56320 + (e - 65536 & 1023));
     },
     isWhiteSpace: function(e) {
      return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e >= 5760 && [ 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279 ].indexOf(e) >= 0;
     },
     isLineTerminator: function(e) {
      return e === 10 || e === 13 || e === 8232 || e === 8233;
     },
     isIdentifierStart: function(e) {
      return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 92 || e >= 128 && n.NonAsciiIdentifierStart.test(t.Character.fromCodePoint(e));
     },
     isIdentifierPart: function(e) {
      return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 92 || e >= 128 && n.NonAsciiIdentifierPart.test(t.Character.fromCodePoint(e));
     },
     isDecimalDigit: function(e) {
      return e >= 48 && e <= 57;
     },
     isHexDigit: function(e) {
      return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
     },
     isOctalDigit: function(e) {
      return e >= 48 && e <= 55;
     }
    };
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    var r = n(6);
    var i = function() {
     function e(e) {
      this.type = r.JSXSyntax.JSXClosingElement;
      this.name = e;
     }
     return e;
    }();
    t.JSXClosingElement = i;
    var s = function() {
     function e(e, t, n) {
      this.type = r.JSXSyntax.JSXElement;
      this.openingElement = e;
      this.children = t;
      this.closingElement = n;
     }
     return e;
    }();
    t.JSXElement = s;
    var a = function() {
     function e() {
      this.type = r.JSXSyntax.JSXEmptyExpression;
     }
     return e;
    }();
    t.JSXEmptyExpression = a;
    var o = function() {
     function e(e) {
      this.type = r.JSXSyntax.JSXExpressionContainer;
      this.expression = e;
     }
     return e;
    }();
    t.JSXExpressionContainer = o;
    var u = function() {
     function e(e) {
      this.type = r.JSXSyntax.JSXIdentifier;
      this.name = e;
     }
     return e;
    }();
    t.JSXIdentifier = u;
    var c = function() {
     function e(e, t) {
      this.type = r.JSXSyntax.JSXMemberExpression;
      this.object = e;
      this.property = t;
     }
     return e;
    }();
    t.JSXMemberExpression = c;
    var l = function() {
     function e(e, t) {
      this.type = r.JSXSyntax.JSXAttribute;
      this.name = e;
      this.value = t;
     }
     return e;
    }();
    t.JSXAttribute = l;
    var h = function() {
     function e(e, t) {
      this.type = r.JSXSyntax.JSXNamespacedName;
      this.namespace = e;
      this.name = t;
     }
     return e;
    }();
    t.JSXNamespacedName = h;
    var f = function() {
     function e(e, t, n) {
      this.type = r.JSXSyntax.JSXOpeningElement;
      this.name = e;
      this.selfClosing = t;
      this.attributes = n;
     }
     return e;
    }();
    t.JSXOpeningElement = f;
    var p = function() {
     function e(e) {
      this.type = r.JSXSyntax.JSXSpreadAttribute;
      this.argument = e;
     }
     return e;
    }();
    t.JSXSpreadAttribute = p;
    var d = function() {
     function e(e, t) {
      this.type = r.JSXSyntax.JSXText;
      this.value = e;
      this.raw = t;
     }
     return e;
    }();
    t.JSXText = d;
   }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    t.JSXSyntax = {
     JSXAttribute: "JSXAttribute",
     JSXClosingElement: "JSXClosingElement",
     JSXElement: "JSXElement",
     JSXEmptyExpression: "JSXEmptyExpression",
     JSXExpressionContainer: "JSXExpressionContainer",
     JSXIdentifier: "JSXIdentifier",
     JSXMemberExpression: "JSXMemberExpression",
     JSXNamespacedName: "JSXNamespacedName",
     JSXOpeningElement: "JSXOpeningElement",
     JSXSpreadAttribute: "JSXSpreadAttribute",
     JSXText: "JSXText"
    };
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    var r = n(2);
    var i = function() {
     function e(e) {
      this.type = r.Syntax.ArrayExpression;
      this.elements = e;
     }
     return e;
    }();
    t.ArrayExpression = i;
    var s = function() {
     function e(e) {
      this.type = r.Syntax.ArrayPattern;
      this.elements = e;
     }
     return e;
    }();
    t.ArrayPattern = s;
    var a = function() {
     function e(e, t, n) {
      this.type = r.Syntax.ArrowFunctionExpression;
      this.id = null;
      this.params = e;
      this.body = t;
      this.generator = false;
      this.expression = n;
      this.async = false;
     }
     return e;
    }();
    t.ArrowFunctionExpression = a;
    var o = function() {
     function e(e, t, n) {
      this.type = r.Syntax.AssignmentExpression;
      this.operator = e;
      this.left = t;
      this.right = n;
     }
     return e;
    }();
    t.AssignmentExpression = o;
    var u = function() {
     function e(e, t) {
      this.type = r.Syntax.AssignmentPattern;
      this.left = e;
      this.right = t;
     }
     return e;
    }();
    t.AssignmentPattern = u;
    var c = function() {
     function e(e, t, n) {
      this.type = r.Syntax.ArrowFunctionExpression;
      this.id = null;
      this.params = e;
      this.body = t;
      this.generator = false;
      this.expression = n;
      this.async = true;
     }
     return e;
    }();
    t.AsyncArrowFunctionExpression = c;
    var l = function() {
     function e(e, t, n) {
      this.type = r.Syntax.FunctionDeclaration;
      this.id = e;
      this.params = t;
      this.body = n;
      this.generator = false;
      this.expression = false;
      this.async = true;
     }
     return e;
    }();
    t.AsyncFunctionDeclaration = l;
    var h = function() {
     function e(e, t, n) {
      this.type = r.Syntax.FunctionExpression;
      this.id = e;
      this.params = t;
      this.body = n;
      this.generator = false;
      this.expression = false;
      this.async = true;
     }
     return e;
    }();
    t.AsyncFunctionExpression = h;
    var f = function() {
     function e(e) {
      this.type = r.Syntax.AwaitExpression;
      this.argument = e;
     }
     return e;
    }();
    t.AwaitExpression = f;
    var p = function() {
     function e(e, t, n) {
      var i = e === "||" || e === "&&";
      this.type = i ? r.Syntax.LogicalExpression : r.Syntax.BinaryExpression;
      this.operator = e;
      this.left = t;
      this.right = n;
     }
     return e;
    }();
    t.BinaryExpression = p;
    var d = function() {
     function e(e) {
      this.type = r.Syntax.BlockStatement;
      this.body = e;
     }
     return e;
    }();
    t.BlockStatement = d;
    var m = function() {
     function e(e) {
      this.type = r.Syntax.BreakStatement;
      this.label = e;
     }
     return e;
    }();
    t.BreakStatement = m;
    var v = function() {
     function e(e, t) {
      this.type = r.Syntax.CallExpression;
      this.callee = e;
      this.arguments = t;
     }
     return e;
    }();
    t.CallExpression = v;
    var g = function() {
     function e(e, t) {
      this.type = r.Syntax.CatchClause;
      this.param = e;
      this.body = t;
     }
     return e;
    }();
    t.CatchClause = g;
    var y = function() {
     function e(e) {
      this.type = r.Syntax.ClassBody;
      this.body = e;
     }
     return e;
    }();
    t.ClassBody = y;
    var x = function() {
     function e(e, t, n) {
      this.type = r.Syntax.ClassDeclaration;
      this.id = e;
      this.superClass = t;
      this.body = n;
     }
     return e;
    }();
    t.ClassDeclaration = x;
    var C = function() {
     function e(e, t, n) {
      this.type = r.Syntax.ClassExpression;
      this.id = e;
      this.superClass = t;
      this.body = n;
     }
     return e;
    }();
    t.ClassExpression = C;
    var D = function() {
     function e(e, t) {
      this.type = r.Syntax.MemberExpression;
      this.computed = true;
      this.object = e;
      this.property = t;
     }
     return e;
    }();
    t.ComputedMemberExpression = D;
    var E = function() {
     function e(e, t, n) {
      this.type = r.Syntax.ConditionalExpression;
      this.test = e;
      this.consequent = t;
      this.alternate = n;
     }
     return e;
    }();
    t.ConditionalExpression = E;
    var b = function() {
     function e(e) {
      this.type = r.Syntax.ContinueStatement;
      this.label = e;
     }
     return e;
    }();
    t.ContinueStatement = b;
    var w = function() {
     function e() {
      this.type = r.Syntax.DebuggerStatement;
     }
     return e;
    }();
    t.DebuggerStatement = w;
    var S = function() {
     function e(e, t) {
      this.type = r.Syntax.ExpressionStatement;
      this.expression = e;
      this.directive = t;
     }
     return e;
    }();
    t.Directive = S;
    var A = function() {
     function e(e, t) {
      this.type = r.Syntax.DoWhileStatement;
      this.body = e;
      this.test = t;
     }
     return e;
    }();
    t.DoWhileStatement = A;
    var k = function() {
     function e() {
      this.type = r.Syntax.EmptyStatement;
     }
     return e;
    }();
    t.EmptyStatement = k;
    var F = function() {
     function e(e) {
      this.type = r.Syntax.ExportAllDeclaration;
      this.source = e;
     }
     return e;
    }();
    t.ExportAllDeclaration = F;
    var T = function() {
     function e(e) {
      this.type = r.Syntax.ExportDefaultDeclaration;
      this.declaration = e;
     }
     return e;
    }();
    t.ExportDefaultDeclaration = T;
    var _ = function() {
     function e(e, t, n) {
      this.type = r.Syntax.ExportNamedDeclaration;
      this.declaration = e;
      this.specifiers = t;
      this.source = n;
     }
     return e;
    }();
    t.ExportNamedDeclaration = _;
    var N = function() {
     function e(e, t) {
      this.type = r.Syntax.ExportSpecifier;
      this.exported = t;
      this.local = e;
     }
     return e;
    }();
    t.ExportSpecifier = N;
    var O = function() {
     function e(e) {
      this.type = r.Syntax.ExpressionStatement;
      this.expression = e;
     }
     return e;
    }();
    t.ExpressionStatement = O;
    var P = function() {
     function e(e, t, n) {
      this.type = r.Syntax.ForInStatement;
      this.left = e;
      this.right = t;
      this.body = n;
      this.each = false;
     }
     return e;
    }();
    t.ForInStatement = P;
    var I = function() {
     function e(e, t, n) {
      this.type = r.Syntax.ForOfStatement;
      this.left = e;
      this.right = t;
      this.body = n;
     }
     return e;
    }();
    t.ForOfStatement = I;
    var M = function() {
     function e(e, t, n, i) {
      this.type = r.Syntax.ForStatement;
      this.init = e;
      this.test = t;
      this.update = n;
      this.body = i;
     }
     return e;
    }();
    t.ForStatement = M;
    var R = function() {
     function e(e, t, n, i) {
      this.type = r.Syntax.FunctionDeclaration;
      this.id = e;
      this.params = t;
      this.body = n;
      this.generator = i;
      this.expression = false;
      this.async = false;
     }
     return e;
    }();
    t.FunctionDeclaration = R;
    var B = function() {
     function e(e, t, n, i) {
      this.type = r.Syntax.FunctionExpression;
      this.id = e;
      this.params = t;
      this.body = n;
      this.generator = i;
      this.expression = false;
      this.async = false;
     }
     return e;
    }();
    t.FunctionExpression = B;
    var L = function() {
     function e(e) {
      this.type = r.Syntax.Identifier;
      this.name = e;
     }
     return e;
    }();
    t.Identifier = L;
    var j = function() {
     function e(e, t, n) {
      this.type = r.Syntax.IfStatement;
      this.test = e;
      this.consequent = t;
      this.alternate = n;
     }
     return e;
    }();
    t.IfStatement = j;
    var q = function() {
     function e(e, t) {
      this.type = r.Syntax.ImportDeclaration;
      this.specifiers = e;
      this.source = t;
     }
     return e;
    }();
    t.ImportDeclaration = q;
    var U = function() {
     function e(e) {
      this.type = r.Syntax.ImportDefaultSpecifier;
      this.local = e;
     }
     return e;
    }();
    t.ImportDefaultSpecifier = U;
    var W = function() {
     function e(e) {
      this.type = r.Syntax.ImportNamespaceSpecifier;
      this.local = e;
     }
     return e;
    }();
    t.ImportNamespaceSpecifier = W;
    var z = function() {
     function e(e, t) {
      this.type = r.Syntax.ImportSpecifier;
      this.local = e;
      this.imported = t;
     }
     return e;
    }();
    t.ImportSpecifier = z;
    var V = function() {
     function e(e, t) {
      this.type = r.Syntax.LabeledStatement;
      this.label = e;
      this.body = t;
     }
     return e;
    }();
    t.LabeledStatement = V;
    var J = function() {
     function e(e, t) {
      this.type = r.Syntax.Literal;
      this.value = e;
      this.raw = t;
     }
     return e;
    }();
    t.Literal = J;
    var X = function() {
     function e(e, t) {
      this.type = r.Syntax.MetaProperty;
      this.meta = e;
      this.property = t;
     }
     return e;
    }();
    t.MetaProperty = X;
    var K = function() {
     function e(e, t, n, i, s) {
      this.type = r.Syntax.MethodDefinition;
      this.key = e;
      this.computed = t;
      this.value = n;
      this.kind = i;
      this.static = s;
     }
     return e;
    }();
    t.MethodDefinition = K;
    var H = function() {
     function e(e) {
      this.type = r.Syntax.Program;
      this.body = e;
      this.sourceType = "module";
     }
     return e;
    }();
    t.Module = H;
    var Y = function() {
     function e(e, t) {
      this.type = r.Syntax.NewExpression;
      this.callee = e;
      this.arguments = t;
     }
     return e;
    }();
    t.NewExpression = Y;
    var G = function() {
     function e(e) {
      this.type = r.Syntax.ObjectExpression;
      this.properties = e;
     }
     return e;
    }();
    t.ObjectExpression = G;
    var $ = function() {
     function e(e) {
      this.type = r.Syntax.ObjectPattern;
      this.properties = e;
     }
     return e;
    }();
    t.ObjectPattern = $;
    var Q = function() {
     function e(e, t, n, i, s, a) {
      this.type = r.Syntax.Property;
      this.key = t;
      this.computed = n;
      this.value = i;
      this.kind = e;
      this.method = s;
      this.shorthand = a;
     }
     return e;
    }();
    t.Property = Q;
    var Z = function() {
     function e(e, t, n, i) {
      this.type = r.Syntax.Literal;
      this.value = e;
      this.raw = t;
      this.regex = {
       pattern: n,
       flags: i
      };
     }
     return e;
    }();
    t.RegexLiteral = Z;
    var ee = function() {
     function e(e) {
      this.type = r.Syntax.RestElement;
      this.argument = e;
     }
     return e;
    }();
    t.RestElement = ee;
    var te = function() {
     function e(e) {
      this.type = r.Syntax.ReturnStatement;
      this.argument = e;
     }
     return e;
    }();
    t.ReturnStatement = te;
    var ne = function() {
     function e(e) {
      this.type = r.Syntax.Program;
      this.body = e;
      this.sourceType = "script";
     }
     return e;
    }();
    t.Script = ne;
    var re = function() {
     function e(e) {
      this.type = r.Syntax.SequenceExpression;
      this.expressions = e;
     }
     return e;
    }();
    t.SequenceExpression = re;
    var ie = function() {
     function e(e) {
      this.type = r.Syntax.SpreadElement;
      this.argument = e;
     }
     return e;
    }();
    t.SpreadElement = ie;
    var se = function() {
     function e(e, t) {
      this.type = r.Syntax.MemberExpression;
      this.computed = false;
      this.object = e;
      this.property = t;
     }
     return e;
    }();
    t.StaticMemberExpression = se;
    var ae = function() {
     function e() {
      this.type = r.Syntax.Super;
     }
     return e;
    }();
    t.Super = ae;
    var oe = function() {
     function e(e, t) {
      this.type = r.Syntax.SwitchCase;
      this.test = e;
      this.consequent = t;
     }
     return e;
    }();
    t.SwitchCase = oe;
    var ue = function() {
     function e(e, t) {
      this.type = r.Syntax.SwitchStatement;
      this.discriminant = e;
      this.cases = t;
     }
     return e;
    }();
    t.SwitchStatement = ue;
    var ce = function() {
     function e(e, t) {
      this.type = r.Syntax.TaggedTemplateExpression;
      this.tag = e;
      this.quasi = t;
     }
     return e;
    }();
    t.TaggedTemplateExpression = ce;
    var le = function() {
     function e(e, t) {
      this.type = r.Syntax.TemplateElement;
      this.value = e;
      this.tail = t;
     }
     return e;
    }();
    t.TemplateElement = le;
    var he = function() {
     function e(e, t) {
      this.type = r.Syntax.TemplateLiteral;
      this.quasis = e;
      this.expressions = t;
     }
     return e;
    }();
    t.TemplateLiteral = he;
    var fe = function() {
     function e() {
      this.type = r.Syntax.ThisExpression;
     }
     return e;
    }();
    t.ThisExpression = fe;
    var pe = function() {
     function e(e) {
      this.type = r.Syntax.ThrowStatement;
      this.argument = e;
     }
     return e;
    }();
    t.ThrowStatement = pe;
    var de = function() {
     function e(e, t, n) {
      this.type = r.Syntax.TryStatement;
      this.block = e;
      this.handler = t;
      this.finalizer = n;
     }
     return e;
    }();
    t.TryStatement = de;
    var me = function() {
     function e(e, t) {
      this.type = r.Syntax.UnaryExpression;
      this.operator = e;
      this.argument = t;
      this.prefix = true;
     }
     return e;
    }();
    t.UnaryExpression = me;
    var ve = function() {
     function e(e, t, n) {
      this.type = r.Syntax.UpdateExpression;
      this.operator = e;
      this.argument = t;
      this.prefix = n;
     }
     return e;
    }();
    t.UpdateExpression = ve;
    var ge = function() {
     function e(e, t) {
      this.type = r.Syntax.VariableDeclaration;
      this.declarations = e;
      this.kind = t;
     }
     return e;
    }();
    t.VariableDeclaration = ge;
    var ye = function() {
     function e(e, t) {
      this.type = r.Syntax.VariableDeclarator;
      this.id = e;
      this.init = t;
     }
     return e;
    }();
    t.VariableDeclarator = ye;
    var xe = function() {
     function e(e, t) {
      this.type = r.Syntax.WhileStatement;
      this.test = e;
      this.body = t;
     }
     return e;
    }();
    t.WhileStatement = xe;
    var Ce = function() {
     function e(e, t) {
      this.type = r.Syntax.WithStatement;
      this.object = e;
      this.body = t;
     }
     return e;
    }();
    t.WithStatement = Ce;
    var De = function() {
     function e(e, t) {
      this.type = r.Syntax.YieldExpression;
      this.argument = e;
      this.delegate = t;
     }
     return e;
    }();
    t.YieldExpression = De;
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    var r = n(9);
    var i = n(10);
    var s = n(11);
    var a = n(7);
    var o = n(12);
    var u = n(2);
    var c = n(13);
    var l = "ArrowParameterPlaceHolder";
    var h = function() {
     function e(e, t, n) {
      if (t === void 0) {
       t = {};
      }
      this.config = {
       range: typeof t.range === "boolean" && t.range,
       loc: typeof t.loc === "boolean" && t.loc,
       source: null,
       tokens: typeof t.tokens === "boolean" && t.tokens,
       comment: typeof t.comment === "boolean" && t.comment,
       tolerant: typeof t.tolerant === "boolean" && t.tolerant
      };
      if (this.config.loc && t.source && t.source !== null) {
       this.config.source = String(t.source);
      }
      this.delegate = n;
      this.errorHandler = new i.ErrorHandler();
      this.errorHandler.tolerant = this.config.tolerant;
      this.scanner = new o.Scanner(e, this.errorHandler);
      this.scanner.trackComment = this.config.comment;
      this.operatorPrecedence = {
       ")": 0,
       ";": 0,
       ",": 0,
       "=": 0,
       "]": 0,
       "||": 1,
       "&&": 2,
       "|": 3,
       "^": 4,
       "&": 5,
       "==": 6,
       "!=": 6,
       "===": 6,
       "!==": 6,
       "<": 7,
       ">": 7,
       "<=": 7,
       ">=": 7,
       "<<": 8,
       ">>": 8,
       ">>>": 8,
       "+": 9,
       "-": 9,
       "*": 11,
       "/": 11,
       "%": 11
      };
      this.lookahead = {
       type: 2,
       value: "",
       lineNumber: this.scanner.lineNumber,
       lineStart: 0,
       start: 0,
       end: 0
      };
      this.hasLineTerminator = false;
      this.context = {
       isModule: false,
       await: false,
       allowIn: true,
       allowStrictDirective: true,
       allowYield: true,
       firstCoverInitializedNameError: null,
       isAssignmentTarget: false,
       isBindingElement: false,
       inFunctionBody: false,
       inIteration: false,
       inSwitch: false,
       labelSet: {},
       strict: false
      };
      this.tokens = [];
      this.startMarker = {
       index: 0,
       line: this.scanner.lineNumber,
       column: 0
      };
      this.lastMarker = {
       index: 0,
       line: this.scanner.lineNumber,
       column: 0
      };
      this.nextToken();
      this.lastMarker = {
       index: this.scanner.index,
       line: this.scanner.lineNumber,
       column: this.scanner.index - this.scanner.lineStart
      };
     }
     e.prototype.throwError = function(e) {
      var t = [];
      for (var n = 1; n < arguments.length; n++) {
       t[n - 1] = arguments[n];
      }
      var i = Array.prototype.slice.call(arguments, 1);
      var s = e.replace(/%(\d)/g, function(e, t) {
       r.assert(t < i.length, "Message reference must be in range");
       return i[t];
      });
      var a = this.lastMarker.index;
      var o = this.lastMarker.line;
      var u = this.lastMarker.column + 1;
      throw this.errorHandler.createError(a, o, u, s);
     };
     e.prototype.tolerateError = function(e) {
      var t = [];
      for (var n = 1; n < arguments.length; n++) {
       t[n - 1] = arguments[n];
      }
      var i = Array.prototype.slice.call(arguments, 1);
      var s = e.replace(/%(\d)/g, function(e, t) {
       r.assert(t < i.length, "Message reference must be in range");
       return i[t];
      });
      var a = this.lastMarker.index;
      var o = this.scanner.lineNumber;
      var u = this.lastMarker.column + 1;
      this.errorHandler.tolerateError(a, o, u, s);
     };
     e.prototype.unexpectedTokenError = function(e, t) {
      var n = t || s.Messages.UnexpectedToken;
      var r;
      if (e) {
       if (!t) {
        n = e.type === 2 ? s.Messages.UnexpectedEOS : e.type === 3 ? s.Messages.UnexpectedIdentifier : e.type === 6 ? s.Messages.UnexpectedNumber : e.type === 8 ? s.Messages.UnexpectedString : e.type === 10 ? s.Messages.UnexpectedTemplate : s.Messages.UnexpectedToken;
        if (e.type === 4) {
         if (this.scanner.isFutureReservedWord(e.value)) {
          n = s.Messages.UnexpectedReserved;
         } else if (this.context.strict && this.scanner.isStrictModeReservedWord(e.value)) {
          n = s.Messages.StrictReservedWord;
         }
        }
       }
       r = e.value;
      } else {
       r = "ILLEGAL";
      }
      n = n.replace("%0", r);
      if (e && typeof e.lineNumber === "number") {
       var i = e.start;
       var a = e.lineNumber;
       var o = this.lastMarker.index - this.lastMarker.column;
       var u = e.start - o + 1;
       return this.errorHandler.createError(i, a, u, n);
      } else {
       var i = this.lastMarker.index;
       var a = this.lastMarker.line;
       var u = this.lastMarker.column + 1;
       return this.errorHandler.createError(i, a, u, n);
      }
     };
     e.prototype.throwUnexpectedToken = function(e, t) {
      throw this.unexpectedTokenError(e, t);
     };
     e.prototype.tolerateUnexpectedToken = function(e, t) {
      this.errorHandler.tolerate(this.unexpectedTokenError(e, t));
     };
     e.prototype.collectComments = function() {
      if (!this.config.comment) {
       this.scanner.scanComments();
      } else {
       var e = this.scanner.scanComments();
       if (e.length > 0 && this.delegate) {
        for (var t = 0; t < e.length; ++t) {
         var n = e[t];
         var r = void 0;
         r = {
          type: n.multiLine ? "BlockComment" : "LineComment",
          value: this.scanner.source.slice(n.slice[0], n.slice[1])
         };
         if (this.config.range) {
          r.range = n.range;
         }
         if (this.config.loc) {
          r.loc = n.loc;
         }
         var i = {
          start: {
           line: n.loc.start.line,
           column: n.loc.start.column,
           offset: n.range[0]
          },
          end: {
           line: n.loc.end.line,
           column: n.loc.end.column,
           offset: n.range[1]
          }
         };
         this.delegate(r, i);
        }
       }
      }
     };
     e.prototype.getTokenRaw = function(e) {
      return this.scanner.source.slice(e.start, e.end);
     };
     e.prototype.convertToken = function(e) {
      var t = {
       type: c.TokenName[e.type],
       value: this.getTokenRaw(e)
      };
      if (this.config.range) {
       t.range = [ e.start, e.end ];
      }
      if (this.config.loc) {
       t.loc = {
        start: {
         line: this.startMarker.line,
         column: this.startMarker.column
        },
        end: {
         line: this.scanner.lineNumber,
         column: this.scanner.index - this.scanner.lineStart
        }
       };
      }
      if (e.type === 9) {
       var n = e.pattern;
       var r = e.flags;
       t.regex = {
        pattern: n,
        flags: r
       };
      }
      return t;
     };
     e.prototype.nextToken = function() {
      var e = this.lookahead;
      this.lastMarker.index = this.scanner.index;
      this.lastMarker.line = this.scanner.lineNumber;
      this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
      this.collectComments();
      if (this.scanner.index !== this.startMarker.index) {
       this.startMarker.index = this.scanner.index;
       this.startMarker.line = this.scanner.lineNumber;
       this.startMarker.column = this.scanner.index - this.scanner.lineStart;
      }
      var t = this.scanner.lex();
      this.hasLineTerminator = e.lineNumber !== t.lineNumber;
      if (t && this.context.strict && t.type === 3) {
       if (this.scanner.isStrictModeReservedWord(t.value)) {
        t.type = 4;
       }
      }
      this.lookahead = t;
      if (this.config.tokens && t.type !== 2) {
       this.tokens.push(this.convertToken(t));
      }
      return e;
     };
     e.prototype.nextRegexToken = function() {
      this.collectComments();
      var e = this.scanner.scanRegExp();
      if (this.config.tokens) {
       this.tokens.pop();
       this.tokens.push(this.convertToken(e));
      }
      this.lookahead = e;
      this.nextToken();
      return e;
     };
     e.prototype.createNode = function() {
      return {
       index: this.startMarker.index,
       line: this.startMarker.line,
       column: this.startMarker.column
      };
     };
     e.prototype.startNode = function(e) {
      return {
       index: e.start,
       line: e.lineNumber,
       column: e.start - e.lineStart
      };
     };
     e.prototype.finalize = function(e, t) {
      if (this.config.range) {
       t.range = [ e.index, this.lastMarker.index ];
      }
      if (this.config.loc) {
       t.loc = {
        start: {
         line: e.line,
         column: e.column
        },
        end: {
         line: this.lastMarker.line,
         column: this.lastMarker.column
        }
       };
       if (this.config.source) {
        t.loc.source = this.config.source;
       }
      }
      if (this.delegate) {
       var n = {
        start: {
         line: e.line,
         column: e.column,
         offset: e.index
        },
        end: {
         line: this.lastMarker.line,
         column: this.lastMarker.column,
         offset: this.lastMarker.index
        }
       };
       this.delegate(t, n);
      }
      return t;
     };
     e.prototype.expect = function(e) {
      var t = this.nextToken();
      if (t.type !== 7 || t.value !== e) {
       this.throwUnexpectedToken(t);
      }
     };
     e.prototype.expectCommaSeparator = function() {
      if (this.config.tolerant) {
       var e = this.lookahead;
       if (e.type === 7 && e.value === ",") {
        this.nextToken();
       } else if (e.type === 7 && e.value === ";") {
        this.nextToken();
        this.tolerateUnexpectedToken(e);
       } else {
        this.tolerateUnexpectedToken(e, s.Messages.UnexpectedToken);
       }
      } else {
       this.expect(",");
      }
     };
     e.prototype.expectKeyword = function(e) {
      var t = this.nextToken();
      if (t.type !== 4 || t.value !== e) {
       this.throwUnexpectedToken(t);
      }
     };
     e.prototype.match = function(e) {
      return this.lookahead.type === 7 && this.lookahead.value === e;
     };
     e.prototype.matchKeyword = function(e) {
      return this.lookahead.type === 4 && this.lookahead.value === e;
     };
     e.prototype.matchContextualKeyword = function(e) {
      return this.lookahead.type === 3 && this.lookahead.value === e;
     };
     e.prototype.matchAssign = function() {
      if (this.lookahead.type !== 7) {
       return false;
      }
      var e = this.lookahead.value;
      return e === "=" || e === "*=" || e === "**=" || e === "/=" || e === "%=" || e === "+=" || e === "-=" || e === "<<=" || e === ">>=" || e === ">>>=" || e === "&=" || e === "^=" || e === "|=";
     };
     e.prototype.isolateCoverGrammar = function(e) {
      var t = this.context.isBindingElement;
      var n = this.context.isAssignmentTarget;
      var r = this.context.firstCoverInitializedNameError;
      this.context.isBindingElement = true;
      this.context.isAssignmentTarget = true;
      this.context.firstCoverInitializedNameError = null;
      var i = e.call(this);
      if (this.context.firstCoverInitializedNameError !== null) {
       this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
      }
      this.context.isBindingElement = t;
      this.context.isAssignmentTarget = n;
      this.context.firstCoverInitializedNameError = r;
      return i;
     };
     e.prototype.inheritCoverGrammar = function(e) {
      var t = this.context.isBindingElement;
      var n = this.context.isAssignmentTarget;
      var r = this.context.firstCoverInitializedNameError;
      this.context.isBindingElement = true;
      this.context.isAssignmentTarget = true;
      this.context.firstCoverInitializedNameError = null;
      var i = e.call(this);
      this.context.isBindingElement = this.context.isBindingElement && t;
      this.context.isAssignmentTarget = this.context.isAssignmentTarget && n;
      this.context.firstCoverInitializedNameError = r || this.context.firstCoverInitializedNameError;
      return i;
     };
     e.prototype.consumeSemicolon = function() {
      if (this.match(";")) {
       this.nextToken();
      } else if (!this.hasLineTerminator) {
       if (this.lookahead.type !== 2 && !this.match("}")) {
        this.throwUnexpectedToken(this.lookahead);
       }
       this.lastMarker.index = this.startMarker.index;
       this.lastMarker.line = this.startMarker.line;
       this.lastMarker.column = this.startMarker.column;
      }
     };
     e.prototype.parsePrimaryExpression = function() {
      var e = this.createNode();
      var t;
      var n, r;
      switch (this.lookahead.type) {
      case 3:
       if ((this.context.isModule || this.context.await) && this.lookahead.value === "await") {
        this.tolerateUnexpectedToken(this.lookahead);
       }
       t = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(e, new a.Identifier(this.nextToken().value));
       break;

      case 6:
      case 8:
       if (this.context.strict && this.lookahead.octal) {
        this.tolerateUnexpectedToken(this.lookahead, s.Messages.StrictOctalLiteral);
       }
       this.context.isAssignmentTarget = false;
       this.context.isBindingElement = false;
       n = this.nextToken();
       r = this.getTokenRaw(n);
       t = this.finalize(e, new a.Literal(n.value, r));
       break;

      case 1:
       this.context.isAssignmentTarget = false;
       this.context.isBindingElement = false;
       n = this.nextToken();
       r = this.getTokenRaw(n);
       t = this.finalize(e, new a.Literal(n.value === "true", r));
       break;

      case 5:
       this.context.isAssignmentTarget = false;
       this.context.isBindingElement = false;
       n = this.nextToken();
       r = this.getTokenRaw(n);
       t = this.finalize(e, new a.Literal(null, r));
       break;

      case 10:
       t = this.parseTemplateLiteral();
       break;

      case 7:
       switch (this.lookahead.value) {
       case "(":
        this.context.isBindingElement = false;
        t = this.inheritCoverGrammar(this.parseGroupExpression);
        break;

       case "[":
        t = this.inheritCoverGrammar(this.parseArrayInitializer);
        break;

       case "{":
        t = this.inheritCoverGrammar(this.parseObjectInitializer);
        break;

       case "/":
       case "/=":
        this.context.isAssignmentTarget = false;
        this.context.isBindingElement = false;
        this.scanner.index = this.startMarker.index;
        n = this.nextRegexToken();
        r = this.getTokenRaw(n);
        t = this.finalize(e, new a.RegexLiteral(n.regex, r, n.pattern, n.flags));
        break;

       default:
        t = this.throwUnexpectedToken(this.nextToken());
       }
       break;

      case 4:
       if (!this.context.strict && this.context.allowYield && this.matchKeyword("yield")) {
        t = this.parseIdentifierName();
       } else if (!this.context.strict && this.matchKeyword("let")) {
        t = this.finalize(e, new a.Identifier(this.nextToken().value));
       } else {
        this.context.isAssignmentTarget = false;
        this.context.isBindingElement = false;
        if (this.matchKeyword("function")) {
         t = this.parseFunctionExpression();
        } else if (this.matchKeyword("this")) {
         this.nextToken();
         t = this.finalize(e, new a.ThisExpression());
        } else if (this.matchKeyword("class")) {
         t = this.parseClassExpression();
        } else {
         t = this.throwUnexpectedToken(this.nextToken());
        }
       }
       break;

      default:
       t = this.throwUnexpectedToken(this.nextToken());
      }
      return t;
     };
     e.prototype.parseSpreadElement = function() {
      var e = this.createNode();
      this.expect("...");
      var t = this.inheritCoverGrammar(this.parseAssignmentExpression);
      return this.finalize(e, new a.SpreadElement(t));
     };
     e.prototype.parseArrayInitializer = function() {
      var e = this.createNode();
      var t = [];
      this.expect("[");
      while (!this.match("]")) {
       if (this.match(",")) {
        this.nextToken();
        t.push(null);
       } else if (this.match("...")) {
        var n = this.parseSpreadElement();
        if (!this.match("]")) {
         this.context.isAssignmentTarget = false;
         this.context.isBindingElement = false;
         this.expect(",");
        }
        t.push(n);
       } else {
        t.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
        if (!this.match("]")) {
         this.expect(",");
        }
       }
      }
      this.expect("]");
      return this.finalize(e, new a.ArrayExpression(t));
     };
     e.prototype.parsePropertyMethod = function(e) {
      this.context.isAssignmentTarget = false;
      this.context.isBindingElement = false;
      var t = this.context.strict;
      var n = this.context.allowStrictDirective;
      this.context.allowStrictDirective = e.simple;
      var r = this.isolateCoverGrammar(this.parseFunctionSourceElements);
      if (this.context.strict && e.firstRestricted) {
       this.tolerateUnexpectedToken(e.firstRestricted, e.message);
      }
      if (this.context.strict && e.stricted) {
       this.tolerateUnexpectedToken(e.stricted, e.message);
      }
      this.context.strict = t;
      this.context.allowStrictDirective = n;
      return r;
     };
     e.prototype.parsePropertyMethodFunction = function() {
      var e = false;
      var t = this.createNode();
      var n = this.context.allowYield;
      this.context.allowYield = false;
      var r = this.parseFormalParameters();
      var i = this.parsePropertyMethod(r);
      this.context.allowYield = n;
      return this.finalize(t, new a.FunctionExpression(null, r.params, i, e));
     };
     e.prototype.parsePropertyMethodAsyncFunction = function() {
      var e = this.createNode();
      var t = this.context.allowYield;
      var n = this.context.await;
      this.context.allowYield = false;
      this.context.await = true;
      var r = this.parseFormalParameters();
      var i = this.parsePropertyMethod(r);
      this.context.allowYield = t;
      this.context.await = n;
      return this.finalize(e, new a.AsyncFunctionExpression(null, r.params, i));
     };
     e.prototype.parseObjectPropertyKey = function() {
      var e = this.createNode();
      var t = this.nextToken();
      var n;
      switch (t.type) {
      case 8:
      case 6:
       if (this.context.strict && t.octal) {
        this.tolerateUnexpectedToken(t, s.Messages.StrictOctalLiteral);
       }
       var r = this.getTokenRaw(t);
       n = this.finalize(e, new a.Literal(t.value, r));
       break;

      case 3:
      case 1:
      case 5:
      case 4:
       n = this.finalize(e, new a.Identifier(t.value));
       break;

      case 7:
       if (t.value === "[") {
        n = this.isolateCoverGrammar(this.parseAssignmentExpression);
        this.expect("]");
       } else {
        n = this.throwUnexpectedToken(t);
       }
       break;

      default:
       n = this.throwUnexpectedToken(t);
      }
      return n;
     };
     e.prototype.isPropertyKey = function(e, t) {
      return e.type === u.Syntax.Identifier && e.name === t || e.type === u.Syntax.Literal && e.value === t;
     };
     e.prototype.parseObjectProperty = function(e) {
      var t = this.createNode();
      var n = this.lookahead;
      var r;
      var i = null;
      var o = null;
      var u = false;
      var c = false;
      var l = false;
      var h = false;
      if (n.type === 3) {
       var f = n.value;
       this.nextToken();
       u = this.match("[");
       h = !this.hasLineTerminator && f === "async" && !this.match(":") && !this.match("(") && !this.match("*");
       i = h ? this.parseObjectPropertyKey() : this.finalize(t, new a.Identifier(f));
      } else if (this.match("*")) {
       this.nextToken();
      } else {
       u = this.match("[");
       i = this.parseObjectPropertyKey();
      }
      var p = this.qualifiedPropertyName(this.lookahead);
      if (n.type === 3 && !h && n.value === "get" && p) {
       r = "get";
       u = this.match("[");
       i = this.parseObjectPropertyKey();
       this.context.allowYield = false;
       o = this.parseGetterMethod();
      } else if (n.type === 3 && !h && n.value === "set" && p) {
       r = "set";
       u = this.match("[");
       i = this.parseObjectPropertyKey();
       o = this.parseSetterMethod();
      } else if (n.type === 7 && n.value === "*" && p) {
       r = "init";
       u = this.match("[");
       i = this.parseObjectPropertyKey();
       o = this.parseGeneratorMethod();
       c = true;
      } else {
       if (!i) {
        this.throwUnexpectedToken(this.lookahead);
       }
       r = "init";
       if (this.match(":") && !h) {
        if (!u && this.isPropertyKey(i, "__proto__")) {
         if (e.value) {
          this.tolerateError(s.Messages.DuplicateProtoProperty);
         }
         e.value = true;
        }
        this.nextToken();
        o = this.inheritCoverGrammar(this.parseAssignmentExpression);
       } else if (this.match("(")) {
        o = h ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
        c = true;
       } else if (n.type === 3) {
        var f = this.finalize(t, new a.Identifier(n.value));
        if (this.match("=")) {
         this.context.firstCoverInitializedNameError = this.lookahead;
         this.nextToken();
         l = true;
         var d = this.isolateCoverGrammar(this.parseAssignmentExpression);
         o = this.finalize(t, new a.AssignmentPattern(f, d));
        } else {
         l = true;
         o = f;
        }
       } else {
        this.throwUnexpectedToken(this.nextToken());
       }
      }
      return this.finalize(t, new a.Property(r, i, u, o, c, l));
     };
     e.prototype.parseObjectInitializer = function() {
      var e = this.createNode();
      this.expect("{");
      var t = [];
      var n = {
       value: false
      };
      while (!this.match("}")) {
       t.push(this.parseObjectProperty(n));
       if (!this.match("}")) {
        this.expectCommaSeparator();
       }
      }
      this.expect("}");
      return this.finalize(e, new a.ObjectExpression(t));
     };
     e.prototype.parseTemplateHead = function() {
      r.assert(this.lookahead.head, "Template literal must start with a template head");
      var e = this.createNode();
      var t = this.nextToken();
      var n = t.value;
      var i = t.cooked;
      return this.finalize(e, new a.TemplateElement({
       raw: n,
       cooked: i
      }, t.tail));
     };
     e.prototype.parseTemplateElement = function() {
      if (this.lookahead.type !== 10) {
       this.throwUnexpectedToken();
      }
      var e = this.createNode();
      var t = this.nextToken();
      var n = t.value;
      var r = t.cooked;
      return this.finalize(e, new a.TemplateElement({
       raw: n,
       cooked: r
      }, t.tail));
     };
     e.prototype.parseTemplateLiteral = function() {
      var e = this.createNode();
      var t = [];
      var n = [];
      var r = this.parseTemplateHead();
      n.push(r);
      while (!r.tail) {
       t.push(this.parseExpression());
       r = this.parseTemplateElement();
       n.push(r);
      }
      return this.finalize(e, new a.TemplateLiteral(n, t));
     };
     e.prototype.reinterpretExpressionAsPattern = function(e) {
      switch (e.type) {
      case u.Syntax.Identifier:
      case u.Syntax.MemberExpression:
      case u.Syntax.RestElement:
      case u.Syntax.AssignmentPattern:
       break;

      case u.Syntax.SpreadElement:
       e.type = u.Syntax.RestElement;
       this.reinterpretExpressionAsPattern(e.argument);
       break;

      case u.Syntax.ArrayExpression:
       e.type = u.Syntax.ArrayPattern;
       for (var t = 0; t < e.elements.length; t++) {
        if (e.elements[t] !== null) {
         this.reinterpretExpressionAsPattern(e.elements[t]);
        }
       }
       break;

      case u.Syntax.ObjectExpression:
       e.type = u.Syntax.ObjectPattern;
       for (var t = 0; t < e.properties.length; t++) {
        this.reinterpretExpressionAsPattern(e.properties[t].value);
       }
       break;

      case u.Syntax.AssignmentExpression:
       e.type = u.Syntax.AssignmentPattern;
       delete e.operator;
       this.reinterpretExpressionAsPattern(e.left);
       break;

      default:
       break;
      }
     };
     e.prototype.parseGroupExpression = function() {
      var e;
      this.expect("(");
      if (this.match(")")) {
       this.nextToken();
       if (!this.match("=>")) {
        this.expect("=>");
       }
       e = {
        type: l,
        params: [],
        async: false
       };
      } else {
       var t = this.lookahead;
       var n = [];
       if (this.match("...")) {
        e = this.parseRestElement(n);
        this.expect(")");
        if (!this.match("=>")) {
         this.expect("=>");
        }
        e = {
         type: l,
         params: [ e ],
         async: false
        };
       } else {
        var r = false;
        this.context.isBindingElement = true;
        e = this.inheritCoverGrammar(this.parseAssignmentExpression);
        if (this.match(",")) {
         var i = [];
         this.context.isAssignmentTarget = false;
         i.push(e);
         while (this.lookahead.type !== 2) {
          if (!this.match(",")) {
           break;
          }
          this.nextToken();
          if (this.match(")")) {
           this.nextToken();
           for (var s = 0; s < i.length; s++) {
            this.reinterpretExpressionAsPattern(i[s]);
           }
           r = true;
           e = {
            type: l,
            params: i,
            async: false
           };
          } else if (this.match("...")) {
           if (!this.context.isBindingElement) {
            this.throwUnexpectedToken(this.lookahead);
           }
           i.push(this.parseRestElement(n));
           this.expect(")");
           if (!this.match("=>")) {
            this.expect("=>");
           }
           this.context.isBindingElement = false;
           for (var s = 0; s < i.length; s++) {
            this.reinterpretExpressionAsPattern(i[s]);
           }
           r = true;
           e = {
            type: l,
            params: i,
            async: false
           };
          } else {
           i.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
          }
          if (r) {
           break;
          }
         }
         if (!r) {
          e = this.finalize(this.startNode(t), new a.SequenceExpression(i));
         }
        }
        if (!r) {
         this.expect(")");
         if (this.match("=>")) {
          if (e.type === u.Syntax.Identifier && e.name === "yield") {
           r = true;
           e = {
            type: l,
            params: [ e ],
            async: false
           };
          }
          if (!r) {
           if (!this.context.isBindingElement) {
            this.throwUnexpectedToken(this.lookahead);
           }
           if (e.type === u.Syntax.SequenceExpression) {
            for (var s = 0; s < e.expressions.length; s++) {
             this.reinterpretExpressionAsPattern(e.expressions[s]);
            }
           } else {
            this.reinterpretExpressionAsPattern(e);
           }
           var o = e.type === u.Syntax.SequenceExpression ? e.expressions : [ e ];
           e = {
            type: l,
            params: o,
            async: false
           };
          }
         }
         this.context.isBindingElement = false;
        }
       }
      }
      return e;
     };
     e.prototype.parseArguments = function() {
      this.expect("(");
      var e = [];
      if (!this.match(")")) {
       while (true) {
        var t = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
        e.push(t);
        if (this.match(")")) {
         break;
        }
        this.expectCommaSeparator();
        if (this.match(")")) {
         break;
        }
       }
      }
      this.expect(")");
      return e;
     };
     e.prototype.isIdentifierName = function(e) {
      return e.type === 3 || e.type === 4 || e.type === 1 || e.type === 5;
     };
     e.prototype.parseIdentifierName = function() {
      var e = this.createNode();
      var t = this.nextToken();
      if (!this.isIdentifierName(t)) {
       this.throwUnexpectedToken(t);
      }
      return this.finalize(e, new a.Identifier(t.value));
     };
     e.prototype.parseNewExpression = function() {
      var e = this.createNode();
      var t = this.parseIdentifierName();
      r.assert(t.name === "new", "New expression must start with `new`");
      var n;
      if (this.match(".")) {
       this.nextToken();
       if (this.lookahead.type === 3 && this.context.inFunctionBody && this.lookahead.value === "target") {
        var i = this.parseIdentifierName();
        n = new a.MetaProperty(t, i);
       } else {
        this.throwUnexpectedToken(this.lookahead);
       }
      } else {
       var s = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
       var o = this.match("(") ? this.parseArguments() : [];
       n = new a.NewExpression(s, o);
       this.context.isAssignmentTarget = false;
       this.context.isBindingElement = false;
      }
      return this.finalize(e, n);
     };
     e.prototype.parseAsyncArgument = function() {
      var e = this.parseAssignmentExpression();
      this.context.firstCoverInitializedNameError = null;
      return e;
     };
     e.prototype.parseAsyncArguments = function() {
      this.expect("(");
      var e = [];
      if (!this.match(")")) {
       while (true) {
        var t = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAsyncArgument);
        e.push(t);
        if (this.match(")")) {
         break;
        }
        this.expectCommaSeparator();
        if (this.match(")")) {
         break;
        }
       }
      }
      this.expect(")");
      return e;
     };
     e.prototype.parseLeftHandSideExpressionAllowCall = function() {
      var e = this.lookahead;
      var t = this.matchContextualKeyword("async");
      var n = this.context.allowIn;
      this.context.allowIn = true;
      var r;
      if (this.matchKeyword("super") && this.context.inFunctionBody) {
       r = this.createNode();
       this.nextToken();
       r = this.finalize(r, new a.Super());
       if (!this.match("(") && !this.match(".") && !this.match("[")) {
        this.throwUnexpectedToken(this.lookahead);
       }
      } else {
       r = this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);
      }
      while (true) {
       if (this.match(".")) {
        this.context.isBindingElement = false;
        this.context.isAssignmentTarget = true;
        this.expect(".");
        var i = this.parseIdentifierName();
        r = this.finalize(this.startNode(e), new a.StaticMemberExpression(r, i));
       } else if (this.match("(")) {
        var s = t && e.lineNumber === this.lookahead.lineNumber;
        this.context.isBindingElement = false;
        this.context.isAssignmentTarget = false;
        var o = s ? this.parseAsyncArguments() : this.parseArguments();
        r = this.finalize(this.startNode(e), new a.CallExpression(r, o));
        if (s && this.match("=>")) {
         for (var u = 0; u < o.length; ++u) {
          this.reinterpretExpressionAsPattern(o[u]);
         }
         r = {
          type: l,
          params: o,
          async: true
         };
        }
       } else if (this.match("[")) {
        this.context.isBindingElement = false;
        this.context.isAssignmentTarget = true;
        this.expect("[");
        var i = this.isolateCoverGrammar(this.parseExpression);
        this.expect("]");
        r = this.finalize(this.startNode(e), new a.ComputedMemberExpression(r, i));
       } else if (this.lookahead.type === 10 && this.lookahead.head) {
        var c = this.parseTemplateLiteral();
        r = this.finalize(this.startNode(e), new a.TaggedTemplateExpression(r, c));
       } else {
        break;
       }
      }
      this.context.allowIn = n;
      return r;
     };
     e.prototype.parseSuper = function() {
      var e = this.createNode();
      this.expectKeyword("super");
      if (!this.match("[") && !this.match(".")) {
       this.throwUnexpectedToken(this.lookahead);
      }
      return this.finalize(e, new a.Super());
     };
     e.prototype.parseLeftHandSideExpression = function() {
      r.assert(this.context.allowIn, "callee of new expression always allow in keyword.");
      var e = this.startNode(this.lookahead);
      var t = this.matchKeyword("super") && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);
      while (true) {
       if (this.match("[")) {
        this.context.isBindingElement = false;
        this.context.isAssignmentTarget = true;
        this.expect("[");
        var n = this.isolateCoverGrammar(this.parseExpression);
        this.expect("]");
        t = this.finalize(e, new a.ComputedMemberExpression(t, n));
       } else if (this.match(".")) {
        this.context.isBindingElement = false;
        this.context.isAssignmentTarget = true;
        this.expect(".");
        var n = this.parseIdentifierName();
        t = this.finalize(e, new a.StaticMemberExpression(t, n));
       } else if (this.lookahead.type === 10 && this.lookahead.head) {
        var i = this.parseTemplateLiteral();
        t = this.finalize(e, new a.TaggedTemplateExpression(t, i));
       } else {
        break;
       }
      }
      return t;
     };
     e.prototype.parseUpdateExpression = function() {
      var e;
      var t = this.lookahead;
      if (this.match("++") || this.match("--")) {
       var n = this.startNode(t);
       var r = this.nextToken();
       e = this.inheritCoverGrammar(this.parseUnaryExpression);
       if (this.context.strict && e.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(e.name)) {
        this.tolerateError(s.Messages.StrictLHSPrefix);
       }
       if (!this.context.isAssignmentTarget) {
        this.tolerateError(s.Messages.InvalidLHSInAssignment);
       }
       var i = true;
       e = this.finalize(n, new a.UpdateExpression(r.value, e, i));
       this.context.isAssignmentTarget = false;
       this.context.isBindingElement = false;
      } else {
       e = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
       if (!this.hasLineTerminator && this.lookahead.type === 7) {
        if (this.match("++") || this.match("--")) {
         if (this.context.strict && e.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(e.name)) {
          this.tolerateError(s.Messages.StrictLHSPostfix);
         }
         if (!this.context.isAssignmentTarget) {
          this.tolerateError(s.Messages.InvalidLHSInAssignment);
         }
         this.context.isAssignmentTarget = false;
         this.context.isBindingElement = false;
         var o = this.nextToken().value;
         var i = false;
         e = this.finalize(this.startNode(t), new a.UpdateExpression(o, e, i));
        }
       }
      }
      return e;
     };
     e.prototype.parseAwaitExpression = function() {
      var e = this.createNode();
      this.nextToken();
      var t = this.parseUnaryExpression();
      return this.finalize(e, new a.AwaitExpression(t));
     };
     e.prototype.parseUnaryExpression = function() {
      var e;
      if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
       var t = this.startNode(this.lookahead);
       var n = this.nextToken();
       e = this.inheritCoverGrammar(this.parseUnaryExpression);
       e = this.finalize(t, new a.UnaryExpression(n.value, e));
       if (this.context.strict && e.operator === "delete" && e.argument.type === u.Syntax.Identifier) {
        this.tolerateError(s.Messages.StrictDelete);
       }
       this.context.isAssignmentTarget = false;
       this.context.isBindingElement = false;
      } else if (this.context.await && this.matchContextualKeyword("await")) {
       e = this.parseAwaitExpression();
      } else {
       e = this.parseUpdateExpression();
      }
      return e;
     };
     e.prototype.parseExponentiationExpression = function() {
      var e = this.lookahead;
      var t = this.inheritCoverGrammar(this.parseUnaryExpression);
      if (t.type !== u.Syntax.UnaryExpression && this.match("**")) {
       this.nextToken();
       this.context.isAssignmentTarget = false;
       this.context.isBindingElement = false;
       var n = t;
       var r = this.isolateCoverGrammar(this.parseExponentiationExpression);
       t = this.finalize(this.startNode(e), new a.BinaryExpression("**", n, r));
      }
      return t;
     };
     e.prototype.binaryPrecedence = function(e) {
      var t = e.value;
      var n;
      if (e.type === 7) {
       n = this.operatorPrecedence[t] || 0;
      } else if (e.type === 4) {
       n = t === "instanceof" || this.context.allowIn && t === "in" ? 7 : 0;
      } else {
       n = 0;
      }
      return n;
     };
     e.prototype.parseBinaryExpression = function() {
      var e = this.lookahead;
      var t = this.inheritCoverGrammar(this.parseExponentiationExpression);
      var n = this.lookahead;
      var r = this.binaryPrecedence(n);
      if (r > 0) {
       this.nextToken();
       this.context.isAssignmentTarget = false;
       this.context.isBindingElement = false;
       var i = [ e, this.lookahead ];
       var s = t;
       var o = this.isolateCoverGrammar(this.parseExponentiationExpression);
       var u = [ s, n.value, o ];
       var c = [ r ];
       while (true) {
        r = this.binaryPrecedence(this.lookahead);
        if (r <= 0) {
         break;
        }
        while (u.length > 2 && r <= c[c.length - 1]) {
         o = u.pop();
         var l = u.pop();
         c.pop();
         s = u.pop();
         i.pop();
         var h = this.startNode(i[i.length - 1]);
         u.push(this.finalize(h, new a.BinaryExpression(l, s, o)));
        }
        u.push(this.nextToken().value);
        c.push(r);
        i.push(this.lookahead);
        u.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
       }
       var f = u.length - 1;
       t = u[f];
       i.pop();
       while (f > 1) {
        var h = this.startNode(i.pop());
        var l = u[f - 1];
        t = this.finalize(h, new a.BinaryExpression(l, u[f - 2], t));
        f -= 2;
       }
      }
      return t;
     };
     e.prototype.parseConditionalExpression = function() {
      var e = this.lookahead;
      var t = this.inheritCoverGrammar(this.parseBinaryExpression);
      if (this.match("?")) {
       this.nextToken();
       var n = this.context.allowIn;
       this.context.allowIn = true;
       var r = this.isolateCoverGrammar(this.parseAssignmentExpression);
       this.context.allowIn = n;
       this.expect(":");
       var i = this.isolateCoverGrammar(this.parseAssignmentExpression);
       t = this.finalize(this.startNode(e), new a.ConditionalExpression(t, r, i));
       this.context.isAssignmentTarget = false;
       this.context.isBindingElement = false;
      }
      return t;
     };
     e.prototype.checkPatternParam = function(e, t) {
      switch (t.type) {
      case u.Syntax.Identifier:
       this.validateParam(e, t, t.name);
       break;

      case u.Syntax.RestElement:
       this.checkPatternParam(e, t.argument);
       break;

      case u.Syntax.AssignmentPattern:
       this.checkPatternParam(e, t.left);
       break;

      case u.Syntax.ArrayPattern:
       for (var n = 0; n < t.elements.length; n++) {
        if (t.elements[n] !== null) {
         this.checkPatternParam(e, t.elements[n]);
        }
       }
       break;

      case u.Syntax.ObjectPattern:
       for (var n = 0; n < t.properties.length; n++) {
        this.checkPatternParam(e, t.properties[n].value);
       }
       break;

      default:
       break;
      }
      e.simple = e.simple && t instanceof a.Identifier;
     };
     e.prototype.reinterpretAsCoverFormalsList = function(e) {
      var t = [ e ];
      var n;
      var r = false;
      switch (e.type) {
      case u.Syntax.Identifier:
       break;

      case l:
       t = e.params;
       r = e.async;
       break;

      default:
       return null;
      }
      n = {
       simple: true,
       paramSet: {}
      };
      for (var i = 0; i < t.length; ++i) {
       var a = t[i];
       if (a.type === u.Syntax.AssignmentPattern) {
        if (a.right.type === u.Syntax.YieldExpression) {
         if (a.right.argument) {
          this.throwUnexpectedToken(this.lookahead);
         }
         a.right.type = u.Syntax.Identifier;
         a.right.name = "yield";
         delete a.right.argument;
         delete a.right.delegate;
        }
       } else if (r && a.type === u.Syntax.Identifier && a.name === "await") {
        this.throwUnexpectedToken(this.lookahead);
       }
       this.checkPatternParam(n, a);
       t[i] = a;
      }
      if (this.context.strict || !this.context.allowYield) {
       for (var i = 0; i < t.length; ++i) {
        var a = t[i];
        if (a.type === u.Syntax.YieldExpression) {
         this.throwUnexpectedToken(this.lookahead);
        }
       }
      }
      if (n.message === s.Messages.StrictParamDupe) {
       var o = this.context.strict ? n.stricted : n.firstRestricted;
       this.throwUnexpectedToken(o, n.message);
      }
      return {
       simple: n.simple,
       params: t,
       stricted: n.stricted,
       firstRestricted: n.firstRestricted,
       message: n.message
      };
     };
     e.prototype.parseAssignmentExpression = function() {
      var e;
      if (!this.context.allowYield && this.matchKeyword("yield")) {
       e = this.parseYieldExpression();
      } else {
       var t = this.lookahead;
       var n = t;
       e = this.parseConditionalExpression();
       if (n.type === 3 && n.lineNumber === this.lookahead.lineNumber && n.value === "async") {
        if (this.lookahead.type === 3 || this.matchKeyword("yield")) {
         var r = this.parsePrimaryExpression();
         this.reinterpretExpressionAsPattern(r);
         e = {
          type: l,
          params: [ r ],
          async: true
         };
        }
       }
       if (e.type === l || this.match("=>")) {
        this.context.isAssignmentTarget = false;
        this.context.isBindingElement = false;
        var i = e.async;
        var o = this.reinterpretAsCoverFormalsList(e);
        if (o) {
         if (this.hasLineTerminator) {
          this.tolerateUnexpectedToken(this.lookahead);
         }
         this.context.firstCoverInitializedNameError = null;
         var c = this.context.strict;
         var h = this.context.allowStrictDirective;
         this.context.allowStrictDirective = o.simple;
         var f = this.context.allowYield;
         var p = this.context.await;
         this.context.allowYield = true;
         this.context.await = i;
         var d = this.startNode(t);
         this.expect("=>");
         var m = void 0;
         if (this.match("{")) {
          var v = this.context.allowIn;
          this.context.allowIn = true;
          m = this.parseFunctionSourceElements();
          this.context.allowIn = v;
         } else {
          m = this.isolateCoverGrammar(this.parseAssignmentExpression);
         }
         var g = m.type !== u.Syntax.BlockStatement;
         if (this.context.strict && o.firstRestricted) {
          this.throwUnexpectedToken(o.firstRestricted, o.message);
         }
         if (this.context.strict && o.stricted) {
          this.tolerateUnexpectedToken(o.stricted, o.message);
         }
         e = i ? this.finalize(d, new a.AsyncArrowFunctionExpression(o.params, m, g)) : this.finalize(d, new a.ArrowFunctionExpression(o.params, m, g));
         this.context.strict = c;
         this.context.allowStrictDirective = h;
         this.context.allowYield = f;
         this.context.await = p;
        }
       } else {
        if (this.matchAssign()) {
         if (!this.context.isAssignmentTarget) {
          this.tolerateError(s.Messages.InvalidLHSInAssignment);
         }
         if (this.context.strict && e.type === u.Syntax.Identifier) {
          var y = e;
          if (this.scanner.isRestrictedWord(y.name)) {
           this.tolerateUnexpectedToken(n, s.Messages.StrictLHSAssignment);
          }
          if (this.scanner.isStrictModeReservedWord(y.name)) {
           this.tolerateUnexpectedToken(n, s.Messages.StrictReservedWord);
          }
         }
         if (!this.match("=")) {
          this.context.isAssignmentTarget = false;
          this.context.isBindingElement = false;
         } else {
          this.reinterpretExpressionAsPattern(e);
         }
         n = this.nextToken();
         var x = n.value;
         var C = this.isolateCoverGrammar(this.parseAssignmentExpression);
         e = this.finalize(this.startNode(t), new a.AssignmentExpression(x, e, C));
         this.context.firstCoverInitializedNameError = null;
        }
       }
      }
      return e;
     };
     e.prototype.parseExpression = function() {
      var e = this.lookahead;
      var t = this.isolateCoverGrammar(this.parseAssignmentExpression);
      if (this.match(",")) {
       var n = [];
       n.push(t);
       while (this.lookahead.type !== 2) {
        if (!this.match(",")) {
         break;
        }
        this.nextToken();
        n.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
       }
       t = this.finalize(this.startNode(e), new a.SequenceExpression(n));
      }
      return t;
     };
     e.prototype.parseStatementListItem = function() {
      var e;
      this.context.isAssignmentTarget = true;
      this.context.isBindingElement = true;
      if (this.lookahead.type === 4) {
       switch (this.lookahead.value) {
       case "export":
        if (!this.context.isModule) {
         this.tolerateUnexpectedToken(this.lookahead, s.Messages.IllegalExportDeclaration);
        }
        e = this.parseExportDeclaration();
        break;

       case "import":
        if (!this.context.isModule) {
         this.tolerateUnexpectedToken(this.lookahead, s.Messages.IllegalImportDeclaration);
        }
        e = this.parseImportDeclaration();
        break;

       case "const":
        e = this.parseLexicalDeclaration({
         inFor: false
        });
        break;

       case "function":
        e = this.parseFunctionDeclaration();
        break;

       case "class":
        e = this.parseClassDeclaration();
        break;

       case "let":
        e = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({
         inFor: false
        }) : this.parseStatement();
        break;

       default:
        e = this.parseStatement();
        break;
       }
      } else {
       e = this.parseStatement();
      }
      return e;
     };
     e.prototype.parseBlock = function() {
      var e = this.createNode();
      this.expect("{");
      var t = [];
      while (true) {
       if (this.match("}")) {
        break;
       }
       t.push(this.parseStatementListItem());
      }
      this.expect("}");
      return this.finalize(e, new a.BlockStatement(t));
     };
     e.prototype.parseLexicalBinding = function(e, t) {
      var n = this.createNode();
      var r = [];
      var i = this.parsePattern(r, e);
      if (this.context.strict && i.type === u.Syntax.Identifier) {
       if (this.scanner.isRestrictedWord(i.name)) {
        this.tolerateError(s.Messages.StrictVarName);
       }
      }
      var o = null;
      if (e === "const") {
       if (!this.matchKeyword("in") && !this.matchContextualKeyword("of")) {
        if (this.match("=")) {
         this.nextToken();
         o = this.isolateCoverGrammar(this.parseAssignmentExpression);
        } else {
         this.throwError(s.Messages.DeclarationMissingInitializer, "const");
        }
       }
      } else if (!t.inFor && i.type !== u.Syntax.Identifier || this.match("=")) {
       this.expect("=");
       o = this.isolateCoverGrammar(this.parseAssignmentExpression);
      }
      return this.finalize(n, new a.VariableDeclarator(i, o));
     };
     e.prototype.parseBindingList = function(e, t) {
      var n = [ this.parseLexicalBinding(e, t) ];
      while (this.match(",")) {
       this.nextToken();
       n.push(this.parseLexicalBinding(e, t));
      }
      return n;
     };
     e.prototype.isLexicalDeclaration = function() {
      var e = this.scanner.saveState();
      this.scanner.scanComments();
      var t = this.scanner.lex();
      this.scanner.restoreState(e);
      return t.type === 3 || t.type === 7 && t.value === "[" || t.type === 7 && t.value === "{" || t.type === 4 && t.value === "let" || t.type === 4 && t.value === "yield";
     };
     e.prototype.parseLexicalDeclaration = function(e) {
      var t = this.createNode();
      var n = this.nextToken().value;
      r.assert(n === "let" || n === "const", "Lexical declaration must be either let or const");
      var i = this.parseBindingList(n, e);
      this.consumeSemicolon();
      return this.finalize(t, new a.VariableDeclaration(i, n));
     };
     e.prototype.parseBindingRestElement = function(e, t) {
      var n = this.createNode();
      this.expect("...");
      var r = this.parsePattern(e, t);
      return this.finalize(n, new a.RestElement(r));
     };
     e.prototype.parseArrayPattern = function(e, t) {
      var n = this.createNode();
      this.expect("[");
      var r = [];
      while (!this.match("]")) {
       if (this.match(",")) {
        this.nextToken();
        r.push(null);
       } else {
        if (this.match("...")) {
         r.push(this.parseBindingRestElement(e, t));
         break;
        } else {
         r.push(this.parsePatternWithDefault(e, t));
        }
        if (!this.match("]")) {
         this.expect(",");
        }
       }
      }
      this.expect("]");
      return this.finalize(n, new a.ArrayPattern(r));
     };
     e.prototype.parsePropertyPattern = function(e, t) {
      var n = this.createNode();
      var r = false;
      var i = false;
      var s = false;
      var o;
      var u;
      if (this.lookahead.type === 3) {
       var c = this.lookahead;
       o = this.parseVariableIdentifier();
       var l = this.finalize(n, new a.Identifier(c.value));
       if (this.match("=")) {
        e.push(c);
        i = true;
        this.nextToken();
        var h = this.parseAssignmentExpression();
        u = this.finalize(this.startNode(c), new a.AssignmentPattern(l, h));
       } else if (!this.match(":")) {
        e.push(c);
        i = true;
        u = l;
       } else {
        this.expect(":");
        u = this.parsePatternWithDefault(e, t);
       }
      } else {
       r = this.match("[");
       o = this.parseObjectPropertyKey();
       this.expect(":");
       u = this.parsePatternWithDefault(e, t);
      }
      return this.finalize(n, new a.Property("init", o, r, u, s, i));
     };
     e.prototype.parseObjectPattern = function(e, t) {
      var n = this.createNode();
      var r = [];
      this.expect("{");
      while (!this.match("}")) {
       r.push(this.parsePropertyPattern(e, t));
       if (!this.match("}")) {
        this.expect(",");
       }
      }
      this.expect("}");
      return this.finalize(n, new a.ObjectPattern(r));
     };
     e.prototype.parsePattern = function(e, t) {
      var n;
      if (this.match("[")) {
       n = this.parseArrayPattern(e, t);
      } else if (this.match("{")) {
       n = this.parseObjectPattern(e, t);
      } else {
       if (this.matchKeyword("let") && (t === "const" || t === "let")) {
        this.tolerateUnexpectedToken(this.lookahead, s.Messages.LetInLexicalBinding);
       }
       e.push(this.lookahead);
       n = this.parseVariableIdentifier(t);
      }
      return n;
     };
     e.prototype.parsePatternWithDefault = function(e, t) {
      var n = this.lookahead;
      var r = this.parsePattern(e, t);
      if (this.match("=")) {
       this.nextToken();
       var i = this.context.allowYield;
       this.context.allowYield = true;
       var s = this.isolateCoverGrammar(this.parseAssignmentExpression);
       this.context.allowYield = i;
       r = this.finalize(this.startNode(n), new a.AssignmentPattern(r, s));
      }
      return r;
     };
     e.prototype.parseVariableIdentifier = function(e) {
      var t = this.createNode();
      var n = this.nextToken();
      if (n.type === 4 && n.value === "yield") {
       if (this.context.strict) {
        this.tolerateUnexpectedToken(n, s.Messages.StrictReservedWord);
       } else if (!this.context.allowYield) {
        this.throwUnexpectedToken(n);
       }
      } else if (n.type !== 3) {
       if (this.context.strict && n.type === 4 && this.scanner.isStrictModeReservedWord(n.value)) {
        this.tolerateUnexpectedToken(n, s.Messages.StrictReservedWord);
       } else {
        if (this.context.strict || n.value !== "let" || e !== "var") {
         this.throwUnexpectedToken(n);
        }
       }
      } else if ((this.context.isModule || this.context.await) && n.type === 3 && n.value === "await") {
       this.tolerateUnexpectedToken(n);
      }
      return this.finalize(t, new a.Identifier(n.value));
     };
     e.prototype.parseVariableDeclaration = function(e) {
      var t = this.createNode();
      var n = [];
      var r = this.parsePattern(n, "var");
      if (this.context.strict && r.type === u.Syntax.Identifier) {
       if (this.scanner.isRestrictedWord(r.name)) {
        this.tolerateError(s.Messages.StrictVarName);
       }
      }
      var i = null;
      if (this.match("=")) {
       this.nextToken();
       i = this.isolateCoverGrammar(this.parseAssignmentExpression);
      } else if (r.type !== u.Syntax.Identifier && !e.inFor) {
       this.expect("=");
      }
      return this.finalize(t, new a.VariableDeclarator(r, i));
     };
     e.prototype.parseVariableDeclarationList = function(e) {
      var t = {
       inFor: e.inFor
      };
      var n = [];
      n.push(this.parseVariableDeclaration(t));
      while (this.match(",")) {
       this.nextToken();
       n.push(this.parseVariableDeclaration(t));
      }
      return n;
     };
     e.prototype.parseVariableStatement = function() {
      var e = this.createNode();
      this.expectKeyword("var");
      var t = this.parseVariableDeclarationList({
       inFor: false
      });
      this.consumeSemicolon();
      return this.finalize(e, new a.VariableDeclaration(t, "var"));
     };
     e.prototype.parseEmptyStatement = function() {
      var e = this.createNode();
      this.expect(";");
      return this.finalize(e, new a.EmptyStatement());
     };
     e.prototype.parseExpressionStatement = function() {
      var e = this.createNode();
      var t = this.parseExpression();
      this.consumeSemicolon();
      return this.finalize(e, new a.ExpressionStatement(t));
     };
     e.prototype.parseIfClause = function() {
      if (this.context.strict && this.matchKeyword("function")) {
       this.tolerateError(s.Messages.StrictFunction);
      }
      return this.parseStatement();
     };
     e.prototype.parseIfStatement = function() {
      var e = this.createNode();
      var t;
      var n = null;
      this.expectKeyword("if");
      this.expect("(");
      var r = this.parseExpression();
      if (!this.match(")") && this.config.tolerant) {
       this.tolerateUnexpectedToken(this.nextToken());
       t = this.finalize(this.createNode(), new a.EmptyStatement());
      } else {
       this.expect(")");
       t = this.parseIfClause();
       if (this.matchKeyword("else")) {
        this.nextToken();
        n = this.parseIfClause();
       }
      }
      return this.finalize(e, new a.IfStatement(r, t, n));
     };
     e.prototype.parseDoWhileStatement = function() {
      var e = this.createNode();
      this.expectKeyword("do");
      var t = this.context.inIteration;
      this.context.inIteration = true;
      var n = this.parseStatement();
      this.context.inIteration = t;
      this.expectKeyword("while");
      this.expect("(");
      var r = this.parseExpression();
      if (!this.match(")") && this.config.tolerant) {
       this.tolerateUnexpectedToken(this.nextToken());
      } else {
       this.expect(")");
       if (this.match(";")) {
        this.nextToken();
       }
      }
      return this.finalize(e, new a.DoWhileStatement(n, r));
     };
     e.prototype.parseWhileStatement = function() {
      var e = this.createNode();
      var t;
      this.expectKeyword("while");
      this.expect("(");
      var n = this.parseExpression();
      if (!this.match(")") && this.config.tolerant) {
       this.tolerateUnexpectedToken(this.nextToken());
       t = this.finalize(this.createNode(), new a.EmptyStatement());
      } else {
       this.expect(")");
       var r = this.context.inIteration;
       this.context.inIteration = true;
       t = this.parseStatement();
       this.context.inIteration = r;
      }
      return this.finalize(e, new a.WhileStatement(n, t));
     };
     e.prototype.parseForStatement = function() {
      var e = null;
      var t = null;
      var n = null;
      var r = true;
      var i, o;
      var c = this.createNode();
      this.expectKeyword("for");
      this.expect("(");
      if (this.match(";")) {
       this.nextToken();
      } else {
       if (this.matchKeyword("var")) {
        e = this.createNode();
        this.nextToken();
        var l = this.context.allowIn;
        this.context.allowIn = false;
        var h = this.parseVariableDeclarationList({
         inFor: true
        });
        this.context.allowIn = l;
        if (h.length === 1 && this.matchKeyword("in")) {
         var f = h[0];
         if (f.init && (f.id.type === u.Syntax.ArrayPattern || f.id.type === u.Syntax.ObjectPattern || this.context.strict)) {
          this.tolerateError(s.Messages.ForInOfLoopInitializer, "for-in");
         }
         e = this.finalize(e, new a.VariableDeclaration(h, "var"));
         this.nextToken();
         i = e;
         o = this.parseExpression();
         e = null;
        } else if (h.length === 1 && h[0].init === null && this.matchContextualKeyword("of")) {
         e = this.finalize(e, new a.VariableDeclaration(h, "var"));
         this.nextToken();
         i = e;
         o = this.parseAssignmentExpression();
         e = null;
         r = false;
        } else {
         e = this.finalize(e, new a.VariableDeclaration(h, "var"));
         this.expect(";");
        }
       } else if (this.matchKeyword("const") || this.matchKeyword("let")) {
        e = this.createNode();
        var p = this.nextToken().value;
        if (!this.context.strict && this.lookahead.value === "in") {
         e = this.finalize(e, new a.Identifier(p));
         this.nextToken();
         i = e;
         o = this.parseExpression();
         e = null;
        } else {
         var l = this.context.allowIn;
         this.context.allowIn = false;
         var h = this.parseBindingList(p, {
          inFor: true
         });
         this.context.allowIn = l;
         if (h.length === 1 && h[0].init === null && this.matchKeyword("in")) {
          e = this.finalize(e, new a.VariableDeclaration(h, p));
          this.nextToken();
          i = e;
          o = this.parseExpression();
          e = null;
         } else if (h.length === 1 && h[0].init === null && this.matchContextualKeyword("of")) {
          e = this.finalize(e, new a.VariableDeclaration(h, p));
          this.nextToken();
          i = e;
          o = this.parseAssignmentExpression();
          e = null;
          r = false;
         } else {
          this.consumeSemicolon();
          e = this.finalize(e, new a.VariableDeclaration(h, p));
         }
        }
       } else {
        var d = this.lookahead;
        var l = this.context.allowIn;
        this.context.allowIn = false;
        e = this.inheritCoverGrammar(this.parseAssignmentExpression);
        this.context.allowIn = l;
        if (this.matchKeyword("in")) {
         if (!this.context.isAssignmentTarget || e.type === u.Syntax.AssignmentExpression) {
          this.tolerateError(s.Messages.InvalidLHSInForIn);
         }
         this.nextToken();
         this.reinterpretExpressionAsPattern(e);
         i = e;
         o = this.parseExpression();
         e = null;
        } else if (this.matchContextualKeyword("of")) {
         if (!this.context.isAssignmentTarget || e.type === u.Syntax.AssignmentExpression) {
          this.tolerateError(s.Messages.InvalidLHSInForLoop);
         }
         this.nextToken();
         this.reinterpretExpressionAsPattern(e);
         i = e;
         o = this.parseAssignmentExpression();
         e = null;
         r = false;
        } else {
         if (this.match(",")) {
          var m = [ e ];
          while (this.match(",")) {
           this.nextToken();
           m.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
          }
          e = this.finalize(this.startNode(d), new a.SequenceExpression(m));
         }
         this.expect(";");
        }
       }
      }
      if (typeof i === "undefined") {
       if (!this.match(";")) {
        t = this.parseExpression();
       }
       this.expect(";");
       if (!this.match(")")) {
        n = this.parseExpression();
       }
      }
      var v;
      if (!this.match(")") && this.config.tolerant) {
       this.tolerateUnexpectedToken(this.nextToken());
       v = this.finalize(this.createNode(), new a.EmptyStatement());
      } else {
       this.expect(")");
       var g = this.context.inIteration;
       this.context.inIteration = true;
       v = this.isolateCoverGrammar(this.parseStatement);
       this.context.inIteration = g;
      }
      return typeof i === "undefined" ? this.finalize(c, new a.ForStatement(e, t, n, v)) : r ? this.finalize(c, new a.ForInStatement(i, o, v)) : this.finalize(c, new a.ForOfStatement(i, o, v));
     };
     e.prototype.parseContinueStatement = function() {
      var e = this.createNode();
      this.expectKeyword("continue");
      var t = null;
      if (this.lookahead.type === 3 && !this.hasLineTerminator) {
       var n = this.parseVariableIdentifier();
       t = n;
       var r = "$" + n.name;
       if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, r)) {
        this.throwError(s.Messages.UnknownLabel, n.name);
       }
      }
      this.consumeSemicolon();
      if (t === null && !this.context.inIteration) {
       this.throwError(s.Messages.IllegalContinue);
      }
      return this.finalize(e, new a.ContinueStatement(t));
     };
     e.prototype.parseBreakStatement = function() {
      var e = this.createNode();
      this.expectKeyword("break");
      var t = null;
      if (this.lookahead.type === 3 && !this.hasLineTerminator) {
       var n = this.parseVariableIdentifier();
       var r = "$" + n.name;
       if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, r)) {
        this.throwError(s.Messages.UnknownLabel, n.name);
       }
       t = n;
      }
      this.consumeSemicolon();
      if (t === null && !this.context.inIteration && !this.context.inSwitch) {
       this.throwError(s.Messages.IllegalBreak);
      }
      return this.finalize(e, new a.BreakStatement(t));
     };
     e.prototype.parseReturnStatement = function() {
      if (!this.context.inFunctionBody) {
       this.tolerateError(s.Messages.IllegalReturn);
      }
      var e = this.createNode();
      this.expectKeyword("return");
      var t = !this.match(";") && !this.match("}") && !this.hasLineTerminator && this.lookahead.type !== 2;
      var n = t ? this.parseExpression() : null;
      this.consumeSemicolon();
      return this.finalize(e, new a.ReturnStatement(n));
     };
     e.prototype.parseWithStatement = function() {
      if (this.context.strict) {
       this.tolerateError(s.Messages.StrictModeWith);
      }
      var e = this.createNode();
      var t;
      this.expectKeyword("with");
      this.expect("(");
      var n = this.parseExpression();
      if (!this.match(")") && this.config.tolerant) {
       this.tolerateUnexpectedToken(this.nextToken());
       t = this.finalize(this.createNode(), new a.EmptyStatement());
      } else {
       this.expect(")");
       t = this.parseStatement();
      }
      return this.finalize(e, new a.WithStatement(n, t));
     };
     e.prototype.parseSwitchCase = function() {
      var e = this.createNode();
      var t;
      if (this.matchKeyword("default")) {
       this.nextToken();
       t = null;
      } else {
       this.expectKeyword("case");
       t = this.parseExpression();
      }
      this.expect(":");
      var n = [];
      while (true) {
       if (this.match("}") || this.matchKeyword("default") || this.matchKeyword("case")) {
        break;
       }
       n.push(this.parseStatementListItem());
      }
      return this.finalize(e, new a.SwitchCase(t, n));
     };
     e.prototype.parseSwitchStatement = function() {
      var e = this.createNode();
      this.expectKeyword("switch");
      this.expect("(");
      var t = this.parseExpression();
      this.expect(")");
      var n = this.context.inSwitch;
      this.context.inSwitch = true;
      var r = [];
      var i = false;
      this.expect("{");
      while (true) {
       if (this.match("}")) {
        break;
       }
       var o = this.parseSwitchCase();
       if (o.test === null) {
        if (i) {
         this.throwError(s.Messages.MultipleDefaultsInSwitch);
        }
        i = true;
       }
       r.push(o);
      }
      this.expect("}");
      this.context.inSwitch = n;
      return this.finalize(e, new a.SwitchStatement(t, r));
     };
     e.prototype.parseLabelledStatement = function() {
      var e = this.createNode();
      var t = this.parseExpression();
      var n;
      if (t.type === u.Syntax.Identifier && this.match(":")) {
       this.nextToken();
       var r = t;
       var i = "$" + r.name;
       if (Object.prototype.hasOwnProperty.call(this.context.labelSet, i)) {
        this.throwError(s.Messages.Redeclaration, "Label", r.name);
       }
       this.context.labelSet[i] = true;
       var o = void 0;
       if (this.matchKeyword("class")) {
        this.tolerateUnexpectedToken(this.lookahead);
        o = this.parseClassDeclaration();
       } else if (this.matchKeyword("function")) {
        var c = this.lookahead;
        var l = this.parseFunctionDeclaration();
        if (this.context.strict) {
         this.tolerateUnexpectedToken(c, s.Messages.StrictFunction);
        } else if (l.generator) {
         this.tolerateUnexpectedToken(c, s.Messages.GeneratorInLegacyContext);
        }
        o = l;
       } else {
        o = this.parseStatement();
       }
       delete this.context.labelSet[i];
       n = new a.LabeledStatement(r, o);
      } else {
       this.consumeSemicolon();
       n = new a.ExpressionStatement(t);
      }
      return this.finalize(e, n);
     };
     e.prototype.parseThrowStatement = function() {
      var e = this.createNode();
      this.expectKeyword("throw");
      if (this.hasLineTerminator) {
       this.throwError(s.Messages.NewlineAfterThrow);
      }
      var t = this.parseExpression();
      this.consumeSemicolon();
      return this.finalize(e, new a.ThrowStatement(t));
     };
     e.prototype.parseCatchClause = function() {
      var e = this.createNode();
      this.expectKeyword("catch");
      this.expect("(");
      if (this.match(")")) {
       this.throwUnexpectedToken(this.lookahead);
      }
      var t = [];
      var n = this.parsePattern(t);
      var r = {};
      for (var i = 0; i < t.length; i++) {
       var o = "$" + t[i].value;
       if (Object.prototype.hasOwnProperty.call(r, o)) {
        this.tolerateError(s.Messages.DuplicateBinding, t[i].value);
       }
       r[o] = true;
      }
      if (this.context.strict && n.type === u.Syntax.Identifier) {
       if (this.scanner.isRestrictedWord(n.name)) {
        this.tolerateError(s.Messages.StrictCatchVariable);
       }
      }
      this.expect(")");
      var c = this.parseBlock();
      return this.finalize(e, new a.CatchClause(n, c));
     };
     e.prototype.parseFinallyClause = function() {
      this.expectKeyword("finally");
      return this.parseBlock();
     };
     e.prototype.parseTryStatement = function() {
      var e = this.createNode();
      this.expectKeyword("try");
      var t = this.parseBlock();
      var n = this.matchKeyword("catch") ? this.parseCatchClause() : null;
      var r = this.matchKeyword("finally") ? this.parseFinallyClause() : null;
      if (!n && !r) {
       this.throwError(s.Messages.NoCatchOrFinally);
      }
      return this.finalize(e, new a.TryStatement(t, n, r));
     };
     e.prototype.parseDebuggerStatement = function() {
      var e = this.createNode();
      this.expectKeyword("debugger");
      this.consumeSemicolon();
      return this.finalize(e, new a.DebuggerStatement());
     };
     e.prototype.parseStatement = function() {
      var e;
      switch (this.lookahead.type) {
      case 1:
      case 5:
      case 6:
      case 8:
      case 10:
      case 9:
       e = this.parseExpressionStatement();
       break;

      case 7:
       var t = this.lookahead.value;
       if (t === "{") {
        e = this.parseBlock();
       } else if (t === "(") {
        e = this.parseExpressionStatement();
       } else if (t === ";") {
        e = this.parseEmptyStatement();
       } else {
        e = this.parseExpressionStatement();
       }
       break;

      case 3:
       e = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
       break;

      case 4:
       switch (this.lookahead.value) {
       case "break":
        e = this.parseBreakStatement();
        break;

       case "continue":
        e = this.parseContinueStatement();
        break;

       case "debugger":
        e = this.parseDebuggerStatement();
        break;

       case "do":
        e = this.parseDoWhileStatement();
        break;

       case "for":
        e = this.parseForStatement();
        break;

       case "function":
        e = this.parseFunctionDeclaration();
        break;

       case "if":
        e = this.parseIfStatement();
        break;

       case "return":
        e = this.parseReturnStatement();
        break;

       case "switch":
        e = this.parseSwitchStatement();
        break;

       case "throw":
        e = this.parseThrowStatement();
        break;

       case "try":
        e = this.parseTryStatement();
        break;

       case "var":
        e = this.parseVariableStatement();
        break;

       case "while":
        e = this.parseWhileStatement();
        break;

       case "with":
        e = this.parseWithStatement();
        break;

       default:
        e = this.parseExpressionStatement();
        break;
       }
       break;

      default:
       e = this.throwUnexpectedToken(this.lookahead);
      }
      return e;
     };
     e.prototype.parseFunctionSourceElements = function() {
      var e = this.createNode();
      this.expect("{");
      var t = this.parseDirectivePrologues();
      var n = this.context.labelSet;
      var r = this.context.inIteration;
      var i = this.context.inSwitch;
      var s = this.context.inFunctionBody;
      this.context.labelSet = {};
      this.context.inIteration = false;
      this.context.inSwitch = false;
      this.context.inFunctionBody = true;
      while (this.lookahead.type !== 2) {
       if (this.match("}")) {
        break;
       }
       t.push(this.parseStatementListItem());
      }
      this.expect("}");
      this.context.labelSet = n;
      this.context.inIteration = r;
      this.context.inSwitch = i;
      this.context.inFunctionBody = s;
      return this.finalize(e, new a.BlockStatement(t));
     };
     e.prototype.validateParam = function(e, t, n) {
      var r = "$" + n;
      if (this.context.strict) {
       if (this.scanner.isRestrictedWord(n)) {
        e.stricted = t;
        e.message = s.Messages.StrictParamName;
       }
       if (Object.prototype.hasOwnProperty.call(e.paramSet, r)) {
        e.stricted = t;
        e.message = s.Messages.StrictParamDupe;
       }
      } else if (!e.firstRestricted) {
       if (this.scanner.isRestrictedWord(n)) {
        e.firstRestricted = t;
        e.message = s.Messages.StrictParamName;
       } else if (this.scanner.isStrictModeReservedWord(n)) {
        e.firstRestricted = t;
        e.message = s.Messages.StrictReservedWord;
       } else if (Object.prototype.hasOwnProperty.call(e.paramSet, r)) {
        e.stricted = t;
        e.message = s.Messages.StrictParamDupe;
       }
      }
      if (typeof Object.defineProperty === "function") {
       Object.defineProperty(e.paramSet, r, {
        value: true,
        enumerable: true,
        writable: true,
        configurable: true
       });
      } else {
       e.paramSet[r] = true;
      }
     };
     e.prototype.parseRestElement = function(e) {
      var t = this.createNode();
      this.expect("...");
      var n = this.parsePattern(e);
      if (this.match("=")) {
       this.throwError(s.Messages.DefaultRestParameter);
      }
      if (!this.match(")")) {
       this.throwError(s.Messages.ParameterAfterRestParameter);
      }
      return this.finalize(t, new a.RestElement(n));
     };
     e.prototype.parseFormalParameter = function(e) {
      var t = [];
      var n = this.match("...") ? this.parseRestElement(t) : this.parsePatternWithDefault(t);
      for (var r = 0; r < t.length; r++) {
       this.validateParam(e, t[r], t[r].value);
      }
      e.simple = e.simple && n instanceof a.Identifier;
      e.params.push(n);
     };
     e.prototype.parseFormalParameters = function(e) {
      var t;
      t = {
       simple: true,
       params: [],
       firstRestricted: e
      };
      this.expect("(");
      if (!this.match(")")) {
       t.paramSet = {};
       while (this.lookahead.type !== 2) {
        this.parseFormalParameter(t);
        if (this.match(")")) {
         break;
        }
        this.expect(",");
        if (this.match(")")) {
         break;
        }
       }
      }
      this.expect(")");
      return {
       simple: t.simple,
       params: t.params,
       stricted: t.stricted,
       firstRestricted: t.firstRestricted,
       message: t.message
      };
     };
     e.prototype.matchAsyncFunction = function() {
      var e = this.matchContextualKeyword("async");
      if (e) {
       var t = this.scanner.saveState();
       this.scanner.scanComments();
       var n = this.scanner.lex();
       this.scanner.restoreState(t);
       e = t.lineNumber === n.lineNumber && n.type === 4 && n.value === "function";
      }
      return e;
     };
     e.prototype.parseFunctionDeclaration = function(e) {
      var t = this.createNode();
      var n = this.matchContextualKeyword("async");
      if (n) {
       this.nextToken();
      }
      this.expectKeyword("function");
      var r = n ? false : this.match("*");
      if (r) {
       this.nextToken();
      }
      var i;
      var o = null;
      var u = null;
      if (!e || !this.match("(")) {
       var c = this.lookahead;
       o = this.parseVariableIdentifier();
       if (this.context.strict) {
        if (this.scanner.isRestrictedWord(c.value)) {
         this.tolerateUnexpectedToken(c, s.Messages.StrictFunctionName);
        }
       } else {
        if (this.scanner.isRestrictedWord(c.value)) {
         u = c;
         i = s.Messages.StrictFunctionName;
        } else if (this.scanner.isStrictModeReservedWord(c.value)) {
         u = c;
         i = s.Messages.StrictReservedWord;
        }
       }
      }
      var l = this.context.await;
      var h = this.context.allowYield;
      this.context.await = n;
      this.context.allowYield = !r;
      var f = this.parseFormalParameters(u);
      var p = f.params;
      var d = f.stricted;
      u = f.firstRestricted;
      if (f.message) {
       i = f.message;
      }
      var m = this.context.strict;
      var v = this.context.allowStrictDirective;
      this.context.allowStrictDirective = f.simple;
      var g = this.parseFunctionSourceElements();
      if (this.context.strict && u) {
       this.throwUnexpectedToken(u, i);
      }
      if (this.context.strict && d) {
       this.tolerateUnexpectedToken(d, i);
      }
      this.context.strict = m;
      this.context.allowStrictDirective = v;
      this.context.await = l;
      this.context.allowYield = h;
      return n ? this.finalize(t, new a.AsyncFunctionDeclaration(o, p, g)) : this.finalize(t, new a.FunctionDeclaration(o, p, g, r));
     };
     e.prototype.parseFunctionExpression = function() {
      var e = this.createNode();
      var t = this.matchContextualKeyword("async");
      if (t) {
       this.nextToken();
      }
      this.expectKeyword("function");
      var n = t ? false : this.match("*");
      if (n) {
       this.nextToken();
      }
      var r;
      var i = null;
      var o;
      var u = this.context.await;
      var c = this.context.allowYield;
      this.context.await = t;
      this.context.allowYield = !n;
      if (!this.match("(")) {
       var l = this.lookahead;
       i = !this.context.strict && !n && this.matchKeyword("yield") ? this.parseIdentifierName() : this.parseVariableIdentifier();
       if (this.context.strict) {
        if (this.scanner.isRestrictedWord(l.value)) {
         this.tolerateUnexpectedToken(l, s.Messages.StrictFunctionName);
        }
       } else {
        if (this.scanner.isRestrictedWord(l.value)) {
         o = l;
         r = s.Messages.StrictFunctionName;
        } else if (this.scanner.isStrictModeReservedWord(l.value)) {
         o = l;
         r = s.Messages.StrictReservedWord;
        }
       }
      }
      var h = this.parseFormalParameters(o);
      var f = h.params;
      var p = h.stricted;
      o = h.firstRestricted;
      if (h.message) {
       r = h.message;
      }
      var d = this.context.strict;
      var m = this.context.allowStrictDirective;
      this.context.allowStrictDirective = h.simple;
      var v = this.parseFunctionSourceElements();
      if (this.context.strict && o) {
       this.throwUnexpectedToken(o, r);
      }
      if (this.context.strict && p) {
       this.tolerateUnexpectedToken(p, r);
      }
      this.context.strict = d;
      this.context.allowStrictDirective = m;
      this.context.await = u;
      this.context.allowYield = c;
      return t ? this.finalize(e, new a.AsyncFunctionExpression(i, f, v)) : this.finalize(e, new a.FunctionExpression(i, f, v, n));
     };
     e.prototype.parseDirective = function() {
      var e = this.lookahead;
      var t = this.createNode();
      var n = this.parseExpression();
      var r = n.type === u.Syntax.Literal ? this.getTokenRaw(e).slice(1, -1) : null;
      this.consumeSemicolon();
      return this.finalize(t, r ? new a.Directive(n, r) : new a.ExpressionStatement(n));
     };
     e.prototype.parseDirectivePrologues = function() {
      var e = null;
      var t = [];
      while (true) {
       var n = this.lookahead;
       if (n.type !== 8) {
        break;
       }
       var r = this.parseDirective();
       t.push(r);
       var i = r.directive;
       if (typeof i !== "string") {
        break;
       }
       if (i === "use strict") {
        this.context.strict = true;
        if (e) {
         this.tolerateUnexpectedToken(e, s.Messages.StrictOctalLiteral);
        }
        if (!this.context.allowStrictDirective) {
         this.tolerateUnexpectedToken(n, s.Messages.IllegalLanguageModeDirective);
        }
       } else {
        if (!e && n.octal) {
         e = n;
        }
       }
      }
      return t;
     };
     e.prototype.qualifiedPropertyName = function(e) {
      switch (e.type) {
      case 3:
      case 8:
      case 1:
      case 5:
      case 6:
      case 4:
       return true;

      case 7:
       return e.value === "[";

      default:
       break;
      }
      return false;
     };
     e.prototype.parseGetterMethod = function() {
      var e = this.createNode();
      var t = false;
      var n = this.context.allowYield;
      this.context.allowYield = false;
      var r = this.parseFormalParameters();
      if (r.params.length > 0) {
       this.tolerateError(s.Messages.BadGetterArity);
      }
      var i = this.parsePropertyMethod(r);
      this.context.allowYield = n;
      return this.finalize(e, new a.FunctionExpression(null, r.params, i, t));
     };
     e.prototype.parseSetterMethod = function() {
      var e = this.createNode();
      var t = false;
      var n = this.context.allowYield;
      this.context.allowYield = false;
      var r = this.parseFormalParameters();
      if (r.params.length !== 1) {
       this.tolerateError(s.Messages.BadSetterArity);
      } else if (r.params[0] instanceof a.RestElement) {
       this.tolerateError(s.Messages.BadSetterRestParameter);
      }
      var i = this.parsePropertyMethod(r);
      this.context.allowYield = n;
      return this.finalize(e, new a.FunctionExpression(null, r.params, i, t));
     };
     e.prototype.parseGeneratorMethod = function() {
      var e = this.createNode();
      var t = true;
      var n = this.context.allowYield;
      this.context.allowYield = true;
      var r = this.parseFormalParameters();
      this.context.allowYield = false;
      var i = this.parsePropertyMethod(r);
      this.context.allowYield = n;
      return this.finalize(e, new a.FunctionExpression(null, r.params, i, t));
     };
     e.prototype.isStartOfExpression = function() {
      var e = true;
      var t = this.lookahead.value;
      switch (this.lookahead.type) {
      case 7:
       e = t === "[" || t === "(" || t === "{" || t === "+" || t === "-" || t === "!" || t === "~" || t === "++" || t === "--" || t === "/" || t === "/=";
       break;

      case 4:
       e = t === "class" || t === "delete" || t === "function" || t === "let" || t === "new" || t === "super" || t === "this" || t === "typeof" || t === "void" || t === "yield";
       break;

      default:
       break;
      }
      return e;
     };
     e.prototype.parseYieldExpression = function() {
      var e = this.createNode();
      this.expectKeyword("yield");
      var t = null;
      var n = false;
      if (!this.hasLineTerminator) {
       var r = this.context.allowYield;
       this.context.allowYield = false;
       n = this.match("*");
       if (n) {
        this.nextToken();
        t = this.parseAssignmentExpression();
       } else if (this.isStartOfExpression()) {
        t = this.parseAssignmentExpression();
       }
       this.context.allowYield = r;
      }
      return this.finalize(e, new a.YieldExpression(t, n));
     };
     e.prototype.parseClassElement = function(e) {
      var t = this.lookahead;
      var n = this.createNode();
      var r = "";
      var i = null;
      var o = null;
      var u = false;
      var c = false;
      var l = false;
      var h = false;
      if (this.match("*")) {
       this.nextToken();
      } else {
       u = this.match("[");
       i = this.parseObjectPropertyKey();
       var f = i;
       if (f.name === "static" && (this.qualifiedPropertyName(this.lookahead) || this.match("*"))) {
        t = this.lookahead;
        l = true;
        u = this.match("[");
        if (this.match("*")) {
         this.nextToken();
        } else {
         i = this.parseObjectPropertyKey();
        }
       }
       if (t.type === 3 && !this.hasLineTerminator && t.value === "async") {
        var p = this.lookahead.value;
        if (p !== ":" && p !== "(" && p !== "*") {
         h = true;
         t = this.lookahead;
         i = this.parseObjectPropertyKey();
         if (t.type === 3) {
          if (t.value === "get" || t.value === "set") {
           this.tolerateUnexpectedToken(t);
          } else if (t.value === "constructor") {
           this.tolerateUnexpectedToken(t, s.Messages.ConstructorIsAsync);
          }
         }
        }
       }
      }
      var d = this.qualifiedPropertyName(this.lookahead);
      if (t.type === 3) {
       if (t.value === "get" && d) {
        r = "get";
        u = this.match("[");
        i = this.parseObjectPropertyKey();
        this.context.allowYield = false;
        o = this.parseGetterMethod();
       } else if (t.value === "set" && d) {
        r = "set";
        u = this.match("[");
        i = this.parseObjectPropertyKey();
        o = this.parseSetterMethod();
       }
      } else if (t.type === 7 && t.value === "*" && d) {
       r = "init";
       u = this.match("[");
       i = this.parseObjectPropertyKey();
       o = this.parseGeneratorMethod();
       c = true;
      }
      if (!r && i && this.match("(")) {
       r = "init";
       o = h ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
       c = true;
      }
      if (!r) {
       this.throwUnexpectedToken(this.lookahead);
      }
      if (r === "init") {
       r = "method";
      }
      if (!u) {
       if (l && this.isPropertyKey(i, "prototype")) {
        this.throwUnexpectedToken(t, s.Messages.StaticPrototype);
       }
       if (!l && this.isPropertyKey(i, "constructor")) {
        if (r !== "method" || !c || o && o.generator) {
         this.throwUnexpectedToken(t, s.Messages.ConstructorSpecialMethod);
        }
        if (e.value) {
         this.throwUnexpectedToken(t, s.Messages.DuplicateConstructor);
        } else {
         e.value = true;
        }
        r = "constructor";
       }
      }
      return this.finalize(n, new a.MethodDefinition(i, u, o, r, l));
     };
     e.prototype.parseClassElementList = function() {
      var e = [];
      var t = {
       value: false
      };
      this.expect("{");
      while (!this.match("}")) {
       if (this.match(";")) {
        this.nextToken();
       } else {
        e.push(this.parseClassElement(t));
       }
      }
      this.expect("}");
      return e;
     };
     e.prototype.parseClassBody = function() {
      var e = this.createNode();
      var t = this.parseClassElementList();
      return this.finalize(e, new a.ClassBody(t));
     };
     e.prototype.parseClassDeclaration = function(e) {
      var t = this.createNode();
      var n = this.context.strict;
      this.context.strict = true;
      this.expectKeyword("class");
      var r = e && this.lookahead.type !== 3 ? null : this.parseVariableIdentifier();
      var i = null;
      if (this.matchKeyword("extends")) {
       this.nextToken();
       i = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
      }
      var s = this.parseClassBody();
      this.context.strict = n;
      return this.finalize(t, new a.ClassDeclaration(r, i, s));
     };
     e.prototype.parseClassExpression = function() {
      var e = this.createNode();
      var t = this.context.strict;
      this.context.strict = true;
      this.expectKeyword("class");
      var n = this.lookahead.type === 3 ? this.parseVariableIdentifier() : null;
      var r = null;
      if (this.matchKeyword("extends")) {
       this.nextToken();
       r = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
      }
      var i = this.parseClassBody();
      this.context.strict = t;
      return this.finalize(e, new a.ClassExpression(n, r, i));
     };
     e.prototype.parseModule = function() {
      this.context.strict = true;
      this.context.isModule = true;
      var e = this.createNode();
      var t = this.parseDirectivePrologues();
      while (this.lookahead.type !== 2) {
       t.push(this.parseStatementListItem());
      }
      return this.finalize(e, new a.Module(t));
     };
     e.prototype.parseScript = function() {
      var e = this.createNode();
      var t = this.parseDirectivePrologues();
      while (this.lookahead.type !== 2) {
       t.push(this.parseStatementListItem());
      }
      return this.finalize(e, new a.Script(t));
     };
     e.prototype.parseModuleSpecifier = function() {
      var e = this.createNode();
      if (this.lookahead.type !== 8) {
       this.throwError(s.Messages.InvalidModuleSpecifier);
      }
      var t = this.nextToken();
      var n = this.getTokenRaw(t);
      return this.finalize(e, new a.Literal(t.value, n));
     };
     e.prototype.parseImportSpecifier = function() {
      var e = this.createNode();
      var t;
      var n;
      if (this.lookahead.type === 3) {
       t = this.parseVariableIdentifier();
       n = t;
       if (this.matchContextualKeyword("as")) {
        this.nextToken();
        n = this.parseVariableIdentifier();
       }
      } else {
       t = this.parseIdentifierName();
       n = t;
       if (this.matchContextualKeyword("as")) {
        this.nextToken();
        n = this.parseVariableIdentifier();
       } else {
        this.throwUnexpectedToken(this.nextToken());
       }
      }
      return this.finalize(e, new a.ImportSpecifier(n, t));
     };
     e.prototype.parseNamedImports = function() {
      this.expect("{");
      var e = [];
      while (!this.match("}")) {
       e.push(this.parseImportSpecifier());
       if (!this.match("}")) {
        this.expect(",");
       }
      }
      this.expect("}");
      return e;
     };
     e.prototype.parseImportDefaultSpecifier = function() {
      var e = this.createNode();
      var t = this.parseIdentifierName();
      return this.finalize(e, new a.ImportDefaultSpecifier(t));
     };
     e.prototype.parseImportNamespaceSpecifier = function() {
      var e = this.createNode();
      this.expect("*");
      if (!this.matchContextualKeyword("as")) {
       this.throwError(s.Messages.NoAsAfterImportNamespace);
      }
      this.nextToken();
      var t = this.parseIdentifierName();
      return this.finalize(e, new a.ImportNamespaceSpecifier(t));
     };
     e.prototype.parseImportDeclaration = function() {
      if (this.context.inFunctionBody) {
       this.throwError(s.Messages.IllegalImportDeclaration);
      }
      var e = this.createNode();
      this.expectKeyword("import");
      var t;
      var n = [];
      if (this.lookahead.type === 8) {
       t = this.parseModuleSpecifier();
      } else {
       if (this.match("{")) {
        n = n.concat(this.parseNamedImports());
       } else if (this.match("*")) {
        n.push(this.parseImportNamespaceSpecifier());
       } else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword("default")) {
        n.push(this.parseImportDefaultSpecifier());
        if (this.match(",")) {
         this.nextToken();
         if (this.match("*")) {
          n.push(this.parseImportNamespaceSpecifier());
         } else if (this.match("{")) {
          n = n.concat(this.parseNamedImports());
         } else {
          this.throwUnexpectedToken(this.lookahead);
         }
        }
       } else {
        this.throwUnexpectedToken(this.nextToken());
       }
       if (!this.matchContextualKeyword("from")) {
        var r = this.lookahead.value ? s.Messages.UnexpectedToken : s.Messages.MissingFromClause;
        this.throwError(r, this.lookahead.value);
       }
       this.nextToken();
       t = this.parseModuleSpecifier();
      }
      this.consumeSemicolon();
      return this.finalize(e, new a.ImportDeclaration(n, t));
     };
     e.prototype.parseExportSpecifier = function() {
      var e = this.createNode();
      var t = this.parseIdentifierName();
      var n = t;
      if (this.matchContextualKeyword("as")) {
       this.nextToken();
       n = this.parseIdentifierName();
      }
      return this.finalize(e, new a.ExportSpecifier(t, n));
     };
     e.prototype.parseExportDeclaration = function() {
      if (this.context.inFunctionBody) {
       this.throwError(s.Messages.IllegalExportDeclaration);
      }
      var e = this.createNode();
      this.expectKeyword("export");
      var t;
      if (this.matchKeyword("default")) {
       this.nextToken();
       if (this.matchKeyword("function")) {
        var n = this.parseFunctionDeclaration(true);
        t = this.finalize(e, new a.ExportDefaultDeclaration(n));
       } else if (this.matchKeyword("class")) {
        var n = this.parseClassDeclaration(true);
        t = this.finalize(e, new a.ExportDefaultDeclaration(n));
       } else if (this.matchContextualKeyword("async")) {
        var n = this.matchAsyncFunction() ? this.parseFunctionDeclaration(true) : this.parseAssignmentExpression();
        t = this.finalize(e, new a.ExportDefaultDeclaration(n));
       } else {
        if (this.matchContextualKeyword("from")) {
         this.throwError(s.Messages.UnexpectedToken, this.lookahead.value);
        }
        var n = this.match("{") ? this.parseObjectInitializer() : this.match("[") ? this.parseArrayInitializer() : this.parseAssignmentExpression();
        this.consumeSemicolon();
        t = this.finalize(e, new a.ExportDefaultDeclaration(n));
       }
      } else if (this.match("*")) {
       this.nextToken();
       if (!this.matchContextualKeyword("from")) {
        var r = this.lookahead.value ? s.Messages.UnexpectedToken : s.Messages.MissingFromClause;
        this.throwError(r, this.lookahead.value);
       }
       this.nextToken();
       var i = this.parseModuleSpecifier();
       this.consumeSemicolon();
       t = this.finalize(e, new a.ExportAllDeclaration(i));
      } else if (this.lookahead.type === 4) {
       var n = void 0;
       switch (this.lookahead.value) {
       case "let":
       case "const":
        n = this.parseLexicalDeclaration({
         inFor: false
        });
        break;

       case "var":
       case "class":
       case "function":
        n = this.parseStatementListItem();
        break;

       default:
        this.throwUnexpectedToken(this.lookahead);
       }
       t = this.finalize(e, new a.ExportNamedDeclaration(n, [], null));
      } else if (this.matchAsyncFunction()) {
       var n = this.parseFunctionDeclaration();
       t = this.finalize(e, new a.ExportNamedDeclaration(n, [], null));
      } else {
       var o = [];
       var u = null;
       var c = false;
       this.expect("{");
       while (!this.match("}")) {
        c = c || this.matchKeyword("default");
        o.push(this.parseExportSpecifier());
        if (!this.match("}")) {
         this.expect(",");
        }
       }
       this.expect("}");
       if (this.matchContextualKeyword("from")) {
        this.nextToken();
        u = this.parseModuleSpecifier();
        this.consumeSemicolon();
       } else if (c) {
        var r = this.lookahead.value ? s.Messages.UnexpectedToken : s.Messages.MissingFromClause;
        this.throwError(r, this.lookahead.value);
       } else {
        this.consumeSemicolon();
       }
       t = this.finalize(e, new a.ExportNamedDeclaration(null, o, u));
      }
      return t;
     };
     return e;
    }();
    t.Parser = h;
   }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    function n(e, t) {
     if (!e) {
      throw new Error("ASSERT: " + t);
     }
    }
    t.assert = n;
   }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    var n = function() {
     function e() {
      this.errors = [];
      this.tolerant = false;
     }
     e.prototype.recordError = function(e) {
      this.errors.push(e);
     };
     e.prototype.tolerate = function(e) {
      if (this.tolerant) {
       this.recordError(e);
      } else {
       throw e;
      }
     };
     e.prototype.constructError = function(e, t) {
      var n = new Error(e);
      try {
       throw n;
      } catch (e) {
       if (Object.create && Object.defineProperty) {
        n = Object.create(e);
        Object.defineProperty(n, "column", {
         value: t
        });
       }
      }
      return n;
     };
     e.prototype.createError = function(e, t, n, r) {
      var i = "Line " + t + ": " + r;
      var s = this.constructError(i, n);
      s.index = e;
      s.lineNumber = t;
      s.description = r;
      return s;
     };
     e.prototype.throwError = function(e, t, n, r) {
      throw this.createError(e, t, n, r);
     };
     e.prototype.tolerateError = function(e, t, n, r) {
      var i = this.createError(e, t, n, r);
      if (this.tolerant) {
       this.recordError(i);
      } else {
       throw i;
      }
     };
     return e;
    }();
    t.ErrorHandler = n;
   }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    t.Messages = {
     BadGetterArity: "Getter must not have any formal parameters",
     BadSetterArity: "Setter must have exactly one formal parameter",
     BadSetterRestParameter: "Setter function argument must not be a rest parameter",
     ConstructorIsAsync: "Class constructor may not be an async method",
     ConstructorSpecialMethod: "Class constructor may not be an accessor",
     DeclarationMissingInitializer: "Missing initializer in %0 declaration",
     DefaultRestParameter: "Unexpected token =",
     DuplicateBinding: "Duplicate binding %0",
     DuplicateConstructor: "A class may only have one constructor",
     DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals",
     ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
     GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts",
     IllegalBreak: "Illegal break statement",
     IllegalContinue: "Illegal continue statement",
     IllegalExportDeclaration: "Unexpected token",
     IllegalImportDeclaration: "Unexpected token",
     IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
     IllegalReturn: "Illegal return statement",
     InvalidEscapedReservedWord: "Keyword must not contain escaped characters",
     InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
     InvalidLHSInAssignment: "Invalid left-hand side in assignment",
     InvalidLHSInForIn: "Invalid left-hand side in for-in",
     InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
     InvalidModuleSpecifier: "Unexpected token",
     InvalidRegExp: "Invalid regular expression",
     LetInLexicalBinding: "let is disallowed as a lexically bound name",
     MissingFromClause: "Unexpected token",
     MultipleDefaultsInSwitch: "More than one default clause in switch statement",
     NewlineAfterThrow: "Illegal newline after throw",
     NoAsAfterImportNamespace: "Unexpected token",
     NoCatchOrFinally: "Missing catch or finally after try",
     ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
     Redeclaration: "%0 '%1' has already been declared",
     StaticPrototype: "Classes may not have static property named prototype",
     StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
     StrictDelete: "Delete of an unqualified identifier in strict mode.",
     StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
     StrictFunctionName: "Function name may not be eval or arguments in strict mode",
     StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
     StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
     StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
     StrictModeWith: "Strict mode code may not include a with statement",
     StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
     StrictParamDupe: "Strict mode function may not have duplicate parameter names",
     StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
     StrictReservedWord: "Use of future reserved word in strict mode",
     StrictVarName: "Variable name may not be eval or arguments in strict mode",
     TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
     UnexpectedEOS: "Unexpected end of input",
     UnexpectedIdentifier: "Unexpected identifier",
     UnexpectedNumber: "Unexpected number",
     UnexpectedReserved: "Unexpected reserved word",
     UnexpectedString: "Unexpected string",
     UnexpectedTemplate: "Unexpected quasi %0",
     UnexpectedToken: "Unexpected token %0",
     UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
     UnknownLabel: "Undefined label '%0'",
     UnterminatedRegExp: "Invalid regular expression: missing /"
    };
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    var r = n(9);
    var i = n(4);
    var s = n(11);
    function a(e) {
     return "0123456789abcdef".indexOf(e.toLowerCase());
    }
    function o(e) {
     return "01234567".indexOf(e);
    }
    var u = function() {
     function e(e, t) {
      this.source = e;
      this.errorHandler = t;
      this.trackComment = false;
      this.length = e.length;
      this.index = 0;
      this.lineNumber = e.length > 0 ? 1 : 0;
      this.lineStart = 0;
      this.curlyStack = [];
     }
     e.prototype.saveState = function() {
      return {
       index: this.index,
       lineNumber: this.lineNumber,
       lineStart: this.lineStart
      };
     };
     e.prototype.restoreState = function(e) {
      this.index = e.index;
      this.lineNumber = e.lineNumber;
      this.lineStart = e.lineStart;
     };
     e.prototype.eof = function() {
      return this.index >= this.length;
     };
     e.prototype.throwUnexpectedToken = function(e) {
      if (e === void 0) {
       e = s.Messages.UnexpectedTokenIllegal;
      }
      return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, e);
     };
     e.prototype.tolerateUnexpectedToken = function(e) {
      if (e === void 0) {
       e = s.Messages.UnexpectedTokenIllegal;
      }
      this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, e);
     };
     e.prototype.skipSingleLineComment = function(e) {
      var t = [];
      var n, r;
      if (this.trackComment) {
       t = [];
       n = this.index - e;
       r = {
        start: {
         line: this.lineNumber,
         column: this.index - this.lineStart - e
        },
        end: {}
       };
      }
      while (!this.eof()) {
       var s = this.source.charCodeAt(this.index);
       ++this.index;
       if (i.Character.isLineTerminator(s)) {
        if (this.trackComment) {
         r.end = {
          line: this.lineNumber,
          column: this.index - this.lineStart - 1
         };
         var a = {
          multiLine: false,
          slice: [ n + e, this.index - 1 ],
          range: [ n, this.index - 1 ],
          loc: r
         };
         t.push(a);
        }
        if (s === 13 && this.source.charCodeAt(this.index) === 10) {
         ++this.index;
        }
        ++this.lineNumber;
        this.lineStart = this.index;
        return t;
       }
      }
      if (this.trackComment) {
       r.end = {
        line: this.lineNumber,
        column: this.index - this.lineStart
       };
       var a = {
        multiLine: false,
        slice: [ n + e, this.index ],
        range: [ n, this.index ],
        loc: r
       };
       t.push(a);
      }
      return t;
     };
     e.prototype.skipMultiLineComment = function() {
      var e = [];
      var t, n;
      if (this.trackComment) {
       e = [];
       t = this.index - 2;
       n = {
        start: {
         line: this.lineNumber,
         column: this.index - this.lineStart - 2
        },
        end: {}
       };
      }
      while (!this.eof()) {
       var r = this.source.charCodeAt(this.index);
       if (i.Character.isLineTerminator(r)) {
        if (r === 13 && this.source.charCodeAt(this.index + 1) === 10) {
         ++this.index;
        }
        ++this.lineNumber;
        ++this.index;
        this.lineStart = this.index;
       } else if (r === 42) {
        if (this.source.charCodeAt(this.index + 1) === 47) {
         this.index += 2;
         if (this.trackComment) {
          n.end = {
           line: this.lineNumber,
           column: this.index - this.lineStart
          };
          var s = {
           multiLine: true,
           slice: [ t + 2, this.index - 2 ],
           range: [ t, this.index ],
           loc: n
          };
          e.push(s);
         }
         return e;
        }
        ++this.index;
       } else {
        ++this.index;
       }
      }
      if (this.trackComment) {
       n.end = {
        line: this.lineNumber,
        column: this.index - this.lineStart
       };
       var s = {
        multiLine: true,
        slice: [ t + 2, this.index ],
        range: [ t, this.index ],
        loc: n
       };
       e.push(s);
      }
      this.tolerateUnexpectedToken();
      return e;
     };
     e.prototype.scanComments = function() {
      var e;
      if (this.trackComment) {
       e = [];
      }
      var t = this.index === 0;
      while (!this.eof()) {
       var n = this.source.charCodeAt(this.index);
       if (i.Character.isWhiteSpace(n)) {
        ++this.index;
       } else if (i.Character.isLineTerminator(n)) {
        ++this.index;
        if (n === 13 && this.source.charCodeAt(this.index) === 10) {
         ++this.index;
        }
        ++this.lineNumber;
        this.lineStart = this.index;
        t = true;
       } else if (n === 47) {
        n = this.source.charCodeAt(this.index + 1);
        if (n === 47) {
         this.index += 2;
         var r = this.skipSingleLineComment(2);
         if (this.trackComment) {
          e = e.concat(r);
         }
         t = true;
        } else if (n === 42) {
         this.index += 2;
         var r = this.skipMultiLineComment();
         if (this.trackComment) {
          e = e.concat(r);
         }
        } else {
         break;
        }
       } else if (t && n === 45) {
        if (this.source.charCodeAt(this.index + 1) === 45 && this.source.charCodeAt(this.index + 2) === 62) {
         this.index += 3;
         var r = this.skipSingleLineComment(3);
         if (this.trackComment) {
          e = e.concat(r);
         }
        } else {
         break;
        }
       } else if (n === 60) {
        if (this.source.slice(this.index + 1, this.index + 4) === "!--") {
         this.index += 4;
         var r = this.skipSingleLineComment(4);
         if (this.trackComment) {
          e = e.concat(r);
         }
        } else {
         break;
        }
       } else {
        break;
       }
      }
      return e;
     };
     e.prototype.isFutureReservedWord = function(e) {
      switch (e) {
      case "enum":
      case "export":
      case "import":
      case "super":
       return true;

      default:
       return false;
      }
     };
     e.prototype.isStrictModeReservedWord = function(e) {
      switch (e) {
      case "implements":
      case "interface":
      case "package":
      case "private":
      case "protected":
      case "public":
      case "static":
      case "yield":
      case "let":
       return true;

      default:
       return false;
      }
     };
     e.prototype.isRestrictedWord = function(e) {
      return e === "eval" || e === "arguments";
     };
     e.prototype.isKeyword = function(e) {
      switch (e.length) {
      case 2:
       return e === "if" || e === "in" || e === "do";

      case 3:
       return e === "var" || e === "for" || e === "new" || e === "try" || e === "let";

      case 4:
       return e === "this" || e === "else" || e === "case" || e === "void" || e === "with" || e === "enum";

      case 5:
       return e === "while" || e === "break" || e === "catch" || e === "throw" || e === "const" || e === "yield" || e === "class" || e === "super";

      case 6:
       return e === "return" || e === "typeof" || e === "delete" || e === "switch" || e === "export" || e === "import";

      case 7:
       return e === "default" || e === "finally" || e === "extends";

      case 8:
       return e === "function" || e === "continue" || e === "debugger";

      case 10:
       return e === "instanceof";

      default:
       return false;
      }
     };
     e.prototype.codePointAt = function(e) {
      var t = this.source.charCodeAt(e);
      if (t >= 55296 && t <= 56319) {
       var n = this.source.charCodeAt(e + 1);
       if (n >= 56320 && n <= 57343) {
        var r = t;
        t = (r - 55296) * 1024 + n - 56320 + 65536;
       }
      }
      return t;
     };
     e.prototype.scanHexEscape = function(e) {
      var t = e === "u" ? 4 : 2;
      var n = 0;
      for (var r = 0; r < t; ++r) {
       if (!this.eof() && i.Character.isHexDigit(this.source.charCodeAt(this.index))) {
        n = n * 16 + a(this.source[this.index++]);
       } else {
        return null;
       }
      }
      return String.fromCharCode(n);
     };
     e.prototype.scanUnicodeCodePointEscape = function() {
      var e = this.source[this.index];
      var t = 0;
      if (e === "}") {
       this.throwUnexpectedToken();
      }
      while (!this.eof()) {
       e = this.source[this.index++];
       if (!i.Character.isHexDigit(e.charCodeAt(0))) {
        break;
       }
       t = t * 16 + a(e);
      }
      if (t > 1114111 || e !== "}") {
       this.throwUnexpectedToken();
      }
      return i.Character.fromCodePoint(t);
     };
     e.prototype.getIdentifier = function() {
      var e = this.index++;
      while (!this.eof()) {
       var t = this.source.charCodeAt(this.index);
       if (t === 92) {
        this.index = e;
        return this.getComplexIdentifier();
       } else if (t >= 55296 && t < 57343) {
        this.index = e;
        return this.getComplexIdentifier();
       }
       if (i.Character.isIdentifierPart(t)) {
        ++this.index;
       } else {
        break;
       }
      }
      return this.source.slice(e, this.index);
     };
     e.prototype.getComplexIdentifier = function() {
      var e = this.codePointAt(this.index);
      var t = i.Character.fromCodePoint(e);
      this.index += t.length;
      var n;
      if (e === 92) {
       if (this.source.charCodeAt(this.index) !== 117) {
        this.throwUnexpectedToken();
       }
       ++this.index;
       if (this.source[this.index] === "{") {
        ++this.index;
        n = this.scanUnicodeCodePointEscape();
       } else {
        n = this.scanHexEscape("u");
        if (n === null || n === "\\" || !i.Character.isIdentifierStart(n.charCodeAt(0))) {
         this.throwUnexpectedToken();
        }
       }
       t = n;
      }
      while (!this.eof()) {
       e = this.codePointAt(this.index);
       if (!i.Character.isIdentifierPart(e)) {
        break;
       }
       n = i.Character.fromCodePoint(e);
       t += n;
       this.index += n.length;
       if (e === 92) {
        t = t.substr(0, t.length - 1);
        if (this.source.charCodeAt(this.index) !== 117) {
         this.throwUnexpectedToken();
        }
        ++this.index;
        if (this.source[this.index] === "{") {
         ++this.index;
         n = this.scanUnicodeCodePointEscape();
        } else {
         n = this.scanHexEscape("u");
         if (n === null || n === "\\" || !i.Character.isIdentifierPart(n.charCodeAt(0))) {
          this.throwUnexpectedToken();
         }
        }
        t += n;
       }
      }
      return t;
     };
     e.prototype.octalToDecimal = function(e) {
      var t = e !== "0";
      var n = o(e);
      if (!this.eof() && i.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
       t = true;
       n = n * 8 + o(this.source[this.index++]);
       if ("0123".indexOf(e) >= 0 && !this.eof() && i.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
        n = n * 8 + o(this.source[this.index++]);
       }
      }
      return {
       code: n,
       octal: t
      };
     };
     e.prototype.scanIdentifier = function() {
      var e;
      var t = this.index;
      var n = this.source.charCodeAt(t) === 92 ? this.getComplexIdentifier() : this.getIdentifier();
      if (n.length === 1) {
       e = 3;
      } else if (this.isKeyword(n)) {
       e = 4;
      } else if (n === "null") {
       e = 5;
      } else if (n === "true" || n === "false") {
       e = 1;
      } else {
       e = 3;
      }
      if (e !== 3 && t + n.length !== this.index) {
       var r = this.index;
       this.index = t;
       this.tolerateUnexpectedToken(s.Messages.InvalidEscapedReservedWord);
       this.index = r;
      }
      return {
       type: e,
       value: n,
       lineNumber: this.lineNumber,
       lineStart: this.lineStart,
       start: t,
       end: this.index
      };
     };
     e.prototype.scanPunctuator = function() {
      var e = this.index;
      var t = this.source[this.index];
      switch (t) {
      case "(":
      case "{":
       if (t === "{") {
        this.curlyStack.push("{");
       }
       ++this.index;
       break;

      case ".":
       ++this.index;
       if (this.source[this.index] === "." && this.source[this.index + 1] === ".") {
        this.index += 2;
        t = "...";
       }
       break;

      case "}":
       ++this.index;
       this.curlyStack.pop();
       break;

      case ")":
      case ";":
      case ",":
      case "[":
      case "]":
      case ":":
      case "?":
      case "~":
       ++this.index;
       break;

      default:
       t = this.source.substr(this.index, 4);
       if (t === ">>>=") {
        this.index += 4;
       } else {
        t = t.substr(0, 3);
        if (t === "===" || t === "!==" || t === ">>>" || t === "<<=" || t === ">>=" || t === "**=") {
         this.index += 3;
        } else {
         t = t.substr(0, 2);
         if (t === "&&" || t === "||" || t === "==" || t === "!=" || t === "+=" || t === "-=" || t === "*=" || t === "/=" || t === "++" || t === "--" || t === "<<" || t === ">>" || t === "&=" || t === "|=" || t === "^=" || t === "%=" || t === "<=" || t === ">=" || t === "=>" || t === "**") {
          this.index += 2;
         } else {
          t = this.source[this.index];
          if ("<>=!+-*%&|^/".indexOf(t) >= 0) {
           ++this.index;
          }
         }
        }
       }
      }
      if (this.index === e) {
       this.throwUnexpectedToken();
      }
      return {
       type: 7,
       value: t,
       lineNumber: this.lineNumber,
       lineStart: this.lineStart,
       start: e,
       end: this.index
      };
     };
     e.prototype.scanHexLiteral = function(e) {
      var t = "";
      while (!this.eof()) {
       if (!i.Character.isHexDigit(this.source.charCodeAt(this.index))) {
        break;
       }
       t += this.source[this.index++];
      }
      if (t.length === 0) {
       this.throwUnexpectedToken();
      }
      if (i.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
       this.throwUnexpectedToken();
      }
      return {
       type: 6,
       value: parseInt("0x" + t, 16),
       lineNumber: this.lineNumber,
       lineStart: this.lineStart,
       start: e,
       end: this.index
      };
     };
     e.prototype.scanBinaryLiteral = function(e) {
      var t = "";
      var n;
      while (!this.eof()) {
       n = this.source[this.index];
       if (n !== "0" && n !== "1") {
        break;
       }
       t += this.source[this.index++];
      }
      if (t.length === 0) {
       this.throwUnexpectedToken();
      }
      if (!this.eof()) {
       n = this.source.charCodeAt(this.index);
       if (i.Character.isIdentifierStart(n) || i.Character.isDecimalDigit(n)) {
        this.throwUnexpectedToken();
       }
      }
      return {
       type: 6,
       value: parseInt(t, 2),
       lineNumber: this.lineNumber,
       lineStart: this.lineStart,
       start: e,
       end: this.index
      };
     };
     e.prototype.scanOctalLiteral = function(e, t) {
      var n = "";
      var r = false;
      if (i.Character.isOctalDigit(e.charCodeAt(0))) {
       r = true;
       n = "0" + this.source[this.index++];
      } else {
       ++this.index;
      }
      while (!this.eof()) {
       if (!i.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
        break;
       }
       n += this.source[this.index++];
      }
      if (!r && n.length === 0) {
       this.throwUnexpectedToken();
      }
      if (i.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || i.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
       this.throwUnexpectedToken();
      }
      return {
       type: 6,
       value: parseInt(n, 8),
       octal: r,
       lineNumber: this.lineNumber,
       lineStart: this.lineStart,
       start: t,
       end: this.index
      };
     };
     e.prototype.isImplicitOctalLiteral = function() {
      for (var e = this.index + 1; e < this.length; ++e) {
       var t = this.source[e];
       if (t === "8" || t === "9") {
        return false;
       }
       if (!i.Character.isOctalDigit(t.charCodeAt(0))) {
        return true;
       }
      }
      return true;
     };
     e.prototype.scanNumericLiteral = function() {
      var e = this.index;
      var t = this.source[e];
      r.assert(i.Character.isDecimalDigit(t.charCodeAt(0)) || t === ".", "Numeric literal must start with a decimal digit or a decimal point");
      var n = "";
      if (t !== ".") {
       n = this.source[this.index++];
       t = this.source[this.index];
       if (n === "0") {
        if (t === "x" || t === "X") {
         ++this.index;
         return this.scanHexLiteral(e);
        }
        if (t === "b" || t === "B") {
         ++this.index;
         return this.scanBinaryLiteral(e);
        }
        if (t === "o" || t === "O") {
         return this.scanOctalLiteral(t, e);
        }
        if (t && i.Character.isOctalDigit(t.charCodeAt(0))) {
         if (this.isImplicitOctalLiteral()) {
          return this.scanOctalLiteral(t, e);
         }
        }
       }
       while (i.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
        n += this.source[this.index++];
       }
       t = this.source[this.index];
      }
      if (t === ".") {
       n += this.source[this.index++];
       while (i.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
        n += this.source[this.index++];
       }
       t = this.source[this.index];
      }
      if (t === "e" || t === "E") {
       n += this.source[this.index++];
       t = this.source[this.index];
       if (t === "+" || t === "-") {
        n += this.source[this.index++];
       }
       if (i.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
        while (i.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
         n += this.source[this.index++];
        }
       } else {
        this.throwUnexpectedToken();
       }
      }
      if (i.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
       this.throwUnexpectedToken();
      }
      return {
       type: 6,
       value: parseFloat(n),
       lineNumber: this.lineNumber,
       lineStart: this.lineStart,
       start: e,
       end: this.index
      };
     };
     e.prototype.scanStringLiteral = function() {
      var e = this.index;
      var t = this.source[e];
      r.assert(t === "'" || t === '"', "String literal must starts with a quote");
      ++this.index;
      var n = false;
      var a = "";
      while (!this.eof()) {
       var o = this.source[this.index++];
       if (o === t) {
        t = "";
        break;
       } else if (o === "\\") {
        o = this.source[this.index++];
        if (!o || !i.Character.isLineTerminator(o.charCodeAt(0))) {
         switch (o) {
         case "u":
          if (this.source[this.index] === "{") {
           ++this.index;
           a += this.scanUnicodeCodePointEscape();
          } else {
           var u = this.scanHexEscape(o);
           if (u === null) {
            this.throwUnexpectedToken();
           }
           a += u;
          }
          break;

         case "x":
          var c = this.scanHexEscape(o);
          if (c === null) {
           this.throwUnexpectedToken(s.Messages.InvalidHexEscapeSequence);
          }
          a += c;
          break;

         case "n":
          a += "\n";
          break;

         case "r":
          a += "\r";
          break;

         case "t":
          a += "\t";
          break;

         case "b":
          a += "\b";
          break;

         case "f":
          a += "\f";
          break;

         case "v":
          a += "\v";
          break;

         case "8":
         case "9":
          a += o;
          this.tolerateUnexpectedToken();
          break;

         default:
          if (o && i.Character.isOctalDigit(o.charCodeAt(0))) {
           var l = this.octalToDecimal(o);
           n = l.octal || n;
           a += String.fromCharCode(l.code);
          } else {
           a += o;
          }
          break;
         }
        } else {
         ++this.lineNumber;
         if (o === "\r" && this.source[this.index] === "\n") {
          ++this.index;
         }
         this.lineStart = this.index;
        }
       } else if (i.Character.isLineTerminator(o.charCodeAt(0))) {
        break;
       } else {
        a += o;
       }
      }
      if (t !== "") {
       this.index = e;
       this.throwUnexpectedToken();
      }
      return {
       type: 8,
       value: a,
       octal: n,
       lineNumber: this.lineNumber,
       lineStart: this.lineStart,
       start: e,
       end: this.index
      };
     };
     e.prototype.scanTemplate = function() {
      var e = "";
      var t = false;
      var n = this.index;
      var r = this.source[n] === "`";
      var a = false;
      var o = 2;
      ++this.index;
      while (!this.eof()) {
       var u = this.source[this.index++];
       if (u === "`") {
        o = 1;
        a = true;
        t = true;
        break;
       } else if (u === "$") {
        if (this.source[this.index] === "{") {
         this.curlyStack.push("${");
         ++this.index;
         t = true;
         break;
        }
        e += u;
       } else if (u === "\\") {
        u = this.source[this.index++];
        if (!i.Character.isLineTerminator(u.charCodeAt(0))) {
         switch (u) {
         case "n":
          e += "\n";
          break;

         case "r":
          e += "\r";
          break;

         case "t":
          e += "\t";
          break;

         case "u":
          if (this.source[this.index] === "{") {
           ++this.index;
           e += this.scanUnicodeCodePointEscape();
          } else {
           var c = this.index;
           var l = this.scanHexEscape(u);
           if (l !== null) {
            e += l;
           } else {
            this.index = c;
            e += u;
           }
          }
          break;

         case "x":
          var h = this.scanHexEscape(u);
          if (h === null) {
           this.throwUnexpectedToken(s.Messages.InvalidHexEscapeSequence);
          }
          e += h;
          break;

         case "b":
          e += "\b";
          break;

         case "f":
          e += "\f";
          break;

         case "v":
          e += "\v";
          break;

         default:
          if (u === "0") {
           if (i.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
            this.throwUnexpectedToken(s.Messages.TemplateOctalLiteral);
           }
           e += "\0";
          } else if (i.Character.isOctalDigit(u.charCodeAt(0))) {
           this.throwUnexpectedToken(s.Messages.TemplateOctalLiteral);
          } else {
           e += u;
          }
          break;
         }
        } else {
         ++this.lineNumber;
         if (u === "\r" && this.source[this.index] === "\n") {
          ++this.index;
         }
         this.lineStart = this.index;
        }
       } else if (i.Character.isLineTerminator(u.charCodeAt(0))) {
        ++this.lineNumber;
        if (u === "\r" && this.source[this.index] === "\n") {
         ++this.index;
        }
        this.lineStart = this.index;
        e += "\n";
       } else {
        e += u;
       }
      }
      if (!t) {
       this.throwUnexpectedToken();
      }
      if (!r) {
       this.curlyStack.pop();
      }
      return {
       type: 10,
       value: this.source.slice(n + 1, this.index - o),
       cooked: e,
       head: r,
       tail: a,
       lineNumber: this.lineNumber,
       lineStart: this.lineStart,
       start: n,
       end: this.index
      };
     };
     e.prototype.testRegExp = function(e, t) {
      var n = "￿";
      var r = e;
      var i = this;
      if (t.indexOf("u") >= 0) {
       r = r.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function(e, t, r) {
        var a = parseInt(t || r, 16);
        if (a > 1114111) {
         i.throwUnexpectedToken(s.Messages.InvalidRegExp);
        }
        if (a <= 65535) {
         return String.fromCharCode(a);
        }
        return n;
       }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, n);
      }
      try {
       RegExp(r);
      } catch (e) {
       this.throwUnexpectedToken(s.Messages.InvalidRegExp);
      }
      try {
       return new RegExp(e, t);
      } catch (e) {
       return null;
      }
     };
     e.prototype.scanRegExpBody = function() {
      var e = this.source[this.index];
      r.assert(e === "/", "Regular expression literal must start with a slash");
      var t = this.source[this.index++];
      var n = false;
      var a = false;
      while (!this.eof()) {
       e = this.source[this.index++];
       t += e;
       if (e === "\\") {
        e = this.source[this.index++];
        if (i.Character.isLineTerminator(e.charCodeAt(0))) {
         this.throwUnexpectedToken(s.Messages.UnterminatedRegExp);
        }
        t += e;
       } else if (i.Character.isLineTerminator(e.charCodeAt(0))) {
        this.throwUnexpectedToken(s.Messages.UnterminatedRegExp);
       } else if (n) {
        if (e === "]") {
         n = false;
        }
       } else {
        if (e === "/") {
         a = true;
         break;
        } else if (e === "[") {
         n = true;
        }
       }
      }
      if (!a) {
       this.throwUnexpectedToken(s.Messages.UnterminatedRegExp);
      }
      return t.substr(1, t.length - 2);
     };
     e.prototype.scanRegExpFlags = function() {
      var e = "";
      var t = "";
      while (!this.eof()) {
       var n = this.source[this.index];
       if (!i.Character.isIdentifierPart(n.charCodeAt(0))) {
        break;
       }
       ++this.index;
       if (n === "\\" && !this.eof()) {
        n = this.source[this.index];
        if (n === "u") {
         ++this.index;
         var r = this.index;
         var s = this.scanHexEscape("u");
         if (s !== null) {
          t += s;
          for (e += "\\u"; r < this.index; ++r) {
           e += this.source[r];
          }
         } else {
          this.index = r;
          t += "u";
          e += "\\u";
         }
         this.tolerateUnexpectedToken();
        } else {
         e += "\\";
         this.tolerateUnexpectedToken();
        }
       } else {
        t += n;
        e += n;
       }
      }
      return t;
     };
     e.prototype.scanRegExp = function() {
      var e = this.index;
      var t = this.scanRegExpBody();
      var n = this.scanRegExpFlags();
      var r = this.testRegExp(t, n);
      return {
       type: 9,
       value: "",
       pattern: t,
       flags: n,
       regex: r,
       lineNumber: this.lineNumber,
       lineStart: this.lineStart,
       start: e,
       end: this.index
      };
     };
     e.prototype.lex = function() {
      if (this.eof()) {
       return {
        type: 2,
        value: "",
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: this.index,
        end: this.index
       };
      }
      var e = this.source.charCodeAt(this.index);
      if (i.Character.isIdentifierStart(e)) {
       return this.scanIdentifier();
      }
      if (e === 40 || e === 41 || e === 59) {
       return this.scanPunctuator();
      }
      if (e === 39 || e === 34) {
       return this.scanStringLiteral();
      }
      if (e === 46) {
       if (i.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
        return this.scanNumericLiteral();
       }
       return this.scanPunctuator();
      }
      if (i.Character.isDecimalDigit(e)) {
       return this.scanNumericLiteral();
      }
      if (e === 96 || e === 125 && this.curlyStack[this.curlyStack.length - 1] === "${") {
       return this.scanTemplate();
      }
      if (e >= 55296 && e < 57343) {
       if (i.Character.isIdentifierStart(this.codePointAt(this.index))) {
        return this.scanIdentifier();
       }
      }
      return this.scanPunctuator();
     };
     return e;
    }();
    t.Scanner = u;
   }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    t.TokenName = {};
    t.TokenName[1] = "Boolean";
    t.TokenName[2] = "<end>";
    t.TokenName[3] = "Identifier";
    t.TokenName[4] = "Keyword";
    t.TokenName[5] = "Null";
    t.TokenName[6] = "Numeric";
    t.TokenName[7] = "Punctuator";
    t.TokenName[8] = "String";
    t.TokenName[9] = "RegularExpression";
    t.TokenName[10] = "Template";
   }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    t.XHTMLEntities = {
     quot: '"',
     amp: "&",
     apos: "'",
     gt: ">",
     nbsp: " ",
     iexcl: "¡",
     cent: "¢",
     pound: "£",
     curren: "¤",
     yen: "¥",
     brvbar: "¦",
     sect: "§",
     uml: "¨",
     copy: "©",
     ordf: "ª",
     laquo: "«",
     not: "¬",
     shy: "­",
     reg: "®",
     macr: "¯",
     deg: "°",
     plusmn: "±",
     sup2: "²",
     sup3: "³",
     acute: "´",
     micro: "µ",
     para: "¶",
     middot: "·",
     cedil: "¸",
     sup1: "¹",
     ordm: "º",
     raquo: "»",
     frac14: "¼",
     frac12: "½",
     frac34: "¾",
     iquest: "¿",
     Agrave: "À",
     Aacute: "Á",
     Acirc: "Â",
     Atilde: "Ã",
     Auml: "Ä",
     Aring: "Å",
     AElig: "Æ",
     Ccedil: "Ç",
     Egrave: "È",
     Eacute: "É",
     Ecirc: "Ê",
     Euml: "Ë",
     Igrave: "Ì",
     Iacute: "Í",
     Icirc: "Î",
     Iuml: "Ï",
     ETH: "Ð",
     Ntilde: "Ñ",
     Ograve: "Ò",
     Oacute: "Ó",
     Ocirc: "Ô",
     Otilde: "Õ",
     Ouml: "Ö",
     times: "×",
     Oslash: "Ø",
     Ugrave: "Ù",
     Uacute: "Ú",
     Ucirc: "Û",
     Uuml: "Ü",
     Yacute: "Ý",
     THORN: "Þ",
     szlig: "ß",
     agrave: "à",
     aacute: "á",
     acirc: "â",
     atilde: "ã",
     auml: "ä",
     aring: "å",
     aelig: "æ",
     ccedil: "ç",
     egrave: "è",
     eacute: "é",
     ecirc: "ê",
     euml: "ë",
     igrave: "ì",
     iacute: "í",
     icirc: "î",
     iuml: "ï",
     eth: "ð",
     ntilde: "ñ",
     ograve: "ò",
     oacute: "ó",
     ocirc: "ô",
     otilde: "õ",
     ouml: "ö",
     divide: "÷",
     oslash: "ø",
     ugrave: "ù",
     uacute: "ú",
     ucirc: "û",
     uuml: "ü",
     yacute: "ý",
     thorn: "þ",
     yuml: "ÿ",
     OElig: "Œ",
     oelig: "œ",
     Scaron: "Š",
     scaron: "š",
     Yuml: "Ÿ",
     fnof: "ƒ",
     circ: "ˆ",
     tilde: "˜",
     Alpha: "Α",
     Beta: "Β",
     Gamma: "Γ",
     Delta: "Δ",
     Epsilon: "Ε",
     Zeta: "Ζ",
     Eta: "Η",
     Theta: "Θ",
     Iota: "Ι",
     Kappa: "Κ",
     Lambda: "Λ",
     Mu: "Μ",
     Nu: "Ν",
     Xi: "Ξ",
     Omicron: "Ο",
     Pi: "Π",
     Rho: "Ρ",
     Sigma: "Σ",
     Tau: "Τ",
     Upsilon: "Υ",
     Phi: "Φ",
     Chi: "Χ",
     Psi: "Ψ",
     Omega: "Ω",
     alpha: "α",
     beta: "β",
     gamma: "γ",
     delta: "δ",
     epsilon: "ε",
     zeta: "ζ",
     eta: "η",
     theta: "θ",
     iota: "ι",
     kappa: "κ",
     lambda: "λ",
     mu: "μ",
     nu: "ν",
     xi: "ξ",
     omicron: "ο",
     pi: "π",
     rho: "ρ",
     sigmaf: "ς",
     sigma: "σ",
     tau: "τ",
     upsilon: "υ",
     phi: "φ",
     chi: "χ",
     psi: "ψ",
     omega: "ω",
     thetasym: "ϑ",
     upsih: "ϒ",
     piv: "ϖ",
     ensp: " ",
     emsp: " ",
     thinsp: " ",
     zwnj: "‌",
     zwj: "‍",
     lrm: "‎",
     rlm: "‏",
     ndash: "–",
     mdash: "—",
     lsquo: "‘",
     rsquo: "’",
     sbquo: "‚",
     ldquo: "“",
     rdquo: "”",
     bdquo: "„",
     dagger: "†",
     Dagger: "‡",
     bull: "•",
     hellip: "…",
     permil: "‰",
     prime: "′",
     Prime: "″",
     lsaquo: "‹",
     rsaquo: "›",
     oline: "‾",
     frasl: "⁄",
     euro: "€",
     image: "ℑ",
     weierp: "℘",
     real: "ℜ",
     trade: "™",
     alefsym: "ℵ",
     larr: "←",
     uarr: "↑",
     rarr: "→",
     darr: "↓",
     harr: "↔",
     crarr: "↵",
     lArr: "⇐",
     uArr: "⇑",
     rArr: "⇒",
     dArr: "⇓",
     hArr: "⇔",
     forall: "∀",
     part: "∂",
     exist: "∃",
     empty: "∅",
     nabla: "∇",
     isin: "∈",
     notin: "∉",
     ni: "∋",
     prod: "∏",
     sum: "∑",
     minus: "−",
     lowast: "∗",
     radic: "√",
     prop: "∝",
     infin: "∞",
     ang: "∠",
     and: "∧",
     or: "∨",
     cap: "∩",
     cup: "∪",
     int: "∫",
     there4: "∴",
     sim: "∼",
     cong: "≅",
     asymp: "≈",
     ne: "≠",
     equiv: "≡",
     le: "≤",
     ge: "≥",
     sub: "⊂",
     sup: "⊃",
     nsub: "⊄",
     sube: "⊆",
     supe: "⊇",
     oplus: "⊕",
     otimes: "⊗",
     perp: "⊥",
     sdot: "⋅",
     lceil: "⌈",
     rceil: "⌉",
     lfloor: "⌊",
     rfloor: "⌋",
     loz: "◊",
     spades: "♠",
     clubs: "♣",
     hearts: "♥",
     diams: "♦",
     lang: "⟨",
     rang: "⟩"
    };
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: true
    });
    var r = n(10);
    var i = n(12);
    var s = n(13);
    var a = function() {
     function e() {
      this.values = [];
      this.curly = this.paren = -1;
     }
     e.prototype.beforeFunctionExpression = function(e) {
      return [ "(", "{", "[", "in", "typeof", "instanceof", "new", "return", "case", "delete", "throw", "void", "=", "+=", "-=", "*=", "**=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", ",", "+", "-", "*", "**", "/", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=", "<=", "<", ">", "!=", "!==" ].indexOf(e) >= 0;
     };
     e.prototype.isRegexStart = function() {
      var e = this.values[this.values.length - 1];
      var t = e !== null;
      switch (e) {
      case "this":
      case "]":
       t = false;
       break;

      case ")":
       var n = this.values[this.paren - 1];
       t = n === "if" || n === "while" || n === "for" || n === "with";
       break;

      case "}":
       t = false;
       if (this.values[this.curly - 3] === "function") {
        var r = this.values[this.curly - 4];
        t = r ? !this.beforeFunctionExpression(r) : false;
       } else if (this.values[this.curly - 4] === "function") {
        var r = this.values[this.curly - 5];
        t = r ? !this.beforeFunctionExpression(r) : true;
       }
       break;

      default:
       break;
      }
      return t;
     };
     e.prototype.push = function(e) {
      if (e.type === 7 || e.type === 4) {
       if (e.value === "{") {
        this.curly = this.values.length;
       } else if (e.value === "(") {
        this.paren = this.values.length;
       }
       this.values.push(e.value);
      } else {
       this.values.push(null);
      }
     };
     return e;
    }();
    var o = function() {
     function e(e, t) {
      this.errorHandler = new r.ErrorHandler();
      this.errorHandler.tolerant = t ? typeof t.tolerant === "boolean" && t.tolerant : false;
      this.scanner = new i.Scanner(e, this.errorHandler);
      this.scanner.trackComment = t ? typeof t.comment === "boolean" && t.comment : false;
      this.trackRange = t ? typeof t.range === "boolean" && t.range : false;
      this.trackLoc = t ? typeof t.loc === "boolean" && t.loc : false;
      this.buffer = [];
      this.reader = new a();
     }
     e.prototype.errors = function() {
      return this.errorHandler.errors;
     };
     e.prototype.getNextToken = function() {
      if (this.buffer.length === 0) {
       var e = this.scanner.scanComments();
       if (this.scanner.trackComment) {
        for (var t = 0; t < e.length; ++t) {
         var n = e[t];
         var r = this.scanner.source.slice(n.slice[0], n.slice[1]);
         var i = {
          type: n.multiLine ? "BlockComment" : "LineComment",
          value: r
         };
         if (this.trackRange) {
          i.range = n.range;
         }
         if (this.trackLoc) {
          i.loc = n.loc;
         }
         this.buffer.push(i);
        }
       }
       if (!this.scanner.eof()) {
        var a = void 0;
        if (this.trackLoc) {
         a = {
          start: {
           line: this.scanner.lineNumber,
           column: this.scanner.index - this.scanner.lineStart
          },
          end: {}
         };
        }
        var o = this.scanner.source[this.scanner.index] === "/" && this.reader.isRegexStart();
        var u = o ? this.scanner.scanRegExp() : this.scanner.lex();
        this.reader.push(u);
        var c = {
         type: s.TokenName[u.type],
         value: this.scanner.source.slice(u.start, u.end)
        };
        if (this.trackRange) {
         c.range = [ u.start, u.end ];
        }
        if (this.trackLoc) {
         a.end = {
          line: this.scanner.lineNumber,
          column: this.scanner.index - this.scanner.lineStart
         };
         c.loc = a;
        }
        if (u.type === 9) {
         var l = u.pattern;
         var h = u.flags;
         c.regex = {
          pattern: l,
          flags: h
         };
        }
        this.buffer.push(c);
       }
      }
      return this.buffer.shift();
     };
     return e;
    }();
    t.Tokenizer = o;
   } ]);
  });
 },
 "+VcB": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r;
  (function(e) {
   function t(e) {
    return {
     dispose: e
    };
   }
   e.create = t;
  })(r = t.Disposable || (t.Disposable = {}));
  var i;
  (function(e) {
   var t = {
    dispose: function() {}
   };
   e.None = function() {
    return t;
   };
  })(i = t.Event || (t.Event = {}));
  var s = function() {
   function e() {}
   e.prototype.add = function(e, t, n) {
    var r = this;
    if (t === void 0) {
     t = null;
    }
    if (!this._callbacks) {
     this._callbacks = [];
     this._contexts = [];
    }
    this._callbacks.push(e);
    this._contexts.push(t);
    if (Array.isArray(n)) {
     n.push({
      dispose: function() {
       return r.remove(e, t);
      }
     });
    }
   };
   e.prototype.remove = function(e, t) {
    if (t === void 0) {
     t = null;
    }
    if (!this._callbacks) {
     return;
    }
    var n = false;
    for (var r = 0, i = this._callbacks.length; r < i; r++) {
     if (this._callbacks[r] === e) {
      if (this._contexts[r] === t) {
       this._callbacks.splice(r, 1);
       this._contexts.splice(r, 1);
       return;
      } else {
       n = true;
      }
     }
    }
    if (n) {
     throw new Error("When adding a listener with a context, you should remove it with the same context");
    }
   };
   e.prototype.invoke = function() {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
     e[t] = arguments[t];
    }
    if (!this._callbacks) {
     return [];
    }
    var n = [], r = this._callbacks.slice(0), i = this._contexts.slice(0);
    for (var s = 0, a = r.length; s < a; s++) {
     try {
      n.push(r[s].apply(i[s], e));
     } catch (e) {
      console.error(e);
     }
    }
    return n;
   };
   e.prototype.isEmpty = function() {
    return !this._callbacks || this._callbacks.length === 0;
   };
   e.prototype.dispose = function() {
    this._callbacks = undefined;
    this._contexts = undefined;
   };
   return e;
  }();
  var a = function() {
   function e(e) {
    this._options = e;
   }
   Object.defineProperty(e.prototype, "event", {
    get: function() {
     var t = this;
     if (!this._event) {
      this._event = function(n, r, i) {
       if (!t._callbacks) {
        t._callbacks = new s();
       }
       if (t._options && t._options.onFirstListenerAdd && t._callbacks.isEmpty()) {
        t._options.onFirstListenerAdd(t);
       }
       t._callbacks.add(n, r);
       var a;
       a = {
        dispose: function() {
         t._callbacks.remove(n, r);
         a.dispose = e._noop;
         if (t._options && t._options.onLastListenerRemove && t._callbacks.isEmpty()) {
          t._options.onLastListenerRemove(t);
         }
        }
       };
       if (Array.isArray(i)) {
        i.push(a);
       }
       return a;
      };
     }
     return this._event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fire = function(e) {
    if (this._callbacks) {
     this._callbacks.invoke.call(this._callbacks, e);
    }
   };
   e.prototype.dispose = function() {
    if (this._callbacks) {
     this._callbacks.dispose();
     this._callbacks = undefined;
    }
   };
   e._noop = function() {};
   return e;
  }();
  t.Emitter = a;
 },
 "+kP4": function(e, t, n) {
  "use strict";
  var r = n("YU9W");
  e.exports = new r({
   include: [ n("yXpz") ],
   implicit: [ n("DIqq"), n("E9v7") ],
   explicit: [ n("J3QK"), n("YzGg"), n("O9M0"), n("xnuB") ]
  });
 },
 "/0p4": function(e, t) {
  e.exports = require("events");
 },
 "/2KN": function(e, t, n) {
  "use strict";
  var r = n("4JhR");
  var i = function() {
   function e(e, t, n, r, i) {
    this.name = e;
    this.buffer = t;
    this.position = n;
    this.line = r;
    this.column = i;
   }
   e.prototype.getSnippet = function(e, t) {
    if (e === void 0) {
     e = 0;
    }
    if (t === void 0) {
     t = 75;
    }
    var n, i, s, a, o;
    if (!this.buffer) {
     return null;
    }
    e = e || 4;
    t = t || 75;
    n = "";
    i = this.position;
    while (i > 0 && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(i - 1))) {
     i -= 1;
     if (this.position - i > t / 2 - 1) {
      n = " ... ";
      i += 5;
      break;
     }
    }
    s = "";
    a = this.position;
    while (a < this.buffer.length && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(a))) {
     a += 1;
     if (a - this.position > t / 2 - 1) {
      s = " ... ";
      a -= 5;
      break;
     }
    }
    o = this.buffer.slice(i, a);
    return r.repeat(" ", e) + n + o + s + "\n" + r.repeat(" ", e + this.position - i + n.length) + "^";
   };
   e.prototype.toString = function(e) {
    if (e === void 0) {
     e = true;
    }
    var t, n = "";
    if (this.name) {
     n += 'in "' + this.name + '" ';
    }
    n += "at line " + (this.line + 1) + ", column " + (this.column + 1);
    if (!e) {
     t = this.getSnippet();
     if (t) {
      n += ":\n" + t;
     }
    }
    return n;
   };
   return e;
  }();
  e.exports = i;
 },
 "/ELh": function(e, t, n) {
  "use strict";
  var r = n("cYFF");
  var i = n("j4xC");
  var s = Object.prototype.hasOwnProperty;
  function a(e) {
   if (null === e) {
    return true;
   }
   if (e.kind != i.Kind.MAP) {
    return false;
   }
   return true;
  }
  function o(e) {
   return null !== e ? e : {};
  }
  e.exports = new r.Type("tag:yaml.org,2002:set", {
   kind: "mapping",
   resolve: a,
   construct: o
  });
 },
 "/XVN": function(e, t, n) {
  "use strict";
  var r = n("IYmx");
  var i = n("wGX6");
  var s = n("Yvw8");
  var a = n("+kP4");
  var o = n("wtHW");
  var u = Object.prototype.hasOwnProperty;
  var c = 1;
  var l = 2;
  var h = 3;
  var f = 4;
  var p = 1;
  var d = 2;
  var m = 3;
  var v = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var g = /[\x85\u2028\u2029]/;
  var y = /[,\[\]\{\}]/;
  var x = /^(?:!|!!|![a-z\-]+!)$/i;
  var C = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function D(e) {
   return e === 10 || e === 13;
  }
  function E(e) {
   return e === 9 || e === 32;
  }
  function b(e) {
   return e === 9 || e === 32 || e === 10 || e === 13;
  }
  function w(e) {
   return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
  }
  function S(e) {
   var t;
   if (48 <= e && e <= 57) {
    return e - 48;
   }
   t = e | 32;
   if (97 <= t && t <= 102) {
    return t - 97 + 10;
   }
   return -1;
  }
  function A(e) {
   if (e === 120) {
    return 2;
   }
   if (e === 117) {
    return 4;
   }
   if (e === 85) {
    return 8;
   }
   return 0;
  }
  function k(e) {
   if (48 <= e && e <= 57) {
    return e - 48;
   }
   return -1;
  }
  function F(e) {
   return e === 48 ? "\0" : e === 97 ? "" : e === 98 ? "\b" : e === 116 ? "\t" : e === 9 ? "\t" : e === 110 ? "\n" : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
  }
  function T(e) {
   if (e <= 65535) {
    return String.fromCharCode(e);
   }
   return String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
  }
  var _ = new Array(256);
  var N = new Array(256);
  for (var O = 0; O < 256; O++) {
   _[O] = F(O) ? 1 : 0;
   N[O] = F(O);
  }
  function P(e, t) {
   this.input = e;
   this.filename = t["filename"] || null;
   this.schema = t["schema"] || o;
   this.onWarning = t["onWarning"] || null;
   this.legacy = t["legacy"] || false;
   this.json = t["json"] || false;
   this.listener = t["listener"] || null;
   this.implicitTypes = this.schema.compiledImplicit;
   this.typeMap = this.schema.compiledTypeMap;
   this.length = e.length;
   this.position = 0;
   this.line = 0;
   this.lineStart = 0;
   this.lineIndent = 0;
   this.documents = [];
  }
  function I(e, t) {
   return new i(t, new s(e.filename, e.input, e.position, e.line, e.position - e.lineStart));
  }
  function M(e, t) {
   throw I(e, t);
  }
  function R(e, t) {
   if (e.onWarning) {
    e.onWarning.call(null, I(e, t));
   }
  }
  var B = {
   YAML: function e(t, n, r) {
    var i, s, a;
    if (t.version !== null) {
     M(t, "duplication of %YAML directive");
    }
    if (r.length !== 1) {
     M(t, "YAML directive accepts exactly one argument");
    }
    i = /^([0-9]+)\.([0-9]+)$/.exec(r[0]);
    if (i === null) {
     M(t, "ill-formed argument of the YAML directive");
    }
    s = parseInt(i[1], 10);
    a = parseInt(i[2], 10);
    if (s !== 1) {
     M(t, "unacceptable YAML version of the document");
    }
    t.version = r[0];
    t.checkLineBreaks = a < 2;
    if (a !== 1 && a !== 2) {
     R(t, "unsupported YAML version of the document");
    }
   },
   TAG: function e(t, n, r) {
    var i, s;
    if (r.length !== 2) {
     M(t, "TAG directive accepts exactly two arguments");
    }
    i = r[0];
    s = r[1];
    if (!x.test(i)) {
     M(t, "ill-formed tag handle (first argument) of the TAG directive");
    }
    if (u.call(t.tagMap, i)) {
     M(t, 'there is a previously declared suffix for "' + i + '" tag handle');
    }
    if (!C.test(s)) {
     M(t, "ill-formed tag prefix (second argument) of the TAG directive");
    }
    t.tagMap[i] = s;
   }
  };
  function L(e, t, n, r) {
   var i, s, a, o;
   if (t < n) {
    o = e.input.slice(t, n);
    if (r) {
     for (i = 0, s = o.length; i < s; i += 1) {
      a = o.charCodeAt(i);
      if (!(a === 9 || 32 <= a && a <= 1114111)) {
       M(e, "expected valid JSON character");
      }
     }
    } else if (v.test(o)) {
     M(e, "the stream contains non-printable characters");
    }
    e.result += o;
   }
  }
  function j(e, t, n, i) {
   var s, a, o, c;
   if (!r.isObject(n)) {
    M(e, "cannot merge mappings; the provided source object is unacceptable");
   }
   s = Object.keys(n);
   for (o = 0, c = s.length; o < c; o += 1) {
    a = s[o];
    if (!u.call(t, a)) {
     t[a] = n[a];
     i[a] = true;
    }
   }
  }
  function q(e, t, n, r, i, s, a, o) {
   var c, l;
   i = String(i);
   if (t === null) {
    t = {};
   }
   if (r === "tag:yaml.org,2002:merge") {
    if (Array.isArray(s)) {
     for (c = 0, l = s.length; c < l; c += 1) {
      j(e, t, s[c], n);
     }
    } else {
     j(e, t, s, n);
    }
   } else {
    if (!e.json && !u.call(n, i) && u.call(t, i)) {
     e.line = a || e.line;
     e.position = o || e.position;
     M(e, "duplicated mapping key");
    }
    t[i] = s;
    delete n[i];
   }
   return t;
  }
  function U(e) {
   var t;
   t = e.input.charCodeAt(e.position);
   if (t === 10) {
    e.position++;
   } else if (t === 13) {
    e.position++;
    if (e.input.charCodeAt(e.position) === 10) {
     e.position++;
    }
   } else {
    M(e, "a line break is expected");
   }
   e.line += 1;
   e.lineStart = e.position;
  }
  function W(e, t, n) {
   var r = 0, i = e.input.charCodeAt(e.position);
   while (i !== 0) {
    while (E(i)) {
     i = e.input.charCodeAt(++e.position);
    }
    if (t && i === 35) {
     do {
      i = e.input.charCodeAt(++e.position);
     } while (i !== 10 && i !== 13 && i !== 0);
    }
    if (D(i)) {
     U(e);
     i = e.input.charCodeAt(e.position);
     r++;
     e.lineIndent = 0;
     while (i === 32) {
      e.lineIndent++;
      i = e.input.charCodeAt(++e.position);
     }
    } else {
     break;
    }
   }
   if (n !== -1 && r !== 0 && e.lineIndent < n) {
    R(e, "deficient indentation");
   }
   return r;
  }
  function z(e) {
   var t = e.position, n;
   n = e.input.charCodeAt(t);
   if ((n === 45 || n === 46) && n === e.input.charCodeAt(t + 1) && n === e.input.charCodeAt(t + 2)) {
    t += 3;
    n = e.input.charCodeAt(t);
    if (n === 0 || b(n)) {
     return true;
    }
   }
   return false;
  }
  function V(e, t) {
   if (t === 1) {
    e.result += " ";
   } else if (t > 1) {
    e.result += r.repeat("\n", t - 1);
   }
  }
  function J(e, t, n) {
   var r, i, s, a, o, u, c, l, h = e.kind, f = e.result, p;
   p = e.input.charCodeAt(e.position);
   if (b(p) || w(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96) {
    return false;
   }
   if (p === 63 || p === 45) {
    i = e.input.charCodeAt(e.position + 1);
    if (b(i) || n && w(i)) {
     return false;
    }
   }
   e.kind = "scalar";
   e.result = "";
   s = a = e.position;
   o = false;
   while (p !== 0) {
    if (p === 58) {
     i = e.input.charCodeAt(e.position + 1);
     if (b(i) || n && w(i)) {
      break;
     }
    } else if (p === 35) {
     r = e.input.charCodeAt(e.position - 1);
     if (b(r)) {
      break;
     }
    } else if (e.position === e.lineStart && z(e) || n && w(p)) {
     break;
    } else if (D(p)) {
     u = e.line;
     c = e.lineStart;
     l = e.lineIndent;
     W(e, false, -1);
     if (e.lineIndent >= t) {
      o = true;
      p = e.input.charCodeAt(e.position);
      continue;
     } else {
      e.position = a;
      e.line = u;
      e.lineStart = c;
      e.lineIndent = l;
      break;
     }
    }
    if (o) {
     L(e, s, a, false);
     V(e, e.line - u);
     s = a = e.position;
     o = false;
    }
    if (!E(p)) {
     a = e.position + 1;
    }
    p = e.input.charCodeAt(++e.position);
   }
   L(e, s, a, false);
   if (e.result) {
    return true;
   }
   e.kind = h;
   e.result = f;
   return false;
  }
  function X(e, t) {
   var n, r, i;
   n = e.input.charCodeAt(e.position);
   if (n !== 39) {
    return false;
   }
   e.kind = "scalar";
   e.result = "";
   e.position++;
   r = i = e.position;
   while ((n = e.input.charCodeAt(e.position)) !== 0) {
    if (n === 39) {
     L(e, r, e.position, true);
     n = e.input.charCodeAt(++e.position);
     if (n === 39) {
      r = e.position;
      e.position++;
      i = e.position;
     } else {
      return true;
     }
    } else if (D(n)) {
     L(e, r, i, true);
     V(e, W(e, false, t));
     r = i = e.position;
    } else if (e.position === e.lineStart && z(e)) {
     M(e, "unexpected end of the document within a single quoted scalar");
    } else {
     e.position++;
     i = e.position;
    }
   }
   M(e, "unexpected end of the stream within a single quoted scalar");
  }
  function K(e, t) {
   var n, r, i, s, a, o;
   o = e.input.charCodeAt(e.position);
   if (o !== 34) {
    return false;
   }
   e.kind = "scalar";
   e.result = "";
   e.position++;
   n = r = e.position;
   while ((o = e.input.charCodeAt(e.position)) !== 0) {
    if (o === 34) {
     L(e, n, e.position, true);
     e.position++;
     return true;
    } else if (o === 92) {
     L(e, n, e.position, true);
     o = e.input.charCodeAt(++e.position);
     if (D(o)) {
      W(e, false, t);
     } else if (o < 256 && _[o]) {
      e.result += N[o];
      e.position++;
     } else if ((a = A(o)) > 0) {
      i = a;
      s = 0;
      for (;i > 0; i--) {
       o = e.input.charCodeAt(++e.position);
       if ((a = S(o)) >= 0) {
        s = (s << 4) + a;
       } else {
        M(e, "expected hexadecimal character");
       }
      }
      e.result += T(s);
      e.position++;
     } else {
      M(e, "unknown escape sequence");
     }
     n = r = e.position;
    } else if (D(o)) {
     L(e, n, r, true);
     V(e, W(e, false, t));
     n = r = e.position;
    } else if (e.position === e.lineStart && z(e)) {
     M(e, "unexpected end of the document within a double quoted scalar");
    } else {
     e.position++;
     r = e.position;
    }
   }
   M(e, "unexpected end of the stream within a double quoted scalar");
  }
  function H(e, t) {
   var n = true, r, i = e.tag, s, a = e.anchor, o, u, l, h, f, p = {}, d, m, v, g;
   g = e.input.charCodeAt(e.position);
   if (g === 91) {
    u = 93;
    f = false;
    s = [];
   } else if (g === 123) {
    u = 125;
    f = true;
    s = {};
   } else {
    return false;
   }
   if (e.anchor !== null) {
    e.anchorMap[e.anchor] = s;
   }
   g = e.input.charCodeAt(++e.position);
   while (g !== 0) {
    W(e, true, t);
    g = e.input.charCodeAt(e.position);
    if (g === u) {
     e.position++;
     e.tag = i;
     e.anchor = a;
     e.kind = f ? "mapping" : "sequence";
     e.result = s;
     return true;
    } else if (!n) {
     M(e, "missed comma between flow collection entries");
    }
    m = d = v = null;
    l = h = false;
    if (g === 63) {
     o = e.input.charCodeAt(e.position + 1);
     if (b(o)) {
      l = h = true;
      e.position++;
      W(e, true, t);
     }
    }
    r = e.line;
    te(e, t, c, false, true);
    m = e.tag;
    d = e.result;
    W(e, true, t);
    g = e.input.charCodeAt(e.position);
    if ((h || e.line === r) && g === 58) {
     l = true;
     g = e.input.charCodeAt(++e.position);
     W(e, true, t);
     te(e, t, c, false, true);
     v = e.result;
    }
    if (f) {
     q(e, s, p, m, d, v);
    } else if (l) {
     s.push(q(e, null, p, m, d, v));
    } else {
     s.push(d);
    }
    W(e, true, t);
    g = e.input.charCodeAt(e.position);
    if (g === 44) {
     n = true;
     g = e.input.charCodeAt(++e.position);
    } else {
     n = false;
    }
   }
   M(e, "unexpected end of the stream within a flow collection");
  }
  function Y(e, t) {
   var n, i, s = p, a = false, o = false, u = t, c = 0, l = false, h, f;
   f = e.input.charCodeAt(e.position);
   if (f === 124) {
    i = false;
   } else if (f === 62) {
    i = true;
   } else {
    return false;
   }
   e.kind = "scalar";
   e.result = "";
   while (f !== 0) {
    f = e.input.charCodeAt(++e.position);
    if (f === 43 || f === 45) {
     if (p === s) {
      s = f === 43 ? m : d;
     } else {
      M(e, "repeat of a chomping mode identifier");
     }
    } else if ((h = k(f)) >= 0) {
     if (h === 0) {
      M(e, "bad explicit indentation width of a block scalar; it cannot be less than one");
     } else if (!o) {
      u = t + h - 1;
      o = true;
     } else {
      M(e, "repeat of an indentation width identifier");
     }
    } else {
     break;
    }
   }
   if (E(f)) {
    do {
     f = e.input.charCodeAt(++e.position);
    } while (E(f));
    if (f === 35) {
     do {
      f = e.input.charCodeAt(++e.position);
     } while (!D(f) && f !== 0);
    }
   }
   while (f !== 0) {
    U(e);
    e.lineIndent = 0;
    f = e.input.charCodeAt(e.position);
    while ((!o || e.lineIndent < u) && f === 32) {
     e.lineIndent++;
     f = e.input.charCodeAt(++e.position);
    }
    if (!o && e.lineIndent > u) {
     u = e.lineIndent;
    }
    if (D(f)) {
     c++;
     continue;
    }
    if (e.lineIndent < u) {
     if (s === m) {
      e.result += r.repeat("\n", a ? 1 + c : c);
     } else if (s === p) {
      if (a) {
       e.result += "\n";
      }
     }
     break;
    }
    if (i) {
     if (E(f)) {
      l = true;
      e.result += r.repeat("\n", a ? 1 + c : c);
     } else if (l) {
      l = false;
      e.result += r.repeat("\n", c + 1);
     } else if (c === 0) {
      if (a) {
       e.result += " ";
      }
     } else {
      e.result += r.repeat("\n", c);
     }
    } else {
     e.result += r.repeat("\n", a ? 1 + c : c);
    }
    a = true;
    o = true;
    c = 0;
    n = e.position;
    while (!D(f) && f !== 0) {
     f = e.input.charCodeAt(++e.position);
    }
    L(e, n, e.position, false);
   }
   return true;
  }
  function G(e, t) {
   var n, r = e.tag, i = e.anchor, s = [], a, o = false, u;
   if (e.anchor !== null) {
    e.anchorMap[e.anchor] = s;
   }
   u = e.input.charCodeAt(e.position);
   while (u !== 0) {
    if (u !== 45) {
     break;
    }
    a = e.input.charCodeAt(e.position + 1);
    if (!b(a)) {
     break;
    }
    o = true;
    e.position++;
    if (W(e, true, -1)) {
     if (e.lineIndent <= t) {
      s.push(null);
      u = e.input.charCodeAt(e.position);
      continue;
     }
    }
    n = e.line;
    te(e, t, h, false, true);
    s.push(e.result);
    W(e, true, -1);
    u = e.input.charCodeAt(e.position);
    if ((e.line === n || e.lineIndent > t) && u !== 0) {
     M(e, "bad indentation of a sequence entry");
    } else if (e.lineIndent < t) {
     break;
    }
   }
   if (o) {
    e.tag = r;
    e.anchor = i;
    e.kind = "sequence";
    e.result = s;
    return true;
   }
   return false;
  }
  function $(e, t, n) {
   var r, i, s, a, o = e.tag, u = e.anchor, c = {}, h = {}, p = null, d = null, m = null, v = false, g = false, y;
   if (e.anchor !== null) {
    e.anchorMap[e.anchor] = c;
   }
   y = e.input.charCodeAt(e.position);
   while (y !== 0) {
    r = e.input.charCodeAt(e.position + 1);
    s = e.line;
    a = e.position;
    if ((y === 63 || y === 58) && b(r)) {
     if (y === 63) {
      if (v) {
       q(e, c, h, p, d, null);
       p = d = m = null;
      }
      g = true;
      v = true;
      i = true;
     } else if (v) {
      v = false;
      i = true;
     } else {
      M(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
     }
     e.position += 1;
     y = r;
    } else if (te(e, n, l, false, true)) {
     if (e.line === s) {
      y = e.input.charCodeAt(e.position);
      while (E(y)) {
       y = e.input.charCodeAt(++e.position);
      }
      if (y === 58) {
       y = e.input.charCodeAt(++e.position);
       if (!b(y)) {
        M(e, "a whitespace character is expected after the key-value separator within a block mapping");
       }
       if (v) {
        q(e, c, h, p, d, null);
        p = d = m = null;
       }
       g = true;
       v = false;
       i = false;
       p = e.tag;
       d = e.result;
      } else if (g) {
       M(e, "can not read an implicit mapping pair; a colon is missed");
      } else {
       e.tag = o;
       e.anchor = u;
       return true;
      }
     } else if (g) {
      M(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
     } else {
      e.tag = o;
      e.anchor = u;
      return true;
     }
    } else {
     break;
    }
    if (e.line === s || e.lineIndent > t) {
     if (te(e, t, f, true, i)) {
      if (v) {
       d = e.result;
      } else {
       m = e.result;
      }
     }
     if (!v) {
      q(e, c, h, p, d, m, s, a);
      p = d = m = null;
     }
     W(e, true, -1);
     y = e.input.charCodeAt(e.position);
    }
    if (e.lineIndent > t && y !== 0) {
     M(e, "bad indentation of a mapping entry");
    } else if (e.lineIndent < t) {
     break;
    }
   }
   if (v) {
    q(e, c, h, p, d, null);
   }
   if (g) {
    e.tag = o;
    e.anchor = u;
    e.kind = "mapping";
    e.result = c;
   }
   return g;
  }
  function Q(e) {
   var t, n = false, r = false, i, s, a;
   a = e.input.charCodeAt(e.position);
   if (a !== 33) return false;
   if (e.tag !== null) {
    M(e, "duplication of a tag property");
   }
   a = e.input.charCodeAt(++e.position);
   if (a === 60) {
    n = true;
    a = e.input.charCodeAt(++e.position);
   } else if (a === 33) {
    r = true;
    i = "!!";
    a = e.input.charCodeAt(++e.position);
   } else {
    i = "!";
   }
   t = e.position;
   if (n) {
    do {
     a = e.input.charCodeAt(++e.position);
    } while (a !== 0 && a !== 62);
    if (e.position < e.length) {
     s = e.input.slice(t, e.position);
     a = e.input.charCodeAt(++e.position);
    } else {
     M(e, "unexpected end of the stream within a verbatim tag");
    }
   } else {
    while (a !== 0 && !b(a)) {
     if (a === 33) {
      if (!r) {
       i = e.input.slice(t - 1, e.position + 1);
       if (!x.test(i)) {
        M(e, "named tag handle cannot contain such characters");
       }
       r = true;
       t = e.position + 1;
      } else {
       M(e, "tag suffix cannot contain exclamation marks");
      }
     }
     a = e.input.charCodeAt(++e.position);
    }
    s = e.input.slice(t, e.position);
    if (y.test(s)) {
     M(e, "tag suffix cannot contain flow indicator characters");
    }
   }
   if (s && !C.test(s)) {
    M(e, "tag name cannot contain such characters: " + s);
   }
   if (n) {
    e.tag = s;
   } else if (u.call(e.tagMap, i)) {
    e.tag = e.tagMap[i] + s;
   } else if (i === "!") {
    e.tag = "!" + s;
   } else if (i === "!!") {
    e.tag = "tag:yaml.org,2002:" + s;
   } else {
    M(e, 'undeclared tag handle "' + i + '"');
   }
   return true;
  }
  function Z(e) {
   var t, n;
   n = e.input.charCodeAt(e.position);
   if (n !== 38) return false;
   if (e.anchor !== null) {
    M(e, "duplication of an anchor property");
   }
   n = e.input.charCodeAt(++e.position);
   t = e.position;
   while (n !== 0 && !b(n) && !w(n)) {
    n = e.input.charCodeAt(++e.position);
   }
   if (e.position === t) {
    M(e, "name of an anchor node must contain at least one character");
   }
   e.anchor = e.input.slice(t, e.position);
   return true;
  }
  function ee(e) {
   var t, n, r;
   r = e.input.charCodeAt(e.position);
   if (r !== 42) return false;
   r = e.input.charCodeAt(++e.position);
   t = e.position;
   while (r !== 0 && !b(r) && !w(r)) {
    r = e.input.charCodeAt(++e.position);
   }
   if (e.position === t) {
    M(e, "name of an alias node must contain at least one character");
   }
   n = e.input.slice(t, e.position);
   if (!e.anchorMap.hasOwnProperty(n)) {
    M(e, 'unidentified alias "' + n + '"');
   }
   e.result = e.anchorMap[n];
   W(e, true, -1);
   return true;
  }
  function te(e, t, n, r, i) {
   var s, a, o, p = 1, d = false, m = false, v, g, y, x, C;
   if (e.listener !== null) {
    e.listener("open", e);
   }
   e.tag = null;
   e.anchor = null;
   e.kind = null;
   e.result = null;
   s = a = o = f === n || h === n;
   if (r) {
    if (W(e, true, -1)) {
     d = true;
     if (e.lineIndent > t) {
      p = 1;
     } else if (e.lineIndent === t) {
      p = 0;
     } else if (e.lineIndent < t) {
      p = -1;
     }
    }
   }
   if (p === 1) {
    while (Q(e) || Z(e)) {
     if (W(e, true, -1)) {
      d = true;
      o = s;
      if (e.lineIndent > t) {
       p = 1;
      } else if (e.lineIndent === t) {
       p = 0;
      } else if (e.lineIndent < t) {
       p = -1;
      }
     } else {
      o = false;
     }
    }
   }
   if (o) {
    o = d || i;
   }
   if (p === 1 || f === n) {
    if (c === n || l === n) {
     x = t;
    } else {
     x = t + 1;
    }
    C = e.position - e.lineStart;
    if (p === 1) {
     if (o && (G(e, C) || $(e, C, x)) || H(e, x)) {
      m = true;
     } else {
      if (a && Y(e, x) || X(e, x) || K(e, x)) {
       m = true;
      } else if (ee(e)) {
       m = true;
       if (e.tag !== null || e.anchor !== null) {
        M(e, "alias node should not have any properties");
       }
      } else if (J(e, x, c === n)) {
       m = true;
       if (e.tag === null) {
        e.tag = "?";
       }
      }
      if (e.anchor !== null) {
       e.anchorMap[e.anchor] = e.result;
      }
     }
    } else if (p === 0) {
     m = o && G(e, C);
    }
   }
   if (e.tag !== null && e.tag !== "!") {
    if (e.tag === "?") {
     for (v = 0, g = e.implicitTypes.length; v < g; v += 1) {
      y = e.implicitTypes[v];
      if (y.resolve(e.result)) {
       e.result = y.construct(e.result);
       e.tag = y.tag;
       if (e.anchor !== null) {
        e.anchorMap[e.anchor] = e.result;
       }
       break;
      }
     }
    } else if (u.call(e.typeMap[e.kind || "fallback"], e.tag)) {
     y = e.typeMap[e.kind || "fallback"][e.tag];
     if (e.result !== null && y.kind !== e.kind) {
      M(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + y.kind + '", not "' + e.kind + '"');
     }
     if (!y.resolve(e.result)) {
      M(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
     } else {
      e.result = y.construct(e.result);
      if (e.anchor !== null) {
       e.anchorMap[e.anchor] = e.result;
      }
     }
    } else {
     M(e, "unknown tag !<" + e.tag + ">");
    }
   }
   if (e.listener !== null) {
    e.listener("close", e);
   }
   return e.tag !== null || e.anchor !== null || m;
  }
  function ne(e) {
   var t = e.position, n, r, i, s = false, a;
   e.version = null;
   e.checkLineBreaks = e.legacy;
   e.tagMap = {};
   e.anchorMap = {};
   while ((a = e.input.charCodeAt(e.position)) !== 0) {
    W(e, true, -1);
    a = e.input.charCodeAt(e.position);
    if (e.lineIndent > 0 || a !== 37) {
     break;
    }
    s = true;
    a = e.input.charCodeAt(++e.position);
    n = e.position;
    while (a !== 0 && !b(a)) {
     a = e.input.charCodeAt(++e.position);
    }
    r = e.input.slice(n, e.position);
    i = [];
    if (r.length < 1) {
     M(e, "directive name must not be less than one character in length");
    }
    while (a !== 0) {
     while (E(a)) {
      a = e.input.charCodeAt(++e.position);
     }
     if (a === 35) {
      do {
       a = e.input.charCodeAt(++e.position);
      } while (a !== 0 && !D(a));
      break;
     }
     if (D(a)) break;
     n = e.position;
     while (a !== 0 && !b(a)) {
      a = e.input.charCodeAt(++e.position);
     }
     i.push(e.input.slice(n, e.position));
    }
    if (a !== 0) U(e);
    if (u.call(B, r)) {
     B[r](e, r, i);
    } else {
     R(e, 'unknown document directive "' + r + '"');
    }
   }
   W(e, true, -1);
   if (e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45) {
    e.position += 3;
    W(e, true, -1);
   } else if (s) {
    M(e, "directives end mark is expected");
   }
   te(e, e.lineIndent - 1, f, false, true);
   W(e, true, -1);
   if (e.checkLineBreaks && g.test(e.input.slice(t, e.position))) {
    R(e, "non-ASCII line breaks are interpreted as content");
   }
   e.documents.push(e.result);
   if (e.position === e.lineStart && z(e)) {
    if (e.input.charCodeAt(e.position) === 46) {
     e.position += 3;
     W(e, true, -1);
    }
    return;
   }
   if (e.position < e.length - 1) {
    M(e, "end of the stream or a document separator is expected");
   } else {
    return;
   }
  }
  function re(e, t) {
   e = String(e);
   t = t || {};
   if (e.length !== 0) {
    if (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13) {
     e += "\n";
    }
    if (e.charCodeAt(0) === 65279) {
     e = e.slice(1);
    }
   }
   var n = new P(e, t);
   n.input += "\0";
   while (n.input.charCodeAt(n.position) === 32) {
    n.lineIndent += 1;
    n.position += 1;
   }
   while (n.position < n.length - 1) {
    ne(n);
   }
   return n.documents;
  }
  function ie(e, t, n) {
   var r = re(e, n), i, s;
   if (typeof t !== "function") {
    return r;
   }
   for (i = 0, s = r.length; i < s; i += 1) {
    t(r[i]);
   }
  }
  function se(e, t) {
   var n = re(e, t);
   if (n.length === 0) {
    return undefined;
   } else if (n.length === 1) {
    return n[0];
   }
   throw new i("expected a single document in the stream, but found more");
  }
  function ae(e, t, n) {
   if (typeof t === "function") {
    ie(e, t, r.extend({
     schema: a
    }, n));
   } else {
    return ie(e, r.extend({
     schema: a
    }, n));
   }
  }
  function oe(e, t) {
   return se(e, r.extend({
    schema: a
   }, t));
  }
  e.exports.loadAll = ie;
  e.exports.load = se;
  e.exports.safeLoadAll = ae;
  e.exports.safeLoad = oe;
 },
 "/sqj": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("yRVO");
  t.WorkspaceFoldersFeature = (e => {
   return class extends e {
    initialize(e) {
     let t = e.workspace;
     if (t && t.workspaceFolders) {
      this._onDidChangeWorkspaceFolders = new r.Emitter();
      this.connection.onNotification(r.DidChangeWorkspaceFoldersNotification.type, e => {
       this._onDidChangeWorkspaceFolders.fire(e.event);
      });
     }
    }
    getWorkspaceFolders() {
     return this.connection.sendRequest(r.WorkspaceFoldersRequest.type);
    }
    get onDidChangeWorkspaceFolders() {
     if (!this._onDidChangeWorkspaceFolders) {
      throw new Error("Client doesn't support sending workspace folder change events.");
     }
     if (!this._unregistration) {
      this._unregistration = this.connection.client.register(r.DidChangeWorkspaceFoldersNotification.type);
     }
     return this._onDidChangeWorkspaceFolders.event;
    }
   };
  });
 },
 "/wVd": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  function r(e, t) {
   if (e === t) {
    return true;
   }
   if (e === null || e === undefined || t === null || t === undefined) {
    return false;
   }
   if (typeof e !== typeof t) {
    return false;
   }
   if (typeof e !== "object") {
    return false;
   }
   if (Array.isArray(e) !== Array.isArray(t)) {
    return false;
   }
   var n, i;
   if (Array.isArray(e)) {
    if (e.length !== t.length) {
     return false;
    }
    for (n = 0; n < e.length; n++) {
     if (!r(e[n], t[n])) {
      return false;
     }
    }
   } else {
    var s = [];
    for (i in e) {
     s.push(i);
    }
    s.sort();
    var a = [];
    for (i in t) {
     a.push(i);
    }
    a.sort();
    if (!r(s, a)) {
     return false;
    }
    for (n = 0; n < s.length; n++) {
     if (!r(e[s[n]], t[s[n]])) {
      return false;
     }
    }
   }
   return true;
  }
  t.equals = r;
 },
 "0+E0": function(e, t, n) {
  "use strict";
  var r = n("gax4");
  function i(e) {
   if (e === null) return true;
   var t = e.length;
   return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
  }
  function s() {
   return null;
  }
  function a(e) {
   return e === null;
  }
  e.exports = new r("tag:yaml.org,2002:null", {
   kind: "scalar",
   resolve: i,
   construct: s,
   predicate: a,
   represent: {
    canonical: function() {
     return "~";
    },
    lowercase: function() {
     return "null";
    },
    uppercase: function() {
     return "NULL";
    },
    camelcase: function() {
     return "Null";
    }
   },
   defaultStyle: "lowercase"
  });
 },
 "2vr2": function(e, t) {
  function n(e) {
   return require(e);
  }
  n.keys = function() {
   return [];
  };
  n.resolve = require.resolve;
  e.exports = n;
  n.id = "2vr2";
 },
 "3wk8": function(e, t, n) {
  "use strict";
  var r = n("+LHy");
  e.exports = r;
 },
 "43/K": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("KYnE");
  const i = n("rqus");
  const s = n("sQVP");
  const a = n("bv+B");
  const o = n("RYDB");
  const u = n("U3oL");
  function c(e, t, n, c, l) {
   let h = l || Promise;
   let f = new r.JSONSchemaService(e, t, c);
   let p = new s.YAMLCompletion(f, n, h);
   let d = new a.YAMLHover(f, n, h);
   let m = new i.YAMLDocumentSymbols();
   let v = new o.YAMLValidation(f, h);
   return {
    configure: e => {
     f.clearExternalSchemas();
     if (e.schemas) {
      e.schemas.forEach(e => {
       f.registerExternalSchema(e.uri, e.fileMatch, e.schema);
      });
     }
     v.configure(e);
     let t = e && e["customTags"] ? e["customTags"] : [];
     p.configure(t);
    },
    doComplete: p.doComplete.bind(p),
    doResolve: p.doResolve.bind(p),
    doValidation: v.doValidation.bind(v),
    doHover: d.doHover.bind(d),
    findDocumentSymbols: m.findDocumentSymbols.bind(m),
    resetSchema: e => f.onResourceChange(e),
    doFormat: u.format
   };
  }
  t.getLanguageService = c;
 },
 "4JhR": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  function r(e) {
   return typeof e === "undefined" || null === e;
  }
  t.isNothing = r;
  function i(e) {
   return typeof e === "object" && null !== e;
  }
  t.isObject = i;
  function s(e) {
   if (Array.isArray(e)) {
    return e;
   } else if (r(e)) {
    return [];
   }
   return [ e ];
  }
  t.toArray = s;
  function a(e, t) {
   var n, r, i, s;
   if (t) {
    s = Object.keys(t);
    for (n = 0, r = s.length; n < r; n += 1) {
     i = s[n];
     e[i] = t[i];
    }
   }
   return e;
  }
  t.extend = a;
  function o(e, t) {
   var n = "", r;
   for (r = 0; r < t; r += 1) {
    n += e;
   }
   return n;
  }
  t.repeat = o;
  function u(e) {
   return 0 === e && Number.NEGATIVE_INFINITY === 1 / e;
  }
  t.isNegativeZero = u;
 },
 "5FsR": function(e, t, n) {
  "use strict";
  var r = n("cYFF");
  var i = Object.prototype.hasOwnProperty;
  var s = Object.prototype.toString;
  function a(e) {
   if (null === e) {
    return true;
   }
   var t = [], n, r, a, o, u, c = e;
   for (n = 0, r = c.length; n < r; n += 1) {
    a = c[n];
    u = false;
    if ("[object Object]" !== s.call(a)) {
     return false;
    }
    for (o in a) {
     if (i.call(a, o)) {
      if (!u) {
       u = true;
      } else {
       return false;
      }
     }
    }
    if (!u) {
     return false;
    }
    if (-1 === t.indexOf(o)) {
     t.push(o);
    } else {
     return false;
    }
   }
   return true;
  }
  function o(e) {
   return null !== e ? e : [];
  }
  e.exports = new r.Type("tag:yaml.org,2002:omap", {
   kind: "sequence",
   resolve: a,
   construct: o
  });
 },
 "5Rb2": function(e, t, n) {
  "use strict";
  var r = n("YU9W");
  e.exports = new r({
   include: [ n("hoi+") ],
   implicit: [ n("0+E0"), n("clIw"), n("8B8v"), n("SmLj") ]
  });
 },
 "5ZlD": function(e, t, n) {
  "use strict";
  var r = n("cYFF");
  var i = new RegExp("^([0-9][0-9][0-9][0-9])" + "-([0-9][0-9]?)" + "-([0-9][0-9]?)" + "(?:(?:[Tt]|[ \\t]+)" + "([0-9][0-9]?)" + ":([0-9][0-9])" + ":([0-9][0-9])" + "(?:\\.([0-9]*))?" + "(?:[ \\t]*(Z|([-+])([0-9][0-9]?)" + "(?::([0-9][0-9]))?))?)?$");
  function s(e) {
   if (null === e) {
    return false;
   }
   var t, n, r, s, a, o, u, c = 0, l = null, h, f, p;
   t = i.exec(e);
   if (null === t) {
    return false;
   }
   return true;
  }
  function a(e) {
   var t, n, r, s, a, o, u, c = 0, l = null, h, f, p;
   t = i.exec(e);
   if (null === t) {
    throw new Error("Date resolve error");
   }
   n = +t[1];
   r = +t[2] - 1;
   s = +t[3];
   if (!t[4]) {
    return new Date(Date.UTC(n, r, s));
   }
   a = +t[4];
   o = +t[5];
   u = +t[6];
   if (t[7]) {
    c = t[7].slice(0, 3);
    while (c.length < 3) {
     c = c + "0";
    }
    c = +c;
   }
   if (t[9]) {
    h = +t[10];
    f = +(t[11] || 0);
    l = (h * 60 + f) * 6e4;
    if ("-" === t[9]) {
     l = -l;
    }
   }
   p = new Date(Date.UTC(n, r, s, a, o, u, c));
   if (l) {
    p.setTime(p.getTime() - l);
   }
   return p;
  }
  function o(e) {
   return e.toISOString();
  }
  e.exports = new r.Type("tag:yaml.org,2002:timestamp", {
   kind: "scalar",
   resolve: s,
   construct: a,
   instanceOf: Date,
   represent: o
  });
 },
 "6PIK": function(e, t) {
  function n(e) {
   return require(e);
  }
  n.keys = function() {
   return [];
  };
  n.resolve = require.resolve;
  e.exports = n;
  n.id = "6PIK";
 },
 "7Nz6": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("4JhR");
  var i = n("k4pi");
  var s = n("cYFF");
  function a(e, t, n) {
   var r = [];
   e.include.forEach(function(e) {
    n = a(e, t, n);
   });
   e[t].forEach(function(e) {
    n.forEach(function(t, n) {
     if (t.tag === e.tag) {
      r.push(n);
     }
    });
    n.push(e);
   });
   return n.filter(function(e, t) {
    return -1 === r.indexOf(t);
   });
  }
  function o() {
   var e = {}, t, n;
   function r(t) {
    e[t.tag] = t;
   }
   for (t = 0, n = arguments.length; t < n; t += 1) {
    arguments[t].forEach(r);
   }
   return e;
  }
  var u = function() {
   function e(e) {
    this.include = e.include || [];
    this.implicit = e.implicit || [];
    this.explicit = e.explicit || [];
    this.implicit.forEach(function(e) {
     if (e.loadKind && "scalar" !== e.loadKind) {
      throw new i("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
     }
    });
    this.compiledImplicit = a(this, "implicit", []);
    this.compiledExplicit = a(this, "explicit", []);
    this.compiledTypeMap = o(this.compiledImplicit, this.compiledExplicit);
   }
   e.DEFAULT = null;
   e.create = function t() {
    var n, a;
    switch (arguments.length) {
    case 1:
     n = e.DEFAULT;
     a = arguments[0];
     break;

    case 2:
     n = arguments[0];
     a = arguments[1];
     break;

    default:
     throw new i("Wrong number of arguments for Schema.create function");
    }
    n = r.toArray(n);
    a = r.toArray(a);
    if (!n.every(function(t) {
     return t instanceof e;
    })) {
     throw new i("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
    }
    if (!a.every(function(e) {
     return e instanceof s.Type;
    })) {
     throw new i("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
    return new e({
     include: n,
     explicit: a
    });
   };
   return e;
  }();
  t.Schema = u;
 },
 "7WL4": function(e, t) {
  e.exports = require("https");
 },
 "7aWl": function(e, t, n) {
  "use strict";
  function r(e) {
   for (var n in e) if (!t.hasOwnProperty(n)) t[n] = e[n];
  }
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var i = n("GtrT");
  t.load = i.load;
  t.loadAll = i.loadAll;
  t.safeLoad = i.safeLoad;
  t.safeLoadAll = i.safeLoadAll;
  var s = n("N1Va");
  t.dump = s.dump;
  t.safeDump = s.safeDump;
  t.YAMLException = n("k4pi");
  r(n("j4xC"));
  function a(e) {
   return function() {
    throw new Error("Function " + e + " is deprecated and cannot be used.");
   };
  }
  r(n("j6OQ"));
 },
 "8B8v": function(e, t, n) {
  "use strict";
  var r = n("IYmx");
  var i = n("gax4");
  function s(e) {
   return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
  }
  function a(e) {
   return 48 <= e && e <= 55;
  }
  function o(e) {
   return 48 <= e && e <= 57;
  }
  function u(e) {
   if (e === null) return false;
   var t = e.length, n = 0, r = false, i;
   if (!t) return false;
   i = e[n];
   if (i === "-" || i === "+") {
    i = e[++n];
   }
   if (i === "0") {
    if (n + 1 === t) return true;
    i = e[++n];
    if (i === "b") {
     n++;
     for (;n < t; n++) {
      i = e[n];
      if (i === "_") continue;
      if (i !== "0" && i !== "1") return false;
      r = true;
     }
     return r && i !== "_";
    }
    if (i === "x") {
     n++;
     for (;n < t; n++) {
      i = e[n];
      if (i === "_") continue;
      if (!s(e.charCodeAt(n))) return false;
      r = true;
     }
     return r && i !== "_";
    }
    for (;n < t; n++) {
     i = e[n];
     if (i === "_") continue;
     if (!a(e.charCodeAt(n))) return false;
     r = true;
    }
    return r && i !== "_";
   }
   if (i === "_") return false;
   for (;n < t; n++) {
    i = e[n];
    if (i === "_") continue;
    if (i === ":") break;
    if (!o(e.charCodeAt(n))) {
     return false;
    }
    r = true;
   }
   if (!r || i === "_") return false;
   if (i !== ":") return true;
   return /^(:[0-5]?[0-9])+$/.test(e.slice(n));
  }
  function c(e) {
   var t = e, n = 1, r, i, s = [];
   if (t.indexOf("_") !== -1) {
    t = t.replace(/_/g, "");
   }
   r = t[0];
   if (r === "-" || r === "+") {
    if (r === "-") n = -1;
    t = t.slice(1);
    r = t[0];
   }
   if (t === "0") return 0;
   if (r === "0") {
    if (t[1] === "b") return n * parseInt(t.slice(2), 2);
    if (t[1] === "x") return n * parseInt(t, 16);
    return n * parseInt(t, 8);
   }
   if (t.indexOf(":") !== -1) {
    t.split(":").forEach(function(e) {
     s.unshift(parseInt(e, 10));
    });
    t = 0;
    i = 1;
    s.forEach(function(e) {
     t += e * i;
     i *= 60;
    });
    return n * t;
   }
   return n * parseInt(t, 10);
  }
  function l(e) {
   return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 === 0 && !r.isNegativeZero(e));
  }
  e.exports = new i("tag:yaml.org,2002:int", {
   kind: "scalar",
   resolve: u,
   construct: c,
   predicate: l,
   represent: {
    binary: function(e) {
     return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    },
    octal: function(e) {
     return e >= 0 ? "0" + e.toString(8) : "-0" + e.toString(8).slice(1);
    },
    decimal: function(e) {
     return e.toString(10);
    },
    hexadecimal: function(e) {
     return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }
   },
   defaultStyle: "decimal",
   styleAliases: {
    binary: [ 2, "bin" ],
    octal: [ 8, "oct" ],
    decimal: [ 10, "dec" ],
    hexadecimal: [ 16, "hex" ]
   }
  });
 },
 "9+ej": function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var i = n("+VcB");
  var s = n("Undm");
  var a = "Content-Length: ";
  var o = "\r\n";
  var u;
  (function(e) {
   function t(e) {
    var t = e;
    return t && s.func(t.dispose) && s.func(t.onClose) && s.func(t.onError) && s.func(t.write);
   }
   e.is = t;
  })(u = t.MessageWriter || (t.MessageWriter = {}));
  var c = function() {
   function e() {
    this.errorEmitter = new i.Emitter();
    this.closeEmitter = new i.Emitter();
   }
   e.prototype.dispose = function() {
    this.errorEmitter.dispose();
    this.closeEmitter.dispose();
   };
   Object.defineProperty(e.prototype, "onError", {
    get: function() {
     return this.errorEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireError = function(e, t, n) {
    this.errorEmitter.fire([ this.asError(e), t, n ]);
   };
   Object.defineProperty(e.prototype, "onClose", {
    get: function() {
     return this.closeEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireClose = function() {
    this.closeEmitter.fire(undefined);
   };
   e.prototype.asError = function(e) {
    if (e instanceof Error) {
     return e;
    } else {
     return new Error("Writer recevied error. Reason: " + (s.string(e.message) ? e.message : "unknown"));
    }
   };
   return e;
  }();
  t.AbstractMessageWriter = c;
  var l = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf8";
    }
    var r = e.call(this) || this;
    r.writable = t;
    r.encoding = n;
    r.errorCount = 0;
    r.writable.on("error", function(e) {
     return r.fireError(e);
    });
    r.writable.on("close", function() {
     return r.fireClose();
    });
    return r;
   }
   t.prototype.write = function(e) {
    var t = JSON.stringify(e);
    var n = Buffer.byteLength(t, this.encoding);
    var r = [ a, n.toString(), o, o ];
    try {
     this.writable.write(r.join(""), "ascii");
     this.writable.write(t, this.encoding);
     this.errorCount = 0;
    } catch (t) {
     this.errorCount++;
     this.fireError(t, e, this.errorCount);
    }
   };
   return t;
  }(c);
  t.StreamMessageWriter = l;
  var h = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this) || this;
    n.process = t;
    n.errorCount = 0;
    n.queue = [];
    n.sending = false;
    var r = n.process;
    r.on("error", function(e) {
     return n.fireError(e);
    });
    r.on("close", function() {
     return n.fireClose;
    });
    return n;
   }
   t.prototype.write = function(e) {
    if (!this.sending && this.queue.length === 0) {
     this.doWriteMessage(e);
    } else {
     this.queue.push(e);
    }
   };
   t.prototype.doWriteMessage = function(e) {
    var t = this;
    try {
     if (this.process.send) {
      this.sending = true;
      this.process.send(e, undefined, undefined, function(n) {
       t.sending = false;
       if (n) {
        t.errorCount++;
        t.fireError(n, e, t.errorCount);
       } else {
        t.errorCount = 0;
       }
       if (t.queue.length > 0) {
        t.doWriteMessage(t.queue.shift());
       }
      });
     }
    } catch (t) {
     this.errorCount++;
     this.fireError(t, e, this.errorCount);
    }
   };
   return t;
  }(c);
  t.IPCMessageWriter = h;
  var f = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf8";
    }
    var r = e.call(this) || this;
    r.socket = t;
    r.queue = [];
    r.sending = false;
    r.encoding = n;
    r.errorCount = 0;
    r.socket.on("error", function(e) {
     return r.fireError(e);
    });
    r.socket.on("close", function() {
     return r.fireClose();
    });
    return r;
   }
   t.prototype.write = function(e) {
    if (!this.sending && this.queue.length === 0) {
     this.doWriteMessage(e);
    } else {
     this.queue.push(e);
    }
   };
   t.prototype.doWriteMessage = function(e) {
    var t = this;
    var n = JSON.stringify(e);
    var r = Buffer.byteLength(n, this.encoding);
    var i = [ a, r.toString(), o, o ];
    try {
     this.sending = true;
     this.socket.write(i.join(""), "ascii", function(r) {
      if (r) {
       t.handleError(r, e);
      }
      try {
       t.socket.write(n, t.encoding, function(n) {
        t.sending = false;
        if (n) {
         t.handleError(n, e);
        } else {
         t.errorCount = 0;
        }
        if (t.queue.length > 0) {
         t.doWriteMessage(t.queue.shift());
        }
       });
      } catch (r) {
       t.handleError(r, e);
      }
     });
    } catch (t) {
     this.handleError(t, e);
    }
   };
   t.prototype.handleError = function(e, t) {
    this.errorCount++;
    this.fireError(e, t, this.errorCount);
   };
   return t;
  }(c);
  t.SocketMessageWriter = f;
 },
 "9lQd": function(e, t, n) {
  "use strict";
  var r = n("4JhR");
  var i = n("cYFF");
  function s(e) {
   return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
  }
  function a(e) {
   return 48 <= e && e <= 55;
  }
  function o(e) {
   return 48 <= e && e <= 57;
  }
  function u(e) {
   if (null === e) {
    return false;
   }
   var t = e.length, n = 0, r = false, i;
   if (!t) {
    return false;
   }
   i = e[n];
   if (i === "-" || i === "+") {
    i = e[++n];
   }
   if (i === "0") {
    if (n + 1 === t) {
     return true;
    }
    i = e[++n];
    if (i === "b") {
     n++;
     for (;n < t; n++) {
      i = e[n];
      if (i === "_") {
       continue;
      }
      if (i !== "0" && i !== "1") {
       return false;
      }
      r = true;
     }
     return r;
    }
    if (i === "x") {
     n++;
     for (;n < t; n++) {
      i = e[n];
      if (i === "_") {
       continue;
      }
      if (!s(e.charCodeAt(n))) {
       return false;
      }
      r = true;
     }
     return r;
    }
    for (;n < t; n++) {
     i = e[n];
     if (i === "_") {
      continue;
     }
     if (!a(e.charCodeAt(n))) {
      return false;
     }
     r = true;
    }
    return r;
   }
   for (;n < t; n++) {
    i = e[n];
    if (i === "_") {
     continue;
    }
    if (i === ":") {
     break;
    }
    if (!o(e.charCodeAt(n))) {
     return false;
    }
    r = true;
   }
   if (!r) {
    return false;
   }
   if (i !== ":") {
    return true;
   }
   return /^(:[0-5]?[0-9])+$/.test(e.slice(n));
  }
  function c(e) {
   var t = e, n = 1, r, i, s = [];
   if (t.indexOf("_") !== -1) {
    t = t.replace(/_/g, "");
   }
   r = t[0];
   if (r === "-" || r === "+") {
    if (r === "-") {
     n = -1;
    }
    t = t.slice(1);
    r = t[0];
   }
   if ("0" === t) {
    return 0;
   }
   if (r === "0") {
    if (t[1] === "b") {
     return n * parseInt(t.slice(2), 2);
    }
    if (t[1] === "x") {
     return n * parseInt(t, 16);
    }
    return n * parseInt(t, 8);
   }
   if (t.indexOf(":") !== -1) {
    t.split(":").forEach(function(e) {
     s.unshift(parseInt(e, 10));
    });
    t = 0;
    i = 1;
    s.forEach(function(e) {
     t += e * i;
     i *= 60;
    });
    return n * t;
   }
   return n * parseInt(t, 10);
  }
  function l(e) {
   return "[object Number]" === Object.prototype.toString.call(e) && (0 === e % 1 && !r.isNegativeZero(e));
  }
  e.exports = new i.Type("tag:yaml.org,2002:int", {
   kind: "scalar",
   resolve: u,
   construct: c,
   predicate: l,
   represent: {
    binary: function(e) {
     return "0b" + e.toString(2);
    },
    octal: function(e) {
     return "0" + e.toString(8);
    },
    decimal: function(e) {
     return e.toString(10);
    },
    hexadecimal: function(e) {
     return "0x" + e.toString(16).toUpperCase();
    }
   },
   defaultStyle: "decimal",
   styleAliases: {
    binary: [ 2, "bin" ],
    octal: [ 8, "oct" ],
    decimal: [ 10, "dec" ],
    hexadecimal: [ 16, "hex" ]
   }
  });
 },
 "9t9m": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("bzos");
  const i = n("oyvS");
  const s = n("mw/K");
  const a = n("QduZ");
  function o(e) {
   let t = r.parse(e);
   if (t.protocol !== "file:" || !t.path) {
    return undefined;
   }
   let n = t.path.split("/");
   for (var s = 0, a = n.length; s < a; s++) {
    n[s] = decodeURIComponent(n[s]);
   }
   if (process.platform === "win32" && n.length > 1) {
    let e = n[0];
    let t = n[1];
    if (e.length === 0 && t.length > 1 && t[1] === ":") {
     n.shift();
    }
   }
   return i.normalize(n.join("/"));
  }
  t.uriToFilePath = o;
  function u() {
   return process.platform === "win32";
  }
  function c(e, t) {
   let r = "NODE_PATH";
   return new Promise((s, o) => {
    let c = [];
    if (e) {
     c.push(i.join(e, "node_modules"));
    }
    a.exec("npm config get prefix", (e, l, h) => {
     if (!e) {
      let e = l.replace(/[\s\r\n]+$/, "");
      if (e.length > 0) {
       if (u()) {
        c.push(i.join(e, "node_modules"));
       } else {
        c.push(i.join(e, "lib", "node_modules"));
       }
      }
     }
     let f = u() ? ";" : ":";
     let p = process.env;
     let d = Object.create(null);
     Object.keys(p).forEach(e => d[e] = p[e]);
     if (d[r]) {
      d[r] = c.join(f) + f + d[r];
     } else {
      d[r] = c.join(f);
     }
     try {
      let r = a.fork(i.join(__dirname, "resolve.js"), [], {
       env: d,
       execArgv: []
      });
      r.on("message", e => {
       if (e.command === "resolve") {
        let i = t;
        if (e.success) {
         i = e.result;
        }
        r.send({
         command: "exit"
        });
        try {
         s(n("6PIK")(i));
        } catch (e) {
         o(e);
        }
       }
      });
      let u = {
       command: "resolve",
       args: t
      };
      r.send(u);
     } catch (e) {
      o(e);
     }
    });
   });
  }
  t.resolveModule = c;
  function l(e, t, n, r) {
   const s = "NODE_PATH";
   const o = [ "var p = process;", "p.on('message',function(m){", "if(m.c==='e'){", "p.exit(0);", "}", "else if(m.c==='rs'){", "try{", "var r=require.resolve(m.a);", "p.send({c:'r',s:true,r:r});", "}", "catch(err){", "p.send({c:'r',s:false});", "}", "}", "});" ].join("");
   return new Promise((u, c) => {
    let l = process.env;
    let h = Object.create(null);
    Object.keys(l).forEach(e => h[e] = l[e]);
    if (t) {
     if (h[s]) {
      h[s] = t + i.delimiter + h[s];
     } else {
      h[s] = t;
     }
     if (r) {
      r(`NODE_PATH value is: ${h[s]}`);
     }
    }
    h["ATOM_SHELL_INTERNAL_RUN_AS_NODE"] = "1";
    try {
     let t = a.fork("", [], {
      cwd: n,
      env: h,
      execArgv: [ "-e", o ]
     });
     t.on("error", e => {
      c(e);
     });
     t.on("message", n => {
      if (n.c === "r") {
       t.send({
        c: "e"
       });
       if (n.s) {
        u(n.r);
       } else {
        c(new Error(`Failed to resolve module: ${e}`));
       }
      }
     });
     let r = {
      c: "rs",
      a: e
     };
     t.send(r);
    } catch (e) {
     c(e);
    }
   });
  }
  t.resolve = l;
  function h(e) {
   let t = "npm";
   let n = {
    encoding: "utf8"
   };
   if (u()) {
    t = "npm.cmd";
    n.shell = true;
   }
   let r = a.spawnSync(t, [ "config", "get", "prefix" ], n).stdout;
   if (!r) {
    if (e) {
     e(`'npm config get prefix' didn't return a value.`);
    }
    return undefined;
   }
   let s = r.trim();
   if (e) {
    e(`'npm config get prefix' value is: ${s}`);
   }
   if (s.length > 0) {
    if (u()) {
     return i.join(s, "node_modules");
    } else {
     return i.join(s, "lib", "node_modules");
    }
   }
   return undefined;
  }
  t.resolveGlobalNodePath = h;
  function f(e) {
   let t = "yarn";
   let n = {
    encoding: "utf8"
   };
   if (u()) {
    t = "yarn.cmd";
    n.shell = true;
   }
   let r = a.spawnSync(t, [ "global", "dir", "--json" ], n);
   let s = r.stdout;
   if (!s) {
    if (e) {
     e(`'yarn global dir' didn't return a value.`);
     if (r.stderr) {
      e(r.stderr);
     }
    }
    return undefined;
   }
   let o = s.trim().split(/\r?\n/);
   for (let e of o) {
    try {
     let t = JSON.parse(e);
     if (t.type === "log") {
      return i.join(t.data, "node_modules");
     }
    } catch (e) {}
   }
   return undefined;
  }
  t.resolveGlobalYarnPath = f;
  var p;
  (function(e) {
   let t = undefined;
   function n() {
    if (t !== void 0) {
     return t;
    }
    if (process.platform === "win32") {
     t = false;
    } else {
     t = !s.existsSync(__filename.toUpperCase()) || !s.existsSync(__filename.toLowerCase());
    }
    return t;
   }
   e.isCaseSensitive = n;
   function r(e, t) {
    if (n()) {
     return i.normalize(t).indexOf(i.normalize(e)) === 0;
    } else {
     return i.normalize(t).toLowerCase().indexOf(i.normalize(e).toLowerCase()) == 0;
    }
   }
   e.isParent = r;
  })(p = t.FileSystem || (t.FileSystem = {}));
  function d(e, t, n, r) {
   if (n) {
    if (!i.isAbsolute(n)) {
     n = i.join(e, n);
    }
    return l(t, n, n, r).then(e => {
     if (p.isParent(n, e)) {
      return e;
     } else {
      return Promise.reject(new Error(`Failed to load ${t} from node path location.`));
     }
    }).then(undefined, n => {
     return l(t, h(r), e, r);
    });
   } else {
    return l(t, h(r), e, r);
   }
  }
  t.resolveModulePath = d;
  function m(e, t, r, i) {
   return d(e, t, r, i).then(e => {
    if (i) {
     i(`Module ${t} got resolved to ${e}`);
    }
    return n("6PIK")(e);
   });
  }
  t.resolveModule2 = m;
 },
 AXjB: function(e, t, n) {
  t = e.exports = n("HoXx");
  t.log = s;
  t.formatArgs = i;
  t.save = a;
  t.load = o;
  t.useColors = r;
  t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u();
  t.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ];
  function r() {
   if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
    return true;
   }
   if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
   }
   return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  t.formatters.j = function(e) {
   try {
    return JSON.stringify(e);
   } catch (e) {
    return "[UnexpectedJSONParseError]: " + e.message;
   }
  };
  function i(e) {
   var n = this.useColors;
   e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff);
   if (!n) return;
   var r = "color: " + this.color;
   e.splice(1, 0, r, "color: inherit");
   var i = 0;
   var s = 0;
   e[0].replace(/%[a-zA-Z%]/g, function(e) {
    if ("%%" === e) return;
    i++;
    if ("%c" === e) {
     s = i;
    }
   });
   e.splice(s, 0, r);
  }
  function s() {
   return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }
  function a(e) {
   try {
    if (null == e) {
     t.storage.removeItem("debug");
    } else {
     t.storage.debug = e;
    }
   } catch (e) {}
  }
  function o() {
   var e;
   try {
    e = t.storage.debug;
   } catch (e) {}
   if (!e && typeof process !== "undefined" && "env" in process) {
    e = process.env.DEBUG;
   }
   return e;
  }
  t.enable(o());
  function u() {
   try {
    return window.localStorage;
   } catch (e) {}
  }
 },
 AyFj: function(e, t, n) {
  "use strict";
  e.exports = function() {
   "use strict";
   var e = n("iYeQ");
   function t(e) {
    return e && typeof e.then === "function" && typeof e.catch === "function";
   }
   return function n(r, i) {
    return function() {
     for (var n = arguments.length, s = Array(n), a = 0; a < n; a++) {
      s[a] = arguments[a];
     }
     var o = i && i.multiArgs;
     var u = void 0;
     if (i && i.thisArg) {
      u = i.thisArg;
     } else if (i) {
      u = i;
     }
     return new e(function(e, n) {
      s.push(function t(r) {
       if (r) {
        return n(r);
       }
       for (var i = arguments.length, s = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) {
        s[a - 1] = arguments[a];
       }
       if (false === !!o) {
        return e(s[0]);
       }
       e(s);
      });
      var i = r.apply(u, s);
      if (t(i)) {
       e(i);
      }
     });
    };
   };
  }();
 },
 BSzB: function(e, t, n) {
  "use strict";
  var r = n("4JhR");
  var i = n("cYFF");
  var s = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?" + "|\\.[0-9_]+(?:[eE][-+][0-9]+)?" + "|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*" + "|[-+]?\\.(?:inf|Inf|INF)" + "|\\.(?:nan|NaN|NAN))$");
  function a(e) {
   if (null === e) {
    return false;
   }
   var t, n, r, i;
   if (!s.test(e)) {
    return false;
   }
   return true;
  }
  function o(e) {
   var t, n, r, i;
   t = e.replace(/_/g, "").toLowerCase();
   n = "-" === t[0] ? -1 : 1;
   i = [];
   if (0 <= "+-".indexOf(t[0])) {
    t = t.slice(1);
   }
   if (".inf" === t) {
    return 1 === n ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
   } else if (".nan" === t) {
    return NaN;
   } else if (0 <= t.indexOf(":")) {
    t.split(":").forEach(function(e) {
     i.unshift(parseFloat(e, 10));
    });
    t = 0;
    r = 1;
    i.forEach(function(e) {
     t += e * r;
     r *= 60;
    });
    return n * t;
   }
   return n * parseFloat(t, 10);
  }
  function u(e, t) {
   if (isNaN(e)) {
    switch (t) {
    case "lowercase":
     return ".nan";

    case "uppercase":
     return ".NAN";

    case "camelcase":
     return ".NaN";
    }
   } else if (Number.POSITIVE_INFINITY === e) {
    switch (t) {
    case "lowercase":
     return ".inf";

    case "uppercase":
     return ".INF";

    case "camelcase":
     return ".Inf";
    }
   } else if (Number.NEGATIVE_INFINITY === e) {
    switch (t) {
    case "lowercase":
     return "-.inf";

    case "uppercase":
     return "-.INF";

    case "camelcase":
     return "-.Inf";
    }
   } else if (r.isNegativeZero(e)) {
    return "-0.0";
   }
   return e.toString(10);
  }
  function c(e) {
   return "[object Number]" === Object.prototype.toString.call(e) && (0 !== e % 1 || r.isNegativeZero(e));
  }
  e.exports = new i.Type("tag:yaml.org,2002:float", {
   kind: "scalar",
   resolve: a,
   construct: o,
   predicate: c,
   represent: u,
   defaultStyle: "lowercase"
  });
 },
 BZb6: function(e, t, n) {
  "use strict";
  var r = n("7Nz6");
  var i = new r.Schema({
   include: [ n("L4jM") ],
   explicit: [ n("adOI"), n("mWcC") ]
  });
  r.Schema.DEFAULT = i;
  e.exports = i;
 },
 Bovr: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("bzos");
  var i = n("7WL4");
  var s = n("KEll");
  var a = n("QSeV");
  var o = n("z7N8");
  var u = n("FMKJ");
  var c = n("EoxW");
  c.config(process.env["VSCODE_NLS_CONFIG"]);
  var l = c.loadMessageBundle();
  var h = null;
  var f = true;
  function p(e, t) {
   h = e;
   f = t;
  }
  t.configure = p;
  function d(e) {
   var t = x(e.url, {
    proxyUrl: h,
    strictSSL: f
   });
   e = m({}, e);
   e = m(e, {
    agent: t,
    strictSSL: f
   });
   if (typeof e.followRedirects !== "number") {
    e.followRedirects = 5;
   }
   return v(e).then(function(t) {
    return new Promise(function(n, r) {
     var i = t.res;
     var s = i;
     var a = i.headers && i.headers["content-encoding"];
     var o = false;
     if (a === "gzip") {
      var c = u.createGunzip();
      i.pipe(c);
      s = c;
     } else if (a === "deflate") {
      var h = u.createInflate();
      i.pipe(h);
      s = h;
     }
     var f = [];
     s.on("data", function(e) {
      return f.push(e);
     });
     s.on("end", function() {
      if (o) {
       return;
      }
      o = true;
      if (e.followRedirects > 0 && (i.statusCode >= 300 && i.statusCode <= 303 || i.statusCode === 307)) {
       var t = i.headers["location"];
       if (t) {
        var s = {
         type: e.type,
         url: t,
         user: e.user,
         password: e.password,
         responseType: e.responseType,
         headers: e.headers,
         timeout: e.timeout,
         followRedirects: e.followRedirects - 1,
         data: e.data
        };
        d(s).then(n, r);
        return;
       }
      }
      var a = {
       responseText: f.join(""),
       status: i.statusCode
      };
      if (i.statusCode >= 200 && i.statusCode < 300 || i.statusCode === 1223) {
       n(a);
      } else {
       r(a);
      }
     });
     s.on("error", function(t) {
      var n = {
       responseText: l("error", "Unable to access {0}. Error: {1}", e.url, t.message),
       status: 500
      };
      o = true;
      r(n);
     });
    });
   }, function(n) {
    var r;
    if (t) {
     r = l("error.cannot.connect.proxy", "Unable to connect to {0} through a proxy . Error: {1}", e.url, n.message);
    } else {
     r = l("error.cannot.connect", "Unable to connect to {0}. Error: {1}", e.url, n.message);
    }
    return Promise.reject({
     responseText: r,
     status: 404
    });
   });
  }
  t.xhr = d;
  function m(e) {
   var t = [];
   for (var n = 1; n < arguments.length; n++) {
    t[n - 1] = arguments[n];
   }
   t.forEach(function(t) {
    return Object.keys(t).forEach(function(n) {
     return e[n] = t[n];
    });
   });
   return e;
  }
  function v(e) {
   var t;
   return new Promise(function(n, a) {
    var o = r.parse(e.url);
    var u = {
     hostname: o.hostname,
     port: o.port ? parseInt(o.port) : o.protocol === "https:" ? 443 : 80,
     path: o.path,
     method: e.type || "GET",
     headers: e.headers,
     agent: e.agent,
     rejectUnauthorized: typeof e.strictSSL === "boolean" ? e.strictSSL : true
    };
    if (e.user && e.password) {
     u.auth = e.user + ":" + e.password;
    }
    var c = function(r) {
     if (r.statusCode >= 300 && r.statusCode < 400 && e.followRedirects && e.followRedirects > 0 && r.headers["location"]) {
      n(v(m({}, e, {
       url: r.headers["location"],
       followRedirects: e.followRedirects - 1
      })));
     } else {
      n({
       req: t,
       res: r
      });
     }
    };
    if (o.protocol === "https:") {
     t = i.request(u, c);
    } else {
     t = s.request(u, c);
    }
    t.on("error", a);
    if (e.timeout) {
     t.setTimeout(e.timeout);
    }
    if (e.data) {
     t.write(e.data);
    }
    t.end();
   });
  }
  function g(e) {
   if (e < 400) {
    return void 0;
   }
   switch (e) {
   case 400:
    return l("status.400", "Bad request. The request cannot be fulfilled due to bad syntax.");

   case 401:
    return l("status.401", "Unauthorized. The server is refusing to respond.");

   case 403:
    return l("status.403", "Forbidden. The server is refusing to respond.");

   case 404:
    return l("status.404", "Not Found. The requested location could not be found.");

   case 405:
    return l("status.405", "Method not allowed. A request was made using a request method not supported by that location.");

   case 406:
    return l("status.406", "Not Acceptable. The server can only generate a response that is not accepted by the client.");

   case 407:
    return l("status.407", "Proxy Authentication Required. The client must first authenticate itself with the proxy.");

   case 408:
    return l("status.408", "Request Timeout. The server timed out waiting for the request.");

   case 409:
    return l("status.409", "Conflict. The request could not be completed because of a conflict in the request.");

   case 410:
    return l("status.410", "Gone. The requested page is no longer available.");

   case 411:
    return l("status.411", 'Length Required. The "Content-Length" is not defined.');

   case 412:
    return l("status.412", "Precondition Failed. The precondition given in the request evaluated to false by the server.");

   case 413:
    return l("status.413", "Request Entity Too Large. The server will not accept the request, because the request entity is too large.");

   case 414:
    return l("status.414", "Request-URI Too Long. The server will not accept the request, because the URL is too long.");

   case 415:
    return l("status.415", "Unsupported Media Type. The server will not accept the request, because the media type is not supported.");

   case 500:
    return l("status.500", "Internal Server Error.");

   case 501:
    return l("status.501", "Not Implemented. The server either does not recognize the request method, or it lacks the ability to fulfill the request.");

   case 503:
    return l("status.503", "Service Unavailable. The server is currently unavailable (overloaded or down).");

   default:
    return l("status.416", "HTTP status code {0}", e);
   }
  }
  t.getErrorStatusDescription = g;
  function y(e) {
   if (e.protocol === "http:") {
    return process.env.HTTP_PROXY || process.env.http_proxy || null;
   } else if (e.protocol === "https:") {
    return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || null;
   }
   return null;
  }
  function x(e, t) {
   if (t === void 0) {
    t = {};
   }
   var n = r.parse(e);
   var i = t.proxyUrl || y(n);
   if (!i) {
    return null;
   }
   var s = r.parse(i);
   if (!/^https?:$/.test(s.protocol)) {
    return null;
   }
   var u = {
    host: s.hostname,
    port: Number(s.port),
    auth: s.auth,
    rejectUnauthorized: typeof t.strictSSL === "boolean" ? t.strictSSL : true
   };
   return n.protocol === "http:" ? new a(u) : new o(u);
  }
 },
 C7CX: function(e, t, n) {
  "use strict";
  function r(e) {
   for (var n in e) if (!t.hasOwnProperty(n)) t[n] = e[n];
  }
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const i = n("yRVO");
  t.Event = i.Event;
  const s = n("Nej0");
  const a = n("/sqj");
  const o = n("E3tu");
  const u = n("bGBN");
  r(n("yRVO"));
  const c = n("9t9m");
  var l;
  (function(e) {
   e.uriToFilePath = c.uriToFilePath;
   e.resolveGlobalNodePath = c.resolveGlobalNodePath;
   e.resolveGlobalYarnPath = c.resolveGlobalYarnPath;
   e.resolve = c.resolve;
   e.resolveModule = c.resolveModule;
   e.resolveModule2 = c.resolveModule2;
   e.resolveModulePath = c.resolveModulePath;
  })(l = t.Files || (t.Files = {}));
  let h = false;
  let f = undefined;
  function p() {
   const e = "--clientProcessId";
   function t(e) {
    try {
     let t = parseInt(e);
     if (!isNaN(t)) {
      f = setInterval(() => {
       try {
        process.kill(t, 0);
       } catch (e) {
        process.exit(h ? 0 : 1);
       }
      }, 3e3);
     }
    } catch (e) {}
   }
   for (let n = 2; n < process.argv.length; n++) {
    let r = process.argv[n];
    if (r === e && n + 1 < process.argv.length) {
     t(process.argv[n + 1]);
     return;
    } else {
     let n = r.split("=");
     if (n[0] === e) {
      t(n[1]);
     }
    }
   }
  }
  p();
  function d(e) {
   if (e === null) {
    return void 0;
   }
   return e;
  }
  class m {
   constructor() {
    this._documents = Object.create(null);
    this._onDidChangeContent = new i.Emitter();
    this._onDidOpen = new i.Emitter();
    this._onDidClose = new i.Emitter();
    this._onDidSave = new i.Emitter();
    this._onWillSave = new i.Emitter();
   }
   get syncKind() {
    return i.TextDocumentSyncKind.Full;
   }
   get onDidChangeContent() {
    return this._onDidChangeContent.event;
   }
   get onDidOpen() {
    return this._onDidOpen.event;
   }
   get onWillSave() {
    return this._onWillSave.event;
   }
   onWillSaveWaitUntil(e) {
    this._willSaveWaitUntil = e;
   }
   get onDidSave() {
    return this._onDidSave.event;
   }
   get onDidClose() {
    return this._onDidClose.event;
   }
   get(e) {
    return this._documents[e];
   }
   all() {
    return Object.keys(this._documents).map(e => this._documents[e]);
   }
   keys() {
    return Object.keys(this._documents);
   }
   listen(e) {
    function t(e) {
     return o.func(e.update);
    }
    e.__textDocumentSync = i.TextDocumentSyncKind.Full;
    e.onDidOpenTextDocument(e => {
     let t = e.textDocument;
     let n = i.TextDocument.create(t.uri, t.languageId, t.version, t.text);
     this._documents[t.uri] = n;
     let r = Object.freeze({
      document: n
     });
     this._onDidOpen.fire(r);
     this._onDidChangeContent.fire(r);
    });
    e.onDidChangeTextDocument(e => {
     let n = e.textDocument;
     let r = e.contentChanges;
     let i = r.length > 0 ? r[r.length - 1] : undefined;
     if (i) {
      let e = this._documents[n.uri];
      if (e && t(e)) {
       if (n.version === null || n.version === void 0) {
        throw new Error(`Recevied document change event for ${n.uri} without valid version identifier`);
       }
       e.update(i, n.version);
       this._onDidChangeContent.fire(Object.freeze({
        document: e
       }));
      }
     }
    });
    e.onDidCloseTextDocument(e => {
     let t = this._documents[e.textDocument.uri];
     if (t) {
      delete this._documents[e.textDocument.uri];
      this._onDidClose.fire(Object.freeze({
       document: t
      }));
     }
    });
    e.onWillSaveTextDocument(e => {
     let t = this._documents[e.textDocument.uri];
     if (t) {
      this._onWillSave.fire(Object.freeze({
       document: t,
       reason: e.reason
      }));
     }
    });
    e.onWillSaveTextDocumentWaitUntil((e, t) => {
     let n = this._documents[e.textDocument.uri];
     if (n && this._willSaveWaitUntil) {
      return this._willSaveWaitUntil(Object.freeze({
       document: n,
       reason: e.reason
      }), t);
     } else {
      return [];
     }
    });
    e.onDidSaveTextDocument(e => {
     let t = this._documents[e.textDocument.uri];
     if (t) {
      this._onDidSave.fire(Object.freeze({
       document: t
      }));
     }
    });
   }
  }
  t.TextDocuments = m;
  class v {
   constructor() {
    this._messages = Object.create(null);
   }
   add(e) {
    let t = this._messages[e];
    if (!t) {
     t = 0;
    }
    t++;
    this._messages[e] = t;
   }
   sendErrors(e) {
    Object.keys(this._messages).forEach(t => {
     e.window.showErrorMessage(t);
    });
   }
  }
  t.ErrorMessageTracker = v;
  var g;
  (function(e) {
   function t() {
    return new y();
   }
   e.create = t;
  })(g = t.BulkRegistration || (t.BulkRegistration = {}));
  class y {
   constructor() {
    this._registrations = [];
    this._registered = new Set();
   }
   add(e, t) {
    const n = o.string(e) ? e : e.method;
    if (this._registered.has(n)) {
     throw new Error(`${n} is already added to this registration`);
    }
    const r = u.generateUuid();
    this._registrations.push({
     id: r,
     method: n,
     registerOptions: t || {}
    });
    this._registered.add(n);
   }
   asRegistrationParams() {
    return {
     registrations: this._registrations
    };
   }
  }
  var x;
  (function(e) {
   function t() {
    return new C(undefined, []);
   }
   e.create = t;
  })(x = t.BulkUnregistration || (t.BulkUnregistration = {}));
  class C {
   constructor(e, t) {
    this._connection = e;
    this._unregistrations = new Map();
    t.forEach(e => {
     this._unregistrations.set(e.method, e);
    });
   }
   get isAttached() {
    return !!this._connection;
   }
   attach(e) {
    this._connection = e;
   }
   add(e) {
    this._unregistrations.set(e.method, e);
   }
   dispose() {
    let e = [];
    for (let t of this._unregistrations.values()) {
     e.push(t);
    }
    let t = {
     unregisterations: e
    };
    this._connection.sendRequest(i.UnregistrationRequest.type, t).then(undefined, e => {
     this._connection.console.info(`Bulk unregistration failed.`);
    });
   }
   disposeSingle(e) {
    const t = o.string(e) ? e : e.method;
    const n = this._unregistrations.get(t);
    if (!n) {
     return false;
    }
    let r = {
     unregisterations: [ n ]
    };
    this._connection.sendRequest(i.UnregistrationRequest.type, r).then(() => {
     this._unregistrations.delete(t);
    }, e => {
     this._connection.console.info(`Unregistering request handler for ${n.id} failed.`);
    });
    return true;
   }
  }
  class D {
   constructor() {}
   rawAttach(e) {
    this._rawConnection = e;
   }
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   fillServerCapabilities(e) {}
   initialize(e) {}
   error(e) {
    this.send(i.MessageType.Error, e);
   }
   warn(e) {
    this.send(i.MessageType.Warning, e);
   }
   info(e) {
    this.send(i.MessageType.Info, e);
   }
   log(e) {
    this.send(i.MessageType.Log, e);
   }
   send(e, t) {
    if (this._rawConnection) {
     this._rawConnection.sendNotification(i.LogMessageNotification.type, {
      type: e,
      message: t
     });
    }
   }
  }
  class E {
   constructor() {}
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   showErrorMessage(e, ...t) {
    let n = {
     type: i.MessageType.Error,
     message: e,
     actions: t
    };
    return this._connection.sendRequest(i.ShowMessageRequest.type, n).then(d);
   }
   showWarningMessage(e, ...t) {
    let n = {
     type: i.MessageType.Warning,
     message: e,
     actions: t
    };
    return this._connection.sendRequest(i.ShowMessageRequest.type, n).then(d);
   }
   showInformationMessage(e, ...t) {
    let n = {
     type: i.MessageType.Info,
     message: e,
     actions: t
    };
    return this._connection.sendRequest(i.ShowMessageRequest.type, n).then(d);
   }
  }
  class b {
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   register(e, t, n) {
    if (e instanceof y) {
     return this.registerMany(e);
    } else if (e instanceof C) {
     return this.registerSingle1(e, t, n);
    } else {
     return this.registerSingle2(e, t);
    }
   }
   registerSingle1(e, t, n) {
    const r = o.string(t) ? t : t.method;
    const s = u.generateUuid();
    let a = {
     registrations: [ {
      id: s,
      method: r,
      registerOptions: n || {}
     } ]
    };
    if (!e.isAttached) {
     e.attach(this._connection);
    }
    return this._connection.sendRequest(i.RegistrationRequest.type, a).then(t => {
     e.add({
      id: s,
      method: r
     });
     return e;
    }, e => {
     this.connection.console.info(`Registering request handler for ${r} failed.`);
     return Promise.reject(e);
    });
   }
   registerSingle2(e, t) {
    const n = o.string(e) ? e : e.method;
    const r = u.generateUuid();
    let s = {
     registrations: [ {
      id: r,
      method: n,
      registerOptions: t || {}
     } ]
    };
    return this._connection.sendRequest(i.RegistrationRequest.type, s).then(e => {
     return i.Disposable.create(() => {
      this.unregisterSingle(r, n);
     });
    }, e => {
     this.connection.console.info(`Registering request handler for ${n} failed.`);
     return Promise.reject(e);
    });
   }
   unregisterSingle(e, t) {
    let n = {
     unregisterations: [ {
      id: e,
      method: t
     } ]
    };
    return this._connection.sendRequest(i.UnregistrationRequest.type, n).then(undefined, t => {
     this.connection.console.info(`Unregistering request handler for ${e} failed.`);
    });
   }
   registerMany(e) {
    let t = e.asRegistrationParams();
    return this._connection.sendRequest(i.RegistrationRequest.type, t).then(() => {
     return new C(this._connection, t.registrations.map(e => {
      return {
       id: e.id,
       method: e.method
      };
     }));
    }, e => {
     this.connection.console.info(`Bulk registration failed.`);
     return Promise.reject(e);
    });
   }
  }
  class w {
   constructor() {}
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   applyEdit(e) {
    function t(e) {
     return e && !!e.edit;
    }
    let n = t(e) ? e : {
     edit: e
    };
    return this._connection.sendRequest(i.ApplyWorkspaceEditRequest.type, n);
   }
  }
  const S = a.WorkspaceFoldersFeature(s.ConfigurationFeature(w));
  class A {
   constructor() {
    this._trace = i.Trace.Off;
   }
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   set trace(e) {
    this._trace = e;
   }
   log(e, t) {
    if (this._trace === i.Trace.Off) {
     return;
    }
    this._connection.sendNotification(i.LogTraceNotification.type, {
     message: e,
     verbose: this._trace === i.Trace.Verbose ? t : undefined
    });
   }
  }
  class k {
   constructor() {}
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   logEvent(e) {
    this._connection.sendNotification(i.TelemetryEventNotification.type, e);
   }
  }
  function F(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineConsoleFeatures = F;
  function T(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineTelemetryFeatures = T;
  function _(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineTracerFeatures = _;
  function N(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineClientFeatures = N;
  function O(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineWindowFeatures = O;
  function P(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineWorkspaceFeatures = P;
  function I(e, t) {
   function n(e, t, n) {
    if (e && t) {
     return n(e, t);
    } else if (e) {
     return e;
    } else {
     return t;
    }
   }
   let r = {
    __brand: "features",
    console: n(e.console, t.console, F),
    tracer: n(e.tracer, t.tracer, _),
    telemetry: n(e.telemetry, t.telemetry, T),
    client: n(e.client, t.client, N),
    window: n(e.window, t.window, O),
    workspace: n(e.workspace, t.workspace, P)
   };
   return r;
  }
  t.combineFeatures = I;
  function M(e, t, n, r) {
   let s;
   let a;
   let o;
   let u;
   if (e !== void 0 && e.__brand === "features") {
    s = e;
    e = t;
    t = n;
    n = r;
   }
   if (i.ConnectionStrategy.is(e)) {
    u = e;
   } else {
    a = e;
    o = t;
    u = n;
   }
   return R(a, o, u, s);
  }
  t.createConnection = M;
  function R(e, t, n, r) {
   if (!e && !t && process.argv.length > 2) {
    let n = void 0;
    let r = void 0;
    let a = process.argv.slice(2);
    for (let o = 0; o < a.length; o++) {
     let u = a[o];
     if (u === "--node-ipc") {
      e = new i.IPCMessageReader(process);
      t = new i.IPCMessageWriter(process);
      break;
     } else if (u === "--stdio") {
      e = process.stdin;
      t = process.stdout;
      break;
     } else if (u === "--socket") {
      n = parseInt(a[o + 1]);
      break;
     } else if (u === "--pipe") {
      r = a[o + 1];
      break;
     } else {
      var s = u.split("=");
      if (s[0] === "--socket") {
       n = parseInt(s[1]);
       break;
      } else if (s[0] === "--pipe") {
       r = s[1];
       break;
      }
     }
    }
    if (n) {
     let r = i.createServerSocketTransport(n);
     e = r[0];
     t = r[1];
    } else if (r) {
     let n = i.createServerPipeTransport(r);
     e = n[0];
     t = n[1];
    }
   }
   var a = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
   if (!e) {
    throw new Error("Connection input stream is not set. " + a);
   }
   if (!t) {
    throw new Error("Connection output stream is not set. " + a);
   }
   if (o.func(e.read) && o.func(e.on)) {
    let t = e;
    t.on("end", () => {
     process.exit(h ? 0 : 1);
    });
    t.on("close", () => {
     process.exit(h ? 0 : 1);
    });
   }
   const u = r && r.console ? new (r.console(D))() : new D();
   const c = i.createProtocolConnection(e, t, u, n);
   u.rawAttach(c);
   const l = r && r.tracer ? new (r.tracer(A))() : new A();
   const p = r && r.telemetry ? new (r.telemetry(k))() : new k();
   const d = r && r.client ? new (r.client(b))() : new b();
   const m = r && r.window ? new (r.window(E))() : new E();
   const v = r && r.workspace ? new (r.workspace(S))() : new S();
   const g = [ u, l, p, d, m, v ];
   function y(e) {
    if (o.thenable(e)) {
     return e;
    } else {
     return Promise.resolve(e);
    }
   }
   let x = undefined;
   let C = undefined;
   let w = undefined;
   let F = {
    listen: () => c.listen(),
    sendRequest: (e, ...t) => c.sendRequest(o.string(e) ? e : e.method, ...t),
    onRequest: (e, t) => c.onRequest(e, t),
    sendNotification: (e, t) => {
     const n = o.string(e) ? e : e.method;
     if (arguments.length === 1) {
      c.sendNotification(n);
     } else {
      c.sendNotification(n, t);
     }
    },
    onNotification: (e, t) => c.onNotification(e, t),
    onInitialize: e => C = e,
    onInitialized: e => c.onNotification(i.InitializedNotification.type, e),
    onShutdown: e => x = e,
    onExit: e => w = e,
    get console() {
     return u;
    },
    get telemetry() {
     return p;
    },
    get tracer() {
     return l;
    },
    get client() {
     return d;
    },
    get window() {
     return m;
    },
    get workspace() {
     return v;
    },
    onDidChangeConfiguration: e => c.onNotification(i.DidChangeConfigurationNotification.type, e),
    onDidChangeWatchedFiles: e => c.onNotification(i.DidChangeWatchedFilesNotification.type, e),
    __textDocumentSync: undefined,
    onDidOpenTextDocument: e => c.onNotification(i.DidOpenTextDocumentNotification.type, e),
    onDidChangeTextDocument: e => c.onNotification(i.DidChangeTextDocumentNotification.type, e),
    onDidCloseTextDocument: e => c.onNotification(i.DidCloseTextDocumentNotification.type, e),
    onWillSaveTextDocument: e => c.onNotification(i.WillSaveTextDocumentNotification.type, e),
    onWillSaveTextDocumentWaitUntil: e => c.onRequest(i.WillSaveTextDocumentWaitUntilRequest.type, e),
    onDidSaveTextDocument: e => c.onNotification(i.DidSaveTextDocumentNotification.type, e),
    sendDiagnostics: e => c.sendNotification(i.PublishDiagnosticsNotification.type, e),
    onHover: e => c.onRequest(i.HoverRequest.type, e),
    onCompletion: e => c.onRequest(i.CompletionRequest.type, e),
    onCompletionResolve: e => c.onRequest(i.CompletionResolveRequest.type, e),
    onSignatureHelp: e => c.onRequest(i.SignatureHelpRequest.type, e),
    onDefinition: e => c.onRequest(i.DefinitionRequest.type, e),
    onTypeDefinition: e => c.onRequest(i.TypeDefinitionRequest.type, e),
    onImplementation: e => c.onRequest(i.ImplementationRequest.type, e),
    onReferences: e => c.onRequest(i.ReferencesRequest.type, e),
    onDocumentHighlight: e => c.onRequest(i.DocumentHighlightRequest.type, e),
    onDocumentSymbol: e => c.onRequest(i.DocumentSymbolRequest.type, e),
    onWorkspaceSymbol: e => c.onRequest(i.WorkspaceSymbolRequest.type, e),
    onCodeAction: e => c.onRequest(i.CodeActionRequest.type, e),
    onCodeLens: e => c.onRequest(i.CodeLensRequest.type, e),
    onCodeLensResolve: e => c.onRequest(i.CodeLensResolveRequest.type, e),
    onDocumentFormatting: e => c.onRequest(i.DocumentFormattingRequest.type, e),
    onDocumentRangeFormatting: e => c.onRequest(i.DocumentRangeFormattingRequest.type, e),
    onDocumentOnTypeFormatting: e => c.onRequest(i.DocumentOnTypeFormattingRequest.type, e),
    onRenameRequest: e => c.onRequest(i.RenameRequest.type, e),
    onDocumentLinks: e => c.onRequest(i.DocumentLinkRequest.type, e),
    onDocumentLinkResolve: e => c.onRequest(i.DocumentLinkResolveRequest.type, e),
    onDocumentColor: e => c.onRequest(i.DocumentColorRequest.type, e),
    onColorPresentation: e => c.onRequest(i.ColorPresentationRequest.type, e),
    onExecuteCommand: e => c.onRequest(i.ExecuteCommandRequest.type, e),
    dispose: () => c.dispose()
   };
   for (let e of g) {
    e.attach(F);
   }
   c.onRequest(i.InitializeRequest.type, e => {
    if (o.number(e.processId) && f === void 0) {
     setInterval(() => {
      try {
       process.kill(e.processId, 0);
      } catch (e) {
       process.exit(h ? 0 : 1);
      }
     }, 3e3);
    }
    if (o.string(e.trace)) {
     l.trace = i.Trace.fromString(e.trace);
    }
    for (let t of g) {
     t.initialize(e.capabilities);
    }
    if (C) {
     let t = C(e, new i.CancellationTokenSource().token);
     return y(t).then(e => {
      if (e instanceof i.ResponseError) {
       return e;
      }
      let t = e;
      if (!t) {
       t = {
        capabilities: {}
       };
      }
      let n = t.capabilities;
      if (!n) {
       n = {};
       t.capabilities = n;
      }
      if (!n.textDocumentSync) {
       n.textDocumentSync = o.number(F.__textDocumentSync) ? F.__textDocumentSync : i.TextDocumentSyncKind.None;
      } else if (!o.number(n.textDocumentSync) && !o.number(n.textDocumentSync.change)) {
       n.textDocumentSync.change = o.number(F.__textDocumentSync) ? F.__textDocumentSync : i.TextDocumentSyncKind.None;
      }
      for (let e of g) {
       e.fillServerCapabilities(n);
      }
      return t;
     });
    } else {
     let e = {
      capabilities: {
       textDocumentSync: i.TextDocumentSyncKind.None
      }
     };
     for (let t of g) {
      t.fillServerCapabilities(e.capabilities);
     }
     return e;
    }
   });
   c.onRequest(i.ShutdownRequest.type, () => {
    h = true;
    if (x) {
     return x(new i.CancellationTokenSource().token);
    } else {
     return undefined;
    }
   });
   c.onNotification(i.ExitNotification.type, () => {
    try {
     if (w) {
      w();
     }
    } finally {
     if (h) {
      process.exit(0);
     } else {
      process.exit(1);
     }
    }
   });
   c.onNotification(i.SetTraceNotification.type, e => {
    l.trace = i.Trace.fromString(e.value);
   });
   return F;
  }
  var B;
  (function(e) {
   e.all = {
    __brand: "features"
   };
  })(B = t.ProposedFeatures || (t.ProposedFeatures = {}));
 },
 DIqq: function(e, t, n) {
  "use strict";
  var r = n("gax4");
  var i = new RegExp("^([0-9][0-9][0-9][0-9])" + "-([0-9][0-9])" + "-([0-9][0-9])$");
  var s = new RegExp("^([0-9][0-9][0-9][0-9])" + "-([0-9][0-9]?)" + "-([0-9][0-9]?)" + "(?:[Tt]|[ \\t]+)" + "([0-9][0-9]?)" + ":([0-9][0-9])" + ":([0-9][0-9])" + "(?:\\.([0-9]*))?" + "(?:[ \\t]*(Z|([-+])([0-9][0-9]?)" + "(?::([0-9][0-9]))?))?$");
  function a(e) {
   if (e === null) return false;
   if (i.exec(e) !== null) return true;
   if (s.exec(e) !== null) return true;
   return false;
  }
  function o(e) {
   var t, n, r, a, o, u, c, l = 0, h = null, f, p, d;
   t = i.exec(e);
   if (t === null) t = s.exec(e);
   if (t === null) throw new Error("Date resolve error");
   n = +t[1];
   r = +t[2] - 1;
   a = +t[3];
   if (!t[4]) {
    return new Date(Date.UTC(n, r, a));
   }
   o = +t[4];
   u = +t[5];
   c = +t[6];
   if (t[7]) {
    l = t[7].slice(0, 3);
    while (l.length < 3) {
     l += "0";
    }
    l = +l;
   }
   if (t[9]) {
    f = +t[10];
    p = +(t[11] || 0);
    h = (f * 60 + p) * 6e4;
    if (t[9] === "-") h = -h;
   }
   d = new Date(Date.UTC(n, r, a, o, u, c, l));
   if (h) d.setTime(d.getTime() - h);
   return d;
  }
  function u(e) {
   return e.toISOString();
  }
  e.exports = new r("tag:yaml.org,2002:timestamp", {
   kind: "scalar",
   resolve: a,
   construct: o,
   instanceOf: Date,
   represent: u
  });
 },
 DboN: function(e, t, n) {
  "use strict";
  var r = n("gax4");
  function i(e) {
   if (e === null) return false;
   if (e.length === 0) return false;
   var t = e, n = /\/([gim]*)$/.exec(e), r = "";
   if (t[0] === "/") {
    if (n) r = n[1];
    if (r.length > 3) return false;
    if (t[t.length - r.length - 1] !== "/") return false;
   }
   return true;
  }
  function s(e) {
   var t = e, n = /\/([gim]*)$/.exec(e), r = "";
   if (t[0] === "/") {
    if (n) r = n[1];
    t = t.slice(1, t.length - r.length - 1);
   }
   return new RegExp(t, r);
  }
  function a(e) {
   var t = "/" + e.source + "/";
   if (e.global) t += "g";
   if (e.multiline) t += "m";
   if (e.ignoreCase) t += "i";
   return t;
  }
  function o(e) {
   return Object.prototype.toString.call(e) === "[object RegExp]";
  }
  e.exports = new r("tag:yaml.org,2002:js/regexp", {
   kind: "scalar",
   resolve: i,
   construct: s,
   predicate: o,
   represent: a
  });
 },
 E2g8: function(e, t, n) {
  (function(t, n) {
   true ? e.exports = n() : undefined;
  })(this, function() {
   "use strict";
   function e(e) {
    var t = typeof e;
    return e !== null && (t === "object" || t === "function");
   }
   function t(e) {
    return typeof e === "function";
   }
   var n = void 0;
   if (Array.isArray) {
    n = Array.isArray;
   } else {
    n = function(e) {
     return Object.prototype.toString.call(e) === "[object Array]";
    };
   }
   var r = n;
   var i = 0;
   var s = void 0;
   var a = void 0;
   var o = function e(t, n) {
    C[i] = t;
    C[i + 1] = n;
    i += 2;
    if (i === 2) {
     if (a) {
      a(D);
     } else {
      b();
     }
    }
   };
   function u(e) {
    a = e;
   }
   function c(e) {
    o = e;
   }
   var l = typeof window !== "undefined" ? window : undefined;
   var h = l || {};
   var f = h.MutationObserver || h.WebKitMutationObserver;
   var p = typeof self === "undefined" && typeof process !== "undefined" && {}.toString.call(process) === "[object process]";
   var d = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
   function m() {
    return function() {
     return process.nextTick(D);
    };
   }
   function v() {
    if (typeof s !== "undefined") {
     return function() {
      s(D);
     };
    }
    return x();
   }
   function g() {
    var e = 0;
    var t = new f(D);
    var n = document.createTextNode("");
    t.observe(n, {
     characterData: true
    });
    return function() {
     n.data = e = ++e % 2;
    };
   }
   function y() {
    var e = new MessageChannel();
    e.port1.onmessage = D;
    return function() {
     return e.port2.postMessage(0);
    };
   }
   function x() {
    var e = setTimeout;
    return function() {
     return e(D, 1);
    };
   }
   var C = new Array(1e3);
   function D() {
    for (var e = 0; e < i; e += 2) {
     var t = C[e];
     var n = C[e + 1];
     t(n);
     C[e] = undefined;
     C[e + 1] = undefined;
    }
    i = 0;
   }
   function E() {
    try {
     var e = Function("return this")().require("vertx");
     s = e.runOnLoop || e.runOnContext;
     return v();
    } catch (e) {
     return x();
    }
   }
   var b = void 0;
   if (p) {
    b = m();
   } else if (f) {
    b = g();
   } else if (d) {
    b = y();
   } else if (l === undefined && "function" === "function") {
    b = E();
   } else {
    b = x();
   }
   function w(e, t) {
    var n = this;
    var r = new this.constructor(k);
    if (r[A] === undefined) {
     G(r);
    }
    var i = n._state;
    if (i) {
     var s = arguments[i - 1];
     o(function() {
      return X(i, r, s, n._result);
     });
    } else {
     z(n, r, e, t);
    }
    return r;
   }
   function S(e) {
    var t = this;
    if (e && typeof e === "object" && e.constructor === t) {
     return e;
    }
    var n = new t(k);
    j(n, e);
    return n;
   }
   var A = Math.random().toString(36).substring(2);
   function k() {}
   var F = void 0;
   var T = 1;
   var _ = 2;
   var N = {
    error: null
   };
   function O() {
    return new TypeError("You cannot resolve a promise with itself");
   }
   function P() {
    return new TypeError("A promises callback cannot return that same promise.");
   }
   function I(e) {
    try {
     return e.then;
    } catch (e) {
     N.error = e;
     return N;
    }
   }
   function M(e, t, n, r) {
    try {
     e.call(t, n, r);
    } catch (e) {
     return e;
    }
   }
   function R(e, t, n) {
    o(function(e) {
     var r = false;
     var i = M(n, t, function(n) {
      if (r) {
       return;
      }
      r = true;
      if (t !== n) {
       j(e, n);
      } else {
       U(e, n);
      }
     }, function(t) {
      if (r) {
       return;
      }
      r = true;
      W(e, t);
     }, "Settle: " + (e._label || " unknown promise"));
     if (!r && i) {
      r = true;
      W(e, i);
     }
    }, e);
   }
   function B(e, t) {
    if (t._state === T) {
     U(e, t._result);
    } else if (t._state === _) {
     W(e, t._result);
    } else {
     z(t, undefined, function(t) {
      return j(e, t);
     }, function(t) {
      return W(e, t);
     });
    }
   }
   function L(e, n, r) {
    if (n.constructor === e.constructor && r === w && n.constructor.resolve === S) {
     B(e, n);
    } else {
     if (r === N) {
      W(e, N.error);
      N.error = null;
     } else if (r === undefined) {
      U(e, n);
     } else if (t(r)) {
      R(e, n, r);
     } else {
      U(e, n);
     }
    }
   }
   function j(t, n) {
    if (t === n) {
     W(t, O());
    } else if (e(n)) {
     L(t, n, I(n));
    } else {
     U(t, n);
    }
   }
   function q(e) {
    if (e._onerror) {
     e._onerror(e._result);
    }
    V(e);
   }
   function U(e, t) {
    if (e._state !== F) {
     return;
    }
    e._result = t;
    e._state = T;
    if (e._subscribers.length !== 0) {
     o(V, e);
    }
   }
   function W(e, t) {
    if (e._state !== F) {
     return;
    }
    e._state = _;
    e._result = t;
    o(q, e);
   }
   function z(e, t, n, r) {
    var i = e._subscribers;
    var s = i.length;
    e._onerror = null;
    i[s] = t;
    i[s + T] = n;
    i[s + _] = r;
    if (s === 0 && e._state) {
     o(V, e);
    }
   }
   function V(e) {
    var t = e._subscribers;
    var n = e._state;
    if (t.length === 0) {
     return;
    }
    var r = void 0, i = void 0, s = e._result;
    for (var a = 0; a < t.length; a += 3) {
     r = t[a];
     i = t[a + n];
     if (r) {
      X(n, r, i, s);
     } else {
      i(s);
     }
    }
    e._subscribers.length = 0;
   }
   function J(e, t) {
    try {
     return e(t);
    } catch (e) {
     N.error = e;
     return N;
    }
   }
   function X(e, n, r, i) {
    var s = t(r), a = void 0, o = void 0, u = void 0, c = void 0;
    if (s) {
     a = J(r, i);
     if (a === N) {
      c = true;
      o = a.error;
      a.error = null;
     } else {
      u = true;
     }
     if (n === a) {
      W(n, P());
      return;
     }
    } else {
     a = i;
     u = true;
    }
    if (n._state !== F) {} else if (s && u) {
     j(n, a);
    } else if (c) {
     W(n, o);
    } else if (e === T) {
     U(n, a);
    } else if (e === _) {
     W(n, a);
    }
   }
   function K(e, t) {
    try {
     t(function t(n) {
      j(e, n);
     }, function t(n) {
      W(e, n);
     });
    } catch (t) {
     W(e, t);
    }
   }
   var H = 0;
   function Y() {
    return H++;
   }
   function G(e) {
    e[A] = H++;
    e._state = undefined;
    e._result = undefined;
    e._subscribers = [];
   }
   function $() {
    return new Error("Array Methods must be provided an Array");
   }
   var Q = function() {
    function e(e, t) {
     this._instanceConstructor = e;
     this.promise = new e(k);
     if (!this.promise[A]) {
      G(this.promise);
     }
     if (r(t)) {
      this.length = t.length;
      this._remaining = t.length;
      this._result = new Array(this.length);
      if (this.length === 0) {
       U(this.promise, this._result);
      } else {
       this.length = this.length || 0;
       this._enumerate(t);
       if (this._remaining === 0) {
        U(this.promise, this._result);
       }
      }
     } else {
      W(this.promise, $());
     }
    }
    e.prototype._enumerate = function e(t) {
     for (var n = 0; this._state === F && n < t.length; n++) {
      this._eachEntry(t[n], n);
     }
    };
    e.prototype._eachEntry = function e(t, n) {
     var r = this._instanceConstructor;
     var i = r.resolve;
     if (i === S) {
      var s = I(t);
      if (s === w && t._state !== F) {
       this._settledAt(t._state, n, t._result);
      } else if (typeof s !== "function") {
       this._remaining--;
       this._result[n] = t;
      } else if (r === ie) {
       var a = new r(k);
       L(a, t, s);
       this._willSettleAt(a, n);
      } else {
       this._willSettleAt(new r(function(e) {
        return e(t);
       }), n);
      }
     } else {
      this._willSettleAt(i(t), n);
     }
    };
    e.prototype._settledAt = function e(t, n, r) {
     var i = this.promise;
     if (i._state === F) {
      this._remaining--;
      if (t === _) {
       W(i, r);
      } else {
       this._result[n] = r;
      }
     }
     if (this._remaining === 0) {
      U(i, this._result);
     }
    };
    e.prototype._willSettleAt = function e(t, n) {
     var r = this;
     z(t, undefined, function(e) {
      return r._settledAt(T, n, e);
     }, function(e) {
      return r._settledAt(_, n, e);
     });
    };
    return e;
   }();
   function Z(e) {
    return new Q(this, e).promise;
   }
   function ee(e) {
    var t = this;
    if (!r(e)) {
     return new t(function(e, t) {
      return t(new TypeError("You must pass an array to race."));
     });
    } else {
     return new t(function(n, r) {
      var i = e.length;
      for (var s = 0; s < i; s++) {
       t.resolve(e[s]).then(n, r);
      }
     });
    }
   }
   function te(e) {
    var t = this;
    var n = new t(k);
    W(n, e);
    return n;
   }
   function ne() {
    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
   }
   function re() {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
   }
   var ie = function() {
    function e(t) {
     this[A] = Y();
     this._result = this._state = undefined;
     this._subscribers = [];
     if (k !== t) {
      typeof t !== "function" && ne();
      this instanceof e ? K(this, t) : re();
     }
    }
    e.prototype.catch = function e(t) {
     return this.then(null, t);
    };
    e.prototype.finally = function e(t) {
     var n = this;
     var r = n.constructor;
     return n.then(function(e) {
      return r.resolve(t()).then(function() {
       return e;
      });
     }, function(e) {
      return r.resolve(t()).then(function() {
       throw e;
      });
     });
    };
    return e;
   }();
   ie.prototype.then = w;
   ie.all = Z;
   ie.race = ee;
   ie.resolve = S;
   ie.reject = te;
   ie._setScheduler = u;
   ie._setAsap = c;
   ie._asap = o;
   function se() {
    var e = void 0;
    if (typeof global !== "undefined") {
     e = global;
    } else if (typeof self !== "undefined") {
     e = self;
    } else {
     try {
      e = Function("return this")();
     } catch (e) {
      throw new Error("polyfill failed because global object is unavailable in this environment");
     }
    }
    var t = e.Promise;
    if (t) {
     var n = null;
     try {
      n = Object.prototype.toString.call(t.resolve());
     } catch (e) {}
     if (n === "[object Promise]" && !t.cast) {
      return;
     }
    }
    e.Promise = ie;
   }
   ie.polyfill = se;
   ie.Promise = ie;
   return ie;
  });
 },
 E3tu: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = Object.prototype.toString;
  function i(e) {
   return typeof e !== "undefined";
  }
  t.defined = i;
  function s(e) {
   return typeof e === "undefined";
  }
  t.undefined = s;
  function a(e) {
   return e === null;
  }
  t.nil = a;
  function o(e) {
   return e === true || e === false;
  }
  t.boolean = o;
  function u(e) {
   return r.call(e) === "[object String]";
  }
  t.string = u;
  function c(e) {
   return r.call(e) === "[object Number]";
  }
  t.number = c;
  function l(e) {
   return r.call(e) === "[object Error]";
  }
  t.error = l;
  function h(e) {
   return r.call(e) === "[object Function]";
  }
  t.func = h;
  function f(e) {
   return Array.isArray(e);
  }
  t.array = f;
  function p(e) {
   return f(e) && e.every(e => u(e));
  }
  t.stringArray = p;
  function d(e, t) {
   return Array.isArray(e) && e.every(t);
  }
  t.typedArray = d;
  function m(e) {
   return e && h(e.then);
  }
  t.thenable = m;
 },
 E5wu: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("xkfG");
  const i = n("rWaT");
  const s = n("SQQq");
  t.ImplementationRequest = s.ImplementationRequest;
  const a = n("uL2m");
  t.TypeDefinitionRequest = a.TypeDefinitionRequest;
  const o = n("SH1Y");
  t.WorkspaceFoldersRequest = o.WorkspaceFoldersRequest;
  t.DidChangeWorkspaceFoldersNotification = o.DidChangeWorkspaceFoldersNotification;
  const u = n("Fr0/");
  t.ConfigurationRequest = u.ConfigurationRequest;
  const c = n("cg4v");
  t.DocumentColorRequest = c.DocumentColorRequest;
  t.ColorPresentationRequest = c.ColorPresentationRequest;
  var l;
  (function(e) {
   function t(e) {
    let t = e;
    return r.string(t.language) || r.string(t.scheme) || r.string(t.pattern);
   }
   e.is = t;
  })(l = t.DocumentFilter || (t.DocumentFilter = {}));
  var h;
  (function(e) {
   e.type = new i.RequestType("client/registerCapability");
  })(h = t.RegistrationRequest || (t.RegistrationRequest = {}));
  var f;
  (function(e) {
   e.type = new i.RequestType("client/unregisterCapability");
  })(f = t.UnregistrationRequest || (t.UnregistrationRequest = {}));
  var p;
  (function(e) {
   e.None = 0;
   e.Full = 1;
   e.Incremental = 2;
  })(p = t.TextDocumentSyncKind || (t.TextDocumentSyncKind = {}));
  var d;
  (function(e) {
   e.type = new i.RequestType("initialize");
  })(d = t.InitializeRequest || (t.InitializeRequest = {}));
  var m;
  (function(e) {
   e.unknownProtocolVersion = 1;
  })(m = t.InitializeError || (t.InitializeError = {}));
  var v;
  (function(e) {
   e.type = new i.NotificationType("initialized");
  })(v = t.InitializedNotification || (t.InitializedNotification = {}));
  var g;
  (function(e) {
   e.type = new i.RequestType0("shutdown");
  })(g = t.ShutdownRequest || (t.ShutdownRequest = {}));
  var y;
  (function(e) {
   e.type = new i.NotificationType0("exit");
  })(y = t.ExitNotification || (t.ExitNotification = {}));
  var x;
  (function(e) {
   e.type = new i.NotificationType("workspace/didChangeConfiguration");
  })(x = t.DidChangeConfigurationNotification || (t.DidChangeConfigurationNotification = {}));
  var C;
  (function(e) {
   e.Error = 1;
   e.Warning = 2;
   e.Info = 3;
   e.Log = 4;
  })(C = t.MessageType || (t.MessageType = {}));
  var D;
  (function(e) {
   e.type = new i.NotificationType("window/showMessage");
  })(D = t.ShowMessageNotification || (t.ShowMessageNotification = {}));
  var E;
  (function(e) {
   e.type = new i.RequestType("window/showMessageRequest");
  })(E = t.ShowMessageRequest || (t.ShowMessageRequest = {}));
  var b;
  (function(e) {
   e.type = new i.NotificationType("window/logMessage");
  })(b = t.LogMessageNotification || (t.LogMessageNotification = {}));
  var w;
  (function(e) {
   e.type = new i.NotificationType("telemetry/event");
  })(w = t.TelemetryEventNotification || (t.TelemetryEventNotification = {}));
  var S;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didOpen");
  })(S = t.DidOpenTextDocumentNotification || (t.DidOpenTextDocumentNotification = {}));
  var A;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didChange");
  })(A = t.DidChangeTextDocumentNotification || (t.DidChangeTextDocumentNotification = {}));
  var k;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didClose");
  })(k = t.DidCloseTextDocumentNotification || (t.DidCloseTextDocumentNotification = {}));
  var F;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didSave");
  })(F = t.DidSaveTextDocumentNotification || (t.DidSaveTextDocumentNotification = {}));
  var T;
  (function(e) {
   e.type = new i.NotificationType("textDocument/willSave");
  })(T = t.WillSaveTextDocumentNotification || (t.WillSaveTextDocumentNotification = {}));
  var _;
  (function(e) {
   e.type = new i.RequestType("textDocument/willSaveWaitUntil");
  })(_ = t.WillSaveTextDocumentWaitUntilRequest || (t.WillSaveTextDocumentWaitUntilRequest = {}));
  var N;
  (function(e) {
   e.type = new i.NotificationType("workspace/didChangeWatchedFiles");
  })(N = t.DidChangeWatchedFilesNotification || (t.DidChangeWatchedFilesNotification = {}));
  var O;
  (function(e) {
   e.Created = 1;
   e.Changed = 2;
   e.Deleted = 3;
  })(O = t.FileChangeType || (t.FileChangeType = {}));
  var P;
  (function(e) {
   e.Create = 1;
   e.Change = 2;
   e.Delete = 4;
  })(P = t.WatchKind || (t.WatchKind = {}));
  var I;
  (function(e) {
   e.type = new i.NotificationType("textDocument/publishDiagnostics");
  })(I = t.PublishDiagnosticsNotification || (t.PublishDiagnosticsNotification = {}));
  var M;
  (function(e) {
   e.Invoked = 1;
   e.TriggerCharacter = 2;
   e.TriggerForIncompleteCompletions = 3;
  })(M = t.CompletionTriggerKind || (t.CompletionTriggerKind = {}));
  var R;
  (function(e) {
   e.type = new i.RequestType("textDocument/completion");
  })(R = t.CompletionRequest || (t.CompletionRequest = {}));
  var B;
  (function(e) {
   e.type = new i.RequestType("completionItem/resolve");
  })(B = t.CompletionResolveRequest || (t.CompletionResolveRequest = {}));
  var L;
  (function(e) {
   e.type = new i.RequestType("textDocument/hover");
  })(L = t.HoverRequest || (t.HoverRequest = {}));
  var j;
  (function(e) {
   e.type = new i.RequestType("textDocument/signatureHelp");
  })(j = t.SignatureHelpRequest || (t.SignatureHelpRequest = {}));
  var q;
  (function(e) {
   e.type = new i.RequestType("textDocument/definition");
  })(q = t.DefinitionRequest || (t.DefinitionRequest = {}));
  var U;
  (function(e) {
   e.type = new i.RequestType("textDocument/references");
  })(U = t.ReferencesRequest || (t.ReferencesRequest = {}));
  var W;
  (function(e) {
   e.type = new i.RequestType("textDocument/documentHighlight");
  })(W = t.DocumentHighlightRequest || (t.DocumentHighlightRequest = {}));
  var z;
  (function(e) {
   e.type = new i.RequestType("textDocument/documentSymbol");
  })(z = t.DocumentSymbolRequest || (t.DocumentSymbolRequest = {}));
  var V;
  (function(e) {
   e.type = new i.RequestType("workspace/symbol");
  })(V = t.WorkspaceSymbolRequest || (t.WorkspaceSymbolRequest = {}));
  var J;
  (function(e) {
   e.type = new i.RequestType("textDocument/codeAction");
  })(J = t.CodeActionRequest || (t.CodeActionRequest = {}));
  var X;
  (function(e) {
   e.type = new i.RequestType("textDocument/codeLens");
  })(X = t.CodeLensRequest || (t.CodeLensRequest = {}));
  var K;
  (function(e) {
   e.type = new i.RequestType("codeLens/resolve");
  })(K = t.CodeLensResolveRequest || (t.CodeLensResolveRequest = {}));
  var H;
  (function(e) {
   e.type = new i.RequestType("textDocument/formatting");
  })(H = t.DocumentFormattingRequest || (t.DocumentFormattingRequest = {}));
  var Y;
  (function(e) {
   e.type = new i.RequestType("textDocument/rangeFormatting");
  })(Y = t.DocumentRangeFormattingRequest || (t.DocumentRangeFormattingRequest = {}));
  var G;
  (function(e) {
   e.type = new i.RequestType("textDocument/onTypeFormatting");
  })(G = t.DocumentOnTypeFormattingRequest || (t.DocumentOnTypeFormattingRequest = {}));
  var $;
  (function(e) {
   e.type = new i.RequestType("textDocument/rename");
  })($ = t.RenameRequest || (t.RenameRequest = {}));
  var Q;
  (function(e) {
   e.type = new i.RequestType("textDocument/documentLink");
  })(Q = t.DocumentLinkRequest || (t.DocumentLinkRequest = {}));
  var Z;
  (function(e) {
   e.type = new i.RequestType("documentLink/resolve");
  })(Z = t.DocumentLinkResolveRequest || (t.DocumentLinkResolveRequest = {}));
  var ee;
  (function(e) {
   e.type = new i.RequestType("workspace/executeCommand");
  })(ee = t.ExecuteCommandRequest || (t.ExecuteCommandRequest = {}));
  var te;
  (function(e) {
   e.type = new i.RequestType("workspace/applyEdit");
  })(te = t.ApplyWorkspaceEditRequest || (t.ApplyWorkspaceEditRequest = {}));
 },
 E9v7: function(e, t, n) {
  "use strict";
  var r = n("gax4");
  function i(e) {
   return e === "<<" || e === null;
  }
  e.exports = new r("tag:yaml.org,2002:merge", {
   kind: "scalar",
   resolve: i
  });
 },
 EoxW: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("oyvS");
  var i = n("mw/K");
  var s = Object.prototype.toString;
  function a(e) {
   return typeof e !== "undefined";
  }
  function o(e) {
   return s.call(e) === "[object Number]";
  }
  function u(e) {
   return s.call(e) === "[object String]";
  }
  function c(e) {
   return e === true || e === false;
  }
  var l;
  (function(e) {
   e["file"] = "file";
   e["bundle"] = "bundle";
   e["both"] = "both";
  })(l = t.MessageFormat || (t.MessageFormat = {}));
  var h;
  (function(e) {
   function t(e) {
    var t = e;
    return t && a(t.key) && a(t.comment);
   }
   e.is = t;
  })(h || (h = {}));
  var f;
  var p;
  var d;
  var m;
  function v() {
   d = {
    locale: undefined,
    cacheLanguageResolution: true,
    messageFormat: l.bundle
   };
   if (u(process.env.VSCODE_NLS_CONFIG)) {
    try {
     var e = JSON.parse(process.env.VSCODE_NLS_CONFIG);
     if (u(e.locale)) {
      d.locale = e.locale.toLowerCase();
     }
     if (u(e._cacheRoot)) {
      d.cacheRoot = e._cacheRoot;
     }
     if (u(e._languagePackId)) {
      d.languagePackId = e._languagePackId;
     }
     if (u(e._translationsConfigFile)) {
      d.translationsConfigFile = e._translationsConfigFile;
      try {
       d.translationsConfig = n("2vr2")(d.translationsConfigFile);
      } catch (e) {}
     }
    } catch (e) {}
   }
   m = d.locale === "pseudo";
   f = undefined;
   p = Object.create(null);
  }
  v();
  function g() {
   return d.cacheRoot !== undefined && d.languagePackId !== undefined && d.translationsConfigFile !== undefined && d.translationsConfig !== undefined;
  }
  function y(e, t) {
   var n;
   if (m) {
    e = "［" + e.replace(/[aouei]/g, "$&$&") + "］";
   }
   if (t.length === 0) {
    n = e;
   } else {
    n = e.replace(/\{(\d+)\}/g, function(e, n) {
     var r = n[0];
     return typeof t[r] !== "undefined" ? t[r] : e;
    });
   }
   return n;
  }
  function x(e) {
   return function(t, n) {
    var r = [];
    for (var i = 2; i < arguments.length; i++) {
     r[i - 2] = arguments[i];
    }
    if (o(t)) {
     if (t >= e.length) {
      console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: " + new Error("").stack);
      return;
     }
     return y(e[t], r);
    } else {
     if (u(n)) {
      console.warn("Message " + n + " didn't get externalized correctly.");
      return y(n, r);
     } else {
      console.error("Broken localize call found. Stacktrace is\n: " + new Error("").stack);
     }
    }
   };
  }
  function C(e, t) {
   var n = [];
   for (var r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r];
   }
   return y(t, n);
  }
  function D(e) {
   var t;
   if (d.cacheLanguageResolution && t) {
    t = t;
   } else {
    if (m || !d.locale) {
     t = ".nls.json";
    } else {
     var n = d.locale;
     while (n) {
      var r = ".nls." + n + ".json";
      if (i.existsSync(e + r)) {
       t = r;
       break;
      } else {
       var s = n.lastIndexOf("-");
       if (s > 0) {
        n = n.substring(0, s);
       } else {
        t = ".nls.json";
        n = null;
       }
      }
     }
    }
    if (d.cacheLanguageResolution) {
     t = t;
    }
   }
   return e + t;
  }
  function E(e) {
   var t = d.locale;
   while (t) {
    var n = r.join(e, "nls.bundle." + t + ".json");
    if (i.existsSync(n)) {
     return n;
    } else {
     var s = t.lastIndexOf("-");
     if (s > 0) {
      t = t.substring(0, s);
     } else {
      t = undefined;
     }
    }
   }
   if (t === undefined) {
    var n = r.join(e, "nls.bundle.json");
    if (i.existsSync(n)) {
     return n;
    }
   }
   return undefined;
  }
  function b(e) {
   try {
    i.mkdirSync(e);
   } catch (n) {
    if (n.code === "EEXIST") {
     return;
    } else if (n.code === "ENOENT") {
     var t = r.dirname(e);
     if (t !== e) {
      b(t);
      i.mkdirSync(e);
     }
    } else {
     throw n;
    }
   }
  }
  function w(e) {
   var t = n("2vr2")(r.join(e, "nls.metadata.json"));
   var i = Object.create(null);
   for (var s in t) {
    var a = t[s];
    i[s] = a.messages;
   }
   return i;
  }
  function S(e, t) {
   var i = d.translationsConfig[e.id];
   if (!i) {
    return undefined;
   }
   var s = n("2vr2")(i).contents;
   var a = n("2vr2")(r.join(t, "nls.metadata.json"));
   var o = Object.create(null);
   for (var c in a) {
    var l = a[c];
    var h = s[e.outDir + "/" + c];
    if (h) {
     var f = [];
     for (var p = 0; p < l.keys.length; p++) {
      var m = l.keys[p];
      var v = u(m) ? m : m.key;
      var g = h[v];
      if (g === undefined) {
       g = l.messages[p];
      }
      f.push(g);
     }
     o[c] = f;
    } else {
     o[c] = l.messages;
    }
   }
   return o;
  }
  function A(e) {
   var t = new Date();
   i.utimes(e, t, t, function() {});
  }
  function k(e, t) {
   p[e] = t;
   return t;
  }
  function F(e, t) {
   var n;
   var s = r.join(d.cacheRoot, e.id + "-" + e.hash + ".json");
   var a = false;
   var o = false;
   try {
    n = JSON.parse(i.readFileSync(s, {
     encoding: "utf8",
     flag: "r"
    }));
    A(s);
    return n;
   } catch (e) {
    if (e.code === "ENOENT") {
     o = true;
    } else if (e instanceof SyntaxError) {
     console.log("Syntax error parsing message bundle: " + e.message);
     a = true;
    } else {
     throw e;
    }
   }
   n = S(e, t);
   if (!n || a) {
    return n;
   }
   if (o) {
    try {
     i.writeFileSync(s, JSON.stringify(n), {
      encoding: "utf8",
      flag: "wx"
     });
    } catch (e) {
     if (e.code === "EEXIST") {
      return n;
     }
     throw e;
    }
   }
   return n;
  }
  function T(e, t) {
   var r;
   if (g()) {
    try {
     r = F(e, t);
    } catch (e) {
     console.log("Load or create bundle failed ", e);
    }
   }
   if (!r) {
    var i = E(t);
    if (i) {
     try {
      return n("2vr2")(i);
     } catch (e) {
      console.log("Loading in the box message bundle failed.", e);
     }
    }
    try {
     r = w(t);
    } catch (e) {
     console.log("Generating default bundle from meta data failed.", e);
     r = undefined;
    }
   }
   return r;
  }
  function _(e) {
   var t;
   var n = r.dirname(e);
   while (true) {
    t = r.join(n, "nls.metadata.header.json");
    if (i.existsSync(t)) {
     break;
    }
    var s = r.dirname(n);
    if (s === n) {
     t = undefined;
     break;
    } else {
     n = s;
    }
   }
   return t;
  }
  function N(e) {
   if (!e) {
    return C;
   }
   var t = r.extname(e);
   if (t) {
    e = e.substr(0, e.length - t.length);
   }
   if (d.messageFormat === l.both || d.messageFormat === l.bundle) {
    var s = _(e);
    if (s) {
     var o = r.dirname(s);
     var u = p[o];
     if (u === undefined) {
      try {
       var c = JSON.parse(i.readFileSync(s, "utf8"));
       try {
        var h = T(c, o);
        u = k(o, h ? {
         header: c,
         nlsBundle: h
        } : null);
       } catch (e) {
        console.error("Failed to load nls bundle", e);
        u = k(o, null);
       }
      } catch (e) {
       console.error("Failed to read header file", e);
       u = k(o, null);
      }
     }
     if (u) {
      var f = e.substr(o.length + 1).replace(/\\/g, "/");
      var m = u.nlsBundle[f];
      if (m === undefined) {
       console.error("Messages for file " + e + " not found. See console for details.");
       return function() {
        return "Messages not found.";
       };
      }
      return x(m);
     }
    }
   }
   if (d.messageFormat === l.both || d.messageFormat === l.file) {
    try {
     var v = n("2vr2")(D(e));
     if (Array.isArray(v)) {
      return x(v);
     } else {
      if (a(v.messages) && a(v.keys)) {
       return x(v.messages);
      } else {
       console.error("String bundle '" + e + "' uses an unsupported format.");
       return function() {
        return "File bundle has unsupported format. See console for details";
       };
      }
     }
    } catch (e) {
     if (e.code !== "ENOENT") {
      console.error("Failed to load single file bundle", e);
     }
    }
   }
   console.error("Failed to load message bundle for file " + e);
   return function() {
    return "Failed to load message bundle. See console for details.";
   };
  }
  t.loadMessageBundle = N;
  function O(e) {
   if (e) {
    if (u(e.locale)) {
     d.locale = e.locale.toLowerCase();
     f = undefined;
     p = Object.create(null);
    }
    if (e.messageFormat !== undefined) {
     d.messageFormat = e.messageFormat;
    }
   }
   m = d.locale === "pseudo";
   return N;
  }
  t.config = O;
 },
 F3LQ: function(e, t, n) {
  "use strict";
  var r;
  var i;
  try {
   var s = r;
   i = n("+U4B");
  } catch (e) {
   if (typeof window !== "undefined") i = window.esprima;
  }
  var a = n("gax4");
  function o(e) {
   if (e === null) return false;
   try {
    var t = "(" + e + ")", n = i.parse(t, {
     range: true
    });
    if (n.type !== "Program" || n.body.length !== 1 || n.body[0].type !== "ExpressionStatement" || n.body[0].expression.type !== "ArrowFunctionExpression" && n.body[0].expression.type !== "FunctionExpression") {
     return false;
    }
    return true;
   } catch (e) {
    return false;
   }
  }
  function u(e) {
   var t = "(" + e + ")", n = i.parse(t, {
    range: true
   }), r = [], s;
   if (n.type !== "Program" || n.body.length !== 1 || n.body[0].type !== "ExpressionStatement" || n.body[0].expression.type !== "ArrowFunctionExpression" && n.body[0].expression.type !== "FunctionExpression") {
    throw new Error("Failed to resolve function");
   }
   n.body[0].expression.params.forEach(function(e) {
    r.push(e.name);
   });
   s = n.body[0].expression.body.range;
   if (n.body[0].expression.body.type === "BlockStatement") {
    return new Function(r, t.slice(s[0] + 1, s[1] - 1));
   }
   return new Function(r, "return " + t.slice(s[0], s[1]));
  }
  function c(e) {
   return e.toString();
  }
  function l(e) {
   return Object.prototype.toString.call(e) === "[object Function]";
  }
  e.exports = new a("tag:yaml.org,2002:js/function", {
   kind: "scalar",
   resolve: o,
   construct: u,
   predicate: l,
   represent: c
  });
 },
 FMKJ: function(e, t) {
  e.exports = require("zlib");
 },
 "Fr0/": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("rWaT");
  var i;
  (function(e) {
   e.type = new r.RequestType("workspace/configuration");
  })(i = t.ConfigurationRequest || (t.ConfigurationRequest = {}));
 },
 GtrT: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("j4xC");
  "use strict";
  var i = n("4JhR");
  var s = n("k4pi");
  var a = n("/2KN");
  var o = n("L4jM");
  var u = n("BZb6");
  var c = Object.prototype.hasOwnProperty;
  var l = 1;
  var h = 2;
  var f = 3;
  var p = 4;
  var d = 1;
  var m = 2;
  var v = 3;
  var g = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uD800-\uDFFF\uFFFE\uFFFF]/;
  var y = /[\x85\u2028\u2029]/;
  var x = /[,\[\]\{\}]/;
  var C = /^(?:!|!!|![a-z\-]+!)$/i;
  var D = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function E(e) {
   return e === 10 || e === 13;
  }
  function b(e) {
   return e === 9 || e === 32;
  }
  function w(e) {
   return e === 9 || e === 32 || e === 10 || e === 13;
  }
  function S(e) {
   return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e;
  }
  function A(e) {
   var t;
   if (48 <= e && e <= 57) {
    return e - 48;
   }
   t = e | 32;
   if (97 <= t && t <= 102) {
    return t - 97 + 10;
   }
   return -1;
  }
  function k(e) {
   if (e === 120) {
    return 2;
   }
   if (e === 117) {
    return 4;
   }
   if (e === 85) {
    return 8;
   }
   return 0;
  }
  function F(e) {
   if (48 <= e && e <= 57) {
    return e - 48;
   }
   return -1;
  }
  function T(e) {
   return e === 48 ? "\0" : e === 97 ? "" : e === 98 ? "\b" : e === 116 ? "\t" : e === 9 ? "\t" : e === 110 ? "\n" : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
  }
  function _(e) {
   if (e <= 65535) {
    return String.fromCharCode(e);
   }
   return String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
  }
  var N = new Array(256);
  var O = new Array(256);
  var P = new Array(256);
  var I = new Array(256);
  for (var M = 0; M < 256; M++) {
   I[M] = O[M] = T(M);
   N[M] = O[M] ? 1 : 0;
   P[M] = 1;
   if (!N[M]) {
    I[M] = "\\" + String.fromCharCode(M);
   }
  }
  var R = function() {
   function e(e, t) {
    this.errorMap = {};
    this.errors = [];
    this.lines = [];
    this.input = e;
    this.filename = t["filename"] || null;
    this.schema = t["schema"] || u;
    this.onWarning = t["onWarning"] || null;
    this.legacy = t["legacy"] || false;
    this.allowAnyEscape = t["allowAnyEscape"] || false;
    this.ignoreDuplicateKeys = t["ignoreDuplicateKeys"] || false;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = e.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    this.documents = [];
   }
   return e;
  }();
  function B(e, t, n) {
   if (n === void 0) {
    n = false;
   }
   return new s(t, new a(e.filename, e.input, e.position, e.line, e.position - e.lineStart), n);
  }
  function L(e, t, n, r, i) {
   if (r === void 0) {
    r = false;
   }
   if (i === void 0) {
    i = false;
   }
   var o = K(e, t);
   if (!o) {
    return;
   }
   var u = n + t;
   if (e.errorMap[u]) {
    return;
   }
   var c = new a(e.filename, e.input, t, o.line, t - o.start);
   if (i) {
    c.toLineEnd = true;
   }
   var l = new s(n, c, r);
   e.errors.push(l);
  }
  function j(e, t) {
   var n = B(e, t);
   var r = n.message + n.mark.position;
   if (e.errorMap[r]) {
    return;
   }
   e.errors.push(n);
   e.errorMap[r] = 1;
   var i = e.position;
   while (true) {
    if (e.position >= e.input.length - 1) {
     return;
    }
    var s = e.input.charAt(e.position);
    if (s == "\n") {
     e.position--;
     if (e.position == i) {
      e.position += 1;
     }
     return;
    }
    if (s == "\r") {
     e.position--;
     if (e.position == i) {
      e.position += 1;
     }
     return;
    }
    e.position++;
   }
  }
  function q(e, t) {
   var n = B(e, t);
   if (e.onWarning) {
    e.onWarning.call(null, n);
   } else {}
  }
  var U = {
   YAML: function e(t, n, r) {
    var i, s, a;
    if (null !== t.version) {
     j(t, "duplication of %YAML directive");
    }
    if (1 !== r.length) {
     j(t, "YAML directive accepts exactly one argument");
    }
    i = /^([0-9]+)\.([0-9]+)$/.exec(r[0]);
    if (null === i) {
     j(t, "ill-formed argument of the YAML directive");
    }
    s = parseInt(i[1], 10);
    a = parseInt(i[2], 10);
    if (1 !== s) {
     j(t, "found incompatible YAML document (version 1.2 is required)");
    }
    t.version = r[0];
    t.checkLineBreaks = a < 2;
    if (2 !== a) {
     j(t, "found incompatible YAML document (version 1.2 is required)");
    }
   },
   TAG: function e(t, n, r) {
    var i, s;
    if (2 !== r.length) {
     j(t, "TAG directive accepts exactly two arguments");
    }
    i = r[0];
    s = r[1];
    if (!C.test(i)) {
     j(t, "ill-formed tag handle (first argument) of the TAG directive");
    }
    if (c.call(t.tagMap, i)) {
     j(t, 'there is a previously declared suffix for "' + i + '" tag handle');
    }
    if (!D.test(s)) {
     j(t, "ill-formed tag prefix (second argument) of the TAG directive");
    }
    t.tagMap[i] = s;
   }
  };
  function W(e, t, n, r) {
   var i, s, a, o;
   var u = e.result;
   if (u.startPosition == -1) {
    u.startPosition = t;
   }
   if (t <= n) {
    o = e.input.slice(t, n);
    if (r) {
     for (i = 0, s = o.length; i < s; i += 1) {
      a = o.charCodeAt(i);
      if (!(9 === a || 32 <= a && a <= 1114111)) {
       j(e, "expected valid JSON character");
      }
     }
    }
    u.value += o;
    u.endPosition = n;
   }
  }
  function z(e, t, n) {
   var r, s, a, o;
   if (!i.isObject(n)) {
    j(e, "cannot merge mappings; the provided source object is unacceptable");
   }
   r = Object.keys(n);
   for (a = 0, o = r.length; a < o; a += 1) {
    s = r[a];
    if (!c.call(t, s)) {
     t[s] = n[s];
    }
   }
  }
  function V(e, t, n, i, s) {
   var a, o;
   if (i == null) {
    return;
   }
   if (null === t) {
    t = {
     startPosition: i.startPosition,
     endPosition: s.endPosition,
     parent: null,
     errors: [],
     mappings: [],
     kind: r.Kind.MAP
    };
   }
   var u = r.newMapping(i, s);
   u.parent = t;
   i.parent = u;
   if (s != null) {
    s.parent = u;
   }
   !e.ignoreDuplicateKeys && t.mappings.forEach(function(t) {
    if (t.key && t.key.value === (u.key && u.key.value)) {
     L(e, u.key.startPosition, "duplicate key");
     L(e, t.key.startPosition, "duplicate key");
    }
   });
   t.mappings.push(u);
   t.endPosition = s ? s.endPosition : i.endPosition + 1;
   return t;
  }
  function J(e) {
   var t;
   t = e.input.charCodeAt(e.position);
   if (10 === t) {
    e.position++;
   } else if (13 === t) {
    e.position++;
    if (10 === e.input.charCodeAt(e.position)) {
     e.position++;
    }
   } else {
    j(e, "a line break is expected");
   }
   e.line += 1;
   e.lineStart = e.position;
   e.lines.push({
    start: e.lineStart,
    line: e.line
   });
  }
  var X = function() {
   function e() {}
   return e;
  }();
  function K(e, t) {
   var n;
   for (var r = 0; r < e.lines.length; r++) {
    if (e.lines[r].start > t) {
     break;
    }
    n = e.lines[r];
   }
   if (!n) {
    return {
     start: 0,
     line: 0
    };
   }
   return n;
  }
  function H(e, t, n) {
   var r = 0, i = e.input.charCodeAt(e.position);
   while (0 !== i) {
    while (b(i)) {
     if (i === 9) {
      e.errors.push(B(e, "Using tabs can lead to unpredictable results", true));
     }
     i = e.input.charCodeAt(++e.position);
    }
    if (t && 35 === i) {
     do {
      i = e.input.charCodeAt(++e.position);
     } while (i !== 10 && i !== 13 && 0 !== i);
    }
    if (E(i)) {
     J(e);
     i = e.input.charCodeAt(e.position);
     r++;
     e.lineIndent = 0;
     while (32 === i) {
      e.lineIndent++;
      i = e.input.charCodeAt(++e.position);
     }
    } else {
     break;
    }
   }
   if (-1 !== n && 0 !== r && e.lineIndent < n) {
    q(e, "deficient indentation");
   }
   return r;
  }
  function Y(e) {
   var t = e.position, n;
   n = e.input.charCodeAt(t);
   if ((45 === n || 46 === n) && e.input.charCodeAt(t + 1) === n && e.input.charCodeAt(t + 2) === n) {
    t += 3;
    n = e.input.charCodeAt(t);
    if (n === 0 || w(n)) {
     return true;
    }
   }
   return false;
  }
  function G(e, t, n) {
   if (1 === n) {
    t.value += " ";
   } else if (n > 1) {
    t.value += i.repeat("\n", n - 1);
   }
  }
  function $(e, t, n) {
   var i, s, a, o, u, c, l, h, f = e.kind, p = e.result, d;
   var m = r.newScalar();
   m.plainScalar = true;
   e.result = m;
   d = e.input.charCodeAt(e.position);
   if (w(d) || S(d) || 35 === d || 38 === d || 42 === d || 33 === d || 124 === d || 62 === d || 39 === d || 34 === d || 37 === d || 64 === d || 96 === d) {
    return false;
   }
   if (63 === d || 45 === d) {
    s = e.input.charCodeAt(e.position + 1);
    if (w(s) || n && S(s)) {
     return false;
    }
   }
   e.kind = "scalar";
   a = o = e.position;
   u = false;
   while (0 !== d) {
    if (58 === d) {
     s = e.input.charCodeAt(e.position + 1);
     if (w(s) || n && S(s)) {
      break;
     }
    } else if (35 === d) {
     i = e.input.charCodeAt(e.position - 1);
     if (w(i)) {
      break;
     }
    } else if (e.position === e.lineStart && Y(e) || n && S(d)) {
     break;
    } else if (E(d)) {
     c = e.line;
     l = e.lineStart;
     h = e.lineIndent;
     H(e, false, -1);
     if (e.lineIndent >= t) {
      u = true;
      d = e.input.charCodeAt(e.position);
      continue;
     } else {
      e.position = o;
      e.line = c;
      e.lineStart = l;
      e.lineIndent = h;
      break;
     }
    }
    if (u) {
     W(e, a, o, false);
     G(e, m, e.line - c);
     a = o = e.position;
     u = false;
    }
    if (!b(d)) {
     o = e.position + 1;
    }
    d = e.input.charCodeAt(++e.position);
    if (e.position >= e.input.length) {
     return false;
    }
   }
   W(e, a, o, false);
   if (e.result.startPosition != -1) {
    m.rawValue = e.input.substring(m.startPosition, m.endPosition);
    return true;
   }
   e.kind = f;
   e.result = p;
   return false;
  }
  function Q(e, t) {
   var n, i, s;
   n = e.input.charCodeAt(e.position);
   if (39 !== n) {
    return false;
   }
   var a = r.newScalar();
   a.singleQuoted = true;
   e.kind = "scalar";
   e.result = a;
   a.startPosition = e.position;
   e.position++;
   i = s = e.position;
   while (0 !== (n = e.input.charCodeAt(e.position))) {
    if (39 === n) {
     W(e, i, e.position, true);
     n = e.input.charCodeAt(++e.position);
     a.endPosition = e.position;
     if (39 === n) {
      i = s = e.position;
      e.position++;
     } else {
      return true;
     }
    } else if (E(n)) {
     W(e, i, s, true);
     G(e, a, H(e, false, t));
     i = s = e.position;
    } else if (e.position === e.lineStart && Y(e)) {
     j(e, "unexpected end of the document within a single quoted scalar");
    } else {
     e.position++;
     s = e.position;
     a.endPosition = e.position;
    }
   }
   j(e, "unexpected end of the stream within a single quoted scalar");
  }
  function Z(e, t) {
   var n, i, s, a, o, u, c;
   c = e.input.charCodeAt(e.position);
   if (34 !== c) {
    return false;
   }
   e.kind = "scalar";
   var l = r.newScalar();
   l.doubleQuoted = true;
   e.result = l;
   l.startPosition = e.position;
   e.position++;
   n = i = e.position;
   while (0 !== (c = e.input.charCodeAt(e.position))) {
    if (34 === c) {
     W(e, n, e.position, true);
     e.position++;
     l.endPosition = e.position;
     l.rawValue = e.input.substring(l.startPosition, l.endPosition);
     return true;
    } else if (92 === c) {
     W(e, n, e.position, true);
     c = e.input.charCodeAt(++e.position);
     if (E(c)) {
      H(e, false, t);
     } else if (c < 256 && (e.allowAnyEscape ? P[c] : N[c])) {
      l.value += e.allowAnyEscape ? I[c] : O[c];
      e.position++;
     } else if ((o = k(c)) > 0) {
      s = o;
      a = 0;
      for (;s > 0; s--) {
       c = e.input.charCodeAt(++e.position);
       if ((o = A(c)) >= 0) {
        a = (a << 4) + o;
       } else {
        j(e, "expected hexadecimal character");
       }
      }
      l.value += _(a);
      e.position++;
     } else {
      j(e, "unknown escape sequence");
     }
     n = i = e.position;
    } else if (E(c)) {
     W(e, n, i, true);
     G(e, l, H(e, false, t));
     n = i = e.position;
    } else if (e.position === e.lineStart && Y(e)) {
     j(e, "unexpected end of the document within a double quoted scalar");
    } else {
     e.position++;
     i = e.position;
    }
   }
   j(e, "unexpected end of the stream within a double quoted scalar");
  }
  function ee(e, t) {
   var n = true, i, s = e.tag, a, o = e.anchor, u, c, h, f, p, d, m, v, g;
   g = e.input.charCodeAt(e.position);
   if (g === 91) {
    c = 93;
    p = false;
    a = r.newItems();
    a.startPosition = e.position;
   } else if (g === 123) {
    c = 125;
    p = true;
    a = r.newMap();
    a.startPosition = e.position;
   } else {
    return false;
   }
   if (null !== e.anchor) {
    a.anchorId = e.anchor;
    e.anchorMap[e.anchor] = a;
   }
   g = e.input.charCodeAt(++e.position);
   while (0 !== g) {
    H(e, true, t);
    g = e.input.charCodeAt(e.position);
    if (g === c) {
     e.position++;
     e.tag = s;
     e.anchor = o;
     e.kind = p ? "mapping" : "sequence";
     e.result = a;
     a.endPosition = e.position;
     return true;
    } else if (!n) {
     var y = e.position;
     j(e, "missed comma between flow collection entries");
     e.position = y + 1;
    }
    m = d = v = null;
    h = f = false;
    if (63 === g) {
     u = e.input.charCodeAt(e.position + 1);
     if (w(u)) {
      h = f = true;
      e.position++;
      H(e, true, t);
     }
    }
    i = e.line;
    oe(e, t, l, false, true);
    m = e.tag;
    d = e.result;
    H(e, true, t);
    g = e.input.charCodeAt(e.position);
    if ((f || e.line === i) && 58 === g) {
     h = true;
     g = e.input.charCodeAt(++e.position);
     H(e, true, t);
     oe(e, t, l, false, true);
     v = e.result;
    }
    if (p) {
     V(e, a, m, d, v);
    } else if (h) {
     var x = V(e, null, m, d, v);
     x.parent = a;
     a.items.push(x);
    } else {
     if (d) {
      d.parent = a;
     }
     a.items.push(d);
    }
    a.endPosition = e.position + 1;
    H(e, true, t);
    g = e.input.charCodeAt(e.position);
    if (44 === g) {
     n = true;
     g = e.input.charCodeAt(++e.position);
    } else {
     n = false;
    }
   }
   j(e, "unexpected end of the stream within a flow collection");
  }
  function te(e, t) {
   var n, s, a = d, o = false, u = t, c = 0, l = false, h, f;
   f = e.input.charCodeAt(e.position);
   if (f === 124) {
    s = false;
   } else if (f === 62) {
    s = true;
   } else {
    return false;
   }
   var p = r.newScalar();
   e.kind = "scalar";
   e.result = p;
   p.startPosition = e.position;
   while (0 !== f) {
    f = e.input.charCodeAt(++e.position);
    if (43 === f || 45 === f) {
     if (d === a) {
      a = 43 === f ? v : m;
     } else {
      j(e, "repeat of a chomping mode identifier");
     }
    } else if ((h = F(f)) >= 0) {
     if (h === 0) {
      j(e, "bad explicit indentation width of a block scalar; it cannot be less than one");
     } else if (!o) {
      u = t + h - 1;
      o = true;
     } else {
      j(e, "repeat of an indentation width identifier");
     }
    } else {
     break;
    }
   }
   if (b(f)) {
    do {
     f = e.input.charCodeAt(++e.position);
    } while (b(f));
    if (35 === f) {
     do {
      f = e.input.charCodeAt(++e.position);
     } while (!E(f) && 0 !== f);
    }
   }
   while (0 !== f) {
    J(e);
    e.lineIndent = 0;
    f = e.input.charCodeAt(e.position);
    while ((!o || e.lineIndent < u) && 32 === f) {
     e.lineIndent++;
     f = e.input.charCodeAt(++e.position);
    }
    if (!o && e.lineIndent > u) {
     u = e.lineIndent;
    }
    if (E(f)) {
     c++;
     continue;
    }
    if (e.lineIndent < u) {
     if (a === v) {
      p.value += i.repeat("\n", c);
     } else if (a === d) {
      if (o) {
       p.value += "\n";
      }
     }
     break;
    }
    if (s) {
     if (b(f)) {
      l = true;
      p.value += i.repeat("\n", c + 1);
     } else if (l) {
      l = false;
      p.value += i.repeat("\n", c + 1);
     } else if (0 === c) {
      if (o) {
       p.value += " ";
      }
     } else {
      p.value += i.repeat("\n", c);
     }
    } else if (o) {
     p.value += i.repeat("\n", c + 1);
    } else {}
    o = true;
    c = 0;
    n = e.position;
    while (!E(f) && 0 !== f) {
     f = e.input.charCodeAt(++e.position);
    }
    W(e, n, e.position, false);
   }
   p.endPosition = e.position;
   var g = e.position - 1;
   var y = false;
   while (true) {
    var x = e.input[g];
    if (x == "\r" || x == "\n") {
     if (y) {
      g--;
     }
     break;
    }
    if (x != " " && x != "\t") {
     break;
    }
    g--;
   }
   p.endPosition = g;
   p.rawValue = e.input.substring(p.startPosition, p.endPosition);
   return true;
  }
  function ne(e, t) {
   var n, i = e.tag, s = e.anchor, a = r.newItems(), o, u = false, c;
   if (null !== e.anchor) {
    a.anchorId = e.anchor;
    e.anchorMap[e.anchor] = a;
   }
   a.startPosition = e.position;
   c = e.input.charCodeAt(e.position);
   while (0 !== c) {
    if (45 !== c) {
     break;
    }
    o = e.input.charCodeAt(e.position + 1);
    if (!w(o)) {
     break;
    }
    u = true;
    e.position++;
    if (H(e, true, -1)) {
     if (e.lineIndent <= t) {
      a.items.push(null);
      c = e.input.charCodeAt(e.position);
      continue;
     }
    }
    n = e.line;
    oe(e, t, f, false, true);
    if (e.result) {
     e.result.parent = a;
     a.items.push(e.result);
    }
    H(e, true, -1);
    c = e.input.charCodeAt(e.position);
    if ((e.line === n || e.lineIndent > t) && 0 !== c) {
     j(e, "bad indentation of a sequence entry");
    } else if (e.lineIndent < t) {
     break;
    }
   }
   a.endPosition = e.position;
   if (u) {
    e.tag = i;
    e.anchor = s;
    e.kind = "sequence";
    e.result = a;
    a.endPosition = e.position;
    return true;
   }
   return false;
  }
  function re(e, t, n) {
   var i, s, a, o = e.tag, u = e.anchor, c = r.newMap(), l = null, f = null, d = null, m = false, v = false, g;
   c.startPosition = e.position;
   if (null !== e.anchor) {
    c.anchorId = e.anchor;
    e.anchorMap[e.anchor] = c;
   }
   g = e.input.charCodeAt(e.position);
   while (0 !== g) {
    i = e.input.charCodeAt(e.position + 1);
    a = e.line;
    if ((63 === g || 58 === g) && w(i)) {
     if (63 === g) {
      if (m) {
       V(e, c, l, f, null);
       l = f = d = null;
      }
      v = true;
      m = true;
      s = true;
     } else if (m) {
      m = false;
      s = true;
     } else {
      j(e, "incomplete explicit mapping pair; a key node is missed");
     }
     e.position += 1;
     g = i;
    } else if (oe(e, n, h, false, true)) {
     if (e.line === a) {
      g = e.input.charCodeAt(e.position);
      while (b(g)) {
       g = e.input.charCodeAt(++e.position);
      }
      if (58 === g) {
       g = e.input.charCodeAt(++e.position);
       if (!w(g)) {
        j(e, "a whitespace character is expected after the key-value separator within a block mapping");
       }
       if (m) {
        V(e, c, l, f, null);
        l = f = d = null;
       }
       v = true;
       m = false;
       s = false;
       l = e.tag;
       f = e.result;
      } else if (e.position == e.lineStart && Y(e)) {
       break;
      } else if (v) {
       j(e, "can not read an implicit mapping pair; a colon is missed");
      } else {
       e.tag = o;
       e.anchor = u;
       return true;
      }
     } else if (v) {
      j(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      while (e.position > 0) {
       g = e.input.charCodeAt(--e.position);
       if (E(g)) {
        e.position++;
        break;
       }
      }
     } else {
      e.tag = o;
      e.anchor = u;
      return true;
     }
    } else {
     break;
    }
    if (e.line === a || e.lineIndent > t) {
     if (oe(e, t, p, true, s)) {
      if (m) {
       f = e.result;
      } else {
       d = e.result;
      }
     }
     if (!m) {
      V(e, c, l, f, d);
      l = f = d = null;
     }
     H(e, true, -1);
     g = e.input.charCodeAt(e.position);
    }
    if (e.lineIndent > t && 0 !== g) {
     j(e, "bad indentation of a mapping entry");
    } else if (e.lineIndent < t) {
     break;
    }
   }
   if (m) {
    V(e, c, l, f, null);
   }
   if (v) {
    e.tag = o;
    e.anchor = u;
    e.kind = "mapping";
    e.result = c;
   }
   return v;
  }
  function ie(e) {
   var t, n = false, r = false, i, s, a;
   a = e.input.charCodeAt(e.position);
   if (33 !== a) {
    return false;
   }
   if (null !== e.tag) {
    j(e, "duplication of a tag property");
   }
   a = e.input.charCodeAt(++e.position);
   if (60 === a) {
    n = true;
    a = e.input.charCodeAt(++e.position);
   } else if (33 === a) {
    r = true;
    i = "!!";
    a = e.input.charCodeAt(++e.position);
   } else {
    i = "!";
   }
   t = e.position;
   if (n) {
    do {
     a = e.input.charCodeAt(++e.position);
    } while (0 !== a && 62 !== a);
    if (e.position < e.length) {
     s = e.input.slice(t, e.position);
     a = e.input.charCodeAt(++e.position);
    } else {
     j(e, "unexpected end of the stream within a verbatim tag");
    }
   } else {
    while (0 !== a && !w(a)) {
     if (33 === a) {
      if (!r) {
       i = e.input.slice(t - 1, e.position + 1);
       if (!C.test(i)) {
        j(e, "named tag handle cannot contain such characters");
       }
       r = true;
       t = e.position + 1;
      } else {
       j(e, "tag suffix cannot contain exclamation marks");
      }
     }
     a = e.input.charCodeAt(++e.position);
    }
    s = e.input.slice(t, e.position);
    if (x.test(s)) {
     j(e, "tag suffix cannot contain flow indicator characters");
    }
   }
   if (s && !D.test(s)) {
    j(e, "tag name cannot contain such characters: " + s);
   }
   if (n) {
    e.tag = s;
   } else if (c.call(e.tagMap, i)) {
    e.tag = e.tagMap[i] + s;
   } else if ("!" === i) {
    e.tag = "!" + s;
   } else if ("!!" === i) {
    e.tag = "tag:yaml.org,2002:" + s;
   } else {
    j(e, 'undeclared tag handle "' + i + '"');
   }
   return true;
  }
  function se(e) {
   var t, n;
   n = e.input.charCodeAt(e.position);
   if (38 !== n) {
    return false;
   }
   if (null !== e.anchor) {
    j(e, "duplication of an anchor property");
   }
   n = e.input.charCodeAt(++e.position);
   t = e.position;
   while (0 !== n && !w(n) && !S(n)) {
    n = e.input.charCodeAt(++e.position);
   }
   if (e.position === t) {
    j(e, "name of an anchor node must contain at least one character");
   }
   e.anchor = e.input.slice(t, e.position);
   return true;
  }
  function ae(e) {
   var t, n, i = e.length, s = e.input, a;
   a = e.input.charCodeAt(e.position);
   if (42 !== a) {
    return false;
   }
   a = e.input.charCodeAt(++e.position);
   t = e.position;
   while (0 !== a && !w(a) && !S(a)) {
    a = e.input.charCodeAt(++e.position);
   }
   if (e.position <= t) {
    j(e, "name of an alias node must contain at least one character");
    e.position = t + 1;
   }
   n = e.input.slice(t, e.position);
   if (!e.anchorMap.hasOwnProperty(n)) {
    j(e, 'unidentified alias "' + n + '"');
    if (e.position <= t) {
     e.position = t + 1;
    }
   }
   e.result = r.newAnchorRef(n, t, e.position, e.anchorMap[n]);
   H(e, true, -1);
   return true;
  }
  function oe(e, t, n, i, s) {
   var a, o, u, d = 1, m = false, v = false, g, y, x, C, D, E;
   e.tag = null;
   e.anchor = null;
   e.kind = null;
   e.result = null;
   a = o = u = p === n || f === n;
   if (i) {
    if (H(e, true, -1)) {
     m = true;
     if (e.lineIndent > t) {
      d = 1;
     } else if (e.lineIndent === t) {
      d = 0;
     } else if (e.lineIndent < t) {
      d = -1;
     }
    }
   }
   var b = e.position;
   var w = e.position - e.lineStart;
   if (1 === d) {
    while (ie(e) || se(e)) {
     if (H(e, true, -1)) {
      m = true;
      u = a;
      if (e.lineIndent > t) {
       d = 1;
      } else if (e.lineIndent === t) {
       d = 0;
      } else if (e.lineIndent < t) {
       d = -1;
      }
     } else {
      u = false;
     }
    }
   }
   if (u) {
    u = m || s;
   }
   if (1 === d || p === n) {
    if (l === n || h === n) {
     C = t;
    } else {
     C = t + 1;
    }
    D = e.position - e.lineStart;
    if (1 === d) {
     if (u && (ne(e, D) || re(e, D, C)) || ee(e, C)) {
      v = true;
     } else {
      if (o && te(e, C) || Q(e, C) || Z(e, C)) {
       v = true;
      } else if (ae(e)) {
       v = true;
       if (null !== e.tag || null !== e.anchor) {
        j(e, "alias node should not have any properties");
       }
      } else if ($(e, C, l === n)) {
       v = true;
       if (null === e.tag) {
        e.tag = "?";
       }
      }
      if (null !== e.anchor) {
       e.anchorMap[e.anchor] = e.result;
       e.result.anchorId = e.anchor;
      }
     }
    } else if (0 === d) {
     v = u && ne(e, D);
    }
   }
   if (null !== e.tag && "!" !== e.tag) {
    if (e.tag == "!include") {
     if (!e.result) {
      e.result = r.newScalar();
      e.result.startPosition = e.position;
      e.result.endPosition = e.position;
      j(e, "!include without value");
     }
     e.result.kind = r.Kind.INCLUDE_REF;
    } else if ("?" === e.tag) {
     for (g = 0, y = e.implicitTypes.length; g < y; g += 1) {
      x = e.implicitTypes[g];
      var S = e.result["value"];
      if (x.resolve(S)) {
       e.result.valueObject = x.construct(e.result["value"]);
       e.tag = x.tag;
       if (null !== e.anchor) {
        e.result.anchorId = e.anchor;
        e.anchorMap[e.anchor] = e.result;
       }
       break;
      }
     }
    } else if (c.call(e.typeMap, e.tag)) {
     x = e.typeMap[e.tag];
     if (null !== e.result && x.kind !== e.kind) {
      j(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + x.kind + '", not "' + e.kind + '"');
     }
     if (!x.resolve(e.result)) {
      j(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
     } else {
      e.result = x.construct(e.result);
      if (null !== e.anchor) {
       e.result.anchorId = e.anchor;
       e.anchorMap[e.anchor] = e.result;
      }
     }
    } else {
     L(e, b, "unknown tag <" + e.tag + ">", false, true);
    }
   }
   return null !== e.tag || null !== e.anchor || v;
  }
  function ue(e) {
   var t = e.position, n, r, i, s = false, a;
   e.version = null;
   e.checkLineBreaks = e.legacy;
   e.tagMap = {};
   e.anchorMap = {};
   while (0 !== (a = e.input.charCodeAt(e.position))) {
    H(e, true, -1);
    a = e.input.charCodeAt(e.position);
    if (e.lineIndent > 0 || 37 !== a) {
     break;
    }
    s = true;
    a = e.input.charCodeAt(++e.position);
    n = e.position;
    while (0 !== a && !w(a)) {
     a = e.input.charCodeAt(++e.position);
    }
    r = e.input.slice(n, e.position);
    i = [];
    if (r.length < 1) {
     j(e, "directive name must not be less than one character in length");
    }
    while (0 !== a) {
     while (b(a)) {
      a = e.input.charCodeAt(++e.position);
     }
     if (35 === a) {
      do {
       a = e.input.charCodeAt(++e.position);
      } while (0 !== a && !E(a));
      break;
     }
     if (E(a)) {
      break;
     }
     n = e.position;
     while (0 !== a && !w(a)) {
      a = e.input.charCodeAt(++e.position);
     }
     i.push(e.input.slice(n, e.position));
    }
    if (0 !== a) {
     J(e);
    }
    if (c.call(U, r)) {
     U[r](e, r, i);
    } else {
     q(e, 'unknown document directive "' + r + '"');
     e.position++;
    }
   }
   H(e, true, -1);
   if (0 === e.lineIndent && 45 === e.input.charCodeAt(e.position) && 45 === e.input.charCodeAt(e.position + 1) && 45 === e.input.charCodeAt(e.position + 2)) {
    e.position += 3;
    H(e, true, -1);
   } else if (s) {
    j(e, "directives end mark is expected");
   }
   oe(e, e.lineIndent - 1, p, false, true);
   H(e, true, -1);
   if (e.checkLineBreaks && y.test(e.input.slice(t, e.position))) {
    q(e, "non-ASCII line breaks are interpreted as content");
   }
   e.documents.push(e.result);
   if (e.position === e.lineStart && Y(e)) {
    if (46 === e.input.charCodeAt(e.position)) {
     e.position += 3;
     H(e, true, -1);
    }
    return;
   }
   if (e.position < e.length - 1) {
    j(e, "end of the stream or a document separator is expected");
   } else {
    return;
   }
  }
  function ce(e, t) {
   e = String(e);
   t = t || {};
   var n = e.length;
   if (n !== 0) {
    if (10 !== e.charCodeAt(n - 1) && 13 !== e.charCodeAt(n - 1)) {
     e += "\n";
    }
    if (e.charCodeAt(0) === 65279) {
     e = e.slice(1);
    }
   }
   var r = new R(e, t);
   if (g.test(r.input)) {
    j(r, "the stream contains non-printable characters");
   }
   r.input += "\0";
   while (32 === r.input.charCodeAt(r.position)) {
    r.lineIndent += 1;
    r.position += 1;
   }
   while (r.position < r.length - 1) {
    var i = r.position;
    ue(r);
    if (r.position <= i) {
     for (;r.position < r.length - 1; r.position++) {
      var s = r.input.charAt(r.position);
      if (s == "\n") {
       break;
      }
     }
    }
   }
   var a = r.documents;
   var o = a.length;
   if (o > 0) {
    a[o - 1].endPosition = n;
   }
   for (var u = 0, c = a; u < c.length; u++) {
    var l = c[u];
    l.errors = r.errors;
    if (l.startPosition > l.endPosition) {
     l.startPosition = l.endPosition;
    }
   }
   return a;
  }
  function le(e, t, n) {
   if (n === void 0) {
    n = {};
   }
   var r = ce(e, n), i, s;
   for (i = 0, s = r.length; i < s; i += 1) {
    t(r[i]);
   }
  }
  t.loadAll = le;
  function he(e, t) {
   if (t === void 0) {
    t = {};
   }
   var n = ce(e, t), r, i;
   if (0 === n.length) {
    return undefined;
   } else if (1 === n.length) {
    return n[0];
   }
   var o = new s("expected a single document in the stream, but found more");
   o.mark = new a("", "", 0, 0, 0);
   o.mark.position = n[0].endPosition;
   n[0].errors.push(o);
   return n[0];
  }
  t.load = he;
  function fe(e, t, n) {
   if (n === void 0) {
    n = {};
   }
   le(e, t, i.extend({
    schema: o
   }, n));
  }
  t.safeLoadAll = fe;
  function pe(e, t) {
   if (t === void 0) {
    t = {};
   }
   return he(e, i.extend({
    schema: o
   }, t));
  }
  t.safeLoad = pe;
  e.exports.loadAll = le;
  e.exports.load = he;
  e.exports.safeLoadAll = fe;
  e.exports.safeLoad = pe;
 },
 HoXx: function(e, t, n) {
  t = e.exports = i.debug = i["default"] = i;
  t.coerce = c;
  t.disable = o;
  t.enable = a;
  t.enabled = u;
  t.humanize = n("ZXpH");
  t.instances = [];
  t.names = [];
  t.skips = [];
  t.formatters = {};
  function r(e) {
   var n = 0, r;
   for (r in e) {
    n = (n << 5) - n + e.charCodeAt(r);
    n |= 0;
   }
   return t.colors[Math.abs(n) % t.colors.length];
  }
  function i(e) {
   var n;
   function i() {
    if (!i.enabled) return;
    var e = i;
    var r = +new Date();
    var s = r - (n || r);
    e.diff = s;
    e.prev = n;
    e.curr = r;
    n = r;
    var a = new Array(arguments.length);
    for (var o = 0; o < a.length; o++) {
     a[o] = arguments[o];
    }
    a[0] = t.coerce(a[0]);
    if ("string" !== typeof a[0]) {
     a.unshift("%O");
    }
    var u = 0;
    a[0] = a[0].replace(/%([a-zA-Z%])/g, function(n, r) {
     if (n === "%%") return n;
     u++;
     var i = t.formatters[r];
     if ("function" === typeof i) {
      var s = a[u];
      n = i.call(e, s);
      a.splice(u, 1);
      u--;
     }
     return n;
    });
    t.formatArgs.call(e, a);
    var c = i.log || t.log || console.log.bind(console);
    c.apply(e, a);
   }
   i.namespace = e;
   i.enabled = t.enabled(e);
   i.useColors = t.useColors();
   i.color = r(e);
   i.destroy = s;
   if ("function" === typeof t.init) {
    t.init(i);
   }
   t.instances.push(i);
   return i;
  }
  function s() {
   var e = t.instances.indexOf(this);
   if (e !== -1) {
    t.instances.splice(e, 1);
    return true;
   } else {
    return false;
   }
  }
  function a(e) {
   t.save(e);
   t.names = [];
   t.skips = [];
   var n;
   var r = (typeof e === "string" ? e : "").split(/[\s,]+/);
   var i = r.length;
   for (n = 0; n < i; n++) {
    if (!r[n]) continue;
    e = r[n].replace(/\*/g, ".*?");
    if (e[0] === "-") {
     t.skips.push(new RegExp("^" + e.substr(1) + "$"));
    } else {
     t.names.push(new RegExp("^" + e + "$"));
    }
   }
   for (n = 0; n < t.instances.length; n++) {
    var s = t.instances[n];
    s.enabled = t.enabled(s.namespace);
   }
  }
  function o() {
   t.enable("");
  }
  function u(e) {
   if (e[e.length - 1] === "*") {
    return true;
   }
   var n, r;
   for (n = 0, r = t.skips.length; n < r; n++) {
    if (t.skips[n].test(e)) {
     return false;
    }
   }
   for (n = 0, r = t.names.length; n < r; n++) {
    if (t.names[n].test(e)) {
     return true;
    }
   }
   return false;
  }
  function c(e) {
   if (e instanceof Error) return e.stack || e.message;
   return e;
  }
 },
 ICfX: function(e, t, n) {
  "use strict";
  n.r(t);
  n.d(t, "Position", function() {
   return r;
  });
  n.d(t, "Range", function() {
   return i;
  });
  n.d(t, "Location", function() {
   return s;
  });
  n.d(t, "DiagnosticRelatedInformation", function() {
   return a;
  });
  n.d(t, "DiagnosticSeverity", function() {
   return o;
  });
  n.d(t, "Diagnostic", function() {
   return u;
  });
  n.d(t, "Command", function() {
   return c;
  });
  n.d(t, "TextEdit", function() {
   return l;
  });
  n.d(t, "TextDocumentEdit", function() {
   return h;
  });
  n.d(t, "WorkspaceEdit", function() {
   return f;
  });
  n.d(t, "WorkspaceChange", function() {
   return d;
  });
  n.d(t, "TextDocumentIdentifier", function() {
   return m;
  });
  n.d(t, "VersionedTextDocumentIdentifier", function() {
   return v;
  });
  n.d(t, "TextDocumentItem", function() {
   return g;
  });
  n.d(t, "MarkupKind", function() {
   return y;
  });
  n.d(t, "MarkupContent", function() {
   return x;
  });
  n.d(t, "CompletionItemKind", function() {
   return C;
  });
  n.d(t, "InsertTextFormat", function() {
   return D;
  });
  n.d(t, "CompletionItem", function() {
   return E;
  });
  n.d(t, "CompletionList", function() {
   return b;
  });
  n.d(t, "MarkedString", function() {
   return w;
  });
  n.d(t, "Hover", function() {
   return S;
  });
  n.d(t, "ParameterInformation", function() {
   return A;
  });
  n.d(t, "SignatureInformation", function() {
   return k;
  });
  n.d(t, "DocumentHighlightKind", function() {
   return F;
  });
  n.d(t, "DocumentHighlight", function() {
   return T;
  });
  n.d(t, "SymbolKind", function() {
   return _;
  });
  n.d(t, "SymbolInformation", function() {
   return N;
  });
  n.d(t, "CodeActionKind", function() {
   return O;
  });
  n.d(t, "CodeActionContext", function() {
   return P;
  });
  n.d(t, "CodeAction", function() {
   return I;
  });
  n.d(t, "CodeLens", function() {
   return M;
  });
  n.d(t, "FormattingOptions", function() {
   return R;
  });
  n.d(t, "DocumentLink", function() {
   return B;
  });
  n.d(t, "EOL", function() {
   return L;
  });
  n.d(t, "TextDocument", function() {
   return j;
  });
  n.d(t, "TextDocumentSaveReason", function() {
   return q;
  });
  var r;
  (function(e) {
   function t(e, t) {
    return {
     line: e,
     character: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.objectLiteral(t) && W.number(t.line) && W.number(t.character);
   }
   e.is = n;
  })(r || (r = {}));
  var i;
  (function(e) {
   function t(e, t, n, i) {
    if (W.number(e) && W.number(t) && W.number(n) && W.number(i)) {
     return {
      start: r.create(e, t),
      end: r.create(n, i)
     };
    } else if (r.is(e) && r.is(t)) {
     return {
      start: e,
      end: t
     };
    } else {
     throw new Error("Range#create called with invalid arguments[" + e + ", " + t + ", " + n + ", " + i + "]");
    }
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.objectLiteral(t) && r.is(t.start) && r.is(t.end);
   }
   e.is = n;
  })(i || (i = {}));
  var s;
  (function(e) {
   function t(e, t) {
    return {
     uri: e,
     range: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.defined(t) && i.is(t.range) && (W.string(t.uri) || W.undefined(t.uri));
   }
   e.is = n;
  })(s || (s = {}));
  var a;
  (function(e) {
   function t(e, t) {
    return {
     location: e,
     message: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.defined(t) && s.is(t.location) && W.string(t.message);
   }
   e.is = n;
  })(a || (a = {}));
  var o;
  (function(e) {
   e.Error = 1;
   e.Warning = 2;
   e.Information = 3;
   e.Hint = 4;
  })(o || (o = {}));
  var u;
  (function(e) {
   function t(e, t, n, r, i, s) {
    var a = {
     range: e,
     message: t
    };
    if (W.defined(n)) {
     a.severity = n;
    }
    if (W.defined(r)) {
     a.code = r;
    }
    if (W.defined(i)) {
     a.source = i;
    }
    if (W.defined(s)) {
     a.relatedInformation = s;
    }
    return a;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.defined(t) && i.is(t.range) && W.string(t.message) && (W.number(t.severity) || W.undefined(t.severity)) && (W.number(t.code) || W.string(t.code) || W.undefined(t.code)) && (W.string(t.source) || W.undefined(t.source)) && (W.undefined(t.relatedInformation) || W.typedArray(t.relatedInformation, a.is));
   }
   e.is = n;
  })(u || (u = {}));
  var c;
  (function(e) {
   function t(e, t) {
    var n = [];
    for (var r = 2; r < arguments.length; r++) {
     n[r - 2] = arguments[r];
    }
    var i = {
     title: e,
     command: t
    };
    if (W.defined(n) && n.length > 0) {
     i.arguments = n;
    }
    return i;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.defined(t) && W.string(t.title) && W.string(t.command);
   }
   e.is = n;
  })(c || (c = {}));
  var l;
  (function(e) {
   function t(e, t) {
    return {
     range: e,
     newText: t
    };
   }
   e.replace = t;
   function n(e, t) {
    return {
     range: {
      start: e,
      end: e
     },
     newText: t
    };
   }
   e.insert = n;
   function r(e) {
    return {
     range: e,
     newText: ""
    };
   }
   e.del = r;
  })(l || (l = {}));
  var h;
  (function(e) {
   function t(e, t) {
    return {
     textDocument: e,
     edits: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.defined(t) && v.is(t.textDocument) && Array.isArray(t.edits);
   }
   e.is = n;
  })(h || (h = {}));
  var f;
  (function(e) {
   function t(e) {
    var t = e;
    return t && (t.changes !== void 0 || t.documentChanges !== void 0) && (t.documentChanges === void 0 || W.typedArray(t.documentChanges, h.is));
   }
   e.is = t;
  })(f || (f = {}));
  var p = function() {
   function e(e) {
    this.edits = e;
   }
   e.prototype.insert = function(e, t) {
    this.edits.push(l.insert(e, t));
   };
   e.prototype.replace = function(e, t) {
    this.edits.push(l.replace(e, t));
   };
   e.prototype.delete = function(e) {
    this.edits.push(l.del(e));
   };
   e.prototype.add = function(e) {
    this.edits.push(e);
   };
   e.prototype.all = function() {
    return this.edits;
   };
   e.prototype.clear = function() {
    this.edits.splice(0, this.edits.length);
   };
   return e;
  }();
  var d = function() {
   function e(e) {
    var t = this;
    this._textEditChanges = Object.create(null);
    if (e) {
     this._workspaceEdit = e;
     if (e.documentChanges) {
      e.documentChanges.forEach(function(e) {
       var n = new p(e.edits);
       t._textEditChanges[e.textDocument.uri] = n;
      });
     } else if (e.changes) {
      Object.keys(e.changes).forEach(function(n) {
       var r = new p(e.changes[n]);
       t._textEditChanges[n] = r;
      });
     }
    }
   }
   Object.defineProperty(e.prototype, "edit", {
    get: function() {
     return this._workspaceEdit;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.getTextEditChange = function(e) {
    if (v.is(e)) {
     if (!this._workspaceEdit) {
      this._workspaceEdit = {
       documentChanges: []
      };
     }
     if (!this._workspaceEdit.documentChanges) {
      throw new Error("Workspace edit is not configured for versioned document changes.");
     }
     var t = e;
     var n = this._textEditChanges[t.uri];
     if (!n) {
      var r = [];
      var i = {
       textDocument: t,
       edits: r
      };
      this._workspaceEdit.documentChanges.push(i);
      n = new p(r);
      this._textEditChanges[t.uri] = n;
     }
     return n;
    } else {
     if (!this._workspaceEdit) {
      this._workspaceEdit = {
       changes: Object.create(null)
      };
     }
     if (!this._workspaceEdit.changes) {
      throw new Error("Workspace edit is not configured for normal text edit changes.");
     }
     var n = this._textEditChanges[e];
     if (!n) {
      var r = [];
      this._workspaceEdit.changes[e] = r;
      n = new p(r);
      this._textEditChanges[e] = n;
     }
     return n;
    }
   };
   return e;
  }();
  var m;
  (function(e) {
   function t(e) {
    return {
     uri: e
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.defined(t) && W.string(t.uri);
   }
   e.is = n;
  })(m || (m = {}));
  var v;
  (function(e) {
   function t(e, t) {
    return {
     uri: e,
     version: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.defined(t) && W.string(t.uri) && W.number(t.version);
   }
   e.is = n;
  })(v || (v = {}));
  var g;
  (function(e) {
   function t(e, t, n, r) {
    return {
     uri: e,
     languageId: t,
     version: n,
     text: r
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.defined(t) && W.string(t.uri) && W.string(t.languageId) && W.number(t.version) && W.string(t.text);
   }
   e.is = n;
  })(g || (g = {}));
  var y;
  (function(e) {
   e.PlainText = "plaintext";
   e.Markdown = "markdown";
  })(y || (y = {}));
  (function(e) {
   function t(t) {
    var n = t;
    return n === e.PlainText || n === e.Markdown;
   }
   e.is = t;
  })(y || (y = {}));
  var x;
  (function(e) {
   function t(e) {
    var t = e;
    return W.objectLiteral(e) && y.is(t.kind) && W.string(t.value);
   }
   e.is = t;
  })(x || (x = {}));
  var C;
  (function(e) {
   e.Text = 1;
   e.Method = 2;
   e.Function = 3;
   e.Constructor = 4;
   e.Field = 5;
   e.Variable = 6;
   e.Class = 7;
   e.Interface = 8;
   e.Module = 9;
   e.Property = 10;
   e.Unit = 11;
   e.Value = 12;
   e.Enum = 13;
   e.Keyword = 14;
   e.Snippet = 15;
   e.Color = 16;
   e.File = 17;
   e.Reference = 18;
   e.Folder = 19;
   e.EnumMember = 20;
   e.Constant = 21;
   e.Struct = 22;
   e.Event = 23;
   e.Operator = 24;
   e.TypeParameter = 25;
  })(C || (C = {}));
  var D;
  (function(e) {
   e.PlainText = 1;
   e.Snippet = 2;
  })(D || (D = {}));
  var E;
  (function(e) {
   function t(e) {
    return {
     label: e
    };
   }
   e.create = t;
  })(E || (E = {}));
  var b;
  (function(e) {
   function t(e, t) {
    return {
     items: e ? e : [],
     isIncomplete: !!t
    };
   }
   e.create = t;
  })(b || (b = {}));
  var w;
  (function(e) {
   function t(e) {
    return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
   }
   e.fromPlainText = t;
   function n(e) {
    var t = e;
    return W.string(t) || W.objectLiteral(t) && W.string(t.language) && W.string(t.value);
   }
   e.is = n;
  })(w || (w = {}));
  var S;
  (function(e) {
   function t(e) {
    var t = e;
    return W.objectLiteral(t) && (x.is(t.contents) || w.is(t.contents) || W.typedArray(t.contents, w.is)) && (e.range === void 0 || i.is(e.range));
   }
   e.is = t;
  })(S || (S = {}));
  var A;
  (function(e) {
   function t(e, t) {
    return t ? {
     label: e,
     documentation: t
    } : {
     label: e
    };
   }
   e.create = t;
  })(A || (A = {}));
  var k;
  (function(e) {
   function t(e, t) {
    var n = [];
    for (var r = 2; r < arguments.length; r++) {
     n[r - 2] = arguments[r];
    }
    var i = {
     label: e
    };
    if (W.defined(t)) {
     i.documentation = t;
    }
    if (W.defined(n)) {
     i.parameters = n;
    } else {
     i.parameters = [];
    }
    return i;
   }
   e.create = t;
  })(k || (k = {}));
  var F;
  (function(e) {
   e.Text = 1;
   e.Read = 2;
   e.Write = 3;
  })(F || (F = {}));
  var T;
  (function(e) {
   function t(e, t) {
    var n = {
     range: e
    };
    if (W.number(t)) {
     n.kind = t;
    }
    return n;
   }
   e.create = t;
  })(T || (T = {}));
  var _;
  (function(e) {
   e.File = 1;
   e.Module = 2;
   e.Namespace = 3;
   e.Package = 4;
   e.Class = 5;
   e.Method = 6;
   e.Property = 7;
   e.Field = 8;
   e.Constructor = 9;
   e.Enum = 10;
   e.Interface = 11;
   e.Function = 12;
   e.Variable = 13;
   e.Constant = 14;
   e.String = 15;
   e.Number = 16;
   e.Boolean = 17;
   e.Array = 18;
   e.Object = 19;
   e.Key = 20;
   e.Null = 21;
   e.EnumMember = 22;
   e.Struct = 23;
   e.Event = 24;
   e.Operator = 25;
   e.TypeParameter = 26;
  })(_ || (_ = {}));
  var N;
  (function(e) {
   function t(e, t, n, r, i) {
    var s = {
     name: e,
     kind: t,
     location: {
      uri: r,
      range: n
     }
    };
    if (i) {
     s.containerName = i;
    }
    return s;
   }
   e.create = t;
  })(N || (N = {}));
  var O;
  (function(e) {
   e.QuickFix = "quickfix";
   e.Refactor = "refactor";
   e.RefactorExtract = "refactor.extract";
   e.RefactorInline = "refactor.inline";
   e.RefactorRewrite = "refactor.rewrite";
   e.Source = "source";
   e.SourceOrganizeImports = "source.organizeImports";
  })(O || (O = {}));
  var P;
  (function(e) {
   function t(e, t) {
    var n = {
     diagnostics: e
    };
    if (t !== void 0 && t !== null) {
     n.only = t;
    }
    return n;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.defined(t) && W.typedArray(t.diagnostics, u.is) && (t.only === void 0 || W.typedArray(t.only, W.string));
   }
   e.is = n;
  })(P || (P = {}));
  var I;
  (function(e) {
   function t(e, t, n) {
    var r = {
     title: e
    };
    if (c.is(t)) {
     r.command = t;
    } else {
     r.edit = t;
    }
    if (n !== void null) {
     r.kind = n;
    }
    return r;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return t && W.string(t.title) && (t.diagnostics === void 0 || W.typedArray(t.diagnostics, u.is)) && (t.kind === void 0 || W.string(t.kind)) && (t.edit !== void 0 || t.command !== void 0) && (t.command === void 0 || c.is(t.command)) && (t.edit === void 0 || f.is(t.edit));
   }
   e.is = n;
  })(I || (I = {}));
  var M;
  (function(e) {
   function t(e, t) {
    var n = {
     range: e
    };
    if (W.defined(t)) n.data = t;
    return n;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.defined(t) && i.is(t.range) && (W.undefined(t.command) || c.is(t.command));
   }
   e.is = n;
  })(M || (M = {}));
  var R;
  (function(e) {
   function t(e, t) {
    return {
     tabSize: e,
     insertSpaces: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.defined(t) && W.number(t.tabSize) && W.boolean(t.insertSpaces);
   }
   e.is = n;
  })(R || (R = {}));
  var B = function() {
   function e() {}
   return e;
  }();
  (function(e) {
   function t(e, t, n) {
    return {
     range: e,
     target: t,
     data: n
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.defined(t) && i.is(t.range) && (W.undefined(t.target) || W.string(t.target));
   }
   e.is = n;
  })(B || (B = {}));
  var L = [ "\n", "\r\n", "\r" ];
  var j;
  (function(e) {
   function t(e, t, n, r) {
    return new U(e, t, n, r);
   }
   e.create = t;
   function n(e) {
    var t = e;
    return W.defined(t) && W.string(t.uri) && (W.undefined(t.languageId) || W.string(t.languageId)) && W.number(t.lineCount) && W.func(t.getText) && W.func(t.positionAt) && W.func(t.offsetAt) ? true : false;
   }
   e.is = n;
   function r(e, t) {
    var n = e.getText();
    var r = i(t, function(e, t) {
     var n = e.range.start.line - t.range.start.line;
     if (n === 0) {
      return e.range.start.character - t.range.start.character;
     }
     return n;
    });
    var s = n.length;
    for (var a = r.length - 1; a >= 0; a--) {
     var o = r[a];
     var u = e.offsetAt(o.range.start);
     var c = e.offsetAt(o.range.end);
     if (c <= s) {
      n = n.substring(0, u) + o.newText + n.substring(c, n.length);
     } else {
      throw new Error("Ovelapping edit");
     }
     s = u;
    }
    return n;
   }
   e.applyEdits = r;
   function i(e, t) {
    if (e.length <= 1) {
     return e;
    }
    var n = e.length / 2 | 0;
    var r = e.slice(0, n);
    var s = e.slice(n);
    i(r, t);
    i(s, t);
    var a = 0;
    var o = 0;
    var u = 0;
    while (a < r.length && o < s.length) {
     var c = t(r[a], s[o]);
     if (c <= 0) {
      e[u++] = r[a++];
     } else {
      e[u++] = s[o++];
     }
    }
    while (a < r.length) {
     e[u++] = r[a++];
    }
    while (o < s.length) {
     e[u++] = s[o++];
    }
    return e;
   }
  })(j || (j = {}));
  var q;
  (function(e) {
   e.Manual = 1;
   e.AfterDelay = 2;
   e.FocusOut = 3;
  })(q || (q = {}));
  var U = function() {
   function e(e, t, n, r) {
    this._uri = e;
    this._languageId = t;
    this._version = n;
    this._content = r;
    this._lineOffsets = null;
   }
   Object.defineProperty(e.prototype, "uri", {
    get: function() {
     return this._uri;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "languageId", {
    get: function() {
     return this._languageId;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "version", {
    get: function() {
     return this._version;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.getText = function(e) {
    if (e) {
     var t = this.offsetAt(e.start);
     var n = this.offsetAt(e.end);
     return this._content.substring(t, n);
    }
    return this._content;
   };
   e.prototype.update = function(e, t) {
    this._content = e.text;
    this._version = t;
    this._lineOffsets = null;
   };
   e.prototype.getLineOffsets = function() {
    if (this._lineOffsets === null) {
     var e = [];
     var t = this._content;
     var n = true;
     for (var r = 0; r < t.length; r++) {
      if (n) {
       e.push(r);
       n = false;
      }
      var i = t.charAt(r);
      n = i === "\r" || i === "\n";
      if (i === "\r" && r + 1 < t.length && t.charAt(r + 1) === "\n") {
       r++;
      }
     }
     if (n && t.length > 0) {
      e.push(t.length);
     }
     this._lineOffsets = e;
    }
    return this._lineOffsets;
   };
   e.prototype.positionAt = function(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    var t = this.getLineOffsets();
    var n = 0, i = t.length;
    if (i === 0) {
     return r.create(0, e);
    }
    while (n < i) {
     var s = Math.floor((n + i) / 2);
     if (t[s] > e) {
      i = s;
     } else {
      n = s + 1;
     }
    }
    var a = n - 1;
    return r.create(a, e - t[a]);
   };
   e.prototype.offsetAt = function(e) {
    var t = this.getLineOffsets();
    if (e.line >= t.length) {
     return this._content.length;
    } else if (e.line < 0) {
     return 0;
    }
    var n = t[e.line];
    var r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
    return Math.max(Math.min(n + e.character, r), n);
   };
   Object.defineProperty(e.prototype, "lineCount", {
    get: function() {
     return this.getLineOffsets().length;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var W;
  (function(e) {
   var t = Object.prototype.toString;
   function n(e) {
    return typeof e !== "undefined";
   }
   e.defined = n;
   function r(e) {
    return typeof e === "undefined";
   }
   e.undefined = r;
   function i(e) {
    return e === true || e === false;
   }
   e.boolean = i;
   function s(e) {
    return t.call(e) === "[object String]";
   }
   e.string = s;
   function a(e) {
    return t.call(e) === "[object Number]";
   }
   e.number = a;
   function o(e) {
    return t.call(e) === "[object Function]";
   }
   e.func = o;
   function u(e) {
    return e !== null && typeof e === "object";
   }
   e.objectLiteral = u;
   function c(e, t) {
    return Array.isArray(e) && e.every(t);
   }
   e.typedArray = c;
  })(W || (W = {}));
 },
 IYmx: function(e, t, n) {
  "use strict";
  function r(e) {
   return typeof e === "undefined" || e === null;
  }
  function i(e) {
   return typeof e === "object" && e !== null;
  }
  function s(e) {
   if (Array.isArray(e)) return e; else if (r(e)) return [];
   return [ e ];
  }
  function a(e, t) {
   var n, r, i, s;
   if (t) {
    s = Object.keys(t);
    for (n = 0, r = s.length; n < r; n += 1) {
     i = s[n];
     e[i] = t[i];
    }
   }
   return e;
  }
  function o(e, t) {
   var n = "", r;
   for (r = 0; r < t; r += 1) {
    n += e;
   }
   return n;
  }
  function u(e) {
   return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
  }
  e.exports.isNothing = r;
  e.exports.isObject = i;
  e.exports.toArray = s;
  e.exports.repeat = o;
  e.exports.isNegativeZero = u;
  e.exports.extend = a;
 },
 IjCO: function(e, t, n) {
  "use strict";
  var r = n("cYFF");
  e.exports = new r.Type("tag:yaml.org,2002:map", {
   kind: "mapping",
   construct: function(e) {
    return null !== e ? e : {};
   }
  });
 },
 J3Nh: function(e, t, n) {
  var r = n("UNVE");
  var i = n("jK02");
  t = e.exports = n("HoXx");
  t.init = f;
  t.log = c;
  t.formatArgs = o;
  t.save = l;
  t.load = h;
  t.useColors = a;
  t.colors = [ 6, 2, 3, 4, 5, 1 ];
  try {
   var s = n("bAum");
   if (s && s.level >= 2) {
    t.colors = [ 20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221 ];
   }
  } catch (e) {}
  t.inspectOpts = Object.keys(process.env).filter(function(e) {
   return /^debug_/i.test(e);
  }).reduce(function(e, t) {
   var n = t.substring(6).toLowerCase().replace(/_([a-z])/g, function(e, t) {
    return t.toUpperCase();
   });
   var r = process.env[t];
   if (/^(yes|on|true|enabled)$/i.test(r)) r = true; else if (/^(no|off|false|disabled)$/i.test(r)) r = false; else if (r === "null") r = null; else r = Number(r);
   e[n] = r;
   return e;
  }, {});
  function a() {
   return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : r.isatty(process.stderr.fd);
  }
  t.formatters.o = function(e) {
   this.inspectOpts.colors = this.useColors;
   return i.inspect(e, this.inspectOpts).split("\n").map(function(e) {
    return e.trim();
   }).join(" ");
  };
  t.formatters.O = function(e) {
   this.inspectOpts.colors = this.useColors;
   return i.inspect(e, this.inspectOpts);
  };
  function o(e) {
   var n = this.namespace;
   var r = this.useColors;
   if (r) {
    var i = this.color;
    var s = "[3" + (i < 8 ? i : "8;5;" + i);
    var a = "  " + s + ";1m" + n + " " + "[0m";
    e[0] = a + e[0].split("\n").join("\n" + a);
    e.push(s + "m+" + t.humanize(this.diff) + "[0m");
   } else {
    e[0] = u() + n + " " + e[0];
   }
  }
  function u() {
   if (t.inspectOpts.hideDate) {
    return "";
   } else {
    return new Date().toISOString() + " ";
   }
  }
  function c() {
   return process.stderr.write(i.format.apply(i, arguments) + "\n");
  }
  function l(e) {
   if (null == e) {
    delete process.env.DEBUG;
   } else {
    process.env.DEBUG = e;
   }
  }
  function h() {
   return process.env.DEBUG;
  }
  function f(e) {
   e.inspectOpts = {};
   var n = Object.keys(t.inspectOpts);
   for (var r = 0; r < n.length; r++) {
    e.inspectOpts[n[r]] = t.inspectOpts[n[r]];
   }
  }
  t.enable(h());
 },
 J3QK: function(e, t, n) {
  "use strict";
  var r;
  var i;
  try {
   var s = r;
   i = n("NkYg").Buffer;
  } catch (e) {}
  var a = n("gax4");
  var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
  function u(e) {
   if (e === null) return false;
   var t, n, r = 0, i = e.length, s = o;
   for (n = 0; n < i; n++) {
    t = s.indexOf(e.charAt(n));
    if (t > 64) continue;
    if (t < 0) return false;
    r += 6;
   }
   return r % 8 === 0;
  }
  function c(e) {
   var t, n, r = e.replace(/[\r\n=]/g, ""), s = r.length, a = o, u = 0, c = [];
   for (t = 0; t < s; t++) {
    if (t % 4 === 0 && t) {
     c.push(u >> 16 & 255);
     c.push(u >> 8 & 255);
     c.push(u & 255);
    }
    u = u << 6 | a.indexOf(r.charAt(t));
   }
   n = s % 4 * 6;
   if (n === 0) {
    c.push(u >> 16 & 255);
    c.push(u >> 8 & 255);
    c.push(u & 255);
   } else if (n === 18) {
    c.push(u >> 10 & 255);
    c.push(u >> 2 & 255);
   } else if (n === 12) {
    c.push(u >> 4 & 255);
   }
   if (i) {
    return i.from ? i.from(c) : new i(c);
   }
   return c;
  }
  function l(e) {
   var t = "", n = 0, r, i, s = e.length, a = o;
   for (r = 0; r < s; r++) {
    if (r % 3 === 0 && r) {
     t += a[n >> 18 & 63];
     t += a[n >> 12 & 63];
     t += a[n >> 6 & 63];
     t += a[n & 63];
    }
    n = (n << 8) + e[r];
   }
   i = s % 3;
   if (i === 0) {
    t += a[n >> 18 & 63];
    t += a[n >> 12 & 63];
    t += a[n >> 6 & 63];
    t += a[n & 63];
   } else if (i === 2) {
    t += a[n >> 10 & 63];
    t += a[n >> 4 & 63];
    t += a[n << 2 & 63];
    t += a[64];
   } else if (i === 1) {
    t += a[n >> 2 & 63];
    t += a[n << 4 & 63];
    t += a[64];
    t += a[64];
   }
   return t;
  }
  function h(e) {
   return i && i.isBuffer(e);
  }
  e.exports = new a("tag:yaml.org,2002:binary", {
   kind: "scalar",
   resolve: u,
   construct: c,
   predicate: h,
   represent: l
  });
 },
 Jun9: function(e, t, n) {
  "use strict";
  var r = n("cYFF");
  function i(e) {
   return "<<" === e || null === e;
  }
  e.exports = new r.Type("tag:yaml.org,2002:merge", {
   kind: "scalar",
   resolve: i
  });
 },
 KEll: function(e, t) {
  e.exports = require("http");
 },
 KYnE: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("kLbW");
  const i = n("chxr");
  const s = n("wXef");
  const a = n("EoxW");
  const o = a.loadMessageBundle();
  function u(e) {
   switch (e) {
   case r.ParseErrorCode.InvalidSymbol:
    return o("error.invalidSymbol", "Invalid symbol");

   case r.ParseErrorCode.InvalidNumberFormat:
    return o("error.invalidNumberFormat", "Invalid number format");

   case r.ParseErrorCode.PropertyNameExpected:
    return o("error.propertyNameExpected", "Property name expected");

   case r.ParseErrorCode.ValueExpected:
    return o("error.valueExpected", "Value expected");

   case r.ParseErrorCode.ColonExpected:
    return o("error.colonExpected", "Colon expected");

   case r.ParseErrorCode.CommaExpected:
    return o("error.commaExpected", "Comma expected");

   case r.ParseErrorCode.CloseBraceExpected:
    return o("error.closeBraceExpected", "Closing brace expected");

   case r.ParseErrorCode.CloseBracketExpected:
    return o("error.closeBracketExpected", "Closing bracket expected");

   case r.ParseErrorCode.EndOfFileExpected:
    return o("error.endOfFileExpected", "End of file expected");

   default:
    return "";
   }
  }
  class c {
   constructor(e) {
    this.combinedSchemaId = "schemaservice://combinedSchema/" + encodeURIComponent(e);
    try {
     this.patternRegExp = new RegExp(s.convertSimple2RegExpPattern(e) + "$");
    } catch (e) {
     this.patternRegExp = null;
    }
    this.schemas = [];
    this.combinedSchema = null;
   }
   addSchema(e) {
    this.schemas.push(e);
    this.combinedSchema = null;
   }
   matchesPattern(e) {
    return this.patternRegExp && this.patternRegExp.test(e);
   }
   getCombinedSchema(e) {
    if (!this.combinedSchema) {
     this.combinedSchema = e.createCombinedSchema(this.combinedSchemaId, this.schemas);
    }
    return this.combinedSchema;
   }
  }
  t.FilePatternAssociation = c;
  class l {
   constructor(e, t, n) {
    this.service = e;
    this.url = t;
    if (n) {
     this.unresolvedSchema = this.service.promise.resolve(new h(n));
    }
   }
   getUnresolvedSchema() {
    if (!this.unresolvedSchema) {
     this.unresolvedSchema = this.service.loadSchema(this.url);
    }
    return this.unresolvedSchema;
   }
   getResolvedSchema() {
    if (!this.resolvedSchema) {
     this.resolvedSchema = this.getUnresolvedSchema().then(e => {
      return this.service.resolveSchemaContent(e, this.url);
     });
    }
    return this.resolvedSchema;
   }
   clearSchema() {
    this.resolvedSchema = null;
    this.unresolvedSchema = null;
   }
  }
  class h {
   constructor(e, t = []) {
    this.schema = e;
    this.errors = t;
   }
  }
  t.UnresolvedSchema = h;
  class f {
   constructor(e, t = []) {
    this.schema = e;
    this.errors = t;
   }
   getSection(e) {
    return this.getSectionRecursive(e, this.schema);
   }
   getSectionRecursive(e, t) {
    if (!t || e.length === 0) {
     return t;
    }
    let n = e.shift();
    if (t.properties && t.properties[n]) {
     return this.getSectionRecursive(e, t.properties[n]);
    } else if (t.patternProperties) {
     Object.keys(t.patternProperties).forEach(r => {
      let i = new RegExp(r);
      if (i.test(n)) {
       return this.getSectionRecursive(e, t.patternProperties[r]);
      }
     });
    } else if (t.additionalProperties) {
     return this.getSectionRecursive(e, t.additionalProperties);
    } else if (n.match("[0-9]+")) {
     if (t.items) {
      return this.getSectionRecursive(e, t.items);
     } else if (Array.isArray(t.items)) {
      try {
       let r = parseInt(n, 10);
       if (t.items[r]) {
        return this.getSectionRecursive(e, t.items[r]);
       }
       return null;
      } catch (e) {
       return null;
      }
     }
    }
    return null;
   }
  }
  t.ResolvedSchema = f;
  class p {
   constructor(e, t, n, r) {
    this.contextService = t;
    this.requestService = e;
    this.promiseConstructor = r || Promise;
    this.callOnDispose = [];
    this.customSchemaProvider = n;
    this.contributionSchemas = {};
    this.contributionAssociations = {};
    this.schemasById = {};
    this.filePatternAssociations = [];
    this.filePatternAssociationById = {};
    this.registeredSchemasIds = {};
   }
   getRegisteredSchemaIds(e) {
    return Object.keys(this.registeredSchemasIds).filter(t => {
     let n = i.default.parse(t).scheme;
     return n !== "schemaservice" && (!e || e(n));
    });
   }
   get promise() {
    return this.promiseConstructor;
   }
   dispose() {
    while (this.callOnDispose.length > 0) {
     this.callOnDispose.pop()();
    }
   }
   onResourceChange(e) {
    e = this.normalizeId(e);
    let t = this.schemasById[e];
    if (t) {
     t.clearSchema();
     return true;
    }
    return false;
   }
   normalizeId(e) {
    return i.default.parse(e).toString();
   }
   setSchemaContributions(e) {
    if (e.schemas) {
     let t = e.schemas;
     for (let e in t) {
      let n = this.normalizeId(e);
      this.contributionSchemas[n] = this.addSchemaHandle(n, t[e]);
     }
    }
    if (e.schemaAssociations) {
     let n = e.schemaAssociations;
     for (let e in n) {
      let r = n[e];
      this.contributionAssociations[e] = r;
      var t = this.getOrAddFilePatternAssociation(e);
      r.forEach(e => {
       let n = this.normalizeId(e);
       t.addSchema(n);
      });
     }
    }
   }
   addSchemaHandle(e, t) {
    let n = new l(this, e, t);
    this.schemasById[e] = n;
    return n;
   }
   getOrAddSchemaHandle(e, t) {
    return this.schemasById[e] || this.addSchemaHandle(e, t);
   }
   getOrAddFilePatternAssociation(e) {
    let t = this.filePatternAssociationById[e];
    if (!t) {
     t = new c(e);
     this.filePatternAssociationById[e] = t;
     this.filePatternAssociations.push(t);
    }
    return t;
   }
   registerExternalSchema(e, t = null, n) {
    let r = this.normalizeId(e);
    this.registeredSchemasIds[r] = true;
    if (t) {
     t.forEach(e => {
      this.getOrAddFilePatternAssociation(e).addSchema(r);
     });
    }
    return n ? this.addSchemaHandle(r, n) : this.getOrAddSchemaHandle(r);
   }
   clearExternalSchemas() {
    this.schemasById = {};
    this.filePatternAssociations = [];
    this.filePatternAssociationById = {};
    this.registeredSchemasIds = {};
    for (let e in this.contributionSchemas) {
     this.schemasById[e] = this.contributionSchemas[e];
     this.registeredSchemasIds[e] = true;
    }
    for (let t in this.contributionAssociations) {
     var e = this.getOrAddFilePatternAssociation(t);
     this.contributionAssociations[t].forEach(t => {
      let n = this.normalizeId(t);
      e.addSchema(n);
     });
    }
   }
   getResolvedSchema(e) {
    let t = this.normalizeId(e);
    let n = this.schemasById[t];
    if (n) {
     return n.getResolvedSchema();
    }
    return this.promise.resolve(null);
   }
   loadSchema(e) {
    if (!this.requestService) {
     let t = o("json.schema.norequestservice", "Unable to load schema from '{0}'. No schema request service available", d(e));
     return this.promise.resolve(new h({}, [ t ]));
    }
    return this.requestService(e).then(t => {
     if (!t) {
      let t = o("json.schema.nocontent", "Unable to load schema from '{0}': No content.", d(e));
      return new h({}, [ t ]);
     }
     let n = {};
     let i = [];
     n = r.parse(t, i);
     let s = i.length ? [ o("json.schema.invalidFormat", "Unable to parse content from '{0}': {1}.", d(e), u(i[0])) ] : [];
     return new h(n, s);
    }, t => {
     let n = o("json.schema.unabletoload", "Unable to load schema from '{0}': {1}", d(e), t.toString());
     return new h({}, [ n ]);
    });
   }
   resolveSchemaContent(e, t) {
    let n = e.errors.slice(0);
    let r = e.schema;
    let i = this.contextService;
    let s = (e, t) => {
     if (!t) {
      return e;
     }
     let n = e;
     if (t[0] === "/") {
      t = t.substr(1);
     }
     t.split("/").some(e => {
      n = n[e];
      return !n;
     });
     return n;
    };
    let a = (e, t, r) => {
     let i = s(t, r);
     if (i) {
      for (let t in i) {
       if (i.hasOwnProperty(t) && !e.hasOwnProperty(t)) {
        e[t] = i[t];
       }
      }
     } else {
      n.push(o("json.schema.invalidref", "$ref '{0}' in {1} can not be resolved.", r, t.id));
     }
     delete e.$ref;
    };
    let u = (e, t, r, s) => {
     if (i && !/^\w+:\/\/.*/.test(t)) {
      t = i.resolveRelativePath(t, s);
     }
     t = this.normalizeId(t);
     return this.getOrAddSchemaHandle(t).getUnresolvedSchema().then(i => {
      if (i.errors.length) {
       let e = r ? t + "#" + r : t;
       n.push(o("json.schema.problemloadingref", "Problems loading reference '{0}': {1}", e, i.errors[0]));
      }
      a(e, i.schema, r);
      return c(e, i.schema, t);
     });
    };
    let c = (e, t, n) => {
     if (!e) {
      return Promise.resolve(null);
     }
     let r = [ e ];
     let i = [];
     let s = [];
     let o = (...e) => {
      for (let t of e) {
       if (typeof t === "object") {
        r.push(t);
       }
      }
     };
     let c = (...e) => {
      for (let t of e) {
       if (typeof t === "object") {
        for (let e in t) {
         let n = t[e];
         r.push(n);
        }
       }
      }
     };
     let l = (...e) => {
      for (let t of e) {
       if (Array.isArray(t)) {
        r.push.apply(r, t);
       }
      }
     };
     while (r.length) {
      let e = r.pop();
      if (i.indexOf(e) >= 0) {
       continue;
      }
      i.push(e);
      if (e.$ref) {
       let r = e.$ref.split("#", 2);
       if (r[0].length > 0) {
        s.push(u(e, r[0], r[1], n));
        continue;
       } else {
        a(e, t, r[1]);
       }
      }
      o(e.items, e.additionalProperties, e.not);
      c(e.definitions, e.properties, e.patternProperties, e.dependencies);
      l(e.anyOf, e.allOf, e.oneOf, e.items);
     }
     return this.promise.all(s);
    };
    return c(r, r, t).then(e => new f(r, n));
   }
   getSchemaForResource(e) {
    const t = () => {
     for (let t = this.filePatternAssociations.length - 1; t >= 0; t--) {
      let n = this.filePatternAssociations[t];
      if (n.matchesPattern(e)) {
       return n.getCombinedSchema(this).getResolvedSchema();
      }
     }
     return this.promise.resolve(null);
    };
    if (this.customSchemaProvider) {
     return this.customSchemaProvider(e).then(e => {
      return this.loadSchema(e).then(t => this.resolveSchemaContent(t, e));
     }).then(e => e, e => {
      return t();
     });
    } else {
     return t();
    }
   }
   createCombinedSchema(e, t) {
    if (t.length === 1) {
     return this.getOrAddSchemaHandle(t[0]);
    } else {
     let n = {
      allOf: t.map(e => ({
       $ref: e
      }))
     };
     return this.addSchemaHandle(e, n);
    }
   }
  }
  t.JSONSchemaService = p;
  function d(e) {
   try {
    let t = i.default.parse(e);
    if (t.scheme === "file") {
     return t.fsPath;
    }
   } catch (e) {}
   return e;
  }
 },
 L4jM: function(e, t, n) {
  "use strict";
  var r = n("7Nz6");
  var i = new r.Schema({
   include: [ n("ah4D") ],
   implicit: [ n("5ZlD"), n("Jun9") ],
   explicit: [ n("xZJO"), n("5FsR"), n("UQiU"), n("/ELh") ]
  });
  e.exports = i;
 },
 M57S: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("oyvS");
  var i = n("jle/");
  var s = n("PJMN");
  var a = n("Qs2e");
  var o = n("NW/o");
  var u = n("9+ej");
  function c() {
   var e = s.randomBytes(21).toString("hex");
   if (process.platform === "win32") {
    return "\\\\.\\pipe\\vscode-jsonrpc-" + e + "-sock";
   } else {
    return r.join(i.tmpdir(), "vscode-" + e + ".sock");
   }
  }
  t.generateRandomPipeName = c;
  function l(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n;
   var r = new Promise(function(e, t) {
    n = e;
   });
   return new Promise(function(i, s) {
    var c = a.createServer(function(e) {
     c.close();
     n([ new o.SocketMessageReader(e, t), new u.SocketMessageWriter(e, t) ]);
    });
    c.on("error", s);
    c.listen(e, function() {
     c.removeListener("error", s);
     i({
      onConnected: function() {
       return r;
      }
     });
    });
   });
  }
  t.createClientPipeTransport = l;
  function h(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n = a.createConnection(e);
   return [ new o.SocketMessageReader(n, t), new u.SocketMessageWriter(n, t) ];
  }
  t.createServerPipeTransport = h;
 },
 N1Va: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("4JhR");
  var i = n("k4pi");
  var s = n("BZb6");
  var a = n("L4jM");
  var o = Object.prototype.toString;
  var u = Object.prototype.hasOwnProperty;
  var c = 9;
  var l = 10;
  var h = 13;
  var f = 32;
  var p = 33;
  var d = 34;
  var m = 35;
  var v = 37;
  var g = 38;
  var y = 39;
  var x = 42;
  var C = 44;
  var D = 45;
  var E = 58;
  var b = 62;
  var w = 63;
  var S = 64;
  var A = 91;
  var k = 93;
  var F = 96;
  var T = 123;
  var _ = 124;
  var N = 125;
  var O = {};
  O[0] = "\\0";
  O[7] = "\\a";
  O[8] = "\\b";
  O[9] = "\\t";
  O[10] = "\\n";
  O[11] = "\\v";
  O[12] = "\\f";
  O[13] = "\\r";
  O[27] = "\\e";
  O[34] = '\\"';
  O[92] = "\\\\";
  O[133] = "\\N";
  O[160] = "\\_";
  O[8232] = "\\L";
  O[8233] = "\\P";
  var P = [ "y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF" ];
  function I(e, t) {
   var n, r, i, s, a, o, c;
   if (null === t) {
    return {};
   }
   n = {};
   r = Object.keys(t);
   for (i = 0, s = r.length; i < s; i += 1) {
    a = r[i];
    o = String(t[a]);
    if ("!!" === a.slice(0, 2)) {
     a = "tag:yaml.org,2002:" + a.slice(2);
    }
    c = e.compiledTypeMap[a];
    if (c && u.call(c.styleAliases, o)) {
     o = c.styleAliases[o];
    }
    n[a] = o;
   }
   return n;
  }
  function M(e) {
   var t, n, s;
   t = e.toString(16).toUpperCase();
   if (e <= 255) {
    n = "x";
    s = 2;
   } else if (e <= 65535) {
    n = "u";
    s = 4;
   } else if (e <= 4294967295) {
    n = "U";
    s = 8;
   } else {
    throw new i("code point within a string may not be greater than 0xFFFFFFFF");
   }
   return "\\" + n + r.repeat("0", s - t.length) + t;
  }
  function R(e) {
   this.schema = e["schema"] || s;
   this.indent = Math.max(1, e["indent"] || 2);
   this.skipInvalid = e["skipInvalid"] || false;
   this.flowLevel = r.isNothing(e["flowLevel"]) ? -1 : e["flowLevel"];
   this.styleMap = I(this.schema, e["styles"] || null);
   this.implicitTypes = this.schema.compiledImplicit;
   this.explicitTypes = this.schema.compiledExplicit;
   this.tag = null;
   this.result = "";
   this.duplicates = [];
   this.usedDuplicates = null;
  }
  function B(e, t) {
   var n = r.repeat(" ", t), i = 0, s = -1, a = "", o, u = e.length;
   while (i < u) {
    s = e.indexOf("\n", i);
    if (s === -1) {
     o = e.slice(i);
     i = u;
    } else {
     o = e.slice(i, s + 1);
     i = s + 1;
    }
    if (o.length && o !== "\n") {
     a += n;
    }
    a += o;
   }
   return a;
  }
  function L(e, t) {
   return "\n" + r.repeat(" ", e.indent * t);
  }
  function j(e, t) {
   var n, r, i;
   for (n = 0, r = e.implicitTypes.length; n < r; n += 1) {
    i = e.implicitTypes[n];
    if (i.resolve(t)) {
     return true;
    }
   }
   return false;
  }
  function q(e) {
   this.source = e;
   this.result = "";
   this.checkpoint = 0;
  }
  q.prototype.takeUpTo = function(e) {
   var t;
   if (e < this.checkpoint) {
    t = new Error("position should be > checkpoint");
    t.position = e;
    t.checkpoint = this.checkpoint;
    throw t;
   }
   this.result += this.source.slice(this.checkpoint, e);
   this.checkpoint = e;
   return this;
  };
  q.prototype.escapeChar = function() {
   var e, t;
   e = this.source.charCodeAt(this.checkpoint);
   t = O[e] || M(e);
   this.result += t;
   this.checkpoint += 1;
   return this;
  };
  q.prototype.finish = function() {
   if (this.source.length > this.checkpoint) {
    this.takeUpTo(this.source.length);
   }
  };
  function U(e, t, n) {
   var r, i, s, a, o, u, c, h, p, m, v, g, x, C, E, b, A, k, T, _, N;
   if (0 === t.length) {
    e.dump = "''";
    return;
   }
   if (t.indexOf("!include") == 0) {
    e.dump = "" + t;
    return;
   }
   if (t.indexOf("!$$$novalue") == 0) {
    e.dump = "";
    return;
   }
   if (-1 !== P.indexOf(t)) {
    e.dump = "'" + t + "'";
    return;
   }
   r = true;
   i = t.length ? t.charCodeAt(0) : 0;
   s = f === i || f === t.charCodeAt(t.length - 1);
   if (D === i || w === i || S === i || F === i) {
    r = false;
   }
   if (s) {
    r = false;
    a = false;
    o = false;
   } else {
    a = true;
    o = true;
   }
   u = true;
   c = new q(t);
   h = false;
   p = 0;
   m = 0;
   v = e.indent * n;
   g = 80;
   if (v < 40) {
    g -= v;
   } else {
    g = 40;
   }
   for (C = 0; C < t.length; C++) {
    x = t.charCodeAt(C);
    if (r) {
     if (!V(x)) {
      r = false;
     } else {
      continue;
     }
    }
    if (u && x === y) {
     u = false;
    }
    E = O[x];
    b = J(x);
    if (!E && !b) {
     continue;
    }
    if (x !== l && x !== d && x !== y) {
     a = false;
     o = false;
    } else if (x === l) {
     h = true;
     u = false;
     if (C > 0) {
      A = t.charCodeAt(C - 1);
      if (A === f) {
       o = false;
       a = false;
      }
     }
     if (a) {
      k = C - p;
      p = C;
      if (k > m) {
       m = k;
      }
     }
    }
    if (x !== d) {
     u = false;
    }
    c.takeUpTo(C);
    c.escapeChar();
   }
   if (r && j(e, t)) {
    r = false;
   }
   T = "";
   if (a || o) {
    _ = 0;
    if (t.charCodeAt(t.length - 1) === l) {
     _ += 1;
     if (t.charCodeAt(t.length - 2) === l) {
      _ += 1;
     }
    }
    if (_ === 0) {
     T = "-";
    } else if (_ === 2) {
     T = "+";
    }
   }
   if (o && m < g) {
    a = false;
   }
   if (!h) {
    o = false;
   }
   if (r) {
    e.dump = t;
   } else if (u) {
    e.dump = "'" + t + "'";
   } else if (a) {
    N = W(t, g);
    e.dump = ">" + T + "\n" + B(N, v);
   } else if (o) {
    if (!T) {
     t = t.replace(/\n$/, "");
    }
    e.dump = "|" + T + "\n" + B(t, v);
   } else if (c) {
    c.finish();
    e.dump = '"' + c.result + '"';
   } else {
    throw new Error("Failed to dump scalar value");
   }
   return;
  }
  function W(e, t) {
   var n = "", r = 0, i = e.length, s = /\n+$/.exec(e), a;
   if (s) {
    i = s.index + 1;
   }
   while (r < i) {
    a = e.indexOf("\n", r);
    if (a > i || a === -1) {
     if (n) {
      n += "\n\n";
     }
     n += z(e.slice(r, i), t);
     r = i;
    } else {
     if (n) {
      n += "\n\n";
     }
     n += z(e.slice(r, a), t);
     r = a + 1;
    }
   }
   if (s && s[0] !== "\n") {
    n += s[0];
   }
   return n;
  }
  function z(e, t) {
   if (e === "") {
    return e;
   }
   var n = /[^\s] [^\s]/g, r = "", i = 0, s = 0, a = n.exec(e), o, u, c;
   while (a) {
    o = a.index;
    if (o - s > t) {
     if (i !== s) {
      u = i;
     } else {
      u = o;
     }
     if (r) {
      r += "\n";
     }
     c = e.slice(s, u);
     r += c;
     s = u + 1;
    }
    i = o + 1;
    a = n.exec(e);
   }
   if (r) {
    r += "\n";
   }
   if (s !== i && e.length - s > t) {
    r += e.slice(s, i) + "\n" + e.slice(i + 1);
   } else {
    r += e.slice(s);
   }
   return r;
  }
  function V(e) {
   return c !== e && l !== e && h !== e && C !== e && A !== e && k !== e && T !== e && N !== e && m !== e && g !== e && x !== e && p !== e && _ !== e && b !== e && y !== e && d !== e && v !== e && E !== e && !O[e] && !J(e);
  }
  function J(e) {
   return !(32 <= e && e <= 126 || 133 === e || 160 <= e && e <= 55295 || 57344 <= e && e <= 65533 || 65536 <= e && e <= 1114111);
  }
  function X(e, t, n) {
   var r = "", i = e.tag, s, a;
   for (s = 0, a = n.length; s < a; s += 1) {
    if ($(e, t, n[s], false, false)) {
     if (0 !== s) {
      r += ", ";
     }
     r += e.dump;
    }
   }
   e.tag = i;
   e.dump = "[" + r + "]";
  }
  function K(e, t, n, r) {
   var i = "", s = e.tag, a, o;
   for (a = 0, o = n.length; a < o; a += 1) {
    if ($(e, t + 1, n[a], true, true)) {
     if (!r || 0 !== a) {
      i += L(e, t);
     }
     i += "- " + e.dump;
    }
   }
   e.tag = s;
   e.dump = i || "[]";
  }
  function H(e, t, n) {
   var r = "", i = e.tag, s = Object.keys(n), a, o, u, c, l;
   for (a = 0, o = s.length; a < o; a += 1) {
    l = "";
    if (0 !== a) {
     l += ", ";
    }
    u = s[a];
    c = n[u];
    if (!$(e, t, u, false, false)) {
     continue;
    }
    if (e.dump.length > 1024) {
     l += "? ";
    }
    l += e.dump + ": ";
    if (!$(e, t, c, false, false)) {
     continue;
    }
    l += e.dump;
    r += l;
   }
   e.tag = i;
   e.dump = "{" + r + "}";
  }
  function Y(e, t, n, r) {
   var i = "", s = e.tag, a = Object.keys(n), o, u, c, h, f, p;
   for (o = 0, u = a.length; o < u; o += 1) {
    p = "";
    if (!r || 0 !== o) {
     p += L(e, t);
    }
    c = a[o];
    h = n[c];
    if (!$(e, t + 1, c, true, true)) {
     continue;
    }
    f = null !== e.tag && "?" !== e.tag || e.dump && e.dump.length > 1024;
    if (f) {
     if (e.dump && l === e.dump.charCodeAt(0)) {
      p += "?";
     } else {
      p += "? ";
     }
    }
    p += e.dump;
    if (f) {
     p += L(e, t);
    }
    if (!$(e, t + 1, h, true, f)) {
     continue;
    }
    if (e.dump && l === e.dump.charCodeAt(0)) {
     p += ":";
    } else {
     p += ": ";
    }
    p += e.dump;
    i += p;
   }
   e.tag = s;
   e.dump = i || "{}";
  }
  function G(e, t, n) {
   var r, s, a, c, l, h;
   s = n ? e.explicitTypes : e.implicitTypes;
   for (a = 0, c = s.length; a < c; a += 1) {
    l = s[a];
    if ((l.instanceOf || l.predicate) && (!l.instanceOf || "object" === typeof t && t instanceof l.instanceOf) && (!l.predicate || l.predicate(t))) {
     e.tag = n ? l.tag : "?";
     if (l.represent) {
      h = e.styleMap[l.tag] || l.defaultStyle;
      if ("[object Function]" === o.call(l.represent)) {
       r = l.represent(t, h);
      } else if (u.call(l.represent, h)) {
       r = l.represent[h](t, h);
      } else {
       throw new i("!<" + l.tag + '> tag resolver accepts not "' + h + '" style');
      }
      e.dump = r;
     }
     return true;
    }
   }
   return false;
  }
  function $(e, t, n, r, s) {
   e.tag = null;
   e.dump = n;
   if (!G(e, n, false)) {
    G(e, n, true);
   }
   var a = o.call(e.dump);
   if (r) {
    r = 0 > e.flowLevel || e.flowLevel > t;
   }
   if (null !== e.tag && "?" !== e.tag || 2 !== e.indent && t > 0) {
    s = false;
   }
   var u = "[object Object]" === a || "[object Array]" === a, c, l;
   if (u) {
    c = e.duplicates.indexOf(n);
    l = c !== -1;
   }
   if (l && e.usedDuplicates[c]) {
    e.dump = "*ref_" + c;
   } else {
    if (u && l && !e.usedDuplicates[c]) {
     e.usedDuplicates[c] = true;
    }
    if ("[object Object]" === a) {
     if (r && 0 !== Object.keys(e.dump).length) {
      Y(e, t, e.dump, s);
      if (l) {
       e.dump = "&ref_" + c + (0 === t ? "\n" : "") + e.dump;
      }
     } else {
      H(e, t, e.dump);
      if (l) {
       e.dump = "&ref_" + c + " " + e.dump;
      }
     }
    } else if ("[object Array]" === a) {
     if (r && 0 !== e.dump.length) {
      K(e, t, e.dump, s);
      if (l) {
       e.dump = "&ref_" + c + (0 === t ? "\n" : "") + e.dump;
      }
     } else {
      X(e, t, e.dump);
      if (l) {
       e.dump = "&ref_" + c + " " + e.dump;
      }
     }
    } else if ("[object String]" === a) {
     if ("?" !== e.tag) {
      U(e, e.dump, t);
     }
    } else {
     if (e.skipInvalid) {
      return false;
     }
     throw new i("unacceptable kind of an object to dump " + a);
    }
    if (null !== e.tag && "?" !== e.tag) {
     e.dump = "!<" + e.tag + "> " + e.dump;
    }
   }
   return true;
  }
  function Q(e, t) {
   var n = [], r = [], i, s;
   Z(e, n, r);
   for (i = 0, s = r.length; i < s; i += 1) {
    t.duplicates.push(n[r[i]]);
   }
   t.usedDuplicates = new Array(s);
  }
  function Z(e, t, n) {
   var r = o.call(e), i, s, a;
   if (null !== e && "object" === typeof e) {
    s = t.indexOf(e);
    if (-1 !== s) {
     if (-1 === n.indexOf(s)) {
      n.push(s);
     }
    } else {
     t.push(e);
     if (Array.isArray(e)) {
      for (s = 0, a = e.length; s < a; s += 1) {
       Z(e[s], t, n);
      }
     } else {
      i = Object.keys(e);
      for (s = 0, a = i.length; s < a; s += 1) {
       Z(e[i[s]], t, n);
      }
     }
    }
   }
  }
  function ee(e, t) {
   t = t || {};
   var n = new R(t);
   Q(e, n);
   if ($(n, 0, e, true, true)) {
    return n.dump + "\n";
   }
   return "";
  }
  t.dump = ee;
  function te(e, t) {
   return ee(e, r.extend({
    schema: a
   }, t));
  }
  t.safeDump = te;
 },
 N7S1: function(e, t, n) {
  "use strict";
  var r = n("gax4");
  function i() {
   return true;
  }
  function s() {
   return undefined;
  }
  function a() {
   return "";
  }
  function o(e) {
   return typeof e === "undefined";
  }
  e.exports = new r("tag:yaml.org,2002:js/undefined", {
   kind: "scalar",
   resolve: i,
   construct: s,
   predicate: o,
   represent: a
  });
 },
 "NW/o": function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var i = n("+VcB");
  var s = n("Undm");
  var a = 8192;
  var o = new Buffer("\r", "ascii")[0];
  var u = new Buffer("\n", "ascii")[0];
  var c = "\r\n";
  var l = function() {
   function e(e) {
    if (e === void 0) {
     e = "utf8";
    }
    this.encoding = e;
    this.index = 0;
    this.buffer = new Buffer(a);
   }
   e.prototype.append = function(e) {
    var t = e;
    if (typeof e === "string") {
     var n = e;
     var r = Buffer.byteLength(n, this.encoding);
     t = new Buffer(r);
     t.write(n, 0, r, this.encoding);
    }
    if (this.buffer.length - this.index >= t.length) {
     t.copy(this.buffer, this.index, 0, t.length);
    } else {
     var i = (Math.ceil((this.index + t.length) / a) + 1) * a;
     if (this.index === 0) {
      this.buffer = new Buffer(i);
      t.copy(this.buffer, 0, 0, t.length);
     } else {
      this.buffer = Buffer.concat([ this.buffer.slice(0, this.index), t ], i);
     }
    }
    this.index += t.length;
   };
   e.prototype.tryReadHeaders = function() {
    var e = undefined;
    var t = 0;
    while (t + 3 < this.index && (this.buffer[t] !== o || this.buffer[t + 1] !== u || this.buffer[t + 2] !== o || this.buffer[t + 3] !== u)) {
     t++;
    }
    if (t + 3 >= this.index) {
     return e;
    }
    e = Object.create(null);
    var n = this.buffer.toString("ascii", 0, t).split(c);
    n.forEach(function(t) {
     var n = t.indexOf(":");
     if (n === -1) {
      throw new Error("Message header must separate key and value using :");
     }
     var r = t.substr(0, n);
     var i = t.substr(n + 1).trim();
     e[r] = i;
    });
    var r = t + 4;
    this.buffer = this.buffer.slice(r);
    this.index = this.index - r;
    return e;
   };
   e.prototype.tryReadContent = function(e) {
    if (this.index < e) {
     return null;
    }
    var t = this.buffer.toString(this.encoding, 0, e);
    var n = e;
    this.buffer.copy(this.buffer, 0, n);
    this.index = this.index - n;
    return t;
   };
   Object.defineProperty(e.prototype, "numberOfBytes", {
    get: function() {
     return this.index;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var h;
  (function(e) {
   function t(e) {
    var t = e;
    return t && s.func(t.listen) && s.func(t.dispose) && s.func(t.onError) && s.func(t.onClose) && s.func(t.onPartialMessage);
   }
   e.is = t;
  })(h = t.MessageReader || (t.MessageReader = {}));
  var f = function() {
   function e() {
    this.errorEmitter = new i.Emitter();
    this.closeEmitter = new i.Emitter();
    this.partialMessageEmitter = new i.Emitter();
   }
   e.prototype.dispose = function() {
    this.errorEmitter.dispose();
    this.closeEmitter.dispose();
   };
   Object.defineProperty(e.prototype, "onError", {
    get: function() {
     return this.errorEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireError = function(e) {
    this.errorEmitter.fire(this.asError(e));
   };
   Object.defineProperty(e.prototype, "onClose", {
    get: function() {
     return this.closeEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireClose = function() {
    this.closeEmitter.fire(undefined);
   };
   Object.defineProperty(e.prototype, "onPartialMessage", {
    get: function() {
     return this.partialMessageEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.firePartialMessage = function(e) {
    this.partialMessageEmitter.fire(e);
   };
   e.prototype.asError = function(e) {
    if (e instanceof Error) {
     return e;
    } else {
     return new Error("Reader recevied error. Reason: " + (s.string(e.message) ? e.message : "unknown"));
    }
   };
   return e;
  }();
  t.AbstractMessageReader = f;
  var p = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf8";
    }
    var r = e.call(this) || this;
    r.readable = t;
    r.buffer = new l(n);
    r._partialMessageTimeout = 1e4;
    return r;
   }
   Object.defineProperty(t.prototype, "partialMessageTimeout", {
    get: function() {
     return this._partialMessageTimeout;
    },
    set: function(e) {
     this._partialMessageTimeout = e;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.listen = function(e) {
    var t = this;
    this.nextMessageLength = -1;
    this.messageToken = 0;
    this.partialMessageTimer = undefined;
    this.callback = e;
    this.readable.on("data", function(e) {
     t.onData(e);
    });
    this.readable.on("error", function(e) {
     return t.fireError(e);
    });
    this.readable.on("close", function() {
     return t.fireClose();
    });
   };
   t.prototype.onData = function(e) {
    this.buffer.append(e);
    while (true) {
     if (this.nextMessageLength === -1) {
      var t = this.buffer.tryReadHeaders();
      if (!t) {
       return;
      }
      var n = t["Content-Length"];
      if (!n) {
       throw new Error("Header must provide a Content-Length property.");
      }
      var r = parseInt(n);
      if (isNaN(r)) {
       throw new Error("Content-Length value must be a number.");
      }
      this.nextMessageLength = r;
     }
     var i = this.buffer.tryReadContent(this.nextMessageLength);
     if (i === null) {
      this.setPartialMessageTimer();
      return;
     }
     this.clearPartialMessageTimer();
     this.nextMessageLength = -1;
     this.messageToken++;
     var s = JSON.parse(i);
     this.callback(s);
    }
   };
   t.prototype.clearPartialMessageTimer = function() {
    if (this.partialMessageTimer) {
     clearTimeout(this.partialMessageTimer);
     this.partialMessageTimer = undefined;
    }
   };
   t.prototype.setPartialMessageTimer = function() {
    var e = this;
    this.clearPartialMessageTimer();
    if (this._partialMessageTimeout <= 0) {
     return;
    }
    this.partialMessageTimer = setTimeout(function(t, n) {
     e.partialMessageTimer = undefined;
     if (t === e.messageToken) {
      e.firePartialMessage({
       messageToken: t,
       waitingTime: n
      });
      e.setPartialMessageTimer();
     }
    }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
   };
   return t;
  }(f);
  t.StreamMessageReader = p;
  var d = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this) || this;
    n.process = t;
    var r = n.process;
    r.on("error", function(e) {
     return n.fireError(e);
    });
    r.on("close", function() {
     return n.fireClose();
    });
    return n;
   }
   t.prototype.listen = function(e) {
    this.process.on("message", e);
   };
   return t;
  }(f);
  t.IPCMessageReader = d;
  var m = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf-8";
    }
    return e.call(this, t, n) || this;
   }
   return t;
  }(p);
  t.SocketMessageReader = m;
 },
 Nej0: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("yRVO");
  const i = n("E3tu");
  t.ConfigurationFeature = (e => {
   return class extends e {
    getConfiguration(e) {
     if (!e) {
      return this._getConfiguration({});
     } else if (i.string(e)) {
      return this._getConfiguration({
       section: e
      });
     } else {
      return this._getConfiguration(e);
     }
    }
    _getConfiguration(e) {
     let t = {
      items: Array.isArray(e) ? e : [ e ]
     };
     return this.connection.sendRequest(r.ConfigurationRequest.type, t).then(t => {
      return Array.isArray(e) ? t : t[0];
     });
    }
   };
  });
 },
 NkYg: function(e, t) {
  e.exports = require("buffer");
 },
 O9M0: function(e, t, n) {
  "use strict";
  var r = n("gax4");
  var i = Object.prototype.toString;
  function s(e) {
   if (e === null) return true;
   var t, n, r, s, a, o = e;
   a = new Array(o.length);
   for (t = 0, n = o.length; t < n; t += 1) {
    r = o[t];
    if (i.call(r) !== "[object Object]") return false;
    s = Object.keys(r);
    if (s.length !== 1) return false;
    a[t] = [ s[0], r[s[0]] ];
   }
   return true;
  }
  function a(e) {
   if (e === null) return [];
   var t, n, r, i, s, a = e;
   s = new Array(a.length);
   for (t = 0, n = a.length; t < n; t += 1) {
    r = a[t];
    i = Object.keys(r);
    s[t] = [ i[0], r[i[0]] ];
   }
   return s;
  }
  e.exports = new r("tag:yaml.org,2002:pairs", {
   kind: "sequence",
   resolve: s,
   construct: a
  });
 },
 OFSL: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  function r(e, t) {
   var n = [];
   var r = {};
   for (var i in e) {
    r[e[i][t]] = e[i];
   }
   for (i in r) {
    n.push(r[i]);
   }
   return n;
  }
  t.removeDuplicates = r;
  function i(e) {
   let t = [];
   let n = e;
   let r = true;
   for (let e = 0; e < n.length; e++) {
    if (r) {
     t.push(e);
     r = false;
    }
    let i = n.charAt(e);
    r = i === "\r" || i === "\n";
    if (i === "\r" && e + 1 < n.length && n.charAt(e + 1) === "\n") {
     e++;
    }
   }
   if (r && n.length > 0) {
    t.push(n.length);
   }
   return t;
  }
  t.getLineOffsets = i;
  function s(e) {
   let t = new Set();
   let n = [];
   for (let r in e) {
    let i = e[r];
    let s = JSON.stringify(i);
    if (!t.has(s)) {
     n.push(i);
     t.add(s);
    }
   }
   return n;
  }
  t.removeDuplicatesObj = s;
  function a(e, t) {
   for (let n in t.documents) {
    let r = t.documents[n];
    if (r.root && r.root.end >= e && r.root.start <= e) {
     return r;
    }
   }
   return null;
  }
  t.matchOffsetToDocument = a;
 },
 PJMN: function(e, t) {
  e.exports = require("crypto");
 },
 Pm2Y: function(e, t, n) {
  "use strict";
  var r = n("IYmx");
  var i = n("wGX6");
  var s = n("wtHW");
  var a = n("+kP4");
  var o = Object.prototype.toString;
  var u = Object.prototype.hasOwnProperty;
  var c = 9;
  var l = 10;
  var h = 32;
  var f = 33;
  var p = 34;
  var d = 35;
  var m = 37;
  var v = 38;
  var g = 39;
  var y = 42;
  var x = 44;
  var C = 45;
  var D = 58;
  var E = 62;
  var b = 63;
  var w = 64;
  var S = 91;
  var A = 93;
  var k = 96;
  var F = 123;
  var T = 124;
  var _ = 125;
  var N = {};
  N[0] = "\\0";
  N[7] = "\\a";
  N[8] = "\\b";
  N[9] = "\\t";
  N[10] = "\\n";
  N[11] = "\\v";
  N[12] = "\\f";
  N[13] = "\\r";
  N[27] = "\\e";
  N[34] = '\\"';
  N[92] = "\\\\";
  N[133] = "\\N";
  N[160] = "\\_";
  N[8232] = "\\L";
  N[8233] = "\\P";
  var O = [ "y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF" ];
  function P(e, t) {
   var n, r, i, s, a, o, c;
   if (t === null) return {};
   n = {};
   r = Object.keys(t);
   for (i = 0, s = r.length; i < s; i += 1) {
    a = r[i];
    o = String(t[a]);
    if (a.slice(0, 2) === "!!") {
     a = "tag:yaml.org,2002:" + a.slice(2);
    }
    c = e.compiledTypeMap["fallback"][a];
    if (c && u.call(c.styleAliases, o)) {
     o = c.styleAliases[o];
    }
    n[a] = o;
   }
   return n;
  }
  function I(e) {
   var t, n, s;
   t = e.toString(16).toUpperCase();
   if (e <= 255) {
    n = "x";
    s = 2;
   } else if (e <= 65535) {
    n = "u";
    s = 4;
   } else if (e <= 4294967295) {
    n = "U";
    s = 8;
   } else {
    throw new i("code point within a string may not be greater than 0xFFFFFFFF");
   }
   return "\\" + n + r.repeat("0", s - t.length) + t;
  }
  function M(e) {
   this.schema = e["schema"] || s;
   this.indent = Math.max(1, e["indent"] || 2);
   this.skipInvalid = e["skipInvalid"] || false;
   this.flowLevel = r.isNothing(e["flowLevel"]) ? -1 : e["flowLevel"];
   this.styleMap = P(this.schema, e["styles"] || null);
   this.sortKeys = e["sortKeys"] || false;
   this.lineWidth = e["lineWidth"] || 80;
   this.noRefs = e["noRefs"] || false;
   this.noCompatMode = e["noCompatMode"] || false;
   this.condenseFlow = e["condenseFlow"] || false;
   this.implicitTypes = this.schema.compiledImplicit;
   this.explicitTypes = this.schema.compiledExplicit;
   this.tag = null;
   this.result = "";
   this.duplicates = [];
   this.usedDuplicates = null;
  }
  function R(e, t) {
   var n = r.repeat(" ", t), i = 0, s = -1, a = "", o, u = e.length;
   while (i < u) {
    s = e.indexOf("\n", i);
    if (s === -1) {
     o = e.slice(i);
     i = u;
    } else {
     o = e.slice(i, s + 1);
     i = s + 1;
    }
    if (o.length && o !== "\n") a += n;
    a += o;
   }
   return a;
  }
  function B(e, t) {
   return "\n" + r.repeat(" ", e.indent * t);
  }
  function L(e, t) {
   var n, r, i;
   for (n = 0, r = e.implicitTypes.length; n < r; n += 1) {
    i = e.implicitTypes[n];
    if (i.resolve(t)) {
     return true;
    }
   }
   return false;
  }
  function j(e) {
   return e === h || e === c;
  }
  function q(e) {
   return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== 65279 || 65536 <= e && e <= 1114111;
  }
  function U(e) {
   return q(e) && e !== 65279 && e !== x && e !== S && e !== A && e !== F && e !== _ && e !== D && e !== d;
  }
  function W(e) {
   return q(e) && e !== 65279 && !j(e) && e !== C && e !== b && e !== D && e !== x && e !== S && e !== A && e !== F && e !== _ && e !== d && e !== v && e !== y && e !== f && e !== T && e !== E && e !== g && e !== p && e !== m && e !== w && e !== k;
  }
  function z(e) {
   var t = /^\n* /;
   return t.test(e);
  }
  var V = 1, J = 2, X = 3, K = 4, H = 5;
  function Y(e, t, n, r, i) {
   var s;
   var a;
   var o = false;
   var u = false;
   var c = r !== -1;
   var h = -1;
   var f = W(e.charCodeAt(0)) && !j(e.charCodeAt(e.length - 1));
   if (t) {
    for (s = 0; s < e.length; s++) {
     a = e.charCodeAt(s);
     if (!q(a)) {
      return H;
     }
     f = f && U(a);
    }
   } else {
    for (s = 0; s < e.length; s++) {
     a = e.charCodeAt(s);
     if (a === l) {
      o = true;
      if (c) {
       u = u || s - h - 1 > r && e[h + 1] !== " ";
       h = s;
      }
     } else if (!q(a)) {
      return H;
     }
     f = f && U(a);
    }
    u = u || c && (s - h - 1 > r && e[h + 1] !== " ");
   }
   if (!o && !u) {
    return f && !i(e) ? V : J;
   }
   if (n > 9 && z(e)) {
    return H;
   }
   return u ? K : X;
  }
  function G(e, t, n, r) {
   e.dump = function() {
    if (t.length === 0) {
     return "''";
    }
    if (!e.noCompatMode && O.indexOf(t) !== -1) {
     return "'" + t + "'";
    }
    var s = e.indent * Math.max(1, n);
    var a = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - s);
    var o = r || e.flowLevel > -1 && n >= e.flowLevel;
    function u(t) {
     return L(e, t);
    }
    switch (Y(t, o, e.indent, a, u)) {
    case V:
     return t;

    case J:
     return "'" + t.replace(/'/g, "''") + "'";

    case X:
     return "|" + $(t, e.indent) + Q(R(t, s));

    case K:
     return ">" + $(t, e.indent) + Q(R(Z(t, a), s));

    case H:
     return '"' + te(t, a) + '"';

    default:
     throw new i("impossible error: invalid scalar style");
    }
   }();
  }
  function $(e, t) {
   var n = z(e) ? String(t) : "";
   var r = e[e.length - 1] === "\n";
   var i = r && (e[e.length - 2] === "\n" || e === "\n");
   var s = i ? "+" : r ? "" : "-";
   return n + s + "\n";
  }
  function Q(e) {
   return e[e.length - 1] === "\n" ? e.slice(0, -1) : e;
  }
  function Z(e, t) {
   var n = /(\n+)([^\n]*)/g;
   var r = function() {
    var r = e.indexOf("\n");
    r = r !== -1 ? r : e.length;
    n.lastIndex = r;
    return ee(e.slice(0, r), t);
   }();
   var i = e[0] === "\n" || e[0] === " ";
   var s;
   var a;
   while (a = n.exec(e)) {
    var o = a[1], u = a[2];
    s = u[0] === " ";
    r += o + (!i && !s && u !== "" ? "\n" : "") + ee(u, t);
    i = s;
   }
   return r;
  }
  function ee(e, t) {
   if (e === "" || e[0] === " ") return e;
   var n = / [^ ]/g;
   var r;
   var i = 0, s, a = 0, o = 0;
   var u = "";
   while (r = n.exec(e)) {
    o = r.index;
    if (o - i > t) {
     s = a > i ? a : o;
     u += "\n" + e.slice(i, s);
     i = s + 1;
    }
    a = o;
   }
   u += "\n";
   if (e.length - i > t && a > i) {
    u += e.slice(i, a) + "\n" + e.slice(a + 1);
   } else {
    u += e.slice(i);
   }
   return u.slice(1);
  }
  function te(e) {
   var t = "";
   var n, r;
   var i;
   for (var s = 0; s < e.length; s++) {
    n = e.charCodeAt(s);
    if (n >= 55296 && n <= 56319) {
     r = e.charCodeAt(s + 1);
     if (r >= 56320 && r <= 57343) {
      t += I((n - 55296) * 1024 + r - 56320 + 65536);
      s++;
      continue;
     }
    }
    i = N[n];
    t += !i && q(n) ? e[s] : i || I(n);
   }
   return t;
  }
  function ne(e, t, n) {
   var r = "", i = e.tag, s, a;
   for (s = 0, a = n.length; s < a; s += 1) {
    if (oe(e, t, n[s], false, false)) {
     if (s !== 0) r += "," + (!e.condenseFlow ? " " : "");
     r += e.dump;
    }
   }
   e.tag = i;
   e.dump = "[" + r + "]";
  }
  function re(e, t, n, r) {
   var i = "", s = e.tag, a, o;
   for (a = 0, o = n.length; a < o; a += 1) {
    if (oe(e, t + 1, n[a], true, true)) {
     if (!r || a !== 0) {
      i += B(e, t);
     }
     if (e.dump && l === e.dump.charCodeAt(0)) {
      i += "-";
     } else {
      i += "- ";
     }
     i += e.dump;
    }
   }
   e.tag = s;
   e.dump = i || "[]";
  }
  function ie(e, t, n) {
   var r = "", i = e.tag, s = Object.keys(n), a, o, u, c, l;
   for (a = 0, o = s.length; a < o; a += 1) {
    l = e.condenseFlow ? '"' : "";
    if (a !== 0) l += ", ";
    u = s[a];
    c = n[u];
    if (!oe(e, t, u, false, false)) {
     continue;
    }
    if (e.dump.length > 1024) l += "? ";
    l += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " ");
    if (!oe(e, t, c, false, false)) {
     continue;
    }
    l += e.dump;
    r += l;
   }
   e.tag = i;
   e.dump = "{" + r + "}";
  }
  function se(e, t, n, r) {
   var s = "", a = e.tag, o = Object.keys(n), u, c, h, f, p, d;
   if (e.sortKeys === true) {
    o.sort();
   } else if (typeof e.sortKeys === "function") {
    o.sort(e.sortKeys);
   } else if (e.sortKeys) {
    throw new i("sortKeys must be a boolean or a function");
   }
   for (u = 0, c = o.length; u < c; u += 1) {
    d = "";
    if (!r || u !== 0) {
     d += B(e, t);
    }
    h = o[u];
    f = n[h];
    if (!oe(e, t + 1, h, true, true, true)) {
     continue;
    }
    p = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024;
    if (p) {
     if (e.dump && l === e.dump.charCodeAt(0)) {
      d += "?";
     } else {
      d += "? ";
     }
    }
    d += e.dump;
    if (p) {
     d += B(e, t);
    }
    if (!oe(e, t + 1, f, true, p)) {
     continue;
    }
    if (e.dump && l === e.dump.charCodeAt(0)) {
     d += ":";
    } else {
     d += ": ";
    }
    d += e.dump;
    s += d;
   }
   e.tag = a;
   e.dump = s || "{}";
  }
  function ae(e, t, n) {
   var r, s, a, c, l, h;
   s = n ? e.explicitTypes : e.implicitTypes;
   for (a = 0, c = s.length; a < c; a += 1) {
    l = s[a];
    if ((l.instanceOf || l.predicate) && (!l.instanceOf || typeof t === "object" && t instanceof l.instanceOf) && (!l.predicate || l.predicate(t))) {
     e.tag = n ? l.tag : "?";
     if (l.represent) {
      h = e.styleMap[l.tag] || l.defaultStyle;
      if (o.call(l.represent) === "[object Function]") {
       r = l.represent(t, h);
      } else if (u.call(l.represent, h)) {
       r = l.represent[h](t, h);
      } else {
       throw new i("!<" + l.tag + '> tag resolver accepts not "' + h + '" style');
      }
      e.dump = r;
     }
     return true;
    }
   }
   return false;
  }
  function oe(e, t, n, r, s, a) {
   e.tag = null;
   e.dump = n;
   if (!ae(e, n, false)) {
    ae(e, n, true);
   }
   var u = o.call(e.dump);
   if (r) {
    r = e.flowLevel < 0 || e.flowLevel > t;
   }
   var c = u === "[object Object]" || u === "[object Array]", l, h;
   if (c) {
    l = e.duplicates.indexOf(n);
    h = l !== -1;
   }
   if (e.tag !== null && e.tag !== "?" || h || e.indent !== 2 && t > 0) {
    s = false;
   }
   if (h && e.usedDuplicates[l]) {
    e.dump = "*ref_" + l;
   } else {
    if (c && h && !e.usedDuplicates[l]) {
     e.usedDuplicates[l] = true;
    }
    if (u === "[object Object]") {
     if (r && Object.keys(e.dump).length !== 0) {
      se(e, t, e.dump, s);
      if (h) {
       e.dump = "&ref_" + l + e.dump;
      }
     } else {
      ie(e, t, e.dump);
      if (h) {
       e.dump = "&ref_" + l + " " + e.dump;
      }
     }
    } else if (u === "[object Array]") {
     if (r && e.dump.length !== 0) {
      re(e, t, e.dump, s);
      if (h) {
       e.dump = "&ref_" + l + e.dump;
      }
     } else {
      ne(e, t, e.dump);
      if (h) {
       e.dump = "&ref_" + l + " " + e.dump;
      }
     }
    } else if (u === "[object String]") {
     if (e.tag !== "?") {
      G(e, e.dump, t, a);
     }
    } else {
     if (e.skipInvalid) return false;
     throw new i("unacceptable kind of an object to dump " + u);
    }
    if (e.tag !== null && e.tag !== "?") {
     e.dump = "!<" + e.tag + "> " + e.dump;
    }
   }
   return true;
  }
  function ue(e, t) {
   var n = [], r = [], i, s;
   ce(e, n, r);
   for (i = 0, s = r.length; i < s; i += 1) {
    t.duplicates.push(n[r[i]]);
   }
   t.usedDuplicates = new Array(s);
  }
  function ce(e, t, n) {
   var r, i, s;
   if (e !== null && typeof e === "object") {
    i = t.indexOf(e);
    if (i !== -1) {
     if (n.indexOf(i) === -1) {
      n.push(i);
     }
    } else {
     t.push(e);
     if (Array.isArray(e)) {
      for (i = 0, s = e.length; i < s; i += 1) {
       ce(e[i], t, n);
      }
     } else {
      r = Object.keys(e);
      for (i = 0, s = r.length; i < s; i += 1) {
       ce(e[r[i]], t, n);
      }
     }
    }
   }
  }
  function le(e, t) {
   t = t || {};
   var n = new M(t);
   if (!n.noRefs) ue(e, n);
   if (oe(n, 0, e, true, true)) return n.dump + "\n";
   return "";
  }
  function he(e, t) {
   return le(e, r.extend({
    schema: a
   }, t));
  }
  e.exports.dump = le;
  e.exports.safeDump = he;
 },
 QSeV: function(e, t, n) {
  var r = n("Qs2e");
  var i = n("ugmf");
  var s = n("bzos");
  var a = n("rjk/");
  var o = n("jK02").inherits;
  var u = n("te/U")("http-proxy-agent");
  e.exports = c;
  function c(e) {
   if (!(this instanceof c)) return new c(e);
   if ("string" == typeof e) e = s.parse(e);
   if (!e) throw new Error("an HTTP(S) proxy server `host` and `port` must be specified!");
   u("creating new HttpProxyAgent instance: %o", e);
   a.call(this, e);
   var t = Object.assign({}, e);
   this.secureProxy = t.protocol ? /^https:?$/i.test(t.protocol) : false;
   t.host = t.hostname || t.host;
   t.port = +t.port || (this.secureProxy ? 443 : 80);
   if (t.host && t.path) {
    delete t.path;
    delete t.pathname;
   }
   this.proxy = t;
  }
  o(c, a);
  c.prototype.callback = function e(t, n, a) {
   var o = this.proxy;
   var c = s.parse(t.path);
   if (null == c.protocol) c.protocol = "http:";
   if (null == c.hostname) c.hostname = n.hostname || n.host;
   if (null == c.port) c.port = n.port;
   if (c.port == 80) {
    delete c.port;
   }
   var l = s.format(c);
   t.path = l;
   if (o.auth) {
    t.setHeader("Proxy-Authorization", "Basic " + Buffer.from(o.auth).toString("base64"));
   }
   var h;
   if (this.secureProxy) {
    h = i.connect(o);
   } else {
    h = r.connect(o);
   }
   if (t._header) {
    u("regenerating stored HTTP header string for request");
    t._header = null;
    t._implicitHeader();
    if (t.output && t.output.length > 0) {
     u("patching connection write() output buffer with updated header");
     var f = t.output[0];
     var p = f.indexOf("\r\n\r\n") + 4;
     t.output[0] = t._header + f.substring(p);
     u("output buffer: %o", t.output);
    }
   }
   a(null, h);
  };
 },
 QduZ: function(e, t) {
  e.exports = require("child_process");
 },
 Qs2e: function(e, t) {
  e.exports = require("net");
 },
 RYDB: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("ICfX");
  class i {
   constructor(e, t) {
    this.jsonSchemaService = e;
    this.promise = t;
    this.validationEnabled = true;
   }
   configure(e) {
    if (e) {
     this.validationEnabled = e.validate;
    }
   }
   doValidation(e, t) {
    if (!this.validationEnabled) {
     return this.promise.resolve([]);
    }
    return this.jsonSchemaService.getSchemaForResource(e.uri).then(function(n) {
     var i = [];
     var s = {};
     if (n) {
      for (let e in t.documents) {
       let r = t.documents[e];
       let i = r.getValidationProblems(n.schema);
       for (let e in i) {
        let t = i[e];
        r.errors.push({
         location: {
          start: t.location.start,
          end: t.location.end
         },
         message: t.message
        });
       }
      }
     }
     if (n && n.errors.length > 0) {
      for (let e of n.errors) {
       i.push({
        severity: r.DiagnosticSeverity.Error,
        range: {
         start: {
          line: 0,
          character: 0
         },
         end: {
          line: 0,
          character: 1
         }
        },
        message: e
       });
      }
     }
     for (let n in t.documents) {
      let a = t.documents[n];
      a.errors.concat(a.warnings).forEach(function(t, n) {
       var o = t.location.start + " " + t.location.end + " " + t.message;
       if (!s[o]) {
        s[o] = true;
        var u = {
         start: e.positionAt(t.location.start),
         end: e.positionAt(t.location.end)
        };
        i.push({
         severity: n >= a.errors.length ? r.DiagnosticSeverity.Warning : r.DiagnosticSeverity.Error,
         range: u,
         message: t.message
        });
       }
      });
     }
     return i;
    });
   }
  }
  t.YAMLValidation = i;
 },
 ReB3: function(e, t, n) {
  "use strict";
  var r = n("7Nz6");
  e.exports = new r.Schema({
   explicit: [ n("d2qJ"), n("eZ/G"), n("IjCO") ]
  });
 },
 SH1Y: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("rWaT");
  var i;
  (function(e) {
   e.type = new r.RequestType0("workspace/workspaceFolders");
  })(i = t.WorkspaceFoldersRequest || (t.WorkspaceFoldersRequest = {}));
  var s;
  (function(e) {
   e.type = new r.NotificationType("workspace/didChangeWorkspaceFolders");
  })(s = t.DidChangeWorkspaceFoldersNotification || (t.DidChangeWorkspaceFoldersNotification = {}));
 },
 SQQq: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("rWaT");
  var i;
  (function(e) {
   e.type = new r.RequestType("textDocument/implementation");
  })(i = t.ImplementationRequest || (t.ImplementationRequest = {}));
 },
 SmLj: function(e, t, n) {
  "use strict";
  var r = n("IYmx");
  var i = n("gax4");
  var s = new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?" + "|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?" + "|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*" + "|[-+]?\\.(?:inf|Inf|INF)" + "|\\.(?:nan|NaN|NAN))$");
  function a(e) {
   if (e === null) return false;
   if (!s.test(e) || e[e.length - 1] === "_") {
    return false;
   }
   return true;
  }
  function o(e) {
   var t, n, r, i;
   t = e.replace(/_/g, "").toLowerCase();
   n = t[0] === "-" ? -1 : 1;
   i = [];
   if ("+-".indexOf(t[0]) >= 0) {
    t = t.slice(1);
   }
   if (t === ".inf") {
    return n === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
   } else if (t === ".nan") {
    return NaN;
   } else if (t.indexOf(":") >= 0) {
    t.split(":").forEach(function(e) {
     i.unshift(parseFloat(e, 10));
    });
    t = 0;
    r = 1;
    i.forEach(function(e) {
     t += e * r;
     r *= 60;
    });
    return n * t;
   }
   return n * parseFloat(t, 10);
  }
  var u = /^[-+]?[0-9]+e/;
  function c(e, t) {
   var n;
   if (isNaN(e)) {
    switch (t) {
    case "lowercase":
     return ".nan";

    case "uppercase":
     return ".NAN";

    case "camelcase":
     return ".NaN";
    }
   } else if (Number.POSITIVE_INFINITY === e) {
    switch (t) {
    case "lowercase":
     return ".inf";

    case "uppercase":
     return ".INF";

    case "camelcase":
     return ".Inf";
    }
   } else if (Number.NEGATIVE_INFINITY === e) {
    switch (t) {
    case "lowercase":
     return "-.inf";

    case "uppercase":
     return "-.INF";

    case "camelcase":
     return "-.Inf";
    }
   } else if (r.isNegativeZero(e)) {
    return "-0.0";
   }
   n = e.toString(10);
   return u.test(n) ? n.replace("e", ".e") : n;
  }
  function l(e) {
   return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || r.isNegativeZero(e));
  }
  e.exports = new i("tag:yaml.org,2002:float", {
   kind: "scalar",
   resolve: a,
   construct: o,
   predicate: l,
   represent: c,
   defaultStyle: "lowercase"
  });
 },
 U3oL: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("3wk8");
  const i = n("jle/");
  const s = n("ICfX");
  function a(e, t, n) {
   const a = e.getText();
   let o = r.Schema.create(n.map(e => {
    const t = e.split(" ");
    return new r.Type(t[0], {
     kind: t[1] || "scalar"
    });
   }));
   n.map(e => {
    const t = e.split(" ");
    o.compiledTypeMap[t[0]] = new r.Type(t[0], {
     kind: t[1] || "scalar"
    });
   });
   let u = {
    schema: o
   };
   const c = [ e ];
   r.loadAll(a, c, u);
   const l = {
    indent: t.tabSize,
    noCompatMode: true
   };
   let h;
   if (c.length == 1) {
    const e = c[0];
    h = r.safeDump(e, l);
   } else {
    const e = c.map(e => r.safeDump(e, l));
    h = "%YAML 1.2" + i.EOL + "---" + i.EOL + e.join("..." + i.EOL + "---" + i.EOL) + "..." + i.EOL;
   }
   return [ s.TextEdit.replace(s.Range.create(s.Position.create(0, 0), e.positionAt(a.length)), h) ];
  }
  t.format = a;
 },
 UNVE: function(e, t) {
  e.exports = require("tty");
 },
 UQiU: function(e, t, n) {
  "use strict";
  var r = n("cYFF");
  var i = n("j4xC");
  var s = Object.prototype.toString;
  function a(e) {
   if (null === e) {
    return true;
   }
   if (e.kind != i.Kind.SEQ) {
    return false;
   }
   var t, n, r, a, o, u = e.items;
   for (t = 0, n = u.length; t < n; t += 1) {
    r = u[t];
    if ("[object Object]" !== s.call(r)) {
     return false;
    }
    if (!Array.isArray(r.mappings)) {
     return false;
    }
    if (1 !== r.mappings.length) {
     return false;
    }
   }
   return true;
  }
  function o(e) {
   if (null === e || !Array.isArray(e.items)) {
    return [];
   }
   var t, n, r, s, a = e.items;
   s = i.newItems();
   s.parent = e.parent;
   s.startPosition = e.startPosition;
   s.endPosition = e.endPosition;
   for (t = 0, n = a.length; t < n; t += 1) {
    var o = a[t];
    var u = o.mappings[0];
    var c = i.newItems();
    c.parent = s;
    c.startPosition = u.key.startPosition;
    c.endPosition = u.value.startPosition;
    u.key.parent = c;
    u.value.parent = c;
    c.items = [ u.key, u.value ];
    s.items.push(c);
   }
   return s;
  }
  e.exports = new r.Type("tag:yaml.org,2002:pairs", {
   kind: "sequence",
   resolve: a,
   construct: o
  });
 },
 Undm: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = Object.prototype.toString;
  function i(e) {
   return e === true || e === false;
  }
  t.boolean = i;
  function s(e) {
   return r.call(e) === "[object String]";
  }
  t.string = s;
  function a(e) {
   return r.call(e) === "[object Number]";
  }
  t.number = a;
  function o(e) {
   return r.call(e) === "[object Error]";
  }
  t.error = o;
  function u(e) {
   return r.call(e) === "[object Function]";
  }
  t.func = u;
  function c(e) {
   return Array.isArray(e);
  }
  t.array = c;
  function l(e) {
   return c(e) && e.every(function(e) {
    return s(e);
   });
  }
  t.stringArray = l;
 },
 UsVv: function(e, t, n) {
  "use strict";
  var r = n("gax4");
  e.exports = new r("tag:yaml.org,2002:map", {
   kind: "mapping",
   construct: function(e) {
    return e !== null ? e : {};
   }
  });
 },
 VRch: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("+VcB");
  var i = n("Undm");
  var s;
  (function(e) {
   e.None = Object.freeze({
    isCancellationRequested: false,
    onCancellationRequested: r.Event.None
   });
   e.Cancelled = Object.freeze({
    isCancellationRequested: true,
    onCancellationRequested: r.Event.None
   });
   function t(t) {
    var n = t;
    return n && (n === e.None || n === e.Cancelled || i.boolean(n.isCancellationRequested) && !!n.onCancellationRequested);
   }
   e.is = t;
  })(s = t.CancellationToken || (t.CancellationToken = {}));
  var a = Object.freeze(function(e, t) {
   var n = setTimeout(e.bind(t), 0);
   return {
    dispose: function() {
     clearTimeout(n);
    }
   };
  });
  var o = function() {
   function e() {
    this._isCancelled = false;
   }
   e.prototype.cancel = function() {
    if (!this._isCancelled) {
     this._isCancelled = true;
     if (this._emitter) {
      this._emitter.fire(undefined);
      this._emitter = undefined;
     }
    }
   };
   Object.defineProperty(e.prototype, "isCancellationRequested", {
    get: function() {
     return this._isCancelled;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "onCancellationRequested", {
    get: function() {
     if (this._isCancelled) {
      return a;
     }
     if (!this._emitter) {
      this._emitter = new r.Emitter();
     }
     return this._emitter.event;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var u = function() {
   function e() {}
   Object.defineProperty(e.prototype, "token", {
    get: function() {
     if (!this._token) {
      this._token = new o();
     }
     return this._token;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.cancel = function() {
    if (!this._token) {
     this._token = s.Cancelled;
    } else {
     this._token.cancel();
    }
   };
   e.prototype.dispose = function() {
    this.cancel();
   };
   return e;
  }();
  t.CancellationTokenSource = u;
 },
 VhsX: function(e, t, n) {
  "use strict";
  "use strict";
  var r = n("cYFF");
  function i(e) {
   if (null === e) {
    return false;
   }
   var t = e.length;
   return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
  }
  function s(e) {
   return e === "true" || e === "True" || e === "TRUE";
  }
  function a(e) {
   return "[object Boolean]" === Object.prototype.toString.call(e);
  }
  e.exports = new r.Type("tag:yaml.org,2002:bool", {
   kind: "scalar",
   resolve: i,
   construct: s,
   predicate: a,
   represent: {
    lowercase: function(e) {
     return e ? "true" : "false";
    },
    uppercase: function(e) {
     return e ? "TRUE" : "FALSE";
    },
    camelcase: function(e) {
     return e ? "True" : "False";
    }
   },
   defaultStyle: "lowercase"
  });
 },
 X5QW: function(e, t, n) {
  "use strict";
  e.exports = ((e, t) => {
   t = t || process.argv;
   const n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--";
   const r = t.indexOf(n + e);
   const i = t.indexOf("--");
   return r !== -1 && (i === -1 ? true : r < i);
  });
 },
 YU9W: function(e, t, n) {
  "use strict";
  var r = n("IYmx");
  var i = n("wGX6");
  var s = n("gax4");
  function a(e, t, n) {
   var r = [];
   e.include.forEach(function(e) {
    n = a(e, t, n);
   });
   e[t].forEach(function(e) {
    n.forEach(function(t, n) {
     if (t.tag === e.tag && t.kind === e.kind) {
      r.push(n);
     }
    });
    n.push(e);
   });
   return n.filter(function(e, t) {
    return r.indexOf(t) === -1;
   });
  }
  function o() {
   var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {}
   }, t, n;
   function r(t) {
    e[t.kind][t.tag] = e["fallback"][t.tag] = t;
   }
   for (t = 0, n = arguments.length; t < n; t += 1) {
    arguments[t].forEach(r);
   }
   return e;
  }
  function u(e) {
   this.include = e.include || [];
   this.implicit = e.implicit || [];
   this.explicit = e.explicit || [];
   this.implicit.forEach(function(e) {
    if (e.loadKind && e.loadKind !== "scalar") {
     throw new i("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }
   });
   this.compiledImplicit = a(this, "implicit", []);
   this.compiledExplicit = a(this, "explicit", []);
   this.compiledTypeMap = o(this.compiledImplicit, this.compiledExplicit);
  }
  u.DEFAULT = null;
  u.create = function e() {
   var t, n;
   switch (arguments.length) {
   case 1:
    t = u.DEFAULT;
    n = arguments[0];
    break;

   case 2:
    t = arguments[0];
    n = arguments[1];
    break;

   default:
    throw new i("Wrong number of arguments for Schema.create function");
   }
   t = r.toArray(t);
   n = r.toArray(n);
   if (!t.every(function(e) {
    return e instanceof u;
   })) {
    throw new i("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
   }
   if (!n.every(function(e) {
    return e instanceof s;
   })) {
    throw new i("Specified list of YAML types (or a single Type object) contains a non-Type object.");
   }
   return new u({
    include: t,
    explicit: n
   });
  };
  e.exports = u;
 },
 Yvw8: function(e, t, n) {
  "use strict";
  var r = n("IYmx");
  function i(e, t, n, r, i) {
   this.name = e;
   this.buffer = t;
   this.position = n;
   this.line = r;
   this.column = i;
  }
  i.prototype.getSnippet = function e(t, n) {
   var i, s, a, o, u;
   if (!this.buffer) return null;
   t = t || 4;
   n = n || 75;
   i = "";
   s = this.position;
   while (s > 0 && "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(s - 1)) === -1) {
    s -= 1;
    if (this.position - s > n / 2 - 1) {
     i = " ... ";
     s += 5;
     break;
    }
   }
   a = "";
   o = this.position;
   while (o < this.buffer.length && "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(o)) === -1) {
    o += 1;
    if (o - this.position > n / 2 - 1) {
     a = " ... ";
     o -= 5;
     break;
    }
   }
   u = this.buffer.slice(s, o);
   return r.repeat(" ", t) + i + u + a + "\n" + r.repeat(" ", t + this.position - s + i.length) + "^";
  };
  i.prototype.toString = function e(t) {
   var n, r = "";
   if (this.name) {
    r += 'in "' + this.name + '" ';
   }
   r += "at line " + (this.line + 1) + ", column " + (this.column + 1);
   if (!t) {
    n = this.getSnippet();
    if (n) {
     r += ":\n" + n;
    }
   }
   return r;
  };
  e.exports = i;
 },
 YzGg: function(e, t, n) {
  "use strict";
  var r = n("gax4");
  var i = Object.prototype.hasOwnProperty;
  var s = Object.prototype.toString;
  function a(e) {
   if (e === null) return true;
   var t = [], n, r, a, o, u, c = e;
   for (n = 0, r = c.length; n < r; n += 1) {
    a = c[n];
    u = false;
    if (s.call(a) !== "[object Object]") return false;
    for (o in a) {
     if (i.call(a, o)) {
      if (!u) u = true; else return false;
     }
    }
    if (!u) return false;
    if (t.indexOf(o) === -1) t.push(o); else return false;
   }
   return true;
  }
  function o(e) {
   return e !== null ? e : [];
  }
  e.exports = new r("tag:yaml.org,2002:omap", {
   kind: "sequence",
   resolve: a,
   construct: o
  });
 },
 Z6Ss: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("/wVd");
  const i = n("EoxW");
  const s = i.loadMessageBundle();
  var a;
  (function(e) {
   e[e["Undefined"] = 0] = "Undefined";
   e[e["EnumValueMismatch"] = 1] = "EnumValueMismatch";
   e[e["CommentsNotAllowed"] = 2] = "CommentsNotAllowed";
  })(a = t.ErrorCode || (t.ErrorCode = {}));
  var o;
  (function(e) {
   e[e["Error"] = 0] = "Error";
   e[e["Warning"] = 1] = "Warning";
  })(o = t.ProblemSeverity || (t.ProblemSeverity = {}));
  class u {
   constructor(e, t, n, r, i) {
    this.type = t;
    this.location = n;
    this.start = r;
    this.end = i;
    this.parent = e;
    this.parserSettings = {
     isKubernetes: false
    };
   }
   setParserSettings(e) {
    this.parserSettings = e;
   }
   getPath() {
    let e = this.parent ? this.parent.getPath() : [];
    if (this.location !== null) {
     e.push(this.location);
    }
    return e;
   }
   getChildNodes() {
    return [];
   }
   getLastChild() {
    return null;
   }
   getValue() {
    return;
   }
   contains(e, t = false) {
    return e >= this.start && e < this.end || t && e === this.end;
   }
   toString() {
    return "type: " + this.type + " (" + this.start + "/" + this.end + ")" + (this.parent ? " parent: {" + this.parent.toString() + "}" : "");
   }
   visit(e) {
    return e(this);
   }
   getNodeFromOffset(e) {
    let t = n => {
     if (e >= n.start && e < n.end) {
      let r = n.getChildNodes();
      for (let n = 0; n < r.length && r[n].start <= e; n++) {
       let e = t(r[n]);
       if (e) {
        return e;
       }
      }
      return n;
     }
     return null;
    };
    return t(this);
   }
   getNodeCollectorCount(e) {
    let t = [];
    let n = e => {
     let r = e.getChildNodes();
     for (let e = 0; e < r.length; e++) {
      let i = n(r[e]);
      if (i && i.type === "property") {
       t.push(i);
      }
     }
     return e;
    };
    let r = n(this);
    return t.length;
   }
   getNodeFromOffsetEndInclusive(e) {
    let t = [];
    let n = r => {
     if (e >= r.start && e <= r.end) {
      let i = r.getChildNodes();
      for (let r = 0; r < i.length && i[r].start <= e; r++) {
       let e = n(i[r]);
       if (e) {
        t.push(e);
       }
      }
      return r;
     }
     return null;
    };
    let r = n(this);
    let i = Number.MAX_VALUE;
    let s = null;
    for (let n in t) {
     let r = t[n];
     let a = r.end - e + (e - r.start);
     if (a < i) {
      s = r;
      i = a;
     }
    }
    return s || r;
   }
   validate(e, t, n) {
    if (!n.include(this)) {
     return;
    }
    if (Array.isArray(e.type)) {
     if (e.type.indexOf(this.type) === -1) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.end
       },
       severity: o.Warning,
       message: e.errorMessage || s("typeArrayMismatchWarning", "Incorrect type. Expected one of {0}.", e.type.join(", "))
      });
     }
    } else if (e.type) {
     if (this.type !== e.type) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.end
       },
       severity: o.Warning,
       message: e.errorMessage || s("typeMismatchWarning", 'Incorrect type. Expected "{0}".', e.type)
      });
     }
    }
    if (Array.isArray(e.allOf)) {
     e.allOf.forEach(e => {
      this.validate(e, t, n);
     });
    }
    if (e.not) {
     let r = new x();
     let i = n.newSub();
     this.validate(e.not, r, i);
     if (!r.hasProblems()) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.end
       },
       severity: o.Warning,
       message: s("notSchemaWarning", "Matches a schema that is not allowed.")
      });
     }
     i.schemas.forEach(e => {
      e.inverted = !e.inverted;
      n.add(e);
     });
    }
    let i = (e, r) => {
     let i = [];
     let a = null;
     e.forEach(e => {
      let t = new x();
      let s = n.newSub();
      this.validate(e, t, s);
      if (!t.hasProblems()) {
       i.push(e);
      }
      if (!a) {
       a = {
        schema: e,
        validationResult: t,
        matchingSchemas: s
       };
      } else if (this.parserSettings.isKubernetes) {
       a = D(t, a, e, s);
      } else {
       a = E(r, t, a, e, s);
      }
     });
     if (i.length > 1 && r && !this.parserSettings.isKubernetes) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.start + 1
       },
       severity: o.Warning,
       message: s("oneOfWarning", "Matches multiple schemas when only one must validate.")
      });
     }
     if (a !== null) {
      t.merge(a.validationResult);
      t.propertiesMatches += a.validationResult.propertiesMatches;
      t.propertiesValueMatches += a.validationResult.propertiesValueMatches;
      n.merge(a.matchingSchemas);
     }
     return i.length;
    };
    if (Array.isArray(e.anyOf)) {
     i(e.anyOf, false);
    }
    if (Array.isArray(e.oneOf)) {
     i(e.oneOf, true);
    }
    if (Array.isArray(e.enum)) {
     let n = this.getValue();
     let i = false;
     for (let t of e.enum) {
      if (r.equals(n, t)) {
       i = true;
       break;
      }
     }
     t.enumValues = e.enum;
     t.enumValueMatch = i;
     if (!i) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.end
       },
       severity: o.Warning,
       code: a.EnumValueMismatch,
       message: e.errorMessage || s("enumWarning", "Value is not accepted. Valid values: {0}.", e.enum.map(e => JSON.stringify(e)).join(", "))
      });
     }
    }
    if (e.deprecationMessage && this.parent) {
     t.problems.push({
      location: {
       start: this.parent.start,
       end: this.parent.end
      },
      severity: o.Warning,
      message: e.deprecationMessage
     });
    }
    n.add({
     node: this,
     schema: e
    });
   }
  }
  t.ASTNode = u;
  class c extends u {
   constructor(e, t, n, r) {
    super(e, "null", t, n, r);
   }
   getValue() {
    return null;
   }
  }
  t.NullASTNode = c;
  class l extends u {
   constructor(e, t, n, r, i) {
    super(e, "boolean", t, r, i);
    this.value = n;
   }
   getValue() {
    return this.value;
   }
  }
  t.BooleanASTNode = l;
  class h extends u {
   constructor(e, t, n, r) {
    super(e, "array", t, n, r);
    this.items = [];
   }
   getChildNodes() {
    return this.items;
   }
   getLastChild() {
    return this.items[this.items.length - 1];
   }
   getValue() {
    return this.items.map(e => e.getValue());
   }
   addItem(e) {
    if (e) {
     this.items.push(e);
     return true;
    }
    return false;
   }
   visit(e) {
    let t = e(this);
    for (let n = 0; n < this.items.length && t; n++) {
     t = this.items[n].visit(e);
    }
    return t;
   }
   validate(e, t, n) {
    if (!n.include(this)) {
     return;
    }
    super.validate(e, t, n);
    if (Array.isArray(e.items)) {
     let r = e.items;
     r.forEach((e, i) => {
      let s = new x();
      let a = this.items[i];
      if (a) {
       a.validate(e, s, n);
       t.mergePropertyMatch(s);
      } else if (this.items.length >= r.length) {
       t.propertiesValueMatches++;
      }
     });
     if (this.items.length > r.length) {
      if (typeof e.additionalItems === "object") {
       for (let i = r.length; i < this.items.length; i++) {
        let r = new x();
        this.items[i].validate(e.additionalItems, r, n);
        t.mergePropertyMatch(r);
       }
      } else if (e.additionalItems === false) {
       t.problems.push({
        location: {
         start: this.start,
         end: this.end
        },
        severity: o.Warning,
        message: s("additionalItemsWarning", "Array has too many items according to schema. Expected {0} or fewer.", r.length)
       });
      }
     }
    } else if (e.items) {
     this.items.forEach(r => {
      let i = new x();
      r.validate(e.items, i, n);
      t.mergePropertyMatch(i);
     });
    }
    if (e.minItems && this.items.length < e.minItems) {
     t.problems.push({
      location: {
       start: this.start,
       end: this.end
      },
      severity: o.Warning,
      message: s("minItemsWarning", "Array has too few items. Expected {0} or more.", e.minItems)
     });
    }
    if (e.maxItems && this.items.length > e.maxItems) {
     t.problems.push({
      location: {
       start: this.start,
       end: this.end
      },
      severity: o.Warning,
      message: s("maxItemsWarning", "Array has too many items. Expected {0} or fewer.", e.minItems)
     });
    }
    if (e.uniqueItems === true) {
     let e = this.items.map(e => {
      return e.getValue();
     });
     let n = e.some((t, n) => {
      return n !== e.lastIndexOf(t);
     });
     if (n) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.end
       },
       severity: o.Warning,
       message: s("uniqueItemsWarning", "Array has duplicate items.")
      });
     }
    }
   }
  }
  t.ArrayASTNode = h;
  class f extends u {
   constructor(e, t, n, r) {
    super(e, "number", t, n, r);
    this.isInteger = true;
    this.value = Number.NaN;
   }
   getValue() {
    return this.value;
   }
   validate(e, t, n) {
    if (!n.include(this)) {
     return;
    }
    let r = false;
    if (e.type === "integer" || Array.isArray(e.type) && e.type.indexOf("integer") !== -1) {
     r = true;
    }
    if (r && this.isInteger === true) {
     this.type = "integer";
    }
    super.validate(e, t, n);
    this.type = "number";
    let i = this.getValue();
    if (typeof e.multipleOf === "number") {
     if (i % e.multipleOf !== 0) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.end
       },
       severity: o.Warning,
       message: s("multipleOfWarning", "Value is not divisible by {0}.", e.multipleOf)
      });
     }
    }
    if (typeof e.minimum === "number") {
     if (e.exclusiveMinimum && i <= e.minimum) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.end
       },
       severity: o.Warning,
       message: s("exclusiveMinimumWarning", "Value is below the exclusive minimum of {0}.", e.minimum)
      });
     }
     if (!e.exclusiveMinimum && i < e.minimum) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.end
       },
       severity: o.Warning,
       message: s("minimumWarning", "Value is below the minimum of {0}.", e.minimum)
      });
     }
    }
    if (typeof e.maximum === "number") {
     if (e.exclusiveMaximum && i >= e.maximum) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.end
       },
       severity: o.Warning,
       message: s("exclusiveMaximumWarning", "Value is above the exclusive maximum of {0}.", e.maximum)
      });
     }
     if (!e.exclusiveMaximum && i > e.maximum) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.end
       },
       severity: o.Warning,
       message: s("maximumWarning", "Value is above the maximum of {0}.", e.maximum)
      });
     }
    }
   }
  }
  t.NumberASTNode = f;
  class p extends u {
   constructor(e, t, n, r, i) {
    super(e, "string", t, r, i);
    this.isKey = n;
    this.value = "";
   }
   getValue() {
    return this.value;
   }
   validate(e, t, n) {
    if (!n.include(this)) {
     return;
    }
    super.validate(e, t, n);
    if (e.minLength && this.value.length < e.minLength) {
     t.problems.push({
      location: {
       start: this.start,
       end: this.end
      },
      severity: o.Warning,
      message: s("minLengthWarning", "String is shorter than the minimum length of {0}.", e.minLength)
     });
    }
    if (e.maxLength && this.value.length > e.maxLength) {
     t.problems.push({
      location: {
       start: this.start,
       end: this.end
      },
      severity: o.Warning,
      message: s("maxLengthWarning", "String is longer than the maximum length of {0}.", e.maxLength)
     });
    }
    if (e.pattern) {
     let n = new RegExp(e.pattern);
     if (!n.test(this.value)) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.end
       },
       severity: o.Warning,
       message: e.patternErrorMessage || e.errorMessage || s("patternWarning", 'String does not match the pattern of "{0}".', e.pattern)
      });
     }
    }
   }
  }
  t.StringASTNode = p;
  class d extends u {
   constructor(e, t) {
    super(e, "property", null, t.start);
    this.key = t;
    t.parent = this;
    t.location = t.value;
    this.colonOffset = -1;
   }
   getChildNodes() {
    return this.value ? [ this.key, this.value ] : [ this.key ];
   }
   getLastChild() {
    return this.value;
   }
   setValue(e) {
    this.value = e;
    return e !== null;
   }
   visit(e) {
    return e(this) && this.key.visit(e) && this.value && this.value.visit(e);
   }
   validate(e, t, n) {
    if (!n.include(this)) {
     return;
    }
    if (this.value) {
     this.value.validate(e, t, n);
    }
   }
  }
  t.PropertyASTNode = d;
  class m extends u {
   constructor(e, t, n, r) {
    super(e, "object", t, n, r);
    this.properties = [];
   }
   getChildNodes() {
    return this.properties;
   }
   getLastChild() {
    return this.properties[this.properties.length - 1];
   }
   addProperty(e) {
    if (!e) {
     return false;
    }
    this.properties.push(e);
    return true;
   }
   getFirstProperty(e) {
    for (let t = 0; t < this.properties.length; t++) {
     if (this.properties[t].key.value === e) {
      return this.properties[t];
     }
    }
    return null;
   }
   getKeyList() {
    return this.properties.map(e => e.key.getValue());
   }
   getValue() {
    let e = Object.create(null);
    this.properties.forEach(t => {
     let n = t.value && t.value.getValue();
     if (typeof n !== "undefined") {
      e[t.key.getValue()] = n;
     }
    });
    return e;
   }
   visit(e) {
    let t = e(this);
    for (let n = 0; n < this.properties.length && t; n++) {
     t = this.properties[n].visit(e);
    }
    return t;
   }
   validate(e, t, n) {
    if (!n.include(this)) {
     return;
    }
    super.validate(e, t, n);
    let r = Object.create(null);
    let i = [];
    this.properties.forEach(e => {
     let t = e.key.value;
     if (t === "<<" && e.value) {
      switch (e.value.type) {
      case "object":
       {
        e.value["properties"].forEach(e => {
         let t = e.key.value;
         r[t] = e.value;
         i.push(t);
        });
        break;
       }

      case "array":
       {
        e.value["items"].forEach(e => {
         e["properties"].forEach(e => {
          let t = e.key.value;
          r[t] = e.value;
          i.push(t);
         });
        });
        break;
       }

      default:
       {
        break;
       }
      }
     } else {
      r[t] = e.value;
      i.push(t);
     }
    });
    if (Array.isArray(e.required)) {
     e.required.forEach(e => {
      if (!r[e]) {
       let n = this.parent && this.parent && this.parent.key;
       let r = n ? {
        start: n.start,
        end: n.end
       } : {
        start: this.start,
        end: this.start + 1
       };
       t.problems.push({
        location: r,
        severity: o.Warning,
        message: s("MissingRequiredPropWarning", 'Missing property "{0}".', e)
       });
      }
     });
    }
    let a = e => {
     let t = i.indexOf(e);
     while (t >= 0) {
      i.splice(t, 1);
      t = i.indexOf(e);
     }
    };
    if (e.properties) {
     Object.keys(e.properties).forEach(i => {
      a(i);
      let s = e.properties[i];
      let o = r[i];
      if (o) {
       let e = new x();
       o.validate(s, e, n);
       t.mergePropertyMatch(e);
      }
     });
    }
    if (e.patternProperties) {
     Object.keys(e.patternProperties).forEach(s => {
      let o = new RegExp(s);
      i.slice(0).forEach(i => {
       if (o.test(i)) {
        a(i);
        let o = r[i];
        if (o) {
         let r = new x();
         o.validate(e.patternProperties[s], r, n);
         t.mergePropertyMatch(r);
        }
       }
      });
     });
    }
    if (typeof e.additionalProperties === "object") {
     i.forEach(i => {
      let s = r[i];
      if (s) {
       let r = new x();
       s.validate(e.additionalProperties, r, n);
       t.mergePropertyMatch(r);
      }
     });
    } else if (e.additionalProperties === false) {
     if (i.length > 0) {
      i.forEach(n => {
       let i = r[n];
       if (i) {
        let r = null;
        if (i.type !== "property") {
         r = i.parent;
         if (r.type === "object") {
          r = r.properties[0];
         }
        } else {
         r = i;
        }
        t.problems.push({
         location: {
          start: r.key.start,
          end: r.key.end
         },
         severity: o.Warning,
         message: e.errorMessage || s("DisallowedExtraPropWarning", "Unexpected property {0}", n)
        });
       }
      });
     }
    }
    if (e.maxProperties) {
     if (this.properties.length > e.maxProperties) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.end
       },
       severity: o.Warning,
       message: s("MaxPropWarning", "Object has more properties than limit of {0}.", e.maxProperties)
      });
     }
    }
    if (e.minProperties) {
     if (this.properties.length < e.minProperties) {
      t.problems.push({
       location: {
        start: this.start,
        end: this.end
       },
       severity: o.Warning,
       message: s("MinPropWarning", "Object has fewer properties than the required number of {0}", e.minProperties)
      });
     }
    }
    if (e.dependencies) {
     Object.keys(e.dependencies).forEach(i => {
      let a = r[i];
      if (a) {
       let a = e.dependencies[i];
       if (Array.isArray(a)) {
        a.forEach(e => {
         if (!r[e]) {
          t.problems.push({
           location: {
            start: this.start,
            end: this.end
           },
           severity: o.Warning,
           message: s("RequiredDependentPropWarning", "Object is missing property {0} required by property {1}.", e, i)
          });
         } else {
          t.propertiesValueMatches++;
         }
        });
       } else if (a) {
        let e = new x();
        this.validate(a, e, n);
        t.mergePropertyMatch(e);
       }
      }
     });
    }
   }
  }
  t.ObjectASTNode = m;
  var v;
  (function(e) {
   e[e["Key"] = 0] = "Key";
   e[e["Enum"] = 1] = "Enum";
  })(v = t.EnumMatch || (t.EnumMatch = {}));
  class g {
   constructor(e = -1, t = null) {
    this.focusOffset = e;
    this.exclude = t;
    this.schemas = [];
   }
   add(e) {
    this.schemas.push(e);
   }
   merge(e) {
    this.schemas.push(...e.schemas);
   }
   include(e) {
    return (this.focusOffset === -1 || e.contains(this.focusOffset)) && e !== this.exclude;
   }
   newSub() {
    return new g(-1, this.exclude);
   }
  }
  class y {
   get schemas() {
    return [];
   }
   add(e) {}
   merge(e) {}
   include(e) {
    return true;
   }
   newSub() {
    return this;
   }
  }
  class x {
   constructor() {
    this.problems = [];
    this.propertiesMatches = 0;
    this.propertiesValueMatches = 0;
    this.primaryValueMatches = 0;
    this.enumValueMatch = false;
    this.enumValues = null;
    this.warnings = [];
    this.errors = [];
   }
   hasProblems() {
    return !!this.problems.length;
   }
   mergeAll(e) {
    e.forEach(e => {
     this.merge(e);
    });
   }
   merge(e) {
    this.problems = this.problems.concat(e.problems);
   }
   mergeEnumValues(e) {
    if (!this.enumValueMatch && !e.enumValueMatch && this.enumValues && e.enumValues) {
     this.enumValues = this.enumValues.concat(e.enumValues);
     for (let e of this.problems) {
      if (e.code === a.EnumValueMismatch) {
       e.message = s("enumWarning", "Value is not accepted. Valid values: {0}.", this.enumValues.map(e => JSON.stringify(e)).join(", "));
      }
     }
    }
   }
   mergePropertyMatch(e) {
    this.merge(e);
    this.propertiesMatches++;
    if (e.enumValueMatch || !this.hasProblems() && e.propertiesMatches) {
     this.propertiesValueMatches++;
    }
    if (e.enumValueMatch && e.enumValues && e.enumValues.length === 1) {
     this.primaryValueMatches++;
    }
   }
   compareGeneric(e) {
    let t = this.hasProblems();
    if (t !== e.hasProblems()) {
     return t ? -1 : 1;
    }
    if (this.enumValueMatch !== e.enumValueMatch) {
     return e.enumValueMatch ? -1 : 1;
    }
    if (this.propertiesValueMatches !== e.propertiesValueMatches) {
     return this.propertiesValueMatches - e.propertiesValueMatches;
    }
    if (this.primaryValueMatches !== e.primaryValueMatches) {
     return this.primaryValueMatches - e.primaryValueMatches;
    }
    return this.propertiesMatches - e.propertiesMatches;
   }
   compareKubernetes(e) {
    let t = this.hasProblems();
    if (this.propertiesMatches !== e.propertiesMatches) {
     return this.propertiesMatches - e.propertiesMatches;
    }
    if (this.enumValueMatch !== e.enumValueMatch) {
     return e.enumValueMatch ? -1 : 1;
    }
    if (this.primaryValueMatches !== e.primaryValueMatches) {
     return this.primaryValueMatches - e.primaryValueMatches;
    }
    if (this.propertiesValueMatches !== e.propertiesValueMatches) {
     return this.propertiesValueMatches - e.propertiesValueMatches;
    }
    if (t !== e.hasProblems()) {
     return t ? -1 : 1;
    }
    return this.propertiesMatches - e.propertiesMatches;
   }
  }
  t.ValidationResult = x;
  class C {
   constructor(e, t) {
    this.root = e;
    this.syntaxErrors = t;
   }
   getNodeFromOffset(e) {
    return this.root && this.root.getNodeFromOffset(e);
   }
   getNodeFromOffsetEndInclusive(e) {
    return this.root && this.root.getNodeFromOffsetEndInclusive(e);
   }
   visit(e) {
    if (this.root) {
     this.root.visit(e);
    }
   }
   configureSettings(e) {
    if (this.root) {
     this.root.setParserSettings(e);
    }
   }
   validate(e) {
    if (this.root && e) {
     let t = new x();
     this.root.validate(e, t, new y());
     return t.problems;
    }
    return null;
   }
   getMatchingSchemas(e, t = -1, n = null) {
    let r = new g(t, n);
    let i = new x();
    if (this.root && e) {
     this.root.validate(e, i, r);
    }
    return r.schemas;
   }
   getValidationProblems(e, t = -1, n = null) {
    let r = new g(t, n);
    let i = new x();
    if (this.root && e) {
     this.root.validate(e, i, r);
    }
    return i.problems;
   }
  }
  t.JSONDocument = C;
  function D(e, t, n, r) {
   let i = e.compareKubernetes(t.validationResult);
   if (i > 0) {
    t = {
     schema: n,
     validationResult: e,
     matchingSchemas: r
    };
   } else if (i === 0) {
    t.matchingSchemas.merge(r);
    t.validationResult.mergeEnumValues(e);
   }
   return t;
  }
  function E(e, t, n, r, i) {
   if (!e && !t.hasProblems() && !n.validationResult.hasProblems()) {
    n.matchingSchemas.merge(i);
    n.validationResult.propertiesMatches += t.propertiesMatches;
    n.validationResult.propertiesValueMatches += t.propertiesValueMatches;
   } else {
    let e = t.compareGeneric(n.validationResult);
    if (e > 0) {
     n = {
      schema: r,
      validationResult: t,
      matchingSchemas: i
     };
    } else if (e === 0) {
     n.matchingSchemas.merge(i);
     n.validationResult.mergeEnumValues(t);
    }
   }
   return n;
  }
 },
 ZOGm: function(e, t, n) {
  "use strict";
  var r = n("gax4");
  e.exports = new r("tag:yaml.org,2002:str", {
   kind: "scalar",
   construct: function(e) {
    return e !== null ? e : "";
   }
  });
 },
 ZXpH: function(e, t) {
  var n = 1e3;
  var r = n * 60;
  var i = r * 60;
  var s = i * 24;
  var a = s * 365.25;
  e.exports = function(e, t) {
   t = t || {};
   var n = typeof e;
   if (n === "string" && e.length > 0) {
    return o(e);
   } else if (n === "number" && isNaN(e) === false) {
    return t.long ? c(e) : u(e);
   }
   throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
  };
  function o(e) {
   e = String(e);
   if (e.length > 100) {
    return;
   }
   var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
   if (!t) {
    return;
   }
   var o = parseFloat(t[1]);
   var u = (t[2] || "ms").toLowerCase();
   switch (u) {
   case "years":
   case "year":
   case "yrs":
   case "yr":
   case "y":
    return o * a;

   case "days":
   case "day":
   case "d":
    return o * s;

   case "hours":
   case "hour":
   case "hrs":
   case "hr":
   case "h":
    return o * i;

   case "minutes":
   case "minute":
   case "mins":
   case "min":
   case "m":
    return o * r;

   case "seconds":
   case "second":
   case "secs":
   case "sec":
   case "s":
    return o * n;

   case "milliseconds":
   case "millisecond":
   case "msecs":
   case "msec":
   case "ms":
    return o;

   default:
    return undefined;
   }
  }
  function u(e) {
   if (e >= s) {
    return Math.round(e / s) + "d";
   }
   if (e >= i) {
    return Math.round(e / i) + "h";
   }
   if (e >= r) {
    return Math.round(e / r) + "m";
   }
   if (e >= n) {
    return Math.round(e / n) + "s";
   }
   return e + "ms";
  }
  function c(e) {
   return l(e, s, "day") || l(e, i, "hour") || l(e, r, "minute") || l(e, n, "second") || e + " ms";
  }
  function l(e, t, n) {
   if (e < t) {
    return;
   }
   if (e < t * 1.5) {
    return Math.floor(e / t) + " " + n;
   }
   return Math.ceil(e / t) + " " + n + "s";
  }
 },
 aCUO: function(e, t, n) {
  "use strict";
  var r = n("cYFF");
  function i(e) {
   if (null === e) {
    return true;
   }
   var t = e.length;
   return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
  }
  function s() {
   return null;
  }
  function a(e) {
   return null === e;
  }
  e.exports = new r.Type("tag:yaml.org,2002:null", {
   kind: "scalar",
   resolve: i,
   construct: s,
   predicate: a,
   represent: {
    canonical: function() {
     return "~";
    },
    lowercase: function() {
     return "null";
    },
    uppercase: function() {
     return "NULL";
    },
    camelcase: function() {
     return "Null";
    }
   },
   defaultStyle: "lowercase"
  });
 },
 adOI: function(e, t, n) {
  "use strict";
  var r = n("cYFF");
  function i() {
   return true;
  }
  function s() {
   return undefined;
  }
  function a() {
   return "";
  }
  function o(e) {
   return "undefined" === typeof e;
  }
  e.exports = new r.Type("tag:yaml.org,2002:js/undefined", {
   kind: "scalar",
   resolve: i,
   construct: s,
   predicate: o,
   represent: a
  });
 },
 ah4D: function(e, t, n) {
  "use strict";
  var r = n("7Nz6");
  e.exports = new r.Schema({
   include: [ n("mF9P") ]
  });
 },
 bAum: function(e, t, n) {
  "use strict";
  const r = n("jle/");
  const i = n("X5QW");
  const s = process.env;
  let a;
  if (i("no-color") || i("no-colors") || i("color=false")) {
   a = false;
  } else if (i("color") || i("colors") || i("color=true") || i("color=always")) {
   a = true;
  }
  if ("FORCE_COLOR" in s) {
   a = s.FORCE_COLOR.length === 0 || parseInt(s.FORCE_COLOR, 10) !== 0;
  }
  function o(e) {
   if (e === 0) {
    return false;
   }
   return {
    level: e,
    hasBasic: true,
    has256: e >= 2,
    has16m: e >= 3
   };
  }
  function u(e) {
   if (a === false) {
    return 0;
   }
   if (i("color=16m") || i("color=full") || i("color=truecolor")) {
    return 3;
   }
   if (i("color=256")) {
    return 2;
   }
   if (e && !e.isTTY && a !== true) {
    return 0;
   }
   const t = a ? 1 : 0;
   if (process.platform === "win32") {
    const e = r.release().split(".");
    if (Number(process.versions.node.split(".")[0]) >= 8 && Number(e[0]) >= 10 && Number(e[2]) >= 10586) {
     return Number(e[2]) >= 14931 ? 3 : 2;
    }
    return 1;
   }
   if ("CI" in s) {
    if ([ "TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI" ].some(e => e in s) || s.CI_NAME === "codeship") {
     return 1;
    }
    return t;
   }
   if ("TEAMCITY_VERSION" in s) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION) ? 1 : 0;
   }
   if (s.COLORTERM === "truecolor") {
    return 3;
   }
   if ("TERM_PROGRAM" in s) {
    const e = parseInt((s.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (s.TERM_PROGRAM) {
    case "iTerm.app":
     return e >= 3 ? 3 : 2;

    case "Apple_Terminal":
     return 2;
    }
   }
   if (/-256(color)?$/i.test(s.TERM)) {
    return 2;
   }
   if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(s.TERM)) {
    return 1;
   }
   if ("COLORTERM" in s) {
    return 1;
   }
   if (s.TERM === "dumb") {
    return t;
   }
   return t;
  }
  function c(e) {
   const t = u(e);
   return o(t);
  }
  e.exports = {
   supportsColor: c,
   stdout: c(process.stdout),
   stderr: c(process.stderr)
  };
 },
 bGBN: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  class r {
   constructor(e) {
    this._value = e;
   }
   asHex() {
    return this._value;
   }
   equals(e) {
    return this.asHex() === e.asHex();
   }
  }
  class i extends r {
   constructor() {
    super([ i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), "-", i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), "-", "4", i._randomHex(), i._randomHex(), i._randomHex(), "-", i._oneOf(i._timeHighBits), i._randomHex(), i._randomHex(), i._randomHex(), "-", i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex() ].join(""));
   }
   static _oneOf(e) {
    return e[Math.floor(e.length * Math.random())];
   }
   static _randomHex() {
    return i._oneOf(i._chars);
   }
  }
  i._chars = [ "0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
  i._timeHighBits = [ "8", "9", "a", "b" ];
  t.empty = new r("00000000-0000-0000-0000-000000000000");
  function s() {
   return new i();
  }
  t.v4 = s;
  const a = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  function o(e) {
   return a.test(e);
  }
  t.isUUID = o;
  function u(e) {
   if (!o(e)) {
    throw new Error("invalid uuid");
   }
   return new r(e);
  }
  t.parse = u;
  function c() {
   return s().asHex();
  }
  t.generateUuid = c;
 },
 "bv+B": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("ICfX");
  const i = n("OFSL");
  class s {
   constructor(e, t = [], n) {
    this.schemaService = e;
    this.contributions = t;
    this.promise = n || Promise;
   }
   doHover(e, t, n) {
    if (!e) {
     this.promise.resolve(void 0);
    }
    let s = e.offsetAt(t);
    let o = i.matchOffsetToDocument(s, n);
    if (o === null) {
     return this.promise.resolve(void 0);
    }
    let u = o.getNodeFromOffset(s);
    if (!u || (u.type === "object" || u.type === "array") && s > u.start + 1 && s < u.end - 1) {
     return this.promise.resolve(void 0);
    }
    let c = u;
    if (u.type === "string") {
     let e = u;
     if (e.isKey) {
      let e = u.parent;
      u = e.value;
      if (!u) {
       return this.promise.resolve(void 0);
      }
     }
    }
    let l = r.Range.create(e.positionAt(c.start), e.positionAt(c.end));
    var h = e => {
     let t = {
      contents: e,
      range: l
     };
     return t;
    };
    let f = u.getPath();
    for (let t = this.contributions.length - 1; t >= 0; t--) {
     let n = this.contributions[t];
     let r = n.getInfoContribution(e.uri, f);
     if (r) {
      return r.then(e => h(e));
     }
    }
    return this.schemaService.getSchemaForResource(e.uri).then(e => {
     if (e) {
      let t = o.getMatchingSchemas(e.schema, u.start);
      let n = null;
      let r = null;
      let i = null, s = null;
      t.every(e => {
       if (e.node === u && !e.inverted && e.schema) {
        n = n || e.schema.title;
        r = r || e.schema["markdownDescription"] || a(e.schema.description);
        if (e.schema.enum) {
         let t = e.schema.enum.indexOf(u.getValue());
         if (e.schema["markdownEnumDescriptions"]) {
          i = e.schema["markdownEnumDescriptions"][t];
         } else if (e.schema.enumDescriptions) {
          i = a(e.schema.enumDescriptions[t]);
         }
         if (i) {
          s = e.schema.enum[t];
          if (typeof s !== "string") {
           s = JSON.stringify(s);
          }
         }
        }
       }
       return true;
      });
      let c = "";
      if (n) {
       c = a(n);
      }
      if (r) {
       if (c.length > 0) {
        c += "\n\n";
       }
       c += r;
      }
      if (i) {
       if (c.length > 0) {
        c += "\n\n";
       }
       c += `\`${a(s)}\`: ${i}`;
      }
      return h([ c ]);
     }
     return void 0;
    });
   }
  }
  t.YAMLHover = s;
  function a(e) {
   if (e) {
    let t = e.replace(/([^\n\r])(\r?\n)([^\n\r])/gm, "$1\n\n$3");
    return t.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
   }
   return void 0;
  }
 },
 bzos: function(e, t) {
  e.exports = require("url");
 },
 cYFF: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("k4pi");
  var i = [ "kind", "resolve", "construct", "instanceOf", "predicate", "represent", "defaultStyle", "styleAliases" ];
  var s = [ "scalar", "sequence", "mapping" ];
  function a(e) {
   var t = {};
   if (null !== e) {
    Object.keys(e).forEach(function(n) {
     e[n].forEach(function(e) {
      t[String(e)] = n;
     });
    });
   }
   return t;
  }
  var o = function() {
   function e(e, t) {
    t = t || {};
    Object.keys(t).forEach(function(t) {
     if (-1 === i.indexOf(t)) {
      throw new r('Unknown option "' + t + '" is met in definition of "' + e + '" YAML type.');
     }
    });
    this.tag = e;
    this.kind = t["kind"] || null;
    this.resolve = t["resolve"] || function() {
     return true;
    };
    this.construct = t["construct"] || function(e) {
     return e;
    };
    this.instanceOf = t["instanceOf"] || null;
    this.predicate = t["predicate"] || null;
    this.represent = t["represent"] || null;
    this.defaultStyle = t["defaultStyle"] || null;
    this.styleAliases = a(t["styleAliases"] || null);
    if (-1 === s.indexOf(this.kind)) {
     throw new r('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
    }
   }
   return e;
  }();
  t.Type = o;
 },
 cg4v: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("rWaT");
  var i;
  (function(e) {
   e.type = new r.RequestType("textDocument/documentColor");
  })(i = t.DocumentColorRequest || (t.DocumentColorRequest = {}));
  var s;
  (function(e) {
   e.type = new r.RequestType("textDocument/colorPresentation");
  })(s = t.ColorPresentationRequest || (t.ColorPresentationRequest = {}));
 },
 chxr: function(e, t, n) {
  "use strict";
  n.r(t);
  function r(e) {
   return "%" + e.charCodeAt(0).toString(16).toUpperCase();
  }
  function i(e) {
   return encodeURIComponent(e).replace(/[!'()*]/g, r);
  }
  function s(e) {
   return e.replace(/[#?]/, r);
  }
  var a = function() {
   function e() {
    this._scheme = e._empty;
    this._authority = e._empty;
    this._path = e._empty;
    this._query = e._empty;
    this._fragment = e._empty;
    this._formatted = null;
    this._fsPath = null;
   }
   e.isUri = function(t) {
    if (t instanceof e) {
     return true;
    }
    if (!t) {
     return false;
    }
    return typeof t.authority === "string" && typeof t.fragment === "string" && typeof t.path === "string" && typeof t.query === "string" && typeof t.scheme === "string";
   };
   Object.defineProperty(e.prototype, "scheme", {
    get: function() {
     return this._scheme;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "authority", {
    get: function() {
     return this._authority;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "path", {
    get: function() {
     return this._path;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "query", {
    get: function() {
     return this._query;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "fragment", {
    get: function() {
     return this._fragment;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "fsPath", {
    get: function() {
     if (!this._fsPath) {
      var t;
      if (this._authority && this._path && this.scheme === "file") {
       t = "//" + this._authority + this._path;
      } else if (e._driveLetterPath.test(this._path)) {
       t = this._path[1].toLowerCase() + this._path.substr(2);
      } else {
       t = this._path;
      }
      if (o) {
       t = t.replace(/\//g, "\\");
      }
      this._fsPath = t;
     }
     return this._fsPath;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.with = function(t) {
    if (!t) {
     return this;
    }
    var n = t.scheme, r = t.authority, i = t.path, s = t.query, a = t.fragment;
    if (n === void 0) {
     n = this.scheme;
    } else if (n === null) {
     n = "";
    }
    if (r === void 0) {
     r = this.authority;
    } else if (r === null) {
     r = "";
    }
    if (i === void 0) {
     i = this.path;
    } else if (i === null) {
     i = "";
    }
    if (s === void 0) {
     s = this.query;
    } else if (s === null) {
     s = "";
    }
    if (a === void 0) {
     a = this.fragment;
    } else if (a === null) {
     a = "";
    }
    if (n === this.scheme && r === this.authority && i === this.path && s === this.query && a === this.fragment) {
     return this;
    }
    var o = new e();
    o._scheme = n;
    o._authority = r;
    o._path = i;
    o._query = s;
    o._fragment = a;
    e._validate(o);
    return o;
   };
   e.parse = function(t) {
    var n = new e();
    var r = e._parseComponents(t);
    n._scheme = r.scheme;
    n._authority = decodeURIComponent(r.authority);
    n._path = decodeURIComponent(r.path);
    n._query = decodeURIComponent(r.query);
    n._fragment = decodeURIComponent(r.fragment);
    e._validate(n);
    return n;
   };
   e.file = function(t) {
    var n = new e();
    n._scheme = "file";
    if (o) {
     t = t.replace(/\\/g, e._slash);
    }
    if (t[0] === e._slash && t[0] === t[1]) {
     var r = t.indexOf(e._slash, 2);
     if (r === -1) {
      n._authority = t.substring(2);
     } else {
      n._authority = t.substring(2, r);
      n._path = t.substring(r);
     }
    } else {
     n._path = t;
    }
    if (n._path[0] !== e._slash) {
     n._path = e._slash + n._path;
    }
    e._validate(n);
    return n;
   };
   e._parseComponents = function(t) {
    var n = {
     scheme: e._empty,
     authority: e._empty,
     path: e._empty,
     query: e._empty,
     fragment: e._empty
    };
    var r = e._regexp.exec(t);
    if (r) {
     n.scheme = r[2] || n.scheme;
     n.authority = r[4] || n.authority;
     n.path = r[5] || n.path;
     n.query = r[7] || n.query;
     n.fragment = r[9] || n.fragment;
    }
    return n;
   };
   e.from = function(t) {
    return new e().with(t);
   };
   e._validate = function(t) {
    if (t.scheme && !e._schemePattern.test(t.scheme)) {
     throw new Error("[UriError]: Scheme contains illegal characters.");
    }
    if (t.path) {
     if (t.authority) {
      if (!e._singleSlashStart.test(t.path)) {
       throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
      }
     } else {
      if (e._doubleSlashStart.test(t.path)) {
       throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
     }
    }
   };
   e.prototype.toString = function(t) {
    if (t === void 0) {
     t = false;
    }
    if (!t) {
     if (!this._formatted) {
      this._formatted = e._asFormatted(this, false);
     }
     return this._formatted;
    } else {
     return e._asFormatted(this, true);
    }
   };
   e._asFormatted = function(t, n) {
    var r = !n ? i : s;
    var a = [];
    var o = t.scheme, u = t.authority, c = t.path, l = t.query, h = t.fragment;
    if (o) {
     a.push(o, ":");
    }
    if (u || o === "file") {
     a.push("//");
    }
    if (u) {
     u = u.toLowerCase();
     var f = u.indexOf(":");
     if (f === -1) {
      a.push(r(u));
     } else {
      a.push(r(u.substr(0, f)), u.substr(f));
     }
    }
    if (c) {
     var p = e._upperCaseDrive.exec(c);
     if (p) {
      if (p[1]) {
       c = "/" + p[2].toLowerCase() + c.substr(3);
      } else {
       c = p[2].toLowerCase() + c.substr(2);
      }
     }
     var d = 0;
     while (true) {
      var f = c.indexOf(e._slash, d);
      if (f === -1) {
       a.push(r(c.substring(d)));
       break;
      }
      a.push(r(c.substring(d, f)), e._slash);
      d = f + 1;
     }
    }
    if (l) {
     a.push("?", r(l));
    }
    if (h) {
     a.push("#", r(h));
    }
    return a.join(e._empty);
   };
   e.prototype.toJSON = function() {
    var e = {
     fsPath: this.fsPath,
     external: this.toString(),
     $mid: 1
    };
    if (this.path) {
     e.path = this.path;
    }
    if (this.scheme) {
     e.scheme = this.scheme;
    }
    if (this.authority) {
     e.authority = this.authority;
    }
    if (this.query) {
     e.query = this.query;
    }
    if (this.fragment) {
     e.fragment = this.fragment;
    }
    return e;
   };
   e.revive = function(t) {
    var n = new e();
    n._scheme = t.scheme || e._empty;
    n._authority = t.authority || e._empty;
    n._path = t.path || e._empty;
    n._query = t.query || e._empty;
    n._fragment = t.fragment || e._empty;
    n._fsPath = t.fsPath;
    n._formatted = t.external;
    e._validate(n);
    return n;
   };
   return e;
  }();
  t["default"] = a;
  a._empty = "";
  a._slash = "/";
  a._regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  a._driveLetterPath = /^\/[a-zA-z]:/;
  a._upperCaseDrive = /^(\/)?([A-Z]:)/;
  a._schemePattern = /^\w[\w\d+.-]*$/;
  a._singleSlashStart = /^\//;
  a._doubleSlashStart = /^\/\//;
  var o;
  if (typeof process === "object") {
   o = process.platform === "win32";
  } else if (typeof navigator === "object") {
   var u = navigator.userAgent;
   o = u.indexOf("Windows") >= 0;
  }
 },
 "ckb+": function(e, t, n) {
  "use strict";
  const r = n("bzos");
  const i = n("7WL4");
  i.request = function(e) {
   return function(t, n) {
    let s;
    if (typeof t === "string") {
     s = r.parse(t);
    } else {
     s = Object.assign({}, t);
    }
    if (null == s.port) {
     s.port = 443;
    }
    s.secureEndpoint = true;
    return e.call(i, s, n);
   };
  }(i.request);
  i.get = function(e, t) {
   const n = i.request(e, t);
   n.end();
   return n;
  };
 },
 clIw: function(e, t, n) {
  "use strict";
  var r = n("gax4");
  function i(e) {
   if (e === null) return false;
   var t = e.length;
   return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
  }
  function s(e) {
   return e === "true" || e === "True" || e === "TRUE";
  }
  function a(e) {
   return Object.prototype.toString.call(e) === "[object Boolean]";
  }
  e.exports = new r("tag:yaml.org,2002:bool", {
   kind: "scalar",
   resolve: i,
   construct: s,
   predicate: a,
   represent: {
    lowercase: function(e) {
     return e ? "true" : "false";
    },
    uppercase: function(e) {
     return e ? "TRUE" : "FALSE";
    },
    camelcase: function(e) {
     return e ? "True" : "False";
    }
   },
   defaultStyle: "lowercase"
  });
 },
 d2qJ: function(e, t, n) {
  "use strict";
  var r = n("cYFF");
  e.exports = new r.Type("tag:yaml.org,2002:str", {
   kind: "scalar",
   construct: function(e) {
    return null !== e ? e : "";
   }
  });
 },
 "eZ/G": function(e, t, n) {
  "use strict";
  var r = n("cYFF");
  e.exports = new r.Type("tag:yaml.org,2002:seq", {
   kind: "sequence",
   construct: function(e) {
    return null !== e ? e : [];
   }
  });
 },
 gax4: function(e, t, n) {
  "use strict";
  var r = n("wGX6");
  var i = [ "kind", "resolve", "construct", "instanceOf", "predicate", "represent", "defaultStyle", "styleAliases" ];
  var s = [ "scalar", "sequence", "mapping" ];
  function a(e) {
   var t = {};
   if (e !== null) {
    Object.keys(e).forEach(function(n) {
     e[n].forEach(function(e) {
      t[String(e)] = n;
     });
    });
   }
   return t;
  }
  function o(e, t) {
   t = t || {};
   Object.keys(t).forEach(function(t) {
    if (i.indexOf(t) === -1) {
     throw new r('Unknown option "' + t + '" is met in definition of "' + e + '" YAML type.');
    }
   });
   this.tag = e;
   this.kind = t["kind"] || null;
   this.resolve = t["resolve"] || function() {
    return true;
   };
   this.construct = t["construct"] || function(e) {
    return e;
   };
   this.instanceOf = t["instanceOf"] || null;
   this.predicate = t["predicate"] || null;
   this.represent = t["represent"] || null;
   this.defaultStyle = t["defaultStyle"] || null;
   this.styleAliases = a(t["styleAliases"] || null);
   if (s.indexOf(this.kind) === -1) {
    throw new r('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
   }
  }
  e.exports = o;
 },
 "h1f/": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r;
  (function(e) {
   e.None = 0;
   e.First = 1;
   e.Last = 2;
  })(r = t.Touch || (t.Touch = {}));
  var i = function() {
   function e() {
    this._map = new Map();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
   }
   e.prototype.clear = function() {
    this._map.clear();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
   };
   e.prototype.isEmpty = function() {
    return !this._head && !this._tail;
   };
   Object.defineProperty(e.prototype, "size", {
    get: function() {
     return this._size;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.has = function(e) {
    return this._map.has(e);
   };
   e.prototype.get = function(e) {
    var t = this._map.get(e);
    if (!t) {
     return undefined;
    }
    return t.value;
   };
   e.prototype.set = function(e, t, n) {
    if (n === void 0) {
     n = r.None;
    }
    var i = this._map.get(e);
    if (i) {
     i.value = t;
     if (n !== r.None) {
      this.touch(i, n);
     }
    } else {
     i = {
      key: e,
      value: t,
      next: undefined,
      previous: undefined
     };
     switch (n) {
     case r.None:
      this.addItemLast(i);
      break;

     case r.First:
      this.addItemFirst(i);
      break;

     case r.Last:
      this.addItemLast(i);
      break;

     default:
      this.addItemLast(i);
      break;
     }
     this._map.set(e, i);
     this._size++;
    }
   };
   e.prototype.delete = function(e) {
    var t = this._map.get(e);
    if (!t) {
     return false;
    }
    this._map.delete(e);
    this.removeItem(t);
    this._size--;
    return true;
   };
   e.prototype.shift = function() {
    if (!this._head && !this._tail) {
     return undefined;
    }
    if (!this._head || !this._tail) {
     throw new Error("Invalid list");
    }
    var e = this._head;
    this._map.delete(e.key);
    this.removeItem(e);
    this._size--;
    return e.value;
   };
   e.prototype.forEach = function(e, t) {
    var n = this._head;
    while (n) {
     if (t) {
      e.bind(t)(n.value, n.key, this);
     } else {
      e(n.value, n.key, this);
     }
     n = n.next;
    }
   };
   e.prototype.forEachReverse = function(e, t) {
    var n = this._tail;
    while (n) {
     if (t) {
      e.bind(t)(n.value, n.key, this);
     } else {
      e(n.value, n.key, this);
     }
     n = n.previous;
    }
   };
   e.prototype.values = function() {
    var e = [];
    var t = this._head;
    while (t) {
     e.push(t.value);
     t = t.next;
    }
    return e;
   };
   e.prototype.keys = function() {
    var e = [];
    var t = this._head;
    while (t) {
     e.push(t.key);
     t = t.next;
    }
    return e;
   };
   e.prototype.addItemFirst = function(e) {
    if (!this._head && !this._tail) {
     this._tail = e;
    } else if (!this._head) {
     throw new Error("Invalid list");
    } else {
     e.next = this._head;
     this._head.previous = e;
    }
    this._head = e;
   };
   e.prototype.addItemLast = function(e) {
    if (!this._head && !this._tail) {
     this._head = e;
    } else if (!this._tail) {
     throw new Error("Invalid list");
    } else {
     e.previous = this._tail;
     this._tail.next = e;
    }
    this._tail = e;
   };
   e.prototype.removeItem = function(e) {
    if (e === this._head && e === this._tail) {
     this._head = undefined;
     this._tail = undefined;
    } else if (e === this._head) {
     this._head = e.next;
    } else if (e === this._tail) {
     this._tail = e.previous;
    } else {
     var t = e.next;
     var n = e.previous;
     if (!t || !n) {
      throw new Error("Invalid list");
     }
     t.previous = n;
     n.next = t;
    }
   };
   e.prototype.touch = function(e, t) {
    if (!this._head || !this._tail) {
     throw new Error("Invalid list");
    }
    if (t !== r.First && t !== r.Last) {
     return;
    }
    if (t === r.First) {
     if (e === this._head) {
      return;
     }
     var n = e.next;
     var i = e.previous;
     if (e === this._tail) {
      i.next = undefined;
      this._tail = i;
     } else {
      n.previous = i;
      i.next = n;
     }
     e.previous = undefined;
     e.next = this._head;
     this._head.previous = e;
     this._head = e;
    } else if (t === r.Last) {
     if (e === this._tail) {
      return;
     }
     var n = e.next;
     var i = e.previous;
     if (e === this._head) {
      n.previous = undefined;
      this._head = n;
     } else {
      n.previous = i;
      i.next = n;
     }
     e.next = undefined;
     e.previous = this._tail;
     this._tail.next = e;
     this._tail = e;
    }
   };
   return e;
  }();
  t.LinkedMap = i;
 },
 "hoi+": function(e, t, n) {
  "use strict";
  var r = n("YU9W");
  e.exports = new r({
   explicit: [ n("ZOGm"), n("uwlh"), n("UsVv") ]
  });
 },
 iB0C: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  function r(e) {
   return "%" + e.charCodeAt(0).toString(16).toUpperCase();
  }
  function i(e) {
   return encodeURIComponent(e).replace(/[!'()*]/g, r);
  }
  function s(e) {
   return e;
  }
  class a {
   constructor() {
    this._scheme = a._empty;
    this._authority = a._empty;
    this._path = a._empty;
    this._query = a._empty;
    this._fragment = a._empty;
    this._formatted = null;
    this._fsPath = null;
   }
   get scheme() {
    return this._scheme;
   }
   get authority() {
    return this._authority;
   }
   get path() {
    return this._path;
   }
   get query() {
    return this._query;
   }
   get fragment() {
    return this._fragment;
   }
   get fsPath() {
    if (!this._fsPath) {
     var e;
     if (this._authority && this.scheme === "file") {
      e = `//${this._authority}${this._path}`;
     } else if (a._driveLetterPath.test(this._path)) {
      e = this._path[1].toLowerCase() + this._path.substr(2);
     } else {
      e = this._path;
     }
     if (process.platform === "win32") {
      e = e.replace(/\//g, "\\");
     }
     this._fsPath = e;
    }
    return this._fsPath;
   }
   with(e, t, n, r, i) {
    var s = new a();
    s._scheme = e || this.scheme;
    s._authority = t || this.authority;
    s._path = n || this.path;
    s._query = r || this.query;
    s._fragment = i || this.fragment;
    a._validate(s);
    return s;
   }
   withScheme(e) {
    return this.with(e, undefined, undefined, undefined, undefined);
   }
   withAuthority(e) {
    return this.with(undefined, e, undefined, undefined, undefined);
   }
   withPath(e) {
    return this.with(undefined, undefined, e, undefined, undefined);
   }
   withQuery(e) {
    return this.with(undefined, undefined, undefined, e, undefined);
   }
   withFragment(e) {
    return this.with(undefined, undefined, undefined, undefined, e);
   }
   static parse(e) {
    const t = new a();
    const n = a._parseComponents(e);
    t._scheme = n.scheme;
    t._authority = decodeURIComponent(n.authority);
    t._path = decodeURIComponent(n.path);
    t._query = decodeURIComponent(n.query);
    t._fragment = decodeURIComponent(n.fragment);
    a._validate(t);
    return t;
   }
   static file(e) {
    const t = new a();
    t._scheme = "file";
    e = e.replace(/\\/g, a._slash);
    if (e[0] === a._slash && e[0] === e[1]) {
     let n = e.indexOf(a._slash, 2);
     if (n === -1) {
      t._authority = e.substring(2);
     } else {
      t._authority = e.substring(2, n);
      t._path = e.substring(n);
     }
    } else {
     t._path = e;
    }
    if (t._path[0] !== a._slash) {
     t._path = a._slash + t._path;
    }
    a._validate(t);
    return t;
   }
   static _parseComponents(e) {
    const t = {
     scheme: a._empty,
     authority: a._empty,
     path: a._empty,
     query: a._empty,
     fragment: a._empty
    };
    const n = a._regexp.exec(e);
    if (n) {
     t.scheme = n[2] || t.scheme;
     t.authority = n[4] || t.authority;
     t.path = n[5] || t.path;
     t.query = n[7] || t.query;
     t.fragment = n[9] || t.fragment;
    }
    return t;
   }
   static create(e, t, n, r, i) {
    return new a().with(e, t, n, r, i);
   }
   static _validate(e) {
    if (e.authority && e.path && e.path[0] !== "/") {
     throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    }
    if (!e.authority && e.path.indexOf("//") === 0) {
     throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
    }
   }
   toString(e = false) {
    if (!e) {
     if (!this._formatted) {
      this._formatted = a._asFormatted(this, false);
     }
     return this._formatted;
    } else {
     return a._asFormatted(this, true);
    }
   }
   static _asFormatted(e, t) {
    const n = !t ? i : s;
    const o = [];
    let {scheme: u, authority: c, path: l, query: h, fragment: f} = e;
    if (u) {
     o.push(u, ":");
    }
    if (c || u === "file") {
     o.push("//");
    }
    if (c) {
     c = c.toLowerCase();
     let e = c.indexOf(":");
     if (e === -1) {
      o.push(n(c));
     } else {
      o.push(n(c.substr(0, e)), c.substr(e));
     }
    }
    if (l) {
     const e = a._upperCaseDrive.exec(l);
     if (e) {
      l = e[1] + e[2].toLowerCase() + l.substr(e[1].length + e[2].length);
     }
     let t = 0;
     while (true) {
      let e = l.indexOf(a._slash, t);
      if (e === -1) {
       o.push(n(l.substring(t)).replace(/[#?]/, r));
       break;
      }
      o.push(n(l.substring(t, e)).replace(/[#?]/, r), a._slash);
      t = e + 1;
     }
    }
    if (h) {
     o.push("?", n(h));
    }
    if (f) {
     o.push("#", n(f));
    }
    return o.join(a._empty);
   }
   toJSON() {
    return {
     scheme: this.scheme,
     authority: this.authority,
     path: this.path,
     fsPath: this.fsPath,
     query: this.query,
     fragment: this.fragment,
     external: this.toString(),
     $mid: 1
    };
   }
  }
  a._empty = "";
  a._slash = "/";
  a._regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  a._driveLetterPath = /^\/[a-zA-z]:/;
  a._upperCaseDrive = /^(\/)?([A-Z]:)/;
  t.default = a;
 },
 iYeQ: function(e, t, n) {
  "use strict";
  e.exports = function() {
   "use strict";
   var e = void 0;
   function t(e) {
    return typeof e === "function";
   }
   if (global !== undefined) {
    e = global;
   } else if (window !== undefined && window.document) {
    e = window;
   } else {
    e = self;
   }
   var r = function() {
    if (!e.hasOwnProperty("Promise")) {
     return false;
    }
    var n = e.Promise;
    if (!n.hasOwnProperty("resolve") || !n.hasOwnProperty("reject")) {
     return false;
    }
    if (!n.hasOwnProperty("all") || !n.hasOwnProperty("race")) {
     return false;
    }
    return function() {
     var n = void 0;
     var r = new e.Promise(function(e) {
      n = e;
     });
     if (r) {
      return t(n);
     }
     return false;
    }();
   }();
   if (r) {
    return e.Promise;
   }
   return n("E2g8").Promise;
  }();
 },
 j4xC: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r;
  (function(e) {
   e[e["SCALAR"] = 0] = "SCALAR";
   e[e["MAPPING"] = 1] = "MAPPING";
   e[e["MAP"] = 2] = "MAP";
   e[e["SEQ"] = 3] = "SEQ";
   e[e["ANCHOR_REF"] = 4] = "ANCHOR_REF";
   e[e["INCLUDE_REF"] = 5] = "INCLUDE_REF";
  })(r = t.Kind || (t.Kind = {}));
  function i(e, t) {
   var n = t ? t.endPosition : e.endPosition + 1;
   var i = {
    key: e,
    value: t,
    startPosition: e.startPosition,
    endPosition: n,
    kind: r.MAPPING,
    parent: null,
    errors: []
   };
   return i;
  }
  t.newMapping = i;
  function s(e, t, n, i) {
   return {
    errors: [],
    referencesAnchor: e,
    value: i,
    startPosition: t,
    endPosition: n,
    kind: r.ANCHOR_REF,
    parent: null
   };
  }
  t.newAnchorRef = s;
  function a(e) {
   if (e === void 0) {
    e = "";
   }
   var t = {
    errors: [],
    startPosition: -1,
    endPosition: -1,
    value: "" + e,
    kind: r.SCALAR,
    parent: null,
    doubleQuoted: false,
    rawValue: "" + e
   };
   if (typeof e !== "string") {
    t.valueObject = e;
   }
   return t;
  }
  t.newScalar = a;
  function o() {
   return {
    errors: [],
    startPosition: -1,
    endPosition: -1,
    items: [],
    kind: r.SEQ,
    parent: null
   };
  }
  t.newItems = o;
  function u() {
   return o();
  }
  t.newSeq = u;
  function c(e) {
   return {
    errors: [],
    startPosition: -1,
    endPosition: -1,
    mappings: e ? e : [],
    kind: r.MAP,
    parent: null
   };
  }
  t.newMap = c;
 },
 j6OQ: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  function r(e) {
   if ([ "true", "True", "TRUE" ].lastIndexOf(e) >= 0) {
    return true;
   } else if ([ "false", "False", "FALSE" ].lastIndexOf(e) >= 0) {
    return false;
   }
   throw 'Invalid boolean "' + e + '"';
  }
  t.parseYamlBoolean = r;
  function i(e) {
   if (e.lastIndexOf("0o", 0) === 0) {
    return parseInt(e.substring(2), 8);
   }
   return parseInt(e);
  }
  function s(e) {
   var t = i(e);
   if (isNaN(t)) {
    throw 'Invalid integer "' + e + '"';
   }
   return t;
  }
  t.parseYamlInteger = s;
  function a(e) {
   if ([ ".nan", ".NaN", ".NAN" ].lastIndexOf(e) >= 0) {
    return NaN;
   }
   var t = /^([-+])?(?:\.inf|\.Inf|\.INF)$/;
   var n = t.exec(e);
   if (n) {
    return n[1] === "-" ? -Infinity : Infinity;
   }
   var r = parseFloat(e);
   if (!isNaN(r)) {
    return r;
   }
   throw 'Invalid float "' + e + '"';
  }
  t.parseYamlFloat = a;
  var o;
  (function(e) {
   e[e["null"] = 0] = "null";
   e[e["bool"] = 1] = "bool";
   e[e["int"] = 2] = "int";
   e[e["float"] = 3] = "float";
   e[e["string"] = 4] = "string";
  })(o = t.ScalarType || (t.ScalarType = {}));
  function u(e) {
   if (e === undefined) {
    return o.null;
   }
   if (e.doubleQuoted || !e.plainScalar || e["singleQuoted"]) {
    return o.string;
   }
   var t = e.value;
   if ([ "null", "Null", "NULL", "~", "" ].indexOf(t) >= 0) {
    return o.null;
   }
   if (t === null || t === undefined) {
    return o.null;
   }
   if ([ "true", "True", "TRUE", "false", "False", "FALSE" ].indexOf(t) >= 0) {
    return o.bool;
   }
   var n = /^[-+]?[0-9]+$/;
   var r = /^0o[0-7]+$/;
   var i = /^0x[0-9a-fA-F]+$/;
   if (n.test(t) || r.test(t) || i.test(t)) {
    return o.int;
   }
   var s = /^[-+]?(\.[0-9]+|[0-9]+(\.[0-9]*)?)([eE][-+]?[0-9]+)?$/;
   var a = /^[-+]?(\.inf|\.Inf|\.INF)$/;
   if (s.test(t) || a.test(t) || [ ".nan", ".NaN", ".NAN" ].indexOf(t) >= 0) {
    return o.float;
   }
   return o.string;
  }
  t.determineScalarType = u;
 },
 jK02: function(e, t) {
  e.exports = require("util");
 },
 jVny: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("C7CX");
  const i = n("Bovr");
  const s = n("oyvS");
  const a = n("mw/K");
  const o = n("iB0C");
  const u = n("bzos");
  const c = n("wXef");
  const l = n("OFSL");
  const h = n("43/K");
  const f = n("EoxW");
  const p = n("KYnE");
  const d = n("m2cu");
  f.config(process.env["VSCODE_NLS_CONFIG"]);
  var m;
  (function(e) {
   e.type = new r.NotificationType("json/schemaAssociations");
  })(m || (m = {}));
  var v;
  (function(e) {
   e.type = new r.RequestType("vscode/content");
  })(v || (v = {}));
  var g;
  (function(e) {
   e.type = new r.RequestType("custom/schema/content");
  })(g || (g = {}));
  var y;
  (function(e) {
   e.type = new r.RequestType("custom/schema/request");
  })(y || (y = {}));
  var x;
  (function(e) {
   e.type = new r.RequestType("json/colorSymbols");
  })(x || (x = {}));
  let C = null;
  if (process.argv.indexOf("--stdio") == -1) {
   C = r.createConnection(r.ProposedFeatures.all);
  } else {
   C = r.createConnection();
  }
  console.log = C.console.log.bind(C.console);
  console.error = C.console.error.bind(C.console);
  let D = new r.TextDocuments();
  D.listen(C);
  let E = false;
  let b = false;
  let w;
  let S = [];
  let A;
  C.onInitialize(e => {
   w = e.capabilities;
   S = e["workspaceFolders"];
   A = o.default.parse(e.rootPath);
   function t(...t) {
    let n = e.capabilities;
    for (let e = 0; n && e < t.length; e++) {
     n = n[t[e]];
    }
    return !!n;
   }
   b = w.workspace && !!w.workspace.workspaceFolders;
   E = t("workspace", "symbol", "dynamicRegistration");
   return {
    capabilities: {
     textDocumentSync: D.syncKind,
     completionProvider: {
      resolveProvider: true
     },
     hoverProvider: true,
     documentSymbolProvider: true,
     documentFormattingProvider: false
    }
   };
  });
  let k = {
   resolveRelativePath: (e, t) => {
    return u.resolve(t, e);
   }
  };
  let F = e => {
   if (b) {
    for (let t in S) {
     let n = S[t];
     let r = n["uri"];
     let i = n["name"];
     let s = new RegExp("^(?:[a-z]+:)?//", "i");
     if (e.indexOf(i) !== -1 && !e.match(s)) {
      let t = r.split(i)[0];
      let n = e.split(i);
      n.shift();
      let s = n.join(i);
      e = t + i + s;
     }
    }
   }
   if (c.startsWith(e, "file://")) {
    let t = o.default.parse(e).fsPath;
    return new Promise((e, n) => {
     a.readFile(t, "UTF-8", (t, r) => {
      t ? n("") : e(r.toString());
     });
    });
   } else if (c.startsWith(e, "vscode://")) {
    return C.sendRequest(v.type, e).then(e => {
     return e;
    }, e => {
     return e.message;
    });
   } else {
    let t = o.default.parse(e).scheme.toLowerCase();
    if (t !== "http" && t !== "https") {
     return C.sendRequest(g.type, e);
    }
   }
   if (e.indexOf("//schema.management.azure.com/") !== -1) {
    C.telemetry.logEvent({
     key: "json.schema",
     value: {
      schemaURL: e
     }
    });
   }
   let t = {
    "Accept-Encoding": "gzip, deflate"
   };
   return i.xhr({
    url: e,
    followRedirects: 5,
    headers: t
   }).then(e => {
    return e.responseText;
   }, e => {
    return Promise.reject(e.responseText || i.getErrorStatusDescription(e.status) || e.toString());
   });
  };
  t.KUBERNETES_SCHEMA_URL = "https://gist.githubusercontent.com/JPinkney/ccaf3909ef811e5657ca2e2e1fa05d76/raw/f85e51bfb67fdb99ab7653c2953b60087cc871ea/openshift_schema_all.json";
  t.KEDGE_SCHEMA_URL = "https://raw.githubusercontent.com/kedgeproject/json-schema/master/master/kedge-json-schema.json";
  t.customLanguageService = h.getLanguageService(F, k, [], e => C.sendRequest(y.type, e));
  let T = void 0;
  let _ = void 0;
  let N = null;
  let O = [];
  let P = [];
  let I = true;
  let M = [];
  let R = [];
  C.onDidChangeConfiguration(e => {
   var t = e.settings;
   i.configure(t.http && t.http.proxy, t.http && t.http.proxyStrictSSL);
   O = [];
   T = t.yaml && t.yaml.schemas;
   I = t.yaml && t.yaml.validate;
   P = [];
   R = t.yaml && t.yaml.customTags ? t.yaml.customTags : [];
   for (let e in T) {
    let t = T[e];
    let n = {
     fileMatch: Array.isArray(t) ? t : [ t ],
     url: e
    };
    P.push(n);
   }
   B();
   j();
   if (E) {
    let e = t && t.yaml && t.yaml.format && t.yaml.format.enable;
    if (e) {
     if (!N) {
      N = C.client.register(r.DocumentFormattingRequest.type, {
       documentSelector: [ {
        language: "yaml"
       } ]
      });
     }
    } else if (N) {
     N.then(e => e.dispose());
     N = null;
    }
   }
  });
  function B() {
   if (M.length === 0) {
    L().then(e => {
     M = e.schemas;
     j();
    });
   }
  }
  function L() {
   return i.xhr({
    url: "http://schemastore.org/api/json/catalog.json"
   }).then(e => {
    let t = {
     schemas: []
    };
    let n = JSON.parse(e.responseText);
    for (let e in n.schemas) {
     let r = n.schemas[e];
     if (r && r.fileMatch) {
      for (let e in r.fileMatch) {
       let n = r.fileMatch[e];
       if (n.indexOf(".yml") !== -1 || n.indexOf(".yaml") !== -1) {
        t.schemas.push({
         uri: r.url,
         fileMatch: [ n ]
        });
       }
      }
     }
    }
    return t;
   }, e => {
    throw e;
   });
  }
  C.onNotification(m.type, e => {
   _ = e;
   O = [];
   B();
   j();
  });
  function j() {
   let e = {
    validate: I,
    schemas: [],
    customTags: R
   };
   if (_) {
    for (var n in _) {
     let t = _[n];
     if (Array.isArray(t)) {
      t.forEach(t => {
       e = q(t, [ n ], null, e);
      });
     }
    }
   }
   if (P) {
    P.forEach(t => {
     let n = t.url;
     if (!n && t.schema) {
      n = t.schema.id;
     }
     if (!n && t.fileMatch) {
      n = "vscode://schemas/custom/" + encodeURIComponent(t.fileMatch.join("&"));
     }
     if (n) {
      if (n[0] === "." && A && !b) {
       n = o.default.file(s.normalize(s.join(A.fsPath, n))).toString();
      }
      e = q(n, t.fileMatch, t.schema, e);
     }
    });
   }
   if (M) {
    e.schemas = e.schemas.concat(M);
   }
   t.customLanguageService.configure(e);
   D.all().forEach(X);
  }
  function q(e, n, r, i) {
   if (e.toLowerCase().trim() === "kubernetes") {
    e = t.KUBERNETES_SCHEMA_URL;
   }
   if (e.toLowerCase().trim() === "kedge") {
    e = t.KEDGE_SCHEMA_URL;
   }
   if (r === null) {
    i.schemas.push({
     uri: e,
     fileMatch: n
    });
   } else {
    i.schemas.push({
     uri: e,
     fileMatch: n,
     schema: r
    });
   }
   if (n.constructor === Array && e === t.KUBERNETES_SCHEMA_URL) {
    n.forEach(e => {
     O.push(e);
    });
   } else if (e === t.KUBERNETES_SCHEMA_URL) {
    O.push(n);
   }
   return i;
  }
  function U(e, t) {
   for (let n in e) {
    e[n].configureSettings({
     isKubernetes: t
    });
   }
  }
  function W(e) {
   for (let t in O) {
    let n = O[t];
    let r = new p.FilePatternAssociation(n);
    if (r.matchesPattern(e.uri)) {
     return true;
    }
   }
   return false;
  }
  D.onDidChangeContent(e => {
   X(e.document);
  });
  D.onDidClose(e => {
   J(e.document);
   C.sendDiagnostics({
    uri: e.document.uri,
    diagnostics: []
   });
  });
  let z = {};
  const V = 200;
  function J(e) {
   let t = z[e.uri];
   if (t) {
    clearTimeout(t);
    delete z[e.uri];
   }
  }
  function X(e) {
   J(e);
   z[e.uri] = setTimeout(() => {
    delete z[e.uri];
    K(e);
   }, V);
  }
  function K(e) {
   if (!e) {
    return;
   }
   if (e.getText().length === 0) {
    C.sendDiagnostics({
     uri: e.uri,
     diagnostics: []
    });
    return;
   }
   let n = d.parse(e.getText(), R);
   W(e) ? U(n.documents, true) : U(n.documents, false);
   t.customLanguageService.doValidation(e, n).then(function(t) {
    let n = [];
    for (let e in t) {
     t[e].severity = 1;
     n.push(t[e]);
    }
    C.sendDiagnostics({
     uri: e.uri,
     diagnostics: l.removeDuplicatesObj(n)
    });
   }, function(e) {});
  }
  C.onDidChangeWatchedFiles(e => {
   let n = false;
   e.changes.forEach(e => {
    if (t.customLanguageService.resetSchema(e.uri)) {
     n = true;
    }
   });
   if (n) {
    D.all().forEach(K);
   }
  });
  C.onCompletion(e => {
   let n = D.get(e.textDocument.uri);
   let r = {
    items: [],
    isIncomplete: false
   };
   if (!n) {
    return Promise.resolve(r);
   }
   let i = Y(n, e.position);
   let s = i.newText;
   let a = d.parse(s);
   W(n) ? U(a.documents, true) : U(a.documents, false);
   return t.customLanguageService.doComplete(n, e.position, a);
  });
  function H(e) {
   return e === 10 || e === 13;
  }
  function Y(e, t) {
   let n = t.line;
   let r = t;
   let i = l.getLineOffsets(e.getText());
   let s = i[n];
   let a = 0;
   if (i[n + 1]) {
    a = i[n + 1];
   } else {
    a = e.getText().length;
   }
   while (a - 1 >= 0 && H(e.getText().charCodeAt(a - 1))) {
    a--;
   }
   let o = e.getText().substring(s, a);
   if (o.indexOf(":") === -1) {
    let r = "";
    let a = o.trim();
    if (a.length === 0 || a.length === 1 && a[0] === "-") {
     r = e.getText().substring(0, s + o.length) + "holder:\r\n" + e.getText().substr(i[n + 1] || e.getText().length);
    } else {
     r = e.getText().substring(0, s + o.length) + ":\r\n" + e.getText().substr(i[n + 1] || e.getText().length);
    }
    return {
     newText: r,
     newPosition: t
    };
   } else {
    r.character = r.character - 1;
    return {
     newText: e.getText(),
     newPosition: r
    };
   }
  }
  C.onCompletionResolve(e => {
   return t.customLanguageService.doResolve(e);
  });
  C.onHover(e => {
   let n = D.get(e.textDocument.uri);
   if (!n) {
    return Promise.resolve(void 0);
   }
   let r = d.parse(n.getText());
   W(n) ? U(r.documents, true) : U(r.documents, false);
   return t.customLanguageService.doHover(n, e.position, r);
  });
  C.onDocumentSymbol(e => {
   let n = D.get(e.textDocument.uri);
   if (!n) {
    return;
   }
   let r = d.parse(n.getText());
   return t.customLanguageService.findDocumentSymbols(n, r);
  });
  C.onDocumentFormatting(e => {
   let n = D.get(e.textDocument.uri);
   if (!n) {
    return;
   }
   return t.customLanguageService.doFormat(n, e.options, R);
  });
  C.listen();
 },
 "jle/": function(e, t) {
  e.exports = require("os");
 },
 k4pi: function(e, t, n) {
  "use strict";
  var r = function() {
   function e(e, t, n) {
    if (t === void 0) {
     t = null;
    }
    if (n === void 0) {
     n = false;
    }
    this.name = "YAMLException";
    this.reason = e;
    this.mark = t;
    this.message = this.toString(false);
    this.isWarning = n;
   }
   e.isInstance = function(t) {
    if (t != null && t.getClassIdentifier && typeof t.getClassIdentifier == "function") {
     for (var n = 0, r = t.getClassIdentifier(); n < r.length; n++) {
      var i = r[n];
      if (i == e.CLASS_IDENTIFIER) return true;
     }
    }
    return false;
   };
   e.prototype.getClassIdentifier = function() {
    var t = [];
    return t.concat(e.CLASS_IDENTIFIER);
   };
   e.prototype.toString = function(e) {
    if (e === void 0) {
     e = false;
    }
    var t;
    t = "JS-YAML: " + (this.reason || "(unknown reason)");
    if (!e && this.mark) {
     t += " " + this.mark.toString();
    }
    return t;
   };
   e.CLASS_IDENTIFIER = "yaml-ast-parser.YAMLException";
   return e;
  }();
  e.exports = r;
 },
 kLbW: function(e, t, n) {
  "use strict";
  n.r(t);
  function r(e, t, n) {
   var r;
   var u;
   var c;
   var l;
   var h;
   if (t) {
    l = t.offset;
    h = l + t.length;
    c = l;
    while (c > 0 && !o(e, c - 1)) {
     c--;
    }
    var f = h;
    while (f < e.length && !o(e, f)) {
     f++;
    }
    u = e.substring(c, f);
    r = s(u, 0, n);
   } else {
    u = e;
    r = 0;
    c = 0;
    l = 0;
    h = e.length;
   }
   var v = a(n, e);
   var g = false;
   var y = 0;
   var x;
   if (n.insertSpaces) {
    x = i(" ", n.tabSize || 4);
   } else {
    x = "\t";
   }
   var C = m(u, false);
   var D = false;
   function E() {
    return v + i(x, r + y);
   }
   function b() {
    var e = C.scan();
    g = false;
    while (e === d.Trivia || e === d.LineBreakTrivia) {
     g = g || e === d.LineBreakTrivia;
     e = C.scan();
    }
    D = e === d.Unknown || C.getTokenError() !== p.None;
    return e;
   }
   var w = [];
   function S(t, n, r) {
    if (!D && n < h && r > l && e.substring(n, r) !== t) {
     w.push({
      offset: n,
      length: r - n,
      content: t
     });
    }
   }
   var A = b();
   if (A !== d.EOF) {
    var k = C.getTokenOffset() + c;
    var F = i(x, r);
    S(F, c, k);
   }
   while (A !== d.EOF) {
    var T = C.getTokenOffset() + C.getTokenLength() + c;
    var _ = b();
    var N = "";
    while (!g && (_ === d.LineCommentTrivia || _ === d.BlockCommentTrivia)) {
     var O = C.getTokenOffset() + c;
     S(" ", T, O);
     T = C.getTokenOffset() + C.getTokenLength() + c;
     N = _ === d.LineCommentTrivia ? E() : "";
     _ = b();
    }
    if (_ === d.CloseBraceToken) {
     if (A !== d.OpenBraceToken) {
      y--;
      N = E();
     }
    } else if (_ === d.CloseBracketToken) {
     if (A !== d.OpenBracketToken) {
      y--;
      N = E();
     }
    } else {
     switch (A) {
     case d.OpenBracketToken:
     case d.OpenBraceToken:
      y++;
      N = E();
      break;

     case d.CommaToken:
     case d.LineCommentTrivia:
      N = E();
      break;

     case d.BlockCommentTrivia:
      if (g) {
       N = E();
      } else {
       N = " ";
      }
      break;

     case d.ColonToken:
      N = " ";
      break;

     case d.StringLiteral:
      if (_ === d.ColonToken) {
       N = "";
       break;
      }

     case d.NullKeyword:
     case d.TrueKeyword:
     case d.FalseKeyword:
     case d.NumericLiteral:
     case d.CloseBraceToken:
     case d.CloseBracketToken:
      if (_ === d.LineCommentTrivia || _ === d.BlockCommentTrivia) {
       N = " ";
      } else if (_ !== d.CommaToken && _ !== d.EOF) {
       D = true;
      }
      break;

     case d.Unknown:
      D = true;
      break;
     }
     if (g && (_ === d.LineCommentTrivia || _ === d.BlockCommentTrivia)) {
      N = E();
     }
    }
    var P = C.getTokenOffset() + c;
    S(N, T, P);
    A = _;
   }
   return w;
  }
  function i(e, t) {
   var n = "";
   for (var r = 0; r < t; r++) {
    n += e;
   }
   return n;
  }
  function s(e, t, n) {
   var r = 0;
   var i = 0;
   var s = n.tabSize || 4;
   while (r < e.length) {
    var a = e.charAt(r);
    if (a === " ") {
     i++;
    } else if (a === "\t") {
     i += s;
    } else {
     break;
    }
    r++;
   }
   return Math.floor(i / s);
  }
  function a(e, t) {
   for (var n = 0; n < t.length; n++) {
    var r = t.charAt(n);
    if (r === "\r") {
     if (n + 1 < t.length && t.charAt(n + 1) === "\n") {
      return "\r\n";
     }
     return "\r";
    } else if (r === "\n") {
     return "\n";
    }
   }
   return e && e.eol || "\n";
  }
  function o(e, t) {
   return "\r\n".indexOf(e.charAt(t)) !== -1;
  }
  function u(e, t, n) {
   return c(e, t, void 0, n);
  }
  function c(e, t, n, r, i) {
   var s = [];
   var a = w(e, s);
   var o = void 0;
   var u = void 0;
   while (t.length > 0) {
    u = t.pop();
    o = S(a, t);
    if (o === void 0 && n !== void 0) {
     if (typeof u === "string") {
      n = (A = {}, A[u] = n, A);
     } else {
      n = [ n ];
     }
    } else {
     break;
    }
   }
   if (!o) {
    if (n === void 0) {
     throw new Error("Can not delete in empty document");
    }
    return l(e, {
     offset: a ? a.offset : 0,
     length: a ? a.length : 0,
     content: JSON.stringify(n)
    }, r);
   } else if (o.type === "object" && typeof u === "string" && Array.isArray(o.children)) {
    var c = S(o, [ u ]);
    if (c !== void 0) {
     if (n === void 0) {
      if (!c.parent) {
       throw new Error("Malformed AST");
      }
      var h = o.children.indexOf(c.parent);
      var f = void 0;
      var p = c.parent.offset + c.parent.length;
      if (h > 0) {
       var d = o.children[h - 1];
       f = d.offset + d.length;
      } else {
       f = o.offset + 1;
       if (o.children.length > 1) {
        var m = o.children[1];
        p = m.offset;
       }
      }
      return l(e, {
       offset: f,
       length: p - f,
       content: ""
      }, r);
     } else {
      return l(e, {
       offset: c.offset,
       length: c.length,
       content: JSON.stringify(n)
      }, r);
     }
    } else {
     if (n === void 0) {
      return [];
     }
     var v = JSON.stringify(u) + ": " + JSON.stringify(n);
     var g = i ? i(o.children.map(function(e) {
      return e.children[0].value;
     })) : o.children.length;
     var y = void 0;
     if (g > 0) {
      var d = o.children[g - 1];
      y = {
       offset: d.offset + d.length,
       length: 0,
       content: "," + v
      };
     } else if (o.children.length === 0) {
      y = {
       offset: o.offset + 1,
       length: 0,
       content: v
      };
     } else {
      y = {
       offset: o.offset + 1,
       length: 0,
       content: v + ","
      };
     }
     return l(e, y, r);
    }
   } else if (o.type === "array" && typeof u === "number" && Array.isArray(o.children)) {
    var x = u;
    if (x === -1) {
     var v = "" + JSON.stringify(n);
     var y = void 0;
     if (o.children.length === 0) {
      y = {
       offset: o.offset + 1,
       length: 0,
       content: v
      };
     } else {
      var d = o.children[o.children.length - 1];
      y = {
       offset: d.offset + d.length,
       length: 0,
       content: "," + v
      };
     }
     return l(e, y, r);
    } else {
     if (n === void 0 && o.children.length >= 0) {
      var C = u;
      var D = o.children[C];
      var y = void 0;
      if (o.children.length === 1) {
       y = {
        offset: o.offset + 1,
        length: o.length - 2,
        content: ""
       };
      } else if (o.children.length - 1 === C) {
       var d = o.children[C - 1];
       var E = d.offset + d.length;
       var b = o.offset + o.length;
       y = {
        offset: E,
        length: b - 2 - E,
        content: ""
       };
      } else {
       y = {
        offset: D.offset,
        length: o.children[C + 1].offset - D.offset,
        content: ""
       };
      }
      return l(e, y, r);
     } else {
      throw new Error("Array modification not supported yet");
     }
    }
   } else {
    throw new Error("Can not add " + (typeof u !== "number" ? "index" : "property") + " to parent of type " + o.type);
   }
   var A;
  }
  function l(e, t, n) {
   var i = h(e, t);
   var s = t.offset;
   var a = t.offset + t.content.length;
   if (t.length === 0 || t.content.length === 0) {
    while (s > 0 && !o(i, s - 1)) {
     s--;
    }
    while (a < i.length && !o(i, a)) {
     a++;
    }
   }
   var u = r(i, {
    offset: s,
    length: a - s
   }, n);
   for (var c = u.length - 1; c >= 0; c--) {
    var l = u[c];
    i = h(i, l);
    s = Math.min(s, l.offset);
    a = Math.max(a, l.offset + l.length);
    a += l.content.length - l.length;
   }
   var f = e.length - (i.length - a) - s;
   return [ {
    offset: s,
    length: f,
    content: i.substring(s, a)
   } ];
  }
  function h(e, t) {
   return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
  }
  function f(e, t) {
   return "\r\n \t".indexOf(e.charAt(t)) !== -1;
  }
  n.d(t, "ScanError", function() {
   return p;
  });
  n.d(t, "SyntaxKind", function() {
   return d;
  });
  n.d(t, "createScanner", function() {
   return m;
  });
  n.d(t, "stripComments", function() {
   return x;
  });
  n.d(t, "ParseErrorCode", function() {
   return C;
  });
  n.d(t, "getLocation", function() {
   return E;
  });
  n.d(t, "parse", function() {
   return b;
  });
  n.d(t, "parseTree", function() {
   return w;
  });
  n.d(t, "findNodeAtLocation", function() {
   return S;
  });
  n.d(t, "getNodeValue", function() {
   return A;
  });
  n.d(t, "visit", function() {
   return k;
  });
  n.d(t, "format", function() {
   return F;
  });
  n.d(t, "modify", function() {
   return T;
  });
  n.d(t, "applyEdits", function() {
   return _;
  });
  var p;
  (function(e) {
   e[e["None"] = 0] = "None";
   e[e["UnexpectedEndOfComment"] = 1] = "UnexpectedEndOfComment";
   e[e["UnexpectedEndOfString"] = 2] = "UnexpectedEndOfString";
   e[e["UnexpectedEndOfNumber"] = 3] = "UnexpectedEndOfNumber";
   e[e["InvalidUnicode"] = 4] = "InvalidUnicode";
   e[e["InvalidEscapeCharacter"] = 5] = "InvalidEscapeCharacter";
   e[e["InvalidCharacter"] = 6] = "InvalidCharacter";
  })(p || (p = {}));
  var d;
  (function(e) {
   e[e["Unknown"] = 0] = "Unknown";
   e[e["OpenBraceToken"] = 1] = "OpenBraceToken";
   e[e["CloseBraceToken"] = 2] = "CloseBraceToken";
   e[e["OpenBracketToken"] = 3] = "OpenBracketToken";
   e[e["CloseBracketToken"] = 4] = "CloseBracketToken";
   e[e["CommaToken"] = 5] = "CommaToken";
   e[e["ColonToken"] = 6] = "ColonToken";
   e[e["NullKeyword"] = 7] = "NullKeyword";
   e[e["TrueKeyword"] = 8] = "TrueKeyword";
   e[e["FalseKeyword"] = 9] = "FalseKeyword";
   e[e["StringLiteral"] = 10] = "StringLiteral";
   e[e["NumericLiteral"] = 11] = "NumericLiteral";
   e[e["LineCommentTrivia"] = 12] = "LineCommentTrivia";
   e[e["BlockCommentTrivia"] = 13] = "BlockCommentTrivia";
   e[e["LineBreakTrivia"] = 14] = "LineBreakTrivia";
   e[e["Trivia"] = 15] = "Trivia";
   e[e["EOF"] = 16] = "EOF";
  })(d || (d = {}));
  function m(e, t) {
   if (t === void 0) {
    t = false;
   }
   var n = 0, r = e.length, i = "", s = 0, a = d.Unknown, o = p.None;
   function u(t, r) {
    var i = 0;
    var s = 0;
    while (i < t || !r) {
     var a = e.charCodeAt(n);
     if (a >= 48 && a <= 57) {
      s = s * 16 + a - 48;
     } else if (a >= 65 && a <= 70) {
      s = s * 16 + a - 65 + 10;
     } else if (a >= 97 && a <= 102) {
      s = s * 16 + a - 97 + 10;
     } else {
      break;
     }
     n++;
     i++;
    }
    if (i < t) {
     s = -1;
    }
    return s;
   }
   function c(e) {
    n = e;
    i = "";
    s = 0;
    a = d.Unknown;
    o = p.None;
   }
   function l() {
    var t = n;
    if (e.charCodeAt(n) === 48) {
     n++;
    } else {
     n++;
     while (n < e.length && y(e.charCodeAt(n))) {
      n++;
     }
    }
    if (n < e.length && e.charCodeAt(n) === 46) {
     n++;
     if (n < e.length && y(e.charCodeAt(n))) {
      n++;
      while (n < e.length && y(e.charCodeAt(n))) {
       n++;
      }
     } else {
      o = p.UnexpectedEndOfNumber;
      return e.substring(t, n);
     }
    }
    var r = n;
    if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101)) {
     n++;
     if (n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) {
      n++;
     }
     if (n < e.length && y(e.charCodeAt(n))) {
      n++;
      while (n < e.length && y(e.charCodeAt(n))) {
       n++;
      }
      r = n;
     } else {
      o = p.UnexpectedEndOfNumber;
     }
    }
    return e.substring(t, r);
   }
   function h() {
    var t = "", i = n;
    while (true) {
     if (n >= r) {
      t += e.substring(i, n);
      o = p.UnexpectedEndOfString;
      break;
     }
     var s = e.charCodeAt(n);
     if (s === 34) {
      t += e.substring(i, n);
      n++;
      break;
     }
     if (s === 92) {
      t += e.substring(i, n);
      n++;
      if (n >= r) {
       o = p.UnexpectedEndOfString;
       break;
      }
      s = e.charCodeAt(n++);
      switch (s) {
      case 34:
       t += '"';
       break;

      case 92:
       t += "\\";
       break;

      case 47:
       t += "/";
       break;

      case 98:
       t += "\b";
       break;

      case 102:
       t += "\f";
       break;

      case 110:
       t += "\n";
       break;

      case 114:
       t += "\r";
       break;

      case 116:
       t += "\t";
       break;

      case 117:
       var a = u(4, true);
       if (a >= 0) {
        t += String.fromCharCode(a);
       } else {
        o = p.InvalidUnicode;
       }
       break;

      default:
       o = p.InvalidEscapeCharacter;
      }
      i = n;
      continue;
     }
     if (s >= 0 && s <= 31) {
      if (g(s)) {
       t += e.substring(i, n);
       o = p.UnexpectedEndOfString;
       break;
      } else {
       o = p.InvalidCharacter;
      }
     }
     n++;
    }
    return t;
   }
   function f() {
    i = "";
    o = p.None;
    s = n;
    if (n >= r) {
     s = r;
     return a = d.EOF;
    }
    var t = e.charCodeAt(n);
    if (v(t)) {
     do {
      n++;
      i += String.fromCharCode(t);
      t = e.charCodeAt(n);
     } while (v(t));
     return a = d.Trivia;
    }
    if (g(t)) {
     n++;
     i += String.fromCharCode(t);
     if (t === 13 && e.charCodeAt(n) === 10) {
      n++;
      i += "\n";
     }
     return a = d.LineBreakTrivia;
    }
    switch (t) {
    case 123:
     n++;
     return a = d.OpenBraceToken;

    case 125:
     n++;
     return a = d.CloseBraceToken;

    case 91:
     n++;
     return a = d.OpenBracketToken;

    case 93:
     n++;
     return a = d.CloseBracketToken;

    case 58:
     n++;
     return a = d.ColonToken;

    case 44:
     n++;
     return a = d.CommaToken;

    case 34:
     n++;
     i = h();
     return a = d.StringLiteral;

    case 47:
     var u = n - 1;
     if (e.charCodeAt(n + 1) === 47) {
      n += 2;
      while (n < r) {
       if (g(e.charCodeAt(n))) {
        break;
       }
       n++;
      }
      i = e.substring(u, n);
      return a = d.LineCommentTrivia;
     }
     if (e.charCodeAt(n + 1) === 42) {
      n += 2;
      var c = false;
      while (n < r) {
       var f = e.charCodeAt(n);
       if (f === 42 && n + 1 < r && e.charCodeAt(n + 1) === 47) {
        n += 2;
        c = true;
        break;
       }
       n++;
      }
      if (!c) {
       n++;
       o = p.UnexpectedEndOfComment;
      }
      i = e.substring(u, n);
      return a = d.BlockCommentTrivia;
     }
     i += String.fromCharCode(t);
     n++;
     return a = d.Unknown;

    case 45:
     i += String.fromCharCode(t);
     n++;
     if (n === r || !y(e.charCodeAt(n))) {
      return a = d.Unknown;
     }

    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
     i += l();
     return a = d.NumericLiteral;

    default:
     while (n < r && m(t)) {
      n++;
      t = e.charCodeAt(n);
     }
     if (s !== n) {
      i = e.substring(s, n);
      switch (i) {
      case "true":
       return a = d.TrueKeyword;

      case "false":
       return a = d.FalseKeyword;

      case "null":
       return a = d.NullKeyword;
      }
      return a = d.Unknown;
     }
     i += String.fromCharCode(t);
     n++;
     return a = d.Unknown;
    }
   }
   function m(e) {
    if (v(e) || g(e)) {
     return false;
    }
    switch (e) {
    case 125:
    case 93:
    case 123:
    case 91:
    case 34:
    case 58:
    case 44:
     return false;
    }
    return true;
   }
   function x() {
    var e;
    do {
     e = f();
    } while (e >= d.LineCommentTrivia && e <= d.Trivia);
    return e;
   }
   return {
    setPosition: c,
    getPosition: function() {
     return n;
    },
    scan: t ? x : f,
    getToken: function() {
     return a;
    },
    getTokenValue: function() {
     return i;
    },
    getTokenOffset: function() {
     return s;
    },
    getTokenLength: function() {
     return n - s;
    },
    getTokenError: function() {
     return o;
    }
   };
  }
  function v(e) {
   return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e === 5760 || e >= 8192 && e <= 8203 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
  }
  function g(e) {
   return e === 10 || e === 13 || e === 8232 || e === 8233;
  }
  function y(e) {
   return e >= 48 && e <= 57;
  }
  function x(e, t) {
   var n = m(e), r = [], i, s = 0, a;
   do {
    a = n.getPosition();
    i = n.scan();
    switch (i) {
    case d.LineCommentTrivia:
    case d.BlockCommentTrivia:
    case d.EOF:
     if (s !== a) {
      r.push(e.substring(s, a));
     }
     if (t !== void 0) {
      r.push(n.getTokenValue().replace(/[^\r\n]/g, t));
     }
     s = n.getPosition();
     break;
    }
   } while (i !== d.EOF);
   return r.join("");
  }
  var C;
  (function(e) {
   e[e["InvalidSymbol"] = 0] = "InvalidSymbol";
   e[e["InvalidNumberFormat"] = 1] = "InvalidNumberFormat";
   e[e["PropertyNameExpected"] = 2] = "PropertyNameExpected";
   e[e["ValueExpected"] = 3] = "ValueExpected";
   e[e["ColonExpected"] = 4] = "ColonExpected";
   e[e["CommaExpected"] = 5] = "CommaExpected";
   e[e["CloseBraceExpected"] = 6] = "CloseBraceExpected";
   e[e["CloseBracketExpected"] = 7] = "CloseBracketExpected";
   e[e["EndOfFileExpected"] = 8] = "EndOfFileExpected";
   e[e["InvalidCommentToken"] = 9] = "InvalidCommentToken";
   e[e["UnexpectedEndOfComment"] = 10] = "UnexpectedEndOfComment";
   e[e["UnexpectedEndOfString"] = 11] = "UnexpectedEndOfString";
   e[e["UnexpectedEndOfNumber"] = 12] = "UnexpectedEndOfNumber";
   e[e["InvalidUnicode"] = 13] = "InvalidUnicode";
   e[e["InvalidEscapeCharacter"] = 14] = "InvalidEscapeCharacter";
   e[e["InvalidCharacter"] = 15] = "InvalidCharacter";
  })(C || (C = {}));
  function D(e) {
   switch (typeof e) {
   case "boolean":
    return "boolean";

   case "number":
    return "number";

   case "string":
    return "string";

   default:
    return "null";
   }
  }
  function E(e, t) {
   var n = [];
   var r = new Object();
   var i = void 0;
   var s = {
    value: {},
    offset: 0,
    length: 0,
    type: "object"
   };
   var a = false;
   function o(e, t, n, r) {
    s.value = e;
    s.offset = t;
    s.length = n;
    s.type = r;
    s.columnOffset = void 0;
    i = s;
   }
   try {
    k(e, {
     onObjectBegin: function(e, s) {
      if (t <= e) {
       throw r;
      }
      i = void 0;
      a = t > e;
      n.push("");
     },
     onObjectProperty: function(e, i, s) {
      if (t < i) {
       throw r;
      }
      o(e, i, s, "property");
      n[n.length - 1] = e;
      if (t <= i + s) {
       throw r;
      }
     },
     onObjectEnd: function(e, s) {
      if (t <= e) {
       throw r;
      }
      i = void 0;
      n.pop();
     },
     onArrayBegin: function(e, s) {
      if (t <= e) {
       throw r;
      }
      i = void 0;
      n.push(0);
     },
     onArrayEnd: function(e, s) {
      if (t <= e) {
       throw r;
      }
      i = void 0;
      n.pop();
     },
     onLiteralValue: function(e, n, i) {
      if (t < n) {
       throw r;
      }
      o(e, n, i, D(e));
      if (t <= n + i) {
       throw r;
      }
     },
     onSeparator: function(e, s, o) {
      if (t <= s) {
       throw r;
      }
      if (e === ":" && i && i.type === "property") {
       i.columnOffset = s;
       a = false;
       i = void 0;
      } else if (e === ",") {
       var u = n[n.length - 1];
       if (typeof u === "number") {
        n[n.length - 1] = u + 1;
       } else {
        a = true;
        n[n.length - 1] = "";
       }
       i = void 0;
      }
     }
    });
   } catch (e) {
    if (e !== r) {
     throw e;
    }
   }
   return {
    path: n,
    previousNode: i,
    isAtPropertyKey: a,
    matches: function(e) {
     var t = 0;
     for (var r = 0; t < e.length && r < n.length; r++) {
      if (e[t] === n[r] || e[t] === "*") {
       t++;
      } else if (e[t] !== "**") {
       return false;
      }
     }
     return t === e.length;
    }
   };
  }
  function b(e, t, n) {
   if (t === void 0) {
    t = [];
   }
   var r = null;
   var i = [];
   var s = [];
   function a(e) {
    if (Array.isArray(i)) {
     i.push(e);
    } else if (r) {
     i[r] = e;
    }
   }
   var o = {
    onObjectBegin: function() {
     var e = {};
     a(e);
     s.push(i);
     i = e;
     r = null;
    },
    onObjectProperty: function(e) {
     r = e;
    },
    onObjectEnd: function() {
     i = s.pop();
    },
    onArrayBegin: function() {
     var e = [];
     a(e);
     s.push(i);
     i = e;
     r = null;
    },
    onArrayEnd: function() {
     i = s.pop();
    },
    onLiteralValue: a,
    onError: function(e, n, r) {
     t.push({
      error: e,
      offset: n,
      length: r
     });
    }
   };
   k(e, o, n);
   return i[0];
  }
  function w(e, t, n) {
   if (t === void 0) {
    t = [];
   }
   var r = {
    type: "array",
    offset: -1,
    length: -1,
    children: []
   };
   function i(e) {
    if (r.type === "property") {
     r.length = e - r.offset;
     r = r.parent;
    }
   }
   function s(e) {
    r.children.push(e);
    return e;
   }
   var a = {
    onObjectBegin: function(e) {
     r = s({
      type: "object",
      offset: e,
      length: -1,
      parent: r,
      children: []
     });
    },
    onObjectProperty: function(e, t, n) {
     r = s({
      type: "property",
      offset: t,
      length: -1,
      parent: r,
      children: []
     });
     r.children.push({
      type: "string",
      value: e,
      offset: t,
      length: n,
      parent: r
     });
    },
    onObjectEnd: function(e, t) {
     r.length = e + t - r.offset;
     r = r.parent;
     i(e + t);
    },
    onArrayBegin: function(e, t) {
     r = s({
      type: "array",
      offset: e,
      length: -1,
      parent: r,
      children: []
     });
    },
    onArrayEnd: function(e, t) {
     r.length = e + t - r.offset;
     r = r.parent;
     i(e + t);
    },
    onLiteralValue: function(e, t, n) {
     s({
      type: D(e),
      offset: t,
      length: n,
      parent: r,
      value: e
     });
     i(t + n);
    },
    onSeparator: function(e, t, n) {
     if (r.type === "property") {
      if (e === ":") {
       r.columnOffset = t;
      } else if (e === ",") {
       i(t);
      }
     }
    },
    onError: function(e, n, r) {
     t.push({
      error: e,
      offset: n,
      length: r
     });
    }
   };
   k(e, a, n);
   var o = r.children[0];
   if (o) {
    delete o.parent;
   }
   return o;
  }
  function S(e, t) {
   if (!e) {
    return void 0;
   }
   var n = e;
   for (var r = 0, i = t; r < i.length; r++) {
    var s = i[r];
    if (typeof s === "string") {
     if (n.type !== "object" || !Array.isArray(n.children)) {
      return void 0;
     }
     var a = false;
     for (var o = 0, u = n.children; o < u.length; o++) {
      var c = u[o];
      if (Array.isArray(c.children) && c.children[0].value === s) {
       n = c.children[1];
       a = true;
       break;
      }
     }
     if (!a) {
      return void 0;
     }
    } else {
     var l = s;
     if (n.type !== "array" || l < 0 || !Array.isArray(n.children) || l >= n.children.length) {
      return void 0;
     }
     n = n.children[l];
    }
   }
   return n;
  }
  function A(e) {
   if (e.type === "array") {
    return e.children.map(A);
   } else if (e.type === "object") {
    var t = Object.create(null);
    for (var n = 0, r = e.children; n < r.length; n++) {
     var i = r[n];
     t[i.children[0].value] = A(i.children[1]);
    }
    return t;
   }
   return e.value;
  }
  function k(e, t, n) {
   var r = m(e, false);
   function i(e) {
    return e ? function() {
     return e(r.getTokenOffset(), r.getTokenLength());
    } : function() {
     return true;
    };
   }
   function s(e) {
    return e ? function(t) {
     return e(t, r.getTokenOffset(), r.getTokenLength());
    } : function() {
     return true;
    };
   }
   var a = i(t.onObjectBegin), o = s(t.onObjectProperty), u = i(t.onObjectEnd), c = i(t.onArrayBegin), l = i(t.onArrayEnd), h = s(t.onLiteralValue), f = s(t.onSeparator), v = i(t.onComment), g = s(t.onError);
   var y = n && n.disallowComments;
   var x = n && n.allowTrailingComma;
   function D() {
    while (true) {
     var e = r.scan();
     switch (r.getTokenError()) {
     case p.InvalidUnicode:
      E(C.InvalidUnicode);
      break;

     case p.InvalidEscapeCharacter:
      E(C.InvalidEscapeCharacter);
      break;

     case p.UnexpectedEndOfNumber:
      E(C.UnexpectedEndOfNumber);
      break;

     case p.UnexpectedEndOfComment:
      if (!y) {
       E(C.UnexpectedEndOfComment);
      }
      break;

     case p.UnexpectedEndOfString:
      E(C.UnexpectedEndOfString);
      break;

     case p.InvalidCharacter:
      E(C.InvalidCharacter);
      break;
     }
     switch (e) {
     case d.LineCommentTrivia:
     case d.BlockCommentTrivia:
      if (y) {
       E(C.InvalidCommentToken);
      } else {
       v();
      }
      break;

     case d.Unknown:
      E(C.InvalidSymbol);
      break;

     case d.Trivia:
     case d.LineBreakTrivia:
      break;

     default:
      return e;
     }
    }
   }
   function E(e, t, n) {
    if (t === void 0) {
     t = [];
    }
    if (n === void 0) {
     n = [];
    }
    g(e);
    if (t.length + n.length > 0) {
     var i = r.getToken();
     while (i !== d.EOF) {
      if (t.indexOf(i) !== -1) {
       D();
       break;
      } else if (n.indexOf(i) !== -1) {
       break;
      }
      i = D();
     }
    }
   }
   function b(e) {
    var t = r.getTokenValue();
    if (e) {
     h(t);
    } else {
     o(t);
    }
    D();
    return true;
   }
   function w() {
    switch (r.getToken()) {
    case d.NumericLiteral:
     var e = 0;
     try {
      e = JSON.parse(r.getTokenValue());
      if (typeof e !== "number") {
       E(C.InvalidNumberFormat);
       e = 0;
      }
     } catch (e) {
      E(C.InvalidNumberFormat);
     }
     h(e);
     break;

    case d.NullKeyword:
     h(null);
     break;

    case d.TrueKeyword:
     h(true);
     break;

    case d.FalseKeyword:
     h(false);
     break;

    default:
     return false;
    }
    D();
    return true;
   }
   function S() {
    if (r.getToken() !== d.StringLiteral) {
     E(C.PropertyNameExpected, [], [ d.CloseBraceToken, d.CommaToken ]);
     return false;
    }
    b(false);
    if (r.getToken() === d.ColonToken) {
     f(":");
     D();
     if (!F()) {
      E(C.ValueExpected, [], [ d.CloseBraceToken, d.CommaToken ]);
     }
    } else {
     E(C.ColonExpected, [], [ d.CloseBraceToken, d.CommaToken ]);
    }
    return true;
   }
   function A() {
    a();
    D();
    var e = false;
    while (r.getToken() !== d.CloseBraceToken && r.getToken() !== d.EOF) {
     if (r.getToken() === d.CommaToken) {
      if (!e) {
       E(C.ValueExpected, [], []);
      }
      f(",");
      D();
      if (r.getToken() === d.CloseBraceToken && x) {
       break;
      }
     } else if (e) {
      E(C.CommaExpected, [], []);
     }
     if (!S()) {
      E(C.ValueExpected, [], [ d.CloseBraceToken, d.CommaToken ]);
     }
     e = true;
    }
    u();
    if (r.getToken() !== d.CloseBraceToken) {
     E(C.CloseBraceExpected, [ d.CloseBraceToken ], []);
    } else {
     D();
    }
    return true;
   }
   function k() {
    c();
    D();
    var e = false;
    while (r.getToken() !== d.CloseBracketToken && r.getToken() !== d.EOF) {
     if (r.getToken() === d.CommaToken) {
      if (!e) {
       E(C.ValueExpected, [], []);
      }
      f(",");
      D();
      if (r.getToken() === d.CloseBracketToken && x) {
       break;
      }
     } else if (e) {
      E(C.CommaExpected, [], []);
     }
     if (!F()) {
      E(C.ValueExpected, [], [ d.CloseBracketToken, d.CommaToken ]);
     }
     e = true;
    }
    l();
    if (r.getToken() !== d.CloseBracketToken) {
     E(C.CloseBracketExpected, [ d.CloseBracketToken ], []);
    } else {
     D();
    }
    return true;
   }
   function F() {
    switch (r.getToken()) {
    case d.OpenBracketToken:
     return k();

    case d.OpenBraceToken:
     return A();

    case d.StringLiteral:
     return b(true);

    default:
     return w();
    }
   }
   D();
   if (r.getToken() === d.EOF) {
    return true;
   }
   if (!F()) {
    E(C.ValueExpected, [], []);
    return false;
   }
   if (r.getToken() !== d.EOF) {
    E(C.EndOfFileExpected, [], []);
   }
   return true;
  }
  function F(e, t, n) {
   return r(e, t, n);
  }
  function T(e, t, n, r) {
   return c(e, t, n, r.formattingOptions, r.getInsertionIndex);
  }
  function _(e, t) {
   for (var n = t.length - 1; n >= 0; n--) {
    e = h(e, t[n]);
   }
   return e;
  }
 },
 lnuX: function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var i = n("Undm");
  var s;
  (function(e) {
   e.ParseError = -32700;
   e.InvalidRequest = -32600;
   e.MethodNotFound = -32601;
   e.InvalidParams = -32602;
   e.InternalError = -32603;
   e.serverErrorStart = -32099;
   e.serverErrorEnd = -32e3;
   e.ServerNotInitialized = -32002;
   e.UnknownErrorCode = -32001;
   e.RequestCancelled = -32800;
   e.MessageWriteError = 1;
   e.MessageReadError = 2;
  })(s = t.ErrorCodes || (t.ErrorCodes = {}));
  var a = function(e) {
   r(t, e);
   function t(n, r, a) {
    var o = e.call(this, r) || this;
    o.code = i.number(n) ? n : s.UnknownErrorCode;
    o.data = a;
    Object.setPrototypeOf(o, t.prototype);
    return o;
   }
   t.prototype.toJson = function() {
    return {
     code: this.code,
     message: this.message,
     data: this.data
    };
   };
   return t;
  }(Error);
  t.ResponseError = a;
  var o = function() {
   function e(e, t) {
    this._method = e;
    this._numberOfParams = t;
   }
   Object.defineProperty(e.prototype, "method", {
    get: function() {
     return this._method;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "numberOfParams", {
    get: function() {
     return this._numberOfParams;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  t.AbstractMessageType = o;
  var u = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 0) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.RequestType0 = u;
  var c = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.RequestType = c;
  var l = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.RequestType1 = l;
  var h = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 2) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.RequestType2 = h;
  var f = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 3) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.RequestType3 = f;
  var p = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 4) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.RequestType4 = p;
  var d = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 5) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.RequestType5 = d;
  var m = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 6) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.RequestType6 = m;
  var v = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 7) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.RequestType7 = v;
  var g = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 8) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.RequestType8 = g;
  var y = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 9) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.RequestType9 = y;
  var x = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.NotificationType = x;
  var C = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 0) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.NotificationType0 = C;
  var D = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.NotificationType1 = D;
  var E = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 2) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.NotificationType2 = E;
  var b = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 3) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.NotificationType3 = b;
  var w = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 4) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.NotificationType4 = w;
  var S = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 5) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.NotificationType5 = S;
  var A = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 6) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.NotificationType6 = A;
  var k = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 7) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.NotificationType7 = k;
  var F = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 8) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.NotificationType8 = F;
  var T = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 9) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(o);
  t.NotificationType9 = T;
  function _(e) {
   var t = e;
   return t && i.string(t.method) && (i.string(t.id) || i.number(t.id));
  }
  t.isRequestMessage = _;
  function N(e) {
   var t = e;
   return t && i.string(t.method) && e.id === void 0;
  }
  t.isNotificationMessage = N;
  function O(e) {
   var t = e;
   return t && (t.result !== void 0 || !!t.error) && (i.string(t.id) || i.number(t.id) || t.id === null);
  }
  t.isResponseMessage = O;
 },
 m2cu: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("Z6Ss");
  const i = n("EoxW");
  const s = i.loadMessageBundle();
  const a = n("7aWl");
  const o = n("3wk8");
  const u = n("yjQg");
  class c extends r.JSONDocument {
   constructor(e) {
    super(null, []);
    this.getNodeByIndent = ((e, t, n) => {
     const {line: r, column: i} = u.getPosition(t, this.lines);
     const s = n.getChildNodes();
     function a(t) {
      for (var n = 0; n < t.length; n++) {
       var s = t[n];
       const {line: o, column: c} = u.getPosition(s.start, e);
       if (c > i) {
        return null;
       }
       const l = s.getChildNodes();
       const h = a(l);
       if (h) {
        return h;
       }
       if (o == r) {
        return s;
       }
       if (o > r) {
        n - 1 >= 0 ? t[n - 1] : s;
       }
      }
      return t[t.length - 1];
     }
     return a(s) || n;
    });
    this.lines = e;
    this.root = null;
    this.errors = [];
    this.warnings = [];
   }
   getSchemas(e, t, n) {
    let r = [];
    t.validate(e, r, n.start);
    return r;
   }
   getNodeFromOffset(e) {
    return this.getNodeFromOffsetEndInclusive(e);
   }
  }
  t.SingleYAMLDocument = c;
  function l(e, t) {
   if (!t) {
    return;
   }
   switch (t.kind) {
   case a.Kind.MAP:
    {
     const n = t;
     const i = new r.ObjectASTNode(e, null, t.startPosition, t.endPosition);
     i.addProperty;
     for (const e of n.mappings) {
      i.addProperty(l(i, e));
     }
     return i;
    }

   case a.Kind.MAPPING:
    {
     const n = t;
     const i = n.key;
     const s = new r.StringASTNode(null, null, true, i.startPosition, i.endPosition);
     s.value = i.value;
     const a = new r.PropertyASTNode(e, s);
     a.end = n.endPosition;
     const o = n.value ? l(a, n.value) : new r.NullASTNode(e, i.value, n.endPosition, n.endPosition);
     o.location = i.value;
     a.setValue(o);
     return a;
    }

   case a.Kind.SEQ:
    {
     const i = t;
     const s = new r.ArrayASTNode(e, null, i.startPosition, i.endPosition);
     let a = 0;
     for (const t of i.items) {
      if (t === null && a === i.items.length - 1) {
       break;
      }
      var n = t === null ? new r.NullASTNode(e, null, i.endPosition, i.endPosition) : l(s, t);
      n.location = a++;
      s.addItem(n);
     }
     return s;
    }

   case a.Kind.SCALAR:
    {
     const n = t;
     const i = a.determineScalarType(n);
     const s = null;
     const o = n.value;
     let u = [ "y", "Y", "yes", "Yes", "YES", "n", "N", "no", "No", "NO", "on", "On", "ON", "off", "Off", "OFF" ];
     if (u.indexOf(o.toString()) !== -1) {
      return new r.BooleanASTNode(e, s, o, t.startPosition, t.endPosition);
     }
     switch (i) {
     case a.ScalarType.null:
      {
       return new r.StringASTNode(e, s, false, n.startPosition, n.endPosition);
      }

     case a.ScalarType.bool:
      {
       return new r.BooleanASTNode(e, s, a.parseYamlBoolean(o), t.startPosition, t.endPosition);
      }

     case a.ScalarType.int:
      {
       const n = new r.NumberASTNode(e, s, t.startPosition, t.endPosition);
       n.value = a.parseYamlInteger(o);
       n.isInteger = true;
       return n;
      }

     case a.ScalarType.float:
      {
       const n = new r.NumberASTNode(e, s, t.startPosition, t.endPosition);
       n.value = a.parseYamlFloat(o);
       n.isInteger = false;
       return n;
      }

     case a.ScalarType.string:
      {
       const n = new r.StringASTNode(e, s, false, t.startPosition, t.endPosition);
       n.value = t.value;
       return n;
      }
     }
     break;
    }

   case a.Kind.ANCHOR_REF:
    {
     const n = t.value;
     return l(e, n) || new r.NullASTNode(e, null, t.startPosition, t.endPosition);
    }

   case a.Kind.INCLUDE_REF:
    {
     const n = new r.StringASTNode(e, null, false, t.startPosition, t.endPosition);
     n.value = t.value;
     return n;
    }
   }
  }
  function h(e) {
   return {
    message: `${e.reason}`,
    location: {
     start: e.mark.position,
     end: e.mark.position + e.mark.column,
     code: r.ErrorCode.Undefined
    }
   };
  }
  function f(e, t, n) {
   let i = new c(t);
   i.root = l(null, e);
   if (!i.root) {
    i.errors.push({
     message: s("Invalid symbol", "Expected a YAML object, array or literal"),
     code: r.ErrorCode.Undefined,
     location: {
      start: e.startPosition,
      end: e.endPosition
     }
    });
   }
   const a = "duplicate key";
   let o = function(e, t) {
    let n = h(e);
    let r = n.location.start;
    let i = n.location.end;
    if (e.reason === a && t.substring(r, i).startsWith("<<")) {
     return false;
    }
    return true;
   };
   const u = e.errors.filter(e => e.reason !== a && !e.isWarning).map(e => h(e));
   const f = e.errors.filter(e => e.reason === a && o(e, n) || e.isWarning).map(e => h(e));
   u.forEach(e => i.errors.push(e));
   f.forEach(e => i.warnings.push(e));
   return i;
  }
  class p {
   constructor(e) {
    this.documents = e;
    this.errors = [];
    this.warnings = [];
   }
  }
  t.YAMLDocument = p;
  function d(e, t = []) {
   const n = u.getLineStartPositions(e);
   const r = [];
   let i = o.Schema.create(t.map(e => {
    const t = e.split(" ");
    return new o.Type(t[0], {
     kind: t[1] || "scalar"
    });
   }));
   t.map(e => {
    const t = e.split(" ");
    i.compiledTypeMap[t[0]] = new o.Type(t[0], {
     kind: t[1] || "scalar"
    });
   });
   let s = {
    schema: i
   };
   a.loadAll(e, e => r.push(e), s);
   return new p(r.map(t => f(t, n, e)));
  }
  t.parse = d;
 },
 mF9P: function(e, t, n) {
  "use strict";
  var r = n("7Nz6");
  e.exports = new r.Schema({
   include: [ n("ReB3") ],
   implicit: [ n("aCUO"), n("VhsX"), n("9lQd"), n("BSzB") ]
  });
 },
 mWcC: function(e, t, n) {
  "use strict";
  var r = n("cYFF");
  function i(e) {
   if (null === e) {
    return false;
   }
   if (0 === e.length) {
    return false;
   }
   var t = e, n = /\/([gim]*)$/.exec(e), r = "";
   if ("/" === t[0]) {
    if (n) {
     r = n[1];
    }
    if (r.length > 3) {
     return false;
    }
    if (t[t.length - r.length - 1] !== "/") {
     return false;
    }
    t = t.slice(1, t.length - r.length - 1);
   }
   try {
    var i = new RegExp(t, r);
    return true;
   } catch (e) {
    return false;
   }
  }
  function s(e) {
   var t = e, n = /\/([gim]*)$/.exec(e), r = "";
   if ("/" === t[0]) {
    if (n) {
     r = n[1];
    }
    t = t.slice(1, t.length - r.length - 1);
   }
   return new RegExp(t, r);
  }
  function a(e) {
   var t = "/" + e.source + "/";
   if (e.global) {
    t += "g";
   }
   if (e.multiline) {
    t += "m";
   }
   if (e.ignoreCase) {
    t += "i";
   }
   return t;
  }
  function o(e) {
   return "[object RegExp]" === Object.prototype.toString.call(e);
  }
  e.exports = new r.Type("tag:yaml.org,2002:js/regexp", {
   kind: "scalar",
   resolve: i,
   construct: s,
   predicate: o,
   represent: a
  });
 },
 "mw/K": function(e, t) {
  e.exports = require("fs");
 },
 n9Vd: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("Qs2e");
  var i = n("NW/o");
  var s = n("9+ej");
  function a(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n;
   var a = new Promise(function(e, t) {
    n = e;
   });
   return new Promise(function(o, u) {
    var c = r.createServer(function(e) {
     c.close();
     n([ new i.SocketMessageReader(e, t), new s.SocketMessageWriter(e, t) ]);
    });
    c.on("error", u);
    c.listen(e, "127.0.0.1", function() {
     c.removeListener("error", u);
     o({
      onConnected: function() {
       return a;
      }
     });
    });
   });
  }
  t.createClientSocketTransport = a;
  function o(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n = r.createConnection(e, "127.0.0.1");
   return [ new i.SocketMessageReader(n, t), new s.SocketMessageWriter(n, t) ];
  }
  t.createServerSocketTransport = o;
 },
 oyvS: function(e, t) {
  e.exports = require("path");
 },
 rWaT: function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  function i(e) {
   for (var n in e) if (!t.hasOwnProperty(n)) t[n] = e[n];
  }
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var s = n("Undm");
  var a = n("lnuX");
  t.RequestType = a.RequestType;
  t.RequestType0 = a.RequestType0;
  t.RequestType1 = a.RequestType1;
  t.RequestType2 = a.RequestType2;
  t.RequestType3 = a.RequestType3;
  t.RequestType4 = a.RequestType4;
  t.RequestType5 = a.RequestType5;
  t.RequestType6 = a.RequestType6;
  t.RequestType7 = a.RequestType7;
  t.RequestType8 = a.RequestType8;
  t.RequestType9 = a.RequestType9;
  t.ResponseError = a.ResponseError;
  t.ErrorCodes = a.ErrorCodes;
  t.NotificationType = a.NotificationType;
  t.NotificationType0 = a.NotificationType0;
  t.NotificationType1 = a.NotificationType1;
  t.NotificationType2 = a.NotificationType2;
  t.NotificationType3 = a.NotificationType3;
  t.NotificationType4 = a.NotificationType4;
  t.NotificationType5 = a.NotificationType5;
  t.NotificationType6 = a.NotificationType6;
  t.NotificationType7 = a.NotificationType7;
  t.NotificationType8 = a.NotificationType8;
  t.NotificationType9 = a.NotificationType9;
  var o = n("NW/o");
  t.MessageReader = o.MessageReader;
  t.StreamMessageReader = o.StreamMessageReader;
  t.IPCMessageReader = o.IPCMessageReader;
  t.SocketMessageReader = o.SocketMessageReader;
  var u = n("9+ej");
  t.MessageWriter = u.MessageWriter;
  t.StreamMessageWriter = u.StreamMessageWriter;
  t.IPCMessageWriter = u.IPCMessageWriter;
  t.SocketMessageWriter = u.SocketMessageWriter;
  var c = n("+VcB");
  t.Disposable = c.Disposable;
  t.Event = c.Event;
  t.Emitter = c.Emitter;
  var l = n("VRch");
  t.CancellationTokenSource = l.CancellationTokenSource;
  t.CancellationToken = l.CancellationToken;
  var h = n("h1f/");
  i(n("M57S"));
  i(n("n9Vd"));
  var f;
  (function(e) {
   e.type = new a.NotificationType("$/cancelRequest");
  })(f || (f = {}));
  t.NullLogger = Object.freeze({
   error: function() {},
   warn: function() {},
   info: function() {},
   log: function() {}
  });
  var p;
  (function(e) {
   e[e["Off"] = 0] = "Off";
   e[e["Messages"] = 1] = "Messages";
   e[e["Verbose"] = 2] = "Verbose";
  })(p = t.Trace || (t.Trace = {}));
  (function(e) {
   function t(t) {
    t = t.toLowerCase();
    switch (t) {
    case "off":
     return e.Off;

    case "messages":
     return e.Messages;

    case "verbose":
     return e.Verbose;

    default:
     return e.Off;
    }
   }
   e.fromString = t;
   function n(t) {
    switch (t) {
    case e.Off:
     return "off";

    case e.Messages:
     return "messages";

    case e.Verbose:
     return "verbose";

    default:
     return "off";
    }
   }
   e.toString = n;
  })(p = t.Trace || (t.Trace = {}));
  var d;
  (function(e) {
   e.type = new a.NotificationType("$/setTraceNotification");
  })(d = t.SetTraceNotification || (t.SetTraceNotification = {}));
  var m;
  (function(e) {
   e.type = new a.NotificationType("$/logTraceNotification");
  })(m = t.LogTraceNotification || (t.LogTraceNotification = {}));
  var v;
  (function(e) {
   e[e["Closed"] = 1] = "Closed";
   e[e["Disposed"] = 2] = "Disposed";
   e[e["AlreadyListening"] = 3] = "AlreadyListening";
  })(v = t.ConnectionErrors || (t.ConnectionErrors = {}));
  var g = function(e) {
   r(t, e);
   function t(n, r) {
    var i = e.call(this, r) || this;
    i.code = n;
    Object.setPrototypeOf(i, t.prototype);
    return i;
   }
   return t;
  }(Error);
  t.ConnectionError = g;
  var y;
  (function(e) {
   function t(e) {
    var t = e;
    return t && s.func(t.cancelUndispatched);
   }
   e.is = t;
  })(y = t.ConnectionStrategy || (t.ConnectionStrategy = {}));
  var x;
  (function(e) {
   e[e["New"] = 1] = "New";
   e[e["Listening"] = 2] = "Listening";
   e[e["Closed"] = 3] = "Closed";
   e[e["Disposed"] = 4] = "Disposed";
  })(x || (x = {}));
  function C(e, t, n, r) {
   var i = 0;
   var o = 0;
   var u = 0;
   var y = "2.0";
   var C = undefined;
   var D = Object.create(null);
   var E = undefined;
   var b = Object.create(null);
   var w;
   var S = new h.LinkedMap();
   var A = Object.create(null);
   var k = Object.create(null);
   var F = p.Off;
   var T;
   var _ = x.New;
   var N = new c.Emitter();
   var O = new c.Emitter();
   var P = new c.Emitter();
   var I = new c.Emitter();
   function M(e) {
    return "req-" + e.toString();
   }
   function R(e) {
    if (e === null) {
     return "res-unknown-" + (++u).toString();
    } else {
     return "res-" + e.toString();
    }
   }
   function B() {
    return "not-" + (++o).toString();
   }
   function L(e, t) {
    if (a.isRequestMessage(t)) {
     e.set(M(t.id), t);
    } else if (a.isResponseMessage(t)) {
     e.set(R(t.id), t);
    } else {
     e.set(B(), t);
    }
   }
   function j(e) {
    return undefined;
   }
   function q() {
    return _ === x.Listening;
   }
   function U() {
    return _ === x.Closed;
   }
   function W() {
    return _ === x.Disposed;
   }
   function z() {
    if (_ === x.New || _ === x.Listening) {
     _ = x.Closed;
     O.fire(undefined);
    }
   }
   function V(e) {
    N.fire([ e, undefined, undefined ]);
   }
   function J(e) {
    N.fire(e);
   }
   e.onClose(z);
   e.onError(V);
   t.onClose(z);
   t.onError(J);
   function X() {
    if (w || S.size === 0) {
     return;
    }
    w = setImmediate(function() {
     w = undefined;
     K();
    });
   }
   function K() {
    if (S.size === 0) {
     return;
    }
    var e = S.shift();
    try {
     if (a.isRequestMessage(e)) {
      Y(e);
     } else if (a.isNotificationMessage(e)) {
      $(e);
     } else if (a.isResponseMessage(e)) {
      G(e);
     } else {
      Q(e);
     }
    } finally {
     X();
    }
   }
   var H = function(e) {
    try {
     if (a.isNotificationMessage(e) && e.method === f.type.method) {
      var n = M(e.params.id);
      var i = S.get(n);
      if (a.isRequestMessage(i)) {
       var s = r && r.cancelUndispatched ? r.cancelUndispatched(i, j) : j(i);
       if (s && (s.error !== void 0 || s.result !== void 0)) {
        S.delete(n);
        s.id = i.id;
        te(s, e.method, Date.now());
        t.write(s);
        return;
       }
      }
     }
     L(S, e);
    } finally {
     X();
    }
   };
   function Y(e) {
    if (W()) {
     return;
    }
    function n(n, r, i) {
     var s = {
      jsonrpc: y,
      id: e.id
     };
     if (n instanceof a.ResponseError) {
      s.error = n.toJson();
     } else {
      s.result = n === void 0 ? null : n;
     }
     te(s, r, i);
     t.write(s);
    }
    function r(n, r, i) {
     var s = {
      jsonrpc: y,
      id: e.id,
      error: n.toJson()
     };
     te(s, r, i);
     t.write(s);
    }
    function i(n, r, i) {
     if (n === void 0) {
      n = null;
     }
     var s = {
      jsonrpc: y,
      id: e.id,
      result: n
     };
     te(s, r, i);
     t.write(s);
    }
    ne(e);
    var o = D[e.method];
    var u;
    var c;
    if (o) {
     u = o.type;
     c = o.handler;
    }
    var h = Date.now();
    if (c || C) {
     var f = new l.CancellationTokenSource();
     var p = String(e.id);
     k[p] = f;
     try {
      var d = void 0;
      if (e.params === void 0 || u !== void 0 && u.numberOfParams === 0) {
       d = c ? c(f.token) : C(e.method, f.token);
      } else if (s.array(e.params) && (u === void 0 || u.numberOfParams > 1)) {
       d = c ? c.apply(void 0, e.params.concat([ f.token ])) : C.apply(void 0, [ e.method ].concat(e.params, [ f.token ]));
      } else {
       d = c ? c(e.params, f.token) : C(e.method, e.params, f.token);
      }
      var m = d;
      if (!d) {
       delete k[p];
       i(d, e.method, h);
      } else if (m.then) {
       m.then(function(t) {
        delete k[p];
        n(t, e.method, h);
       }, function(t) {
        delete k[p];
        if (t instanceof a.ResponseError) {
         r(t, e.method, h);
        } else if (t && s.string(t.message)) {
         r(new a.ResponseError(a.ErrorCodes.InternalError, "Request " + e.method + " failed with message: " + t.message), e.method, h);
        } else {
         r(new a.ResponseError(a.ErrorCodes.InternalError, "Request " + e.method + " failed unexpectedly without providing any details."), e.method, h);
        }
       });
      } else {
       delete k[p];
       n(d, e.method, h);
      }
     } catch (t) {
      delete k[p];
      if (t instanceof a.ResponseError) {
       n(t, e.method, h);
      } else if (t && s.string(t.message)) {
       r(new a.ResponseError(a.ErrorCodes.InternalError, "Request " + e.method + " failed with message: " + t.message), e.method, h);
      } else {
       r(new a.ResponseError(a.ErrorCodes.InternalError, "Request " + e.method + " failed unexpectedly without providing any details."), e.method, h);
      }
     }
    } else {
     r(new a.ResponseError(a.ErrorCodes.MethodNotFound, "Unhandled method " + e.method), e.method, h);
    }
   }
   function G(e) {
    if (W()) {
     return;
    }
    if (e.id === null) {
     if (e.error) {
      n.error("Received response message without id: Error is: \n" + JSON.stringify(e.error, undefined, 4));
     } else {
      n.error("Received response message without id. No further error information provided.");
     }
    } else {
     var t = String(e.id);
     var r = A[t];
     ie(e, r);
     if (r) {
      delete A[t];
      try {
       if (e.error) {
        var i = e.error;
        r.reject(new a.ResponseError(i.code, i.message, i.data));
       } else if (e.result !== void 0) {
        r.resolve(e.result);
       } else {
        throw new Error("Should never happen.");
       }
      } catch (i) {
       if (i.message) {
        n.error("Response handler '" + r.method + "' failed with message: " + i.message);
       } else {
        n.error("Response handler '" + r.method + "' failed unexpectedly.");
       }
      }
     }
    }
   }
   function $(e) {
    if (W()) {
     return;
    }
    var t = undefined;
    var r;
    if (e.method === f.type.method) {
     r = function(e) {
      var t = e.id;
      var n = k[String(t)];
      if (n) {
       n.cancel();
      }
     };
    } else {
     var i = b[e.method];
     if (i) {
      r = i.handler;
      t = i.type;
     }
    }
    if (r || E) {
     try {
      re(e);
      if (e.params === void 0 || t !== void 0 && t.numberOfParams === 0) {
       r ? r() : E(e.method);
      } else if (s.array(e.params) && (t === void 0 || t.numberOfParams > 1)) {
       r ? r.apply(void 0, e.params) : E.apply(void 0, [ e.method ].concat(e.params));
      } else {
       r ? r(e.params) : E(e.method, e.params);
      }
     } catch (t) {
      if (t.message) {
       n.error("Notification handler '" + e.method + "' failed with message: " + t.message);
      } else {
       n.error("Notification handler '" + e.method + "' failed unexpectedly.");
      }
     }
    } else {
     P.fire(e);
    }
   }
   function Q(e) {
    if (!e) {
     n.error("Received empty message.");
     return;
    }
    n.error("Received message which is neither a response nor a notification message:\n" + JSON.stringify(e, null, 4));
    var t = e;
    if (s.string(t.id) || s.number(t.id)) {
     var r = String(t.id);
     var i = A[r];
     if (i) {
      i.reject(new Error("The received response has neither a result nor an error property."));
     }
    }
   }
   function Z(e) {
    if (F === p.Off || !T) {
     return;
    }
    var t = undefined;
    if (F === p.Verbose && e.params) {
     t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
    }
    T.log("Sending request '" + e.method + " - (" + e.id + ")'.", t);
   }
   function ee(e) {
    if (F === p.Off || !T) {
     return;
    }
    var t = undefined;
    if (F === p.Verbose) {
     if (e.params) {
      t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
     } else {
      t = "No parameters provided.\n\n";
     }
    }
    T.log("Sending notification '" + e.method + "'.", t);
   }
   function te(e, t, n) {
    if (F === p.Off || !T) {
     return;
    }
    var r = undefined;
    if (F === p.Verbose) {
     if (e.error && e.error.data) {
      r = "Error data: " + JSON.stringify(e.error.data, null, 4) + "\n\n";
     } else {
      if (e.result) {
       r = "Result: " + JSON.stringify(e.result, null, 4) + "\n\n";
      } else if (e.error === void 0) {
       r = "No result returned.\n\n";
      }
     }
    }
    T.log("Sending response '" + t + " - (" + e.id + ")'. Processing request took " + (Date.now() - n) + "ms", r);
   }
   function ne(e) {
    if (F === p.Off || !T) {
     return;
    }
    var t = undefined;
    if (F === p.Verbose && e.params) {
     t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
    }
    T.log("Received request '" + e.method + " - (" + e.id + ")'.", t);
   }
   function re(e) {
    if (F === p.Off || !T || e.method === m.type.method) {
     return;
    }
    var t = undefined;
    if (F === p.Verbose) {
     if (e.params) {
      t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
     } else {
      t = "No parameters provided.\n\n";
     }
    }
    T.log("Received notification '" + e.method + "'.", t);
   }
   function ie(e, t) {
    if (F === p.Off || !T) {
     return;
    }
    var n = undefined;
    if (F === p.Verbose) {
     if (e.error && e.error.data) {
      n = "Error data: " + JSON.stringify(e.error.data, null, 4) + "\n\n";
     } else {
      if (e.result) {
       n = "Result: " + JSON.stringify(e.result, null, 4) + "\n\n";
      } else if (e.error === void 0) {
       n = "No result returned.\n\n";
      }
     }
    }
    if (t) {
     var r = e.error ? " Request failed: " + e.error.message + " (" + e.error.code + ")." : "";
     T.log("Received response '" + t.method + " - (" + e.id + ")' in " + (Date.now() - t.timerStart) + "ms." + r, n);
    } else {
     T.log("Received response " + e.id + " without active response promise.", n);
    }
   }
   function se() {
    if (U()) {
     throw new g(v.Closed, "Connection is closed.");
    }
    if (W()) {
     throw new g(v.Disposed, "Connection is disposed.");
    }
   }
   function ae() {
    if (q()) {
     throw new g(v.AlreadyListening, "Connection is already listening");
    }
   }
   function oe() {
    if (!q()) {
     throw new Error("Call listen() first.");
    }
   }
   function ue(e) {
    if (e === void 0) {
     return null;
    } else {
     return e;
    }
   }
   function ce(e, t) {
    var n;
    var r = e.numberOfParams;
    switch (r) {
    case 0:
     n = null;
     break;

    case 1:
     n = ue(t[0]);
     break;

    default:
     n = [];
     for (var i = 0; i < t.length && i < r; i++) {
      n.push(ue(t[i]));
     }
     if (t.length < r) {
      for (var i = t.length; i < r; i++) {
       n.push(null);
      }
     }
     break;
    }
    return n;
   }
   var le = {
    sendNotification: function(e) {
     var n = [];
     for (var r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
     }
     se();
     var i;
     var a;
     if (s.string(e)) {
      i = e;
      switch (n.length) {
      case 0:
       a = null;
       break;

      case 1:
       a = n[0];
       break;

      default:
       a = n;
       break;
      }
     } else {
      i = e.method;
      a = ce(e, n);
     }
     var o = {
      jsonrpc: y,
      method: i,
      params: a
     };
     ee(o);
     t.write(o);
    },
    onNotification: function(e, t) {
     se();
     if (s.func(e)) {
      E = e;
     } else if (t) {
      if (s.string(e)) {
       b[e] = {
        type: undefined,
        handler: t
       };
      } else {
       b[e.method] = {
        type: e,
        handler: t
       };
      }
     }
    },
    sendRequest: function(e) {
     var n = [];
     for (var r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
     }
     se();
     oe();
     var o;
     var u;
     var c = undefined;
     if (s.string(e)) {
      o = e;
      switch (n.length) {
      case 0:
       u = null;
       break;

      case 1:
       if (l.CancellationToken.is(n[0])) {
        u = null;
        c = n[0];
       } else {
        u = ue(n[0]);
       }
       break;

      default:
       var h = n.length - 1;
       if (l.CancellationToken.is(n[h])) {
        c = n[h];
        if (n.length === 2) {
         u = ue(n[0]);
        } else {
         u = n.slice(0, h).map(function(e) {
          return ue(e);
         });
        }
       } else {
        u = n.map(function(e) {
         return ue(e);
        });
       }
       break;
      }
     } else {
      o = e.method;
      u = ce(e, n);
      var p = e.numberOfParams;
      c = l.CancellationToken.is(n[p]) ? n[p] : undefined;
     }
     var d = i++;
     var m = new Promise(function(e, n) {
      var r = {
       jsonrpc: y,
       id: d,
       method: o,
       params: u
      };
      var i = {
       method: o,
       timerStart: Date.now(),
       resolve: e,
       reject: n
      };
      Z(r);
      try {
       t.write(r);
      } catch (e) {
       i.reject(new a.ResponseError(a.ErrorCodes.MessageWriteError, e.message ? e.message : "Unknown reason"));
       i = null;
      }
      if (i) {
       A[String(d)] = i;
      }
     });
     if (c) {
      c.onCancellationRequested(function() {
       le.sendNotification(f.type, {
        id: d
       });
      });
     }
     return m;
    },
    onRequest: function(e, t) {
     se();
     if (s.func(e)) {
      C = e;
     } else if (t) {
      if (s.string(e)) {
       D[e] = {
        type: undefined,
        handler: t
       };
      } else {
       D[e.method] = {
        type: e,
        handler: t
       };
      }
     }
    },
    trace: function(e, t, n) {
     if (n === void 0) {
      n = false;
     }
     F = e;
     if (F === p.Off) {
      T = undefined;
     } else {
      T = t;
     }
     if (n && !U() && !W()) {
      le.sendNotification(d.type, {
       value: p.toString(e)
      });
     }
    },
    onError: N.event,
    onClose: O.event,
    onUnhandledNotification: P.event,
    onDispose: I.event,
    dispose: function() {
     if (W()) {
      return;
     }
     _ = x.Disposed;
     I.fire(undefined);
     var n = new Error("Connection got disposed.");
     Object.keys(A).forEach(function(e) {
      A[e].reject(n);
     });
     A = Object.create(null);
     k = Object.create(null);
     S = new h.LinkedMap();
     if (s.func(t.dispose)) {
      t.dispose();
     }
     if (s.func(e.dispose)) {
      e.dispose();
     }
    },
    listen: function() {
     se();
     ae();
     _ = x.Listening;
     e.listen(H);
    },
    inspect: function() {
     console.log("inspect");
    }
   };
   le.onNotification(m.type, function(e) {
    if (F === p.Off || !T) {
     return;
    }
    T.log(e.message, F === p.Verbose ? e.verbose : undefined);
   });
   return le;
  }
  function D(e) {
   return e.listen !== void 0 && e.read === void 0;
  }
  function E(e) {
   return e.write !== void 0 && e.end === void 0;
  }
  function b(e, n, r, i) {
   if (!r) {
    r = t.NullLogger;
   }
   var s = D(e) ? e : new o.StreamMessageReader(e);
   var a = E(n) ? n : new u.StreamMessageWriter(n);
   return C(s, a, r, i);
  }
  t.createMessageConnection = b;
 },
 "rjk/": function(e, t, n) {
  "use strict";
  n("ckb+");
  const r = n("jK02").inherits;
  const i = n("AyFj");
  const s = n("/0p4").EventEmitter;
  e.exports = o;
  function a(e) {
   return e && typeof e.addRequest === "function";
  }
  function o(e, t) {
   if (!(this instanceof o)) {
    return new o(e, t);
   }
   s.call(this);
   this._promisifiedCallback = false;
   let n = t;
   if ("function" === typeof e) {
    this.callback = e;
   } else if (e) {
    n = e;
   }
   this.timeout = n && n.timeout || null;
   this.options = n;
  }
  r(o, s);
  o.prototype.callback = function e(t, n) {
   throw new Error('"agent-base" has no default implementation, you must subclass and override `callback()`');
  };
  o.prototype.addRequest = function e(t, n) {
   const r = Object.assign({}, n);
   if (null == r.host) {
    r.host = "localhost";
   }
   if (null == r.port) {
    r.port = r.secureEndpoint ? 443 : 80;
   }
   const s = Object.assign({}, this.options, r);
   if (s.host && s.path) {
    delete s.path;
   }
   delete s.agent;
   delete s.hostname;
   delete s._defaultAgent;
   delete s.defaultPort;
   delete s.createConnection;
   t._last = true;
   t.shouldKeepAlive = false;
   let o;
   let u = false;
   const c = this.timeout;
   function l(e) {
    if (t._hadError) return;
    t.emit("error", e);
    t._hadError = true;
   }
   function h() {
    o = null;
    u = true;
    const e = new Error('A "socket" was not created for HTTP request before ' + c + "ms");
    e.code = "ETIMEOUT";
    l(e);
   }
   function f(e) {
    if (u) return;
    if (o != null) {
     clearTimeout(o);
     o = null;
    }
    l(e);
   }
   function p(e) {
    if (u) return;
    if (o != null) {
     clearTimeout(o);
     o = null;
    }
    if (a(e)) {
     e.addRequest(t, s);
    } else if (e) {
     t.onSocket(e);
    } else {
     const e = new Error(`no Duplex stream was returned to agent-base for \`${t.method} ${t.path}\``);
     l(e);
    }
   }
   if (!this._promisifiedCallback && this.callback.length >= 3) {
    this.callback = i(this.callback, this);
    this._promisifiedCallback = true;
   }
   if (c > 0) {
    o = setTimeout(h, c);
   }
   try {
    Promise.resolve(this.callback(t, s)).then(p, f);
   } catch (e) {
    Promise.reject(e).catch(f);
   }
  };
 },
 rqus: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("ICfX");
  class i {
   findDocumentSymbols(e, t) {
    if (!t || t["documents"].length === 0) {
     return null;
    }
    let n = (t, i, s) => {
     if (i.type === "array") {
      i.items.forEach(e => {
       n(t, e, s);
      });
     } else if (i.type === "object") {
      let a = i;
      a.properties.forEach(i => {
       let a = r.Location.create(e.uri, r.Range.create(e.positionAt(i.start), e.positionAt(i.end)));
       let o = i.value;
       if (o) {
        let e = s ? s + "." + i.key.value : i.key.value;
        t.push({
         name: i.key.getValue(),
         kind: this.getSymbolKind(o.type),
         location: a,
         containerName: s
        });
        n(t, o, e);
       }
      });
     }
     return t;
    };
    let i = [];
    for (let e in t["documents"]) {
     let r = t["documents"][e];
     if (r.root) {
      let e = n([], r.root, void 0);
      i = i.concat(e);
     }
    }
    return i;
   }
   getSymbolKind(e) {
    switch (e) {
    case "object":
     return r.SymbolKind.Module;

    case "string":
     return r.SymbolKind.String;

    case "number":
     return r.SymbolKind.Number;

    case "array":
     return r.SymbolKind.Array;

    case "boolean":
     return r.SymbolKind.Boolean;

    default:
     return r.SymbolKind.Variable;
    }
   }
  }
  t.YAMLDocumentSymbols = i;
 },
 sQVP: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("kLbW");
  const i = n("ICfX");
  const s = n("EoxW");
  const a = n("OFSL");
  const o = s.loadMessageBundle();
  class u {
   constructor(e, t = [], n) {
    this.schemaService = e;
    this.contributions = t;
    this.promise = n || Promise;
    this.customTags = [];
   }
   configure(e) {
    this.customTags = e;
   }
   doResolve(e) {
    for (let t = this.contributions.length - 1; t >= 0; t--) {
     if (this.contributions[t].resolveCompletion) {
      let n = this.contributions[t].resolveCompletion(e);
      if (n) {
       return n;
      }
     }
    }
    return this.promise.resolve(e);
   }
   doComplete(e, t, n) {
    let r = {
     items: [],
     isIncomplete: false
    };
    let s = e.offsetAt(t);
    if (e.getText()[s] === ":") {
     return Promise.resolve(r);
    }
    let o = a.matchOffsetToDocument(s, n);
    if (o === null) {
     return Promise.resolve(r);
    }
    let u = o.getNodeFromOffsetEndInclusive(s);
    if (this.isInComment(e, u ? u.start : 0, s)) {
     return Promise.resolve(r);
    }
    let c = this.getCurrentWord(e, s);
    let l = null;
    if (u && u.type === "null") {
     let t = e.positionAt(u.start);
     t.character += 1;
     let n = e.positionAt(u.end);
     n.character += 1;
     l = i.Range.create(t, n);
    } else if (u && (u.type === "string" || u.type === "number" || u.type === "boolean")) {
     l = i.Range.create(e.positionAt(u.start), e.positionAt(u.end));
    } else {
     let n = s - c.length;
     if (n > 0 && e.getText()[n - 1] === '"') {
      n--;
     }
     l = i.Range.create(e.positionAt(n), t);
    }
    let h = {};
    let f = {
     add: e => {
      let t = h[e.label];
      if (!t) {
       h[e.label] = e;
       if (l) {
        e.textEdit = i.TextEdit.replace(l, e.insertText);
       }
       r.items.push(e);
      } else if (!t.documentation) {
       t.documentation = e.documentation;
      }
     },
     setAsIncomplete: () => {
      r.isIncomplete = true;
     },
     error: e => {
      console.error(e);
     },
     log: e => {
      console.log(e);
     },
     getNumberOfProposals: () => {
      return r.items.length;
     }
    };
    return this.schemaService.getSchemaForResource(e.uri).then(t => {
     if (!t) {
      return Promise.resolve(r);
     }
     let n = [];
     let a = true;
     let p = "";
     let d = null;
     if (u) {
      if (u.type === "string") {
       let t = u;
       if (t.isKey) {
        a = !(u.parent && u.parent.value);
        d = u.parent ? u.parent : null;
        p = e.getText().substring(u.start + 1, u.end - 1);
        if (u.parent) {
         u = u.parent.parent;
        }
       }
      }
     }
     if (u && u.type === "object") {
      let r = u.properties;
      r.forEach(e => {
       if (!d || d !== e) {
        h[e.key.value] = i.CompletionItem.create("__");
       }
      });
      let p = "";
      if (a) {
       p = this.evaluateSeparatorAfter(e, e.offsetAt(l.end));
      }
      if (t) {
       this.getPropertyCompletions(t, o, u, a, f, p);
      }
      let m = u.getPath();
      this.contributions.forEach(t => {
       let r = t.collectPropertyCompletions(e.uri, m, c, a, false, f);
       if (r) {
        n.push(r);
       }
      });
      if (!t && c.length > 0 && e.getText().charAt(s - c.length - 1) !== '"') {
       f.add({
        kind: i.CompletionItemKind.Property,
        label: this.getLabelForValue(c),
        insertText: this.getInsertTextForProperty(c, null, false, p),
        insertTextFormat: i.InsertTextFormat.Snippet,
        documentation: ""
       });
      }
     }
     let m = {};
     if (t) {
      this.getValueCompletions(t, o, u, s, e, f, m);
     }
     if (this.contributions.length > 0) {
      this.getContributedValueCompletions(o, u, s, e, f, n);
     }
     if (this.customTags.length > 0) {
      this.getCustomTagValueCompletions(f);
     }
     return this.promise.all(n).then(() => {
      return r;
     });
    });
   }
   getPropertyCompletions(e, t, n, r, s, a) {
    let o = t.getMatchingSchemas(e.schema);
    o.forEach(e => {
     if (e.node === n && !e.inverted) {
      let t = e.schema.properties;
      if (t) {
       Object.keys(t).forEach(e => {
        let n = t[e];
        if (!n.deprecationMessage && !n["doNotSuggest"]) {
         s.add({
          kind: i.CompletionItemKind.Property,
          label: e,
          insertText: this.getInsertTextForProperty(e, n, r, a),
          insertTextFormat: i.InsertTextFormat.Snippet,
          documentation: n.description || ""
         });
        }
       });
      }
     }
    });
   }
   getValueCompletions(e, t, n, r, i, s, a) {
    let o = r;
    let u = null;
    let c = null;
    if (n && (n.type === "string" || n.type === "number" || n.type === "boolean")) {
     o = n.end;
     c = n;
     n = n.parent;
    }
    if (n && n.type === "null") {
     let e = n.parent;
     if (e && e.type === "object") {
      for (let t in e["properties"]) {
       let r = e["properties"][t];
       if (r.key && r.key.location === n.location) {
        n = r;
       }
      }
     }
    }
    if (!n) {
     this.addSchemaValueCompletions(e.schema, s, a, "");
     return;
    }
    if (n.type === "property" && r > n.colonOffset) {
     let e = n;
     let t = e.value;
     if (t && r > t.end) {
      return;
     }
     u = e.key.value;
     n = n.parent;
    }
    let l = this.evaluateSeparatorAfter(i, o);
    if (n && (u !== null || n.type === "array")) {
     let o = t.getMatchingSchemas(e.schema);
     o.forEach(e => {
      if (e.node === n && !e.inverted && e.schema) {
       if (e.schema.items) {
        if (Array.isArray(e.schema.items)) {
         let t = this.findItemAtOffset(n, i, r);
         if (t < e.schema.items.length) {
          this.addSchemaValueCompletions(e.schema.items[t], s, a, l);
         }
        } else {
         this.addSchemaValueCompletions(e.schema.items, s, a, l);
        }
       }
       if (e.schema.properties) {
        let t = e.schema.properties[u];
        if (t) {
         this.addSchemaValueCompletions(t, s, a, l);
        }
       }
      }
     });
    }
    if (n) {
     if (a["boolean"]) {
      this.addBooleanValueCompletion(true, s, l);
      this.addBooleanValueCompletion(false, s, l);
     }
     if (a["null"]) {
      this.addNullValueCompletion(s, l);
     }
    }
   }
   getContributedValueCompletions(e, t, n, r, i, s) {
    if (!t) {
     this.contributions.forEach(e => {
      let t = e.collectDefaultCompletions(r.uri, i);
      if (t) {
       s.push(t);
      }
     });
    } else {
     if (t.type === "string" || t.type === "number" || t.type === "boolean" || t.type === "null") {
      t = t.parent;
     }
     if (t.type === "property" && n > t.colonOffset) {
      let e = t.key.value;
      let a = t.value;
      if (!a || n <= a.end) {
       let n = t.parent.getPath();
       this.contributions.forEach(t => {
        let a = t.collectValueCompletions(r.uri, n, e, i);
        if (a) {
         s.push(a);
        }
       });
      }
     }
    }
   }
   getCustomTagValueCompletions(e) {
    this.customTags.forEach(t => {
     let n = t.split(" ");
     if (n && n[0]) {
      this.addCustomTagValueCompletion(e, " ", n[0]);
     }
    });
   }
   addSchemaValueCompletions(e, t, n, r) {
    this.addDefaultValueCompletions(e, t, r);
    this.addEnumValueCompletions(e, t, r);
    this.collectTypes(e, n);
    if (Array.isArray(e.allOf)) {
     e.allOf.forEach(e => this.addSchemaValueCompletions(e, t, n, r));
    }
    if (Array.isArray(e.anyOf)) {
     e.anyOf.forEach(e => this.addSchemaValueCompletions(e, t, n, r));
    }
    if (Array.isArray(e.oneOf)) {
     e.oneOf.forEach(e => this.addSchemaValueCompletions(e, t, n, r));
    }
   }
   addDefaultValueCompletions(e, t, n, r = 0) {
    let s = false;
    if (e.default) {
     let a = e.type;
     let u = e.default;
     for (let e = r; e > 0; e--) {
      u = [ u ];
      a = "array";
     }
     t.add({
      kind: this.getSuggestionKind(a),
      label: this.getLabelForValue(u),
      insertText: this.getInsertTextForValue(u, n),
      insertTextFormat: i.InsertTextFormat.Snippet,
      detail: o("json.suggest.default", "Default value")
     });
     s = true;
    }
    if (!s && e.items && !Array.isArray(e.items)) {
     this.addDefaultValueCompletions(e.items, t, n, r + 1);
    }
   }
   addEnumValueCompletions(e, t, n) {
    if (Array.isArray(e.enum)) {
     for (let r = 0, s = e.enum.length; r < s; r++) {
      let s = e.enum[r];
      let a = e.description;
      if (e.enumDescriptions && r < e.enumDescriptions.length) {
       a = e.enumDescriptions[r];
      }
      t.add({
       kind: this.getSuggestionKind(e.type),
       label: this.getLabelForValue(s),
       insertText: this.getInsertTextForValue(s, n),
       insertTextFormat: i.InsertTextFormat.Snippet,
       documentation: a
      });
     }
    }
   }
   collectTypes(e, t) {
    let n = e.type;
    if (Array.isArray(n)) {
     n.forEach(e => t[e] = true);
    } else {
     t[n] = true;
    }
   }
   addBooleanValueCompletion(e, t, n) {
    t.add({
     kind: this.getSuggestionKind("boolean"),
     label: e ? "true" : "false",
     insertText: this.getInsertTextForValue(e, n),
     insertTextFormat: i.InsertTextFormat.Snippet,
     documentation: ""
    });
   }
   addNullValueCompletion(e, t) {
    e.add({
     kind: this.getSuggestionKind("null"),
     label: "null",
     insertText: "null" + t,
     insertTextFormat: i.InsertTextFormat.Snippet,
     documentation: ""
    });
   }
   addCustomTagValueCompletion(e, t, n) {
    e.add({
     kind: this.getSuggestionKind("string"),
     label: n,
     insertText: n + t,
     insertTextFormat: i.InsertTextFormat.Snippet,
     documentation: ""
    });
   }
   getLabelForValue(e) {
    let t = typeof e === "string" ? e : JSON.stringify(e);
    if (t.length > 57) {
     return t.substr(0, 57).trim() + "...";
    }
    return t;
   }
   getSuggestionKind(e) {
    if (Array.isArray(e)) {
     let t = e;
     e = t.length > 0 ? t[0] : null;
    }
    if (!e) {
     return i.CompletionItemKind.Value;
    }
    switch (e) {
    case "string":
     return i.CompletionItemKind.Value;

    case "object":
     return i.CompletionItemKind.Module;

    case "property":
     return i.CompletionItemKind.Property;

    default:
     return i.CompletionItemKind.Value;
    }
   }
   getCurrentWord(e, t) {
    var n = t - 1;
    var r = e.getText();
    while (n >= 0 && ' \t\n\r\v":{[,]}'.indexOf(r.charAt(n)) === -1) {
     n--;
    }
    return r.substring(n + 1, t);
   }
   findItemAtOffset(e, t, n) {
    let i = r.createScanner(t.getText(), true);
    let s = e.getChildNodes();
    for (let e = s.length - 1; e >= 0; e--) {
     let t = s[e];
     if (n > t.end) {
      i.setPosition(t.end);
      let s = i.scan();
      if (s === r.SyntaxKind.CommaToken && n >= i.getTokenOffset() + i.getTokenLength()) {
       return e + 1;
      }
      return e;
     } else if (n >= t.start) {
      return e;
     }
    }
    return 0;
   }
   isInComment(e, t, n) {
    let i = r.createScanner(e.getText(), false);
    i.setPosition(t);
    let s = i.scan();
    while (s !== r.SyntaxKind.EOF && i.getTokenOffset() + i.getTokenLength() < n) {
     s = i.scan();
    }
    return (s === r.SyntaxKind.LineCommentTrivia || s === r.SyntaxKind.BlockCommentTrivia) && i.getTokenOffset() <= n;
   }
   getInsertTextForPlainText(e) {
    return e.replace(/[\\\$\}]/g, "\\$&");
   }
   getInsertTextForValue(e, t) {
    var n = e;
    if (n === "{}") {
     return "{\n\t$1\n}" + t;
    } else if (n === "[]") {
     return "[\n\t$1\n]" + t;
    }
    return this.getInsertTextForPlainText(n + t);
   }
   getInsertTextForProperty(e, t, n, r) {
    let i = this.getInsertTextForValue(e, "");
    let s = i + ":";
    let a;
    let o = 0;
    if (t) {
     if (o === 0) {
      var u = Array.isArray(t.type) ? t.type[0] : t.type;
      if (!u) {
       if (t.properties) {
        u = "object";
       } else if (t.items) {
        u = "array";
       }
      }
      switch (u) {
      case "boolean":
       a = " $1";
       break;

      case "string":
       a = " $1";
       break;

      case "object":
       a = "\n\t";
       break;

      case "array":
       a = "\n\t- ";
       break;

      case "number":
      case "integer":
       a = " ${1:0}";
       break;

      case "null":
       a = " ${1:null}";
       break;

      default:
       return i;
      }
     }
    }
    if (!a || o > 1) {
     a = "$1";
    }
    return s + a + r;
   }
   evaluateSeparatorAfter(e, t) {
    let n = r.createScanner(e.getText(), true);
    n.setPosition(t);
    let i = n.scan();
    switch (i) {
    case r.SyntaxKind.CommaToken:
    case r.SyntaxKind.CloseBraceToken:
    case r.SyntaxKind.CloseBracketToken:
    case r.SyntaxKind.EOF:
     return "";

    default:
     return "";
    }
   }
  }
  t.YAMLCompletion = u;
 },
 "te/U": function(e, t, n) {
  if (typeof process === "undefined" || process.type === "renderer") {
   e.exports = n("AXjB");
  } else {
   e.exports = n("J3Nh");
  }
 },
 uL2m: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("rWaT");
  var i;
  (function(e) {
   e.type = new r.RequestType("textDocument/typeDefinition");
  })(i = t.TypeDefinitionRequest || (t.TypeDefinitionRequest = {}));
 },
 ugmf: function(e, t) {
  e.exports = require("tls");
 },
 uwlh: function(e, t, n) {
  "use strict";
  var r = n("gax4");
  e.exports = new r("tag:yaml.org,2002:seq", {
   kind: "sequence",
   construct: function(e) {
    return e !== null ? e : [];
   }
  });
 },
 wGX6: function(e, t, n) {
  "use strict";
  function r(e, t) {
   Error.call(this);
   this.name = "YAMLException";
   this.reason = e;
   this.mark = t;
   this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "");
   if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
   } else {
    this.stack = new Error().stack || "";
   }
  }
  r.prototype = Object.create(Error.prototype);
  r.prototype.constructor = r;
  r.prototype.toString = function e(t) {
   var n = this.name + ": ";
   n += this.reason || "(unknown reason)";
   if (!t && this.mark) {
    n += " " + this.mark.toString();
   }
   return n;
  };
  e.exports = r;
 },
 wXef: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  function r(e, t) {
   if (e.length < t.length) {
    return false;
   }
   for (let n = 0; n < t.length; n++) {
    if (e[n] !== t[n]) {
     return false;
    }
   }
   return true;
  }
  t.startsWith = r;
  function i(e, t) {
   let n = e.length - t.length;
   if (n > 0) {
    return e.lastIndexOf(t) === n;
   } else if (n === 0) {
    return e === t;
   } else {
    return false;
   }
  }
  t.endsWith = i;
  function s(e) {
   return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*");
  }
  t.convertSimple2RegExpPattern = s;
 },
 wtHW: function(e, t, n) {
  "use strict";
  var r = n("YU9W");
  e.exports = r.DEFAULT = new r({
   include: [ n("+kP4") ],
   explicit: [ n("N7S1"), n("DboN"), n("F3LQ") ]
  });
 },
 xZJO: function(e, t, n) {
  "use strict";
  var r = n("NkYg").Buffer;
  var i = n("cYFF");
  var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
  function a(e) {
   if (null === e) {
    return false;
   }
   var t, n, r = 0, i = 0, a = e.length, o = s;
   for (n = 0; n < a; n++) {
    t = o.indexOf(e.charAt(n));
    if (t > 64) {
     continue;
    }
    if (t < 0) {
     return false;
    }
    r += 6;
   }
   return r % 8 === 0;
  }
  function o(e) {
   var t, n, i, a = e.replace(/[\r\n=]/g, ""), o = a.length, u = s, c = 0, l = [];
   for (n = 0; n < o; n++) {
    if (n % 4 === 0 && n) {
     l.push(c >> 16 & 255);
     l.push(c >> 8 & 255);
     l.push(c & 255);
    }
    c = c << 6 | u.indexOf(a.charAt(n));
   }
   i = o % 4 * 6;
   if (i === 0) {
    l.push(c >> 16 & 255);
    l.push(c >> 8 & 255);
    l.push(c & 255);
   } else if (i === 18) {
    l.push(c >> 10 & 255);
    l.push(c >> 2 & 255);
   } else if (i === 12) {
    l.push(c >> 4 & 255);
   }
   if (r) {
    return new r(l);
   }
   return l;
  }
  function u(e) {
   var t = "", n = 0, r, i, a = e.length, o = s;
   for (r = 0; r < a; r++) {
    if (r % 3 === 0 && r) {
     t += o[n >> 18 & 63];
     t += o[n >> 12 & 63];
     t += o[n >> 6 & 63];
     t += o[n & 63];
    }
    n = (n << 8) + e[r];
   }
   i = a % 3;
   if (i === 0) {
    t += o[n >> 18 & 63];
    t += o[n >> 12 & 63];
    t += o[n >> 6 & 63];
    t += o[n & 63];
   } else if (i === 2) {
    t += o[n >> 10 & 63];
    t += o[n >> 4 & 63];
    t += o[n << 2 & 63];
    t += o[64];
   } else if (i === 1) {
    t += o[n >> 2 & 63];
    t += o[n << 4 & 63];
    t += o[64];
    t += o[64];
   }
   return t;
  }
  function c(e) {
   return r && r.isBuffer(e);
  }
  e.exports = new i.Type("tag:yaml.org,2002:binary", {
   kind: "scalar",
   resolve: a,
   construct: o,
   predicate: c,
   represent: u
  });
 },
 xkfG: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = Object.prototype.toString;
  function i(e) {
   return e === true || e === false;
  }
  t.boolean = i;
  function s(e) {
   return r.call(e) === "[object String]";
  }
  t.string = s;
  function a(e) {
   return r.call(e) === "[object Number]";
  }
  t.number = a;
  function o(e) {
   return r.call(e) === "[object Error]";
  }
  t.error = o;
  function u(e) {
   return r.call(e) === "[object Function]";
  }
  t.func = u;
  function c(e) {
   return Array.isArray(e);
  }
  t.array = c;
  function l(e) {
   return c(e) && e.every(e => s(e));
  }
  t.stringArray = l;
  function h(e, t) {
   return Array.isArray(e) && e.every(t);
  }
  t.typedArray = h;
  function f(e) {
   return e && u(e.then);
  }
  t.thenable = f;
 },
 xnuB: function(e, t, n) {
  "use strict";
  var r = n("gax4");
  var i = Object.prototype.hasOwnProperty;
  function s(e) {
   if (e === null) return true;
   var t, n = e;
   for (t in n) {
    if (i.call(n, t)) {
     if (n[t] !== null) return false;
    }
   }
   return true;
  }
  function a(e) {
   return e !== null ? e : {};
  }
  e.exports = new r("tag:yaml.org,2002:set", {
   kind: "mapping",
   resolve: s,
   construct: a
  });
 },
 yRVO: function(e, t, n) {
  "use strict";
  function r(e) {
   for (var n in e) if (!t.hasOwnProperty(n)) t[n] = e[n];
  }
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const i = n("rWaT");
  t.ErrorCodes = i.ErrorCodes;
  t.ResponseError = i.ResponseError;
  t.CancellationToken = i.CancellationToken;
  t.CancellationTokenSource = i.CancellationTokenSource;
  t.Disposable = i.Disposable;
  t.Event = i.Event;
  t.Emitter = i.Emitter;
  t.Trace = i.Trace;
  t.SetTraceNotification = i.SetTraceNotification;
  t.LogTraceNotification = i.LogTraceNotification;
  t.RequestType = i.RequestType;
  t.RequestType0 = i.RequestType0;
  t.NotificationType = i.NotificationType;
  t.NotificationType0 = i.NotificationType0;
  t.MessageReader = i.MessageReader;
  t.MessageWriter = i.MessageWriter;
  t.ConnectionStrategy = i.ConnectionStrategy;
  t.StreamMessageReader = i.StreamMessageReader;
  t.StreamMessageWriter = i.StreamMessageWriter;
  t.IPCMessageReader = i.IPCMessageReader;
  t.IPCMessageWriter = i.IPCMessageWriter;
  t.createClientPipeTransport = i.createClientPipeTransport;
  t.createServerPipeTransport = i.createServerPipeTransport;
  t.generateRandomPipeName = i.generateRandomPipeName;
  t.createClientSocketTransport = i.createClientSocketTransport;
  t.createServerSocketTransport = i.createServerSocketTransport;
  r(n("ICfX"));
  r(n("E5wu"));
  function s(e, t, n, r) {
   return i.createMessageConnection(e, t, n, r);
  }
  t.createProtocolConnection = s;
 },
 yXpz: function(e, t, n) {
  "use strict";
  var r = n("YU9W");
  e.exports = new r({
   include: [ n("5Rb2") ]
  });
 },
 yjQg: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  function r(e) {
   return -e - 1;
  }
  t.insertionPointReturnValue = r;
  function i(e, t) {
   let n = 0;
   let i = e.length - 1;
   while (n <= i) {
    let s = Math.floor((n + i) / 2);
    const a = e[s];
    if (a === t) {
     return s;
    }
    if (n === i) {
     const e = a < t ? s + 1 : s;
     return r(e);
    }
    if (t > a) {
     n = s + 1;
    } else if (t < a) {
     i = s - 1;
    }
   }
  }
  t.binarySearch = i;
  function s(e) {
   const t = [ 0 ];
   for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (r === "\r") {
     if (n + 1 < e.length && e[n + 1] == "\n") {
      n++;
     }
     t.push(n + 1);
    } else if (r === "\n") {
     t.push(n + 1);
    }
   }
   return t;
  }
  t.getLineStartPositions = s;
  function a(e, t) {
   let n = i(t, e);
   if (n < 0) {
    const e = -1 * n - 1;
    n = e - 1;
   }
   return {
    line: n,
    column: e - t[n]
   };
  }
  t.getPosition = a;
 },
 z7N8: function(e, t, n) {
  var r = n("Qs2e");
  var i = n("ugmf");
  var s = n("bzos");
  var a = n("rjk/");
  var o = n("jK02").inherits;
  var u = n("te/U")("https-proxy-agent");
  e.exports = c;
  function c(e) {
   if (!(this instanceof c)) return new c(e);
   if ("string" == typeof e) e = s.parse(e);
   if (!e) throw new Error("an HTTP(S) proxy server `host` and `port` must be specified!");
   u("creating new HttpsProxyAgent instance: %o", e);
   a.call(this, e);
   var t = Object.assign({}, e);
   this.secureProxy = t.protocol ? /^https:?$/i.test(t.protocol) : false;
   t.host = t.hostname || t.host;
   t.port = +t.port || (this.secureProxy ? 443 : 80);
   if (this.secureProxy && !("ALPNProtocols" in t)) {
    t.ALPNProtocols = [ "http 1.1" ];
   }
   if (t.host && t.path) {
    delete t.path;
    delete t.pathname;
   }
   this.proxy = t;
   this.defaultPort = 443;
  }
  o(c, a);
  c.prototype.callback = function e(t, n, s) {
   var a = this.proxy;
   var o;
   if (this.secureProxy) {
    o = i.connect(a);
   } else {
    o = r.connect(a);
   }
   var c = [];
   var h = 0;
   function f() {
    var e = o.read();
    if (e) g(e); else o.once("readable", f);
   }
   function p() {
    o.removeListener("data", g);
    o.removeListener("end", m);
    o.removeListener("error", v);
    o.removeListener("close", d);
    o.removeListener("readable", f);
   }
   function d(e) {
    u("onclose had error %o", e);
   }
   function m() {
    u("onend");
   }
   function v(e) {
    p();
    s(e);
   }
   function g(e) {
    c.push(e);
    h += e.length;
    var r = Buffer.concat(c, h);
    var a = r.toString("ascii");
    if (!~a.indexOf("\r\n\r\n")) {
     u("have not received end of HTTP headers yet...");
     if (o.read) {
      f();
     } else {
      o.once("data", g);
     }
     return;
    }
    var l = a.substring(0, a.indexOf("\r\n"));
    var d = +l.split(" ")[1];
    u("got proxy server response: %o", l);
    if (200 == d) {
     var m = o;
     c = r = null;
     if (n.secureEndpoint) {
      u("upgrading proxy-connected socket to TLS connection: %o", n.host);
      n.socket = o;
      n.servername = n.servername || n.host;
      n.host = null;
      n.hostname = null;
      n.port = null;
      m = i.connect(n);
     }
     p();
     s(null, m);
    } else {
     p();
     c = r;
     t.once("socket", y);
     s(null, o);
    }
   }
   function y(e) {
    if ("function" == typeof e.ondata) {
     e.ondata(c, 0, c.length);
    } else if (e.listeners("data").length > 0) {
     e.emit("data", c);
    } else {
     throw new Error("should not happen...");
    }
    c = null;
   }
   o.on("error", v);
   o.on("close", d);
   o.on("end", m);
   if (o.read) {
    f();
   } else {
    o.once("data", g);
   }
   var x = n.host + ":" + n.port;
   var C = "CONNECT " + x + " HTTP/1.1\r\n";
   var D = Object.assign({}, a.headers);
   if (a.auth) {
    D["Proxy-Authorization"] = "Basic " + Buffer.from(a.auth).toString("base64");
   }
   var E = n.host;
   if (!l(n.port, n.secureEndpoint)) {
    E += ":" + n.port;
   }
   D["Host"] = E;
   D["Connection"] = "close";
   Object.keys(D).forEach(function(e) {
    C += e + ": " + D[e] + "\r\n";
   });
   o.write(C + "\r\n");
  };
  function l(e, t) {
   return Boolean(!t && e === 80 || t && e === 443);
  }
 }
});