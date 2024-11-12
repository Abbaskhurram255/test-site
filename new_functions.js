///////////
/*
    LICENSED UNDER MIT
        COPYRIGHT 2023 ABBASKHURRAM255
        GITHUB.COM/ABBASKHURRAM255

	You are hereby granted a non-official copy of this software, and agree to comply by the rules: FREEWARE rather than open-sourced. What this means is, no copying, no redistribution, and no alterations in any form, be it physical, or technical. The following software (hereafter "_$"), should only be seen as a WIP, meaning one may only use it if they agree to accept it AS/IS, WITHOUT WARRANTY OF ANY KIND, BE IT EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY. _$, AND THE DISTRIBUTING COMPANY, SHALL NOT BE HELD LIABLE FOR ANY DAMAGE TO THE LICENSEE IN ANY POSSIBLE WAY. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. The purpose of this software is hereby expressed as, some library to give you (hereafter "the licensee"), a hold of everything not already seen in jQuery, the first thought that would come to mind is, better variable support, support for variables that contain neither a jQuery object nor a plain html element, but instead, numbers, strings, regular expressions, plain objects, and arrays! Since it is clear as day, one cannot do much with anything other than elements, and arrays, with the use of jQuery (as jQuery in itself, as-is, does NOT come with many utilities for arrays, objects, strings, and functions, and is widely meant for elements over other data types), _$ has got your back from a string to a number, from an integer to a float, from email validation to passwords. Everything unseen in jQuery. However, one should bear in mind that although _$ may be syntactically similar to the jQuery syntax, it is not meant to entirely replace jQuery, AS OF YET, but to be used alongside it (since it is a work-in-progress, as stated). JQuery for elements, and _$ for variables under-the-hood. Should one scroll past this section, the act will be seen as an agreement to EVERYTHING aforementioned.
*/
//////////

const isBrowser = (isWindow = ![typeof window.document, typeof document, typeof window].includes('undefined') && !!window && this===window && !(typeof process !== 'undefined' &&
  !!process.versions &&
  !!process.versions.node));
if (!isBrowser) throw new Error("_$ is not supported by your environment, switch to a supporting browser");	

const both = (...args) => args.length > 1 ? args.every(arg => !!is(arg)) : null,
    either = (...args) => args.length > 1 ? args.some(arg => !!is(arg)) : null,
    neither = (...args) => args.length > 1 ? !either(...args) : null,
	_y = (on = true),
	_n = (off = false),
	toString = (v) => Object.prototype.toString.call(v).toLowerCase().slice(8, -1),
	//NO MORE FIXES NEEDED
	//Make sure you don't create new bugs instead of fixing the non-existent. All tests passed!
	is = (exists = exist = Bool = (...sth) => !!sth.length ? (typeof sth[1]!=="function" ? sth.every(thing => (typeof thing==="object" || (!sth || !String(sth).trim().length) || (typeof thing!=='number' && !String(thing).match(/^[\W\S]{3,}/))) ? (toString(thing)==="object" ? (!!Object.values(thing).length && (Object.values(thing).length===1?!!Object.values(thing)?.[0]:true) || (thing.constructor == RegExp ? !!String(thing).length : (thing instanceof HTMLElement ? true : false))) : (!!thing && !String(thing).trim().match(/^[0.NaN]+$/) && (!!String(thing).trim().length || !!parseFloat(thing)))) : (typeof thing!=="string" && !!String(thing).match(/^[\W\S]{3,}/g) ? eval(thing) : (thing instanceof HTMLElement || thing.nodeType ? true : (!!String(parseFloat(thing)).length && parseFloat(thing)!==0)))) : ((!!is(String(sth[0])) && (typeof sth[0] !=="object" && typeof sth[0] !== "function" ? !!eval(String(sth[0])) : is(sth[0]))) && typeof sth[1]==="function") ? sth[1]() : is(sth.values())) : null),
