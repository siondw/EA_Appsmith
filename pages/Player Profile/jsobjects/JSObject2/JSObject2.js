export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		return Math.floor(Math.random() * 100) + 1;
	},
	 getColorFromValue(value) {
   	if (value >= 80 && value <= 100) {
            return '#008000'; // Hex code for green
        } else if (value >= 60 && value < 80) {
            return '#FFFF00'; // Hex code for yellow
        } else if (value >= 40 && value < 60) {
            return '#FFA500'; // Hex code for orange
        } else {
            return '#FF0000'; // Hex code for red
        }
}

}