(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"profile_profile__1FpHS",description:"profile_description__2BVYF",avatar:"profile_avatar__5E6CZ",name:"profile_name__3bqy2",tag:"profile_tag__cunY2",location:"profile_location__2BerG",stats:"profile_stats__1XFwA",item:"profile_item__1BsGL",quantity:"profile_quantity__1FO-L",label:"profile_label__1E_PC"}},function(e,a,t){e.exports={transaction__history:"transaction_transaction__history__3LWMf",tablerow:"transaction_tablerow__bICmM",tablehead:"transaction_tablehead__3IscT",column:"transaction_column__2A_fH"}},function(e,a,t){e.exports={friend__list:"friendList_friend__list__28Zfa",item:"friendList_item__boAL6",avatar:"friendList_avatar__2xH8e",status:"friendList_status__2-Ks9",false:"friendList_false__1k5DJ friendList_status__2-Ks9",name:"friendList_name__TTHg6"}},function(e,a,t){e.exports={stats:"stats_stats__p9TJS",title:"stats_title__m0IGw",stat__list:"stats_stat__list__23pR1",item:"stats_item__1awli",label:"stats_label__26CYS",percentage:"stats_percentage__QQV0Y"}},,,function(e,a,t){e.exports={container:"components_container__3dz0R"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".jpg","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(6),r=t.n(c),i=t(7),l=t.n(i),m=t(1),o=t.n(m),d=function(e){var a=e.statsItem,t=e.quantity.toString();return s.a.createElement("li",{className:o.a.item},s.a.createElement("span",{className:o.a.label},a),s.a.createElement("span",{className:o.a.quantity},t))},u=function(e){var a=e.stats;return s.a.createElement("ul",{className:o.a.stats},s.a.createElement(d,{statsItem:"Followers",quantity:a.followers}),s.a.createElement(d,{statsItem:"Views",quantity:a.views}),s.a.createElement(d,{statsItem:"Likes",quantity:a.likes}))},p=function(e){var a=e.user;return s.a.createElement("div",{className:o.a.profile},s.a.createElement("div",{className:o.a.description},s.a.createElement("img",{className:o.a.avatar,src:a.avatar,alt:"user avatar"}),s.a.createElement("p",{className:o.a.name},a.name),s.a.createElement("p",{className:o.a.tag},a.tag),s.a.createElement("p",{className:o.a.location},a.location)),s.a.createElement(u,{stats:a.stats}))},f=t(8),_=t(4),b=t.n(_),y=function(e){var a=e.title,t=e.stats;return s.a.createElement("section",{className:b.a.stats},a&&s.a.createElement("h2",{className:b.a.title},a),s.a.createElement("ul",{className:b.a.stat__list},t.map((function(e){return s.a.createElement("li",{className:b.a.item,key:e.id},s.a.createElement("span",{className:b.a.label},e.label),s.a.createElement("span",{className:b.a.percentage},e.percentage,"%"))}))))};y.defaultProps={title:""};var E=y,w=t(9),v=t(3),N=t.n(v),h=function(e){var a=e.avatar,t=e.name,n=e.isOnline;return s.a.createElement("li",{className:N.a.item},s.a.createElement("span",{className:n?N.a.status:N.a.false}),s.a.createElement("img",{className:N.a.avatar,src:a,alt:"avatar",width:"48"}),s.a.createElement("p",{className:N.a.name},t))},g=function(e){var a=e.friends;return s.a.createElement("ul",{className:N.a.friend__list},a.map((function(e){return s.a.createElement(h,{key:e.id,avatar:e.avatar,name:e.name,isOnline:e.isOnline})})))},L=t(10),O=t(2),x=t.n(O),k=function(e){var a=e.items;return s.a.createElement("table",{className:x.a.transaction__history},s.a.createElement("thead",null,s.a.createElement("tr",{className:x.a.tablerow},s.a.createElement("th",{className:x.a.tablehead},"Type"),s.a.createElement("th",{className:x.a.tablehead},"Amount"),s.a.createElement("th",{className:x.a.tablehead},"Currency"))),s.a.createElement("tbody",null,a.map((function(e){return s.a.createElement("tr",{key:e.id},s.a.createElement("td",{className:x.a.column},e.type),s.a.createElement("td",{className:x.a.column},e.amount),s.a.createElement("td",{className:x.a.column},e.currency))}))))},j=t(11),J=function(){return s.a.createElement("div",{className:l.a.container},s.a.createElement(p,{user:f}),s.a.createElement(E,{title:"Upload stats",stats:w}),s.a.createElement(g,{friends:L}),s.a.createElement(k,{items:j}))};r.a.render(s.a.createElement(J,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.5051d859.chunk.js.map