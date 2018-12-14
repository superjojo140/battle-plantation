class Story {

	actions: any;
	currentEventId: number;
	currentAction: any;
	health: number;
	messageBox: JQuery<HTMLElement>;
	iconBox: JQuery<HTMLElement>;
	buttonsBox: JQuery<HTMLElement>;


	constructor(storyData, htmlContainerId) {
		this.actions = storyData.actions;
		this.currentEventId = 0;
		this.currentAction = this.actions[this.currentEventId];
		this.health = storyData.information.health;


		this.messageBox = $("<div id='messageBox'></div>");
		$("#" + htmlContainerId).html("");
		$("#" + htmlContainerId).append(this.messageBox);

		this.iconBox = $("<img id='iconBox' height='100%'>");
		$("#" + htmlContainerId).prepend(this.iconBox);

		this.buttonsBox = $("<div id='buttonsBox'></div>");
		$("#" + htmlContainerId).append(this.buttonsBox);



		this.showAction();
	}

	nextAction() {
		this.currentEventId = this.currentAction.nextEvent;
		this.currentAction = this.actions[this.currentEventId];
		this.showAction();
	}

	showAction() {

		this.buttonsBox.html("");
		this.messageBox.html("");

		switch (this.currentAction.type) {
			case "dialog":
				this.messageBox.html(this.currentAction.message);
				this.iconBox.attr("src", "data/assets/" + this.currentAction.icon + ".png");
				this.buttonsBox.html("<button class='nextButton'>Weiter</button>");
				let myStory = this;
				$(".nextButton").click(() => myStory.nextAction());
				break;
			case "decision":
				this.buttonsBox.html("");
				this.messageBox.html(this.currentAction.message);
				this.iconBox.attr("src", "data/assets/" + this.currentAction.icon + ".png");
				for (let i = 0; i < this.currentAction.options.length; i++) {
					let currentButton = $(`<button class='decisionButton' data-decision-id='${i}'>${this.currentAction.options[i].message}</button>`);
					this.buttonsBox.append(currentButton);
				}
				this.registerButtonEvents();
				break;
			case "health":
				if (this.currentAction.change == "absolute") {
					this.setHealth(this.currentAction.value);
				} else if (this.currentAction.change == "relative") {
					this.setHealthRelative(this.currentAction.value);
				} else {
					this.parsingError(`Invalid Health change. Operation was ${this.currentAction.change}`);
				}
				this.nextAction();
				break;
			default:
				this.parsingError("Not known Event: " + this.currentAction.type);
		}

	}

	registerButtonEvents() {
		let myStory = this;
		$(".decisionButton").click(function () {
			let decisionId = $(this).attr("data-decision-id");
			let nextEvent = myStory.currentAction.options[decisionId].nextEvent;
			myStory.currentAction = myStory.actions[nextEvent];
			myStory.showAction();
		});
	}

	setHealth(health) {
		this.health = Math.min(100, Math.max(0, health));
		$(".healthBar").css("stroke-dasharray", `${this.health} 100`);
		return health;
	}

	setHealthRelative(health) {
		return this.setHealth(this.health + health);
	}

	parsingError(message, eventId?) {
		if (!eventId) {
			eventId = this.currentEventId;
		}
		console.log(`%c[Story Parsing] ${message}   %cEvent id: ${eventId}`, 'color: #bf1d00',"color: #0056ba");
	}

}
