<template>

	<div id="bot" class="chat-bot">

		<header class="header-content">
			<span class="close-bot"></span>
			<img class="logo" src="../one.png" alt="Логотип">
			<span class="name-bots">Frog-Bot</span>
			<p class="bio">NO HORNY.</p>
			<p class="bio">only memes! & math</p>
		</header>

		<main class="main-content">
			<div class="main-content__message-area" id="main-content">

				<div
						class="main-content__message-area-item"
						v-for="(item, index) in messages" :key="index"
						:class="[{'message-bot': item.type === 'bot'},{'message-human': item.type === 'human'}]"
				>
					<div class="main-content__message-area-message" v-text="item.message"/>

				</div>
			</div>

			<button class="function_button help" @click="addMessages(commandsBot, 'bot') ">/help</button>
			<button class="function_button meme">/meme</button>
		</main>

		<footer class="footer-content">
			<div class="Enter-Window">
				<textarea class="input-style" maxlength="200" placeholder="Введите сообщение" v-model="userMessage" v-on:keyup.enter="addMessages(userMessage, 'human')"></textarea>
				<button class="input-button" type="button" @click="addMessages(userMessage, 'human')"></button>
			</div>

		</footer>

	</div>

</template>

<script>
import { actionChatController } from "./utils/actionChatController";

import { mathMethods } from "./utils/actionChatLibs";

export default {
	name: "bot",
	data() {
		return {
			userMessage: "",
			messages: [],
			botMessage: [],
			commandsBot: "Лягушонок может: складывать (+), умножать (*), делить (/), вычитать (-). ",
			blockBot: "Привет! Я фрог-бот:) Напиши мне команду",
			helloMessage: ["Привет", "Привет\n", "hello", "привет", "привет\n", "hello\n", "привет, бот\n", "привет, бот"],
		};
	},
	methods: {
		messageHandler(message) {
			let result = null;
			const splitArr = message.split(" ");
			const currActionObj = this.getObjByTargetWord(splitArr, actionChatController);
			if (!!currActionObj) {
				const methodParams = splitArr.filter(currActionObj.conditionFunc);
				result = mathMethods[currActionObj.actionMethod](methodParams);
			}
			this.addMessages(result, "bot");
			return result
		},
		getObjByTargetWord(wordArr, targetArr) {
			const length = targetArr.length;
			let i = 0;
			for (i; i < length; i++) {
				const crossArr = targetArr[i].matchWordsArray.filter(i => wordArr.includes(i));
				if (crossArr.length) {
					return targetArr[i];
				}
			}
			return null;
		},
		sum(arr) {
			const reducer = (accumulator, currentValue) => +accumulator + +currentValue;
			return arr.reduce(reducer);
		},
		addMessages(message, type) {
			if (!!message) {
				this.messages.push({message, type});
				this.clearMessageArea();
			}
			if (this.helloMessage.indexOf(message) !== -1) {
				this.addMessages(this.blockBot, "bot");
			}
			if (type === "human") {
				this.messageHandler(message);
			}
		},
		clearMessageArea() {
			this.userMessage = "";
		},
	},
	mounted() {
		document.querySelector("textarea").addEventListener("input", function(e) {
			if (e.target.style.height <= 100 || e.target.value.length <= 100) {
				e.target.style.height = "1px";
				e.target.style.height = e.target.scrollHeight + 10 + "px";
			}

			if (e.target.value.length == 0) {
				e.target.style.height = "25px";
			}
		});
	},
};
</script>

<style lang="scss">
html {
	font-family: system-ui, serif;
}

.chat-bot {
	/*background-color: #7c82ca;*/
	margin: 0 auto;
	background-color: #fff;
	height: 700px;
	width: 450px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
	-23px 0 20px -23px rgba(0, 0, 0, .8),
	23px 0 20px -23px rgba(0, 0, 0, .8),
	0 0 40px rgba(0, 0, 0, .1) inset;
	color: white;
}

.header-content {
	background-color: #7c82ca;
	height: 100px;
}

.logo {
	margin: 8px;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border: aliceblue solid 2px;
	float: left;
}

.bio {
	color: #ffffff;
	font-size: 14px;
	margin-top: -0.1px;
	margin-left: 45px;
}

.main-content {
	background: no-repeat url(../back.png);
	background-size: 450px 500px;
	height: 500px;

	&__message-area {
		display: flex;
		flex: 1 0;
		flex-direction: column;
		overflow-y: auto;
		overflow-x: hidden;
		width: 100%;
		max-height: 100%;
		height: 100%;

		&-item {
			display: flex;
			justify-content: center;
			height: auto;
			font-weight: bold;
			width: 50%;
			padding: 0.5rem 0.75rem;
			flex-shrink: 0;
			margin-bottom: 8px;
			vertical-align: center;
			text-align: center;
			right: 0;

		}

		.message-human {
			color: rgba(245, 245, 245, 1);
			background: radial-gradient(circle, rgba(0, 194, 10, .7), rgba(0, 181, 9, .7));
			margin-left: 175px;
			border-radius: 30px;
			padding: 0.5rem 0.75rem;
			-webkit-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.2) inset;
			-moz-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.2) inset;
			box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.2) inset;
		}

		.message-bot {
			color: rgba(245, 245, 245, 1);
			background: radial-gradient(circle, rgba(148, 147, 143, .7), rgba(122, 122, 118, .7));
			border-radius: 30px;
			margin-top: 3px;
			margin-left: 15px;
			padding: 0.5rem 0.75rem;
			-webkit-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
			-moz-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
			box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
		}
	}
}


