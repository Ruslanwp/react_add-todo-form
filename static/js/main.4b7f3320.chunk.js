(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(5),s=a.n(i),o=a(8),l=a(2),c=a(6),u=a(7),d=a(10),m=a(9),p=a(3),h=(a(16),a(1)),b=a.n(h),g=(b.a.shape({id:b.a.number.isRequired,name:b.a.string.isRequired,username:b.a.string.isRequired,email:b.a.string.isRequired,address:b.a.shape({street:b.a.string.isRequired,suite:b.a.string.isRequired,city:b.a.string.isRequired,zipcode:b.a.string.isRequired,geo:b.a.shape({lat:b.a.string.isRequired,lng:b.a.string.isRequired})})}),b.a.shape({id:b.a.number.isRequired,title:b.a.string.isRequired,completed:b.a.bool.isRequired,userId:b.a.number.isRequired}).isRequired,function(e){var t=e.title,a=e.user,n=e.status;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,a.name),r.a.createElement("p",null,"title: ",t),r.a.createElement("p",null,"status: ","".concat(n)))}),y=(a(19),function(e){var t=e.todos;return r.a.createElement("ol",{className:"list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"list__item"},r.a.createElement(g,{title:e.title,user:e.user,status:e.completed}))})))});y.defaulProps={todos:[]};var f=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],E=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(p.a)(Object(p.a)({},e),{},{user:f.find((function(t){return t.id===e.userId}))})})),v=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={todos:E,selectedUser:"",userId:null,title:"",selectedUserError:"",titleError:""},e.userHandler=function(t){var a,n=t.target,r=n.name,i=n.value,s=f.find((function(e){return e.name===i}));e.setState((a={},Object(l.a)(a,r,i),Object(l.a)(a,"userId",s.id),Object(l.a)(a,"selectedUserError",""),a))},e.titleHandler=function(t){var a,n=t.target,r=n.name,i=n.value;e.setState((a={},Object(l.a)(a,r,i),Object(l.a)(a,"titleError",""),a))},e.addTodo=function(){var t=e.state,a=t.userId,n=t.title,r=t.todos,i={userId:a,id:r.length+1,title:n,completed:!1,user:f.find((function(e){return e.id===a}))};e.setState((function(e){return{todos:[].concat(Object(o.a)(e.todos),[i])}}))},e.reset=function(){e.setState({selectedUser:"",userId:null,title:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.selectedUser,n=t.title,i=t.userId,s=t.todos,o=t.selectedUserError,l=t.titleError;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),""===a&&e.setState({selectedUserError:"Please choose a user"}),""!==n?null!==i&&(e.addTodo(),e.reset()):e.setState({titleError:"Please enter the title"})}},r.a.createElement("span",{className:"error"},l),r.a.createElement("input",{type:"text",name:"title",placeholder:"Title",value:n,onChange:this.titleHandler}),r.a.createElement("select",{name:"selectedUser",value:a,onChange:this.userHandler},r.a.createElement("option",null,"Choose a user"),f.map((function(e){return r.a.createElement("option",{key:e.id},e.name)}))),r.a.createElement("span",{className:"error"},o),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))),r.a.createElement(y,{todos:s}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4b7f3320.chunk.js.map