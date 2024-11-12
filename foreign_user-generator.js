setInterval(async() => {
window.randUsers = await fetch("https://randomuser.me/api?results=50&format=pretty&password=upper,lower,number,8-32&nat=AU, BR, CA, CH, DE, FR, IR, MX, NZ, TR, US&exc=cell").then(r => r.json()).then(d => Object.values(d.results)).catch(() => null);
				if ("length" in window.randUsers) {
					window.randUsers.forEach((u, i) => {
						u.review = {};
						Object.assign(u.review, {
							...u.review,
							get rate(){
								let n=3.8;
								let possibilities = [];
								while (n<=5) {
									possibilities.push(n);
									n = Number((parseFloat(n) + .1).toFixed(1));
									//^the way it's supposed to be::&&::tested
								}
								return possibilities[Math.floor(Math.random()*possibilities.length)]
							}
						});
						Object.assign(u.review, {
							...u.review,
							get text(){
								let reviews = ["great", "wonderful service :)", "fascinated by this", "who wouldn't love this", "I... em.... ig... saitiiiiiiiiiiid", "thumbs up", "cute", "brilliance in work", "uh-oh... looks like I just found a new erogenous zone, let the dopamine mining begin", "I owe you one", "saved me a lifetime", "owe you big time", "I'd like to donate $49 to help you improve your services, because I'd like to see you rising like a a morning sunshine".replace(/(?<=\$)4/, Math.floor(Math.random() * 20)), "you are the best", "can't thank enough", "not bad", "better than the other alternatives", "long live the queen/king", "bloody hell, I've been looking for this everywhere", "spectacular", "out of this world", "helpful", "charmed by this", "extraordinary", "💋", "amazed💋💕", "💗"];
									return reviews[Math.floor(Math.random() * reviews.length)]
							},
							get rating(){return "⭐".repeat(Math.floor(u.review.rate))},
							get score(){return `${Math.floor(u.review.rate/5*100)}%`},
						});
						Object.assign(u, {
							country: u.location.country,
							name: Object.assign({...u.name, full: `${u.name.title} ${u.name.first} ${u.name.last}`}),
							get age(){
								let age = u.dob.age;
								if (age>=60) age-=40;
								if (age>=40) age-=20;
								return age;
							},
							sex: u.gender,
							religion: !!u.location.country.match(/Iran|Turkey/i) ? "Islam" : "Christianity", 
							get state(){return u.location.state},
							get city(){return u.location.city},

							get street(){return `${u.location.street.number} ${u.location.street.name}`},
							get daughter_of() {
								let j = i-5;
								if (!!window.randUsers?.[j]) { 
									let fakeparent = window.randUsers[j].name.full.split(" ");
									fakeparent = `${fakeparent[0]} ${fakeparent[1]} ${window.randUsers[i].name.last}`;
									return fakeparent
								}
							},
							get son_of() {
								let j = i-5;
								if (!!window.randUsers?.[j]) { 
									let fakeparent = window.randUsers[j].name.full.split(" ");
									fakeparent = `${fakeparent[0]} ${fakeparent[1]} ${window.randUsers[i].name.last}`;
									return fakeparent
								}
							},
							get date_registered(){
								let d = u.registered.date.split("T")[0].split("-");
								let dd, mm, yy;
								dd = d[2].replace(/^0/, ""),
								mm = d[1],
								yy = d[0];
								mm = parseInt(mm);
								mm -= 1 ;
								let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
								mm = months[mm];
								return `${mm} ${dd}, ${yy}`;
							},
							get dob(){
								let d = u.dob.date.split("T")[0].split("-");
								let dd, mm, yy;
								dd = d[2].replace(/^0/, ""),
								mm = d[1],
								yy = parseInt(d[0]);
								if (yy<=1964) yy+=40;
								if (yy<=1984) yy+= 20;
								mm = parseInt(mm);
								mm -= 1 ;
								let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
								mm = months[mm];
								return `${mm} ${dd}, ${yy}`;
							},
							get phone(){
						        let val = '(XXX) XXX XXXX'.split('').map(n=>n=n==='X' ? Math.floor(Math.random()*9) : n).join("");
								return val;
							},
							get email(){
								let instances = ["gmail", "yahoo", "hotmail", "outlook", "icloud"];
								let logicalEmail = u.email.replace(/example(?=\.com)/, instances[Math.floor(Math.random()*instances.length)]);
								return logicalEmail
							},
							get img(){return ["./x.jpg"]},
							get status(){
								let arr = ["active", "inactive"];
								return arr[Math.floor(Math.random() * arr.length)]
							},
						});
						let to_delete = ["cell", "location", "nat", "picture", "gender", "id", "registered"];
						if (u.sex==="female") to_delete.push("son_of")
						else to_delete.push("daughter_of");
						to_delete.forEach(p => delete u[p]);
						if (!u.daughter_of) delete u.daughter_of;
						if (!u.son_of) delete u.son_of;
						if (u.status!=="active") {
							Object.assign(u, {
								get last_ip(){
									let str = "";
									for (let i=0; i<4; i++) {
										str += `${Math.floor(Math.random() * 255)}.`;
									}
									return str.slice(0, -1);
								},
								get last_active(){
									let num = [];
									let suffix = ["minutes", "hours", "days", "weeks"];
									for (let i = 1; i<60; i++) num.push(i);
									//^it HAS to start at ONE, NOT o
									suffix.forEach((v,i)=>suffix[i]+=" ago");
									let output = `${num[Math.floor(Math.random()*num.length)]} ${suffix[Math.floor(Math.random()*suffix.length)]}`;
									if (!!output.match(/^1(?=\s\w)/)) output = output.replace(/(?<=minute|hour|day|week)(s)/i, "");
									let extend = [true, false][Math.floor(Math.random() * 2)];
									return !extend ? output : `${output.replace(" ago", "")}, ${num[Math.floor(Math.random()*num.length)]} ${!!output.match(/week/i) ? "day(s)" : (output.match(/day/i) ? "hour(s)" : (output.match(/hour/i) ? "minute(s)" : "second(s)"))} ago`;
								}
							});
						}
					})
				}
			}, 2000);