.main-content__message-area-message {
	height: auto;
	width: 90%;
	word-break: break-word;
}

.main-content__message-area-message {
	height: auto;
	width: 90%;
	word-break: break-word;
}

.footer-content {
	background-color: #7c82ca;
	height: auto;
	padding-bottom: 20px;
}

.name-bots {
	color: #ffffff;
	font-size: 25px;
	font-weight: bold;
	padding-left: 95px;
}

.close-bot {
	display: flex;
}

.input-style::-webkit-input-placeholder {
	opacity: 1;
	transition: opacity 0.3s ease;
}

.input-style::-moz-placeholder {
	opacity: 1;
	transition: opacity 0.3s ease;
}

.input-style:-moz-placeholder {
	opacity: 1;
	transition: opacity 0.3s ease;
}

.input-style:-ms-input-placeholder {
	opacity: 1;
	transition: opacity 0.3s ease;
}

.input-style:focus::-webkit-input-placeholder {
	opacity: 0;
	transition: opacity 0.3s ease;
}

.input-style:focus::-moz-placeholder {
	opacity: 0;
	transition: opacity 0.3s ease;
}

.input-style:focus:-moz-placeholder {
	opacity: 0;
	transition: opacity 0.3s ease;
}

.input-style:focus:-ms-input-placeholder {
	opacity: 0;
	transition: opacity 0.3s ease;
}

.Enter-Window {
	display: flex;
	justify-content: center;
}

.input-button {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-top: 15px;
	margin-right: 10px;
}

.input-style {
	text-decoration: none;
	resize: none;
	border-radius: 15px;
	width: 300px;
	height: 25px;
	margin-top: 30px;
	margin-bottom: 15px;
	outline: none;
	padding-left: 15px;
	padding-top: 10px;
	padding-right: 10px;
	overflow: auto;
}

.input-style::-webkit-input-placeholder {
	opacity: 1;
	transition: opacity 0.3s ease;
}

.input-style::-moz-placeholder {
	opacity: 1;
	transition: opacity 0.3s ease;
}

.input-style:-moz-placeholder {
	opacity: 1;
	transition: opacity 0.3s ease;
}

.input-style:-ms-input-placeholder {
	opacity: 1;
	transition: opacity 0.3s ease;
}

.input-style:focus::-webkit-input-placeholder {
	opacity: 0;
	transition: opacity 0.3s ease;
}

.input-style:focus::-moz-placeholder {
	opacity: 0;
	transition: opacity 0.3s ease;
}

.input-style:focus:-moz-placeholder {
	opacity: 0;
	transition: opacity 0.3s ease;
}

.input-style:focus:-ms-input-placeholder {
	opacity: 0;
	transition: opacity 0.3s ease;
}

.Enter-Window {
	display: flex;
	justify-content: center;
}

.input-button {
	cursor: pointer;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	border: 0;
	margin-top: 24px;
	outline: none;
	margin-left: 15px;
	background: url("../frog.png") no-repeat center;
	background-size: cover;
}

.input-button:hover {
	width: 50px;
	height: 50px;
	border-radius: 50px;
	border: 0;
	margin-top: 24px;
	outline: none;
	margin-left: 15px;
	background: url("../frog.png") no-repeat center;
	background-size: cover;
	box-shadow: 0px -1px 20px -10px #000000 inset;
}

.input-button:active {
	width: 50px;
	height: 50px;
	border-radius: 50px;
	border: 0;
	margin-top: 24px;
	outline: none;
	margin-left: 15px;
	background: url("../frog.png") no-repeat center;
	background-size: cover;
	box-shadow: 0px -1px 20px -1px #000000 inset;
}

.function_button {
	width: 70px;
	background: #ffffff;
	color: #000000;
	margin-top: 5px;
	margin-left: 30px;
	font-weight: bold;
	border-radius: 30px;
	border: aliceblue solid 2px;
}

.input-button {

	width: 50px;
	height: 50px;
	border-radius: 50px;
	border: 0;
	margin-top: 30px;
	outline: none;
	margin-left: 15px;
	background: url("../frog.png") no-repeat center;
	background-size: cover;
	cursor: pointer;
}

.function_button:hover {
	cursor: pointer;
	width: 70px;
	background: #ffffff;
	color: #000000;
	margin-left: 30px;
	margin-bottom: 5px;
	font-weight: bold;
	border-radius: 30px;
	border: aliceblue solid 2px;
	box-shadow: 0px -1px 20px -10px #000000 inset;
}

.function_button:active {
	width: 70px;
	background: #ffffff;
	color: #000000;
	margin-left: 30px;
	margin-bottom: 5px;
	font-weight: bold;
	border-radius: 30px;
	border: aliceblue solid 2px;
	box-shadow: 0px -1px 20px -5px #000000 inset;
}

::-webkit-scrollbar-button {
	//background-image: url('');
	background-repeat: no-repeat;
	width: 6px;
	height: 0px
}

::-webkit-scrollbar-track {
	background-color: #7c82ca;
	box-shadow: 0px 0px 3px #7c82ca inset;
}

::-webkit-scrollbar-thumb {
	-webkit-border-radius: 5px;
	border-radius: 5px;
	background-color: #5ec66d;
	box-shadow: 0px 1px 1px #7c82ca inset;
	background-image: url('https://yraaa.ru/_pu/24/59610063.png');
	background-position: center;
	background-repeat: no-repeat;
}

::-webkit-resizer {
	background-image: url('');
	background-repeat: no-repeat;
	width: 7px;
	height: 0px
}

::-webkit-scrollbar {
	width: 11px;
}
</style>