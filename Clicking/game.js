// =============================================================================
// MDT312 Assignment 7  - Square Game
// Modern JavaScript: DOM, Event, Timer
// =============================================================================

window.onload = pageLoad;

// Global timer reference เพื่อให้สามารถควบคุมและเคลียร์สถานะได้ถูกต้อง
let timer = null;

function pageLoad() {
	// 1. ผูกเหตุการณ์คลิกปุ่ม Start ด้วย const
	const startBtn = document.getElementById("start");
	startBtn.onclick = startGame;

	// 2. ใช้ Event Delegation
	// ผูก event ไว้ที่กล่องแม่ #layer เพียงจุดเดียว
	const gameLayer = document.getElementById("layer");

	gameLayer.onclick = function(event) {
		// ตรวจสอบว่า element ที่ถูกคลิกเป็น .square หรือไม่
		
		if (event.target.classList.contains("square")) {
			event.target.remove();
		}
	};
}

function startGame() {
	alert("Ready");

	clearScreen(); // ล้างกล่องเก่าออกก่อนเริ่มรอบใหม่
	addBox();
	timeStart();
}

function timeStart() {
	const TIMER_TICK = 1000;

	// เคลียร์ timer เดิมก่อนเริ่มนับใหม่
	if (timer !== null) {
		clearInterval(timer);
		timer = null;
	}

	const min = 0.1; // 0.5 minute = 30 seconds
	let second = min * 60;

	const clockDisplay = document.getElementById("clock");
	clockDisplay.textContent = second;

	// setting timer using setInterval function
	timer = setInterval(timeCount, TIMER_TICK);

	function timeCount() {
		const allbox = document.querySelectorAll("#layer div");

		// 1. ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่
		if (allbox.length === 0 && second > 0) {
			clearInterval(timer);
			timer = null;
			alert("You win!");
			clockDisplay.textContent = "30";
			return;
		}

	

		// 2. ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่
		if (second <= 0) {
			clearInterval(timer);
			timer = null;

			
			alert("You lose!");
			clockDisplay.textContent = "30";
			clearScreen();
			return;
		}
		// ถ้ากล่องยังไม่หมดและเวลายังไม่หมด เวลาจะค่อยๆลดต่อไป
		second--;
		clockDisplay.textContent = second;
	}
}

function addBox() {
	// จำนวนกล่องจาก input
	const numbox = parseInt(document.getElementById("numbox").value) || 0;
	const gameLayer = document.getElementById("layer");
	const colorDrop = document.getElementById("color").value;

	for (let i = 1; i <= numbox; i++) {
		const tempbox = document.createElement("div");

		tempbox.className = "square " + colorDrop;
		tempbox.id = "box" + i;

		
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";

		// add element to HTML node
		gameLayer.appendChild(tempbox);
	}
}

function clearScreen() {
	// ทำการลบ node ของกล่องทั้งหมดออกจากหน้าจอ
	const allbox = document.querySelectorAll("#layer div");

	allbox.forEach(function(box) {
		box.remove();
	});
}


// // =============================================================================
// // MDT312 Assignment 7  - Square Game
// // Modern JavaScript: DOM, Event, Timer
// // =============================================================================

// window.onload = pageLoad;

// // Global timer reference เพื่อให้สามารถควบคุมและเคลียร์สถานะได้ถูกต้อง
// let timer = null;

// function pageLoad(){
// 	// 1. ผูกเหตุการณ์คลิกปุ่ม Start ด้วย const
// 	const startBtn = document.getElementById("start");
	

// 	// 2. ใช้ Event Delegation (สไลด์หน้า 50–52):
// 	// ผูก event ไว้ที่กล่องแม่ #layer เพียงจุดเดียว
// 	// เมื่อมีการคลิกเกิดขึ้น ให้ใช้ event.target ตรวจสอบว่าเป็นกล่อง .square หรือไม่
	
	
// 	const gameLayer = document.getElementById("layer");
// 	gameLayer.onclick = function(event) {
		

// 	};
// }

// function startGame(){
// 	alert("Ready");
// 	clearScreen(); // ล้างกล่องเก่าออกก่อนเริ่มรอบใหม่
// 	addBox();
// 	timeStart();
// }

// function timeStart(){
// 	const TIMER_TICK = 1000;
// 	// เคลียร์ timer เดิมก่อนเริ่มนับใหม่ เพื่อป้องกันการนับเวลาเร่งความเร็วเมื่อกด Start ซ้ำ
// 	if (timer !== null) {
// 		clearInterval(timer);
// 		timer = null;
// 	}

// 	const min = 0.5; // 0.5 minute = 30 seconds
// 	let second = min * 60; 
// 	const clockDisplay = document.getElementById('clock');
// 	clockDisplay.textContent = second;
	
// 	// setting timer using setInterval function (สไลด์หน้า 12)
// 	timer = setInterval(timeCount, TIMER_TICK);
	
// 	function timeCount(){
// 		const allbox = document.querySelectorAll("#layer div");
		
// 		// จัดการเกี่ยวกับเวลาตามเงื่อนไขโจทย์:
// 		// 1. ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		

// 		// 2. ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		
// 		// 3. ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ
		
// 	}
// }

// function addBox(){
// 	// สร้างกล่องตาม input ที่เราใส่
// 	const numbox = parseInt(document.getElementById("numbox").value) || 0;
// 	const gameLayer = 
// 	const colorDrop = 
	
// 	for (){
// 		const tempbox = document.createElement("div"); 
// 		tempbox.className = "square " + colorDrop;   
// 		tempbox.id = "box" + i;
// 		tempbox.style.left = Math.random() * (500 - 25) + "px";
// 		tempbox.style.top = Math.random() * (500 - 25) + "px";
		
// 		// add element to HTML node 
		

		
// 	}
// }


// function clearScreen(){
// 	// ทำการลบ node ของกล่องทั้งหมด ออกจากหน้าจอ
// 	const allbox = document.querySelectorAll("#layer div"); // สไลด์หน้า 29

	
// }
