export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
	},
   myFun2 () {
		return Math.floor(Math.random() * 100) + 1;
	},
	
	storeValue() {
		storeValue('progressValue', Math.floor(Math.random() * 100) + 1);
		storeValue('benchValue', Math.floor(Math.random() * 100) + 1);
		storeValue('shuttleValue', Math.floor(Math.random() * 100) + 1);
		
	}
	
}