//took 10+ tests, but just try: is({name: "Ayesha"}, ["romance-queen"], 1===1, 'localStorage' in window) //expected output: true:Boolean
//is({name: "Ayesha 💕"}, () => console.log("yeah")) logs "yeah" thanks to the callback passed as @param2, while `is({name: null}, () => console.log("yeah"))` logs false, cancelling out the callback 
	not = (isnt = isEmp = dexists = (...stuff) => stuff.length ? stuff.every(it => !is(it)) : null),
	//most tests done, works with ALMOST ANY TYPE
	nnul = (nnl = isnnl = (...sth) => sth.length ? sth.every(v => !nl(v)) : null),
	nul = (nl = isnl = (...sth) => sth.length ? sth.every(th => (th===null || th===undefined) || (typeof th==="number" ? isnan(th) : null)) : null),
	//NAN'S YELL NULL, TOO, since you can't process mathematical operations on them
	isdef = (...sth) => sth.length ? sth.every(v => !isundef(v)) : null,
	isundef = (...sth) => sth.length ? sth.every(th => th===undefined) : null,
	eq = (...sth) => sth.length>1 ? (sth.every(th => {for (let i=0; i<sth.length; i++) return !!toString(th).match(/object|array/i) ? (JSON.stringify(th) === JSON.stringify(sth[i])) : th === sth[i]})) : null,
	uneq = (...sth) => sth.length > 1 ? !eq(...sth) : null,
	sw = (case1, handleC1, case2, handleC2, case3, handleC3, case4, handleC4, case5, handleC5) => {
		try {
			switch(true){
				case is(case1):
		            return is(handleC1) ? (isFunc(handleC1) ? handleC1() : (!isStr(handleC1) && !nnan(handleC1) ? eval(handleC1) : handleC1)) : null;
		            break;
		        case is(case2):
		            return is(handleC2) ? (isFunc(handleC2) ? handleC2() : (!isStr(handleC2) && !nnan(handleC2) ? eval(handleC2) : handleC2)) : null;
		            break;
		        case is(case3):
		            return is(handleC3) ? (isFunc(handleC3) ? handleC3() : (!isStr(handleC3) && !nnan(handleC3) ? eval(handleC3) : handleC3)) : null;
		            break;
		        case is(case4):
		            return is(handleC4) ? (isFunc(handleC4) ? handleC4() : (!isStr(handleC4) && !nnan(handleC4) ? eval(handleC4) : handleC4)) : null;
		            break;
				case is(case5):
					return is(handleC5) ? (isFunc(handleC5) ? handleC5() : (!isStr(handleC5) && !nnan(handleC5) ? eval(handleC5) : handleC5)) : null;
					break;
		        default:
			        return null;
			}
		} catch {
			return null;
		}
	},
	/** TESTS **/
	//TAKE 1: sw(len(__$)>len(window), () => console.log(`Length of __$ (${len(__$)}) is shorter than that of object window (${len(window)})`), len(__$)===200, ret("Equal to 200"), len(__$) > 200, () => console.log("this one's gonna be ignored too, thanks to the mismatch in lengths"), len(__$)<100, ret("shorter than 100, at least!?"))
	//TAKE 2: sw(len(__$)<len(window), () => console.log(`Length of __$ (${len(__$)}) is greater than that of object window (${len(window)})`), len(__$)===200, ret("Equal to 200"), len(__$) > 200, () => console.log("this one's gonna be ignored too, thanks to the mismatch in lengths"), len(__$)<50, ret("shorter than 50, at least!?"))
	Int = function(...sth) {
		if (len(sth)) {
		    let res = sth.map(th => ((!!String(th).length || !!String(parseInt(th)).length)) && /[0-9\.]+/g.test(String(th)) && ['string', 'number'].includes(typeof th) && typeof th!=='boolean' ? parseInt(String(th).match(/(-|\+)?\d*\.?\d+/g)[0] ?? null) : null);
		    res = res.length>1 ? res : res[0];
			res = isArr(res) ? (res.every(p => nnan(p)) ? res : null) : (nnan(res) ? res : null);
			return res;
		}
		return null
	},
	Flt = function(...sth) {
		if (len(sth)) {
		    let res = sth.map(th => ((!!String(th).length || !!String(parseInt(th)).length)) && ['string', 'number'].includes(typeof th) && typeof th!=='boolean' ? parseFloat(String(th).match(/(-|\+)?\d*\.?\d+/g)?.[0]) : null);
		    res = res.length>1 ? res : res[0];
			res = isArr(res) ? (res.every(p => nnan(p)) ? res : null) : (nnan(res) ? res : null);
			return res;
		}
		return null
	},
	Num = function(...sth) {
		if (len(sth)) {
		    let res = sth.map(th => ((!!String(th).length || !!String(parseInt(th)).length)) && /[0-9\.]+/.test(String(th)) && ['string', 'number'].includes(typeof th) && typeof th!=='boolean' ? Number(String(th).match(/(-|\+)?\d*\.?\d+/g)?.[0]) : null);
		    res = res.length>1 ? res : res[0];
			res = isArr(res) ? (res.every(p => nnan(p)) ? res : null) : (nnan(res) ? res : null);
			return res;
		}
		return null
	},
	Pos = (Positive = makePositive = function(...stuff) {
		if (len(stuff) && nnan(...stuff)) {
			let res = stuff.map(n => Num(Str(n).replace(/\-/, "")));
			return res.length > 1 ? res:res[0];
		}
		return null;
	}),
	Neg = function(...stuff) {
		if (len(stuff) && nnan(...stuff)) {
			let res = stuff.map(n => Num(n) <= 0 ? Num(n) : Num(-n));
			return res.length > 1 ? res:res[0];
		}
		return null;
	},
	Dec = (Decimal = function(n, pos=1){
		if (is(n, pos) && nnan(n, pos)) {
			n = parseFloat(n),
			  pos = parseInt(pos);
			let res;
			if (!/\.\d/.test(String(n))) res = parseFloat(parseFloat(`${String(n)}.1`).toFixed(1).replace(`${n}.1`, `${n}.0001`));
			else {
				res = n.toFixed(pos);
				if (pos===1) res = parseFloat(res)
			}
			return res;
		}
		return 0;
	}),
	//NO messing!
	type = (obj, lookup) => {if (nnul(obj)) {let con = obj.constructor.name.toLowerCase();let res;if (lookup) {if (!isFunc(lookup) && (isStr(lookup)||isRegex(lookup))) res = !!con.match(lookup);else res = con === Str(lookup).toLowerCase().split(" ")[1].replace("()", "");}else{res = con}return res}return null},
	notType = (isntType = aintType = (obj, lookup) => either(isFunc(lookup), isStr(lookup)) ? !type(obj, lookup) : null),
	len = (str, guess) => is(str) ? nnan(String(guess).replace(/[<=>\D]+/g, "")) ? (!String(guess).match(/[<=>\D]+/) ? len(str) === Int(Str(guess).replace(/\D+/g, "")) : (!!String(guess).match(/>(?!\=)/) ? len(str) > Int(guess.replace(/[>\D]+/g, "")) : (String(guess).match(/<(?!\=)/) ? len(str) < Int(guess.replace(/[<\D]+/g, "")) : (!!String(guess).match(/>(?=\=)/) ? len(str) >= Int(guess.replace(/[>=\D]+/g, "")) : (!!String(guess).match(/<(?=\=)/) ? len(str) <= Int(guess.replace(/[<=\D]+/g, "")) : len(str) === Int(guess.replace(/[\D]+/g, ""))))))) : (!(str instanceof HTMLElement) ? (["string", "number", "object"].includes(typeof str) ? ((typeof str !== "object" ? String(str).trim().length : (str.constructor != RegExp ? (Object.values(str).length || (Object.values(str).length===1 ? !!Object.values(str)?.[0] : 0)) : (/(?<=..\/)[gmi]{1,3}$/g.test(String(str)) ? (String(str).length-(String(str).match(/(?<=..\/)[gmi]{1,3}$/g).join("").split("").length)-2) : String(str).length-2))) || (String(str).length != 15 ? (!String(str).match(/^[0.NaN]+$/) ? (!String(str).match(/^Infinity$/) ? String(str).length : Infinity) : 0) : 0)):1) : (str instanceof HTMLElement ? 1 : null)) : 0,
	notlen = (str, guess) => !len(str, guess),
	//most tests done, works WITH ALMOST ANY TYPE,
	calc = (...args) => is(...args) ? (!String(...args).match(/object|function/i) ? eval(String(...args)) : null) : null,
	Str = function(...sth) {
		if (len(sth)) {
		    let res = sth.map(th => String(th));
		    return res.length>1 ? res : res[0]
		}
		return null
	},
	Arr = (...args) => {
		let index_handler = {
		    get(target, key, receiver) {
		        let index = Number(String(key));
		        let prop = index < 0 ? `${target.length + index}` : key;
		        return Reflect.get(target, prop, receiver);
		  }
		}
		let arr = Array.of(...args);
		return new Proxy(arr, index_handler);
	},
	isNumsArr = (...stuff) => !!stuff.length ? stuff.every(arr => !!arr.length && isArr(arr) && [...arr].every(unknown_type => /^(\+|\-)?[0-9(.)]+$/.test(String(unknown_type)) && !isNaN(unknown_type))) : null,
	//checks if ALL an array has, is NUMBERS, be it in itself, or be it as a string
	isInt = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.every(mix => {
			    let test = /^(-|\+)?\d+$/.test(String(mix));
				let test2 = !isNaN(mix) ? Number(mix) % 1 === 0 : null;
			    return test && test2;
			});
			return res;
		}
		return null
	},
	isFlt = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.every(mix => {
				let test = /^(-|\+)?\d*\.\d+$/.test(String(mix));
				let test2 = !isNaN(mix) ? Number(mix) % 1 !== 0 : null;
			    return test && test2;
			});
			return res;
		}
		return null
	},
	hasInt = (intIn = intsIn = (...stuff) => len(stuff) ? stuff.every(mix => not(/\d+(?=\.)/g.test(String(mix).replace(/[^\.\d]+/g, "")))) : null),
	hasFlt = (fltIn = fltsIn = (...stuff) => len(stuff) ? stuff.every(mix => /(-|\+)?\d*\.\d+/g.test(String(mix))) : null),
	numsIn = (numIn = (...stuff) => !!len(stuff) ? stuff.some(mix => /(\+|\-)?[0-9]+/.test(String(mix))) : null),
	hasNums = (...stuff) => !!len(stuff) ? stuff.every(mix => /(\+|\-)?[0-9]+/.test(String(mix))) : null,
	hasWords = (...stuff) => {
		if (stuff.length && stuff.every(it => toString(it).match(/string|array|object/))) {
	            let res = stuff.every(it => {
	                if(isObj(it)) it=Object.values(it);
		        it=String(it);
		        return it.match(/[a-zA-Z]{2,}/);
	           });
	           return res;
	            
		}
		return null;
	},
	catchNums = (...stuff) => {
		if (!!len(stuff) && hasNums(stuff.flat(Infinity))) {
			let res = stuff.map(it => {
				if (String(it).match(/(-|\+)?\d*\.?\d+/g)) return String(it).match(/(-|\+)?\d*\.?\d+/g).map(n => Number(n))
			});
			res = res.flat(Infinity);
			res = res.filter(v => !!v);
			return res.length>1?res:res[0]
		}
		return null;
	},
	removeNums = (...stuff) => {
		let res;
		if (stuff.length) {
			res = stuff.map(str => typeof str==="string" ? str.replace(/\s*[-\d.]+|[-\d.]+\s*/g, "").replace(/([a-z](?=[A-Z])|,(?=[a-z]))/g, "$& ").trim() : (Array.isArray(str) ? str.filter(v => !nnan(v)).flat(Infinity).join(" ++ ").replace(/\s*[-\d.]+|[-\d.]+\s*/g, "").replace(/([a-z](?=[A-Z])|,(?=[a-z]))/g, "$& ").trim().split(" ++ ") : null));
			res = res.length > 1 ? res : res[0]
			return !res.includes(null) ? res : null
		}
		return null;
	};
	//try, apparently, currently with strings, the accuracy's only 60--70% (for better accuracy, you could try the splitIntoWords method instead, but that'll only keeps the words, wiping out all the spaces, commas, periods, and stuff): removeNums("hi6 there, 5love 3 -4 5 6  7 4.8. How yo 6u doing? I've4.81 been waiting he 0.9179re 6  for you so lo68.90ng47!", "hey baby, I want you all day, 24/7, 365!")
	//here's a demo with an array, works better than a string: removeNums(["hi6 there, 5love 3 -4 5 6  7 4.8", "7.9", 7, 22, "miss you 200"])
	ispurenan = (...sth) => sth.length ? sth.every(th => type(th, "number") ? isNaN(th) : null) : null,
	nan = (isnan = (...sth) => sth.length ? !nnan(...sth) : null),
	nnan = (isNum = (...sth) => sth.length ? sth.every(th => (((parseFloat(th)===0 || !!th) && !isNaN(th) && !!String(th).length && ['string', 'number'].includes(typeof th)) && (typeof th!=='object' && !!String(th).length))) : null),
	isinf = (isInf = (...sth) => sth.length ? sth.every(th => type(th, /number|string/) ? !isFinite(th) || ispurenan(th) : null) : null),
	isfin = (isFin = fin = (...sth) => sth.length ? sth.every(th => type(th, /number|string/) ? isFinite(th) && !isNaN(th) : null) : null),
	//checks for both, FINITEness, and numeric invalidity: NAN
	isPos = (ispos = (...nums) => !!nums.length && nnan(...nums) ? nums.every(n => Math.abs(Num(n)) == n) : null),
	isNeg = (isneg = (...nums) => !!nums.length ? !isPos(...nums) : null),
	isEven = (...stuff) => nnan(...stuff) && len(stuff) ? stuff.every(n => Int(n) % 2 === 0) : null,
	isOdd = (...stuff) => len(stuff) ? stuff.every(n => !isEven(n)) : null,
	isBinary = (n) => !isNaN(n) && /^(-|\+)?[0-1]+$/.test(String(n)),
	isStr = (...stuff) => {
		if (len(stuff)) {
		    let res = stuff.every(item => {
				return toString(item) === "string";
			});
			return res;
		}
		return null
	},
	strsIn = (...stuff) => {
		if (len(stuff)) {
		    let res = stuff.some(item => {
				return isArr(item) ? item.some(v => toString(v) === "string") : toString(item) === "string";
			});
			return res;
		}
		return null
	}, 
	isStrLike = (...stuff) => !!stuff.length ? stuff.every(it => !!toString(it).match(/string|regexp/i) || (typeof it==="string" || it instanceof RegExp)) : null,
	isBool = (...stuff) => {
		if (stuff.length) {
			let res = stuff.every(item => {
				return toString(item) === "boolean";
			});
			return res;
		}
		return null
	},
	boolsIn = (...stuff) => {
		if (stuff.length) {
			let res = stuff.some(item => {
				return isArr(item) ? item.some(v => toString(v) === "boolean") : toString(item) === "boolean";
			});
			return res;
		}
		return null
	},
	isDate = function (...stuff){
		return stuff.length ? stuff.every(dt => (numsIn(dt) || dt instanceof Date) && incl(Str(dt), /\w{2,10}\W\w{2,10}\W\w{2,10}/)) : null
	},
	input = (cin = prompt),
	//Done 5+ tests, works
	isFun = (isFunc = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.every(item => {
				return toString(item) === "function";
			});
			return res;
		}
		return null
	}),
	funcIn = (funcsIn = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.some(item => {
				return isArr(item) ? item.some(v => toString(v) === "function") : toString(item) === "function";
			});
			return res;
		}
		return null
	}),
	isItrbl = (isItrl = isitrbl = isIterable = itrl = itrbl = hasKeys = haskeys = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.every(v => {
				//@param v means an object, or an array
				return !!toString(v).match(/object|window|array/i) && !!Object.values(v).length && !!Object.values(v).some(w => !!String(w).length && !!w);
			});
			return res;
		}
		return null
	}),
	isArr = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.every(item => {
				return Array.isArray(item) || toString(item) === 'array';
			});
			return res;
		}
		return null
	},
	arrsIn = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.some(item => {
				return Array.isArray(item) ? item.some(v => Array.isArray(v)) : Array.isArray(item);
			});
			return res;
		}
		return null
	},
	isObj = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.every(item => {
				return !Array.isArray(item) && typeof item==="object" && !!toString(item).match(/object|window/i);
			});
			return res;
		}
		return null;
	},
	objsIn = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.some(item => {
				return isArr(item) ? item.some(v => !Array.isArray(v) && typeof v==="object" && !!toString(v).match(/object|window/i)) :  !Array.isArray(item) && typeof item==="object" && !!toString(item).match(/object|window/i);
			});
			return res;
		}
		return null;
	},
	isObjLike = (...stuff) => !!len(stuff) ? stuff.every(it => !!toString(it).match(/array|object|window/i)) : null,
	//done 4+ tests, mostly works
	isRegex = (...stuff) => !!len(stuff) ? stuff.every(it => /^\/.+\/[gmi]{0,3}$/.test(String(it)) && toString(it) === "regexp") : null,
	regexIn = (...stuff) => !!len(stuff) ? stuff.some(it => isArr(it) ? it.some(v => /^\/.+\/[gmi]{0,3}$/.test(String(v)) && toString(v) === "regexp") : /^\/.+\/[gmi]{0,3}$/.test(String(it)) && toString(it) === "regexp") : null,
	Re = RegExp,
	raw = (escape = String.raw),
	isElement = (isElm = (...stuff) => {
		if (!!len(stuff)) {
			let res = stuff.every(q => {
			    try {
			        q = document.querySelector(q);
			    } catch {
			        q = q;
			    }
			    let reslt, test = (_with) => /element|document|window|css/ig.test(_with);
			    try {
			        reslt = (test(toString(q)) || document.contains(q)) && (q.nodeType>0 || typeof q.nodeName === "string");
			    } catch {
			        reslt = test(toString(q));
			    }
			    return reslt;
			});
			return res;
		}
		return null;
	}),
	isHtml = (isTag = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.every(str => {
				return typeof str==="string" && !!str.length ? /<.+>(.*)<\/.+>|<.+\/>/g.test(str.trim()) : isElement(str);
			});
			return res;
		}
		return null;
	}),
	catchHtml = (catchTag = (str, tag=".+") => typeof str==="string" && typeof tag==="string" && !!String(str).match(RegExp(`<${tag.replace(/\W+/g, "")}\.\+${tag.replace(/\W+/g, "")}>`, "i")) ? str.match(RegExp(`<${tag.replace(/\W+/g, "")}.+${tag.replace(/\W+/g, "")}>`, 'i'))?.[0] : null),
	/*tested positive with: 
		catchTag("       lorem ipsum dolor sit azbet kamet    <body><div id='root'><div id='g-primary' class='gbn-main'>.+</div></div><div id='footer'></div></body>    yada yada yada")
		catchTag("<body><div id='root'><div id='g-primary' class='gbn-main'>.+</div></div><div id='footer'></div></body>", "<div>")
	*/
	isCss = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.every(str => {
				return typeof str==="string" && !!str.length ? !!str.trim().match(/^([\w\.\#\:\-\s\,\+\~\>\[\]\=\'\"\\\^\$\~\*]+\s*\{\s*[\w\-]{3,}\:\s*[\w\;\s\-\:\,\(\)\\\'\"\#\%\.\+\-\*\/]{3,}\}\s*){1,}$/gi) : null;
			});
			return res;
		}
		return null;
	},
	catchCss = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.map(str => {
				return typeof str==="string" && !!str.length ? str.trim().match(/([\w\.\#\:\-\s\,\+\~\>\[\]\=\'\"\\\^\$\~\*]+\s*\{\s*[\w\-]{3,}\:\s*[\w\;\s\-\:\,\(\)\\\'\"\#\%\.\+\-\*\/]{3,}\}\s*){1,}/gi) : null;
			});
			return !res.includes(null) ? (res.length > 1 ? res.flat(Infinity) : res[0].flat(Infinity)) : null;
		}
		return null
	},
	//✔️: catchCss("       p {color:red}   span[id=#test.class]{    max-height: calc(40px - 100%)}   ", ".class ~ table { color: linear-gradient(rgba(177, 70, 121, .6), purple, #333)}")
	isHex = (...stuff) => len(stuff) ? stuff.every(str => typeof str==="string" && /^(0x|#)?([a-f0-9]{3}){1,2}([a-z0-9]{2})?$/i.test(String(str))) : null,
	catchHex = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.map(str => {
				return typeof str==="string" && !!str.length ? str.match(/(0x|#)?([a-f0-9]{3}){1,2}([a-z0-9]{2})?/gi) : null;
			});
			return !res.includes(null) ? (res.length > 1 ? res.flat(Infinity) : res[0].flat(Infinity)) : null;
		}
		return null
	},
	catchAttr = (str) => typeof str==="string" && !!String(str).match(/(?<=<[^>]*)(?<=\s)\w+(=['"][\w\s'"\\\/\_\#\?\-\.\,={}():;]*['"](?=[\n>]*))?/g) ? str.match(/(?<=<[^>]*)(?<=\s)\w+(=['"][\w\s'"\\\/\_\#\?\-\.\,={}():;]*['"](?=[\n>]*))?/g) || null : null,
	isMail = (isEmail = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.every(str => {
				return typeof str==="string" && !!str.length ? /^[\w\.\-\_\+\!]+@[\w]+\.[\w]{2,}(\.[\w]{2,})?$/i.test(str.trim()) : null;
			});
			return res;
		}
		return null
	}),
	catchEmail = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.map(str => {
				return typeof str==="string" && !!str.length ? str.match(/[\w\.\-\_]+@[\w]+\.[\w]{2,}(\.[\w]{2,})?/gi) : null;
			});
			return !res.includes(null) ? (res.length > 1 ? res.flat(Infinity) : res[0].flat(Infinity)) : null;
		}
		return null
	},
	isUrl = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.every(str => {
				return typeof str==="string" && !!str.length ? /^(((ht|f)tps?|file|smb):\/\/)?[\w\-]+\.[a-zA-Z\-]{2,}(\.[\w\-]{2,})?(\.[\w\-]{2,})?(\/?[\w\/\-\+\?\=\&\%\#\s\.\:\~\;]+)?$/i.test(str.trim()) : null;
			});
			return res;
		}
		return null
	},
	catchUrl = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.map(str => {
				return typeof str==="string" && !!str.length ? str.match(/((ht|f)tps?:\/\/)?[\w\-]+\.[a-zA-Z\-]{2,}(\.[\w\-]{2,})?(\.[\w\-]{2,})?(\/?[\w\/\-\+\?\=\&\%\#\.\:\~\;]+)?/gi) : null;
			});
			return !res.includes(null) ? (res.length > 1 ? res.flat(Infinity) : res[0].flat(Infinity)) : null;
		}
		return null
	},
	isPhone = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.every(str => {
				return typeof str==="string" && !!str.length ? /^(((([\+?\d\-.]{1,4})?[ \-.]?\d{3})|([\+?\d\-.]{1,4})?[ \-.]?\((\d{3}\)))?[ \-.]?\d{3}[ \-.]?\d{4}\s?(e?x?t?\.?\s?\d{1,7})?)?$/i.test(str.trim()) : null;
			});
			return res;
		}
		return null
	},
	catchPhone = (...stuff) => {
		if (len(stuff)) {
			let res = stuff.map(str => typeof str==="string" && !!str.length ? str.match(/(((([\+?\d\-.]{1,4})?[ \-.]?\d{3})|([\+?\d\-.]{1,4})?[ \-.]?\((\d{3}\)))?[ \-.]?\d{3}[ \-.]?\d{4}\s?(e?x?t?\.?\s?\d{1,7})?)?/gi) : null);
			if (!res.includes(null)) {
				res = res.flat(Infinity).filter(v => !!v).map(v => v.trim());
				res = !!res.length ? (res.length>1?res:res[0]) : null;
				return res;
			}
		}
		return null
	},
	isPin = (n) => !isNaN(n) && /^\d{4,16}$/.test(String(n)),
	Sound = Audio,
	Video = function(src) {
	    let vid = document.createElement('video');
	    vid.preload = "auto";
	    vid.src = src || '';
	    return vid;
	},
	summarize = (item) => {
		if (item != null) {
			let con = item.constructor.name.toLowerCase();
			if (!!con.match(/string|array|regexp|object|number|html|function/i)) {
				let res = {};
				if (con === "string") {
					item = item.trim();
					res = {...res, length: item.length, hasNums: /\d/.test(item), isAlphanumeric: /\d/.test(item) && /[a-zA-Z]/.test(item), catchedNums: !!String(item).match(/(-|\+)?\d*\.?\d+/g) ? String(item).match(/(-|\+)?\d*\.?\d+/g).map(n => Number(n)) : 0, catchedEmails: String(item).match(/[\w\.\-\_]+@[\w]+\.[\w]{2,}(\.[\w]{2,})?/g) ?? 0, catchedUrls: String(item).match(/(((ht|f)tps?|file|smb):\/\/)?[\w\-]+\.[a-zA-Z\-]{2,}(\.[\w\-]{2,})?(\.[\w\-]{2,})?(\/?[\w\/\-\+\?\=\&\%\#\.\:\~\;]+)?/gi) ?? 0, get catchedPhone(){ let phones = String(item).match(/(((([\+?\d\-.]{1,4})?[ \-.]?\d{3})|([\+?\d\-.]{1,4})?[ \-.]?\((\d{3}\)))?[ \-.]?\d{3}[ \-.]?\d{4}\s?(e?x?t?\.?\s?\d{1,7})?)?/g).filter(v => !!v).map(v => v.trim()); phones = phones.length ? phones : 0; return phones}, containsWords: /[a-zA-Z]+/.test(String(item)), possibleHTMLStringsFound: item.match(/<.+>(.*)<\/.+>|<.+\/>/g) ?? 0, wordsFound: String(item).match(/[a-zA-Z'-]+/g) ?? 0, hasTrailingSpaces: /^\s+|\s+$/.test(item), hasCapitalLetters: /[A-Z]/.test(item), capitalLettersFound: String(item).match(/[A-Z]/g) ?? 0, capitalWordsFound: item.match(/[A-Z][a-z']+/g) ?? 0, get shortestWord(){let shortest = "";if (!String(item).match(/[a-zA-Z]{2,}/)) return null;let words = String(item).match(/[a-zA-Z'-]+/g);shortest = words[0];for (word of words) shortest = word.length<shortest.length ? word : shortest;return shortest;}, get longestWord(){let longest = "";if (!String(item).match(/[a-zA-Z]{2,}/)) return null;let words = String(item).match(/[a-zA-Z'-]+/g);longest = words[0];for (word of words) longest = word.length>longest.length ? word : longest;return longest;}, isBlank: !item.trim().length}
				}
				else if (con === "array") {
					res = {...res, length: Object.values(item).length, hasNums: /\d/.test(String(item)), isAlphanumeric: /\d/.test(String(item)) && /[a-zA-Z]/.test(String(item)), catchedNums: !!String(item).match(/(-|\+)?\d*\.?\d+/g) ? String(item).match(/(-|\+)?\d*\.?\d+/g).map(n => Number(n)) : 0, catchedEmails: String(item).match(/[\w\.\-\_]+@[\w]+\.[\w]{2,}(\.[\w]{2,})?/g) ?? 0, catchedUrls: String(item).match(/(((ht|f)tps?|file|smb):\/\/)?[\w\-]+\.[a-zA-Z\-]{2,}(\.[\w\-]{2,})?(\.[\w\-]{2,})?(\/?[\w\/\-\+\?\=\&\%\#\.\:\~\;]+)?/gi) ?? 0, get catchedPhone(){ let phones = String(item).match(/(((([\+?\d\-.]{1,4})?[ \-.]?\d{3})|([\+?\d\-.]{1,4})?[ \-.]?\((\d{3}\)))?[ \-.]?\d{3}[ \-.]?\d{4}\s?(e?x?t?\.?\s?\d{1,7})?)?/g).filter(v => !!v).map(v => v.trim()); phones = phones.length ? phones : 0; return phones}, containsWords: /[a-zA-Z]+/.test(String(item)), possibleHTMLStringsFound: String(item).match(/<.+>(.*)<\/.+>|<.+\/>/g) ?? 0, wordsFound: String(item).match(/[a-zA-Z'-]+/g) ?? 0, hasCapitalLetters: /[A-Z]/.test(String(item)), capitalLettersFound: String(item).match(/[A-Z]/g) ?? 0, capitalWordsFound: String(item).match(/[A-Z][a-z']+/g) ?? 0, get shortestWord(){let shortest = "";if (!String(item).match(/[a-zA-Z]{2,}/)) return null;let words = String(item).match(/[a-zA-Z'-]+/g);shortest = words[0];for (word of words) shortest = word.length<shortest.length ? word : shortest;return shortest;}, get longestWord(){let longest = "";if (!String(item).match(/[a-zA-Z]{2,}/)) return null;let words = String(item).match(/[a-zA-Z'-]+/g);longest = words[0];for (word of words) longest = word.length>longest.length ? word : longest;return longest;}, isBlank: !Object.values(item).length || (item.length === 1 ? !item?.[0] : false)}
				}
				else if (con === "object") {
					item = Object.values(item);
					res = {...res, length: item.length, hasNums: /\d/.test(String(item)), isAlphanumeric: /\d/.test(String(item)) && /[a-zA-Z]/.test(String(item)), catchedNums: !!String(item).match(/(-|\+)?\d*\.?\d+/g) ? String(item).match(/(-|\+)?\d*\.?\d+/g).map(n => Number(n)) : 0, catchedEmails: String(item).match(/[\w\.\-\_]+@[\w]+\.[\w]{2,}(\.[\w]{2,})?/g) ?? 0, catchedUrls: String(item).match(/(((ht|f)tps?|file|smb):\/\/)?[\w\-]+\.[a-zA-Z\-]{2,}(\.[\w\-]{2,})?(\.[\w\-]{2,})?(\/?[\w\/\-\+\?\=\&\%\#\.\:\~\;]+)?/gi) ?? 0, get catchedPhone(){ let phones = String(item).match(/(((([\+?\d\-.]{1,4})?[ \-.]?\d{3})|([\+?\d\-.]{1,4})?[ \-.]?\((\d{3}\)))?[ \-.]?\d{3}[ \-.]?\d{4}\s?(e?x?t?\.?\s?\d{1,7})?)?/g).filter(v => !!v).map(v => v.trim()); phones = phones.length ? phones : 0; return phones}, containsWords: /[a-zA-Z]+/.test(String(item)), possibleHTMLStringsFound: String(item).match(/<.+>(.*)<\/.+>|<.+\/>/g) ?? 0, wordsFound: String(item).match(/[a-zA-Z'-]+/g) ?? 0, hasCapitalLetters: /[A-Z]/.test(String(item)), capitalLettersFound: String(item).match(/[A-Z]/g) ?? 0, capitalWordsFound: String(item).match(/[A-Z][a-z']+/g) ?? 0, get shortestWord(){let shortest = "";if (!String(item).match(/[a-zA-Z]{2,}/)) return null;let words = String(item).match(/[a-zA-Z'-]+/g);shortest = words[0];for (word of words) shortest = word.length<shortest.length ? word : shortest;return shortest;}, get longestWord(){let longest = "";if (!String(item).match(/[a-zA-Z]{2,}/)) return null;let words = String(item).match(/[a-zA-Z'-]+/g);longest = words[0];for (word of words) longest = word.length>longest.length ? word : longest;return longest;}, isBlank: !item.length || (item.length === 1 ? !item?.[0] : false)}
				} else if (con === "regexp") {
					item = String(item);
					res = {...res, hasFlags: /(?<=..\/)[gmi]{1,3}$/g.test(item), flagsFound: !!item.match(/(?<=..\/)[gmi]{1,3}$/g) ? item.match(/(?<=..\/)[gmi]{1,3}$/g).join("").split("") : 0, insensitive: /(?<=\/)[gm]*[i]\w*$/.test(item), global: /(?<=\/)[im]*[g]\w*$/.test(item), positiveLookAheads: item.match(/\(\?\=.+\)/g) ?? 0, positiveLookBehinds: item.match(/\(\?\<\=.+\)/g) ?? 0, exclSets: item.match(/\[\^.+\]/g) ?? 0, negativeLookAheads: item.match(/\(\?\!.+\)/g) ?? 0, negativeLookBehinds: item.match(/\(\?\<\!.+\)/g) ?? 0, length: item.length-(item.match(/(?<=..\/)[gmi]{1,3}$/g) ? item.match(/(?<=..\/)[gmi]{1,3}$/g).join("").split("").length : 0)-2}
				} else if (con === "number") {
					item = String(item);
					res = {longevity: !!item.match(/Infinity/) ? "Unending" : (!!item.match(/^[0.NaN]+$/) ? 0 : item.length), isInt: /^(-|\+)?\d+$/.test(item), floats: {isFlt: /^(-|\+)?\d*\.\d+$/.test(item), numbersSeenBeforePeriod: parseInt(item) || null, numbersSeenAfterPeriod: parseFloat(item.match(/(?<=\d+)\.\d+/)?.[0]) || null}, intVersion: parseInt(item) || null, get fltVersion(){let res; if (!/\.\d/.test(item)) res = parseFloat(parseFloat(`${item}.1`).toFixed(1).replace(`${item}.1`, `${item}.0001`));else {res = parseFloat(item);} return res || null}, roundedVersion: Math.round(parseFloat(item)) || null, isnullish: /^[0.NaN]+$/.test(item), isInfinite: /Infinity/.test(item), supportsMathematicalOperations: !item.match(/Infinity|NaN/)}
				} else if (item.nodeType) {
					res = {children: {length: item.children.length, all: item.children ? [...item.children] : null}, isEjectable: !item.nodeName.toLowerCase().match(/#?document|html|body/), nodeType: item.nodeType, nodeName: item.nodeName.toLowerCase(), isBlank: !item.hasChildNodes() || !item.children.length};
				} else if (con === "function") {
					res = {native: !!item.toString().match(/native/i) ? "Mostly" : "Probably not.", expectedArguments: item.length};
				}
				return res;
			}
		}
		return null;
	},
	th = (Th = function(n) {
	    let ordinals = {one: 'st', two: 'nd', few: 'rd', many: 'th', zero: 'th', other: 'th'};
	    let pluralRules = new Intl.PluralRules("en-US", {
	        type: 'ordinal'
	    });
		n = !isNaN(n) && ["boolean", "object"].every(v => v !== typeof n) ? parseInt(n) : null;
		ordinal = !!n ? ordinals[pluralRules.select(n)] : null;
	    return !!ordinal ? `${n}${ordinal}` : null;
	}),
	Nx = (nSfx= nSx = nsfx = nsx = nx = nsuf = tos = function(val, dec=1) {
	    if (is(val, dec) && nnan(val, dec) && fin(val, dec)) {
			val = Num(val);
			dec = Num(dec);
	        if (dec<0||!dec) dec = 1;
	        let selectedType = Math.log10(Math.abs(val)) / 3 | 0;
	        if (selectedType === 0) return val;
	        let types = ['', 'k', 'M', 'B', 'T', 'qua', 'qui', 'sex', 'sep', 'oct', 'nnl', 'dec', 'und', 'dud', 'trd', 'qud', 'qnd', 'spd', 'ocd', 'nvd', 'vgt'];
	        let number,
			  scaled = (val/Math.pow(10, selectedType*3)).toString();
	        let split = scaled.split('.'), int = split[0], decimal = split[1];
	        if (!decimal) number = int;
	        else number = int + '.' + decimal.slice(0, dec);
	        if(!selectedType) return null;
	        return `${number}${types[selectedType]}`;
		}
		return null;
	}),
	range = function(a, b, step=1){
	    let A = [];
		a = nnan(a) ? parseInt(a) : a; //warning: don't mess
		b = nnan(b) ? parseInt(b) : b;
		step = nnan(step) ? parseInt(step) : step;
		if (!isNaN(a) && isNaN(b)) {
			b = a - 1;
			a = 0;
		}
	    if (nnan(a, b)){
	        A[0] = a;
	        while(a+step <= b){
	            A[A.length]= a+= step;
	        }
	    }
	    else if (isStr(a, b) && nnan(step)) {
	        let s = "abcdefghijklmnopqrstuvwxyz";
	        if (a === a.toUpperCase()) {
	            b = b.toUpperCase();
	            s = s.toUpperCase();
	        }
	        s = s.slice(s.indexOf(a), s.indexOf(b)+1).split("");
			for (let i=0; i<s.length; i+=step) {
				A.push(s[i])
			}
	    }
	    return both(A, A.length) ? A : null;
	},
	/*what's the best you can do with this?
	Try this:
		for (i in range(8)) __$.out(`Length of object __$ (i.e. ${len(__$)}) is greater than that of object window (${len(window)}):`, len(__$) > len(window));
	*/
	Interval = (runEvery = function(ms, fn) {
		if (nnan(ms) && isFunc(fn)) {
			ms = parseInt(ms);
			return window.setInterval(fn, ms <= 100 && ms > 0 ? ms*1000 : (ms < 0 ? 0 : ms));
	}
		return null;
	}),
	//since it's a class, the new keyword and syntax like `new Interval(5, ret("hi"))` is possible
	unInt = (clearInt = (fn) => {
		!!fn && typeof fn==="number" && Int(fn)<2000 ? window.clearInterval(fn) : null;
		//an interval is ALWAYS A NUMBER under 2000, not a function, THINK BEFORE YOU MESS. tested with the Interval function
	}),
	Delay = (Wait = Time = function(_for, then_run) {
		return nnan(_for) && isFunc(then_run) ? window.setTimeout(then_run, _for <= 100 ? _for * 1000 : _for) : null;
	}),
	unTime = (n) => exists(n) && nnan(n) && Int(n)<2000 ? window.clearTimeout(Int(n)) : null,
	//an interval ALWAYS RETURNS A NUMBER, NOT A FUNCTION
	Repeat = (Twice = function(fn, times=2, sep=",") {
		if (isFunc(fn) && nnan(times)) {
			for (i in range(times)) {
				fn();
				//oon ooooon, don't mess with this line
			}
		} else if (isFunc(times) && nnan(fn)) {
			for (i in range(fn)) {
				times();
				//don't mess with this one either, nothing needs to be `return`-ed here, just the function call without the actual `return` keyword
			}
		} else if (is(fn, times, sep) && isStr(fn, sep) && nnan(times)) {
			fn = trim(fn);
			sep = sep || ",";
			if (sep === ",") sep += " ";
			else sep = ` ${sep} `;
			fn += sep;
			return trim(Str(fn).repeat(times).replace(/\W+$/, ""));
		}
		else {return null;}
	}),
	Loop = function(fn, s) {
		let nullcheck1 = isFunc(fn) && nnan(s),
		  nullcheck2 = isFunc(s) && nnan(fn);
		if (nullcheck1) {
			s = Int(s);
			return Interval(s, fn);
		} else if (nullcheck2) {
			fn = Int(fn);
			return Repeat(fn, s);
		}
		return null;
	},
	arr2Args = (arr) => isArr(arr) && isItrl(arr) ? arr.values() : null,
	[bls, bla, blo, undf, none, sp, br, hr] = ["",[],{},(undef=undefined),null,(blsp=bs=" "),"\n","<hr/>"],
	log = (cout = (...params) => !!params.length ? console.log(...params) : null),
	cls = console.clear,
	Err = (cerr = cerror = console.error),
	Warn = (cwarn = cWarn = console.warn),
	
	printf = (print = (...params) => params.length ? console.log(f(...params)) : null),
	
	ret = (...params) => params.length ? () => console.log(...params) : null,
	f = function(...strings) {
	    if (!!strings.length && strings.every(str => !!String(str).trim().length)) {
			//you can't apply the IS here, since it cuts out the zeros too, sometimes you need those
			strings = strings.map(str => {
		        let literalText = [];
		        let noOfLiterals = (literalsFound = String(str).match(/(?<=(?<!\\)\$)([{(]?[\w\+\-\*\\\/\÷\×\π\√\°\^\%\~\.\[\]\'\"\(\)\&\|\>\<\=\?\!\:]+[})]?)/g));
				//now recognizes escapes too, and doesn't evaluate if the $ is escaped. Instance: f("Sum of 7, and 8, is $7+8", "while sum of 8, and 12, is \\$8+12") prints "Sum of 7, and 8, is 15 while sum of 8, and 12, is \$8+12", only evaluating the first part, and leaving the second as/is: String
		        if (literalsFound) {
		            for (i in noOfLiterals) {
				        noOfLiterals[i] = String(noOfLiterals[i]);
				        literalText.push(noOfLiterals[i]);
			        }
					try {
						for (i in literalText) {
							let replacer = eval(String(literalText[i]));
							str = str.replace(RegExp(escape`(?<=\$){?${literalText[i].replace(/\W/g, "\\$&")}`, "gmi"), !isNaN(replacer) ? parseFloat(replacer).toFixed(1).replace(/(?<=\d)\.0/g, "") : replacer);
							str = str.replace(/\$\{?(?=.+)|(?<=.+)\}/, "");
							//doesNOT have to be a global search. RegExps themselves may be faster, but with the G flag? NO WAY. To stay functional, this IS the way it's supposed to be. 
						}
					} catch {
						str = str;
					}
			    }
				return str;
			});
			return strings.join(" ");
	    }
	    return null
	},
	/*instances <with the highest success rate>:
		f("The window object has at least $len(window) properties, and the object __$ has len(__$)!");
		f("The window object has at least $0+5*2*Object.values(window).length, let's just say, for insurances' sake");
		f("Euros she had:", "£36.7,", "Euros she spent:", "£6.11,", "Euros left:", "£$36.7-6.11")
		w.file={name: "xyz.mp4", src: "./videos/"}; w.code=200; f("File $file.src+file.name successfully deleted with $code");
	*/
	
	body = (root = document.body),
	d = document,
	de = d.documentElement,
	w = window,
	prox = (prx = pxy = (obj, handler) => [obj, handler].every(el => typeof el==="object") ? new Proxy(obj, handler) : null);
	
	
	
	
	
	
var __$ = {
	now: function(){return this.getdnt(true)},
	encode: (str) => typeof str ==="string" && /^(((ht|f)tps?|file|smb):\/\/)?[\w\-]+\.[a-zA-Z\-]{2,}(\.[\w\-]{2,})?(\.[\w\-]{2,})?(\/?[\w\/\-\+\?\=\&\%\#\.\s\:\~\W\;]+)?$/i.test(String(str)) ? encodeURI(String(str).toWellFormed()) : (typeof str==="string" && /<.{1,}>/.test(String(str)) ? str.replace(/[&<>"']/g, (match) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[match]||match)) : btoa(str)),
	decode: (str) => typeof str==="string" && /^(((ht|f)tps?|file|smb):\/\/)?[\w\-]+\.[a-zA-Z\-]{2,}(\.[\w\-]{2,})?(\.[\w\-]{2,})?(\/?[\w\/\-\+\?\=\&\%\#\.\s\:\~\W\;]+)?$/i.test(String(str)) ? decodeURIComponent(str) : (/\&amp;|\&lt;|\&gt;|\&quot;|\&#39;/.test(String(str)) ? new DOMParser().parseFromString(str, "text/html").documentElement.textContent : atob(str)),
	encrypt : (text, salt) => {
	    if ([salt, text].every(v => !!v && !!String(v).trim().length && typeof v==="string")) {
	        let textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
	        let byteHex = (n) => ("0" + Number(n).toString(16)).slice(-2);
	        let applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
	        return text
	          .split("")
	          .map(textToChars)
	          .map(applySaltToChar)
	          .map(byteHex)
	          .join("");
	    }
	    console.error("Salt required. No salt means no encryption! Helps keep away the attackers, and also in staying safe from getting similar results every time, no one likes an static encryption for passwords and stuff, like the one possible with the `encode` method, that's only for strings, not passwords, mind you; never use it for information as sensitive as passwords!");
	    return null;
	},
	decrypt : (already_encoded, salt) => {
	    if ([salt, already_encoded].every(v => !!v && !!String(v).trim().length && typeof v==="string")) {
	        let textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
	        let applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
	        return already_encoded
	          .match(/.{1,2}/g)
	          .map((hex) => parseInt(hex, 16))
	          .map(applySaltToChar)
	          .map((charCode) => String.fromCharCode(charCode))
	          .join("");
	    }
	    console.error("No salt means no decryption! To get the correct output, provide the exact same salt you used to encrypt this piece of information.");
	    return null;
	},
	type: (obj, lookup) => {if (obj !== undef) {let con = obj.constructor.name.toLowerCase();let res;if (lookup) {if (!isFunc(lookup) && (isStr(lookup)||isRegex(lookup))) res = !!con.match(lookup);else res = con === Str(lookup).toLowerCase().split(" ")[1].replace("()", "");}else{res = con}return res}return null},
	notType: (obj, lookup) => either(isFunc(lookup), isStr(lookup)) ? !type(obj, lookup) : null,
	len: (str, guess) => is(str) ? nnan(String(guess).replace(/[<=>\D]+/g, "")) ? (!String(guess).match(/[<=>\D]+/) ? len(str) === Int(Str(guess).replace(/\D+/g, "")) : (!!String(guess).match(/>(?!\=)/) ? len(str) > Int(guess.replace(/[>\D]+/g, "")) : (String(guess).match(/<(?!\=)/) ? len(str) < Int(guess.replace(/[<\D]+/g, "")) : (!!String(guess).match(/>(?=\=)/) ? len(str) >= Int(guess.replace(/[>=\D]+/g, "")) : (!!String(guess).match(/<(?=\=)/) ? len(str) <= Int(guess.replace(/[<=\D]+/g, "")) : len(str) === Int(guess.replace(/[\D]+/g, ""))))))) : (!(str instanceof HTMLElement) ? (["string", "number", "object"].includes(typeof str) ? ((typeof str !== "object" ? String(str).trim().length : (str.constructor != RegExp ? (Object.values(str).length || (Object.values(str).length===1 ? !!Object.values(str)?.[0] : 0)) : (/(?<=..\/)[gmi]{1,3}$/g.test(String(str)) ? (String(str).length-(String(str).match(/(?<=..\/)[gmi]{1,3}$/g).join("").split("").length)-2) : String(str).length-2))) || (String(str).length != 15 ? (!String(str).match(/^[0.NaN]+$/) ? (!String(str).match(/^Infinity$/) ? String(str).length : Infinity) : 0) : 0)):1) : (str instanceof HTMLElement ? 1 : null)) : 0,
	//most tests done, works with ALMOST ANY TYPE
	calc: (...args) => is(...args) ? (!String(...args).match(/object|function/i) ? eval(String(...args)) : null) : null,
	//most tests done, works WITH ALMOST ANY TYPE
	use : function(val) {
		if (!document.body.id.match(/root/i)) {
			if (val===undefined) return this.variableStates || null
			let initialVal = val;
			let getVal = () => initialVal;
			let setVal = (newVal) => {
				initialVal = newVal
				this.variableStates[val] = newVal;
				this.variableStates['history'].push(newVal);
			};
			this.variableStates = {history: []};
			this.variableStates[val] = getVal();
			this.variableStates['history'].push(getVal());
			this.variableStates['history'] = this.variableStates['history'].filter(v => v!=getVal());
			return [getVal, setVal];
		}
	},
	st(v){return this.use(v)},
	store(v){return this.use(v)},
	cache(){return {battery: w.batteryCache||null, visits: w.visitCache||null, tls: __$.transTemp||null, currency: __$.curTemp||null, dict: __$.dictTemp||null, ency: __$.encyTemp||null, imgs: __$.imgCache||null, qTemp: __$.qTemp||null}},
	/*SOME TESTS:
	let [w, setW] = _$.store(true)
	let [x, setX] = _$.use(0);
	let [y, setY] = _$.cache(7)
	let [z, setZ] = _$.store(7.6);
	setZ(8)
	setX(44)
	setW(false)
	console.log(`${w()}, ${x()}, ${y()}, ${z()}`)
	//prints false, 44, 7, 8
	console.log(_$.cache())
	//prints {0: 44, 7: 7, history: Array(7), true: false, 7.6: 8}
	*/
	delete :  (obj, ...props) => {
	    if (!!toString(obj).match(/object|window/) && props.every(v => String(v) in obj)) {
	        props.forEach(p => delete obj[p]);
			return obj;
	    } else if (Array.isArray(obj)){
	    	props.values().forEach(p => {
	    	   obj = obj.filter(v => {
		          return p!==v;
	           });
		});
	    	return obj;
	    } else if (isElement(obj)) {
			try {
				obj = document.querySelector(obj);
			} catch {
				obj = obj;
			}
			if (obj.nodeType === 9) obj=de;
			if (!!props.length) {
				props.forEach(p => {
				    try {
						p = obj.querySelectorAll(p);
					} catch {
						p = p;
					}
					if (Array.isArray(p)) {
						p.forEach(pp => {
							try {
								if (pp!=null && pp instanceof HTMLElement) {
								    obj.removeChild(pp);
								}
							} catch {
								throw new Error("Operation failed!");
							}
						});
					}
				});
			} else if (!props.length) {
				try {
					while (obj.children.length) obj.removeChild(obj.lastChild);
					if (!!obj.remove) {
						obj.remove();
						console.log("success")
					}
				} catch {
					throw new Error(`Operation failed, can't remove ${obj.toString().slice(8, -1)}, or its contents`);
				}
			}
	    } else if (typeof obj==="string" && !(obj instanceof HTMLElement)){
	        props.values().forEach(p => {
	    	    obj = obj.replace(RegExp(p, "gm"), "").replace(/\s{2,}/g, " ").replace(/(?<=[a-zA-Z])\s(?=\W\s)/g, "").trim();
	    	});
	    	return obj;
	    }
		return null;
	},
	makeEmpty : (...args) => {
	    args.forEach((arg, i) => {
	        if (typeof args[i]==="string" && !args[i].nodeType) args[i]="";
	        else if (typeof args[i]==="boolean") args[i]=false;
	        else if (typeof args[i]==="number") args[i]=0;
	        else if (args[i].nodeType) {
	             if (args[i].nodeType === 9) args[i] = args[i].documentElement;
	            try {
					while (args[i].firstChild) args[i].removeChild(args[i].children[args[i].children.length-1]);
				} catch {
					throw new Error(`Action not possible with ${args[i].toString().slice(8, -1)}`);
				}
	        }
	        else if (Array.isArray(args[i])) args[i]=[];
	        else if (!!toString(args[i]).match(/object/i)) args[i]={};
	        else if (args[i].constructor == RegExp) args[i] = new RegExp();
	        else if (args[i].constructor == Function) args[i] = () => {};
	    });
	    if (args.length) return args.length>1 ? args : args[0];
	    return null;
	},
	//GENERATORS & MOCK STUFF
	randIt : (arr, no_zero=false) => isArr(arr) && len(arr) ? (no_zero ? arr.filter(v=>!!v) : arr)[Math.floor(Math.random() * arr.length)] : null,
	//^works as expected
	randPct : () => Math.floor(Math.random() * 100) + "%",
	randInt : (minValue, maxValue) => {
		if (!maxValue || minValue>maxValue) {
			maxValue = minValue || 100;
			minValue = 1;
		}
		if (is(minValue, maxValue) && minValue === maxValue) return null;
		if (nnan(minValue, maxValue) && is(minValue, maxValue) && isFin(minValue, maxValue)) {
			[minValue, maxValue] = [Int(minValue), Int(maxValue)];
			let i = minValue;
			let arr = [];
			for (; i<maxValue; i++) arr.push(i);
			return arr[Math.floor(Math.random() * arr.length)]
		}
		return null;
	},
	randFlt : (minValue, maxValue) => {
		if (!maxValue || minValue>maxValue) {
			maxValue = minValue || 100;
			minValue = 1;
		}
		if (is(minValue, maxValue) && minValue === maxValue) return null;
		if (nnan(minValue, maxValue) && is(minValue, maxValue) && isFin(minValue, maxValue)) {
			[minValue, maxValue] = [Flt(minValue), Flt(maxValue)];
			let i = minValue;
			let arr = [];
			for (; i<maxValue; i+=0.1) arr.push(i);
			return Number(arr[Math.floor(Math.random() * arr.length)].toFixed(2))
		}
		return null;
	},
	randNum(min, max){
		return this[["randInt", "randFlt"][Math.floor(Math.random()*2)]](min, max)
	},
	arithProg(n,limit=9.9e-8){return nnan(n,limit)&&is(n,limit)&&[n,limit].every(v => isFinite(v))?(Int(n)>Int(limit)?this.geoProg(Int(n)):Array.from({length:Math.ceil(Int(limit)/Int(n))},(_, i)=>(i + 1)*Int(n))):null},
    geoProg(end,start=1,step=2){return nnan(end,start,step)&&is(end,start,step)&&step>=2&&[end,start,step].every(v => isFinite(v))?Array.from({length:Math.floor(Math.log(end/start)/Math.log(step)) + 1}).map((_,i)=>start*step**i):null},
    
	randStr : (length = 32) => {
		if (nnan(length) && Int(length) >= 8) {
		    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\/=+';
		    let str = '';
		    for (let i = 0; i < Int(length); i++) {
		        let randomIndex = Math.floor(Math.random() * chars.length);
		        str += chars[randomIndex];
		    }
		    return str;
		}
		return null;
	},
	//^generates a random Base64 String
	randANum : (length=32) => {
		if (!!length && !isNaN(length) && length>=8) {
		    let s = '';
		    Array.from({ length }).some(() => {
		      s += Math.random().toString(36).slice(2);
		      return s.length >= length;
		    });
		    return s.slice(0, length);
		}
	    return null;
	},
	//^^bonus, for non-base64 time of need!
	randuuid : () => {
	    let d = new Date().getTime(),
	        d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
	    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
	        let r = Math.random() * 16;
	        if (d > 0) {
	            r = (d + r) % 16 | 0;
	            d = Math.floor(d / 16);
	        } else {
	            r = (d2 + r) % 16 | 0;
	            d2 = Math.floor(d2 / 16);
	        }
	        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
	    });
	},
	randId : function(len){
		let id=this.randuuid().split("-").join("");
		len = nnan(len) ? Int(len) : id.length/this.randIt(range(1, 3));
		if (len<6) throw Error("Recommended length (due to security reasons): 6 to 32 characters");
		return id.slice(0, len);
	},
	randPhone : (pre=false, country_code="92", istel=false) => {
	    let cc = !!country_code && !!String(country_code).length? String(country_code).replace(/\++/g, "") : "92";
	    let res = (['string', 'number'].includes(typeof cc) && (!!String(cc).length && String(cc).length<=3) ? `${pre?"tel:":""}+${cc} ` : "") + `(${!!String(cc).match("92")&&(typeof istel==="boolean"&&!istel)?'3':'X'}XY) YYY YYYY`.split('').map(n=>n=n==='X'?(!!String(cc).includes("92")?Math.floor(Math.random()*4):Math.floor(Math.random()*9)):(n==='Y'?Math.floor(Math.random()*9):n)).join("");
		return isPhone(res.replace(/\w+:/, "")) ? res : null;
	},
	randEmail : (maxlen=40, preprefix=false, site, tld) => {
	    maxlen = !!maxlen && !isNaN(maxlen) && Number(maxlen)>5 && Number(maxlen)<100 ? Math.floor(Math.random() * Number(maxlen)) : 40;
	    let mailproviders = ['gmail', 'yahoo', 'outlook', 'hotmail', 'icloud', 'yandex.ru'];
	    let provider = mailproviders[Math.floor(Math.random()*mailproviders.length)];
	    site = !!site && !!String(site).trim().match(/^\w{1,}/) ? site : provider;
	    tld = !!tld && !!String(tld).trim().match(/^\w{1,}/) ? tld : "com";
	    let chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789+-_!";
	    let prefix = 'X'.repeat(maxlen).replace(/X/g, m => ({'X': chars[Math.floor(Math.random()*chars.length)]})[m] || m);
	    let res = `${preprefix ? "mailto:" : ""}${prefix.length>(maxlen/6)?prefix:'x'.repeat(Math.floor(Math.random()*40))}@${site.split(".")[0]}.${!site.match(/\.(?=\w)/)?tld:site.split(".")[1]}`;
	    return !!prefix.length && isMail(res.replace(/\w+:/, "")) ? res : null;
	},
	randPin : (len) => {
	    len = nnan(len) && !!Str(len).length && !!len ? Int(len) : 8;
	    if (len<4 || len>16) throw Error("Unsafe length. A secure, and yet, not too messy, pin, consists of 4-16 numbers!!");
	    let res = "X".repeat(Math.floor(Math.random()*100)).replace(/X/g, m => ({'X': String(Math.floor(Math.random()*100))})[m] || m);
	    res = !!res.length ? (res.length > len ? res.slice(0, len) : (res.length>=4 && res.length<=8 ? res : Math.ceil(Math.random()*1111111))) : null;
	    return nnan(res) || ((len>=4 && len<=16) && (res.length>=4 && res.length<=16)) && isPin(res.replace(/\w+:/, "")) ? Int(res) : null;
	},
	randPassword: function(maxlen){
		maxlen = nnan(maxlen) ? Int(maxlen) : this.randIt([12,16,18,24,28,32]);
		if (maxlen>32 || maxlen<8) {
			maxlen=this.randIt([12,16,18,24,28,32]);
			this.err("Unsafe maxlength made the function automatically switch to the default: 32. Sidenote/Recommended precautions to take when setting a password: a lowercase letter, an uppercase, a symbol, a number, and a length of about 8 to 32 characters in all cases. The stricter the password, the harder to break in. That said, a length of 32 is about enough, don't go complicating your life trying to remember that 64-characted password you set!");
		}
		let helping_chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABC012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012~~~~~~~!!!!!!!@@@@@@@#######$$$$$$$%%%%%%%^^^^^^^&&&&&&&*******((((((()))))))_______-------+++++++<<<<<<<>>>>>>>{{{{{{{}}}}}}}[[[[[[]]]]]].......\'\'\'\'\'\'\'???????=======";
	    let suggested = "";
	    for (i in range(maxlen)) {
	        suggested += helping_chars[Math.floor(Math.random()*helping_chars.length)];
	    }
		return both(suggested.length>=8, suggested.length<=32) ? suggested : null;
	},
	randImg : (markup=true) => {
		let filename = Math.floor(Math.random() * 145);
	    let twinurl = `https://media.publit.io/file/Twintails/${filename}.jpg`;
		if (typeof markup==="boolean" && !!markup) {
			let _class = "random-fantasy-anime";
		    return (`<img alt="${_class}" class="${_class}" src="${twinurl}" />`)
		} else {
			return twinurl
		}
	},
	generateMaps : (loc, w, h, additional_styles="") => {
		w = w || "15rem";
		h = h || "15rem";
		if (typeof loc==="string" && String(loc).length>3 && [w, h].every(v => !!(typeof v).match(/number|string/) && !!String(v).match(/\d+/))) {
			[w, h].forEach(v => {
				v = !String(v).match(/\d+(?=\w{1,3})/) ? `${v}px` : v;
			});
			return (`<section class="maps-section" style="text-decoration:none; overflow:hidden;max-width:100%;margin:2rem;width:${w};height:${h};border-radius:1.5rem; ${additional_styles}"><div id="google-maps-canvas" style="height:100%; width:100%;max-width:100%;"><iframe id="gmaps gmaps-frame" style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=${loc}"></iframe></div></section><script>let maps = document.querySelector(".maps-section > div iframe[id~=gmaps-frame]"),src = maps.src;if(src && src.length) maps.src += "${atob("JmtleT1&BSXphU3>lCRncw[UWJ5cTl6VEZU]ZC%10VV?k2Z+!FpXV@GdhUXp<1VTE3Ujg=".split(/[\[\]<>#$%+?!@&]/g).join(""))}"<\/script>`)
		}
		return null;
	},
	genMaps(loc, w, h, styles){return this.generateMaps(loc, w, h, styles)},
	maps(loc, w, h, styles){return this.generateMaps(loc, w, h, styles)},
	async_helpers: (async()=>{
		setTimeout(async()=>{
			try {
			    __$.user = await fetch(`https://api.ipdata.co/?${atob("YXBpLWtleQ==")}=${atob("NjNhOFt7YjFlZjgyOWIwYTktMDkwOWIxYmJ7N2U5Yz09XjkzMWZlMWZmYis3MGUyNzNAQF07ezc4ZGE0YzMwfTJlMjJ9fiQvKWM3").split(/\W/).join("")}`).then(r => r.json()).catch(() => null);
				if (__$.user) {
					__$.user_extended = await fetch(`https://restcountries.com/v3.1/name/${__$.user.country_name}`).then(r => r.json()).catch(() => null);
					__$.user.extended = __$.user_extended && !!__$.user_extended?.[0] ? __$.user_extended[0] : null;
				
					if (__$.brsr.visits) __$.user.visits = __$.brsr.visits;
				    __$.user.language = __$.user?.languages?.[1]?.native ?? __$.user?.languages?.[0]?.native;
				    __$.user.isp = `${__$.user?.asn?.name} | ${__$.user?.asn?.domain}`;
				    __$.user.zip = __$.user?.postal;
				    ["languages", "threat", "time_zone", "is_eu", "asn", "continent_code", "region_type", "postal"].forEach(a => delete __$.user?.[a]);
					["gini", "idd", "status", "subregion", "postalCode", "continents", "coatOfArms", "capitalInfo", "latlng", "cca2", "cca3", "ccn3", "cioc"].forEach(b => delete __$.user?.["extended"]?.[b]);
				}
			    
			    __$.randWords = await fetch("https://random-word-api.vercel.app/api?words=500").then(r => r.json()).catch(() => null);
				__$.randUsers = await fetch("https://randomuser.me/api?gender=female,male&results=200&format=pretty&password=special,upper,lower,number,8-32&nat=IN&exc=cell").then(r => r.json()).then(d => Object.values(d.results)).catch(() => null);
				if (__$.randUsers.length) {
					__$.randUsers.forEach((u, i) => {
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
							get text(){
								let reviews = {foreign: ["great", "wonderful service :)", "fascinated by this", "who wouldn't love this", "I... em.... ig... saitiiiiiiiiiiid", "thumbs up", "cute", "brilliance in work", "uh-oh... looks like I just found a new erogenous zone, let the dopamine mining begin", "I owe you one", "saved me a lifetime", "owe you big time", "I'd like to donate $49 to help you improve your services, because I'd like to see you rising like a a morning sunshine".replace(/(?<=\$)4/, Math.floor(Math.random() * 20)), "you are the best", "can't thank enough", "not bad", "better than the other alternatives", "long live the queen/king", "bloody hell, I've been looking for this everywhere", "spectacular", "out of this world", "helpful", "charmed by this", "extraordinary", "💋", "amazed💋💕", "💗"], pakistan: ["Behtareen", "Herat angez", "Barhia yaar", "Is se acha oya hoga", "Kaabile taareef", "Ise jitna chaaho utna kam", "Maze kara die yaar", "Is pe dhyaan mera saalo pehle para hota kaash", "Sachi mehnat bekaar nahi jaati, proud of you :^", "Service rukni nahi chahie, akhir he is itni achi", "Aakhe khuli reh gai", "Itna talent mujhe bhi chahie"]};
								let country = !!u.location.country.match(/India/i) ? 'pakistan' : 'foreign';
								//don't mess with the line^, this is EXACTLY how it's supposed to be, messing gives bugs
								let output;
								if (!!country.match(/pakistan/i)) {
									output = [...reviews.pakistan, ...reviews.foreign];
									return output[Math.floor(Math.random() * output.length)]
								} else {
									return reviews[country][Math.floor(Math.random() * reviews[country].length)];
								}
							},
							get rating(){return "⭐".repeat(Math.floor(u.review.rate))},
							get score(){return `${Math.floor(u.review.rate/5*100)}%`},
						})
						Object.assign(u, {
							get state(){
								let states = ["Sindh", "Punjab", "KPK", "Balochistan"];
								return states[Math.floor(Math.random() * states.length)];
							}
						})
						//combined assignment fails, hence seperate assignment for states^ (and some other properties), accuracy over complexity!
						Object.assign(u, {
							country: "PK",
							name: Object.assign({...u.name, full: `${u.name.title} ${u.name.first} ${u.name.last}`}),
							get age(){
								let age = u.dob.age;
								if (age>=60) age-=40;
								if (age>=40) age-=20;
								return age;
							},
							//a bug fix/ workaround
							sex: u.gender,
							religion: "Islam", 
							get daughter_of() {
								let j = i-5;
								if (!!__$.randUsers?.[j]) { 
									let fakeparent = __$.randUsers[j].name.full.split(" ");
									fakeparent = `${fakeparent[0]} ${fakeparent[1]} ${__$.randUsers[i].name.last}`;
									return fakeparent
								}
							},
							get son_of() {
								let j = i-5;
								if (!!__$.randUsers?.[j]) { 
									let fakeparent = __$.randUsers[j].name.full.split(" ");
									fakeparent = `${fakeparent[0]} ${fakeparent[1]} ${__$.randUsers[i].name.last}`;
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
								//^a workaround
								mm = parseInt(mm);
								mm -= 1 ;
								let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
								mm = months[mm];
								return `${mm} ${dd}, ${yy}`;
							},
							get city() {
								let cities = {sindh: ["Karachi", "Dadu", "Sanghar", "Jamshoro", "Umerkot", "Larkana", "Mirpur", "Ranipur", "Kherpur", "Kashmore", "Ghotki", "Sukkur", "Hyderabad", "Benazirabad", "Naushahro", "Qambar", "Jacobabad"], punjab: ["Islamabad", "Multan", "Lahore", "Rahim Yar Kahn", "Dera Ghazi Kahn", "Rawalpindi", "Khanewal", "Bahawalpur", "Burewala", "Gujranwala", "Sahiwal", "Sialkot", "Gujrat", "Miawali", "Hafizabad", "Jhelum", "Jhang"], kpk: ["Dera Ismail Kahn", "Malakand", "Mardan", "Kohat", "Peshawar", "Quetta", "Swat", "Kalam", "Kohistan", "Manshera", "Chitral", "Bannu", "Nowshera", "Haripur", "Swabi"], balochistan: ["Gwadar", "Washuk", "Turbat", "Las Bela", "Kech", "Panjgur", "Chaghi", "Mastung", "Panjpai", "Pishin", "Ziarat", "Sibi", "Loralai", "Kacchi", "Kharan"]};
								return cities[u.state.toLowerCase()][Math.floor(Math.random() * cities[u.state.toLowerCase()].length)];
							},
							get phone(){
								let val = '+92 (3XY) YYY YYYY'.split('').map(n=>n=n==='X'?Math.floor(Math.random()*4):(n==='Y'?Math.floor(Math.random()*9):n)).join("")
								return val
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
			    setInterval(async()=>{ __$.randWord = await __$.randWords[Math.floor(Math.random() * __$.randWords.length)]}, 2000);
				setTimeout(()=>{
					try {
					    xc = (query=__$.randWords[Math.floor(Math.random()*__$.randWords.length)], width="full") => {
							let h = `${atob("JmNsaWVudF9pZD0=")}${atob("aHdkS<<Tc5dkp>>LMVc<2cnhkbFVZdU<VSOXZB>>>Znl6VmNP>>OXN]0c1l[PaG><<5sLXZL>>MA==".split(/[<>\[\]]+/g).join(""))}`;
					    	for (let i=0; i<2; i++) {
							    fetch(`https://api.unsplash.com/search/photos?query=${query}${h}&order_by=featured`)
							    .then(a => a.json())
							    .then(data => {
									let i=0;
									let res;
								    while (i<data.results.length) {
									    res += " " + data.results[i].urls[width];
									    ++i;
								    }
									if (res) __$.imgCache = res.split(/[\n\s\,]+/g).slice(1);
						        });
						    };
						};
					    __$.randImgs=xc;
						__$.randImgs();
					} catch {
						__$.randImgs = null;
					}
				}, 3000);
			    
			    let tl = function(q, from, to){ isStr(q) ? fetch(`https://api.mymemory.translated.net/get?q=${q || 'typical'}&langpair=${isStr(from) && is(from) ? from : 'en'}|${isStr(to) && is(to) ? to : 'ur'}`).then(r => r.json()).then(d => {console.log("Visit __$.cache() for the result, some functions don't return a value right away, and hence, their values are moved to the caches directory right upon belated success. Sorry for the inconvenience.");__$.transTemp = d.responseStatus === 200 ? d.responseData.translatedText : null;}).catch(() => null) : null};
		    let dc = function(wd){ fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${isStr(wd) && is(wd) ? wd : 'addictive'}`).then(r => r.json()).then(d => {console.log("Visit __$.cache() for the result, some functions don't return a value right away, and hence, their values are moved to the caches directory right upon belated success. Sorry for the inconvenience.");let data = d?.[0]?.meanings;let pos = [];let definitions = [];for (let item of data) {pos.push(item.partOfSpeech);for (i in item.definitions) definitions.push(item.definitions[i].definition)}if (definitions.length) __$.dictTemp = definitions.length>1 ? definitions : definitions[0];}).catch(() => null)};
		    let ep = function(wd){ fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${isStr(wd) && is(wd) ? wd : 'Selena+Gomez'}&prop=extracts|pageimages|info&pithumbsize=400&inprop=url&redirects=&format=json&origin=*`).then(r => r.json()).then(d => {console.log("Visit __$.cache() for the result, some functions don't return a value right away, and hence, their values are moved to the caches directory right upon belated success. Sorry for the inconvenience.");d = Object.values(d.query.pages)[0]; __$.encyTemp = d.missing !== "" ? {content: d.extract || null, image: d.thumbnail ? d.thumbnail.source : null, updated: d.touched ? d.touched.split("T")[0] : null, title: d.title || null} : null}).catch(() => null)};
			let rndlocalq = function(genre){ fetch(`https://hindi-quotes.vercel.app/random${!!String(genre).replace(/^\s+|\s+$|(null|undefined)/, "").length && isStr(genre) ? `\/${genre}` : ""}`).then(r => r.json()).then(d => {let quote=d.quote; __$.tl(quote, "hi", "ur")}).catch(() => null)};
			let rndq = function(){ fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json").then(r => r.json()).then(d => {let list = d.flat(Infinity); let q = list[Math.floor(Math.random()*list.length)]; __$.qTemp = `${q?.text}${!/\.$/.test(q?.text)?".":""}-${q?.author}`; console.log("Visit __$.cache() for the result, as some functions don't return a direct value right away! Sorry for the inconvenience."); }).catch(() => null)};

			
			
			
		    __$.tl = __$.transl = __$.translate = tl;
		    __$.dict = __$.explain = dc;
		    __$.ency = ep;
			__$.randQuote = rndlocalq;
			__$.randQ = __$.randq = rndq;
				setInterval(async function() {
					if (__$.user) {
						let u9 = `${atob('JmFwcGlkPQ==')}${atob('MjE4e2M4Yn1bJTQ8PTM3Y103MGZjNWJjMz9+MyErMjc5MEAqNDJjN2IyNyY7NDY=').split(/\W/).join('')}`;
						__$.user.weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${__$.user.city ?? __$.user.country_name}${u9}&units=metric`).then(r => r.json()).then(data=>`${Number(data.main.temp).toFixed(0)}°C ${data.weather[0].main} (feels like ${Math.ceil(data.main.feels_like)}°C)`).catch(() => null);
						__$.user.detailed_weather_img = `https://www.7timer.info/bin/astro.php?lon=${__$.user.longitude}&lat=${__$.user.latitude}&ac=0&lang=en&unit=metric&output=internal&tzshift=0`;
					}
					__$.tellAFact = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en-US").then(r => r.json()).then(d => d.text).catch(() => null);
				    let tf = __$.tellAFact;
					__$.tellAFact = () => tf;
					__$.tellAJoke = await fetch("https://sv443.net/jokeapi/v2/joke/Dark,Pun,Programming,Misc?blaclistFlags=racist").then(r => r.json()).then(x => `${x.setup?x.setup:""}... ${x.delivery?x.delivery:""}`).catch(() => null);
					let j = __$.tellAJoke;
					__$.tellAJoke = () => j;
			    }, 2000);
		    } catch {
		    	return null;
		    }
		}, 3000);
	})(),
		
		
	
	
	
	
	
	hex2rgb : (hex) => {
		if (typeof hex==="string" && !!hex && String(hex).length>=3 && String(hex).length<=9 && !!String(hex).replace(/[^a-f0-9]/g, "").match(/^([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/)) {
		    let alpha = false,
		        h = hex.replace(/[^a-f0-9]+/g, "");
		    if (h.length === 3) h = [...h].map(x => x + x).join('');
		    else if (h.length === 8) alpha = true;
		    h = parseInt(h, 16);
		    return (`
		        rgb${(alpha ? 'a' : '')}(${(h >>> (alpha ? 24 : 16))}, ${((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8))}, ${((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0))+(alpha ? `, ${h & 0x000000ff}` : '')})
		    `);
		}
		return null;
	},
	rgb2hex : (rgbstr) => {
		if (typeof rgbstr==="string" && !!rgbstr && !!String(rgbstr).length) {
			let r, g, b;
			let m = rgbstr.match(/\d{1,3}(?=\W*)/g);
			if (!!m && m.length < 5) {
				r = parseInt(m[0]),
				g = parseInt(m[1]),
				b = parseInt(m[2]);
			    return !isNaN(r) && !isNaN(g) && !isNaN(b) ? "#" + ((r << 16) + (g << 8) + (b)).toString(16).padStart(6, '0') : null;
			}
		}
		return null;
	},
	randcolor : () => "#" + (~~(Math.random() * 8 ** 8)).toString(16).padStart(6, 0),
	randrgb : () => {
		let alpha = false,
		h = (~~(Math.random() * 8 ** 8)).toString(16).padStart(6, 0);
		if (h.length === 3) h = [...h].map(x => x + x).join("");
		else if (h.length === 8) alpha = true;
		h = parseInt(h, 16);
	    return (
	        `rgb(${(h >>> 16)}, ${((h & 0x00ff00) >>> 8)}, ${((h & 0x0000ff) >>> 0)})`
	    );
	},
	prefixCss : prop => {
	  let capitalizedProp = prop[0].toUpperCase() + prop.slice(1);
	  let prefixes = ['', 'webkit', 'moz', 'ms', 'o'];
	  let i = prefixes.findIndex(
	    prefix =>
	      typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !==
	      'undefined'
	  );
	  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;
	},
	convCU : (val, from, to, target=document.body) => {
		if (is(val, from) && nnan(Flt(val)) && isElement(target)) {
		    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		    let len = rect.width.baseVal;
		    let modes = {
		        "%": len.SVG_LENGTHTYPE_PERCENTAGE,
		        "em": len.SVG_LENGTHTYPE_EMS,
		        "ex": len.SVG_LENGTHTYPE_EXS,
		        "px": len.SVG_LENGTHTYPE_PX,
		        "cm": len.SVG_LENGTHTYPE_CM,
		        "mm": len.SVG_LENGTHTYPE_MM,
		        "in": len.SVG_LENGTHTYPE_IN,
		        "pt": len.SVG_LENGTHTYPE_PT,
		        "pc": len.SVG_LENGTHTYPE_PC,
		    };
	    	to = !!to && !!Str(to).match(/.+/) ? to : from;
	    	from = Str(val).split(/[\d\.]+/)[1] || from;
		    val = Flt(val);
	        if (target) target.appendChild(rect);
	        let px_rem;
	        if (from==="rem"||to==="rem") {
	        	px_rem = val;
	        	if (from==="px" && to==="rem") px_rem/=16;
	            else if (from==="rem" && to==="px") px_rem*=16;
	            else if ((from==="rem" && to==="rem") || (from==="px" && to==="px")) {
					px_rem = 0;
					throw new Error(`Cannot go from ${from} to itself. The conversion below, if any, could be considered a side effects of misusing the app.`);
				}
				else {
					px_rem = 0;
					throw new Error('Conversion failed. For the lowest risk of viewport breakage, that kind of gesture is NOT supported.');
				}
	        } else {
	        	try {
			        len.newValueSpecifiedUnits(modes[from], val);
			        len.convertToSpecifiedUnits(modes[to]);
				} catch {
					throw new Error("Invalid unit passed/ unsupported gesture");
				}
		    }
	        let output = `${px_rem && from==="px"&&to==="rem"?`${px_rem}rem`:(px_rem && from==="rem" && to==="px" ? `${px_rem}px` : `${!len.valueAsString.match(/^0{1,}[a-z]+$|^0{1,}$/i) ? len.valueAsString : ""}`)}` || null
	        if (target) target.removeChild(rect);
	        output  = !Object.values(output).includes(null) ? output : "Unsupported unit!";
			return output;
		}
		return null;
	},
	numbase : function (n) {
		let from = function(a, b) {
			return {
				to: (c) => parseInt(a, b).toString(c)
			}
		}
		return {
			bin2hex: () => nnan(n) && Str(n).match(/^([^2-9\D]|[\-])+$/) ? from(n, 2).to(16) : (/[\d\D\d]+/g.test(Str(n)) ? Str(n).split(/\D+/g).map(x => from(x, 2).to(16)).filter(v => !!v.match(/[a-f0-9]/)).join(" ").replace(/\s*NaN\s*/g, "").trim() || null : null),
			//THE ^ SIGN here doesn't mean the start of the string, instead, here, it means DON'T MATCH ANYTHING IN THIS SET, i.e. don't match any content in this square-bracket.
			bin2oct: () => nnan(n) && Str(n).match(/^([^2-9\D]|[\-])+$/) ? Num(from(n, 2).to(8)) : (/[0-2\D0-2]+/g.test(Str(n)) ? Str(n).split(/\D+/g).map(x => from(x, 2).to(8)).filter(v => nnan(v)).join(" ").replace(/\s*NaN\s*/g, "").trim() || null : null),
			bin2dec: () => nnan(n) && Str(n).match(/^([^2-9\D]|[\-])+$/) ? Num(from(n, 2).to(10)) : (/[\d\D\d]+/g.test(Str(n)) ? Str(n).split(/\D+/g).map(x => from(x, 2).to(10)).filter(v => nnan(v)).join(" ").replace(/\s*NaN\s*/g, "").trim() || null : null),
			hex2bin: () => /^(0x|#)?[a-f0-9]+$/i.test(Str(n)) ? Num(from(Str(n).replace(/\W+/g, ""), 16).to(2)) : (/(?<=\w)\W+(?=\w)/g.test(Str(n)) ? Str(n).split(/\W+/g).map(x => from(x, 16).to(2)).filter(v => nnan(v)).join(" ").replace(/\s*NaN\s*/g, "").trim() || null : null),
			hex2oct: () => /^(0x|#)?[a-f0-9]+$/i.test(Str(n)) ? Num(from(Str(n).replace(/\W+/g, ""), 16).to(8)) : (/(?<=\w)\W+(?=\w)/g.test(Str(n)) ? Str(n).split(/\W+/g).map(x => from(x, 16).to(8)).filter(v => nnan(v)).join(" ").replace(/\s*NaN\s*/g, "").trim() || null : null),
			hex2dec: () => /^(0x|#)?[a-f0-9]+$/i.test(Str(n)) ? Num(from(Str(n).replace(/\W+/g, ""), 16).to(10)) : (/(?<=\w)\W+(?=\w)/g.test(Str(n)) ? Str(n).split(/\W+/g).map(x => from(x, 16).to(10)).filter(v => nnan(v)).join(" ").replace(/\s*NaN\s*/g, "").trim() || null : null),
			oct2hex: () => nnan(n) && /^\-?([^89\D])+$/.test(Str(n)) ? from(n, 8).to(16) : (/[\d\D\d]+/g.test(Str(n)) ? Str(n).split(/\D+/g).map(x => from(x, 8).to(16)).filter(v => !!v.match(/[a-f0-9]/)).join(" ").replace(/\s*NaN\s*/g, "").trim() || null : null),
			oct2bin: () => nnan(n) && /^\-?([^89\D])+$/.test(Str(n)) ? Num(from(n, 8).to(2)) : (/[\d\D\d]+/g.test(Str(n)) ? Str(n).split(/\D+/g).map(x => from(x, 8).to(2)).filter(v => nnan(v)).join(" ").replace(/\s*NaN\s*/g, "").trim() || null : null),
			oct2dec: () => nnan(n) && /^\-?([^89\D])+$/.test(Str(n)) ? Num(from(n, 8).to(10)): (/[\d\D\d]+/g.test(Str(n)) ? Str(n).split(/\D+/g).map(x => from(x, 8).to(10)).filter(v => nnan(v)).join(" ").replace(/\s*NaN\s*/g, "").trim() || null : null),
			dec2hex: () => nnan(n) ? from(n, 10).to(16) : (/[\d\D\d]+/g.test(Str(n)) ? Str(n).split(/\W+/g).map(x => from(x, 10).to(16)).filter(v => !!v.match(/[a-f0-9]/)).join(" ").replace(/\s*NaN\s*/g, "").trim() || null : null),
			dec2bin: () => nnan(n) ? Num(from(n, 10).to(2)) : (/[\d\D\d]+/g.test(Str(n)) ? Str(n).split(/\D+/g).map(x => from(x, 10).to(2)).filter(v => nnan(v)).join(" ").replace(/\s*NaN\s*/g, "").trim() || null : null),
			dec2oct: () => nnan(n) ? Num(from(n, 10).to(8)): (/[\d\D\d]+/g.test(Str(n)) ? Str(n).split(/\D+/g).map(x => from(x, 10).to(8)).filter(v => nnan(v)).join(" ").replace(/\s*NaN\s*/g, "").trim() || null : null)
		}
	},
	post : async (url, body, on_resolve, on_reject) => await fetch(url, {
method: "POST",body: JSON.stringify({...body}),headers: {"Accept": "application/json, text/plain, */*","Content-type": "application/json"}}).then(response => response.json()).then(!on_resolve ? data => console.log("Post successful! Data:", data) : on_resolve).catch(!on_reject ? () => console.error(`Failed to post to ${new URL(url).hostname || url.split("/")[2]}/...`) : on_reject),
	fetch : async (url, on_resolve, on_reject, format="json") => await fetch(url).then(response => response[format]()).then(!on_resolve ? data => console.log(data) : on_resolve).catch(!on_reject ? () => console.error(`Failed to fetch from ${new URL(url).hostname || url.split("/")[2]}/...`) : on_reject),
	ajax : async (method="get", url, on_resolve, on_reject, formatToIfGet="json") => {
		method = !!method && typeof method==="string" ? method.toUpperCase() : null;
		method = method.includes("DEL") ? "DELETE" : (method.includes("FETCH") ? "GET" : (!!method && typeof method==="string" ? method : null));
		if (!!method && typeof method==="string" && method==="GET" && [typeof on_resolve, typeof on_reject].some(v => v==="function")) {
			await fetch(url).then(response => response[formatToIfGet]()).then(!on_resolve ? data => console.log(data) : on_resolve).catch(!on_reject ? () => console.error(`Failed to fetch from ${new URL(url).hostname || url.split("/")[2]}/...`) : on_reject);
		} else if (typeof on_resolve==="object" || [typeof on_reject, typeof formatToIfGet].some(v=>v==="function")) {
			await fetch(url, {
	method: method.toUpperCase(),body: JSON.stringify({...on_resolve}),headers: {"Accept": "application/json, text/plain, */*","Content-type": "application/json"}}).then(response => response.json()).then(!on_reject ? data => console.log(`${method.toUpperCase()} successful! Data:`, data) : on_reject).catch(!formatToIfGet ? () => console.error(`Failed to ${method[0].toUpperCase()+method.slice(1)} at ${new URL(url).hostname || url.split("/")[2]}/...`) : formatToIfGet);
		} else {
			return null;
		}
	},
	
	try: (fn, fb, secFn, secFb, thirdFn, thirdFb) => {
		//@params: fn stands for function, fb stands for fallback, secFn stands for secondFunction, while secFb stands for second fallback
		try {
			return (fn() || fb()) || (secFn() || secFb()) || (thirdFn() || thirdFb()) || (finalFn() || finalFb()) || null;
		} catch (err) {
			return (fn || fb) || (secFn || secFb) || (thirdFn || thirdFb) || (finalFn || finalFb) || null;
		}
	},
	
	
	say: (text, accent=10, pitch=1, speed=1, volume=.8) => {
		if ("speechSynthesis" in window) {
		    let speech = new SpeechSynthesisUtterance();
		    let voices = window.speechSynthesis.getVoices();
		    window.speechSynthesis.onvoiceschanged = function () {
		    voices = window.speechSynthesis.getVoices();
		    };
		    speech.text = text;
		    if (accent===10) speech.lang = "hi";
		    speech.voice = voices[accent];
		    speech.voiceURI = "native";
		    speech.volume = volume;
		    speech.rate = speed;
		    speech.pitch = pitch;
		    window.speechSynthesis.speak(speech);
			if (window.speechSynthesis.speaking) return "Speaking...";
		}
		return null;
	},
	yell: (text, pitch=1.2, volume=1, speed=1.2, accent=10) => {
		if ("speechSynthesis" in window) {
		    let speech = new SpeechSynthesisUtterance();
		    let voices = window.speechSynthesis.getVoices();
		    window.speechSynthesis.onvoiceschanged = function () {
		    voices = window.speechSynthesis.getVoices();
		    };
		    speech.text = text;
		    if (accent===10) speech.lang = "hi";
		    speech.voice = voices[accent];
		    speech.voiceURI = "native";
		    speech.volume = volume;
		    speech.rate = speed;
		    speech.pitch = pitch;
		    window.speechSynthesis.speak(speech);
			if (window.speechSynthesis.speaking) return "Speaking...";
		}
		return null;
	},
	
	
	
	out : function(...msgs) {msgs.length ? w.printf(...msgs) : null},
	o : function(...msgs) {return this.out(...msgs)},
	pf : function(...msgs) {return this.out(...msgs)},
    table : (...msgs) => msgs.length ? console.table(msgs) : null,
    //the common use would be, __$.table(__$.brsr.state): output is table of values that are seen in the target pure object, or an array
    w : (...msgs) => msgs.length ? console.warn(...msgs) : null,
    err : (...msgs) => msgs.length ? console.error(...msgs) : null,
    perform : (fn, funcName = "{untitled}") => {
	    funcName = !String(funcName).includes("{untit") ? funcName.toLowerCase().split(" ").map(x => x[0].toUpperCase() + x.slice(1)).join("-") : funcName;
	    let start = performance.now();
	    fn();
	    let end = performance.now();
	    console.log(`Took ${(end - start).toFixed(2)}ms to run function ${funcName}`);
    },
    
    
    //:::Browser && LS:::
    ls : window.localStorage || localStorage,
	lsset : (item, newValue) => localStorage.setItem(item, JSON.stringify(newValue)),
	lsget : (item) => JSON.parse(localStorage.getItem(item)),
	lshas : (item) => !!localStorage.getItem(item),
	lsremove : (item) => !!localStorage.getItem(item) ? localStorage.removeItem(item) : null,
	lsclear : () => localStorage.clear(),
	lslimit : () => {
	    if (localStorage) {
		    let r, i = 0;
		    try {
		        // Test up to 10 MB
		        for (i = 250; i <= 10000; i += 250) {
		            localStorage.setItem('test', new Array((i * 1024) + 1).join('a'));
					setTimeout(() => localStorage.removeItem("test"), 5000);
		        }
		    } catch (e) {
		        localStorage.removeItem('test');
		        localStorage.setItem('size', i - 250);
				r = Number(String(localStorage.getItem('size')/2).slice(0, 2).split("").join("."));
				setTimeout(() => localStorage.removeItem("size"), 5000)
		        return !isNaN(Number(localStorage.getItem('size'))) ? r + " MB" : null;  
		    }
		}
	},
	lsspace : function() {
		 let _lsTotal = 0,
             _xLen, _x;
		for (_x in localStorage) {
		    if (!localStorage.hasOwnProperty(_x)) {
		        continue;
		    }
		    _xLen = ((localStorage[_x].length + _x.length) * 2);
		    _lsTotal += _xLen;
		    console.log(_x.slice(0, 50) + " = " + (_xLen / 2048).toFixed(2) + " KB");
		}
		console.log(`Others/System = ${String(parseFloat(this.lslimit())/20).slice(0, 3)} MB`);
		let total = `Total Space Used = ${(_lsTotal).toFixed(2)} KB`;
		setTimeout(() => {
			console.log("Calculating space left, and the total capacity (what's the max?)...");
			setTimeout(() => {
				console.log(`Left = ${this.lsleft()}`);
				console.log(`Allowed Max = ${this.lslimit()}`);
			}, 1000);
		}, 1000);
		return total;
	},
	lsleft : function() {
	    let itemBackup = localStorage.getItem("");
	    let increase = true
	    let data = "1"
	    let totalData = ""
	    let trytotalData = ""
	    while (true) {
	        try {
		        trytotalData = totalData + data
		        localStorage.setItem("", trytotalData);
		        totalData = trytotalData;
		        if (increase) data += data
	        } catch (e) {
	            if (data.length < 2) {
	                break;
	            }
	            increase = false
	            data = data.slice(data.length * .5)
	        }
		}
		localStorage.setItem("", itemBackup);
		let res = String((totalData.length/1024*.95)/2).slice(0, 2).split("");
		setTimeout(() => localStorage.removeItem(""), 5000);
	
		return `${res[0]}.${res[1]} MB`;
	},
	lsused : (item) => {
	    if (!localStorage.getItem(item)) {
			let sum = 0;
		    for (let i = 0; i < localStorage.length; ++i) {
		        let key = localStorage.key(i);
		        let value = localStorage.getItem(key);
		        sum += key.length + value.length;
		    }
		    return `${sum*2} KB`;
		}
	    else return `${(item.length + localStorage.getItem(item).length)} KB`;
	},
	clone : function (src, shallow, _visited, _copiesVisited) {
		if(!src) return null;
		if(type(src, "boolean") && type(shallow, "object")) {
			src=shallow;
			shallow=src;
		}
		//~^looks like we had to have a switcheroo to fix the "bfora-&-aforb: that for this, and this for that" condition, didn't we?
	    if(typeof src !== 'object') return src;
	    if(type(src, "date")) return new Date(src.getTime());
	    if(type(src, "regexp")) return new RegExp(src);
	    if((src instanceof HTMLElement || src.nodeType) && type(src.cloneNode, "function")) return src.cloneNode(true);
	    if (notType(_visited, "array")){
	        _visited = bla;
	        _copiesVisited = bla;
			//bla=[]=Array()=new Array=new Array(), doesn't matter what syntax you use, as long as you're aware what you're doing
	    }
	    for (let i = 0; i < _visited.length; i++) {
	        if (src === _visited[i]) {
	            return _copiesVisited[i];
	        }
	    }
	    if (type(src, "array")) {
	        let ret = src.slice();
			if (!shallow) {
		        _visited.push(src);
		        _copiesVisited.push(ret);
		        let i = ret.length;
		        while (i--) {
		            ret[i] = this.clone(ret[i], false, _visited, _copiesVisited);
		        }
				printf("Deep copy succeeded in $Math.floor(Math.random()*90) !");
			}
	        return ret;
	    }
		//if we've reached this far and it's neither an array, or regexp, date, or even an element, we must have a plain object, deal with it
		let dest;
		if (!shallow) {
		    let proto = (Object.getPrototypeOf ? Object.getPrototypeOf(src) : src.__proto__);
		    if (!proto) {
		        proto = src.constructor.prototype;
				//okay, if not even that, i.e. if the object doesn't have a prototype itself, its constructor definitely would!
		    }
		    let object_create = Object.create;
			if (typeof object_create !== 'function') {
			    object_create = function(o) {
			        function F() {}
			        F.prototype = o;
			        return new F();
			    };
			}
		    dest = object_create(proto);
		    _visited.push(src);
		    _copiesVisited.push(dest);    
		    for (let key in src) dest[key] = this.clone(src[key], false, _visited, _copiesVisited);
			print("Deep copy successful!");
		} else {
			if (isObj(shallow) && isntType(shallow, "boolean")) dest = Object.assign(src, shallow);
		}
		return is(dest) ? dest : null;
	},
	extend(src, shallow, v, copsV){return this.clone(src, shallow, v, copsV)},
	copy(src, shallow, v, copsV){return this.clone(src, shallow, v, copsV)},
	imagesonpage : (duplicates=false, root=document) => {
		root = [...root.querySelectorAll("img")];
		if (root.length) {
			root = root.map(image => image.src);
			let res = !duplicates ? Array.from(new Set(root)) : root;
			res = res.filter(v => !!v && !!v.match(/\.((sv|pn|jpe?)g|(g|t)iff?|bmp|raw|eps|p(sd|df)|ai|webp|icon?)/i));
			return res;
		}
		return null;
	},
	get unfitElements() {
		let docWidth=de.offsetWidth;
		return Array.from(document.querySelectorAll('*')).filter(el=>el.offsetWidth>docWidth)
	},
	
	brsr : {get dom(){return document.domain||window.location.hostname},get sub(){let url=document.domain??location.hostname;return url.match(/\w{1,25}\.{1}(?=\w{2,}\.{1}\w{2,})/)?.[0]??"www."},get url(){return location.href},get port(){return window.location.port||80},get base(){return `${location.hostname}${location.pathname}`},get path(){return location.pathname||"\/"},get protocol(){let l=window.location,lo=l.origin;return lo?lo.split("//")[0]:l.protocol},get proto(){return this.protocol},reload:()=>window.location.reload()||window.history.go(),go(n){typeof n==="number"?window.history.go(n):(typeof n==="string"&&!!n.length?this.goto(n):null)},next:(n=1)=>nnan(n)?window.history.go(Int(n)):null,back:(n=1)=>nnan(n)?window.history.go(Int(n)>0?Int(-n):Int(n)):null,goto:(to)=>{if (isStr(to)&&isUrl(to)) {to=/^((ht|f)tps?|smb|file):\/\//i.test(String(to))?String(to):`https://${String(to)}`;window.location.replace(to);}},search:(param,value)=>{let url=new URL(window.location);if(!!param&&!!value&&[typeof param,typeof value].every(v=>!!v.match(/string|number/i))){url.searchParams.set(param,value);window.history.pushState({},"",url)}else if(!!param&&!value&&typeof param==="object"&&!Array.isArray(param)){param=Object.keys(param).map(k=>`?${encodeURIComponent(k)}=${encodeURIComponent(param[k])}`).join("&").replace(/\B\?/g,"");window.location.search=param}else if(!!param&&!value&&!!(typeof param==="string")&&!!String(param).match(/[\?|\=]/i)){window.location.search=param}else{return window.location.search||"?"}},hassearch:(v)=>{return ["string","number"].includes(typeof v)?window.location.search.includes(String(v)):null},get searchstate(){return Object.fromEntries(Array.from(new URLSearchParams(window.location.search.split('?')[1])))},id:(id)=>id?window.location.hash=encodeURIComponent(String(id).replace(/\#/g,"")):window.location.hash || null,get secure(){return window.location.protocol==="https:"},tryhttps:()=>window.location.protocol!=="https:"?window.location.replace(`https://${location.href.split("://")[1]}`):null,get https(){return this.secure},gototop:()=>document.body.scrollIntoView({behavior: "smooth", block: "start"}),gotobottom:()=>document.body.scrollIntoView({behavior: "smooth", block: "end"}),scroll:function(y, x=0){ return nnan(y, x) && either(y, x) ? w.scrollBy({top: Int(y), left: Int(x), behavior: "smooth"}) : {x: w.scrollX || de.scrollLeft, y: w.scrollY || de.scrollTop}},scrollY(v){return nnan(v) && is(v) ? this.scroll(Int(v), 0) : this.scroll().y},scrollX(v){return nnan(v) && is(v) ? this.scroll(0, Int(v)) : this.scroll().x},get attop(){return window.scrollY<150},get atbottom(){return de.clientHeight+w.scrollY>=((root.scrollHeight||de.scrollHeight)-150)},scrollto(elm){if (is(elm) && isStr(elm) && isElement(elm)) { try{elm=document.querySelector(elm)}catch{elm=elm} return elm.scrollIntoView({behavior: "smooth", block: "start"})} else {return null}},prefersdark:()=>w&&w.matchMedia&&w.matchMedia('(prefers-color-scheme: dark)').matches,preferslight:()=>w&&w.matchMedia&&w.matchMedia('(prefers-color-scheme: light)').matches,get isfullscreen(){return d.webkitIsFullScreen||d.mozFullScreen||!1},get infullscreen(){return this.isfullscreen},togglefullscreen:(event,__event_param_NEEDED)=>{let el=document.body;if(event instanceof HTMLElement){el=event}let isFullscreen=d.webkitIsFullScreen||d.mozFullScreen||!1;el.requestFullScreen=el.requestFullScreen||el.webkitRequestFullScreen||el.mozRequestFullScreen||el.msRequestFullScreen||el.oRequestFullScreen||function(){return!1};d.cancelFullScreen=d.cancelFullScreen||d.exitFullScreen||d.webkitCancelFullScreen||d.mozCancelFullScreen||d.msCancelFullScreen||d.oCancelFullScreen||function(){return!1};if(isFullscreen){d.cancelFullScreen();d.addEventListener('fullscreenchange',()=>console.log('Left Fullscreen!'))}else{el.requestFullScreen();d.addEventListener('fullscreenchange',()=>console.log('Went Fullscreen!'))}},imagesonpage : (duplicates=false, root=document) => {root = [...root.querySelectorAll("img")];if (root.length) {root = root.map(image => image.src);let res = !duplicates?Array.from(new Set(root)):root;res = res.filter(v => !!v && !!v.match(/\.((sv|pn|jpe?)g|(g|t)iff?|bmp|raw|eps|p(sd|df)|ai|webp|icon?)/i));return res;}else{return null;}},get unfitElements(){let docWidth=de.offsetWidth;return Array.from(document.querySelectorAll('*')).filter(el=>el.offsetWidth>docWidth)},noselect:()=>{let allElementsButNotInputs=document.querySelectorAll("*:not(input):not(textarea), :not(input):not(textarea)::selection");if(!de.style.cssText.match(/(user-select|callout)\:\s*none/)){allElementsButNotInputs.forEach(el=>{el.style.cssText+=` -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none`});return"no-selection mode!"}else{let ifAlready=!!de.style.cssText.match(/(user-select|callout)\:\s*none/);allElementsButNotInputs.forEach(el=>{el.style.cssText+=` -webkit-touch-callout: initial; -webkit-user-select: initial; -khtml-user-select: initial; -moz-user-select: initial; -ms-user-select: initial; -o-user-select: initial; user-select: initial`});return ifAlready?"already in no-selection mode, disabling...":null}},preventleave:()=>document.body.onbeforeunload=()=>"return ''",getBattery:(()=>{let supported = !!navigator.getBattery;let suffix = "";if (supported) {setInterval(() => {navigator.getBattery().then(r => {let this_much = Math.round(r.level*100);let is_charging = r.charging;let result = `${this_much}%`;if (is_charging) result+=" (charging)";window.batteryCache = {now: result, charging: is_charging, comment: this_much<25?"low":(this_much>95?"full":null)}}, 30000)})}})(),get battery(){return window.batteryCache ?? null},noOfCores:()=>{let supported = (number = !!navigator.hardwareConcurrency ? navigator.hardwareConcurrency : null);let prefix = "";let result;if (supported) {switch(number) {case 2:prefix = "Dual";break;case 4:prefix = "Quad";break;case 6:prefix = "Hexa";break;case 8:prefix = "Octa";break;default:prefix = number;}result = `${prefix}-cored`;return result;}return null},get cores(){return this.noOfCores() ?? null},deviceMemory:()=>{let supported = (number = !!navigator.deviceMemory ? navigator.deviceMemory : null);let prefix = "";let result;if (supported) {result = `The device has at least ${number}GB of memory.`;return result;}return null},get memory(){return this.deviceMemory() ?? null},get touch(){return navigator.maxTouchPoints>1 || "ontouchstart" in window},get orientation(){return this.portrait?"portrait":"landscape"},get portrait(){let rsl=this.resolution;return rsl.y>rsl.x},get landscape(){let rsl=this.resolution; return rsl.x>rsl.y},iswebkit:!!navigator.userAgent.match(/webkit/ig),isgecko:/rv\:([\w\.]{1,9})\b.+(gecko)/i.test(navigator.userAgent),isblink:/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i.test(navigator.userAgent),get engine(){return this.isblink?"blink":(this.isgecko?"gecko":(this.iswebkit?"webkit":"unrecognized"))},isfirefox:!!navigator.userAgent.match(/firefox|fxios/i)&&!navigator.userAgent.match(/webkit/i),ischrome:!!navigator.userAgent.match(/webkit|ch?r(om(e|ium)|ios)/i)&&!navigator.userAgent.match(/opr|version\//i),issafari:!!navigator.userAgent.match(/safari/ig)&&!navigator.userAgent.match(/chrome/i),isopera:!!navigator.userAgent.match(/op(e?ra?|ios)\/?/i),isedge:!!navigator.userAgent.match(/edg(e|ios|a)?/ig),isie:!!navigator.userAgent.match(/msie|trident/ig),get name(){let test=(regexp)=>regexp.test(window.navigator.userAgent);switch(!0){case test(/edg(e|ios|a)?/i):return"Microsoft Edge";case test(/msie|trident/i):return"Microsoft IE";case this.isfirefox:return"Mozilla Firefox";case test(/op(e?ra?|ios)\/?/i):return"Opera";case test(/uc(browser|web)/i):return"UC Browser";case test(/samsung(browser|internet)/i):return"Samsung Browser";case test(/d(uck)?d(uck)?g(o)?/i):return"DuckDuckGo";case this.ischrome:return"Google Chrome";case this.issafari:return"Apple Safari";default:return `Unrecognized${(this.engine && !this.engine.match(/unrecognized/i) ? ` ${this.engine[0].toUpperCase()+this.engine.slice(1)}` : "")} Browser`}},get version(){let Majmin=!0,MOnly=!1;let match=navigator.userAgent.match(/(f(irefox|xios)|op(e?ra?|ios)|edg(e|a|ios)|msie|trident|samsungbrowser|(brave|puffin|qq|netscape|dol(ph|f)in|avast)\w*|d(uck)?d(uck)?g(o)?|ch?r(ios|om(e|ium)))(\/[\w\.]+)/gi);match=!!match?match.map(v=>v.replace(/\//g," ")).join(" + "):null;let Mm=!!match&&match.match(/\./g).length>1?`${match.split(".")[0]}.${match.split(".")[1]}`:null,M=!!match&&match.includes(".")?match.split(".")[0]:null;return Majmin?Mm:(MOnly?M:match)},isos:(query)=>{let userAgent=window.navigator.userAgent,platform=window.navigator.platform,macosPlatforms=["Macintosh","MacIntel","MacPPC","Mac68K"],windowsPlatforms=["Win32","Win64","Windows","WinCE"],iosPlatforms=["iPhone","iPad","iPod"],os="Unknown OS";if(macosPlatforms.includes(platform))os="Mac";else if(iosPlatforms.includes(platform))os="iOS";else if(windowsPlatforms.includes(platform)||!!/win(dows nt|32|64)/i.test(userAgent)){os="Windows";let v=userAgent.match(/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)|(?:win(?=3|9|n)|win 9x )([nt\d\.]+)|windows nt 6\.2; (arm)/gi);let wv='';v=!!v?v:null;if(v){let is=(v_code)=>!!String(v).toLowerCase().includes(String(v_code).toLowerCase())??null;switch(!0){case is(5.1):case is(5.2):wv="XP";break;case is(6.0):wv="Vista";break;case is(6.1):wv="7";break;case is(6.2):wv="8";break;case is(6.3):wv="8.1";break;case is(6.4):case is(10.0):wv="10";break;case is("ARM"):wv="11 or higher";break;default:wv=null}os+=wv?` ${wv}`:''}}else if(/Android/i.test(userAgent))os="Android";else if(/Linux/i.test(platform))os="Linux";return!query?os:os.toLowerCase()===query.toLowerCase()},get os(){return this.isos()},get screen(){if(window.innerWidth<768){return"sm"}else if(window.innerWidth<991 && window.innerWidth>768){return"md"}else if(window.innerWidth<1199 && window.innerWidth>768 && window.innerWidth>991){return"lg"}else{return"xl"}},get sm(){return this.screen==="sm"},get md(){return this.screen==="md"},get lg(){return this.screen==="lg"},get xl(){return this.screen==="xl"},get width(){return this.screen},get innerwidth(){return window.innerWidth},get resolution(){return {x:Math.floor(window.screen.width*window.devicePixelRatio),y:Math.floor(window.screen.height*window.devicePixelRatio)}},get resl(){let w=this.resolution.x,h=this.resolution.y;let totalRes=`${w}px x ${h}px`;return totalRes},get osversion(){return !this.ischrome ? window.navigator?.userAgent?.split("; ")[1] : null},get cpu(){return this.cores ?? null},get platform(){return((window.innerWidth<992||screen.width<992)&&("ontouchstart" in document||"onmsgesturechange" in document)&&/Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera (Mob|Min)i|Windows (Mobil|Phon)e|mobi(le)?|(smart)?phone|(bb\d+|meego).+mobile|lge?|sony|nokia?|sy(01|mb)|voda|moto(rola)?|sprint|verizon|((xiao|re(d|al))m(e|i))|h(tc|uawei)|sony(ericsson)?|s(amsun)?gh\-?|kindle/i.test(navigator?.userAgent))?"mobile":"desktop"},get mobile(){return this.platform==="mobile"},get desktop(){return!this.mobile},get brsr(){return `${!!this.name.match(/unrecognized/i) ? `${this.engine[0].toUpperCase()+this.engine.slice(1)}-based browser` : this.name} on ${this.cpu ?? ""} ${this.osversion ? `${this.osversion} ` : (!this.os.match(/unknown/i) ? `${this.os} ` : "")}${this.platform ?? ""} with resolution ${this.resl}<${this.orientation?`${this.orientation}-`:""}${this.screen}-screen${this.device ? ` ${this.device}` : ""}${this.battery?` with ${this.battery.comment || this.battery.now.split(" ")[0]} battery${this.battery.charging ? " (and charging)" : ""}${this.online ? ", and" : ""}`:""}${this.online?`${(!this.battery?" with" : "")} internet access`:""}${this.memory ? `, ${(this.online || this.battery) ? "and" : "with"} ${this.memory.split(/has |\./i)[1]}` : ""}>`},get details(){return this.brsr},get device(){let final=navigator.userAgent.match(/(blackberry|sonyericsson|acer|asus|dell|motorola|infinix|tecno)[-_ ]?([-\w]*)|\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)|\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)|samsung[- ]((?!sm-[lr])[-\w]+)|sec-(sgh\w+)|(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)|\((ipad);[-\w\),; ]+apple|applecoremedia\/[\w\.]+ \((ipad)|\b(ipad)\d\d?,\d\d?[;\]].+ios|(macintosh);|\b(sh-?[altvz]?\d\d[a-ekm]?)|\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)|(?:huawei|honor)([-\w ]+)[;\)]|\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)|\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))|\b; (\w+) build\/hm\1|\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui|\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))|oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))|\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))|oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))|\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))|; (\w+) bui.+ oppo|\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b|\b(opd2\d{3}a?) bui|vivo (\w+)(?: bui|\))|\b(v[12]\d{3}\w?[at])(?: bui|;)|\b(rmx[1-3]\d{3})(?: bui|;|\))|\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\/|\bmot(?:orola)?[- ](\w*)|((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))|\b(mz60\d|xoom[2 ]{0,2}) build\/|((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})|(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])|\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)|\blg-?([\d\w]+) bui|(ideatab[-\w ]+)|lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})|(?:maemo|nokia).*(n900|lumia \d+)|nokia[-_ ]?([-\w\.]*)|(pixel c)\b|droid.+; (pixel[\daxl ]{0,6})(?: bui|\))|droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))|sony tablet [ps]|\b(?:sony)?sgp\w+(?: bui|\))|(kb2005|in20[12]5|be20[12][59])\b|(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))|(alexa)webm|(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))|(kf[a-z]+)( bui|\)).+silk\/|((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\/|(playbook);[-\w\),; ]+(rim)|\b((?:bb[a-f]|st[hv])100-\d)|\(bb10; (\w+)|(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])|(z[bes]6[027][012][km][ls]|zenfone \d\w?)\b|(nexus 9)|(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)|(zte)[- ]([\w ]+?)(?: bui|\/|\))|(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)|droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)|(itel) ((\w+))|droid.+; ([ab][1-7]-?[0178a]\d\d?)|droid.+; (a(?:015|06[35]|142p?))|(blackberry|sonyericsson|acer|asus|dell|motorola|infinix|tecno)[-_ ]?([-\w]*)|(hp) ([\w ]+\w)|(asus)-?(\w+)|(microsoft); (lumia[\w ]+)|(lenovo)[-_ ]?([-\w]+)|(oppo) ?([\w ]+) bui|(hp).+(touchpad(?!.+tablet)|tablet)|(kindle)\/([\w\.]+)|(dell) (strea[kpr\d ]*[\dko])|(vodafone) ([\w ]+)(?:\)| bui)|(surface duo)|droid [\d\.]+; (fp\du?)(?: b|\))|(u304aa)|\b(venue[\d ]{2,7}) b|\b(q(?:mv|ta)\w+) b|\b(tm\d{3}\w+) b|\b(k88) b|\b(nx\d{3}j) b|(shield[\w ]+) b|(sprint) (\w+)/gi);final=!!final&&!this.ischrome?final[0]:null;return final},get offline(){return!window.navigator.onLine||!this.online},get online(){window.onload=()=>setInterval(async()=>{let xhr=XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHttp');xhr.open('HEAD','https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',!0);xhr.send();xhr.addEventListener("readystatechange",async(e)=>{if(await xhr.readyState==4){if(await xhr.status>=200&&await xhr.status<304){window.onl=!0}else{window.onl=!1}}},!1)},2000); return window.onl??(!navigator.onLine?!1:!0)},get state(){return {online:this.online, offline:this.offline, id:this.id() || "#", queries: this.search(), searchstate:Object.values(this.searchstate).length ? this.searchstate : {null: !0}}},get idle(){return this.state==="offline"},visits:(()=>{let count = !isNaN(localStorage.getItem('visits')) ? parseInt(localStorage.getItem('visits'))||0 : null;if (count == null) count = 0;else count+=1;localStorage.setItem('visits', count);let res = !!localStorage.getItem('visits').match(/will refresh/i) ? 0 : count; window.visitCache=res; return res;})(),clearvisits(){localStorage.setItem('visits', "Will refresh on the next browser restart...")}},
	
	
	
	toJson : (arr_or_obj) => JSON.stringify(arr_or_obj),
	parseJson : (arr_or_obj) => {
		try{return type(arr_or_obj, "string") && len(arr_or_obj) ? JSON.parse(arr_or_obj) : null;}
		catch{return null}
	},
	parseXml : function(xml, strMode=false) {
		if ((typeof xml!== "string" || !String(xml).trim().length) && !(xml instanceof HTMLElement)) return null;
		try {
			xml=document.querySelector(xml);
		} catch {
			xml=xml;
		}
		if(xml instanceof HTMLElement) {
			if(xml.nodeType != 1 || xml === document.documentElement || xml === document.head) xml=document.body;
			xml=xml.innerHTML;
		}
		let jsonObjToStr = function(js_obj) {
		    let rejsn = JSON.stringify(js_obj, undefined, 2).replace(/(\\t|\\r|\\n)/g, '').replace(/"",[\n\t\r\s]+""[,]*/g, '').replace(/(\n[\t\s\r]*\n)/g, '').replace(/[\s\t]{2,}""[,]{0,1}/g, '').replace(/"[\s\t]{1,}"[,]{0,1}/g, '').replace(/\[[\t\s]*\]/g, '""');
		    if (!rejsn.match("parsererror")) return rejsn;
			else throw new Error('Invalid XML format');
		};
		let setJsonObj = function(xml) {
		      let js_obj = {};
		      if (xml.nodeType == 1) {
		          if (xml.attributes.length > 0) {
			          js_obj["@attributes"] = {};
		              for (let j = 0; j < xml.attributes.length; j++) {
			              let attribute = xml.attributes.item(j);
					         js_obj["@attributes"][attribute.nodeName] = attribute.value;
			          }
			      }
			  } else if (xml.nodeType == 3) {
			      js_obj = xml.nodeValue;
		      }
		      if (xml.hasChildNodes()) {
			      for (let i = 0; i < xml.childNodes.length; i++) {
		              let item = xml.childNodes.item(i);
		              let nodeName = item.nodeName;
		              if (typeof(js_obj[nodeName]) == "undefined") {
				          js_obj[nodeName] = setJsonObj(item);
			          } else {
			              if (typeof(js_obj[nodeName].push) == "undefined") {
				              let old = js_obj[nodeName];
				              js_obj[nodeName] = [];
				              js_obj[nodeName].push(old);
			              }
				          js_obj[nodeName].push(setJsonObj(item));
			        }
		        }
		    }
		    return js_obj;
		};
	    let xmlDoc;
	    if(window.DOMParser) {
	        xmlDoc = new DOMParser().parseFromString(xml,"text/xml");
	    }
	    else {
	        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	        xmlDoc.async = "false";
	    }
	    let jsonObj = setJsonObj(xmlDoc);
	    if (String(Object.entries(jsonObj)).match(/parseerror/i)) return null;
	    let jsonStr = jsonObjToStr(jsonObj);
	    return strMode ? jsonStr : jsonObj;
	},
	toJ(a){return this.toJson(a)},
	j(a){return this.toJson(a)},
	json(a){return this.toJson(a)},
	jsify(a){return this.toJson(a)},
	jsonify(a){return this.toJson(a)},
	unJ(a){return this.parseJson(a)},
	deJ(a){return this.parseJson(a)},
	pJ(a){return this.parseJson(a)},
	parJ(a){return this.parseJson(a)},
	parseJ(a){return this.parseJson(a)},
	unXml(a, b_boolean){return this.parseXml(a, b_boolean)},
	deXml(a, b_boolean){return this.parseXml(a, b_boolean)},
	convertXml(a, b_boolean){return this.parseXml(a, b_boolean)},
	parseX(a, b_boolean){return this.parseXml(a, b_boolean)},
	unX(a, b_boolean){return this.parseXml(a, b_boolean)},
	deX(a, b_boolean){return this.parseXml(a, b_boolean)},
	pX(a, b_boolean){return this.parseXml(a, b_boolean)},
	//:::mail & tel:::
	validateEmail : (email) => {
		if (/^[\w\.\-\_]+@[\w]+\.[\w]{2,}(\.[\w]{2,})?$/i.test(String(email))) return `mailto:${email}`;
		else {
			console.error("Invalid Email!");
			return null;
		}
	},
	validatePhone : (number, link_type="tel", prefix_options="tel|wa|text") => {
		let t = (r) => !!String(link_type).match(r);
		switch (true){
			case t(/tel|ph?/i):
				link_type="tel:";
				break;
			case t(/te?(xt)?|s?m(essa|s)?(g|s)e?/i):
				link_type="sms:";
				break;
			case t(/w(hats)?a?(pp)?/i):
				link_type = "https:\/\/wa.me\/";
				break;
			default:
				link_type="tel:";
		}
		if (/^(((([\+?\d\-.]{1,4})?[ \-.]?\d{3})|([\+?\d\-.]{1,4})?[ \-.]?\((\d{3}\)))?[ \-.]?\d{3}[ \-.]?\d{4}\s?(e?x?t?\.?\s?\d{1,7})?)?$/i.test(String(number))) return `${link_type}${number.replace(!!link_type.match(/w(hats)?a?(pp)?/) ? /[\D]+/g : /[^\+\d]+/g, "")}`;
		else {
			console.error("Invalid Phone!");
			return null;
		}
	},
	validatePassword : (str) => {
		let helping_chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABC012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012~~~~~~~!!!!!!!@@@@@@@#######$$$$$$$%%%%%%%^^^^^^^&&&&&&&*******((((((()))))))_______-------+++++++<<<<<<<>>>>>>>{{{{{{{}}}}}}}[[[[[[]]]]]].......\'\'\'\'\'\'\'???????=======";
	    let suggested = "";
	    for (let i = 0; (typeof str==="string" && !!str && (i < ((str.length < 8 ? 8 : (str.length > 32 ? 32 : str.length))))); ++i) {
	        let randomIndex = Math.floor(Math.random() * helping_chars.length);
	        suggested += helping_chars[randomIndex];
	    }
		if (!!str && typeof str==="string" && !!String(str).trim().length) {
			if (/^(?=.*\d)(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,32}$/.test(String(str))) {
				return str;
			}
			else {
				console.error(`To achieve the non-guessable, a password must contain at least one uppercase letter, one lowercase (though optional), a symbol, a number, and should be about 8 to 32 characters. Try: ${suggested}`);
				return null;
			}
		}
		else {
			console.error('nothing to validate!');
			return null;
		}
	},
	
	
	cur: {
		rates: (cur="usd", cur2="pkr", element_to_render_at, mode=atob("Mm{MyMz^U3==Zjd{kNG:U}1^OGI2=YmU1Yz=M1}~ZDQ3".split(/[\=\^\:{}~]+/g).join(""))) => fetch(`https://v6.exchangerate-api.com/v6/${mode}/latest/${cur}`).then(r => r.json()).then((data) => {
			let res = Object.entries(data.conversion_rates).map(([key, val]) => key + " " + Number(val).toFixed(2)).filter(item => item.toUpperCase().includes(cur.toUpperCase()) || item.toUpperCase().includes(cur2.toUpperCase())).join(" = ");
			let at = element_to_render_at;
			try {
				at = document.querySelector(at);
			} catch {
				at=at;
			}
			__$.currencyTemp = (__$.currTemp = __$.curTemp = res);
			return !!at ? at.textContent = res : console.log(res);
		}).catch(() => console.error('A stable internet connection required!')),//✔️ tested, works as intended
		new: (n, curr, _float=false, format_SAFE="en-in") => {
			if ((nnan(n) && isStr(format_SAFE)) && is(n, format_SAFE)) {
				if (__$.user && __$.brsr.state.online) curr = __$.user.currency.code;
				else curr = isStr(curr) && len(curr, ">=1") && len(curr, "<=3") ? curr : "PKR";
				if (!curr) return null;
				curr = curr.toUpperCase();
				format_SAFE = `${format_SAFE.split("-")[0].toLowerCase()}-${format_SAFE.split("-")[1].toUpperCase()}`;
			    let res = Intl.NumberFormat(format_SAFE, {
			        style: 'currency',
			        currency: curr,
			    }).format(parseInt(n)).slice(0, -1).replace("PKR", "Rs");
				if (!_float) res = res.replace(/\.(.+)/g, "");
				return res;
			}
			return null;
		}
	//✔️ test: cur.new(333715.73) returns "Rs 3,33,715.7": String
	},
	get curr(){return this.cur},
	fmt : function(str, ...args) {
		if (nnan(str) && is(str) && !objsIn(...args)) {
				let n = str,
				  origin = len(args[0], ">=2") && len(args[0], "<=6") && !isBool(args[0]) ? args[0] : "hi";
				let res = Int(n).toLocaleString(origin);
				if (args?.[0]==true) {
					if (isBool(args?.[1])) res = this.num2words(res.replace(/\D+/g, ""));
				} else {
					if (origin=="hi") res = this.cur.new(parseInt(Str(res).replace(/\D+/g, "")));
					if (args?.[1]==true) res = `${this.num2words(res.replace(/\D+/g, ""))} ${Str(res).split(/\s\d/, )[0].replace(/Rs|\w+/, this.user && this.brsr.state.online ? this.user.currency.plural.replace(/(?<=\s)[a-z]/, m => m.toUpperCase()) : m=>m.toLowerCase())}`;
				}
				return res||null;
		} else if (!!str && isStr(str) && [...args].every(v => !!v && !!type(v).match(/string|number|object|boolean/i)) && (len(args, "==1") ? !incl(args[0], /^[a-z]{2}(\-\w{2})?$/i) : true)) {
			str = Str(str);
	        if (len(args, 1) && type(args[0], /object/i)) args = args[0];
	        str = str.replace(/{([^}]*)}/g, function(match, key) {
	            return (typeof args[key] !== "undefined" ? args[key] : match);
	        });
	        let i=0;
	        while (i<args.length && /(%|&)(s|(d|n)|%|&)|\{\}/.test(str)) {
	        	//doesn't have to be a global search!
				//identifiers supported in the current version: %s, %%, &%, %&, &s, &&, {} for strings, while %d, &d, %n and &n exist mostly for numbers. However, it is recommended to use the ones designed for strings globally for any type, as issue#78 states the latter might come accross as glitchy if the string is longer than 40 characters.
	            str = str.replace(/(%|&)(s|%|&)|\{\}/, args[i]);
	            str = !isNaN(args[i]) ? str.replace(/(%|&)(d|n)/, args[i]) : str;
	            i++;
	        }
	        return w.f(str);
		}
		return null;
	},
	//test I, charming: __$.fmt("hi %s, this is me %s, meet me at %s in the %s, we have some %s. By the way, I believe you can do this $1+1, can't you? $-7+7 chance you can't", "Kyle", "Ayesha, your bestie", 3, "afternoon", "catching up to do"): String
	//functional test II: __$.fmt(300_000) returns "3,00,000": String
	//functional test III: __$.fmt(799999) prints Rs 7,99,999, while __$.fmt(799999, false)[:bool[true|false,same behavior]] prints 7,99,999, dropping the currency part
	//function test IV: __$.fmt(800_560_000, false, true);
	
	//@params if the passed values are only numbers (be it in a string, or a plain int, sidenote, doesn't support floats, they're only parsed as ints if noticed), alongwith 0 to 2 boolean values, the correct, and accurate number formatting, that supports huge number as well and up to a sextillion, occurs. ELSE if the first parameter is a plain string instead of a number, neither wrapped in a string or by itself, the STRING formatting happens instead. The instances of use can be seen demonstrated above.
	num2text : function(...nums) {
		if (is(...nums) && nnan(...nums)) {
			let res;
			if (nums.every(n => len(Str(n).replace(/\D+/g, ""), "<=9"))){
				res = nums.map(num => {
					num = Int(Str(num).replace(/[^\d\+\-]+/g, ""));
				    let ones = ["", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen "],
				    tens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
				    let sign = "";
					sign = !!String(num).match(/[\+\-]/) ? String(num).match(/[\+\-]/)[0] : null;
					if (sign) {
						sign = sign==="+" ? "Positive " : "Negative ";
						num = Int(Str(num).replace(/\D+/g, ""));
					}
					num = !String(num).match(/\./) && !isNaN(num) ? parseInt(num) : null;
				    let n = ("000000000" + num).slice(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
				    if (isNaN(num) || !n) throw new Error("Invalid parameters!");
				    let str = "";
				    str += n[1] != 0 ? (ones[parseInt(n[1])] || tens[n[1][0]] + " " + ones[n[1][1]]) + "crore " : "";
				    str += n[2] != 0 ? (ones[parseInt(n[2])] || tens[n[2][0]] + " " + ones[n[2][1]]) + "lac " : "";
				    str += n[3] != 0 ? (ones[parseInt(n[3])] || tens[n[3][0]] + " " + ones[n[3][1]]) + "thousand " : "";
				    str += n[4] != 0 ? (ones[parseInt(n[4])] || tens[n[4][0]] + " " + ones[n[4][1]]) + "hundred " : "";
				    str += n[5] != 0 ? (str != "" ? "and " : "") + (ones[Number(n[5])] || tens[n[5][0]] + " " + ones[n[5][1]]) : "";
				    str = str.trim();
				    str = str.replace(/(lac|crore|thousand|\sand)[\s]/gi, match => ({"lac ": "lac, ", "crore ": "crore, ", "thousand ": "thousand, ", " and ": ", and "})[match] || match);
				    if (sign) {
				    	str = sign+str;
				    }
				    str = str[0].toUpperCase()+str.slice(1);
				    return str;
				});
			} else if (nums.some(num => len(Str(num).replace(/[^\d\+\-]+/g, ""), ">9"))) {
				res = nums.map(n => {
					let negative, positive;
				    if (typeof n === 'string' && n.trim().match(/^(\-|\+)?[0-9]+$/)) {
				    	if (!!n.trim().match(/\-/)) {
					    	n = n.replace(/\-/g, "");
						    negative = true;
							positive = !negative;
						}
						if (!!n.trim().match(/\+/)) {
					    	n = n.replace(/\+/g, "");
						    negative = false;
							positive = !negative;
						}
				        n = parseInt(n, 10);
				    }
				    if (typeof n === 'number' && isFinite(n) && String(n).trim().match(/^(\-|\+)?[0-9]+$/)) {
					    if (!!String(n).trim().match(/\-/)) {
					    	n = String(n).replace(/\-/g, "");
						    negative = true;
							positive = !negative;
						}
						n = n.toString(10);
				    } else {
				        throw new Error("Typeerror: Not a (valid) Integer");
				    }
				    let digits = n.split("");
				    while (digits.length % 3 !== 0) {
				        digits.unshift('0');
				    }
				    let digitsGroup = [];
				    let nOfGroups = digits.length / 3;
				    for (let i = 0; i < nOfGroups; i++) {
				        digitsGroup[i] = digits.splice(0, 3);
				    }
				    let digitsGroupLen = digitsGroup.length;
				    let numTxt = [
				        [null, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
				        [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
				        [null, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
				        ];
				    let tenthsDifferent = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
				    for (let j = 0; j < digitsGroupLen; j++) {
				        for (let k = 0; k < 3; k++) {
				            let currentValue = digitsGroup[j][k];
				            digitsGroup[j][k] = numTxt[k][currentValue];
				            if (k === 0 && currentValue !== '0') {
				                digitsGroup[j][k] += ' hundred ';
				            } else if (k === 1 && currentValue === '1') {
				                digitsGroup[j][k] = tenthsDifferent[digitsGroup[j][2]];
				                digitsGroup[j][2] = 0;
				            }
				        }
				    }
				    for (let l = 0; l < digitsGroupLen; l++) {
				        if (digitsGroup[l][1] && digitsGroup[l][2]) {
				            digitsGroup[l][1] += '-';
				        }
				        digitsGroup[l] = digitsGroup[l].filter(v => !!v).join("");
				    }
				    let posfix = [null, 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion'];
				    if (digitsGroupLen > 1) {
				        let posfixRange = posfix.splice(0, digitsGroupLen).reverse();
				        for (let m = 0; m < digitsGroupLen - 1; m++) {
				            if (digitsGroup[m]) {
				                digitsGroup[m] += ' ' + posfixRange[m];
				            }
				        }
				    }
				    digitGroups = digitsGroup.join(' ');
				    digitGroups = negative ? `negative ${digitGroups}` : (!negative && positive ? `positive ${digitGroups}` : digitGroups);
				    digitGroups = (digitGroups[0].toUpperCase()+digitGroups.slice(1)).trim();
				    digitGroups = digitGroups.replace(/((m|b|tri|q(uad|uint)|sex)illion|thousand|hundred)[\s]/gi, match => ({"sextillion ": "sextillion, ", "quintillion ": "quintillion, ", "quadrillion ": "quadrillion, ", "trillion ": "trillion, ", "billion ": "billion, ", "million ": "million, ", "thousand ": "thousand, "})[match] || match);
				    return digitGroups;
				});
			}
			return res.length>1 ? res : res[0];
		}
		return null;
	},
	num2urdu : function (...nums){
		if (nnan(...nums) && is(...nums) && len(nums)) {
			let res = nums.map(n => Int(n).toLocaleString("ar-EG"));
			res = res.filter(v => !!v);
			return res.length > 1 ? res : res[0];
		}
		return null;
	},
	num2arabic(...nums){return this.num2urdu(...nums)},
	//working test: __$.num2arabic(30_500) returns "٣٠٬٥٠٠": String
	num2words(...nums){return this.num2text(...nums)},
	num2roman : function (...nums) {
		if (len(nums) && nnan(...nums) && is(...nums)) {
			let res = nums.map(num => {
			    let lookup = [
			        ["M", 1000],
			        ["CM", 900],
			        ["D", 500],
			        ["CD", 400],
			        ["C", 100],
			        ["XC", 90],
			        ["L", 50],
			        ["XL", 40],
			        ["X", 10],
			        ["IX", 9],
			        ["V", 5],
			        ["IV", 4],
			        ["I", 1],
			    ];
			    num = Int(num);
			    return lookup.reduce((acc, [k, v]) => {
			        acc += k.repeat(Math.floor(num / v));
			        num = num % v;
			        return acc;
			    }, "");
			}).filter(v => !!v);
			return res.length>1 ? res : res[0];
		}
		return null;
	},
	//working test: console.log(toRoman(615)) returns DCXV
	
	
	
	//date methods
	calcAge : (dob) => {
	    dob = new Date(dob);
	    let diff_ms = Date.now() - dob.getTime();
	    let age_dt = new Date(diff_ms);
	    let res = Math.abs(age_dt.getUTCFullYear() - 1970);
	    return typeof res === "number" && !!res && res<120 ? res : null || 0;
	},
	// tested: console.log(calcAge("Jan 24, 2002")) returns 22: Number
	yesterdate : () => {
	    let d = new Date();
	    d.setDate(d.getDate() - 1);
	    let res = d.toString().split(" G")[0];
	    res = res.slice(0, 15);
	    return res;
	},
	dateTomorrow : () => {
	    let d = new Date();
	    d.setDate(d.getDate() + 1);
	    let res = d.toString().split(" G")[0];
	    res = res.slice(0, 15);
	    return res;
	},
	dateDayBeforeYesterday : () => {
	    let d = new Date();
	    d.setDate(d.getDate() - 2);
	    let res = d.toString().split(" G")[0];
	    res = res.slice(0, 15);
	    return res;
	},
	dateDayAfterTomorrow : () => {
	    let d = new Date();
  	  d.setDate(d.getDate() + 2);
	    let res = d.toString().split(" G")[0];
	    res = res.slice(0, 15);
	    return res;
	},
	weekAgo : (n) => {
		n = !isNaN(n) && isFinite(n) ? parseInt(n) : 1;
	    let d = new Date();
	    d.setDate(d.getDate() - (7*n));
	    let res = d.toString().split(" G")[0];
	    res = res.slice(0, 15);
	    return res;
	},
	weekLater : (n) => {
	    n = !isNaN(n) && isFinite(n) ? parseInt(n) : 1;
	    let d = new Date();
  	  d.setDate(d.getDate() + (7*n));
	    let res = d.toString().split(" G")[0];
	    res = res.slice(0, 15);
	    return res;
	},
	getdnt : (shortened=false) => {
	    let timezone = /\((.*)\)/.exec(new Date().toString())[1];
	    let months = [
	        "January",
	        "February",
	        "March",
	        "April",
	        "May",
	        "June",
	        "July",
	        "August",
	        "September",
	        "October",
	        "November",
	        "December",
	    ];
	    let days = [
	        "Sunday",
	        "Monday",
	        "Tuesday",
	        "Wednesday",
	        "Thursday",
	        "Friday",
	        "Saturday",
	    ];
	    let d = new Date();
	    let day = days[d.getDay()];
	    let hr = d.getHours();
	    let min = d.getMinutes();
	    min = min < 10 ? "0" + min : min;
	    let ampm = "am";
	    if (hr >= 12) {
	        hr -= 12;
	        ampm = "pm";
	    }
		if (hr===0) hr=12;
	    hr = hr < 10 ? "0" + hr : hr;
	    let date = d.getDate();
	    let month = months[d.getMonth()];
	    let year = d.getFullYear();
		if (shortened) {
			timezone = timezone.match(/[A-Z]/g).join("");
			day = day.slice(0, 3);
			month = month.slice(0, 3);
		}
	    let returnVal = `${day}, ${hr}:${min} ${ampm.toUpperCase()}${!shortened?`, ${timezone}`:""}, ${month} ${date}, ${year}`;
	    return returnVal;
	},
	dnt : function(shortened) {
		return this.getdnt(shortened)
	},
	timestamp : () => {
	    let timezone = /\((.*)\)/.exec(new Date().toString())[1];
	    let months = [
	        "Jan",
	        "Feb",
	        "Mar",
	        "Apr",
	        "May",
	        "Jun",
	        "Jul",
	        "Aug",
	        "Sep",
	        "Oct",
	        "Nov",
	        "Dec",
	    ];
	    let days = [
	        "Sun",
	        "Mon",
	        "Tue",
	        "Wed",
	        "Thu",
	        "Fri",
	        "Sat"
	    ];
	    let d = new Date();
	    let day = days[d.getDay()];
	    let hr = d.getHours();
	    let min = d.getMinutes();
	    min = min < 10 ? "0" + min : min;
	    let ampm = "am";
	    if (hr >= 12) {
	        hr -= 12;
			ampm = "pm";
	    }
		if (hr===0) hr=12;
	    hr = hr < 10 ? "0" + hr : hr;
	    let date = d.getDate();
	    let month = months[d.getMonth()];
	    let year = d.getFullYear();
	    let returnVal = `${day}-${hr}-${min}-${ampm.toUpperCase()}-${timezone.split(" ").join("-").match(/[A-Z]/g).join("")}-${month}-${date}-${year}`;
	    return returnVal;
	},
	ts(){return this.timestamp()},
	getTime : (s=false) =>
	  new Date().toLocaleTimeString([], {
	    second: s ? "2-digit" : undefined,
		minute: "2-digit",
	    hour: "2-digit",
	    hour12: true,
	}),
	time(s){return this.getTime(s)},
	getFullTime(){ return this.getTime(true)},
	getDay : (short) => {
		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		let day = days[new Date().getDay()];
		if (short) day = day.slice(0, 3);
		return day;
	},
	day(short){return this.getDay(short)},
	getDayShort(){return this.getDay().slice(0, 3)},
	getDate(short=false, local=false){ return !short ? (!local ? new Date().toLocaleDateString("en-US", {weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'}) : this.getDateLocal()) : new Date().toLocaleDateString()},
	date(short, local){return this.getDate(short, local)},
	today(short, local){return this.getDate(short, local)},
	shortDate(){ return this.getDate(true)},
	getDateLocal : (country="ur-PK") => new Date().toLocaleDateString(country, {weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'}),
	getLocalDate(country="ur-PK"){return this.getDateLocal(country)},
	localDate(locale){return this.getDateLocal(locale)},
	getMonth : (short) => {
		let months = [
	        "January",
	        "February",
	        "March",
	        "April",
	        "May",
	        "June",
	        "July",
	        "August",
	        "September",
	        "October",
	        "November",
	        "December",
	    ];
		let res = months[new Date().getMonth()];
		if (short) res = res.slice(0, 3);
		return res;
	},
	month(short=false){return this.getMonth(short)},
	shortMonth() {return this.getMonth(true)},
	lastOfMonth(m){
		let d = new Date();
		m = nnan(m) && is(m) && m>0 && m<=12 ? m : (1+d.getMonth());
		//@params: m:num, OPTIONAL
		let y = d.getFullYear();
		return new Date(y, m, 0).getDate()
	},
	lenOfMonth(m){ return this.lastOfMonth(m)},
	getYear : () => new Date().getFullYear(),
	year(){return this.getYear()},
	getShortYear() {
		return parseInt(String(this.getYear()).slice(2));
	},
	nextLeapYear(){
		let d = new Date();
		let i = 0;
		d.setYear(d.getFullYear()+1);
		while (d.getFullYear()%4 !== 0) {
			d.setYear(d.getFullYear()+i);
			i++;
		}
		d.setDate(29);
		d.setMonth(1);
		let m = d.toDateString().match(/\w{3}(\s\d{2}\s\d{4})/i);
		return !!m ? m[0] : d.toDateString().slice(4);
	},
	getDateBefore : (n) => {
		if (nnan(n) && fin(n)){
		     //n stands for number of days
		     let d = new Date();
		     d.setDate(d.getDate() - Math.abs(Int(n)));
		     let x = d.toDateString().replace(" ", ", ");
		     x = `${x.split(" ")[0]} ${x.split(" ")[1]} ${x.split(" ")[2]}, ${
		       x.split(" ")[3]
		    }`;
		    return !Str(x).includes("Invalid") ? x : "Invalid Parameter!";
		}
		return null;
	},
	dateBack(n){ return !isNaN(n) ? this.getDateBefore(n) : null},
	dateDaysAgo(n){ return !isNaN(n) ? this.getDateBefore(n) : null},
	dateNDaysAgo(n){ return !isNaN(n) ? this.getDateBefore(n) : null},
	getDateAfter : (n) => {
		if (nnan(n) && fin(n)) {
	        //n stands for number of days
	        let d = new Date();
	        d.setDate(d.getDate() + Math.abs(parseInt(n)));
	        let x = d.toDateString().replace(" ", ", ");
	        x = `${x.split(" ")[0]} ${x.split(" ")[1]} ${x.split(" ")[2]}, ${
	          x.split(" ")[3]
	        }`;
	        return !String(x).includes("Invalid") ? x : "Invalid Parameter!";
		}
		return null;
	},
	dateDaysAfter(n){ return !isNaN(n) ? this.getDateAfter(n) : null},
	dateDaysLater(n){ return !isNaN(n) ? this.getDateAfter(n) : null},
	dateNDaysLater(n){ return !isNaN(n) ? this.getDateAfter(n) : null},
	dateAfter(n){ return !isNaN(n) ? this.getDateAfter(n) : null},
	dayOn(n, keepMonth=false){
		let d = new Date();
		n = !isNaN(n) && n<=this.lastOfMonth() ? parseInt(n) : null;
		if (n) {
			d.setDate(n);
			let today = new Date();
			let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			if ((d.getDate()<=today.getDate() && d.getMonth()===today.getMonth()) && !keepMonth) d.setMonth(d.getMonth()+1);
			return `${days[d.getDay()]} (${d.toDateString().slice(4, 10)})`;
		}
		return null;
	},
	nthDay(n, keepMonth){return this.dayOn(n, keepMonth)},
	dayYesterday(){
		return this.dayOn(new Date(this.yesterdate()).getDate(), true)
	},
	yesterday(){
		return this.dayYesterday()
	},
	dayTomorrow(){
		return this.dayOn(new Date(this.dateTomorrow()).getDate(), true)
	},
	tommoday(){
		return this.dayTomorrow()
	},
	isWeekend : () => new Date().getDay() % 6 === 0,
	nthMonth : (n, extended=true) => {
		if (is(n) && nnan(n) && isBool(extended) && Int(n)<=12) {
			n = Int(n);
			n -= 1;
			let months;
			if (!extended) months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
			else months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
			return months[n];
		}
		return null;
	},
	nthMonthShort(n){
		return this.nthMonth(n, false);
	},
	hoursBack(h=1, withDate=false, withSecs=false) {
		if (nnan(h)) {
			h = Int(h);
			if (h<0) h = Math.abs(h);
			let d = new Date();
			d.setTime(d.getTime()-(36e+5*h));
			let res = d.toLocaleString();
			if (isBool(withSecs) && withSecs==false) res = res.replace(/\:\d{2}(?=\s)/, "");
			if (h>=12) withDate=true;
			if (isBool(withDate) && withDate==false) res = res.split(", ")[1];
			return res
		}
		return null;
	},
	hoursLater(h=1, withDate=false, withSecs=false) {
		if (nnan(h) && Int(h)>=0 && isfin(h)) {
			h = Int(h);
			let d = new Date();
			d.setTime(d.getTime()+(36e+5*h));
			let res = d.toLocaleString();
			if (isBool(withSecs) && withSecs==false) res = res.replace(/\:\d{2}(?=\s)/, "");
			if (h>=12) withDate=true;
			if (isBool(withDate) && withDate==false) res = res.split(", ")[1];
			return res
		}
		return null;
	},
	nthHour(h, withDate=false, withSecs=false) {
		if (nnan(h) && Int(h)<=24 && isfin(h)) {
			h = Int(h);
			let d = new Date();
			d.setTime(d.getTime()-36e5*d.getHours()+(36e5*h));
			let res = d.toLocaleString();
			if (isBool(withSecs) && withSecs==false) res = res.replace(/\:\d{2}(?=\s)/, "");
			if (h>=12||h<0) withDate=true;
			if (isBool(withDate) && withDate==false) res = res.split(", ")[1];
			return res
		}
		return null;
	},
	minsBack(n, withDate=true, withSecs=false){
		if(nnan(n) && Int(n)>=0 && isfin(n)) {
			n = Int(n);
			let d = new Date();
			d.setTime(d.getTime()-60e3*n);
			let res = d.toLocaleString();
			if (isBool(withSecs) && withSecs==false) res = res.replace(/\:\d{2}(?=\s)/, "");
			if (n>=12||n<0) withDate=true;
			if (isBool(withDate) && withDate==false) res = res.split(", ")[1];
			return res;
		}
		return null;
	},
	minsLater(n, withDate=true, withSecs=false){
		if(nnan(n) && Int(n)>=0 && isfin(n)) {
			n = Int(n);
			let d = new Date();
			d.setTime(d.getTime()+60e3*n);
			let res = d.toLocaleString();
			if (isBool(withSecs) && withSecs==false) res = res.replace(/\:\d{2}(?=\s)/, "");
			if (n>=12||n<0) withDate=true;
			if (isBool(withDate) && withDate==false) res = res.split(", ")[1];
			return res;
		}
		return null;
	},
	dt2day(dt, short){
		if (isDate(dt)) {
			let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			if (isStr(dt) && incl(Str(dt), /\w{2,10}\W\w{2,10}\W\w{2,10}/)) dt = new Date(dt);
			let day = days[dt.getDay()];
			return day.slice(0, short ? 3 : day.length);
		}
		return null;
	},
	dt2month(dt, short){
		if (isDate(dt)) {
			let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			if (isStr(dt) && incl(Str(dt), /\w{2,10}\W\w{2,10}\W\w{2,10}/)) dt = new Date(dt);
			let month = months[dt.getMonth()];
			return month.slice(0, short ? 3 : month.length);
		}
		return null;
	},
};









//***************Numbers & Math********************

const findMin = (...nums) => nnan(...nums) ? Math.min(...nums) : null;
//console.log(findMin([1,3,5,6,8,10,12])) returns 1: Number
const findMax = (...nums) => nnan(...nums) ? Math.max(...nums) : null;
//console.log(findMax([1,3,5,6,8,10,12])) returns 12: Number
//____evens and odds____
const findEvenEach = (findEvens = removeOdds = (...stuff) => is(stuff) && numsIn(stuff) ? stuff.filter(num => nnan(num) && Int(num) % 2 === 0) : null);
//working test, works perfectly: findEvenEach(...[1,3,5,6,8,10,12]) returns [6,8,10,12]
const hasEvens = (evensIn = (...stuff) => {
	return stuff.some(arg => {
		let ns = String(arg).match(/\d+/g);
		if (!!ns) return !!ns.filter(s => Int(s)%2===0).length;
		return false;
	});
});
//ALSO WORKS WITH STRINGS
//returns true if any of the array items is an even number; tested, does what it's supposed to
const findOddEach = (findOdds = removeEvens = (...stuff) => len(stuff) && numsIn(stuff) ? stuff.filter(num => nnan(num) && num % 2 !== 0) : null);
//working test: findOddEach(...[1,3,5,6,8,10,12]) returns [1,3,5]
const hasOdds = (oddsIn = (...stuff) => {
	return stuff.some(arg => {
		let ns = String(arg).match(/\d+/g);
		if (!!ns) return !!ns.filter(s => Int(s)%2!==0).length;
		return false;
	});
});
// ALSO WORKS WITH STRINGS
//returns true if any of the array items is an odd number; tested, works perfectly well
/*EACH TESTED*/
//___________PERCENTAGE____________

const percentDiff = (percDiff = (a, b) => nnan(a, b) && is(a, b) ? (a < b ? Flt(Positive((100 * (Num(a) - Num(b))) / b).toFixed(1)) : Flt(Positive((100 * (Num(b) - Num(a))) / a).toFixed(1))) + "%" : null);
const percentAddition = (a, b) => nnan(a, b) ? (a > b ? ((Number(a) + (Number(a) * Number(b)) / 100)) : Num(b) + (Num(b)*Num(a)/100)) : null;
const percentRemoval = (a, b) => nnan(a, b) && is(a, b) ? (a > b ? ((Num(a) - (Num(a) * Num(b)) / 100)) : Num(b) - (Num(b)*Num(a)/100)) : null;
//working test: percentOutOf(300, 600) returns 50%
//isWhatPercentOf(500, 50)
const percentOf = (num, amount) => nnan(num, amount) && is(num, amount) ? (Num(num) > Num(amount) ? ((Num(num) * Num(amount)) / 100) : (Num(amount) * Num(num)) / 100) : null;
//working test: percentOf(300, 25) returns 75
const isWhatPercentOf = (percentOutOf = (that_n, this_n) => nnan(that_n, this_n) ? ((Num(that_n) > Num(this_n) ? ((Num(this_n) / Num(that_n)) * 100) : (Num(that_n)===Num(this_n) ? 100 : ((Num(that_n) / Num(this_n)) * 100))).toFixed(1) + "%") : null);
//working test: isWhatPercentOf(50, 5) returns 10%




//SUM & STUFF:::each tested to be working
const sumOf = (...nums) =>
    nnan(...nums) && is(nums.length) ? Number(nums.reduce((a, b) => Number(a) + Number(b))) : null;
const leftOf = (...nums) =>
    nnan(...nums) ? Number(nums.reduce((a, b) => Number(a) - Number(b))) : null;
const productOf = (...nums) =>
    nnan(...nums) && is(nums.length) ? Number(nums.reduce((a, b) => Number(a) * Number(b))) : null;
const quotient = (...nums) =>
    nnan(...nums) && is(nums.length) ? Number(nums.reduce((n, divisor) => Number(n) / Number(divisor)).toFixed(1)) : null;
const pow = (n, power=1) => nnan(n, power) ? (n < power ? Number(n) ** Number(power) : Number(power) ** Number(n)) : null;
const sq = (...nums) => nnan(...nums) && is(...nums) && len(nums) ? nums.map(n => Num(n) * n) : null;
const sqrt = (...nums) => nnan(...nums) && len(nums) ? nums.map(n => Math.sqrt(Num(n))) : null;
const cbrt = (...nums) => nnan(...nums) && len(nums.length) ? nums.map(n => Num(n) ** 3) : null;
const findDivisor = (...stuff) => {
	let res = [];
	if (stuff.every(v => !isNaN(v))) {
		let i = 0;
		stuff.forEach(n => {
			n = parseInt(n);
			for (i; i<n; ++i) {
				if (n % i === 0 && n !== i && i !== 1) res.push(i);
			}
		});
		res = !!res.length ? res : null;
		if (res) res = res.length > 1 ? res : res[0];
		return res;
	}
	return null;
};
const isDivOf = (that_n, ...these_n) => {
	return is(that_n, these_n.length, ...these_n) && nnan(that_n, ...these_n) ? these_n.every(n => Num(that_n) % Num(n) === 0) : null;
};
const rup = (...stuff) => nnan(...stuff) && len(stuff) ? stuff.map(n => Math.round(Num(n))) : null;
const flr = (...stuff) => nnan(...stuff) && len(stuff) ? stuff.map(n => Math.floor(Num(n))) : null;
const reil = (...stuff) => nnan(...stuff) && len(stuff) ? stuff.map(n => Math.ceil(Num(n))): null;
const numDiff = (max, min) => nnan(max, min) ? (max > min ? Num(max) - Num(min) : Num(min) - Num(max)) : null;
/*
working tests:
- numDiff(7, 15) returns 8
- numDiff(15, 7) returns 8, as well
- numDiff(3, 30) returns 27
- numDiff(30, 3) returns 27
- numDiff(-30, 3) returns 33
- numDiff(30, -6) returns 36
*/
const calcArea = (w, h) => {
	if ([w, h].every(it => is(it) && nnan(it) && fin(it))) {
		[w, h] = [Flt(w), Flt(h)];
		return w*h;
	}
	return null;
};
const calcProfit = function(boughtFor, soldAt, msrp, cur) {
	if (exist(boughtFor, soldAt) && nnan(boughtFor, soldAt)) {
		let res;
		if ((__$.user && __$.brsr.state.online) && !cur) {
			cur = __$.user.currency.code;
		} else {
			cur = isStr(cur) && both(len(cur, ">=1"), len(cur, "<=5")) ? cur : "PKR";
			//the length can be 1 as well, to add currency-sign support: $¥€¢£
		}
		let pre = "Profit: ";
		boughtFor = Flt(boughtFor);
		soldAt = Flt(soldAt);
		res = (soldAt-boughtFor).toFixed(1);
		if (/^\-/.test(res)) pre="Loss: ";
		if (boughtFor===soldAt && !!res.match(/^0.0$/)) {
			res = null;
			console.log("None. You gained nothing, if anything, wasted (time?)... Try something market-y. Some things just ain't as sellable as they look. G'luck.");
		}
		else {
			res = `${pre}${cur} ${res}`;
		if (!!msrp && Flt(soldAt)>Flt(msrp) && boughtFor<soldAt) res += ` (tipped yourself a ${(Flt(soldAt)-Flt(msrp)).toFixed(1)}, i.e. a ${(((Flt(soldAt)-Flt(msrp))/(soldAt-boughtFor))*100).toFixed(0)}% tip, by going over the common market price of the item!)`;
		}
		return res
	}
	return null;
};
/*
Multiple tests passed, but one could just try:
	calcProfit(700, 900, 1000);
	calcProfit(300, 500, null, "£")
*/









//**************String & RegExp***************

//_$.CASES: Object{...$ctnt}
const setStrLength =
	    (shortenStr =
        minStr =
        trunc =
        (str, maxLength) =>
        isStr(str) && Str(str).length > Number(maxLength) ?
        `${str[0].toUpperCase()+str.slice(1, Number(maxLength))}...` :
        `${str.slice(0, str.length - (Math.ceil(str.length / 3)))}...`);
/*working test:
    console.log(shortenString("this is the new chapter of The Subtle Art of Not Giving a F*ck by Mark Manson", 50)) returns "This is the new chapter of The Subtle Art of Not G...";
*/
const trunMid = (shortenMid = (fullStr, frontChars = 17, backChars = 21, sep = "___") => `${fullStr.slice(0, frontChars)} ${sep} ${fullStr.slice(fullStr.length - backChars)}`);
//working test: truncateMid("This is some test string passed as a parameter to see the function in action, and it probably works") returns "this is some test ___ and it probably works"
const toSpoiler = (str = "x ".repeat(Math.floor(Math.random() * 30))) => isStr(str) && is(str) ? str.replace(new RegExp(/\B\w/, "g"), ".") : null;
const toMasked = (cc, reveal = 8, mask = "*") =>
    isStr(cc) && isNum(reveal) && isStr(mask) && !isEmp(cc, reveal, mask) ? `${cc}`.slice(0, reveal).padEnd(`${cc}`.length, mask) : null;
//toMasked("+92 301 296 5459") returns "+92 301 *******"
//Cases & Conversation
//working test: toTitle('this is the an example sentence') returns 'This Is An Example Sentence'
const snakeC = (toSnk = str =>
    str &&
    str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase()).join('_'));
const kebabC = (toKebab = str =>
    str &&
    str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase()).join('-'));
const capK = (toCapK = str =>
    str &&
    str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x[0].toUpperCase() + x.slice(1)).join("-"));
const capS = (toCapS = str =>
    str &&
    str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x[0].toUpperCase() + x.slice(1)).join("_"));
const camelC = (toCamel = (str) => {
    let y =
        str &&
        str
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
        .join("");
    let output = y[0].toLowerCase() + y.slice(1);
    return output;
});
const titleC = (str) =>
    typeof str === "string" ? str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((x) => x.slice(0, 1).toUpperCase() + x.slice(1)).join(" ") : null;
const toSentCase = (str) => {
	if (typeof str==="string") {
	    let z =
	        str &&
	        str
	        .match(
	            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
	        )
	        .join(" ");
	    let res = z[0].toUpperCase() + z.slice(1);
	    return res;
	}
    return null;
};
const upperize = (...strings) => {
	if (len(strings) && is(...strings) && isStr(...strings)) {
		let res = str.toUpperCase();
		return res.length>1 ? res : res[0]
	}
	return null;
};
const lowerize = (...strings) => {
	if (len(strings) && is(...strings) && isStr(...strings)) {
		let res = str.toLowerCase();
		return res.length>1 ? res : res[0]
	}
	return null;
};
const isUpper = (str) => typeof str ==="string" && is(str) ? (str === str.toUpperCase() && /^[A-Z\d\W]+$/.test(str)) : null;
//isUpper("is7856778hh-fuhvjj\/")
const isLower = (str) => typeof str==="string" && is(str) ? (str === str.toLowerCase() && /^[a-z\d\W]+$/.test(str)) : null;
const isTitleCased = (str) => is(str) && isStr(str) && len(str) ? /[A-Z][a-z]*(\s+[A-Z][a-z]*)+/g.test(str) : null;
const plize = word => is(word) && isStr(word) ? (!word.endsWith('s') ? `${word}s` : word) : null;
// console.log(plural("oranges")) does nothing as it already IS a plural
const singlize = word => is(word) && isStr(word) && len(word) ? (!!word.match(/s$/i) ? word.replace(/s$/, '') : word) : null;
// console.log(plural("oranges")) turns "oranges" into "orange"
// ^end of caseBlock


const incl = (str_arr, ...lookups) => {
	if (!!str_arr && (isStr(str_arr)||isArr(str_arr)||isObj(str_arr)) && !!len(lookups) && (strsIn(...lookups)||numsIn(...lookups)||boolsIn(...lookups)||arrsIn(...lookups)||regexIn(... lookups))) {
		let res = lookups.every(lookup => {
			if (isObj(str_arr)) {
				str_arr = Object.entries(str_arr);
				//don't just match keys, but values too, hence the use of Object.prototype.entries
			}
			//to handle both arrays and objects, and not just plain arrays (and strings)
			if (!isArr(lookup)) return !!String(str_arr).match(isStr(lookup) ? RegExp(lookup, "i") : lookup);
			//cases to handle both regexes, and strings
			else return lookup.every(v => str_arr.includes(v));
			//handles cases like: incl("string with some numeric v2lu3s", [2, 3])
		});
		return res;
	}
	return null;
};
const startsWith = (str, lookup) => {
	if (!!str.length && !!String(lookup).length) {
		if (isStr(str)) {
			return !!str.match(RegExp(`^${lookup}`, "i"));
		} else if (isArr(str)) {
			return str[0]===lookup;
		}
	}
	return null;
};
const endsWith = (str, lookup) => {
	if (!!is(str) && !!len(String(lookup))) {
		if (isStr(str)) {
			return !!str.match(RegExp(`${lookup}$`, "i"));
		} else if (isArr(str)) {
			return str[str.length-1]===lookup;
		}
	}
	return null;
};
// ALSO WORKS WITH ARRAYS^
const strPushStart = (str, str_to_push) => is(str, str_to_push) && isStr(str) ? str.replace(/^/, `${str_to_push} `) : null;
//working test: str=strPushStart("3.172ms", "Returned:") returns "Returned: 3.172ms": String
const trim = (str, start = 0, end=Infinity) => [start, end].every(v => nnan(v)) && ["array", "string"].includes(type(str)) && !!str.length && !/^\s|\s$/.test(String(str)) ? str.slice(start, end) : (isStr(str) && !!str.length && (/^\s/.test(String(str)) || /\s$/.test(String(str))) ? str.replace(/^\s+|\s+$/g, "") || str.trim() : null);
const trimStart = (str, breakpoint_index=1) => (isStr(str)||isArr(str)) && nnan(breakpoint_index) ? str.slice(breakpoint_index, str.length) : null;
//tested, works
const trimEnd = (str, breakpoint=1) => (isStr(str)||isArr(str)) && nnan(breakpoint) && !!len(str) ? (breakpoint>0 ? str.slice(0, str.length-breakpoint) : str.slice(0, str.length+breakpoint)) : null;
//tested, works: trimEnd("that's wholesome", ?-??4) returns "that's whole" <note: ?-?? means the minus sign has been made optional by the developer>
const otherVars = str => {
	if (isStr(str) && !!len(str)) {
	  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
	  return str.split("").reduce((acc, letter, i) =>acc.concat(otherVars(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),[]);
	}
	else if (isArr(str) && !!len(str)) {
		let arr = str;
		if (arr.length <= 2) return (arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr);
		  return arr.reduce((acc, item, i) =>acc.concat(otherVars([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item,...val])),[]);
	}
	return null;
};
const reverse = (str) => typeof str==="string" && !!str.length ? str.split("").reverse().join("") : (Array.isArray(str) ? str.reverse() : null);
const shuffle = (str) => {
	if (typeof str==="string" && !!String(str).trim().length) {
		str = str.split(/\W/g).reverse();
		//split through every non-word character, shuffle the order of words, and return a new bunch. DOWNSIDE: Poweful, yet, however, it can be seen it replaces every non-word char with a whitespace
		for(let i = str.length - 1; i > 0; i--){
		    let j = Math.floor(Math.random() * i);
		    let temp = str[i];
		    str[i] = str[j];
		    str[j] = temp;
		}
		return str.join(" ").trim().replace(/\s{2}/, " ");
	}
	else if (Array.isArray(str)) {
		for(let i = str.length - 1; i > 0; i--){
		    let j = Math.floor(Math.random() * i);
		    let temp = str[i];
		    str[i] = str[j];
		    str[j] = temp;
		}
		return str;
	}
	//if neither an array, nor a string, quit the shuffling
	return null;
}
//tested, works
const sort = (sortAsc = (str) => typeof str==="string" && !!str.length ? str.split("").sort((a, b) => String(a).toLowerCase().localeCompare(String(b).toLowerCase())).join("") : (Array.isArray(str) && Object.values(str).length ? str.sort((a, b) => String(a).toLowerCase().localeCompare(String(b).toLowerCase())) : null));
const sortDesc = (str) => typeof str==="string" && !!str.length ? str.split("").sort((a, b) => String(b).toLowerCase().localeCompare(String(a).toLowerCase())).join("") : (Array.isArray(str) && Object.values(str).length ? str.sort((a, b) => String(b).toLowerCase().localeCompare(String(a).toLowerCase())) : null);
//sort([1, 33, 5, 7, 8, 97, 5]) returns [1, 5, 5, 7, 8, 33, 97] <note: doesn't sort nested objects, however>
//sortDesc([1, 33, 5, 7, 8, 97, 5]) returns [97, 33, 8, 7, 5, 5, 1] <note: doesn't work with nested objects>
const nthWord = (nthStr = (str, n=1) => typeof str==="string" && !!Str(str).length && typeof n==="number" ? (str.match(/[a-zA-Z']+(?=\s)*/g)?.[n-1] || null) : null);
/*
works wonders, test:
	passing in 4:Number as @param1, and "hi there, love... Where you been?! I've been trying to make amends with you for days,":String as @param2, the value we in turn receive: "Where" : String
*/
const firstWord = (str, n=1) => typeof str==="string" && !!str.length && typeof n==="number" ? (str.match(/[a-zA-Z']+(?=\s)*/g)?.[n-1] || null) : null;
//working: firstWord("lorem Ipsum dolor sit azbet kamet") returns "lorem": String
const secondWord = (str) => typeof str==="string" && !!str.length ? (str.match(/[a-zA-Z']+(?=\s)*/g)?.[2-1] || null) : null;
//working: firstWord("lorem Ipsum dolor sit azbet kamet") returns "Ipsum": String
const secondLastWord = (str) => {
	let matches = typeof str==="string" ? String(str).match(/[a-zA-Z']+(?=\s)*/g) : null;
	return matches ? matches[matches.length-2] : null;
};
//working: firstWord("lorem Ipsum dolor sit azbet kamet") returns "azbet": String
const lastWord = (str, n=1) => {
	if (typeof str==="string" && !!str.length && typeof n==="number") {
		let matches = String(str).match(/[a-zA-Z']+(?=\s)*/g);
		return matches ? matches[matches.length-n] : null;
	}
	return null
};
//working: firstWord("lorem Ipsum dolor sit azbet kamet") returns "kamet": String
const replaceNthWord = (str, replacement, n=1) => typeof str==="string" && typeof replacement==="string" && !!str.length && typeof n==="number" ? (str.replace(str.match(/[a-zA-Z']+(?=\s)*/g)?.[n-1] || '', replacement || '').trim()) : null;
/*
tests passed:
	replaceNthWord("hi there, this is a test", "love", 3) replaces the term "this" with "hi" at index n3-1, i.e. 2, and returns "hi there, love is a test"
	replaceNthWord("hi there, this is a test", "what you doing") returns "what you doing there, this is a test" replacing the term "hi" with a new one at index n1-1, i.e. 0
	replaceNthWord("Hey buddy, how's it goin'?", "yo", 2) returns "Hey yo, how's it goin'?", replacing the second term in the string with "yo", seems to be working with other replace positions as well: String
*/
const replaceFirstWord = (str, replacement, n=1) => str.replace(str.match(/[a-zA-Z']+(?=\s)*/g)?.[n-1] || '', replacement || '').trim();
//working test: replaceFirstWord("hello love", "hi") returns "hi love": String
const replaceSecondWord = (str, replacement, n=2) => str.replace(str.match(/[a-zA-Z']+(?=\s)*/g)?.[n-1] || '', replacement || '').trim();
const replaceSecondLastWord = (str, replacement, n=2) => {
	let matches = str.match(/[a-zA-Z']+(?=\s)*/g),
	length = matches.length;
	return str.replace(matches?.[length-n] || '', replacement || '').trim();
};
const replaceLastWord = (str, replacement, n=1) => {
	let matches = str.match(/[a-zA-Z']+(?=\s)*/g),
	length = matches.length;
	return str.replace(matches?.[length-n] || '', replacement || '').trim();
};
const replaceNthEnding = (str, replacement, n=1) => {
	if (isStr(str, replacement) && nnan(n) && n!==0) {
		let matches = str.match(/[a-zA-Z']+(?=\s)*/g),
			length = matches.length;
		n = n>0 ? n : -n;
		return length ? str.replace(matches?.[length-n] || '', replacement || '').trim() : null;
	}
	return null
};
/*
tested, works:
	replaceNthEnding("hi there, this is a test", "jest") returns "hi there, this is a jest": String, while replaceNthEnding("hi there, this is a test", "just a", ?-??2) returns "hi there, this is just a test": String <note: here, ?>>val>>?? stands for OPTIONAL, in this case, what this is declaring is that the minus sign has been made optional by the developer, so don't worry about it>
*/
//::: string-ular pop section ::://
const removeNthWord = (str, n=1) => typeof str==="string" && !!str.length && typeof n==="number" && n>0 ? (str.replace(str.match(/\s*[a-zA-Z']+|[a-zA-Z']+\s*/g)?.[n-1] || '', '').trim()) : null;
const removeFirstWord = (str, n=1) => typeof str==="string" && !!str.length && typeof n==="number" && n>0 ? str.replace(str.match(/\s*[a-zA-Z']+|[a-zA-Z']+\s*/g)?.[n-1] || '', '').trim() : null;
const removeSecondWord = (str) => typeof str==="string" && !!str.length ? str.replace(str.match(/\s*[a-zA-Z']+|[a-zA-Z']+\s*/g)?.[2-1] || '', '').trim() : null;
const removeSecondLastWord = (str) => {
	if (typeof str==="string" && !!str.length) {
		let matches = str.match(/\s*[a-zA-Z']+|[a-zA-Z']+\s*/g);
		return !!matches ? str.replace(matches?.[matches.length-2] || '', '').trim() : null;
	}
	return null;
};
const removeLastWord = (str, n=1) => {
	if (typeof str==="string" && !!str.length && typeof n==="number" && n!==0) {
		let matches = str.match(/\s*[a-zA-Z']+|[a-zA-Z']+\s*/g);
		n=n>0?n:-n;
		return !!matches ? str.replace(matches?.[matches.length-n] || '', '').trim() : null;
	}
	return null;
};
const removeNthLastWord = (str, n=1) => {
	if (typeof str==="string" && !!str.length && typeof n==="number" && n!==0) {
		let matches = str.match(/\s*[a-zA-Z']+|[a-zA-Z']+\s*/g);
		n=n>0?n:-n;
		return !!matches ? str.replace(matches?.[matches.length-n] || '', '').trim() : null;
	}
	return null;
};
//::: slice, & split section ::://
const splitIntoPieces = (str) => {
	if (typeof str==="string" && !!String(str).trim().length) {
		let arr = [],
		n = 0;
		while (arr.length < str.length+1) {
			arr = arr.concat(str.slice(0, n++))
		}
		arr = arr.slice(1);
		return arr
	}
	return null;
};
//working test: console.log(stringPieces("string split into a thousand pieces")) returns what it says, i.e: ["s", "st", "str", "stri", "strin", "string", "string ", "string s", "string sp", "string spl", "string spli", "string split"]...: Array<iterable>
const splitIntoWords = (str, locale="en-US") =>
  [str, locale].every(v => typeof v==="string" && String(v).trim().length>2) ? [...new Intl.Segmenter(locale, { granularity: 'word' }).segment(str)].reduce(
    (acc, { segment, isWordLike }) => {
      if (isWordLike) acc.push(segment);
      return acc;
    },
    []
  ) : null;
const getEveryCapitalWord = (str) => {
	let tests = typeof str==="string" && !!str.match(/[A-Z][a-z]+/g);
	return tests ? str.match(/[A-Z][a-z]+/g) : null;
};
//tested well
const getEveryCapitalLetter = (str) => {
	let tests = typeof str==="string" && !!String(str).match(/[A-Z](?=[a-z])+/g);
	return tests ? str.match(/[A-Z](?=[a-z])+/g) : null;
};
const longestWord = (...params) => {if (params.length && params.every(param => (typeof param==="string" || Array.isArray(param)) && String(param).trim().length)) {let res = params.map(param => {param = String(param);let longest = "";if (!param.match(/[a-zA-Z]{2,}/)) throw new Error("Invalid parameters");let words = param.match(/[a-zA-Z'-]+/g);longest = words[0];for (word of words) longest = word.length>longest.length ? word : longest;return longest;});return res.length > 1 ? res : res[0];}return null};
const shortestWord = (...params) => {if (params.length && params.every(param => (typeof param==="string" || Array.isArray(param)) && String(param).trim().length)) {let res = params.map(param => {param = String(param);let shortest = "";if (!param.match(/[a-zA-Z]{2,}/)) throw new Error("Invalid parameters");let words = param.match(/[a-zA-Z'-]+/g);shortest = words[0];for (word of words) shortest = word.length<shortest.length ? word : shortest;return shortest;});return res.length > 1 ? res : res[0];}return null};
//tested well
const intsect = (compare = (src, ...arrays) => {let matches = [];if (Array.isArray(src) && arrays.every(it => Array.isArray(it)) && !!src.length && !!arrays.length) {for (i in arrays) {for (j in arrays[i]) {src.forEach(v => {if (v == arrays[i][j]) matches.push(v);});}}return !!matches.length ? matches : null;} else if (typeof src==="string" && !!src.length && !!arrays.length) {let splitintow = v => [...new Intl.Segmenter("en-US", { granularity: 'word' }).segment(v)].reduce((acc, { segment, isWordLike }) => {if (isWordLike) acc.push(segment);return acc},[]);if (src.length) src=splitintow(src);for (i in arrays) {arrays[i] = splitintow(arrays[i]);if (Array.isArray(src)) {for (j in arrays[i]) {src.forEach(v => {if (v === arrays[i][j]) matches.push(v)});}}}return !!matches.length?matches:null;}return null});
const splitUntil = (el, lookup, onLeft=true) => {if (is(el, lookup) && isStr(el) && len(el, ">3") && isBool(onLeft)) {let target=el.indexOf(lookup);let notFound=target<0;return notFound?[el]:(onLeft?[el.slice(0,target),el.slice(target)]:[el.slice(0,target),el.slice(target)])}else{return null}};
const splitOnLast = (el, lookup, onLeft=true) => {if (is(el, lookup) && isStr(el) && len(el, ">3") && isBool(onLeft)) {let target=el.lastIndexOf(lookup);let notFound=target<0;return notFound?[el]:(onLeft?[el.slice(0,target),el.slice(target)]:[el.slice(0,target),el.slice(target)])}else{return null}};
const sliceUntil = (el, match) => {if (is(el, match) && (isStr(el) || isArr(el))) {let index = el.indexOf(match);let ifMatch = index>0;return el.slice(ifMatch?index:0, el.length)}else{return null}}
const sliceToLast = (el, match) => {if (is(el, match) && (isStr(el) || isArr(el))) {let index = el.lastIndexOf(match);let ifMatch = index>0;return el.slice(ifMatch?index:0, el.length)}else{return null}}
const split = (str, sep="") => isStr(str, sep) && !!str.length ? str.split(sep) : null;
//works, though barely as useful
const strInsertStart = (str, val, pos=1) => str.replace(str.match(/\s+(?=\w)*/)?.[pos-1], `${val ? ` ${val} ` : " "}`).trim();
/*
working test:
	strInsertStart("hi love", "there,") returns "hi there, love"
*/









//Section II
const hasFlags = /(?<=..\/)[gmi]{1,3}$/g;
const iFlag = /(?<=\/)[gm]*[i]\w*$/;
const gFlag = /(?<=\/)[im]*[g]\w*$/;
let regTest, strTest, strHas;
const RegTest = (strHas = strTest = regTest = tst = (regexp, str, insensitive=false, g=true) => isStrLike(regexp, str) ? new RegExp(regexp, `gm${insensitive || iFlag.test(String(regexp)) ? "i" : ""}`).test(str) : null);
//working test, passing an string as a regexp(not favored, but works): console.log(strHas("hi", "hi there")) returns true: Boolean else returns true
//working test, passing a regexp(preferred): console.log(regTest(/[0-9(.)]+/gim, "6.7")) returns true: Boolean if condition met, which it does, else returns false
const replace = (regexp_or_string, to_replacewith, at_string, insensitive=false) => {
	if (isStrLike(regexp_or_string, to_replacewith, at_string)) {
		regexp_or_string = new RegExp(regexp_or_string, `${gFlag.test(String(regexp_or_string)) ? "g" : ""}m${insensitive || iFlag.test(String(regexp_or_string)) ? "i" : ""}`);
		at_string = at_string.replace(regexp_or_string, to_replacewith);
		return at_string;
	}
	return null;
};
/*
test done, works: 
	I:
    let str = "0 6 4": String
    str = replace(/[0-9]+/gmi, "x", str);
    console.log(str) //output: "x x x": String
    
    II:
    replace(/hi there, yo!/, "", "hi there, yo! Hi there.") returns " Hi there." replacing out ONLY the first match of "hi there" with "(^$)" since no *g*(lobal) and *i*(nsensitive) flags were used. For that, using function replaceAll might help.
    
    III:
    replace("hi", "hello", "hi there, this is a test") replaces the "hi" with "hello" and returns the rest as as/is
    
    IV (replacing each conditionally; if x,return y, if y, return z):
    replace(/hi|hello/g, (match) => ({"hi": "replaced", "hello": "replaced2"}[match] || match), "hi hello") returns "replaced replaced2"
*/
const replaceAll = (regexp_or_string, to_replacewith, at_string, insensitive=false) => is(regexp_or_string, to_replacewith, at_string, insensitive) && isStrLike(regexp_or_string, to_replacewith, at_string) && isBool(insensitive) ? at_string.replace(new RegExp(regexp_or_string, `gm${insensitive || iFlag.test(String(regexp_or_string)) ? "i" : ""}`), to_replacewith) : null;
//test: replaceAll(/[a-z]/, "x", "hey lover, hey love, hey, hey, ho, hey hey lovers") returns "xxx xxxxx, xxx xxxx, xxx, xxx, xx, xxx xxx xxxxxx", replacing each lowercase character, or in this case, the entire string, with an "x" <note: you can drop the optional g flag, it's been made optional by the developer, #tested. PLUS, the "i" flag has been found to be effective as well. Bright side, the regexp in a string scenario --- eg. "[a-zA-Z]", "this|that" --- seems to be working as well>
const strMatch = (regexp_or_string, str, i=false) => is(regexp_or_string, str, i) && isStr(regexp_or_string, str) && isBool(i) ? (Str(str).match(new RegExp(regexp_or_string, `gm${i || iFlag.test(String(regexp_or_string)) ? "i" : ""}`)) ?? null): null;
/*
working tests
    test I:
	console.log(strMatch(/hi/, "hi there, it's not me, it's lorem ipsum")) returns an iterable of every match of "hi', in this case, ["hi", "hi"]: Array; else, return "no matches!": String
	
	test II:
	strMatch("hi|hola", "hi hey, hola, hi") AND strMatch(/hi|hola/i, "hi hey, hola, Hi"), both return ["hi", "hola", "hi"]: Array
	
	test III (insensitive match):
	strMatch(/hi|hola/, "hi hey, hola, Hi", true) returns both ["hi", "Hi"]
*/
const noOfMatches = (countSubstr = noOfSubstr = (regexp, str, insensitive=true) => {
	if (!isStrLike(regexp, str)) return null;
    regexp = new RegExp(regexp, `gm${insensitive || iFlag.test(String(regexp)) ? "i" : ""}`);
    let matches = str.match(regexp);
    let output = matches?.length ?? 0;
    return output;
});
/*
tested,
	works with both sensitive matches <default behavior>:
	noOfMatches(/hi/, "Hi hey, hola, hi") returns 2: Number, while...
	noOfMatches(/hey girl/, "Hi hey, hola, hi") returns 0: Number
	.............
	and, insensitive matches <say hi to the third parameter: @Boolean>:
	noOfMatches(/hi/, "Hi hey, hola, hi", true) returns 1: Number
*/
const replaceLastMatch = (str, query_to_replace, replacement, i=true) => {
    let match =
        typeof query_to_replace === 'string'
          ? query_to_replace
          : (str.match(new RegExp(query_to_replace.source, `gm${i || iFlag.test(String(query_to_replace)) ? "i" : ""}`)) || []).slice(-1)[0];
    if (!match) return str;
    let last = str.lastIndexOf(match);
    return last !== -1
      ? `${str.slice(0, last)}${replacement}${str.slice(last + match.length)}`
      : str;
};
/*
working test:
    I. replaceLastMatch("Hey girl, what up? Hey, wait,... I love you! 💕", /hey/i, "Baby") returns "Hey girl, what up? Hey, wait,... I love you! 💕": String
	II. replaceLastMatch("hi hey yo, what up, hey", "hey", "baby") returns "hi hey yo, what up, baby"
*/
const strRemove = (query, str, i) => isStr(str) && isStrLike(query) && i===true ? str.replace(new RegExp(` ?${query}`, `${gFlag.test(String(query)) ? "g" : ""}m${i || iFlag.test(String(query)) ? "i" : ""}`)).trim() : null;
//obviously works
const strRemoveAll = (query, str, i=true) => isStr(str) && isStrLike(query) && i===true ? str.replace(new RegExp(query, `gm${i || iFlag.test(String(query)) ? "i" : ""}`), "").trim() : null;
//obviously works











//Arrays
const removeDuplicates = (noDuplicates = (str) => {
    let res;
    if (typeof str==="string" && !!str.length && !!String(str).match(/[a-zA-Z']+/i)) {
    	res = Array.from(new Set(str.split(/\W+/g))).join(" ").trim();
        return res;
    } else if (Array.isArray(str) && (!!Object.values(str) && !!Object.values(str)[0])) {
        res = Array.from(new Set(str));
        return res;
    }
    return null;
});
/*
working test
    let arr = [2, 3, 5, 6, 3, 3];
    arr = noDuplicates(arr);
    console.log(arr) returns [2, 3, 5, 6]: Array
*/
const flat = (arr) => Array.isArray(arr) ? (arr.flat ? arr.flat(Infinity) : [].concat.apply([], arr)) : null;
//tested, works
const toggleItem = (arr, val) => Array.isArray(arr) ? (arr.includes(val) ? arr.filter(item => item !== val) : (arr.indexOf(val) !== -1 ? [...arr.slice(0, arr.indexOf(val)), val, ...arr.slice(arr.indexOf(val))] : [...arr, val])) : null;
/*
working test:
	let arr = [2, 3, 5];
	arr = toggleItem(arr, 5);
	//removes it
	arr = toggleItem(arr, 55);
	//puts back another <tested>
	console.log(arr) returns [2, 3, 55]: Array
*/
const replaceItem = (arr, val, newVal) =>
  isArr(arr) && [...arr].includes(val) ? ([...arr.slice(0, arr.indexOf(val)), newVal, ...arr.slice(arr.indexOf(val))]).filter(item => item !== val) : null;
/*
working test:
	let arr = [2, 3, 5];
	arr = replaceItem(arr, 2, 22);
	console.log(arr) returns [22, 3, 5]: Array
*/
const groupSimilar = (arr) => isArr(arr) ? [
  ...arr
    .reduce((acc, val, i, arr) => {
      let current = (x=>x)(val, i, arr);
      if (acc.has(current)) acc.get(current).push(val);
      else acc.set(current, [val]);
      return acc;
    }, new Map())
    .values(),
] : null;
/*
tested, works:
    let x = groupSimilar([1, 3, 5, 7, 7, 9, 11, 11, 13, 15]);
    console.log(x);
        returns [
        [ 1 ],  [ 3 ],
        [ 5 ],  [ 7, 7 ],
        [ 9 ],  [ 11, 11 ],
        [ 13 ], [ 15 ]
        ]
*/
const eachStartsWith = (arr, lookup) => Array.isArray(arr) && typeof lookup==="string" && !!lookup.length ? arr.every(item => item.match(new RegExp(`^${lookup}`, "i"))) : null;
//console.log(eachEndsWith(["hey", "lay", "may"], "y")) //tested: "yy" as @param2 returns false, single "y" returns true: Boolean
const eachEndsWith = (arr, lookup) => Array.isArray(arr) && typeof lookup==="string" && !!lookup.length ? arr.every(item => item.match(new RegExp(`${lookup}$`, "i"))) : null;
//console.log(eachStartsWith(["heyo", "hello", "hallo"], "h")) //returns true, while "hh" as @param2 returns false: Boolean
const insertToArr =
        (addToArr =
        pushtoArr =
        push =
        (arr, ...items) => Array.isArray(arr) ? [...arr, ...items] : null);
/*working test: 
    let arr = [1,3,5];
    arr = push(arr, 7, 2, 3, "string", true);
    console.log(arr); //output: [1,3,5,7,2,3,"string",true]
*/
const arrPushStart = (arr, ...items) => Array.isArray(arr) ? [...items, ...arr] : null;
/*
working test:
	 arrPushStart(["either hi,", "hallo, or,", "bonjour"], "First, Happy Wednesday, then...") returns ["First, Happy Wednesday, then...", "either hi, ", "hallo, or ", "bonjour"]
*/
const pushAt = (arr, index, new_item) => Array.isArray(arr) && nnan(index) ? [...arr.slice(0, index), new_item,...arr.slice(index)] : null;
/*
Working test: 
    let arr = [1, 3, 7];
    arr = pushAt(arr, 1, 2);
    console.log(arr); //output: [1, 2, 3, 7]: Array
*/
///:::removal/pop section:::
const removeFromArray = (removeFromArr = pop = (arr, ...items_to_pop) =>
    !!items_to_pop.length && Array.isArray(arr) ? arr.filter(item => !items_to_pop.includes(item)) : (typeof arr==="string" ? arr.slice(0, -1) : null));
/*
working test I:
    let arr = [1, 3, 5, 7, 9];
    arr = pop(arr, 5, 9);
    console.log(arr); //output: [1, 3, 7]
working test II (passing no @param2 results in removal of the last item only, here's how):
	let arr = [5, 7, 9];
	arr = pop(arr);
	console.log(arr) //output: [5, 7]
*/
const popFirst = (arr, n=1) => (typeof n==="number" && (typeof arr==="string" || Array.isArray(arr))) ? arr.slice(n) : null;
//tested, works
const popLast = (arr, n=1) => (typeof n==="number" && (typeof arr==="string" || Array.isArray(arr))) ? arr.slice(0, n > 0 ? -n : n) : null;
//tested, works as intended
const popNth = (removeNth = (arr, n) =>
  Array.isArray(arr) && typeof n==="number" ?  [...arr.slice(0, n-1), ...arr.slice(n)] : null);
//working test: popNth([1, 3, 5, 7, 9, 11, 13, 15], 3); passes the test, returning [1, 3, 7,...\~the test stays the same\~]
const popSecondLast = (removeSecondLast = (arr) =>
  Array.isArray(arr) ? [...arr.slice(0, arr.length-2), ...arr.slice(arr.length-1)] : null);
//tested, works as expected, try: popSecondLast(["this", "this,...", "and that"]), removes the secondlast item resulting in ["this", "and that"] alone (without the second last part) : Array
const popEveryNth = (removeEveryNth = (arr, n) =>
  Array.isArray(arr) && typeof n==="number" ? arr.filter((e, i) => !(i % n === n - 1)) : null);
//working test: popEveryNth([1, 3, 5, 7, 9, 11, 13], 3) passes the test, returning [1, 3, 7, 9, 13]
//:::getting nth item(s):::
const getEveryEven = (popAllOdds = (arr, n=2) =>
  arr.filter((e, i) => i % n === n - 1));
//tested, works: popAllOdds([1, 2, 3, 4, 5]) rerurns [2, 4]
const getEveryOdd = (popAllEvens = (arr, n=2) =>
  arr.filter((e, i) => i % n !== n - 1));
//tested, works: popAllEvens([1, 2, 3, 4, 5]) returns [1, 3, 5]: Array
const getSecondLast = (secondLast = arr_or_str => arr_or_str[arr_or_str.length - 2]);
//tested, works
const getLast = (getLastItem = arr_or_str => arr_or_str[arr_or_str.length - 1]);
//tested, works
const nthItem = (getNth = nth = (arr, n) => isArr(arr) && nnan(n) && is(arr) ? arr[n<0 ? arr.length + n : n-1] : (nnan(arr) ? th(arr) : null));
/*
tested, works in every angle.
working tests:
	let arr = [1, 3, 5, 7, 9]
	con...log(nth(arr, 2)) returns 3
	con...log(nthItem(arr, 3)) returns 5
	con...log(nthItem(arr, -2)) returns 7
	con...log(nthItem(arr, -1)) returns 9
*/
const everyNth = (arr, n=1) => {
	let res = [];
	if (Array.isArray(arr) && typeof n==="number" && n>0 && isFinite(n)) {
		for (let i=n-1; i<arr.length; i+=n) {
			res.push(arr[i]);
		}
		return !!res && !!res.length ? res : null;
	} else if (typeof arr==="string" && typeof n==="number" && n>0 && isFinite(n)) {
		for (let i=n-1; i<arr.length; i+=n) {
			!!arr.match(/[a-zA-Z']+(?=\s)*/g) ? res.push([...new Intl.Segmenter("en-US", { granularity: 'word' }).segment(arr)].reduce((acc, { segment, isWordLike }) => {if (isWordLike) acc.push(segment);return acc;},[])[i]) : null;
			res = res.filter(v => !!v);
		}
		return !!res && !!res.length ? res : null;
	}
	return null;
};
//works with both Arrays... amd Strings
///::: replacement section :::
const arrReplaceNth = (arrReplaceStart = arrReplaceFirst = (arr, n=1, replacement) => {
	if (isArr(arr) && isArr(arr) && nnan(n) && n!==0) {
		arr[n>0?n-1:arr.length+n] = replacement;
		return arr;
	}
	return null;
});
/*
working test:
	arrReplaceNth([3, 5, 7], 2, 11) returns [3, 11, 7] replacing the second item with 11
*/
const replaceSecondLast = (arr, newVal) => {
	let res = arr;
	if (isArr(arr)) {
		res[res.length - 2] = newVal;
		return res;
	} else if (isStr(arr)) {
		res = res.trim();
		res = res.slice(0, res.length-2) + newVal + res.slice(res.length-1);
		return res;
	}
	return null;
};
/*working tests:
	I. replaceSecondLast([1, 2, 0, 4], 3) returns [1, 2, 3, 4]: Array
	II. replaceSecondLast([3, 5, 7], 0) returns [3, 0, 7]: Array
	III. let str = "the baby"; str = replaceSecondLast(str, ""); console.log(str) returns "the bay": String
*/
const replaceLast = (arr, replacement, n=1) => {
	if (nnan(n)) {
		n = !!Int(n) ? Int(n) : null;
		if (n) n = n>0 ? n : -n;
		if ((isArr(arr) || isStr(arr)) && !!n) {
			if (isArr(arr)) {
				arr[arr.length - n] = replacement;
			}
			else {
				arr = trim(arr);
				let m = !!arr.match(/./g) ? arr.match(/./g) : null;
				if (m) arr = arr.replace(m[m.length-n], replacement);
			}
			return arr;
		}
	}
	return null;
};
/*working tests:
	I. replaceLast([1, 2, 3, 0], 4) returns [1, 2, 3, 4]: Array
	II. replaceLast([3, 5, 7], 0) returns [3, 5, 0]: Array
	III. let str = "Number 2"; str = replaceLast(str, 4); console.log(str)
*/
const removeFalsies = (removeFalses = arr => Array.isArray(arr) ? arr.filter(Boolean) : (isObj(arr) ? Object.fromEntries(Object.entries(arr).filter(([key, value]) => Boolean(value))) : null));
//working test console.log(removeFalses([true, false, undefined, null, 0])) returns [true] filtering out the falsy junk
const mergeArr = (...arrays) => len(arrays) && isArr(...arrays) ? Array.from(new Set([].concat(...arrays))) : null;
/*working test: 
    let arr = [1, 3, 5];
    arr = mergeArr(arr, [7, 9]);
    console.log(arr); //output: [1, 3, 5, 7, 9]
*/
const arrEquals = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
/*
tests:
    arrEquals([1, "2"], [1, 2]); // false
    arrEquals([1, 2], [1, 2]); // true
*/
const join = (arr, _with=" ") => Array.isArray(arr) && typeof _with==="string" ? arr.join(_with).trim() : null;
//tested "positive'
let arrFind, arrSearch;
const arrHas = (arrFind = arrSearch = (arr, value) =>
    isArr(arr) ? arr.reduce((a, v) => ((v === value ? a + 1 : a)) > 0, 0) : null); //returns a boolean
/*
test1:
    let arr = [1,3,5];
    console.log(arrHas(arr, 5)) //returns true
test2:
    let arr = [1,3,5,"text"];
    console.log(arrHas(arr, "text")); //returns true
*/
const countOcc = (noOfOcc = countEntr = countFreq = itemFreq = (arr, value) =>
    isArr(arr) ? arr.reduce((a, v) => (v === value ? a + 1 : a), 0) : null); //returns a number of occurrences of the lookup, 0 if none
/*
test:
    let arr = [1, 3, 5, "text", 0, false, "text"];
    console.log(countEntr(arr, "text")) //expected output: 2
*/
const checkFreq = (freqOfEach = arrFreq = arr =>
    isArr(arr) ? log(arr.reduce((a, v) => {
        a[v] = (a[v] ?? 0) + 1;
        return a; //returns an object containing the number of frequency per each item in an array: Object
    }, {})) : null);
//tested, works. CAUTION: THIS IS A CONSOLE-ONLY FUNCTION, which means you cannot use its value anywhere outside the console, it's just a log to make you informed of all the items in an array, to see which one's more frequent and vise versa
const findFrequent = arr => {
    if (isArr(arr) && isItrl(arr)) {
		let x = Object.entries(
		    arr.reduce((a, v) => {
		        a[v] = (a[v] ?? 0) + 1;
		        return a;
		    }, {})
		);
		x = x.reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0]);
		let res = x[1] > 1 ? x[0] : none;
		return res;
	}
	return null;
};
//tested, works
const compareArr = (a, b) => a.filter(value => b.includes(value)); //returns an array of matches between two arrays
/*
test:
	let [arr1, arr2] = [[1, 3, 5], [5, 7, 1]];
	console.log("Matches: ", compareArr(arr1, arr2)) //output: Matches: [1, 5]
*/
const groupBy = (arr, fn) =>
  isArr(arr) && (isFunc(fn) || isStr(fn)) ? (Object.entries(arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {})).map(([item, key]) => `${item}: ${key.join(", ")}`)) : null;
/*
working tests:
	I.
	console.log(groupBy([19.7, 4.317, 0.03, 77, 92.3, 139.67], num => num>40 ? "over 40" : "under 40"))
	    returns two array items, one containing all the numbers over 40, and the other, under: ["under 40: 19.7, 4.317, 0.03", "over 40: 77, 92.3, 139.67"] : Array
    II.
	console.log(groupBy(['one', 'two', 'three', 'four', 'five', 'six'], "length"))
		returns a grouped array that looks something like: ["3: one, two, six", "4: four, five", "5: three"]: Array
    III.
    console.log(groupBy([19.7, 4.317, 0.03], Math.floor))
	    returns ["0: 0.03", "4: 4.317", "19: 19.7"]: Array
*/
const arrMatchesArr = (arr, arr2) => isArr(arr, arr2) && isItrl(arr, arr2) ? arr.filter(v => arr2.includes(v)).length > 1 : null;
const arrTakeWhile = (arr, fn = n => n>0) => {
    let index = arr.findLastIndex(n => !fn(n));
    return index === -1 ? arr : arr.slice(index+1);
};
//working test: arrTakeWhile([3, 5, 7, 9], n => n>5) takes every number from the array that is greater than 5 and returns it, example: [7, 9]: Array
const seprtNumsFromArr = (arr) => arr.filter(item => /^(\+|\-)?[0-9(.)]+$/.test(String(item)) && !isNaN(item) && toString(item) === "number");
//recent test: seprtNumsFromArr(["text", false, 5, 7, false, undefined, null]) returns [5, 7]
const seprtNumsFromText = (str) => (str.match(/(\+|\-)?[0-9(.)]+/g)?.map(n => Number(n)) ?? []).filter(v => !isNaN(v));
//✔️ working, test results: seprtNumsFromText("hi love... This is a string to help fulfill the test 4 for the method? 2urns 0ut 1t w0rk$!") returned [4, 2, 0, 1, 0]: Array









//objects
const keyInObj = (obj, str) => isObj(obj) && isStr(str) ? String(str) in obj && !!obj[String(str)] : null;
//works fine
const objEquals = (a, b) => isObj(a) && isObj(b) ? JSON.stringify(a) === JSON.stringify(b) : null;
const objArrSort = (objArrSortBy = objSortBy = (arr, key) =>
    isArr(arr) ? arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)) : null);
/*
working test (***only works with nested objects/object_arrays***):
    let lessons = [
      { position: 1, name: "Chapter-1" },
      { position: 0, name: "Prolog" },
    ];
    console.log(arrSort(lessons, "position")); //output: [{position: 0, name: "Prolog"}, {position: 1, name: "Chapter-1"}]
*/
const hasProp = (obj, prop) => id(obj, prop) && isObj(obj) ? obj.hasOwnProperty(prop) : null;
const getEachWith = (array_of_objs, setter) =>
    array_of_objs.map((obj) => obj[setter]);
/*
Working test:
    let users = [{ name: "Ayesha", age: 22 }, { name: "Azra", age: 19 }];
    console.log(getEachWith(users, "age")) gets age of each user from the users arr, returning [22, 19]: Array
*/
const digDeep = function(obj, setter) {
  if (isObj(obj)) {return setter in obj
    ? obj[setter]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return digDeep(val, setter);
      }, undefined)}else{ return "invalid parameters."
	}
};
/*
working test:
	let obj = {
		person: {
			name: "Julia Garner",
			age: 33,
		},
		fruit: {
			name: "Apple",
			myth: "An apple a day, keeps the doctor away!"
		}
	}
	console.log(digDeep(obj, "myth")) returns "An apple a day keeps the doctor away"
*/

const deepGet = (obj, ...paths) => {
	if (isObj(obj)) {
		let layer1 = (obj, keys) => keys.reduce((xs, x) => xs?.[x] ?? null, obj);
	    return paths.map(path =>
	      layer1(
	        obj,
	        path
	          .replace(/\[([^\[\]]*)\]/g, '.$1.')
	          .split('.')
	          .filter(t => t !== '')
	      )
	    )
	}
	return null;
};
//example test ran, that was accurate, kinda "rando" if you're new to this line: deepGet(user, 'country_name', 'longitude', 'latitude', 'currency.code') returned an array containing the requested values ACCURATELY
const cloneObj = (obj) => isObj(obj) ? JSON.parse(JSON.stringify(obj)) : null;
//function cloneObj might not be as useful, but who knows when it might come in handy
const mergeObj = (...objects_to_merge) => objects_to_merge.every(obj => isObj(obj) || isFunc(obj)) ? Object.assign({}, ...objects_to_merge) : null;
/*
working test:
    let obj1 = {name: "Ayesha"};
    let obj2 = {age: 22};
    let obj3 = {residence: "Sindh, PK"};
    console.log(mergeObj(obj1, obj2, obj3)) 
	returns {name: "Ayesha", age: 22, residence: "Sindh, PK"}: Object
*/
const objForEach = (obj, fn) => isObj(obj) && isFunc(fn) ? Object.entries(obj).forEach(fn) : null;
/*
working tests:
    let test_obj = {
        name: "jean-Luc PiCard",
        rank: "captain"
    };
    objForEach(test_obj, ([x, y]) => console.log(x + ": " + y));
    prints "name: jean-Luc PiCard" followed by "rank: captain": String
*/
const objSetters = (getSetters = objKeys = getKeys = (obj) => !Array.isArray(obj) && Object.entries(obj).length && typeof obj === "object" ? Object.entries(obj).map(x => x[0]) : "invalid parameters!"), nthKey = (obj, n) => objSetters(obj)?.[n-1];
/*
working test:
  let test_obj = {
    name: "jean-Luc PiCard",
    rank: "captain",
    age: 38,
  };
  I. console.log(objSetters(test_obj));
  returns an iterable of all the setters from the object, in this case, ['name', 'rank', 'age']: Array
  II. console.log(nthKey(test_obj, 2)) returns "rank": String
*/
const arrToObj = (arr) => {
	let x = arr.reduce ? arr.reduce((a, v) => ({
	    ...a,
	    [String(v).split(" ")[0].toLowerCase()]: v
	}), {}) : "invalid parameters!";
	return x
};
//tested, works
const objProps = (objValues = (obj) => typeof obj === "object" && !Array.isArray(obj) && Object.keys(obj).length ? Object.keys(obj).map(key => obj[key]) : "invalid parameters!");
/*
working test:
  let test_obj = {
    name: "jean-Luc PiCard",
    rank: "captain",
    age: 38,
  };
  console.log(objProps(test_obj));
  returns an iterable of all the values from the object, in this case, ['jean-Luc PiCard', 'captain', 38]: Array
*/
const objFromEntr = (arr) => !!arr && Array.isArray(arr) ? Object.fromEntries(arr) : null;
const objToReadable = (obj, seperator=", ") => Object.entries(obj).map(x => x[0][0].toUpperCase() + x[0].toLowerCase().slice(1) + ": " + x[1]).join(seperator);
/*
working test:
    let test_obj = {
        name: "jean-Luc PiCard",
        rank: "captain",
        age: 38
    };
    console.log(objToReadable(test_obj));
    Works just like objForEach in some cases, except...
    returns the object in a one-line readable manner <on its own, without the need of an external function call>, i.e. "Name: jean-Luc PiCard, Rank: captain, Age: 38": String
*/
const objToArr = (deObj = breakObj = objEntries = (obj) => Object.entries(obj).map(x => x[0][0].toUpperCase() + x[0].toLowerCase().slice(1) + ": " + x[1]));
/*
working test:
    let test_obj = {
        name: "jean-Luc PiCard",
        rank: "captain",
        age: 38
    };
    console.log(objToArr(test_obj));
    returns ['Name: jean-Luc PiCard', 'Rank: captain', 'Age: 38']: Array<iterable>
*/
const objToReadonly = obj =>
  new Proxy(obj, {
    get(target, prop) {
      return typeof target[prop] === 'object'
        ? objToReadonly(target[prop])
        : target[prop];
    },
    set() {
      throw new Error("This object is readonly.");
    },
  });
/*
working test
    let obj = {
        name: "maxine",
        age: 57,
        profession: "telesaleswoman"
    };
    obj = objToReadonly(obj);
    obj.age = 51 //throws an error, as it's meant to
*/
const objFind = (findKeys = (obj, condition, condition2) => {
	let filtered = obj.filter(isFunc(condition) ? condition : entry => entry[condition]===condition2);
	return isFunc(condition) ? filtered : filtered?.[0];
});
/*
working test: 
	  let array_like = [
	    { name: "jean-Luc PiCard", rank: "captain", age: 38 },
	    { name: "Ayesha Mehnaaz", rank: "lover", age: 22 },
	    { name: "Azra El-Mekki", rank: "advisor", age: 27 },
	    { name: "Tim Berlin", rank: "advisor", age: 19 },
	    { name: "Isho Konsai", rank: "advisor", age: 17 }
	  ];
	    I:
			way_one, compact: console.log(objFind(array_like, "age", 22));
			way_two, extensive: console.log(objFind(array_like, entry => entry.age === 22));
	    II:
		    console.log(objFind(array_like, entry => entry.age>22));
		    - prints an array of objects with age > 22: Array
			     - with way one, prints the first array, let's just call an item, that gets matched with conditions, i.e. condition1 and condition2, respectively); with way two (second param as a function, and no third param), it prints an array of objects that match the condition: Array
*/

const formToObject = formEl => {
    try {
        formEl = document.querySelector(formEl);
    } catch {
        formEl = formEl;
    }
    if (!(formEl instanceof HTMLElement)) return null;
    Object.fromEntries(new FormData(form));
};
const deleteProps = (obj, ...props) => {
	if (isArr(props[0])) props = props[0].join("+").split(/\W/g);
	if (!isObj(obj) || !isStr(...props)) return null;
	if (isStr(props[0]) && !!String(props[0]).match(/[,&;+/]/)) props = String(props[0]).trim().split(/\W/g);
    for (let p of props) {
    	p = p.trim();
        delete obj[p];
    }
};
/*
✔️ example:
	let obj = {
		    name: "Pinky Paula", 
		    style: "girly" ,
		    profession: "musician"
		};
	deleteProps(obj, "profession+style")
	console.log(obj);
	<{}> returns {name: "Paula"}: Object
*/
const refineObj = (obj, props) => {
	if (!isObj(obj) || !isObj(props)) return null;
	Object.assign(obj, props);
};
/*
✔️example: 
	let obj = {
	    name: "Pinky Paula", 
	    style: "girly" ,
	    profession: "musician"
	};
	refineObj(obj, {style: "Goth, & Girly", age: 24, residence: "Winden, Germany", profession: "beautician"})
	console.log(obj)
	<{}>returns {name: "Pinky Paula", style: "Goth, & Girly", profession: "beautician", age: 24, residence: "Winden, Germany"}: Object
*/





























const q = (el, each=false) => {
	let test = /\'s$/.test(el);
    if (!test) {
        try {
            el = document.querySelector(el);
        } catch {
            el = el;
        }
    } else {
        try {
            el = document.querySelectorAll(el.replace(/\'s$/, ""));
        } catch {
            el = el;
        }
        el = Array.from(el);
    }
    return el;
};
/*tested, works both with single elements, and node lists.
    <test> with non-lists:
        q("body")
        q(".class")
        q("#id")
        //..., each allowed!
    <test> with lists:
        q("ul>li:nth-child(odd)", true) returns a node_list of each odd element
        q("ul>li", true) returns a node_list of each unordered list item
        q("[style], true) returns a node_list of each element that has an "[style]" attribute
        SELECTING EACH[fully reliable!]
		q("button's") returns an array of all the button elements in the document, instead of a single element! Reverse solution would be, the ordinary: q("button")
*/
const qE = (qEach = (el) => {
    try {
        el = document.querySelectorAll(el);
    } catch {
        el = el;
    }
    el = Array.from(el);
    return el;
});
//tested, works
/******* HANDLING EVENTS ******/
const h = (hEv = (evt, fn, el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    if (evt.includes("hover") || /^on/.test(evt)) evt = evt.replace("hover", "mouseover").replace("on", "");
    el["on" + evt] = fn;
});
//tested on an input field, works: h("change", (e) => { navigator?.clipboard?.writeText(e.target.value); console.log("it works"); }, "input[type=text]")
const unh = (unEv = (evt, el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["on" + evt] = () => {}
});
//tested on an element, worked: unh("input", "input")
const trig = (trigEv = (evt, el) => {
	try {
		el = document.querySelector(el)
	} catch {
		el = el
	}
	if (evt.includes("hover") || /^on/.test(evt)) evt = evt.replace("hover", "mouseover").replace("on", "");
	el.dispatchEvent(new CustomEvent(evt));
});

//tested well, seems to be working
/* ____MOUSE EVENTS____ */
const click = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el.click();
};
//tested, works
const hClick = (el, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el.onclick = fn;
};
/*
working test: 
    hClick("body", () => console.log("hi!"))
*/
const unClick = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el.onclick = () => {};
};
//tested, works
const hHover = (el, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el.onmouseover = fn;
};
/*
working test: 
    hHover("body", () => console.log("hi!"))
*/
const unHover = (el=document) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el.onmouseover = () => {};
};
//tested, works
const hDblClick = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["ondblclick"] = fn;
};
//working test: hDblClick("body", () => console.log("you doubled clicked the body element"));
const unDblClick = (el=document.body) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["ondblclick"] = () => {};
};
const hRClick = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["oncontexmenu"] = () => fn;
};
const unRClick = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["oncontexmenu"] = () => {};
};
const hTextCopy = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["oncopy"] = () => fn;
};
const unhTextCopy = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["oncopy"] = () => {};
};
const hTextPaste = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onpaste"] = () => fn;
};
const unhTextPaste = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onpaste"] = () => {};
};
const hTextSelect = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onselect"] = () => fn;
};
const unhTextSelect = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onselect"] = () => {};
};

//working test: unDblClick("body");
const hMouseEnter = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onmouseenter"] = fn;
};
const unMouseEnter = (el=document.body) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onmouseenter"] = () => {};
};
const hMouseLeave = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onmouseleave"] = fn;
};
const unMouseLeave = (el=document.body) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onmouseleave"] = () => {};
};
const hMouseActive = (hElementActive = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onmousedown"] = fn;
});
const unMouseActive = (unhElementActive = (el=document.body) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onmousedown"] = () => {};
});
const hMouseReinactive = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onmouseup"] = fn;
};
const unhMouseReinactive = (el=document.body) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onmouseup"] = () => {};
};
/* ____TOUCH EVENTS____ */
const hTouchstart = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["ontouchstart"] = fn;
};
const unTouchstart = (el=document.body) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["ontouchstart"] = () => {};
};
const hTouchmove = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["ontouchmove"] = fn;
};
const unTouchmove = (el=document.body) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["ontouchmove"] = () => {};
};
const hTouchend = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["ontouchend"] = fn;
};
const unTouchend = (el=document.body) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["ontouchend"] = () => {};
};
/* ____KEYBOARD & INPUT____ */
const hKey = (query, fn, case_sensitive = false, el = document.body) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el.onkeydown = e => {
        let key = e.key;
        let temp = key;
        if (!case_sensitive) key = key.toLowerCase(),
            query = query.toLowerCase();
        if (key == query) {
            if (!fn) console.log(`Key ${temp} was pressed at ${el.toString().split(" ")[1].slice(0, -1)}, do stuff!`);
            else fn();
        }
    }
};
//working test: hKey("b", () => console.log("I loved it!"));
//working test, case sensitive: hKey("b", () => console.log("I loved it!"), true);
const unKey = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el.onkeydown = e => {};
};
const hChange = (el, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onchange"] = fn;
};
//working test: hChange("#some-input-field", () => console.log("Change detected!"))
const unChange = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onchange"] = () => {};
};
//working test, done on some input field: unChange("input[type=text]")
const hInput = (el, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["oninput"] = fn;
};
//tested, works properly
const unInput = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["oninput"] = () => {};
};
//tested, works properly
/* ____FORMS____ */
const hSubmit = (form, fn) => {
	if (!form) {
		form = document.forms[0]
	}
	else {
	    try {
	        form = document.querySelector(form);
	    } catch {
	        form = form;
	    }
	}
    el["onsubmit"] = fn;
};
const uSubmit = (form) => {
    if (!form) {
		form = document.forms[0]
	}
	else {
	    try {
	        form = document.querySelector(form);
	    } catch {
	        form = form;
	    }
	}
    el["onsubmit"] = () => {};
};
//handling scroll & resize
const hScroll = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onscroll"] = fn;
};
const unScroll = (el=document.body) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onscroll"] = () => {};
};
const hScrollStop = callback => {
  let isScrolling;
  window.addEventListener(
    'scroll',
    e => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback;
      }, 150);
    },
    false
  );
};
const hResize = (el=document.body, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onresize"] = fn;
};
const unResize = (el=document.body) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onresize"] = () => {};
};
//handling element focus, and loss
const hFocus = (el, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onfocus"] = fn;
};
const hLoseFocus = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onfocus"] = () => {};
};
const hBlur = (el, fn) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onblur"] = fn;
};
const hLoseBlur = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el["onblur"] = () => {};
};








const inTML = (el, htmlString) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    if (!htmlString) return el.innerHTML;
    else el.innerHTML = htmlString;
};
const ouTML = (el, htmlString) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    if (!htmlString) return el.outerHTML;
    else el.outerHTML = htmlString;
};
const inText = (el, textString) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    if (!textString) return el.innerText;
    else el.innerText = textString;
};
const ouText = (el, textString) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    if (!textString) return el.outerText;
    else el.outerText = textString;
};
const getVal = (el) => {
	try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    return el.value;
};
const htmlInsertBefore = (prependTo = insertBefore = (el, htmlString) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el.insertAdjacentHTML('beforebegin', htmlString);
});
const prepend = (htmlString, el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el.insertAdjacentHTML('beforebegin', htmlString);
};
const appendTo = (el, htmlString) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el.insertAdjacentHTML('beforeend', htmlString);
};
const append = (htmlString, el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el.insertAdjacentHTML('beforeend', htmlString);
};
const htmlInsertAfter = (insertAfter = (el, htmlString) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el.insertAdjacentHTML('afterend', htmlString);
});






//Messing With Nodes
//:::parents & ancestors
const getParent = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    return el.parentNode;
}; //tested
const getGrandParent = (getGrandFather = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    return el.parentNode.parentNode;
}); //tested
const getAncestor = (ancestor = (el, query) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    if (window.Element && !Element.prototype.closest) {
        Element.prototype.closest =
            function(s) {
                let matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i,
                    el = this;
                do {
                    i = matches.length;
                    while (--i >= 0 && matches.item(i) !== el) {};
                } while ((i < 0) && (el = el.parentElement));
                return el;
            };
        }
        let name_of_the_ancestor = query;
        return el.closest(name_of_the_ancestor);
});
const getAncestors = (ancestors = (el) => {
	try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let ancestors = [];
    while (el) {
        ancestors.unshift(el);
        el = el.parentNode;
    }
    return ancestors.slice(0, -1);
});
//:::children
const hasChildren = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    return el.children.length>0 && !!el.firstElementChild && !!el.hasChildNodes()
}; //tested, totally works!
const isEmptyEl = (el) => {
	try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    return !el.children.length && !el.firstElementChild && !el.hasChildNodes();
};
const nthChild = (el, number) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let res = (!isNaN(number) ? el.children[number-1] : Array.from(el.children)) || {};
    return res;
};
//tested <note: returns an iterable NodeList --- makes it easier to browse through children, for example, to get the second child, try: nthChild(el)[1]>
const firstChild = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let res = el.firstElementChild;
    return res || {};
};
const secondChild = (el, index = 1) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    return el.children[index] || {};
};
const secondLastChild = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let res = el.children[el.children.length - 2];
    return res || {};
};
const lastChild = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let res = el.lastElementChild;
    return res || {};
};
//:::siblings

const prevSibling = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    return el.previousElementSibling;
};
const nextSibling = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    return el.nextElementSibling || {};
};
const nthSibling = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let res = Array.from(el.parentNode.children).filter(child => child !== el);
    return res || {};
};
//returns an array of sibling elements of the element selection. Use case (gets the 4th sibling of the target, in this case, the element with id="left-sidebar"): getEachSibling(document.querySelector("#left-sidebar"))[3]
const firstSibling = (el, index = 0) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let children = [...el.parentNode.children];
    let res = children.filter(child => child !== el)[index];
    return res || {};
};
const secondSibling = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let children = [...el.parentNode.children];
    let res = children.filter(child => child !== el)[1];
    return res || {};
};
const secondLastSibling = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let children = [...el.parentNode.children]
    let res = children.filter(child => child !== el)[children.length-3];
    return res || {};
};
const lastSibling = (el, i) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let children = [...el.parentNode.children];
    let res = children.filter(child => child !== el)[children.length-(i+1)];
    return res || {};
};
const removeNthSibling = (el, n) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let parent = el.parentNode;
    let i = n > 0 ? n-1 : parent.children.length+n;
    parent.removeChild(parent.children[i]) || {};
};
//✔️
const clearSiblings = (makeOnlyChild = (el, n) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let parent = el.parentNode;
    while (parent.children.length || parent.hasChildNodes() || parent.lastChild) parent.lastChild.remove()
    parent.appendChild(el);
});
//✔️
//:::aunts & cousins
const getNthAunt = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let mom = el.parentNode;
    let res = [...el.parentNode.parentNode.children].filter(aunt => aunt !== mom);
    return res || {};
};
//✔️returns an array of aunt elements of the element selection
const nthPrevCousin = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let res = el.parentNode.previousElementSibling.children;
    return res || {};
};
const nthNextCousin = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let res = el.parentNode.nextElementSibling.children;
    return res || {};
};
//:::grand children
const firstGrandChild = (el, child_index = 0, grand_index = 0) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let res = el.children[child_index].children[grand_index];
    return res || {};
};
//returns the first grandChild of an element
const lastGrandChild = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let childInd = el.children[el.children.length - 1];
    let grandInd = childInd.children[childInd.children.length - 1];
    let res = grandInd || {};
    return res;
};




// _______________messing with family, removing children________________
const newChild = (content, mode="append", evt, _class, _id, _style, renderdelay = 0, el = document.body) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    //at = isElmArr ? at[0] : (isEl ? at : null);
    if (el instanceof HTMLElement) {
	    let x = document.createElement("div");
	    x.innerHTML = content;
	    x = x.firstElementChild;
	    if (_class && typeof _class==="string") {
	        _class = _class.replace(/^\./i, "");
	        _class = _class.split(/[,.|;\s\+]/g);
	        x.classList.add(..._class);
	    }
	    if (_id && typeof _id==="string") {
	        _id = _id.replace(/^#/i, "");
	        _id = _id.split("#").join(" ");
	        x.setAttribute("id", _id);
	    }
	    if (_style && ["string", "object"].includes(typeof _style)) {
	        let isAnObject = typeof _style == "object" || _style instanceof Object;
	        isAnObject ? Object.assign(x.style, _style) : x.style = _style;
	    }
	    
	    let keys = Object.keys({...evt}).map(key => key.toLowerCase().replace("hover", "mouseover").replace("on", ""));
	    let values = Object.values({...evt});
	    //console.log(keys)
		//console.log(values)
	    keys.forEach((key, i) => {
	    	values.forEach(value => {
				x["on" + keys[i]] = values[i];
			});
		});
		prepend = (mode === "prepend" || mode === true) && (!!Element.prototype.prepend && !!el.prepend);
	    setTimeout(() => !prepend ? el.appendChild(x) : el.prepend(x), !isNaN(renderdelay) ? (parseInt(renderdelay)<=100 ? parseInt(renderdelay) * 1000 : renderdelay): 0);
		this.el = x;
		return self;
	}
};
//newChild("<div><p>hi there luv</p></div>", false, {hover: () => console.log("hovered"), click: () => console.log("clicked")}, ".tyga", "f", "color:red")
//newChild("<div><p>hi there luv</p></div>", false, {hover: () => console.log("hovered"), click: () => console.log("clicked")}, ".tyga", "f", {color:"red"}, 6)
const setHtml = (updom = mount2dom = (el, new_html, evt, new_styles, new_classes, new_id, _in=0) => {
	try {
		el = document.querySelector(el);
	} catch {
		el = el;
	}
	setTimeout(() => {
		if (typeof new_classes==="string") {
			new_classes = new_classes.replace(/^\./i, "");
		    new_classes = new_classes.split(/[,.|;\s\+]/g);
		    el.classList.add(...new_classes);
    	}
	    if (typeof new_id==="string") {
		    new_id = new_id.replace(/^#/i, "");
		    new_id = new_id.split("#").join(" ");
		    el.setAttribute("id", new_id);
	    }
    	if (new_styles && ["string", "object"].includes(typeof new_styles)) {
	        let isAnObject = typeof new_styles === "object" || new_styles instanceof Object;
	        isAnObject ? Object.assign(el.style, new_styles) : el.style = new_styles;
	    }
    
	    let keys = Object.keys({...evt}).map(key => key.toLowerCase().replace("hover", "mouseover").replace("on", ""));
	    let values = Object.values({...evt});
	    //console.log(keys)
		//console.log(values)
	    el.innerHTML = new_html;
	    keys.forEach((key, i) => {
	    	values.forEach(value => {
				el["firstElementChild"]["on" + keys[i]] = values[i];
			});
		});
		//prepend = (mode === "prepend" || mode === true) && !!Element.prototype.prepend;
    }, _in);
});

const moveEl = (parent, toReplaceWith) => {
    try {
        parent = document.querySelector(parent);
    } catch {
        parent = parent;
    }
    try {
        toReplaceWith = document.querySelector(toReplaceWith);
    } catch {
        toReplaceWith = toReplaceWith;
    }
    let [oldParent, newParent] = [parent, toReplaceWith];
    while (oldParent.childNodes.length > 0) {
        newParent.appendChild(oldParent.childNodes[0]);
        oldParent.removeChild(oldParent.childNodes[0]);
    }
}
const replaceChild = (parent, toReplaceWith, index=1) => {
    try {
        parent = document.querySelector(parent);
    } catch {
        parent = parent;
    }
    try {
        toReplaceWith = document.querySelector(toReplaceWith);
    } catch {
        toReplaceWith = toReplaceWith;
    }
	!!Element.prototype.replaceWith ? parent.children[index-1].replaceWith(toReplaceWith) : "";
};





const replaceElement = (el, _with) => {
	try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    _with.nodeType ? _with.remove() : "";
    el.outerHTML = _with.innerHTML ?? _with;
};
//✔️ passed some tests: replaceElement("#reset", "<div style='color:yellow'>this here..., it was replaced!!</div>")
const replaceNthChild = (el, _with, n) => {
	try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    _with.nodeType ? _with.remove() : "";
    el.children[n-1].outerHTML = _with.innerHTML ?? _with;
};
const replaceFirstChild = (el, _with, n=1) => {
	try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    _with.nodeType ? _with.remove() : "";
    el.children[n-1].outerHTML = _with.innerHTML ?? _with;
};
const replaceSecondChild = (el, _with, n=2) => {
	try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    _with.nodeType ? _with.remove() : "";
    el.children[n-1].outerHTML = _with.innerHTML ?? _with;
};
const replaceSecondLastChild = (el, _with) => {
	try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    try {
        _with = document.querySelector(_with);
    } catch {
        _with = _with;
    }
    if (!el||!_with||!(el instanceof HTMLElement)||!(_with instanceof HTMLElement)) return null;
    _with.nodeType ? _with.remove() : "";
    el.children[2-n].outerHTML = _with.innerHTML ?? _with;
};
const replaceLastChild = (el, _with) => {
	try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    try {
        _with = document.querySelector(_with);
    } catch {
        _with = _with;
    }
    if (!el||!_with||!(el instanceof HTMLElement)||!(_with instanceof HTMLElement)) return null;
    if (_with && _with instanceof HTMLElement) _with.remove();
    if (el && el instanceof HTMLElement) el.lastElementChild.outerHTML = _with.innerHTML ?? _with;
};

const replaceParent = (el, _with) => {
	try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    try {
        _with = document.querySelector(_with);
    } catch {
        _with = _with;
    }
    if(!el||!_with||!(el instanceof HTMLElement) || !(_with instanceof HTMLElement)) return null;
    el.remove();
    _with.appendChild(el);
    /*
    el.parentNode.parentNode.replaceChild(el.parentNode, _with);
    */
};













/*
test:
      setTML("body", "<p>This is some JavaScript hook, with styles!</p>", "color: green");
*/



const removeChildren = (clearChildren = emptyChildren = makeChildrenFree = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    while (el.hasChildNodes() || !!el.firstChild) el.removeChild(el.lastChild);
});
//tested, works wonders
const removeNthChild = (el, n) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    let tests = !!el && !!n && el instanceof HTMLElement && typeof n==="number" && (!!el.children.length || el.hasChildNodes() | !!el.firstChild);
    tests ? el.removeChild(el.children[n-1]) : "";
};
//tested, works
const removeFirstChild = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    el.removeChild(el.firstElementChild);
};
const removeSecondChild = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    if (el instanceof HTMLElement ? el.children.length : null) el.removeChild(el.children[1]);
};
const removeSecondlastChild = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    if (el instanceof HTMLElement ? el.children.length : null) el.removeChild(el.children[el.children.length - 2]);
};
const removeLastChild = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    if (el instanceof HTMLElement ? el.children.length : null) el.lastElementChild.remove();
};
const deleteEl = (removeEl = unmount = (el) => {
    try {
        el = document.querySelector(el);
    } catch {
        el = el;
    }
    if (el instanceof HTMLElement) el.remove();
});
//tested, works
const deleteEach = (removeEach = umountEach = (el) => {
    try {
        el = document.querySelectorAll(el);
    } catch {
        el = el;
    }
    if (el instanceof HTMLElement ? el.children.length : null) Array.from(el).forEach(el => el.remove());
});
//tested, works: removeEach("style") removes all the <style> elements from the document, might work with anything
const show = (el) => {
	try {
		el = document.querySelector(el);
	} catch {
		el = el;
	}
	if(!(el instanceof HTMLElement)) return null;
	el.style.visibility = "visible";
	el.classList.remove("hidden");
	el.classList.add("restored");
};
const hide = (el, when) => {
	try {
		el = document.querySelector(el);
	} catch {
		el = el;
	}
	if(!(el instanceof HTMLElement)||(typeof when !== number||!isFinite(when))) return null;
	setTimeout(() => {
        el.style.display = "none";
    }, when);
};
const hideEach = (hideAll = (list_of_elms, when) => {
	try {
		list_of_elms = document.querySelectorAll(list_of_elms);
	} catch {
		list_of_elms = list_of_elms;
	}
	if(!(el instanceof HTMLElement)||(typeof when !== number||!isFinite(when))) return null;
	setTimeout(() => {
        list_of_elms.forEach((el) => el.style.display="none");
    }, when);
});
const unhide = (undelete = (el, when) => {
	try {
		el = document.querySelector(el);
	} catch {
		el = el;
	}
	if(!(el instanceof HTMLElement)||(typeof when !== number||!isFinite(when))) return null;
	setTimeout(() => {
        el.style.display = "block";
        el.classList.add("restored");
    }, when);
});
const unhideEach = (unhideAll = (list_of_elms, when) => {
	try {
		list_of_elms = document.querySelectorAll(list_of_elms);
	} catch {
		list_of_elms = list_of_elms;
	}
	setTimeout(() => {
        list_of_elms.forEach((el) => {
            el.style.display="block";
            el.classList.add("restored");
        });
    }, when);
});
const visible = inViewport = (el) => {
  try {
    el=document.querySelector(el);
  } catch {
    el=el;
  }
  let elementStyle = window.getComputedStyle(el);
	if (elementStyle.height == '0px' || elementStyle.display == 'none' || elementStyle.opacity == '0' || elementStyle.visibility == 'hidden' || elementStyle.clipPath == 'circle(0px at 50% 50%)' || elementStyle.transform == 'scale(0)' || el.hasAttribute('hidden')) {
		return false;
	}
  let { top, left, bottom, right } = el.getBoundingClientRect();
  let { innerHeight, innerWidth } = window;
  return ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth));
};
const hidden = (invisible = (el) => {
  try {
    el=document.querySelector(el);
  } catch {
    el=el;
  }
  let elementStyle = window.getComputedStyle(el);
	if (elementStyle.height == '0px' || elementStyle.display == 'none' || elementStyle.opacity == '0' || elementStyle.visibility == 'hidden' || elementStyle.clipPath == 'circle(0px at 50% 50%)' || elementStyle.transform == 'scale(0)' || el.hasAttribute('hidden')) {
		return true;
	}
  let { top, left, bottom, right } = el.getBoundingClientRect();
  let { innerHeight, innerWidth } = window;
  return !(((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)));
});

































let keyHandler = {
  get: function(obj, prop){
    let propName = String(prop).toLowerCase();
    return obj[propName];
  },
  set: function(obj, prop, value){
    let propName = prop.toLowerCase();
    obj[propName] = value;
  }
};

let tolc = (obj) => {
    Object.keys(obj).forEach(key => {
        let k = key.toLowerCase();
        if (k !== key) {
            obj[k] = obj[key];
            delete obj[key];
        }
    });
    return (obj);
};
__$ = tolc(__$);
__$ = new Proxy(__$, keyHandler);
