(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./docz/examples/08-example-cell-styling.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return j});var l=t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),r=t.n(l),a=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=t.n(a),o=t("./node_modules/@babel/runtime/helpers/createClass.js"),s=t.n(o),d=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),u=t.n(d),m=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),c=t.n(m),p=t("./node_modules/@babel/runtime/helpers/inherits.js"),b=t.n(p),h=t("./node_modules/react/index.js"),f=t.n(h),y=t("./node_modules/@mdx-js/tag/dist/index.js"),_=t("./docz/utils/Playground.jsx"),g=t("./src/material-table.js"),j=function(e){function n(e){var t;return i()(this,n),(t=u()(this,c()(n).call(this,e))).layout=null,t}return b()(n,e),s()(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=r()(e,["components"]);return f.a.createElement(y.MDXTag,{name:"wrapper",components:n},f.a.createElement(y.MDXTag,{name:"h2",components:n,props:{id:"cell-styling-example"}},"Cell Styling Example"),f.a.createElement(_.a,{__codesandbox:"undefined",__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    {\n      title: 'Birth Year',\n      field: 'birthYear',\n      type: 'numeric',\n      cellStyle: data => {\n        if (data > 2000) {\n          return {\n            color: 'red',\n          }\n        }\n      },\n    },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n      cellStyle: { fontWeight: 'bold' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Cell Styling\"\n/>",__scope:{props:this?this.props:t,Playground:_.a,MaterialTable:g.b}},f.a.createElement(g.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric",cellStyle:function(e){if(e>2e3)return{color:"red"}}},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"},cellStyle:{fontWeight:"bold"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"Cell Styling"})))}}]),n}(f.a.Component);j.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./docz/utils/Playground.jsx":function(e,n,t){"use strict";var l=t("./node_modules/docz/dist/index.m.js"),r=t("./node_modules/codemirror/lib/codemirror.js");t.n(r).a.defaults.viewportMargin=1/0,n.a=l.e}}]);
//# sourceMappingURL=docz-examples-08-example-cell-styling.98312b71cf722aef2ebf.js.map