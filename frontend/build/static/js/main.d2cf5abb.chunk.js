(this.webpackJsonpprs=this.webpackJsonpprs||[]).push([[0],{27:function(e,a,t){e.exports=t(43)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(23),r=t.n(i),s=(t(32),t(6)),c=t(7),o=t(9),m=t(8),d=t(10),h=(t(33),t(2)),u=t(13),p=t(12),b=t(3),g=t(26),E=(t(34),function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={placeTitle:"",description:"",listOfPlaces:[{title:"GandiBazaar",description:"Kadle KAi Pareshe"},{title:"Jayanagar",description:"As a newbie in React world, I came across a similar issues where I could not edit the textarea and struggled"},{title:"Kolar",description:"My native"},{title:"Taj_mahal",description:"The Taj Mahal is located on the right bank of the Yamuna River in a vast Mughal garden that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh. It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD, with the mosque, the guest house and the main gateway on the south, the outer courtyard and its cloisters were added subsequently and completed in 1653 AD. The existence of several historical and Quaranic inscriptions in Arabic script have facilitated setting the chronology of Taj Mahal. For its construction, masons, stone-cutters, inlayers, carvers, painters, calligraphers, dome builders and other artisans were requisitioned from the whole of the empire and also from the Central Asia and Iran. Ustad-Ahmad Lahori was the main architect of the Taj Mahal."}]},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(d.a)(a,e),Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),console.log("The form was submitted with the following data:"),console.log(this.state),this.setState((function(e){return{listOfPlaces:[].concat(Object(g.a)(e.listOfPlaces),[{title:a.state.placeTitle,description:a.state.description}])}}))}},{key:"componentDidMount",value:function(){document.title="Welcome to PRS"}},{key:"render",value:function(){var e=this.state,a=e.placeTitle,t=e.description,n=e.listOfPlaces;return l.a.createElement("div",{className:"Ap"},l.a.createElement("div",{className:"FormFieldB"},l.a.createElement("h4",null,"Welcome to Place Review System"),l.a.createElement("h5",null,"Places listed below can be reviewed.")),l.a.createElement("div",{className:"FormFieldB"},l.a.createElement("div",{className:"FormTitle"},n.map((function(e,a){return l.a.createElement(h.b,{to:{pathname:"/ratingPage/".concat(e.title),state:{description:e.description}},key:a,className:"FormTitle_Ln"},e.title)}))),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h5",null,"To add a new place in the list add title and description in below textbox and click on 'SUBMIT'"),l.a.createElement("div",{className:"FormFieldT"},l.a.createElement("input",{type:"text",placeholder:"Place Title",value:a,name:"placeTitle",onChange:this.handleChange})),l.a.createElement("div",{className:"FormFText"},l.a.createElement("textarea",{type:"text",placeholder:"Description",defaultValue:t,name:"description",onChange:this.handleChange})),l.a.createElement("button",{className:"FormT_button",onClick:this.handleSubmit},"SUBMIT"))))}}]),a}(n.Component)),F=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={name:"",email:"",phone:"",password:"",conpassword:""},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(d.a)(a,e),Object(c.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t=a.type===a.value,n=a.name;this.setState(Object(p.a)({},n,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("The form was submitted with the following data:"),console.log(this.state)}},{key:"componentDidMount",value:function(){var e=this;document.title="PRS log in or sign up",fetch("/users").then((function(e){return e.json()})).then((function(a){return e.setState({users:a})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"FormCenter"},this.componentDidMount(),l.a.createElement("div",{className:"App-header"},l.a.createElement("h1",null,"Place Review System")),l.a.createElement("div",{className:"FormTitle"},l.a.createElement(h.b,{to:"/sign-in",className:"FormTitle__Link"},"Sign In "),"  or",l.a.createElement(h.b,{to:"/sign-up",className:"FormTitle__Link"}," Sign Up")),l.a.createElement("div",{className:"PageSwitcher"},l.a.createElement(h.c,{to:"/sign-",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign In"),l.a.createElement(h.c,{to:"/sign-up",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign Up")),l.a.createElement("form",{onSubmit:this.handleSubmit,className:"FormFields"},l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",id:"name",className:"FormField__Input",placeholder:"Enter your name",name:"name",value:this.state.name,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"email"},"Email Address"),l.a.createElement("input",{type:"email",id:"email",className:"FormField__Input",placeholder:"Enter your Email",name:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"phno"},"Phone no"),l.a.createElement("input",{type:"text",id:"phoneno",className:"FormField__Input",placeholder:"Enter your phone no",name:"phone",value:this.state.phone,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"conpassword"},"Confirm Password"),l.a.createElement("input",{type:"password",id:"conpassword",className:"FormField__Input",placeholder:"Re-enter your password",name:"conpassword",value:this.state.conpassword,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement(h.b,{to:"/sign-in"},l.a.createElement("button",{onClick:function(){alert("Registered successful")},className:"FormField__Button mr-20"},"Sign Up")," "),l.a.createElement(h.b,{to:"/sign-in",className:"FormField__Link"},"I'm already member")),l.a.createElement(u.b,{excat:!0,path:"/welcomePage",component:E})))}}]),a}(n.Component),v=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={email:"",password:""},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(d.a)(a,e),Object(c.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(p.a)({},n,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("The form was submitted with the following data:"),console.log(this.state)}},{key:"componentDidMount",value:function(){document.title="PRS log in or sign up"}},{key:"render",value:function(){return l.a.createElement("div",{className:"FormCenter"},this.componentDidMount(),l.a.createElement("div",{className:"App-header"},l.a.createElement("h1",null,"Place Review System")),l.a.createElement("div",{className:"FormTitle"},l.a.createElement(h.b,{to:"/sign-in",className:"FormTitle__Link"},"Sign In "),"  or",l.a.createElement(h.b,{to:"/sign-up",className:"FormTitle__Link"}," Sign Up")),l.a.createElement("div",{className:"PageSwitcher"},l.a.createElement(h.c,{to:"/sign-in",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign In"),l.a.createElement(h.c,{to:"/sign-up",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign Up")),l.a.createElement("form",{onSubmit:this.handleSubmit,className:"FormFields"},l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"email"},"Email Address"),l.a.createElement("input",{type:"email",id:"email",className:"FormField__Input",placeholder:"Enter your Email",name:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement(h.b,{to:"/welcomePage"},l.a.createElement("button",{onClick:function(){alert("Login Successful ")},className:"FormField__Button mr-20"},"Sign In")," "),l.a.createElement(h.b,{to:"/sign-up",className:"FormField__Link"},"Create an account")),l.a.createElement(u.b,{exact:!0,path:"/welcomePage",component:E})))}}]),a}(n.Component),w=t(19),f=t.n(w),N=(t(41),t(42),function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={rate1:"",comment:"",listOfComments:[{newComment:"woowwww"},{newComment:"abcdef"}]},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(d.a)(a,e),Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.rate1,e.target.value))}},{key:"handle",value:function(e){console.log(e.rating)}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this.state.comment,a=this.props.location.state.description;return console.log(e),l.a.createElement("div",{className:"Appp"},l.a.createElement("div",{className:"FormFieldA"},l.a.createElement("h1",null,this.props.match.params.placeName)),l.a.createElement("div",{className:"FormFieldTe"},l.a.createElement("p",null,a)),l.a.createElement("div",{className:"FormFieldQ"},l.a.createElement("div",{className:"FormFieldHead"},l.a.createElement("h3",null,"Average Rating ")),l.a.createElement("div",{className:"Rater-icon1"},l.a.createElement(f.a,{onRate:this.handle}))),l.a.createElement("div",{className:"FormCenter"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"FormFields"},l.a.createElement("div",{className:"FormF"},l.a.createElement("div",{className:"FormFieldHead"},l.a.createElement("h2",null,"Your rating ")),l.a.createElement("div",{className:"Rater-icon"},l.a.createElement(f.a,{onRate:this.handle,name:"rate1"}))),l.a.createElement("div",{className:"FormFieldA"},l.a.createElement("textarea",{type:"text",placeholder:"Enter your comment",defaultValue:Comment,name:"comment",onChange:this.handleChange})),l.a.createElement("div",{className:"FormFieldA"},l.a.createElement("button",{onClick:this.handleSubmit,className:"Form-Button"},"SUBMIT")))))}}]),a}(n.Component)),_=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Page Not Found"))},S=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(u.d,null,l.a.createElement(u.b,{path:"/",exact:!0,component:v}),l.a.createElement(u.b,{exact:!0,path:"/sign-in",component:v}),l.a.createElement(u.b,{exact:!0,path:"/sign-up",component:F}),l.a.createElement(u.b,{exact:!0,path:"/404",component:_}),l.a.createElement(u.b,{exact:!0,path:"/welcomePage",component:E}),l.a.createElement(u.b,{path:"/ratingPage/:placeName",component:N}),l.a.createElement(u.a,{to:"/404"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.d2cf5abb.chunk.js.map