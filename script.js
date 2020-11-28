function Updateclock() {
	var time = new Date();
	var hr = time.getHours() % 12 ? time.getHours() % 12 : 12;
	var min = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
	var AM = time.getHours() < 12 ? "AM" : "PM";
	var clock = document.getElementsByClassName("clock")[0];
	clock.getElementsByClassName("hr")[0].children[0].innerHTML = hr;
	clock.getElementsByClassName("colon")[0].classList.toggle("blink");
	clock.getElementsByClassName("min")[0].children[0].innerHTML = min;
	clock.getElementsByClassName("AM")[0].children[0].innerHTML = AM;
	setTimeout(Updateclock, 1000);
}

Updateclock();
